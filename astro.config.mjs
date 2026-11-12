import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const SITE = "https://alejandrosanabria.com";

// EN/ES page pairs. Must match the <link rel="alternate" hreflang> tags each page renders.
const hreflangPairs = [
  ["/", "/es/"],
  ["/cifro/", "/cifro/es/"],
];

// Extra sources whose content renders into a page (besides the page file itself).
const profilePhotos = [
  "public/alejandro-sanabria-villescas.jpg",
  "public/alejandro-sanabria-wwdc26.jpg",
];
const homeSources = [
  "src/components/pages/HomePage.astro",
  "src/data/profile.ts",
  "src/data/posts.ts",
  ...profilePhotos,
  "public/images/wwdc26-1600.webp",
  "public/images/wwdc26-900.webp",
  "public/images/apple-park-portrait-1000.webp",
  "public/images/apple-park-portrait-600.webp",
];
const extraSources = {
  "/": homeSources,
  "/es/": homeSources,
  "/cifro/": ["src/components/CifroLanding.astro", "src/data/cifro.ts"],
  "/cifro/es/": ["src/components/CifroLanding.astro", "src/data/cifro.ts"],
  "/cifro/support/": ["src/data/cifro.ts"],
  "/blog/grok-bot-casos-reales/": ["src/data/posts.ts"],
};

function pageSources(path) {
  const base = path === "/" ? "src/pages/index" : `src/pages${path.replace(/\/$/, "")}`;
  const candidates = [`${base}/index.astro`, `${base}.astro`];
  return [
    ...candidates.filter((file) => existsSync(file)),
    "src/data/site.ts",
    "public/alejandro-sanabria.jpg",
    ...(extraSources[path] ?? []),
  ];
}

// lastmod = date of the last commit that touched the page's own content, not the build time.
// A lastmod that changes on every build is ignored by Google; an accurate one helps recrawl what really changed.
function lastCommitDate(path) {
  const files = pageSources(path);
  if (files.length === 0) return undefined;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], { encoding: "utf8" }).trim();
    return out ? new Date(out).toISOString() : undefined;
  } catch {
    return undefined;
  }
}

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = lastCommitDate(path);
        if (lastmod) item.lastmod = lastmod;
        else delete item.lastmod;

        const pair = hreflangPairs.find((p) => p.includes(path));
        if (pair) {
          const [en, es] = pair;
          item.links = [
            { lang: "en", url: `${SITE}${en}` },
            { lang: "es", url: `${SITE}${es}` },
            { lang: "x-default", url: `${SITE}${en}` },
          ];
        }

        if (["/", "/es/"].includes(path)) {
          item.img = [
            { url: `${SITE}/alejandro-sanabria-villescas.jpg`, caption: "Alejandro Sanabria" },
            { url: `${SITE}/alejandro-sanabria.jpg`, caption: "Alejandro Sanabria" },
            { url: `${SITE}/images/wwdc26-1600.webp`, caption: "Alejandro Sanabria Villescas at WWDC26, Apple Park" },
          ];
        }
        return item;
      },
      filter: (page) => !["/privacy/", "/cifro/privacy/"].includes(new URL(page).pathname),
    }),
  ],
});
