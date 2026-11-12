import { writeFile } from "node:fs/promises";
import legacyProfileRedirects from "../src/data/legacy-profile-redirects.js";

const canonicalSite = "https://alejandrosanabria.com";

for (const [sourcePath, targetPath] of legacyProfileRedirects) {
  const outputPath = `dist/${sourcePath.replace(/^\//, "")}index.html`;
  const targetUrl = new URL(targetPath, canonicalSite).href;
  const html = `<!doctype html>
<html lang="${sourcePath.startsWith("/es/") ? "es" : "en"}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0;url=${targetUrl}">
    <meta name="robots" content="noindex">
    <link rel="canonical" href="${targetUrl}">
    <title>Redirecting</title>
    <script>location.replace(${JSON.stringify(targetUrl)});</script>
  </head>
  <body><a href="${targetUrl}">Continue to the current page</a></body>
</html>
`;

  await writeFile(outputPath, html);
}

console.log(`Prepared ${legacyProfileRedirects.size} GitHub Pages legacy redirects.`);
