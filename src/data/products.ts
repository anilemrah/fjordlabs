export interface Product {
  slug: string;
  title: string;
  game: string;
  type: string;
  image: string;
  link: string;
  description: string;
}

export const products: Product[] = [
  // Catan
  {
    slug: "catan-resource-tokens",
    title: "Catan Resource Tokens",
    game: "catan",
    type: "Tokens",
    image: "https://i.etsystatic.com/56813479/r/il/165071/7193639536/il_1588xN.7193639536_aufj.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "3D-printed replacement resource tokens for Settlers of Catan. Tactile, colorful, and built for thousands of trades.",
  },
  {
    slug: "catan-score-tracker",
    title: "Catan Score Tracker",
    game: "catan",
    type: "Organization",
    image: "https://i.etsystatic.com/56813479/r/il/895472/7325758416/il_1588xN.7325758416_cwha.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "Victory point tracker board for Catan. Keep scores visible and organized — no more mental math mid-game.",
  },
  // Wingspan
  {
    slug: "wingspan-food-tokens",
    title: "Wingspan Food Resource Tokens",
    game: "wingspan",
    type: "Tokens",
    image: "https://i.etsystatic.com/56813479/r/il/31d6a9/7821810227/il_1588xN.7821810227_beb3.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "3D-printed bird food token upgrades for Wingspan. Replace the cardboard tokens with something you'll love picking up.",
  },
  {
    slug: "wingspan-first-player-token",
    title: "Wingspan First Player Token Holder",
    game: "wingspan",
    type: "Upgrade",
    image: "https://i.etsystatic.com/56813479/r/il/470348/7757502935/il_1588xN.7757502935_rp4t.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "A 3D-printed first player token holder that fits right into your Wingspan setup. Never lose track of who goes first.",
  },
  {
    slug: "wingspan-goal-tracker",
    title: "Wingspan Round End Goal Tracker",
    game: "wingspan",
    type: "Upgrade",
    image: "https://i.etsystatic.com/56813479/r/il/273eac/7922827479/il_1588xN.7922827479_axuj.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "Track round-end goals with this 3D-printed upgrade. Clear, visible, and way better than the cardboard original.",
  },
  {
    slug: "wingspan-player-tray",
    title: "Wingspan Player Tray",
    game: "wingspan",
    type: "Organizer",
    image: "https://i.etsystatic.com/56813479/r/il/99caaa/6972391891/il_1588xN.6972391891_mgms.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "3D-printed player tray organizer for Wingspan. Keeps your food, eggs, and cards neatly separated during play.",
  },
  // Wyrmspan
  {
    slug: "wyrmspan-resource-tokens",
    title: "Wyrmspan Resource Token Set",
    game: "wyrmspan",
    type: "Tokens",
    image: "https://i.etsystatic.com/56813479/r/il/2e5979/7114725568/il_1588xN.7114725568_ilpy.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "3D-printed resource tokens for Wyrmspan. Gold, meat, and crystals — sturdy, colorful, and dragon-approved.",
  },
  // Scythe
  {
    slug: "scythe-resource-tokens",
    title: "Scythe Resource Tokens",
    game: "scythe",
    type: "Tokens",
    image: "https://i.etsystatic.com/56813479/r/il/575ff0/6874954197/il_1588xN.6874954197_6y9h.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "3D-printed upgrade token set for Scythe. Replace the standard components with tactile, detailed resource pieces.",
  },
  // Terraforming Mars
  {
    slug: "terraforming-mars-player-board",
    title: "Terraforming Mars Player Board",
    game: "terraforming-mars",
    type: "Organizer",
    image: "https://i.etsystatic.com/56813479/r/il/20b7ac/7821817629/il_1588xN.7821817629_qh1o.jpg",
    link: "https://fjordlabs.etsy.com",
    description:
      "3D-printed dashboard tray and resource organizer for Terraforming Mars. No more bumped cubes ruining your economy.",
  },
];

export function getProductsByGame(game: string): Product[] {
  return products.filter((p) => p.game === game);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
