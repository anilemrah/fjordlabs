export interface Product {
  slug: string;
  title: string;
  game: string;
  type: string;
  category: string;
  image: string;
  images: string[];
  link: string;
  description: string;
  longDescription?: string;
  price?: string; // USD (converted from Etsy SEK price, incl. active discount) — final price always shown at checkout
  digital?: boolean;
  featured?: boolean;
  isNew?: boolean;
  /** Shown in the New Releases announcement band */
  newTagline?: string;
  newLinkHref?: string;
  newLinkLabel?: string;
}

const img = (hash: string, id: string, sfx: string) =>
  `https://i.etsystatic.com/56813479/r/il/${hash}/${id}/il_1588xN.${id}_${sfx}.jpg`;

const listing = (id: string, slug: string) =>
  `https://fjordlabs.etsy.com/listing/${id}/${slug}`;

type RawProduct = Omit<Product, "image">;

const raw: RawProduct[] = [
  // ── Catan ──────────────────────────────────────────────
  {
    slug: "catan-resource-tokens",
    price: "25.13",
    longDescription:
      "This 3D-printed resource token set compatible with Settlers of Catan replaces flat cardboard with miniature wood logs, brick, sheep, wheat bundles, and ore you can actually feel in your hand. Each resource is sculpted to be recognized at a glance, so trades happen faster and the table looks like the island it represents.\n\nWhy own it? Because Catan is a game about resources, and holding a tiny log beats tapping a card every single time. The tokens survive thousands of trades without wearing out the way sleeves and cards do, they make the game noticeably easier for kids and new players to follow, and they turn an ordinary game night into the deluxe edition your group thinks you paid far more for.",
    title: "Catan Resource Tokens",
    game: "catan",
    type: "Tokens",
    category: "Catan",
    featured: true,
    images: [
      img("165071", "7193639536", "aufj"),
      img("67147e", "6854382362", "rnny"),
      img("a44597", "7193638816", "nq1u"),
      img("22197e", "6854382356", "168s"),
      img("7730cf", "6854435466", "mpq1"),
      img("7925ba", "6854435468", "bisy"),
    ],
    link: listing("4303897846", "resource-token-set-compatible-with"),
    description:
      "3D-printed replacement resource tokens for Settlers of Catan. Tactile, colorful, and built for thousands of trades.",
  },
  {
    slug: "catan-score-tracker",
    price: "12.56",
    longDescription:
      "A 3D-printed victory point tracker board for Catan that works for both 4-player and 6-player games. Every settlement, city, and special card gets recorded the moment it scores, visible to the whole table.\n\nAnyone who has played Catan knows the endgame ritual: everyone recounting points, someone discovering a hidden victory, arguments about who was actually winning. This tracker ends all of it. Scores stay public and current, the tension builds honestly toward 10 points, and nobody flips the table over a surprise Largest Army. It's the cheapest way to remove the single most common source of Catan table drama — and it makes teaching the game easier, because new players can finally see how the score builds.",
    title: "Catan Score Tracker",
    game: "catan",
    type: "Organization",
    category: "Catan",
    featured: true,
    images: [
      img("895472", "7325758416", "cwha"),
      img("95e31b", "7373705601", "n1x7"),
      img("aaf09f", "7549762533", "5ilh"),
      img("31e931", "7325758402", "gqf2"),
      img("613cda", "7373705597", "kv4p"),
      img("652de3", "7325758396", "d95l"),
    ],
    link: listing("4393473118", "catan-score-tracker-victory-point-board"),
    description:
      "Victory point tracker board for Catan. Keep scores visible and organized — no more mental math mid-game.",
  },
  {
    slug: "catan-player-tray",
    price: "5.58",
    longDescription:
      "A 3D-printed player tray compatible with Settlers of Catan with dedicated slots for resource cards, development cards, and your building pieces. Each player gets a tidy personal dashboard instead of a sprawl of cards and roads.\n\nThe reason to own it is simple: Catan chaos is real. Roads hide under resource cards, dev cards get shuffled into hands, and someone always knocks their settlements across the table. With a tray per player, setup takes a minute, turns run faster because everything has a place, and packing up is half the work. If your group plays weekly, this pays for itself in saved time and found game pieces within a month.",
    title: "Catan Player Tray",
    game: "catan",
    type: "Organizer",
    category: "Catan",
    images: [
      img("e12861", "7057564930", "6k39"),
      img("825356", "7057564932", "51eq"),
      img("4d733c", "7115094443", "5pnc"),
      img("8497ef", "7057564922", "hfa0"),
      img("256647", "7105520255", "lw8m"),
      img("1c5d92", "7105520263", "dqtj"),
    ],
    link: listing("4342270357", "player-tray-compatible-with-settlers-of"),
    description:
      "3D-printed player tray with built-in card holder for Settlers of Catan. Your resources, dev cards, and pieces — all in one tidy dashboard.",
  },
  {
    slug: "catan-robber-upgrade",
    price: "14.89",
    longDescription:
      "A detailed 3D-printed Catan robber figure — a cloaked thief clutching a stolen sheep and a bundle of wood — that replaces the anonymous grey pawn. It's ready to play straight out of the package, no painting required.\n\nThe robber is Catan's most dramatic moment, yet the standard piece is the most boring component in the box. This figure fixes the mismatch: when a 7 hits and the thief lands on your best hex, everyone at the table feels it. It's also the perfect small gift for the Catan obsessive who already owns every expansion — a piece they don't have, for the moment they care about most.",
    title: "Catan Robber Figure Upgrade",
    game: "catan",
    type: "Upgrade",
    category: "Catan",
    featured: true,
    images: [
      img("97b9b1", "7405745101", "4z66"),
      img("6385d7", "7405745259", "fbuc"),
      img("beb376", "7357824948", "j4fd"),
      img("f78bd6", "7405745263", "szck"),
      img("0c3cc7", "7405745233", "8pyn"),
      img("079a97", "7405745153", "3eou"),
    ],
    link: listing("4398771810", "catan-robber-figure-upgrade-thief-with"),
    description:
      "A detailed thief figure carrying stolen sheep and wood — the robber your Catan board deserves. Rolling a 7 never looked this good.",
  },
  {
    slug: "catan-blanket",
    price: "77.56",
    longDescription:
      "A handmade crochet blanket inspired by the island of Catan, assembled from hexagon 'tiles' in the resource colors — a full island you can wrap yourself in. This is a finished, ready-to-ship item, not a pattern.\n\nBoard game merch is usually mugs and t-shirts; this is an heirloom. It takes hours of skilled yarn work, no two come out identical, and it reads instantly to any gamer who walks into the room while staying a genuinely beautiful throw to everyone else. For the Catan fan who has everything, this is the gift that actually surprises them — cozy on the couch between games and conversation-starting decor the rest of the time.",
    title: "Settlers of Catan Blanket",
    game: "catan",
    type: "Decor",
    category: "Catan",
    images: [
      img("6b3d6b", "7114136725", "dgbu"),
      img("27e8dd", "7066187026", "29j8"),
      img("3669dd", "7114136555", "6v4k"),
      img("a68f7c", "7066186752", "kphp"),
    ],
    link: listing("4341779231", "settlers-of-catan-blanket-finished-item"),
    description:
      "A handmade crochet hexagon throw inspired by the island of Catan. Cozy gamer decor — and the ultimate gift for the Catan fan in your life.",
  },

  {
    slug: "catan-trophy",
    price: "28.85",
    longDescription:
      "The Ruler of Catan trophy: a 3D-printed award that lives with whoever won your group's last game. One trophy, one champion, until the next game night changes everything.\n\nA standing trophy transforms casual Catan into a rivalry. The winner displays it on their shelf all week; everyone else plots. It gives your group a running tradition that outlasts any single game — and gives the group chat something to fight about between sessions. If your Catan nights are already competitive, this makes them legendary; if they've gone stale, this reignites them.",
    title: "The Ruler of Catan Trophy",
    game: "catan",
    type: "Award",
    category: "Catan",
    images: [
      img("7842e9", "7052406611", "jq5i"),
      img("3f419f", "7004429154", "b9h8"),
      img("d8ddc9", "7004429142", "56ee"),
    ],
    link: listing("4332307119", "catan-award-the-ruler-of-catan-trophy"),
    description:
      "A 3D-printed trophy for the winner of game night. Because ruling Catan deserves more than bragging rights.",
  },
  {
    slug: "catan-trophies",
    price: "9.31",
    longDescription:
      "Physical 3D-printed trophies for Catan's most contested achievements: Longest Road, Largest Army — and the Snail Award for the slowest builder at the table. The awards physically change hands mid-game as the titles are stolen.\n\nLongest Road and Largest Army are two of Catan's biggest point swings, but on the standard cards they're easy to overlook. Turning them into trophies makes every steal a ceremony — the table sees the road get cut, the trophy slides across, and someone starts plotting revenge. The Snail Award adds a consolation laugh for whoever needs it. It's a small set that adds real theater to every single game.",
    title: "Catan Trophies — Longest Road & Largest Army",
    game: "catan",
    type: "Award",
    category: "Catan",
    images: [
      img("7f37da", "6854449730", "obt7"),
      img("b0df39", "6902425705", "5tjh"),
      img("4a5a7d", "6854449684", "7b4u"),
      img("5a4f6c", "6854449718", "nndp"),
      img("12268f", "6854450824", "7wi7"),
      img("d35e26", "6902427605", "imv6"),
    ],
    link: listing("1881692812", "trophies-compatible-with-catan-longest"),
    description:
      "Physical trophies for Longest Road, Largest Army — and the Snail Award for the slowest player. Pass them around as the game swings.",
  },

  // ── Wingspan ───────────────────────────────────────────
  {
    slug: "wingspan-food-tokens",
    price: "14.89",
    longDescription:
      "3D-printed food token upgrades for Wingspan: sculpted worms, fish, berries, rodents, and grain that replace the cardboard chits next to your birdfeeder. Sized for the player mats and instantly tellable apart, even across the table.\n\nWingspan is one of the most beautiful games ever printed — then hands you grey cardboard circles for food. These tokens close that gap. Feeding your birds becomes as satisfying as playing them, the food types stop getting mixed up (no more squinting at a chit to see if it's a rodent), and the whole table upgrade costs less than a single expansion. If you love Wingspan enough to play it weekly, this is the component fix the game deserved from day one.",
    title: "Wingspan Food Resource Tokens",
    game: "wingspan",
    type: "Tokens",
    category: "Wingspan",
    featured: true,
    images: [
      img("31d6a9", "7821810227", "beb3"),
      img("20191d", "7686446708", "1gko"),
      img("3831b3", "7734388759", "i02x"),
      img("baed94", "7734388757", "opb1"),
      img("80f41f", "7734388743", "1n43"),
      img("3de7fa", "7686446690", "r4i2"),
    ],
    link: listing("4454131273", "wingspan-compatible-food-resource-tokens"),
    description:
      "3D-printed bird food token upgrades for Wingspan. Replace the cardboard tokens with something you'll love picking up.",
  },
  {
    slug: "wingspan-first-player-token",
    price: "7.45",
    longDescription:
      "A 3D-printed holder that gives Wingspan's first player token a proper home beside the board — small footprint, clean lines, always visible.\n\nIt sounds minor until you notice how often your group asks 'wait, who started this round?' Turn order matters in Wingspan — the birdfeeder and card tray reward whoever acts first — and a clearly displayed first player marker keeps the round structure honest. This is a tiny, inexpensive quality-of-life upgrade that removes a recurring annoyance, and it makes a great add-on to any Wingspan gift order.",
    title: "Wingspan First Player Token Holder",
    game: "wingspan",
    type: "Upgrade",
    category: "Wingspan",
    images: [
      img("470348", "7757502935", "rp4t"),
      img("d70534", "7709562574", "hu1l"),
      img("8a8b5b", "7709562602", "d0b3"),
      img("07c199", "7709562608", "bu1o"),
      img("14d36f", "7709562598", "90to"),
      img("43edf0", "7757500917", "d3aj"),
    ],
    link: listing("4457710302", "first-player-token-holder-compatible"),
    description:
      "A 3D-printed first player token holder that fits right into your Wingspan setup. Never lose track of who goes first.",
  },
  {
    slug: "wingspan-puffin-token",
    price: "7.45",
    longDescription:
      "A 3D-printed puffin figure that takes over first player duty in Wingspan. The little bird stands beside whoever leads the round — thematic, visible, and impossible not to smile at.\n\nWingspan is a game about loving birds, so marking the first player with a generic token always felt off. The puffin fixes it with charm: it's the piece guests pick up and ask about, the one that makes the game feel personal rather than stock. For Wingspan fans who already have the deluxe everything, this is the small, delightful piece their collection is missing.",
    title: "Wingspan First Player Token — Puffin",
    game: "wingspan",
    type: "Upgrade",
    category: "Wingspan",
    images: [
      img("aea6e7", "7581417123", "ou7u"),
      img("e6b0c8", "7581390293", "94kp"),
      img("18e840", "7533455394", "uvfa"),
      img("e0e024", "7533455402", "kswh"),
      img("f57bef", "7581390261", "bgqf"),
      img("05a96f", "7581390295", "mk98"),
    ],
    link: listing("4429302908", "wingspan-first-player-token-puffin"),
    description:
      "A charming 3D-printed puffin that marks the first player in Wingspan. The bird theme deserves better than a cardboard chit.",
  },
  {
    slug: "wingspan-goal-tracker",
    price: "10.24",
    longDescription:
      "A 3D-printed round-end goal tracker upgrade for Wingspan that raises the flat goal board into a structured display. Goal tiles sit in dedicated slots and scoring cubes stay exactly where they're placed.\n\nRound-end goals steer the whole game — they're worth up to 28 points — yet the stock board is where cubes go to get bumped. With this tracker, the current goals and standings are readable from every seat, cubes survive an elbow, and players actually plan around goals instead of forgetting them until scoring. It's a strategy aid disguised as an organizer, and it makes Wingspan's most overlooked mechanic impossible to overlook.",
    title: "Wingspan Round End Goal Tracker",
    game: "wingspan",
    type: "Upgrade",
    category: "Wingspan",
    images: [
      img("273eac", "7922827479", "axuj"),
      img("2487eb", "7874938532", "klsk"),
      img("00770e", "7874867280", "nmd7"),
      img("e300ac", "7874867286", "mfwg"),
      img("57348c", "7874867274", "3mw3"),
      img("4e5fa0", "7874937426", "kdgo"),
    ],
    link: listing("4482590528", "wingspan-compatible-round-end-goal"),
    description:
      "Track round-end goals with this 3D-printed upgrade. Clear, visible, and way better than the cardboard original.",
  },
  {
    slug: "wingspan-pocket-insert",
    price: "30.90",
    longDescription:
      "A 3D-printed insert designed specifically for Wingspan Pocket (2026) — Stonemaier's new compact edition, which ships with everything loose in the box. It adds an egg token tray and card holder shaped precisely to the pocket box dimensions.\n\nWingspan Pocket's whole promise is 'grab it and play anywhere' — but after one backpack trip, the stock box becomes a shaken snow globe of eggs and cards. This insert keeps the promise: components stay sorted in transit, setup drops to seconds, and the box still closes flush. It's designed for this box from scratch, not cut down from a big-box organizer. If you bought Pocket to travel with it, this is the missing half of the product.",
    title: "Wingspan Pocket Insert & Organizer",
    newTagline: "For Stonemaier's compact Wingspan — released July 2026",
    newLinkHref: "/games/wingspan-pocket/",
    newLinkLabel: "What is Wingspan Pocket?",
    game: "wingspan-pocket",
    type: "Organizer",
    category: "Wingspan",
    featured: true,
    isNew: true,
    images: [
      img("e1d7ee", "8352487819", "n215"),
      img("e23184", "8352456071", "76ec"),
      img("be0c0b", "8352456059", "o1fi"),
      img("fa2096", "8304559090", "ad4p"),
      img("4fc3bc", "8304559080", "6tbk"),
      img("2857ba", "8304559088", "lvuz"),
    ],
    link: listing("4544996699", "wingspan-pocket-compatible-insert-3d"),
    description:
      "3D-printed insert for Wingspan Pocket (2026) with egg tray and card holder. Setup in seconds, tidy through every game — made for Stonemaier's brand-new compact edition.",
  },
  {
    slug: "wingspan-nectar-tokens",
    price: "17.68",
    longDescription:
      "Sixty-nine 3D-printed nectar tokens for Wingspan's Oceania expansion, printed in two colors so the flower petals pop against every other food type on the table.\n\nNectar is Oceania's defining resource — it flows through every habitat and scores at game end — which means it's constantly being spent, cached, and counted. Having it as distinct, beautiful flowers instead of yet another cardboard chit makes the expansion's economy dramatically easier to track, and the 69-piece count means even the greediest nectar engine won't run short. If Oceania is in your rotation, this is the upgrade that makes its best mechanic shine.",
    title: "Nectar Tokens for Wingspan Oceania",
    game: "wingspan",
    type: "Tokens",
    category: "Wingspan",
    images: [
      img("ec960c", "7686490040", "14z7"),
      img("a577f1", "7734432003", "jjol"),
      img("d40ba5", "7686490028", "ez4t"),
    ],
    link: listing("4454134257", "nectar-resources-for-wingspan-oceania-69"),
    description:
      "69 two-color 3D-printed flower nectar tokens for the Oceania expansion. Your birds deserve real nectar, not cardboard.",
  },
  {
    slug: "wingspan-bird-nest-bowls",
    price: "6.05",
    longDescription:
      "3D-printed bird nest bowls that hold Wingspan's eggs and food tokens in sculpted nests instead of loose piles. Practical sorting that doubles as table decoration.\n\nEvery Wingspan player knows the egg avalanche — one nudge and miniature eggs roll in every direction. Nest bowls solve the practical problem while amplifying the game's theme: your eggs sit in an actual nest, your food supply looks foraged rather than filed. Guests comment on them every time, and setup becomes 'place the nests' instead of 'chase the components.' A charming upgrade that earns its table space at every session.",
    title: "Wingspan Bird Nest Token Bowls",
    game: "wingspan",
    type: "Organizer",
    category: "Wingspan",
    images: [
      img("31e9b1", "7588226071", "fj7q"),
      img("f0f525", "7540274396", "jhwk"),
      img("32d6d5", "7540274388", "1ndy"),
      img("0c4ffd", "7540274394", "a6yo"),
      img("0f6951", "7588214563", "q31q"),
    ],
    link: listing("4430654934", "wingspan-bird-nest-token-bowls-resource"),
    description:
      "Bird nest shaped bowls that hold your Wingspan resources and eggs. Thematic, practical, and adorable on the table.",
  },

  {
    slug: "wingspan-player-tray",
    price: "4.19",
    longDescription:
      "A 3D-printed player tray for Wingspan that keeps each player's food tokens, eggs, and cached resources in separate wells beside their mat.\n\nWingspan turns are full of small transactions — food in, eggs out, resources cached on cards — and without organization, every transaction is a fumble. A personal tray makes your supplies visible at a glance, which genuinely speeds up decisions: you can see whether you can afford that bird without counting a pile. Multiply that across four players and 26 turns, and the tray is easily worth a whole extra game per evening.",
    title: "Wingspan Player Tray",
    game: "wingspan",
    type: "Organizer",
    category: "Wingspan",
    images: [
      img("99caaa", "6972391891", "mgms"),
      img("7b1e9b", "6972391895", "5z9f"),
      img("1a1857", "6924420828", "ojqp"),
      img("ea80cc", "6972391899", "leyb"),
    ],
    link: listing("4317546267", "player-tray-compatible-with-wingspan-3d"),
    description:
      "3D-printed player tray organizer for Wingspan. Keeps your food, eggs, and cards neatly separated during play.",
  },
  {
    slug: "wingspan-deluxe-token-set",
    price: "13.96",
    longDescription:
      "The complete Wingspan resource upgrade in one purchase: every food type plus nectar, 3D-printed and covering the base game, European, and Oceania expansions.\n\nIf you already know you want Wingspan's cardboard gone, buying the full set at once is the smart path — matched aesthetics across every food type, nectar included for when you add Oceania, and a lower total price than assembling the upgrades piecemeal. It's the set for the Wingspan household where the game hits the table weekly and the collection keeps growing. One box, and every component your birds touch is upgraded for good.",
    title: "Wingspan Deluxe Resource Token Set",
    game: "wingspan",
    type: "Tokens",
    category: "Wingspan",
    images: [
      img("ee69b4", "6733691045", "mavv"),
      img("5eb504", "6685653502", "t5l1"),
      img("667b2e", "6924412790", "4vbo"),
      img("0258b3", "6685653404", "tixw"),
      img("03a978", "6685653422", "kdia"),
      img("2dabf6", "6733691051", "phkl"),
    ],
    link: listing("1861335439", "deluxe-food-token-set-compatible-with"),
    description:
      "The complete Wingspan resource upgrade in one box: every food type plus nectar, 3D-printed and ready for the birdfeeder.",
  },

  // ── Wyrmspan ───────────────────────────────────────────
  {
    slug: "wyrmspan-resource-tokens",
    price: "15.82",
    longDescription:
      "3D-printed resource tokens for Wyrmspan: gold coins, meat, and crystals sized for the cave boards and printed in bold, instantly readable colors.\n\nWyrmspan's economy is tighter than Wingspan's — every coin and crystal decision matters — and upgraded tokens make that economy tangible. Feeding a dragon actual meat and paying in actual gold lands differently than pushing cardboard, especially for the dragon-loving players the game was made for. The set also solves a real usability issue: Wyrmspan's resource chits are easy to confuse mid-game, while these sculpted pieces never are. A must for anyone whose group picked Wyrmspan as their engine builder of choice.",
    title: "Wyrmspan Resource Token Set",
    game: "wyrmspan",
    type: "Tokens",
    category: "Wyrmspan",
    images: [
      img("2e5979", "7114725568", "ilpy"),
      img("8ce091", "7114517932", "kls5"),
      img("33c194", "7162490565", "4oq7"),
      img("1e57cb", "7114517920", "t4ut"),
      img("57ffba", "7162490563", "e39p"),
      img("982857", "7114518062", "nfe3"),
    ],
    link: listing("1882347801", "wyrmspan-resource-token-set-3d-printed"),
    description:
      "3D-printed resource tokens for Wyrmspan. Gold, meat, and crystals — sturdy, colorful, and dragon-approved.",
  },

  // ── Scythe ─────────────────────────────────────────────
  {
    slug: "scythe-resource-tokens",
    price: "14.89",
    longDescription:
      "A 3D-printed upgrade set compatible with Scythe: sculpted wood, grain, metal, and oil that replace the standard wooden blocks on your territories.\n\nScythe is a game about production and control, and its resources sit on the map for everyone to see — which is exactly why generic blocks undersell it. Sculpted resources make the board state readable at a distance (crucial in a game where you're constantly assessing opponents' economies) and give the alt-history 1920s world the industrial texture the art promises. For Scythe owners who've already invested in the game's famous production values, this completes the picture.",
    title: "Scythe Resource Tokens",
    game: "scythe",
    type: "Tokens",
    category: "Scythe",
    images: [
      img("575ff0", "6874954197", "6y9h"),
      img("41a571", "6874954201", "h85b"),
      img("edebd9", "6874954195", "18s0"),
      img("827d12", "6874954191", "ivfd"),
      img("337f1d", "6826979174", "lrj1"),
      img("680720", "6874954213", "6weh"),
    ],
    link: listing("4298409396", "resource-tokens-compatible-with-scythe"),
    description:
      "3D-printed upgrade token set for Scythe. Replace the standard components with tactile, detailed resource pieces.",
  },
  {
    slug: "scythe-encounter-tokens",
    price: "6.51",
    longDescription:
      "3D-printed encounter tokens for Scythe that replace the flat encounter markers with dimensional landmarks on the map.\n\nEncounters are Scythe's moments of story — the choices that define your faction's character — but the stock tokens make them easy to ignore among the hexes. Raised, sculpted markers make every encounter spot visible from across the table, which subtly changes how players move: encounters get contested more, stories happen more often, and the map feels alive. A small set that shifts how the game actually plays, not just how it looks.",
    title: "Scythe Encounter Tokens",
    game: "scythe",
    type: "Tokens",
    category: "Scythe",
    images: [
      img("6b9934", "7118574602", "gg6g"),
      img("338090", "7166543805", "ripz"),
      img("2e4acb", "7118574606", "d0aa"),
      img("489316", "7166543797", "5co5"),
      img("0d955d", "7118574618", "55k0"),
    ],
    link: listing("4354083270", "scythe-encounter-tokens-3d-printed-board"),
    description:
      "3D-printed encounter tokens that make exploring Scythe's map feel like the event it is. A small swap with big table presence.",
  },
  {
    slug: "scythe-duel-of-meloch-insert",
    price: "53.98",
    longDescription:
      "A 3D-printed insert built for Scythe: Duel of Meloch (2026) — lidded, stackable trays printed in the game's own blue-gray, brown, and rust palette. Every tray is covered, so resources and components stay exactly where you put them even if the box is carried sideways, and the trays lock together so the whole game lifts out in one tidy stack.\n\nDuel of Meloch is a 45-minute duel — which means setup and teardown are a much bigger share of your evening than in a three-hour epic. This insert makes both nearly instant: lift the stack out, play, drop it back. The lids are the part owners rave about, because a compact box in a backpack is exactly the situation loose tokens ruin. If you bought Meloch to play it often and play it anywhere, this is the upgrade that makes that realistic.",
    title: "Scythe: Duel of Meloch Insert",
    game: "duel-of-meloch",
    type: "Organizer",
    category: "Scythe",
    isNew: true,
    featured: true,
    newTagline: "For Stonemaier's Scythe vs. Expeditions duel — released July 2026",
    newLinkHref: "/games/duel-of-meloch/what-is-duel-of-meloch/",
    newLinkLabel: "What is Duel of Meloch?",
    images: [
      img("f820ce", "8347610374", "3brr"),
      img("bf7b05", "8395495861", "t3pn"),
      img("fb17b9", "8395495893", "3o1r"),
      img("45b3b5", "8347609538", "joi8"),
      img("91c80a", "8347609548", "7uvp"),
      img("da3a41", "8347609564", "2e7e"),
    ],
    link: listing("4551054956", "insert-compatible-with-scythe-duel-of"),
    description:
      "3D-printed organizer for Scythe: Duel of Meloch with lidded, stackable trays in the game's own colors. Nothing spills, nothing mixes, setup takes seconds.",
  },

  // ── Terraforming Mars ──────────────────────────────────
  {
    slug: "terraforming-mars-player-board",
    price: "12.10",
    longDescription:
      "A dual-layer 3D-printed player board for Terraforming Mars with recessed tracks that physically hold your resource and production cubes in place.\n\nAsk any Terraforming Mars player about their worst gaming memory and you'll hear the same story: two hours of engine building erased by one bumped table. The stock thin boards make cube-slide inevitable; this dual-layer board makes it impossible. Production stays set between generations, resources survive an excited gesture, and the game's biggest practical flaw disappears. This is the most-requested upgrade in the hobby for a reason — for TM's long sessions, it's not a luxury, it's insurance.",
    title: "Terraforming Mars Player Board",
    game: "terraforming-mars",
    type: "Organizer",
    category: "Terraforming Mars",
    featured: true,
    images: [
      img("e61ee8", "8335725845", "5n8o"),
      img("cfd079", "8287810670", "l70b"),
      img("49aeac", "8287817644", "ld5r"),
      img("2b88db", "8287810698", "b05m"),
      img("e4926c", "8287810678", "2zz4"),
      img("559233", "8287811002", "6v8d"),
    ],
    link: listing("4542638154", "player-board-upgrade-terraforming-mars"),
    description:
      "3D-printed dual-layer player board with recessed trays for Terraforming Mars. No more bumped cubes ruining your economy.",
  },

  // ── Carcassonne ────────────────────────────────────────
  {
    slug: "carcassonne-resource-tokens",
    price: "7.45",
    longDescription:
      "3D-printed wheat, cloth, and wine barrel tokens for Carcassonne's Traders & Builders expansion, replacing the flat cardboard goods chits.\n\nTraders & Builders is widely considered Carcassonne's best expansion, and trade goods are its cleverest scoring race — but cardboard squares make the race forgettable. Sculpted goods change the psychology: players see the wine barrels stacking up in front of an opponent and start fighting for cities they'd otherwise ignore. If Traders & Builders is in your Carcassonne box, these tokens make its best mechanic visible, competitive, and satisfying to collect.",
    title: "Carcassonne Resource Tokens",
    game: "carcassonne",
    type: "Tokens",
    category: "Carcassonne",
    images: [
      img("3b2a73", "7052456699", "pbzt"),
      img("1949de", "7004479518", "axey"),
      img("95c6d4", "7004479530", "sdex"),
    ],
    link: listing("4332315639", "resource-tokens-compatible-with"),
    description:
      "3D-printed wheat, cloth, and wine goods for the Traders & Builders expansion. Real trade goods for your medieval empire.",
  },

  // ── Cascadia ───────────────────────────────────────────
  {
    slug: "cascadia-game-tray",
    price: "5.58",
    longDescription:
      "A 3D-printed organizer tray for Cascadia that holds habitat tiles, wildlife tokens, and nature tokens through setup, play, and the constant market refills between turns.\n\nCascadia's flow is its greatest strength — draw, place, refill, repeat — and every fumbled refill interrupts it. With the tray, the market restocks itself in one motion and the wildlife bag, tiles, and tokens all have fixed homes. The game's serene rhythm stays serene. It also cuts setup and teardown to a fraction, which matters for a game this easy to play 'just one more' of.",
    title: "Cascadia Game Tray",
    game: "cascadia",
    type: "Organizer",
    category: "Cascadia",
    images: [
      img("cf1048", "6980435237", "gply"),
      img("f128db", "6980433929", "dz7g"),
      img("c5d17e", "6980433933", "apzs"),
      img("5a0e00", "6980433931", "9hxh"),
    ],
    link: listing("4319115681", "cascadia-game-tray-3d-printed-tile-token"),
    description:
      "A 3D-printed tile and token organizer for Cascadia. Draw, place, and refill without the tablecloth chaos.",
  },
  {
    slug: "cascadia-pinecone-tokens",
    price: "6.51",
    longDescription:
      "3D-printed pinecone tokens for Cascadia that replace the cardboard nature token discs with sculpted Pacific Northwest flair.\n\nNature tokens are Cascadia's most precious currency — spend one and you bend the rules of the draft — but a plain disc doesn't feel precious. A tiny pinecone does. It's the kind of upgrade Cascadia's audience appreciates most: gentle, thematic, and true to the game's love of its landscape. Inexpensive enough to be a stocking stuffer, distinctive enough that your copy of Cascadia becomes 'the nice one' in your group.",
    title: "Cascadia Pinecone Tokens",
    game: "cascadia",
    type: "Tokens",
    category: "Cascadia",
    images: [
      img("5639ba", "6931919648", "4hei"),
      img("d91307", "6979888961", "7cl9"),
      img("7eb762", "6931919630", "lbl8"),
    ],
    link: listing("4318997887", "cascadia-pinecone-tokens-3d-printed"),
    description:
      "3D-printed pinecone nature tokens for Cascadia. The Pacific Northwest deserves better than cardboard discs.",
  },

  // ── Everdell ───────────────────────────────────────────
  {
    slug: "everdell-open-signs",
    price: "9.77",
    longDescription:
      "Six 3D-printed open signs compatible with Everdell that mark which of your city's constructions are open for visiting workers.\n\nEverdell's open/occupied states cause more mid-game confusion than any of its actual rules — players constantly forget which buildings still have room. Physical signs make your city's status readable at a glance for the whole table, which speeds up everyone's planning, not just yours. And in a game as gorgeous as Everdell, tiny storefront signs don't just solve a problem; they make your woodland city feel inhabited.",
    title: "Everdell Open Signs (Set of 6)",
    game: "everdell",
    type: "Upgrade",
    category: "Everdell",
    images: [
      img("8645ee", "7699721363", "n4il"),
      img("df669d", "7651775650", "8egf"),
      img("95d5aa", "7699722929", "4nqk"),
    ],
    link: listing("4448763408", "open-signs-compatible-with-everdell-set"),
    description:
      "Six 3D-printed open signs for Everdell. Mark your open businesses in style — a small upgrade with big table presence.",
  },
  {
    slug: "everdell-forest-kit",
    price: "6.98",
    longDescription:
      "The deluxe 3D-printed upgrade kit for Everdell: resource trays for twigs, resin, pebbles, and berries, plus open signs and forest-themed organizers in a single bundle.\n\nEverdell is one of the most beautiful productions in board gaming, undermined nightly by resource piles drifting across the table. This kit gives every resource a sculpted home, makes the supply readable from every seat, and adds to the game's forest aesthetic instead of fighting it. Buying the bundle beats collecting pieces separately — matched design, one shipment, and your Ever-tree finally presides over a city worthy of it.",
    title: "Everdell Deluxe Forest Upgrade Kit",
    game: "everdell",
    type: "Upgrade",
    category: "Everdell",
    images: [
      img("6cb470", "7594611058", "bmkh"),
      img("5edbc0", "7642562791", "5op7"),
      img("a1ee08", "7594608478", "34pp"),
      img("be40b4", "7642562813", "b198"),
      img("bb4446", "7594608474", "kb4o"),
      img("aee71a", "7642562763", "49bu"),
    ],
    link: listing("4439980160", "deluxe-forest-upgrade-kit-compatible"),
    description:
      "Resource trays, open signs, and forest-themed upgrades for Everdell in one deluxe kit. Turn your city into a destination.",
  },

  // ── Agricola & Farming ─────────────────────────────────
  {
    slug: "agricola-resource-tokens",
    price: "33.51",
    longDescription:
      "A complete 3D-printed resource bundle for Agricola: sculpted wood, clay, reed, stone, grain, and pumpkin replacing the classic wooden cubes and discs.\n\nAgricola's farms live or die on resource planning, and sculpted pieces make the planning half the fun — your supply looks like a farmyard, not an abacus. The upgrade especially shines during harvest, when feeding your family with real-looking grain makes the game's central tension land harder. For veterans of the classic, this modernizes a beloved game's table presence in one box; for newcomers, it makes one of the hobby's deepest farming games dramatically more approachable.",
    title: "Agricola Resource Token Bundle",
    game: "agricola",
    type: "Tokens",
    category: "Agricola & Farming",
    images: [
      img("9082d7", "7253612177", "jl6n"),
      img("a22c70", "7253612179", "bfxn"),
      img("5f563b", "7205636194", "2agp"),
      img("78c6f4", "7205636216", "ac5h"),
      img("95a6d2", "7253612175", "nfux"),
      img("619b25", "7253612365", "5ufb"),
    ],
    link: listing("4371081583", "agricola-resource-tokens-wood-clay-reed"),
    description:
      "Wood, clay, reed, stone, grain, and pumpkin — a full 3D-printed resource upgrade for Agricola and other farming games.",
  },
  {
    slug: "rice-reed-tokens",
    price: "2.79",
    longDescription:
      "Ten 3D-printed white sheaves that work as rice or reed in Agricola and any other farming game, sized to standard resource dimensions.\n\nReed is Agricola's chronically underestimated resource — always needed for rooms and renovations, always forgotten in planning. Distinct sculpted sheaves keep it visible in your supply, and because the pieces are deliberately neutral, they moonlight in every other farming game you own. A small, versatile upgrade that quietly improves a whole shelf of games.",
    title: "Rice & Reed Tokens (Set of 10)",
    game: "agricola",
    type: "Tokens",
    category: "Agricola & Farming",
    images: [
      img("fe7ef2", "7253687267", "2rdk"),
      img("434050", "7253687259", "7i85"),
      img("a55943", "7253687271", "rrfb"),
    ],
    link: listing("4371097757", "rice-reed-resource-tokens-set-of-10-3d"),
    description:
      "White 3D-printed sheaves that work as rice or reed in any farming game. Ten detailed pieces per set.",
  },
  {
    slug: "pumpkin-tokens",
    price: "3.26",
    longDescription:
      "Ten miniature 3D-printed pumpkins for harvest-themed board games — Agricola fields, autumn games, or your own designs.\n\nSome upgrades are strategic; this one is joy. A tiny pumpkin patch growing in your farm as the game progresses makes every vegetable action feel like actual gardening, and the bright orange reads perfectly across the table. They're inexpensive, universally compatible with games that use vegetable resources, and the component most likely to make someone at the table say 'okay, those are adorable.'",
    title: "Mini Pumpkin Tokens (10-Pack)",
    game: "agricola",
    type: "Tokens",
    category: "Agricola & Farming",
    images: [
      img("536de5", "7205696956", "42j5"),
      img("2cfff2", "7253672481", "fape"),
      img("2b56d2", "7253672487", "fcx5"),
    ],
    link: listing("4371095467", "mini-pumpkin-tokens-3d-printed-miniature"),
    description:
      "Tiny 3D-printed pumpkins for harvest-themed games. Ten miniature vegetables that upgrade any farm board.",
  },

  // ── Resource Tokens ────────────────────────────────────
  {
    slug: "wood-tokens",
    price: "2.79",
    longDescription:
      "Ten detailed 3D-printed log tokens for wood, timber, or lumber in any board game — from Catan and Agricola to Everdell and your own prototypes.\n\nWood is the most common resource in board gaming, which makes it the highest-value single upgrade you can make: one set of good logs improves half your shelf. These are sculpted for instant recognition, durable enough for every-week play, and neutral enough to fit any game's art style. If you're starting a universal upgrade collection, start here.",
    title: "Wood Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("89add7", "7194905004", "nq0m"),
      img("1967d4", "7194905146", "1i2o"),
      img("5eef50", "7242885355", "a3cl"),
    ],
    link: listing("4368740825", "wood-tokens-log-timber-lumber-firewood"),
    description:
      "Detailed 3D-printed logs that stand in for wood, timber, or lumber in any board game. Set of 10.",
  },
  {
    slug: "wheat-tokens",
    price: "2.79",
    longDescription:
      "Ten golden 3D-printed wheat bundles for grain, crop, or harvest resources across your whole collection.\n\nGrain flows through more games than almost any resource — Catan, Agricola, Viticulture, countless farming games — and a sculpted sheaf reads faster than any cube or chit. The warm gold color pops against every board, harvest phases feel like harvests, and the set moves between games as easily as your dice bag. A staple upgrade for anyone building a nicer table.",
    title: "Wheat Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("81e998", "7194883988", "ezmk"),
      img("63573b", "7242862809", "4lr1"),
      img("f4e45c", "7242862737", "hk89"),
    ],
    link: listing("4368730174", "wheat-tokens-grain-crop-harvest-bundle"),
    description:
      "Golden wheat bundles for grain, crop, or harvest resources. Ten 3D-printed pieces that work across your whole collection.",
  },
  {
    slug: "sheep-tokens",
    price: "3.72",
    longDescription:
      "Ten adorable 3D-printed sheep tokens, available in white or black-and-white flocks, ready for any game with livestock.\n\nSheep are board gaming's most beloved resource — the punchline of every Catan trade — and these little flocks lean into it. They upgrade Catan, Agricola, and every pasture game you own, they're sturdy enough to survive being constantly picked up (they will be), and they're the single most gift-able item in our whole catalog. Fair warning: players have been known to refuse trades just to keep the sheep.",
    title: "Sheep Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("e5d9c8", "7242841517", "cph0"),
      img("949b2f", "7242840369", "as8f"),
      img("caa3dc", "7194860426", "kcer"),
      img("3abfed", "7194860534", "h8wx"),
      img("3a2fb5", "7194860522", "ksry"),
      img("40dad6", "7194861660", "64ld"),
    ],
    link: listing("4368734535", "sheep-tokens-white-or-black-white-board"),
    description:
      "Adorable 3D-printed sheep in white or black & white. Ten woolly upgrades for Catan, Agricola, or any game with livestock.",
  },
  {
    slug: "rock-tokens",
    price: "2.79",
    longDescription:
      "Ten grey 3D-printed stone tokens with a sculpted boulder look for ore, rock, or stone resources.\n\nStone anchors the economy of every building game, and these pieces give it appropriate weight — visually distinct in the supply, satisfying in the hand, and readable from across the table. They serve Catan's ore trade, Agricola's renovations, and any mining or construction game on your shelf. Simple, universal, durable: the workhorse of a nicely upgraded collection.",
    title: "Rock Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("dfd5ee", "7242834895", "pdlt"),
      img("3c158a", "7194851962", "16nn"),
      img("063254", "7242832079", "j3m1"),
      img("56a2f0", "7194852038", "7sbe"),
    ],
    link: listing("4368731461", "rock-tokens-grey-stone-game-pieces-set"),
    description:
      "Grey stone pieces for ore, rock, or stone resources. Ten 3D-printed tokens with satisfying table weight.",
  },
  {
    slug: "milk-tokens",
    price: "2.79",
    longDescription:
      "Ten miniature 3D-printed milk bottles for dairy resources in farming and homestead board games.\n\nMost resource upgrades aim for impressive; these aim for delightful, and hit it. A row of tiny milk bottles in your farm supply makes every dairy action charming, kids adore them, and they're a perfect fit for cozy farming games where atmosphere is the point. An inexpensive splash of whimsy that guests remember long after they've forgotten who won.",
    title: "Milk Bottle Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("5cba67", "7194827638", "5w4s"),
      img("197249", "7194827748", "3kti"),
      img("31cf94", "7194827624", "3ozz"),
      img("1d6a84", "7242807489", "2w6s"),
    ],
    link: listing("4368719972", "milk-bottle-tokens-tabletop-game"),
    description:
      "Miniature milk bottles for dairy resources in farming games. Ten charming 3D-printed pieces.",
  },
  {
    slug: "gold-bar-tokens",
    price: "3.26",
    longDescription:
      "Ten shiny 3D-printed gold bar tokens for gold, wealth, or treasure in economic and adventure games.\n\nMoney is the least tactile part of most board games — paper bills tear, cardboard coins underwhelm. A stack of gleaming gold bars fixes the feeling instantly: hoarding feels like hoarding, paying feels like a loss, and the endgame count becomes a ceremony. They fit pirate games, economic engines, dungeon crawls, and every prototype that needs treasure worth fighting over.",
    title: "Gold Bar Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("97a917", "7241592257", "skro"),
      img("fc669b", "7241592283", "rlzr"),
      img("a86172", "7193614390", "3vgg"),
      img("92aad6", "7241592329", "rjqu"),
    ],
    link: listing("4368444961", "gold-bar-board-game-tokens-shiny-set-of"),
    description:
      "Shiny 3D-printed gold bars that make any treasury feel richer. Ten bars per set — hoard responsibly.",
  },
  {
    slug: "silver-bar-tokens",
    price: "3.26",
    longDescription:
      "Ten gleaming 3D-printed silver bars for metal, coin, or second-tier treasure resources.\n\nSilver completes the precious-metal economy: pair with our gold bars for a two-tier currency that makes denominations instantly readable — no more squinting at coin values. The bars stack neatly, survive heavy handling, and give trading and economic games a vault-like table presence. For groups who play money-driven games weekly, the gold-and-silver pairing is the upgrade that makes every transaction feel consequential.",
    title: "Silver Bar Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("a93b70", "7242893711", "n8ip"),
      img("dd6da0", "7242893713", "nm95"),
      img("281cb9", "7242893781", "s4kj"),
      img("ac995e", "7242893801", "340u"),
    ],
    link: listing("4368733874", "silver-bar-game-tokens-shiny-3d-printed"),
    description:
      "Shiny silver bars for metal, coin, or treasure resources. Ten 3D-printed pieces that gleam on the table.",
  },
  {
    slug: "brick-tokens",
    price: "2.79",
    longDescription:
      "Ten terracotta 3D-printed brick tokens with realistic texture for clay and construction resources.\n\nEvery building game asks you to imagine construction; a pile of textured bricks means you don't have to. They upgrade Catan's brick trade, city builders, and any game where players race to construct — and the warm terracotta color stands out cleanly in any supply. Durable, stackable (yes, players will build tiny walls during other people's turns), and universally compatible.",
    title: "Terracotta Brick Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("ef4222", "7193571638", "7rih"),
      img("8f655a", "7241549993", "dxe2"),
      img("81a0d0", "7193571652", "dlhy"),
      img("799127", "7241552921", "7qip"),
    ],
    link: listing("4368434853", "terracotta-brick-game-tokens-clay"),
    description:
      "Terracotta-colored bricks for clay and building resources. Ten 3D-printed pieces with realistic texture.",
  },
  {
    slug: "oil-barrel-tokens",
    price: "2.79",
    longDescription:
      "Ten industrial 3D-printed oil barrel tokens for fuel and energy resources in engine-building and economic games.\n\nOil and energy power some of the hobby's best games — Scythe, power-grid style games, industrial engine builders — and a proper barrel communicates 'fuel' the way no black cube can. The industrial look matches heavier games' aesthetics, the pieces are chunky enough to handle constant spending and refilling, and they give any combustion-powered economy the gritty texture it deserves.",
    title: "Oil Barrel Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [
      img("6ea8c2", "7193455608", "ftry"),
      img("7bc7b6", "7241433487", "qvd1"),
      img("dc419d", "7241433519", "szjj"),
    ],
    link: listing("4368409158", "oil-barrel-tokens-resource-pieces"),
    description:
      "Industrial oil barrels for fuel and energy resources. Ten 3D-printed tokens for engine builders and empire builders alike.",
  },
  {
    slug: "fish-tokens",
    price: "2.79",
    longDescription:
      "Ten colorful 3D-printed fish tokens for fishing mechanics, market games, or feeding hungry animals in any board game.\n\nFish appear in more games than you'd expect — nature games, market builders, animal feeding, and every fishing-themed design — and these bright, sculpted fish make each catch legible and fun. They're a natural companion to games like Cascadia's salmon runs, instantly understood by kids, and cheap enough to toss into any order as the upgrade you didn't know your collection needed.",
    title: "Fish Tokens (Set of 10)",
    game: "other",
    type: "Tokens",
    category: "Resource Tokens",
    images: [img("7dc12a", "8012039838", "9m8d")],
    link: listing("4503852484", "fish-tokens-board-game-pieces-set-of-10"),
    description:
      "Colorful 3D-printed fish for any game that needs a catch of the day. Ten pieces per set.",
  },
  {
    slug: "hexagon-token-trays",
    price: "2.51",
    longDescription:
      "Stackable hexagonal 3D-printed trays that keep tokens sorted during play and nest into a compact stack for storage.\n\nToken sprawl is the universal board game problem, and hexagons are the elegant answer: trays tile together on the table like a game board, stack into a tower for the shelf, and scale to any collection — buy exactly as many as your games need. They work with every title you own, from party games to heavy euros, which makes them one of the most practical purchases in our whole catalog. Once you sort one game with them, you'll want a stack for every box.",
    title: "Hexagon Token Trays",
    game: "other",
    type: "Organizer",
    category: "Resource Tokens",
    images: [
      img("c3c661", "7516217614", "jy0f"),
      img("d8da94", "7516215078", "pvnu"),
      img("3a4c3f", "7516215048", "a3w4"),
      img("2c88b2", "7516215076", "28z9"),
      img("1cdfd0", "7564151101", "635t"),
      img("74ece3", "7516215068", "ao96"),
    ],
    link: listing("4425834143", "hexagon-token-trays-stackable-board-game"),
    description:
      "Stackable hexagonal bowls that keep tokens sorted during play and nest away after. The upgrade every token set deserves.",
  },

  // ── Organizers & Card Holders ──────────────────────────
  {
    slug: "card-holder",
    price: "4.19",
    longDescription:
      "A 3D-printed card stand with three or four tiered rows that keeps every card upright, visible, and organized.\n\nCard holders sound like an accessibility item — and they're brilliant for kids and anyone whose hands tire — but they're also simply better play: no fanning fifteen cards, no cards flashed to your neighbor, no forgetting what's in the back of your hand. The tiered rows work for hand cards, tableau displays, or a dungeon's card rows. One of those rare upgrades that improves literally every card game you own.",
    title: "Board Game Card Holder (3–4 Rows)",
    game: "other",
    type: "Organizer",
    category: "Organizers & Card Holders",
    images: [
      img("0b19bf", "7602601252", "a2m4"),
      img("5e183b", "7602601232", "at64"),
      img("d50851", "7650545031", "1ujf"),
      img("136a4e", "7602601270", "q20b"),
      img("c37ecd", "7650544949", "l4qz"),
      img("57df65", "7602601302", "kue1"),
    ],
    link: listing("4441229619", "board-game-card-holder-3-or-4-row"),
    description:
      "A 3D-printed card stand with 3 or 4 tiered rows. Every card visible, every hand organized — for any game in your collection.",
  },
  {
    slug: "universal-player-tray",
    price: "6.05",
    longDescription:
      "A universal 3D-printed player tray combining resource wells and a card rail in one station that works across your entire shelf.\n\nGame-specific organizers are wonderful — for one game. This tray is the generalist: every player gets the same tidy setup whether tonight is a heavy euro, a family gateway game, or something brand new. Resources in the wells, cards on the rail, table chaos gone. For groups that rotate games weekly, one tray per player upgrades every single game night without buying an insert for every box.",
    title: "Universal Player Tray & Card Holder",
    game: "other",
    type: "Organizer",
    category: "Organizers & Card Holders",
    images: [
      img("e6483c", "7528025869", "mgtu"),
      img("130346", "7528025825", "kcos"),
      img("e29ff1", "7480098498", "p445"),
      img("b7d244", "7528025871", "p6i1"),
      img("3bf3f1", "7528025821", "cndm"),
      img("94ea00", "7528025859", "qd7r"),
    ],
    link: listing("4419018707", "universal-board-game-player-tray-card"),
    description:
      "One tray for every game night: resource wells and a card rail in a single 3D-printed organizer that works across your whole shelf.",
  },
  {
    slug: "flip-7-organizer",
    price: "18.15",
    longDescription:
      "An organizer insert for Flip 7 with a removable card holder — the hit push-your-luck card game, ready to deal in seconds.\n\nFlip 7 earns its spot on the table by being fast; digging cards out of a loose box isn't. This insert makes the game as quick to start as it is to play: lift the holder out, deal, and go. The insert fits the retail box exactly, keeps everything sorted in a bag or on a shelf, and turns the game into the perfect grab-and-go opener for any game night. Small upgrade, every-session payoff.",
    title: "Flip 7 Organizer Insert",
    game: "flip-7",
    type: "Organizer",
    category: "Organizers & Card Holders",
    images: [
      img("30be84", "7556800523", "kjoi"),
      img("db3fca", "7556751439", "mrcu"),
      img("0517ea", "7508809626", "clln"),
      img("b43522", "7508809612", "cihv"),
      img("f78a94", "7556751325", "jrdh"),
      img("41a868", "7556751509", "3nzd"),
    ],
    link: listing("4424429377", "flip-7-organizer-insert-with-removable"),
    description:
      "An insert for Flip 7 with a removable card holder. Deal, play, and pack up in seconds.",
  },

  {
    slug: "stackable-resource-tray",
    price: "2.79",
    longDescription:
      "Hexagonal 3D-printed resource trays that stack into a tower for storage and spread flat during play — a modular system that grows with your collection.\n\nThe genius is the modularity: one tray per resource type, arranged however tonight's game demands, then stacked into a neat column when you're done. Setup becomes pouring tokens into trays; teardown becomes stacking them. For token-heavy games the time savings are real, and because the system is game-agnostic, it's an investment that keeps paying off with every new box you add to the shelf.",
    title: "Stackable Hexagon Resource Tray",
    game: "other",
    type: "Organizer",
    category: "Organizers & Card Holders",
    images: [
      img("dbc159", "6972345633", "6hme"),
      img("099175", "6972345629", "i2lq"),
      img("b45b39", "6972345651", "cegp"),
      img("1ccd74", "6972345641", "7rge"),
    ],
    link: listing("4317544572", "stackable-resource-tray-hexagon-3d"),
    description:
      "Hexagonal 3D-printed trays that stack for storage and spread out for play. Modular organization for any token-heavy game.",
  },

  // ── Handmade & Crochet ─────────────────────────────────
  {
    slug: "dragon-egg-dice-bag",
    price: "12.02",
    longDescription:
      "A handcrafted dragon egg dice bag with sculpted, scaled texture — a fantasy pouch that guards your dice hoard between sessions.\n\nEvery tabletop player eventually accumulates a dice hoard; very few have a worthy vault. Drawing your dice from a dragon's egg makes the pre-game ritual feel like part of the campaign, the textured craftsmanship stands out instantly at any table, and it's an unbeatable gift for the D&D player in your life — the kind of present that gets shown off at the next session. Handmade, sturdy, and roomy enough for the whole collection.",
    title: "Dragon Egg Dice Bag",
    game: "other",
    type: "Bag",
    category: "Handmade & Crochet",
    images: [
      img("4ed003", "7067147356", "tlqx"),
      img("a26050", "7019664382", "foq2"),
      img("1d0a35", "7019664522", "bijj"),
      img("0f15e8", "7067643351", "gs62"),
      img("93ffd4", "7067643347", "mwpe"),
      img("462cd3", "7054933330", "ah34"),
    ],
    link: listing("4335375254", "dragon-egg-dice-bag-handcrafted-fantasy"),
    description:
      "A handcrafted dragon egg pouch for dice and treasures. Every D&D table needs a hoard worth guarding.",
  },
  {
    slug: "crocheted-token-trays",
    price: "4.27",
    longDescription:
      "Soft handmade crocheted yarn bowls that hold board game tokens without scratches, clatter, or sliding.\n\nHard plastic trays do the job loudly; these do it gently. The soft yarn protects premium components (metal coins love them), silences the token noise that fills a game night, and flattens for storage between sessions. They bring a warm, handmade texture to the table that plastic never will — the board game equivalent of a knitted sweater — and they're made by hand in small batches, so no two sets are quite alike.",
    title: "Crocheted Token Trays",
    game: "other",
    type: "Organizer",
    category: "Handmade & Crochet",
    images: [
      img("356c74", "7001675952", "68kz"),
      img("05cb53", "7049670705", "5zl8"),
      img("316999", "7049651697", "d5y4"),
      img("3179bd", "7049651687", "blov"),
      img("f9b96c", "7001675932", "7due"),
      img("78f716", "7049651677", "cbyh"),
    ],
    link: listing("4331790703", "crocheted-token-trays-soft-yarn-bowls"),
    description:
      "Soft crocheted yarn bowls that hold your tokens without a single table scratch. Handmade coziness for game night.",
  },
  {
    slug: "crocheted-token-bag",
    price: "13.96",
    longDescription:
      "A handmade crocheted drawstring bag with sheep and wheat motifs, sized for board game tokens and blind draws.\n\nEvery game group needs a good draw bag — for Catan robber duty, random setup, or token draws — and this one has charm the velvet pouches can't match. The farmhouse motifs make it a natural companion to Catan and Agricola nights, the sturdy yarn work stands up to constant rummaging, and it doubles as the cutest possible way to store loose components. Handmade, practical, and the kind of small piece that gives your game collection personality.",
    title: "Crocheted Token Bag — Sheep & Wheat",
    game: "other",
    type: "Bag",
    category: "Handmade & Crochet",
    images: [
      img("43870e", "7049613685", "ffod"),
      img("73981d", "7049613595", "d1vu"),
      img("7ca6de", "7049613679", "2lyw"),
      img("d3f097", "7049613597", "nqx3"),
      img("56d119", "7049613599", "a8m2"),
      img("76796b", "7049613601", "ns2q"),
    ],
    link: listing("4331784870", "crocheted-token-bag-sheep-wheat-motif"),
    description:
      "A handmade drawstring pouch with sheep and wheat motifs. Draw tokens blind in style — perfect for Catan robber duty.",
  },

  // ── Wargaming & Terrain ────────────────────────────────
  {
    slug: "gothic-ruin-terrain",
    price: "10.24",
    longDescription:
      "3D-printed gothic ruin scatter terrain for 28mm wargames, Warhammer 40k, Age of Sigmar, and D&D encounters — crumbling arches and battle-worn detail, ready for priming or straight-to-table play.\n\nTerrain is what turns a flat table into a battlefield: it creates cover, line-of-sight decisions, and cinematic moments no bare board can. These ruins are printed at proper 28mm scale so cover rules feel right, the sculpted damage looks natural from every angle, and the pieces take primer and paint beautifully for hobbyists — while looking convincingly grim unpainted for everyone else. An easy way to make every skirmish look like the battle reports you scroll past.",
    title: "Gothic Ruin Terrain (28mm)",
    game: "other",
    type: "Terrain",
    category: "Wargaming & Terrain",
    images: [
      img("27a25f", "7597009138", "jy80"),
      img("3bd813", "7644954833", "2cdi"),
      img("f8cc12", "7644954815", "rbwz"),
      img("1e45cc", "7644954873", "cral"),
      img("314fae", "7644954641", "11lm"),
      img("e261b7", "7597008874", "3lc4"),
    ],
    link: listing("4440346135", "gothic-ruin-terrain-28mm-wargaming"),
    description:
      "3D-printed gothic ruin scatter terrain for 28mm wargames and D&D. Crumbling arches, battle-ready detail.",
  },
  {
    slug: "round-bases",
    price: "2.61",
    longDescription:
      "3D-printed round miniature bases from 25mm to 50mm with sculpted asphalt urban texture, for Warhammer 40k, Age of Sigmar, and D&D miniatures.\n\nBasing is the fastest way to make a miniature collection look coherent and intentional — and sculpted bases skip the messiest part of the hobby. No gluing sand, no texture paste drying overnight: prime, drybrush, done, with crisp street detail that unifies a whole army in a weekend. The size range covers infantry through monsters, so your entire force can stand on the same city streets.",
    title: "Round Miniature Bases (25–50mm)",
    game: "other",
    type: "Terrain",
    category: "Wargaming & Terrain",
    images: [
      img("dcae37", "7594975754", "lx24"),
      img("2cd01b", "7594975728", "5tmd"),
      img("be16ab", "7642929643", "gujb"),
      img("961df9", "7642929653", "7tbz"),
      img("b82bd4", "7642929631", "ofpd"),
      img("93329c", "7642929641", "18ei"),
    ],
    link: listing("4440069156", "round-bases-25mm-50mm-asphalt-urban"),
    description:
      "Asphalt urban-style round bases from 25mm to 50mm for Warhammer 40k, Age of Sigmar, and D&D miniatures.",
  },

  // ── Home & Workshop ────────────────────────────────────
  {
    slug: "tamper-holder",
    price: "13.96",
    longDescription:
      "A 3D-printed tamper holder designed for the Lelit Anita espresso machine — a docking point that keeps your tamper in position and your coffee station organized.\n\nEspresso is a workflow, and a tamper rolling loose on the counter breaks it every morning. This holder gives the tamper a fixed home at exactly the point in your routine where you reach for it, keeps the base clean, and fits the Lelit Anita's dimensions precisely. Designed and printed by espresso nerds who also happen to make board game gear — the same obsession with workflow, applied to your morning shot.",
    title: "Lelit Anita Tamper Holder",
    game: "other",
    type: "Organizer",
    category: "Home & Workshop",
    images: [
      img("5103cb", "7528252011", "elbu"),
      img("d280ca", "7528252041", "f2zu"),
      img("406050", "7480325496", "mry7"),
      img("7a8c77", "7528252019", "eta2"),
      img("cfb0c2", "7480325514", "i1nr"),
    ],
    link: listing("4419061389", "lelit-anita-tamper-holder-coffee-station"),
    description:
      "A 3D-printed tamper holder for the Lelit Anita espresso machine. Keep your coffee station as organized as your game shelf.",
  },

  // ── STL Files (digital) ────────────────────────────────
  {
    slug: "catan-player-tray-stl",
    price: "6.86",
    longDescription:
      "The STL file for our Catan player tray with card holder — an instant digital download you print at home on any standard FDM printer.\n\nThe economics are the reason to buy: one download, unlimited prints. Outfit all six players for the cost of a single shipped tray, reprint in each player's favorite filament color, and print replacements forever if a piece ever breaks. There's no shipping cost, no waiting, and printing board game upgrades is one of the most satisfying beginner-friendly projects a 3D printer can do. If you own both Catan and a printer, this file is the obvious move.",
    title: "Catan Player Tray STL File",
    game: "catan",
    type: "STL File",
    category: "STL Files",
    digital: true,
    images: [
      img("43684c", "8288123738", "jibv"),
      img("97ac74", "8288106416", "j2w1"),
      img("a451cb", "8288106396", "ao4a"),
      img("5caa04", "8288106434", "52qn"),
      img("09db32", "8288106414", "n4i1"),
      img("f4c590", "8336015567", "ls2f"),
    ],
    link: listing("4542673280", "catan-player-tray-stl-3d-print-file"),
    description:
      "3D print file for a Catan player tray with card holder. Instant download — print it at home, no shipping, no waiting.",
  },
  {
    slug: "catan-score-tracker-stl",
    price: "9.19",
    longDescription:
      "A printable STL file for our Catan victory point tracker, supporting 4-player and 6-player games — instant download after purchase.\n\nWhy the file instead of the finished print? Freedom: print one tracker per game group, match your filament to your Catan box, scale it if you like, and never pay shipping. The tracker itself ends Catan's endgame arguments by keeping every player's score public and current. For printer owners, this is the cheapest possible way to solve Catan's most common table dispute — and a fun afternoon print besides.",
    title: "Catan Score Tracker STL File",
    game: "catan",
    type: "STL File",
    category: "STL Files",
    digital: true,
    images: [
      img("36ae08", "7807937425", "g8rs"),
      img("38dda5", "7807405445", "c83f"),
      img("5bddb7", "7807405473", "63kg"),
      img("b70d36", "7807405475", "7ojt"),
      img("ec5002", "7807405465", "9vnj"),
      img("6f1085", "7807405461", "1v5x"),
    ],
    link: listing("4465097302", "3d-printable-catan-score-tracker-digital"),
    description:
      "Printable victory point tracker for 4 and 6 player Catan. Download the STL and print as many as your table needs.",
  },
  {
    slug: "wingspan-goal-tracker-stl",
    price: "9.19",
    longDescription:
      "Print-it-yourself STL files for our Wingspan round-end goal tracker upgrade — instant download, print-ready for standard FDM printers.\n\nYou get the same table-presence upgrade as our printed version: raised goal display, secure cube placement, round-end goals impossible to ignore. Printing it yourself means choosing colors that match your Wingspan collection, printing spares for the expansion boxes, and paying digital-file prices with no shipping. A perfect first functional print for bird lovers who just got a 3D printer — and a smart buy for anyone who already prints.",
    title: "Wingspan Goal Tracker STL File",
    game: "wingspan",
    type: "STL File",
    category: "STL Files",
    digital: true,
    images: [
      img("c3dd21", "8336192907", "4e09"),
      img("d382ad", "8288273638", "q2pw"),
      img("873e58", "8288273656", "7lr4"),
      img("6fe0d7", "8336183107", "qskj"),
      img("0e5392", "8336183083", "gk3k"),
      img("e26918", "8336183085", "poh1"),
    ],
    link: listing("4542695838", "goal-tracker-set-compatible-with"),
    description:
      "Print-it-yourself round end goal tracker set for Wingspan. Instant digital download with print-ready STL files.",
  },
  {
    slug: "terraforming-mars-player-board-stl",
    price: "10.35",
    longDescription:
      "The print-ready STL for our dual-layer Terraforming Mars player board with recessed resource tracks — download once, print for every player at your table.\n\nThe shipped version of this board is our most-praised product; the STL makes it affordable at table scale. Five players need five boards, and printing them yourself costs a fraction of shipping that much plastic across Europe. The dual-layer design pins every cube in place, ending Terraforming Mars' infamous bumped-table tragedies. Print one per player, mix filament colors for player identity, and your group's three-hour sessions are finally elbow-proof.",
    title: "Terraforming Mars Player Board STL File",
    game: "terraforming-mars",
    type: "STL File",
    category: "STL Files",
    digital: true,
    images: [
      img("6e56cd", "8336146401", "9dr2"),
      img("175128", "8288140014", "abef"),
      img("ec2d3d", "8336049061", "sys7"),
      img("1f1178", "8336049055", "tom1"),
      img("f563bd", "8336049049", "b4bv"),
      img("94596a", "8336049045", "b443"),
    ],
    link: listing("4542689438", "player-board-compatible-with"),
    description:
      "Dual-color player board upgrade for Terraforming Mars as a print-ready STL. Download once, print for every player.",
  },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  image: p.images[0],
}));

// Active shop-wide Etsy promotion. Set to 0 when the sale ends —
// strikethrough prices disappear site-wide automatically.
export const DISCOUNT_PERCENT = 10;

export const categories = [
  "Catan",
  "Wingspan",
  "Wyrmspan",
  "Scythe",
  "Terraforming Mars",
  "Carcassonne",
  "Cascadia",
  "Everdell",
  "Agricola & Farming",
  "Resource Tokens",
  "Organizers & Card Holders",
  "Handmade & Crochet",
  "Wargaming & Terrain",
  "STL Files",
  "Home & Workshop",
];

export function getProductsByGame(game: string): Product[] {
  return products.filter((p) => p.game === game);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
