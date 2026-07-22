import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://alesanabriav.com",
  integrations: [
    sitemap({
      filter: (page) => !["/privacy/", "/cifro/privacy/"].includes(new URL(page).pathname),
    }),
  ],
});
