export type AppGroup = "table" | "everyday" | "makers";

export interface App {
  slug: string;
  name: string;
  /** Name plus descriptor — the App Store title where there is one. Keyword-rich, so it doubles as the page H1. */
  fullName: string;
  /** One line for cards and callouts. */
  tagline: string;
  headline: string;
  intro: string[];
  group: AppGroup;
  category: string;
  /** schema.org applicationCategory */
  schemaCategory: string;
  icon: string;
  /** Per-app accent, taken from the app's own icon and screenshots. */
  accent: string;
  platform: string;
  appStoreId?: string;
  /** The app's own domain, when it has one — we explain the app here and link out. */
  website?: string;
  websitePitch?: string;
  supportUrl?: string;
  privacyUrl?: string;
  /** App Store marketing screenshots — captions are baked into the images. */
  screenshots: string[];
  features: { icon: string; title: string; text: string }[];
  /** For apps without screenshots: a short "how it works". */
  steps?: { title: string; text: string }[];
  pricing: {
    summary: string;
    free: string[];
    paidName: string;
    paid: string[];
  };
  facts: { label: string; value: string }[];
  faq: { q: string; a: string }[];
  isNew?: boolean;
  /** Old top-level folder (e.g. /gissa/) that may be set as the App Store marketing URL. */
  legacyPath?: string;
}

export const appGroups: { id: AppGroup; title: string; blurb: string }[] = [
  {
    id: "table",
    title: "For the game table",
    blurb: "Apps for game nights, made by people who host a lot of them.",
  },
  {
    id: "everyday",
    title: "For everyday life",
    blurb: "Small, focused apps for coffee, focus, and the person across the table.",
  },
  {
    id: "makers",
    title: "For makers and sellers",
    blurb: "The tools we built to run our own shop, opened up to everyone.",
  },
];

const shots = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/apps/${slug}/${i + 1}.webp`);

export const apps: App[] = [
  // ── For the game table ────────────────────────────────
  {
    slug: "game-night",
    name: "Game Night",
    fullName: "Game Night: Party Games",
    tagline: "Seven party games in one app, plus AI packs about you and your friends.",
    headline: "The party game app for any get-together.",
    intro: [
      "Game Night puts seven party games in one app: charades, trivia, taboo, emoji puzzles, categories, fill-in-the-blank stories and a deck of party prompts. One phone gets passed around the room, teams form, and the app keeps score.",
      "It's for the nights when there are too many people for the board game on the shelf. Rounds take a couple of minutes, and nobody has to read a rulebook.",
    ],
    group: "table",
    category: "Party games",
    schemaCategory: "GameApplication",
    icon: "/images/apps/game-night.png",
    accent: "#6D3FD1",
    platform: "iPhone & iPad",
    appStoreId: "6775038407",
    supportUrl: "/gissa/support/",
    privacyUrl: "/gissa/privacy/",
    legacyPath: "/gissa",
    screenshots: shots("game-night", 6),
    features: [
      {
        icon: "🎭",
        title: "Seven games, one app",
        text: "Charades with tilt-to-score, Trivia, Taboo, Emoji, Categories, Story and Party. Switch games without switching apps.",
      },
      {
        icon: "✨",
        title: "Packs made with AI",
        text: "Type a topic, an inside joke or your group's favourite show, and Game Night builds a custom pack in seconds.",
      },
      {
        icon: "🗂️",
        title: "180+ decks",
        text: "Movies, music, history, food and more, across every game. Mix decks from different games for a chaotic round.",
      },
      {
        icon: "🏆",
        title: "Teams and scores",
        text: "Play in teams or all together. Scores are kept for you, and the results can be shared as a card.",
      },
      {
        icon: "💾",
        title: "Save your favourites",
        text: "Keep the packs that worked and bring them back next time the same crowd is over.",
      },
      {
        icon: "🌍",
        title: "Six languages",
        text: "English, Swedish, German, French, Spanish and Turkish.",
      },
    ],
    pricing: {
      summary: "Free download, optional PRO subscription",
      free: ["Free to download", "Free decks to start playing straight away"],
      paidName: "Game Night PRO",
      paid: [
        "All seven games",
        "180+ premium decks",
        "AI custom packs",
        "Deck mixing and saved packs",
      ],
    },
    facts: [
      { label: "Platform", value: "iPhone & iPad" },
      { label: "Games", value: "7 in one app" },
      { label: "Languages", value: "6" },
      { label: "Age rating", value: "9+" },
    ],
    faq: [
      {
        q: "Does everyone need the app?",
        a: "No. Game Night is played on a single phone that gets passed around the room, so only the host needs it installed.",
      },
      {
        q: "How many people can play?",
        a: "Game Night is made for groups. Play all together or split into teams. The only limit is how many people can see the screen.",
      },
      {
        q: "Is it free?",
        a: "Game Night is free to download, with free decks to start with. Game Night PRO is an optional subscription that unlocks all seven games, the premium decks, AI packs, deck mixing and saved packs.",
      },
    ],
  },
  {
    slug: "lone-meeple",
    name: "Lone Meeple",
    fullName: "Lone Meeple: Solo Board Games",
    tagline: "A play journal for solo board gamers: log plays, beat your bests, track campaigns.",
    headline: "The journal your solo board gaming deserves.",
    intro: [
      "Most play loggers are built for groups, and solo play ends up as an afterthought. Lone Meeple is built the other way round: one player, against the game, and against your own past self.",
      "Log a play in seconds, then watch your personal bests, win rates and streaks build up across every game on your shelf. The catalog covers thousands of games, so finding yours takes a couple of taps.",
    ],
    group: "table",
    category: "Solo board gaming",
    schemaCategory: "UtilitiesApplication",
    icon: "/images/apps/lone-meeple.png",
    accent: "#2F5D3A",
    platform: "iPhone & iPad",
    appStoreId: "6788124918",
    supportUrl: "/lone-meeple/support/",
    privacyUrl: "/lone-meeple/privacy/",
    legacyPath: "/lone-meeple",
    isNew: true,
    screenshots: shots("lone-meeple", 5),
    features: [
      {
        icon: "⏱️",
        title: "Log plays fast",
        text: "Score, result, difficulty, duration, and the opponent or scenario you faced. Add notes for the moments worth remembering.",
      },
      {
        icon: "🏅",
        title: "Beat yourself",
        text: "Personal bests for every game, including games where the lowest score wins. Weekly streaks, and a small celebration for every new record.",
      },
      {
        icon: "📊",
        title: "Solo insights",
        text: "Win rates by difficulty and by opponent, so you finally know your real record against your favourite villain.",
      },
      {
        icon: "🗺️",
        title: "Campaigns",
        text: "Track chapters and missions in campaign and legacy games, and link each play to the chapter it belongs to.",
      },
      {
        icon: "🖼️",
        title: "Share cards",
        text: "Post- and story-sized cards of your shelf and monthly recaps, with an optional AI-written summary of your season.",
      },
      {
        icon: "☁️",
        title: "Backed up",
        text: "Sign in with Apple or Google to keep your journal in sync across phones. Export all your data whenever you like.",
      },
    ],
    pricing: {
      summary: "Free, with a one-time Pro unlock",
      free: [
        "Unlimited play logging, your plays are never locked",
        "Five games on your shelf",
        "One campaign",
      ],
      paidName: "Lone Meeple Pro",
      paid: [
        "Unlimited games and campaigns",
        "All insights and every badge",
        "Extra themes and AI recaps",
        "One-time purchase, no subscription",
      ],
    },
    facts: [
      { label: "Platform", value: "iPhone & iPad" },
      { label: "Pro", value: "One-time purchase" },
      { label: "Languages", value: "7" },
      { label: "Badges", value: "16 to earn" },
    ],
    faq: [
      {
        q: "Which games does it support?",
        a: "Any game. The catalog covers thousands of titles from BoardGameGeek, and you can add your own if something is missing.",
      },
      {
        q: "Does it work for co-op campaigns played solo, like Gloomhaven?",
        a: "Yes. Log the scenario, difficulty and result for each play, and link plays to campaign chapters to follow the whole campaign.",
      },
      {
        q: "Is there a subscription?",
        a: "No. Lone Meeple Pro is a single one-time purchase. The free version never locks the plays you've logged.",
      },
      {
        q: "Is it affiliated with BoardGameGeek or any publisher?",
        a: "No. Lone Meeple is an unofficial companion that stores only your own data. Game catalog data and images are provided by BoardGameGeek.",
      },
    ],
  },

  // ── For everyday life ─────────────────────────────────
  {
    slug: "glimt",
    name: "Glimt",
    fullName: "Glimt: Couples Questions",
    tagline: "Conversation cards and a pass-the-phone quiz, for the two of you.",
    headline: "Questions that bring you closer.",
    intro: [
      "Glimt is a deck of conversations for two. Pull a card and read it out loud, or pass the phone and find out how well you really know each other.",
      "All 690 questions were written for Glimt, and every deck starts light and goes deeper as you play. It works offline, so it's just as good in a cabin or on a long flight. Glimt is Swedish for a glimpse.",
    ],
    group: "everyday",
    category: "Couples & conversation",
    schemaCategory: "LifestyleApplication",
    icon: "/images/apps/glimt.png",
    accent: "#D9572B",
    platform: "iPhone & iPad",
    appStoreId: "6789508959",
    supportUrl: "/glimt/support/",
    privacyUrl: "/glimt/privacy/",
    legacyPath: "/glimt",
    screenshots: shots("glimt", 5),
    features: [
      {
        icon: "🃏",
        title: "Twelve decks",
        text: "First Sparks, Memory Lane, Deep Waters, Dream Together, After Dark and more. From first-date light to 2 a.m. deep.",
      },
      {
        icon: "🎯",
        title: "The Us Quiz",
        text: "Answer in secret, pass the phone, and see if your partner guesses you right. Ten rounds and a score.",
      },
      {
        icon: "☀️",
        title: "Daily Glimt",
        text: "One new question every day, with a streak and small milestones to keep the habit going.",
      },
      {
        icon: "📴",
        title: "Works offline",
        text: "No signal needed, and no account either, unless you want your favourites and streak backed up.",
      },
      {
        icon: "💌",
        title: "Long distance too",
        text: "A dedicated deck for couples who are apart, to feel close from anywhere.",
      },
      {
        icon: "🌍",
        title: "Eleven languages",
        text: "Written with care in each language, not machine-translated and forgotten.",
      },
    ],
    pricing: {
      summary: "Free to play, optional Pro subscription",
      free: ["Two complete decks", "The Guess Me quiz", "A new Daily Glimt every day"],
      paidName: "Glimt Pro",
      paid: [
        "All twelve decks and 690 questions",
        "Every quiz round and dare",
        "Monthly or annual, never weekly",
      ],
    },
    facts: [
      { label: "Platform", value: "iPhone & iPad" },
      { label: "Questions", value: "690 originals" },
      { label: "Languages", value: "11" },
      { label: "Age rating", value: "12+" },
    ],
    faq: [
      {
        q: "Is Glimt really free?",
        a: "Yes. Two full decks, the Guess Me quiz and the daily question are free for good. There's no trial that quietly turns into a charge.",
      },
      {
        q: "Do we need two phones?",
        a: "No. One phone is enough: read the cards out loud, or pass it back and forth for the quizzes.",
      },
      {
        q: "Is it only for long-term couples?",
        a: "No. The decks run from first-date light to deep, and there's a Long Distance deck for couples who are apart.",
      },
    ],
  },
  {
    slug: "brewio",
    name: "Brewio",
    fullName: "Brewio: Coffee Journal & Timer",
    tagline: "Coffee journal, brew timer and bean stash for home baristas.",
    headline: "Never forget the cup that worked.",
    intro: [
      "Brewio is a coffee journal for people who dial in. Log the grind, dose, yield and time of every brew, keep track of the beans on your shelf, and build recipes for every method from V60 to espresso.",
      "The workshop runs on coffee, so a coffee app was always going to happen. Brewio has its own home at brewio.app, with free brewing guides and calculators.",
    ],
    group: "everyday",
    category: "Coffee journal",
    schemaCategory: "LifestyleApplication",
    icon: "/images/apps/brewio.png",
    accent: "#B66A2C",
    platform: "iPhone & iPad",
    appStoreId: "6762492301",
    website: "https://brewio.app",
    websitePitch:
      "brewio.app has free tools you can use in any browser: a coffee ratio calculator, an extraction yield calculator, a grind size chart and a brew timer. You'll also find brewing guides for V60, AeroPress, French press, espresso and cold brew.",
    privacyUrl: "https://brewio.app/privacy/",
    screenshots: shots("brewio", 5),
    features: [
      {
        icon: "📓",
        title: "Brew log",
        text: "Grind setting, dose, yield, brew time and a rating for every cup, with tasting notes so you remember how each bean performed.",
      },
      {
        icon: "🫘",
        title: "Bean stash",
        text: "Roaster, origin, process, roast date and flavour notes for every bag, so you can see which beans need drinking first.",
      },
      {
        icon: "⏲️",
        title: "Recipes and timer",
        text: "Built-in guides and your own recipes with dose, water, temperature and step-by-step pours, for any brew method.",
      },
      {
        icon: "⭐",
        title: "Find your favourites",
        text: "Archive the beans you loved and filter your journal by method and rating to repeat your best cups.",
      },
    ],
    pricing: {
      summary: "Free download, optional Pro subscription",
      free: ["A generous number of brew logs", "Up to 3 active bags of beans", "1 personal recipe"],
      paidName: "Brewio Pro",
      paid: ["Unlimited brew log", "Unlimited bean stash", "Unlimited recipes"],
    },
    facts: [
      { label: "Platform", value: "iPhone & iPad" },
      { label: "Brew methods", value: "Pour-over to espresso" },
      { label: "Languages", value: "15" },
      { label: "Website", value: "brewio.app" },
    ],
    faq: [
      {
        q: "Which brew methods does it support?",
        a: "All the common ones, from pour-over (V60, Chemex) to AeroPress, French press and espresso. You can build a custom recipe for anything else.",
      },
      {
        q: "Is there a web version?",
        a: "The journal is an iPhone app, but brewio.app has free calculators and brewing guides that work in any browser.",
      },
    ],
  },
  {
    slug: "just-pomodoro",
    name: "Just Pomodoro",
    fullName: "Just Pomodoro: Stay Focused",
    tagline: "A calm focus timer with 27 pixel-art animal friends who work alongside you.",
    headline: "Most focus apps shout at you. This one whispers.",
    intro: [
      "Just Pomodoro is a gentle focus timer. Pick an animal buddy, start a pomodoro, and watch the timer fill with water while you work.",
      "It's our oldest app, first released in 2020 and rebuilt many times since. Live Activities, widgets, ambient sounds and guided breaks are all in there, but the main screen is still just a timer.",
    ],
    group: "everyday",
    category: "Focus timer",
    schemaCategory: "UtilitiesApplication",
    icon: "/images/apps/just-pomodoro.png",
    accent: "#1690AE",
    platform: "iPhone & iPad",
    appStoreId: "1517869765",
    supportUrl: "/just-pomodoro/support/",
    privacyUrl: "https://anilemrah.github.io/just-pomodoro-legal/privacy.html",
    legacyPath: "/just-pomodoro",
    screenshots: shots("just-pomodoro", 6),
    features: [
      {
        icon: "🐾",
        title: "27 animal buddies",
        text: "Mochi the cat, a fox, a sloth, a phoenix, an axolotl and more. Each has four animated moods and focuses alongside you.",
      },
      {
        icon: "🌊",
        title: "Water-fill timer",
        text: "The timer rises like a tide as you focus, with bubbles drifting through. Calm, never aggressive.",
      },
      {
        icon: "📱",
        title: "Live Activity and widgets",
        text: "A countdown on the Dynamic Island and lock screen, and home screen widgets for today's focus time and streak.",
      },
      {
        icon: "📈",
        title: "Focus analytics",
        text: "Weekly bars, a monthly heatmap, a year-in-focus graph, and the hour of the day you focus best.",
      },
      {
        icon: "🎧",
        title: "12 ambient sounds",
        text: "Rain, ocean, forest, fireplace, coffee shop and more. Mix them and save your own presets.",
      },
      {
        icon: "🧘",
        title: "Guided breaks",
        text: "Box breathing, 4-7-8 breathing, stretches and 20-20-20 eye rest, so breaks feel like breaks.",
      },
    ],
    pricing: {
      summary: "Free download, optional Premium subscription",
      free: ["The full Pomodoro timer", "Up to 3 projects", "5 animal friends"],
      paidName: "Just Pomodoro Premium",
      paid: [
        "Unlimited projects",
        "All 27 animal friends",
        "All 8 water themes and dark mode",
        "Custom sound presets and full analytics history",
      ],
    },
    facts: [
      { label: "Platform", value: "iPhone & iPad" },
      { label: "Since", value: "2020" },
      { label: "Languages", value: "10" },
      { label: "Animal buddies", value: "27" },
    ],
    faq: [
      {
        q: "What is the Pomodoro technique?",
        a: "You work in focused blocks, traditionally 25 minutes, with a short break after each one and a longer break after four. Just Pomodoro handles the timing, and you can change the lengths per project.",
      },
      {
        q: "Does it sync between devices?",
        a: "Yes. Sign in with Apple or Google and your sessions, streaks, projects and unlocked friends follow you.",
      },
    ],
  },

  // ── For makers and sellers ────────────────────────────
  {
    slug: "listcraft",
    name: "ListCraft",
    fullName: "ListCraft: Marketplace Listing Generator",
    tagline: "Turns a product photo into a ready-to-paste marketplace listing.",
    headline: "From product photo to finished listing.",
    intro: [
      "ListCraft writes marketplace listings from a photo. Upload up to three pictures of what you're selling, pick the marketplace, and get a title, description and tags written for that marketplace.",
      "We built it for our own Etsy shop of board game upgrades, then opened it up to other sellers. It lives at listcraft.co and runs in any browser.",
    ],
    group: "makers",
    category: "Seller tool",
    schemaCategory: "BusinessApplication",
    icon: "/images/apps/listcraft.svg",
    accent: "#D98A1C",
    platform: "Web, any browser",
    website: "https://listcraft.co",
    websitePitch:
      "ListCraft runs on its own site. Sign up there to get 5 free listings, with no card needed, and try it on something you're selling right now.",
    supportUrl: "https://listcraft.co/contact",
    privacyUrl: "https://listcraft.co/privacy",
    screenshots: [],
    steps: [
      { title: "Upload a photo", text: "Up to three photos of the item, plus an optional note about size, condition or materials." },
      { title: "Pick a marketplace", text: "Etsy, eBay, Vinted, Depop, Tradera, Amazon, Poshmark, Mercari or Facebook Marketplace." },
      { title: "Paste your listing", text: "A title, description and tags written to that marketplace's length limits, keyword fields and tone." },
    ],
    features: [
      {
        icon: "🛍️",
        title: "Nine marketplaces",
        text: "Each one gets its own title length, keyword field and tone, rather than one generic text pasted everywhere.",
      },
      {
        icon: "🌍",
        title: "Seven languages",
        text: "Write listings in English, Swedish, French, German, Dutch, Spanish or Italian.",
      },
      {
        icon: "⚡",
        title: "Seconds, not an evening",
        text: "A finished listing in seconds, ready to paste and tweak.",
      },
      {
        icon: "🪙",
        title: "Pay as you go",
        text: "Credit packs instead of a subscription, and credits never expire.",
      },
    ],
    pricing: {
      summary: "5 free listings, then pay as you go",
      free: ["5 free listings when you sign up", "Every marketplace and language"],
      paidName: "Credit packs",
      paid: ["One-off packs from 20 to 100 listings", "No subscription", "Credits never expire"],
    },
    facts: [
      { label: "Platform", value: "Web, any browser" },
      { label: "Marketplaces", value: "9" },
      { label: "Languages", value: "7" },
      { label: "Website", value: "listcraft.co" },
    ],
    faq: [
      {
        q: "Which marketplaces does it support?",
        a: "Etsy, eBay, Vinted, Depop, Tradera, Amazon, Poshmark, Mercari and Facebook Marketplace.",
      },
      {
        q: "Is there a subscription?",
        a: "No. You get 5 free listings when you sign up, then buy a credit pack when you need more. Credits never expire.",
      },
      {
        q: "Who's behind it?",
        a: "We are. ListCraft started as the tool we built for our own Etsy shop, and it's run by Fjord Labs in Sweden.",
      },
    ],
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

export const appStoreUrl = (app: App) =>
  app.appStoreId ? `https://apps.apple.com/app/id${app.appStoreId}` : undefined;

/** Where the main call-to-action goes: the App Store, or the app's own site. */
export const primaryUrl = (app: App) => appStoreUrl(app) ?? app.website!;

export const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, "");
