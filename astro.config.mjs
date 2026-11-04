import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://alejandrosanabria.com",
  integrations: [
    sitemap({
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (["/", "/es/", "/about/", "/es/sobre-mi/"].includes(path)) {
          item.img = [
            { url: "https://alejandrosanabria.com/alejandro-sanabria-villescas.jpg", caption: "Alejandro Sanabria" },
            { url: "https://alejandrosanabria.com/alejandro-sanabria.jpg", caption: "Alejandro Sanabria" },
          ];
        }
        return item;
      },
      filter: (page) => !["/privacy/", "/cifro/privacy/"].includes(new URL(page).pathname),
    }),
  ],
});
