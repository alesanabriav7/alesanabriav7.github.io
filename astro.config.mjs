import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://alejandrosanabria.com",
  integrations: [
    sitemap({
      lastmod: new Date(),
      filter: (page) => !["/privacy/", "/cifro/privacy/"].includes(new URL(page).pathname),
    }),
  ],
});
