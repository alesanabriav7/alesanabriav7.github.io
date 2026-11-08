import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const writingDir = new URL("./src/content/writing/", import.meta.url);
const hasPublishedWriting = readdirSync(writingDir)
  .filter((file) => file.endsWith(".md"))
  .some((file) => !/^draft:\s*true\s*$/m.test(readFileSync(new URL(file, writingDir), "utf8")));
const excluded = new Set(["/privacy/", "/cifro/privacy/", ...(hasPublishedWriting ? [] : ["/writing/"])]);

export default defineConfig({
  site: "https://alejandrosanabria.com",
  integrations: [
    sitemap({
      filter: (page) => !excluded.has(new URL(page).pathname),
    }),
  ],
});
