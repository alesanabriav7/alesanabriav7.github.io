import legacyProfileRedirects from "../data/legacy-profile-redirects.js";

// Temporary sitemap of URLs that now 301 to the home pages (Worker, Nov 11, 2026).
// Listing them makes search engines recrawl the redirects sooner, so ranking signals
// (Google still ranks /es/sobre-mi/ for the name) move to / and /es/.
// Remove this file and its robots.txt line once Search Console shows them as "Page with redirect".
const SITE = "https://alejandrosanabria.com";
const REDIRECTED_ON = "2026-11-12";

export function GET() {
  const urls = [...legacyProfileRedirects.keys()]
    .map((path) => `  <url><loc>${SITE}${path}</loc><lastmod>${REDIRECTED_ON}</lastmod></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
