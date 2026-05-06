export interface Game {
  slug: string;
  title: string;
  image: string;
  description: string;
  heroDescription: string;
  playerCount: string;
  playTime: string;
  complexity: string;
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
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
