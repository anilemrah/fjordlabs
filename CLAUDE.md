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
├── products/               # Product index + [slug] detail pages
└── games/
    ├── catan/               # 10 articles + hub
    ├── wingspan/            # 8 articles + hub
    ├── wingspan-pocket/     # 2 articles + hub
    ├── wyrmspan/            # 3 articles + hub
    ├── scythe/              # 3 articles + hub
    ├── duel-of-meloch/      # 5 articles + hub (standalone Scythe spin-off)
    ├── terraforming-mars/   # 3 articles + hub
    ├── carcassonne/         # 5 articles + hub
    ├── flip-7/              # 6 articles + hub
    ├── cascadia/            # 5 articles + hub
    ├── everdell/            # 5 articles + hub
    ├── agricola/            # 4 articles + hub
    └── gloomhaven/          # 6 articles + hub (no products, content only)
```

Adding a game means: entry in `src/data/games.ts`, placeholder SVG in
`public/images/games/`, a hub `index.astro`, the articles, and three nav links in
`Base.astro` (desktop dropdown, mobile menu, footer). The homepage games grid
iterates `games.ts` automatically — so a `games.ts` entry without a hub page
produces a broken homepage link.

### Game Images
Placeholder SVGs in `public/images/games/`. Need to be replaced with real box art photos.

## Design
- Light theme (cream/sand backgrounds, not dark)
- Colors: cream (#FAFAF8), sand (#F2EDE4), bark (#1A1A1A), clay (#C47B30), forest (#2D5A4C)
- Fonts: Space Grotesk (headings), Inter (body)
- "Geek" / gaming-themed feel (hex grid backgrounds, quest log, loot shop language)
- Articles must be visually engaging — use InfoBox, StepList, KeyTakeaway, tables, cards. Never walls of text.

## Current State (140 pages live, 54 products)

### Games with products + articles
- **Catan** — 10 articles, 9 products
- **Wingspan** — 8 articles, 9 products
- **Wingspan Pocket** — 2 articles, 1 product
- **Wyrmspan** — 3 articles, 1 product
- **Scythe** — 3 articles, 2 products. Hub cross-links to Duel of Meloch.
- **Duel of Meloch** — 5 articles, 1 product (Insert). Standalone Stonemaier
  spin-off (July 2026), so it gets its own hub rather than living under Scythe —
  same precedent as Wingspan Pocket. Facts about this game post-date most model
  training data: source them from `products.ts` and the existing articles, don't
  invent mechanics.
- **Terraforming Mars** — 3 articles, 2 products
- **Carcassonne** — 5 articles, 1 product
- **Flip 7** — 6 articles, 1 product (Organizer Insert)
- **Cascadia** — 5 articles, 2 products (Game Tray, Pinecone Tokens)
- **Everdell** — 5 articles, 2 products (Open Signs, Forest Upgrade Kit)
- **Agricola** — 4 articles, 3 products (Resource Bundle, Rice & Reed, Pumpkins)

### Games with articles only (no products)
- **Gloomhaven** — 6 beginner-facing articles. Deliberately scoped to newcomer
  questions (Gloomhaven vs Jaws of the Lion, how the system works, time
  commitment, solo play, box organisation) — we do NOT compete on strategy or
  build guides, where BGG/Reddit/wikis own the results and thin content would
  hurt credibility with a discerning audience. The hub surfaces universal
  organiser products instead of game-specific ones.

### Product/content gap check
Every `game` slug used in `products.ts` should have a matching hub, or those
products have no landing page. Products under `game: "other"` are universal by
design and live only on the products pages.

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
