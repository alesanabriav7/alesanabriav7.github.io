# SEO deployment — 9 September 2026

Published https://alejandrosanabria.com/ as the canonical personal website, with FDE/AI positioning and dedicated public project pages. User authorized implementation and Cloudflare publication in this conversation. Existing local modifications were preserved; no Git commit or push was made.

## Published changes

- Canonical domain updated across Astro site configuration, metadata, identity graph, robots.txt, sitemap, CNAME reference, llms.txt and IndexNow submission script. Existing support email addresses remain unchanged.
- Cloudflare routes on the new domain now invoke `alesanabriav-site`, replacing the previous `alejandrosanabria-redirect` route targets. The existing apex custom-domain origin remains in place behind the explicit Worker route; the site is served directly from the ASSETS binding.
- Added `www.alejandrosanabria.com` as a Worker custom domain. Both old-domain hostnames and the new www hostname redirect permanently to the new apex, preserving path and query. HTTP first upgrades to HTTPS at the Cloudflare edge; HTTPS alias redirects then reach the canonical host.
- Improved homepage title and introduction, put current Wonderful/FDE work first, removed repeated biography/leadership sections, and linked to the public project explanations. Work and Projects have descriptive titles and introductions.
- Added `/projects/ios-architect/`, `/projects/appstore-tools/`, `/projects/screenshots-ios/`, using the prior audited drafts and checked repository READMEs, including practical examples and authorship. No customer case studies or impact metrics were invented.
- Corrected absolute no-cloud wording in the profile, work summary and llms.txt to match the existing Cifro landing page's optional private iCloud sync. No substantive rewrite of the existing privacy policy was performed.
- Removed the Worker override that returned the same llms.txt with status 200 for every Markdown request. Assets now preserve the correct route, redirect and 404 semantics.
- Normalized internal page links to trailing-slash canonicals. Added overflow handling for project code examples.

## Verification

- `pnpm check`: 22 files; zero errors, warnings or hints.
- `pnpm build`: successful, 11 HTML pages; sitemap contains 8 indexable URLs.
- Routing assertions: aliases preserve paths/query; legacy privacy redirects; Markdown receives the correct asset/404.
- Generated HTML: canonical URLs, single H1 and parseable JSON-LD checked on seven main pages. All generated internal page links resolve to built assets.
- Live HTTPS checks: canonical home and project pages 200; old-domain paths 301 to their new equivalents; missing page 404 for HTML and Markdown; robots and sitemap XML 200.
- New www record is present in Cloudflare and resolves through Google Public DNS; TLS and 301 verified against its published address. Local DNS retained an earlier negative response during the initial validation.
- Browser inspection confirmed the published homepage, current copy and project links; screenshot confirmed readable content after its entrance animation.
- Production Worker version: `1bebaa8a-2b2b-4827-8c45-0b70a295c86b`.

## Google and discovery

- Verified `https://alejandrosanabria.com/` URL-prefix property in the owner's Search Console using the published HTML verification tag. Keep the verification tag in place.
- Submitted `sitemap-index.xml` and `sitemap-0.xml`. Both show Success; the URL sitemap reports 8 discovered pages. Initial couldn't-fetch states cleared after processing.
- Google's live homepage test: URL available to Google, page can be indexed, one valid ProfilePage item. The previous indexed snapshot dated 25 August still described the old redirect; it is historical state.
- Homepage indexing request accepted into the priority crawl queue.
- IndexNow accepted all eight URLs with HTTP 202. Acceptance is not a promise of indexing and is not a Google submission.
- Change-of-address validation: pending resolution; verification of both sites passed, but Google's migration checker reported it could not fetch the old homepage and sample pages despite public 301 checks succeeding. A separate live Google inspection of the old HTTPS homepage at 13:31 also reached an available, indexable page with valid ProfilePage markup; the migration-checker fetch failure is not explained by these successful live tests.

## Follow-up boundaries

Google must recrawl, select the new canonicals and update rankings. No ranking improvement is claimed at deployment. Social profile edits, third-party backlinks and future editorial posts were not published as part of this repository deployment.

Keep old-domain redirects for at least one year. The pre-migration Worker version was `21fdf770-b619-42f6-9edf-3dfbd8cab83e`; a rollback would also need the previous Worker route targets and canonical configuration, not only a code rollback.
