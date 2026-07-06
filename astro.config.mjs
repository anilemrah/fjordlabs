import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.fjord-labs.com",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("privacy") && !page.includes("/apps"),
    }),
    tailwind(),
  ],
  output: "static",
});
