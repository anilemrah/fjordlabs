import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { apps } from "./src/data/apps.ts";

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

// Pages generated from product/app data change when that data changes.
const productsDataDate = gitDate("src/data/products.ts");
const appsDataDate = gitDate("src/data/apps.ts");

/**
 * Map a built URL back to the source file that owns its content, so the
 * sitemap can carry a truthful <lastmod> instead of the build timestamp.
 */
function lastmodFor(url) {
  const path = url.replace(SITE, "").replace(/^\/|\/$/g, "");

  if (path === "products" || path.startsWith("products/")) {
    return productsDataDate;
  }

  if (path === "apps" || path.startsWith("apps/")) {
    return appsDataDate;
  }

  const base = path ? `src/pages/${path}` : "src/pages/index";
  return gitDate(`${base}.astro`) ?? gitDate(`${base}/index.astro`);
}

/**
 * Pages served with `noindex` — legal boilerplate and the QR-linked landing
 * page. Keep this in sync with the `noindex` prop on those pages, so we don't
 * ask Google to crawl something we've told it to ignore.
 */
const NOINDEX = ["privacy", "/thanks"];

/**
 * Apps launched before /apps/ existed had their support/privacy pages under a
 * top-level folder (/glimt/support/, /gissa/privacy/…), and App Store Connect
 * may use the folder root as the marketing URL. Send those roots to the app's
 * real page. The support/privacy pages themselves stay where they are.
 */
const appRedirects = Object.fromEntries(
  apps
    .filter((app) => app.legacyPath)
    .map((app) => [app.legacyPath, `/apps/${app.slug}/`]),
);

export default defineConfig({
  site: SITE,
  redirects: appRedirects,
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((path) => page.includes(path)),
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
    // Base styles come from src/styles/global.css (imported in Base.astro),
    // which adds the body font/background and the .prose-article rules.
    tailwind({ applyBaseStyles: false }),
  ],
  output: "static",
});
