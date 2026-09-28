import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const HOST = "alejandrosanabria.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY = "f8aeea0db56050af8a71d19eedd7a3a6";
const MAX_ATTEMPTS = 3;
const MAX_RETRY_AFTER_SECONDS = 120;
const REQUEST_TIMEOUT_MS = 10_000;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const keyFile = path.join(publicDir, `${KEY}.txt`);
const publishedKey = await readFile(keyFile, "utf8").then((contents) => contents.trim()).catch(() => "");

if (publishedKey !== KEY) {
  console.error(`IndexNow key file is missing or invalid: public/${KEY}.txt`);
  process.exit(1);
}
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urls = [];
for (const input of process.argv.slice(2)) {
  if (!input.startsWith("/") && !URL.canParse(input)) {
    console.error(`Invalid IndexNow URL: ${input}`);
    process.exit(1);
  }

  let url;
  try {
    url = new URL(input, `https://${HOST}/`);
  } catch {
    console.error(`Invalid IndexNow URL: ${input}`);
    process.exit(1);
  }

  if (url.protocol !== "https:" || url.hostname !== HOST || url.port) {
    console.error(`IndexNow URL must use https://${HOST}: ${input}`);
    process.exit(1);
  }
  urls.push(url.toString());
}
const urlList = urls.length > 0 ? [...new Set(urls)] : [`https://${HOST}/`];

function parseRetryAfter(value) {
  if (value !== null && value.trim() !== "") {
    const seconds = Number(value);
    if (Number.isFinite(seconds)) {
      return Math.min(Math.max(seconds, 0), MAX_RETRY_AFTER_SECONDS);
    }

    const date = Date.parse(value);
    if (!Number.isNaN(date)) {
      const delay = Math.ceil((date - Date.now()) / 1000);
      return Math.min(Math.max(delay, 0), MAX_RETRY_AFTER_SECONDS);
    }
  }
  return 60;
}

async function verifyPublishedKey() {
  try {
    const res = await fetch(KEY_LOCATION, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
    const body = await res.text();
    if (res.ok && body.trim() === KEY) return true;
    console.error(`IndexNow key verification failed (${res.status}) at ${KEY_LOCATION}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`IndexNow key verification failed: ${message}`);
  }
  return false;
}

async function submit(attempt = 1) {
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`IndexNow request failed: ${message}`);
    return false;
  }

  if (res.status === 429 && attempt < MAX_ATTEMPTS) {
    const retryAfter = parseRetryAfter(res.headers.get("Retry-After"));
    console.warn(`429 received. Retrying in ${retryAfter}s (attempt ${attempt}/${MAX_ATTEMPTS})...`);
    await new Promise((r) => setTimeout(r, retryAfter * 1000));
    return submit(attempt + 1);
  }

  const body = await res.text().catch(() => "");
  if (res.status === 200 || res.status === 202) {
    console.log(`IndexNow accepted (${res.status}) for:\n${urlList.join("\n")}`);
    return true;
  }
  console.error(`IndexNow failed (${res.status}): ${body}`);
  return false;
}

verifyPublishedKey()
  .then((verified) => verified && submit())
  .then((ok) => {
    if (!ok) process.exitCode = 1;
  })
  .catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`IndexNow failed: ${message}`);
    process.exitCode = 1;
  });
