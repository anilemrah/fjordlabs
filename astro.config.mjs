import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.fjord-labs.com",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/fjord-apps-privacy") &&
        !page.includes("/apps") &&
        !page.includes("/gissa/privacy"),
    }),
    tailwind(),
  ],
  output: "static",
});
