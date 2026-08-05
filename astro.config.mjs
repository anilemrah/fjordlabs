import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const SITE = "https://www.fjord-labs.com";

/** Last commit date for a file, or undefined if git history isn't available. */
function gitDate(file) {
  if (!existsSync(file)) return undefined;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      encoding: "utf8",
    }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

// Pages generated from product data change when that data changes.
const productsDataDate = gitDate("src/data/products.ts");

/**
 * Map a built URL back to the source file that owns its content, so the
 * sitemap can carry a truthful <lastmod> instead of the build timestamp.
 */
function lastmodFor(url) {
  const path = url.replace(SITE, "").replace(/^\/|\/$/g, "");

  if (path === "products" || path.startsWith("products/")) {
    return productsDataDate;
  }

  const base = path ? `src/pages/${path}` : "src/pages/index";
  return gitDate(`${base}.astro`) ?? gitDate(`${base}/index.astro`);
}

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      filter: (page) => !page.includes("privacy") && !page.includes("/apps"),
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
    tailwind(),
  ],
  output: "static",
});
