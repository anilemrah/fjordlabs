import { getProduct } from "./products";

// Per-game gift guides, shown as photo cards on the homepage (Nov–Dec) and /gifts/.
// `photo` is the 1-based Etsy image of `slug` used as the card picture, at Etsy's 570px
// size to keep pages light. A delisted product drops its card.
export const giftGuides = [
  { name: "Catan", href: "/games/catan/catan-gift-ideas/", slug: "catan-robber-upgrade", photo: 6 },
  { name: "Wingspan", href: "/games/wingspan/wingspan-gift-ideas/", slug: "wingspan-food-tokens", photo: 2 },
  { name: "Scythe", href: "/games/scythe/scythe-gift-ideas/", slug: "scythe-resource-tokens", photo: 1 },
  { name: "Agricola", href: "/games/agricola/agricola-gift-ideas/", slug: "agricola-resource-tokens", photo: 1 },
  { name: "Cascadia", href: "/games/cascadia/cascadia-gift-ideas/", slug: "cascadia-pinecone-tokens", photo: 1 },
  { name: "Everdell", href: "/games/everdell/everdell-gift-ideas/", slug: "everdell-open-signs", photo: 1 },
  { name: "Terraforming Mars", href: "/games/terraforming-mars/terraforming-mars-gift-ideas/", slug: "terraforming-mars-player-board", photo: 1 },
].flatMap((g) => {
  const url = getProduct(g.slug)?.images[g.photo - 1];
  return url ? [{ ...g, img: url.replace("il_1588xN", "il_570xN") }] : [];
});
