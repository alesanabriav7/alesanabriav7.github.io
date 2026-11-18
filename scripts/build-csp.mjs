// Collect a SHA-256 hash for every executable inline <script> in dist so the Worker
// can send a strict hash-based Content-Security-Policy ('strict-dynamic', no 'unsafe-inline').
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const NON_EXECUTABLE = /type=["'](application\/ld\+json|application\/json|text\/markdown)["']/i;
const hashes = new Set();
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = `${directory}/${entry.name}`;
    if (entry.isDirectory()) { await walk(file); continue; }
    if (!entry.name.endsWith('.html')) continue;
    const html = await readFile(file, 'utf8');
    for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (/\bsrc=/i.test(attrs)) throw new Error(`${file}: external script needs a CSP hash/nonce strategy`);
      if (NON_EXECUTABLE.test(attrs)) continue;
      hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
    }
  }
}
await walk('dist');
await mkdir('generated', { recursive: true });
await writeFile('generated/csp-hashes.json', JSON.stringify([...hashes].sort(), null, 2) + '\n');
console.log(`CSP: ${hashes.size} inline script hashes`);
