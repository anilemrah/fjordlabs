# Fjord Labs — SEO Content Hub for Board Game Upgrades

## What This Is
A static Astro site (www.fjord-labs.com) that serves as an SEO content hub for Fjord Labs — a business selling 3D-printed board game upgrades on Etsy (fjordlabs.etsy.com). The site has hundreds of niche board game articles that naturally blend in product callouts to drive Etsy sales.

## Tech Stack
- **Astro v6** static site generator
- **Bun** as package manager (no npm/npx on this system)
- **Tailwind CSS v3.4** via @astrojs/tailwind
- **@astrojs/sitemap** for XML sitemap generation
- **GitHub Pages** deployment via GitHub Actions (`.github/workflows/deploy.yml`)
- Repo: `anilemrah/fjordlabs` on GitHub (public)
- Domain: www.fjord-labs.com (registered at one.com)

## Commands
- `bun install` — install dependencies
- `bun run dev -- --port 4322` — dev server (port 4321 is used by another project)
- `bun run build` — production build (outputs to `dist/`)

## Architecture

### Layouts
- `src/layouts/Base.astro` — main layout with nav, footer, SEO meta tags, OG/Twitter cards
- `src/layouts/Article.astro` — article pages with breadcrumbs, JSON-LD, auto product callouts

### Components
- `ArticleCard` — article preview card with category/game badges
- `ProductCard` — product grid card for product listings
- `ProductCallout` — blended product recommendation (embedded in articles via `product` prop)
- `InfoBox` — colored callout (tip=green, warning=amber, rule=blue, info=gray)
- `KeyTakeaway` — hero answer box with gradient background
- `StepList` + `Step` — numbered timeline with vertical connector
- `ComparisonTable` — styled table wrapper
- `QuickFact` — inline stat badge

### Data
- `src/data/products.ts` — 9 products with Etsy image URLs and links
- `src/data/games.ts` — 6 games with metadata (slug, title, image, playerCount, playTime, complexity)

### Pages Structure
```
src/pages/
├── index.astro              # Homepage
├── about.astro              # About page
└── games/
    ├── catan/               # 10 articles + hub
    ├── wingspan/            # 8 articles + hub
    ├── wyrmspan/            # 3 articles + hub
    ├── scythe/              # 3 articles + hub
    ├── terraforming-mars/   # 3 articles + hub
    └── carcassonne/         # 5 articles + hub (no products, content only)
```

### Game Images
Placeholder SVGs in `public/images/games/`. Need to be replaced with real box art photos.

## Design
- Light theme (cream/sand backgrounds, not dark)
- Colors: cream (#FAFAF8), sand (#F2EDE4), bark (#1A1A1A), clay (#C47B30), forest (#2D5A4C)
- Fonts: Space Grotesk (headings), Inter (body)
- "Geek" / gaming-themed feel (hex grid backgrounds, quest log, loot shop language)
- Articles must be visually engaging — use InfoBox, StepList, KeyTakeaway, tables, cards. Never walls of text.

## Current State (40 pages live)

### Games with products + articles
- **Catan** — 10 articles, 2 products (Resource Tokens, Score Tracker)
- **Wingspan** — 8 articles, 4 products (Food Tokens, First Player Token, Round End Tracker, Player Tray)
- **Wyrmspan** — 3 articles, 1 product (Resource Token Set)
- **Scythe** — 3 articles, 1 product (Resource Tokens)
- **Terraforming Mars** — 3 articles, 1 product (Player Board)

### Games with articles only (no products)
- **Carcassonne** — 5 articles

## What's Next
- [ ] More articles — target the most-searched board game questions for each game
- [ ] Replace SVG placeholder game images with real box art photos
- [ ] DNS setup — point one.com domain to GitHub Pages (CNAME + A records)
- [ ] Add more games without products (pure SEO content plays)
- [ ] Design polish — review on mobile, improve spacing, test all pages
- [ ] Consider adding more Etsy products as they're created

## Notes
- All hub pages show game images, article sections by category (Rules/Strategy/Guide), and product grids
- Homepage Quest Log showcases 9 articles across all 6 games
- Every page is individually indexed in the sitemap
- JSON-LD structured data on article and collection pages
- The old site files are preserved in git history (commit before `285e135`)
