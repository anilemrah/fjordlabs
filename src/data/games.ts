export interface Game {
  slug: string;
  title: string;
  image: string;
  description: string;
  heroDescription: string;
  playerCount: string;
  playTime: string;
  complexity: string;
  /**
   * Attribution shown under the hub image and on /credits/.
   * Leave unset while `image` is still a placeholder SVG. Box art is the
   * publisher's copyright — set this only once the source is one we're
   * permitted to use (own photography, or written permission from the
   * publisher). BoardGameGeek is not a valid credit: it hosts user uploads
   * and does not own the artwork.
   */
  imageCredit?: string;
  imageCreditUrl?: string;
}

export const games: Game[] = [
  {
    slug: "catan",
    title: "Catan",
    image: "/images/games/catan.svg",
    description: "The classic trading and building game that started it all.",
    heroDescription:
      "Catan (formerly The Settlers of Catan) is a multiplayer board game where players collect and trade resources to build settlements, cities, and roads on an ever-changing island. Since 1995, it has sold over 40 million copies and introduced millions to modern board gaming.",
    playerCount: "3–4 (up to 6 with expansion)",
    playTime: "60–120 minutes",
    complexity: "Medium",
  },
  {
    slug: "wingspan",
    title: "Wingspan",
    image: "/images/games/wingspan.svg",
    description:
      "A competitive bird-collection engine-building game with stunning art.",
    heroDescription:
      "Wingspan is an engine-building board game designed by Elizabeth Hargrave and published by Stonemaier Games. Players are bird enthusiasts collecting birds into habitats, using unique bird powers to chain together powerful combos. Known for its stunning artwork, educational value, and elegant mechanics, Wingspan won the 2019 Kennerspiel des Jahres and has sold over 1.5 million copies.",
    playerCount: "1–5",
    playTime: "40–70 minutes",
    complexity: "Medium",
  },
  {
    slug: "wingspan-pocket",
    title: "Wingspan Pocket",
    image: "/images/games/wingspan-pocket.svg",
    description:
      "The compact, travel-sized Wingspan — 25 minutes, one small box.",
    heroDescription:
      "Wingspan Pocket is the brand-new compact edition of Wingspan, designed by Elizabeth Hargrave and released by Stonemaier Games in July 2026. It distills the beloved bird engine-builder into a small box that plays in 25–35 minutes: 106 double-sided bird/food cards, a shared market, icon-based powers, and no birdfeeder or habitat mats. A standalone game — not an expansion — with birds from around the world and a full solo Automa mode.",
    playerCount: "1–5",
    playTime: "25–35 minutes",
    complexity: "Light",
  },
  {
    slug: "wyrmspan",
    title: "Wyrmspan",
    image: "/images/games/wyrmspan.svg",
    description:
      "The dragon-themed successor to Wingspan with deeper cave mechanics.",
    heroDescription:
      "Wyrmspan is a standalone game inspired by Wingspan, designed by Connie Vogelmann. Instead of birds, players entice dragons into their caves using gold, meat, and crystals. Each dragon has unique abilities that chain into powerful combos. The game introduces an exploration mechanic and deeper resource management while keeping the satisfying engine-building core that made Wingspan a hit.",
    playerCount: "1–5",
    playTime: "60–90 minutes",
    complexity: "Medium-Heavy",
  },
  {
    slug: "scythe",
    title: "Scythe",
    image: "/images/games/scythe.svg",
    description:
      "An engine-building game set in an alternate 1920s Europa with mechs and farming.",
    heroDescription:
      "Scythe is a competitive strategy game set in an alternate-history 1920s Eastern Europe. Players control factions vying for dominance through farming, trading, combat, and giant mechs. Designed by Jamey Stegmaier and published by Stonemaier Games, Scythe blends resource management, area control, and asymmetric faction powers into one of the most celebrated strategy games of the past decade.",
    playerCount: "1–5 (up to 7 with expansions)",
    playTime: "90–120 minutes",
    complexity: "Heavy",
  },
  {
    slug: "duel-of-meloch",
    title: "Duel of Meloch",
    image: "/images/games/duel-of-meloch.jpg",
    imageCredit: "Photo © Fjord Labs · Duel of Meloch © Stonemaier Games",
    description:
      "Stonemaier's 45-minute two-player duel — Scythe against Expeditions.",
    heroDescription:
      "Scythe: Duel of Meloch is a standalone two-player game released by Stonemaier Games in July 2026, in which one player commands a Scythe faction and the other leads an Expeditions crew. It plays in about 45 minutes on a compact double-sided map of ten locations and two lakes, with both sides racing to place four stars on a shared Triumph Track. Every star you place lets your opponent draw a Meloch card and choose a reward, keeping finishes tight. It also introduces Constantinople — the first new Scythe faction in years — and the eighth player mat, Adventurous.",
    playerCount: "2",
    playTime: "~45 minutes",
    complexity: "Medium",
  },
  {
    slug: "terraforming-mars",
    title: "Terraforming Mars",
    image: "/images/games/terraforming-mars.svg",
    description:
      "Compete to terraform Mars by raising temperature, oxygen, and ocean coverage.",
    heroDescription:
      "Terraforming Mars is a strategy board game where players represent corporations working together to terraform Mars — raising temperature, oxygen levels, and ocean coverage — while competing to earn the most victory points. With over 200 unique project cards and deep engine-building, it's one of the highest-rated strategy games on BoardGameGeek.",
    playerCount: "1–5",
    playTime: "120–180 minutes",
    complexity: "Heavy",
  },
  {
    slug: "carcassonne",
    title: "Carcassonne",
    image: "/images/games/carcassonne.svg",
    description:
      "The iconic tile-laying game of medieval cities, roads, and farmers.",
    heroDescription:
      "Carcassonne is a tile-placement board game where players draw and place tiles to build a medieval landscape of cities, roads, monasteries, and fields. By placing meeples on these features, players claim them for points. Simple to learn but deeply strategic, Carcassonne won the Spiel des Jahres in 2001 and remains one of the most popular gateway board games worldwide.",
    playerCount: "2–5",
    playTime: "30–45 minutes",
    complexity: "Light-Medium",
  },
  {
    slug: "flip-7",
    title: "Flip 7",
    image: "/images/games/flip-7.svg",
    description:
      "The push-your-luck card game that plays with up to 18 people.",
    heroDescription:
      "Flip 7 is a push-your-luck card game where you keep taking number cards until you either bank your points or flip a duplicate and lose the lot. Collect seven different numbers and you score a 15-point bonus. Its deck is deliberately lopsided — every number appears as many times as its value — so the highest-scoring cards are also the most dangerous ones. A 94-card box that teaches in two minutes, seats up to 18 players, and won a Mensa Select award.",
    playerCount: "3–18",
    playTime: "20 minutes",
    complexity: "Light",
  },
  {
    slug: "cascadia",
    title: "Cascadia",
    image: "/images/games/cascadia.svg",
    description:
      "Tile-laying and wildlife-drafting in the Pacific Northwest.",
    heroDescription:
      "Cascadia is a tile-laying and token-drafting game designed by Randy Flynn, in which players build a Pacific Northwest landscape of mountains, forests, prairies, wetlands and rivers, then populate it with bears, elk, salmon, hawks and foxes. Each animal scores by a different pattern drawn at random each game, so no two sessions reward the same shapes. It won the Spiel des Jahres in 2022 and has become one of the most recommended modern gateway games.",
    playerCount: "1–4",
    playTime: "30–45 minutes",
    complexity: "Light-Medium",
  },
  {
    slug: "everdell",
    title: "Everdell",
    image: "/images/games/everdell.svg",
    description:
      "Worker placement and city building with woodland critters.",
    heroDescription:
      "Everdell is a worker placement and tableau-building game set in the woodland valley of Everdell, where players send critters to gather twigs, resin, pebbles and berries and build a city of up to fifteen cards. The game runs through four seasons, each granting more workers, and is famous for its production — including the three-dimensional Ever Tree that dominates the table. Designed by James A. Wilson and Clarissa Wong.",
    playerCount: "1–4",
    playTime: "40–80 minutes",
    complexity: "Medium",
  },
  {
    slug: "agricola",
    title: "Agricola",
    image: "/images/games/agricola.svg",
    description:
      "The classic farming game where feeding your family is the hard part.",
    heroDescription:
      "Agricola is Uwe Rosenberg's landmark worker placement game about running a 17th-century farm. Over fourteen rounds you plough fields, fence pastures, raise sheep, boar and cattle, extend your house and grow your family — while the harvest arrives at intervals and demands food you probably don't have. Released in 2007, it defined an entire genre and remains one of the most respected strategy games ever published.",
    playerCount: "1–4 (up to 5 in some editions)",
    playTime: "90–150 minutes",
    complexity: "Heavy",
  },
  {
    slug: "gloomhaven",
    title: "Gloomhaven",
    image: "/images/games/gloomhaven.svg",
    description:
      "The campaign dungeon crawler that redefined the genre — and where to start.",
    heroDescription:
      "Gloomhaven is a cooperative campaign game of tactical combat, designed by Isaac Childres, in which a party of mercenaries fights through a branching story of dozens of scenarios. There are no dice: every turn you commit two ability cards in secret, and combat is resolved with a modifier deck you improve over the campaign. The family now spans Jaws of the Lion, the original Gloomhaven, and Frosthaven — and choosing the right entry point matters more than almost any other buying decision in board gaming.",
    playerCount: "1–4",
    playTime: "60–120 minutes per scenario",
    complexity: "Heavy",
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
