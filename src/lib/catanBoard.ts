// Catan board generator: deals terrain, number tokens and harbours for the base game
// (19 hexes) or the 5–6 player extension (30 hexes), with optional fairness rules.
// Pure functions, so the page renders a board at build time and the browser deals
// new ones with the same code. A seed makes every board reproducible from a link.
//
// Shared links hold only the seed, player count and rules (#b=seed.4.rstf), and the
// board is rebuilt from them, so there's nothing to store. That means the dealing
// below must not change: a different shuffle order or rule check would turn every
// link people have shared into a different board. Drawing changes are safe.

export type Mode = "base" | "56";
export type Terrain = "forest" | "pasture" | "fields" | "hills" | "mountains" | "desert";
export type Resource = "wood" | "sheep" | "wheat" | "brick" | "ore";
export type PortType = "any" | Resource;

export interface Options {
  mode: Mode;
  redApart: boolean; // no 6 or 8 next to another 6 or 8
  sameApart: boolean; // no two equal numbers next to each other
  spreadTerrain: boolean; // no two hexes of the same terrain touching
  fairReds: boolean; // 6s and 8s spread over different resources
}

export const DEFAULT_OPTIONS: Options = {
  mode: "base",
  redApart: true,
  sameApart: true,
  spreadTerrain: true,
  fairReds: true,
};

export interface Hex {
  x: number;
  y: number;
  terrain: Terrain;
  number: number | null;
}

export interface Port {
  type: PortType;
  x: number; // marker centre
  y: number;
  ax: number; // the coast edge it serves
  ay: number;
  bx: number;
  by: number;
}

export interface Spot {
  x: number;
  y: number;
  pips: number;
  hexes: { terrain: Terrain; number: number | null }[];
}

export interface Board {
  seed: string;
  options: Options;
  hexes: Hex[];
  ports: Port[];
  /** Hex index pairs that touch */
  neighbours: number[][];
  /** True when every chosen rule was met (it falls back to fewer rules if a deal gets stuck) */
  allRulesMet: boolean;
}

export const RESOURCE_OF: Record<Exclude<Terrain, "desert">, Resource> = {
  forest: "wood",
  pasture: "sheep",
  fields: "wheat",
  hills: "brick",
  mountains: "ore",
};

const SETS: Record<Mode, { rows: number[]; terrain: Record<Terrain, number>; numbers: number[]; ports: PortType[] }> = {
  base: {
    rows: [3, 4, 5, 4, 3],
    terrain: { forest: 4, pasture: 4, fields: 4, hills: 3, mountains: 3, desert: 1 },
    numbers: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    ports: ["any", "any", "any", "any", "wood", "sheep", "wheat", "brick", "ore"],
  },
  "56": {
    rows: [3, 4, 5, 6, 5, 4, 3],
    terrain: { forest: 6, pasture: 6, fields: 6, hills: 5, mountains: 5, desert: 2 },
    numbers: [2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12],
    ports: ["any", "any", "any", "any", "any", "wood", "sheep", "sheep", "wheat", "brick", "ore"],
  },
};

export const pips = (n: number | null) => (n == null ? 0 : 6 - Math.abs(7 - n));
const isRed = (n: number) => n === 6 || n === 8;

// ── Seeded randomness ──────────────────────────────────────────
function hashSeed(s: string) {
  let h = 1779033703 ^ s.length;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}

function rng(seed: string) {
  let a = hashSeed(seed);
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(list: T[], rand: () => number): T[] {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function randomSeed() {
  return Math.random().toString(36).slice(2, 8);
}

// ── Geometry (pointy-top hexes, radius 1) ─────────────────────
const W = Math.sqrt(3);
const key = (x: number, y: number) => `${Math.round(x * 100)},${Math.round(y * 100)}`;

export function corners(x: number, y: number, r = 1) {
  return [0, 1, 2, 3, 4, 5].map((k) => {
    const a = ((60 * k - 30) * Math.PI) / 180;
    return [x + r * Math.cos(a), y + r * Math.sin(a)] as [number, number];
  });
}

function layout(rows: number[]) {
  const cells: { x: number; y: number }[] = [];
  const mid = (rows.length - 1) / 2;
  rows.forEach((count, i) => {
    for (let j = 0; j < count; j++) {
      cells.push({ x: (j - (count - 1) / 2) * W, y: (i - mid) * 1.5 });
    }
  });
  const neighbours = cells.map((a, i) =>
    cells.flatMap((b, j) => (i !== j && Math.hypot(a.x - b.x, a.y - b.y) < W * 1.05 ? [j] : [])),
  );
  return { cells, neighbours };
}

/** Coast edges in order around the island, each with the hex it belongs to */
function coast(cells: { x: number; y: number }[]) {
  const seen = new Map<string, { a: [number, number]; b: [number, number]; hex: number; n: number }>();
  cells.forEach((c, hex) => {
    const cs = corners(c.x, c.y);
    cs.forEach((a, k) => {
      const b = cs[(k + 1) % 6];
      const id = [key(...a), key(...b)].sort().join("|");
      const e = seen.get(id);
      if (e) e.n++;
      else seen.set(id, { a, b, hex, n: 1 });
    });
  });
  return [...seen.values()]
    .filter((e) => e.n === 1)
    .map((e) => ({ ...e, angle: Math.atan2((e.a[1] + e.b[1]) / 2, (e.a[0] + e.b[0]) / 2) }))
    .sort((p, q) => p.angle - q.angle);
}

// ── Dealing ────────────────────────────────────────────────────
function dealTerrain(count: Record<Terrain, number>, neighbours: number[][], spread: boolean, rand: () => number) {
  const pool: Terrain[] = Object.entries(count).flatMap(([t, n]) => Array(n).fill(t as Terrain));
  if (!spread) return shuffle(pool, rand);

  for (let attempt = 0; attempt < 50; attempt++) {
    const order = shuffle(pool.map((_, i) => i), rand);
    const out: (Terrain | null)[] = Array(pool.length).fill(null);
    const left: Record<string, number> = { ...count };
    let steps = 0;
    const place = (k: number): boolean => {
      if (k === order.length) return true;
      if (++steps > 20000) return false;
      const i = order[k];
      for (const t of shuffle(Object.keys(left) as Terrain[], rand)) {
        if (!left[t] || neighbours[i].some((j) => out[j] === t)) continue;
        out[i] = t;
        left[t]--;
        if (place(k + 1)) return true;
        out[i] = null;
        left[t]++;
      }
      return false;
    };
    if (place(0)) return out as Terrain[];
  }
  return null;
}

function dealNumbers(terrain: Terrain[], numbers: number[], neighbours: number[][], o: Options, rand: () => number) {
  const land = terrain.flatMap((t, i) => (t === "desert" ? [] : [i]));
  const reds = numbers.filter(isRed).length;
  const maxRedsPerResource = Math.ceil(reds / 5);

  for (let attempt = 0; attempt < 50; attempt++) {
    // Place the high-probability tokens first: they carry the strictest rules.
    const order = shuffle(land, rand);
    const tokens = [...shuffle(numbers.filter(isRed), rand), ...shuffle(numbers.filter((n) => !isRed(n)), rand)];
    const out: (number | null)[] = Array(terrain.length).fill(null);
    const redsOn: Record<string, number> = {};
    let steps = 0;

    const ok = (i: number, n: number) => {
      for (const j of neighbours[i]) {
        const m = out[j];
        if (m == null) continue;
        if (o.redApart && isRed(n) && isRed(m)) return false;
        if (o.sameApart && n === m) return false;
      }
      if (o.fairReds && isRed(n) && (redsOn[terrain[i]] ?? 0) >= maxRedsPerResource) return false;
      return true;
    };

    // Each step fills the next token into some still-empty hex.
    const place = (k: number): boolean => {
      if (k === tokens.length) return true;
      if (++steps > 40000) return false;
      const n = tokens[k];
      for (const i of order) {
        if (out[i] != null || !ok(i, n)) continue;
        out[i] = n;
        if (isRed(n)) redsOn[terrain[i]] = (redsOn[terrain[i]] ?? 0) + 1;
        if (place(k + 1)) return true;
        out[i] = null;
        if (isRed(n)) redsOn[terrain[i]]--;
      }
      return false;
    };
    if (place(0)) return out;
  }
  return null;
}

/** Gap between the best- and worst-paying resource, in average pips per hex */
function unevenness(terrain: Terrain[], numbers: (number | null)[]) {
  const sum: Record<string, number> = {};
  const count: Record<string, number> = {};
  terrain.forEach((t, i) => {
    if (t === "desert") return;
    sum[t] = (sum[t] ?? 0) + pips(numbers[i]);
    count[t] = (count[t] ?? 0) + 1;
  });
  const avg = Object.keys(sum).map((t) => sum[t] / count[t]);
  return Math.max(...avg) - Math.min(...avg);
}

export function generate(options: Options, seed: string): Board {
  const set = SETS[options.mode];
  const rand = rng(`${seed}:${options.mode}`);
  const { cells, neighbours } = layout(set.rows);

  // Try with every chosen rule; if a deal is impossible, drop rules one at a time.
  const relaxations: Partial<Options>[] = [{}, { fairReds: false }, { fairReds: false, sameApart: false }, { fairReds: false, sameApart: false, spreadTerrain: false }];
  let terrain: Terrain[] | null = null;
  let numbers: (number | null)[] | null = null;
  let relaxed = 0;
  for (; relaxed < relaxations.length; relaxed++) {
    const o = { ...options, ...relaxations[relaxed] };
    terrain = dealTerrain(set.terrain, neighbours, o.spreadTerrain, rand);
    if (!terrain) continue;
    numbers = dealNumbers(terrain, set.numbers, neighbours, o, rand);
    if (numbers && o.fairReds) {
      // Of several valid deals, keep the one where every resource pays out most evenly per hex.
      let best = unevenness(terrain, numbers);
      for (let i = 0; i < 40; i++) {
        const next = dealNumbers(terrain, set.numbers, neighbours, o, rand);
        const score = next ? unevenness(terrain, next) : Infinity;
        if (score < best) [numbers, best] = [next, score];
      }
    }
    if (numbers) break;
  }
  if (!terrain || !numbers) {
    terrain = shuffle(Object.entries(set.terrain).flatMap(([t, n]) => Array(n).fill(t as Terrain)), rand);
    const nums = shuffle(set.numbers, rand);
    numbers = terrain.map((t) => (t === "desert" ? null : nums.pop() ?? null));
  }

  const hexes: Hex[] = cells.map((c, i) => ({ ...c, terrain: terrain![i], number: numbers![i] }));

  // Harbours sit at evenly spaced points on the coast, like the printed frame.
  const edges = coast(cells);
  const types = shuffle(set.ports, rand);
  const ports: Port[] = types.map((type, i) => {
    const e = edges[Math.floor(((i + 0.5) * edges.length) / types.length)];
    const mx = (e.a[0] + e.b[0]) / 2;
    const my = (e.a[1] + e.b[1]) / 2;
    const h = cells[e.hex];
    const len = Math.hypot(mx - h.x, my - h.y);
    return { type, x: mx + ((mx - h.x) / len) * 0.45, y: my + ((my - h.y) / len) * 0.45, ax: e.a[0], ay: e.a[1], bx: e.b[0], by: e.b[1] };
  });

  return { seed, options, hexes, ports, neighbours, allRulesMet: relaxed === 0 };
}

/** The best places for a first settlement: most pips, ties broken by resource variety. */
export function bestSpots(board: Board, count = 3): Spot[] {
  const byKey = new Map<string, { x: number; y: number; hexes: number[] }>();
  board.hexes.forEach((h, i) => {
    for (const [x, y] of corners(h.x, h.y)) {
      const k = key(x, y);
      const v = byKey.get(k) ?? { x, y, hexes: [] };
      v.hexes.push(i);
      byKey.set(k, v);
    }
  });
  const spots = [...byKey.values()].map((v) => {
    const hexes = v.hexes.map((i) => board.hexes[i]);
    const variety = new Set(hexes.filter((h) => h.terrain !== "desert").map((h) => h.terrain)).size;
    return { x: v.x, y: v.y, pips: hexes.reduce((s, h) => s + pips(h.number), 0), variety, hexes: hexes.map(({ terrain, number }) => ({ terrain, number })) };
  });
  spots.sort((a, b) => b.pips - a.pips || b.variety - a.variety);

  // Keep picks at least two roads apart, as settlements must be.
  const picked: typeof spots = [];
  for (const s of spots) {
    if (picked.every((p) => Math.hypot(p.x - s.x, p.y - s.y) > 1.5)) picked.push(s);
    if (picked.length === count) break;
  }
  return picked.map(({ variety: _v, ...s }) => s);
}

/** Total pips per resource: how often each one pays out, out of 36 rolls. */
export function production(board: Board) {
  const out: Record<Resource, number> = { wood: 0, sheep: 0, wheat: 0, brick: 0, ore: 0 };
  for (const h of board.hexes) if (h.terrain !== "desert") out[RESOURCE_OF[h.terrain]] += pips(h.number);
  return out;
}

// ── URL state ──────────────────────────────────────────────────
const FLAGS: [keyof Options, string][] = [
  ["redApart", "r"],
  ["sameApart", "s"],
  ["spreadTerrain", "t"],
  ["fairReds", "f"],
];

export function toHash(seed: string, o: Options) {
  const flags = FLAGS.filter(([k]) => o[k]).map(([, c]) => c).join("") || "-";
  return `#b=${seed}.${o.mode === "56" ? 6 : 4}.${flags}`;
}

export function fromHash(hash: string): { seed: string; options: Options } | null {
  const m = /b=([a-z0-9]{1,12})\.([46])\.([a-z-]+)/.exec(hash);
  if (!m) return null;
  const options = { ...DEFAULT_OPTIONS, mode: (m[2] === "6" ? "56" : "base") as Mode };
  for (const [k, c] of FLAGS) (options as Record<string, unknown>)[k] = m[3].includes(c);
  return { seed: m[1], options };
}

// ── Drawing ────────────────────────────────────────────────────
export const COLOURS: Record<Terrain, { fill: string; ink: string }> = {
  forest: { fill: "#3E7A47", ink: "#24502C" },
  pasture: { fill: "#9DC26A", ink: "#5E7F35" },
  fields: { fill: "#E2B947", ink: "#9A7417" },
  hills: { fill: "#C0653A", ink: "#86391A" },
  mountains: { fill: "#8C929B", ink: "#545A63" },
  desert: { fill: "#E3CF9F", ink: "#B49A62" },
};

export const PORT_COLOUR: Record<PortType, string> = {
  any: "#FAFAF8",
  wood: COLOURS.forest.fill,
  sheep: COLOURS.pasture.fill,
  wheat: COLOURS.fields.fill,
  brick: COLOURS.hills.fill,
  ore: COLOURS.mountains.fill,
};

const f = (n: number) => +n.toFixed(3);

/** The sea frame: a six-sided outline around the island, like the printed frame. */
function frame(points: [number, number][], margin: number) {
  const lines = [30, 90, 150, 210, 270, 330].map((deg) => {
    const n = [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180)];
    return { n, d: Math.max(...points.map(([x, y]) => x * n[0] + y * n[1])) + margin };
  });
  return lines.map((a, i) => {
    const b = lines[(i + 1) % 6];
    const det = a.n[0] * b.n[1] - a.n[1] * b.n[0];
    return [(a.d * b.n[1] - a.n[1] * b.d) / det, (a.n[0] * b.d - a.d * b.n[0]) / det] as [number, number];
  });
}
const pts = (cs: [number, number][]) => cs.map(([x, y]) => `${f(x)},${f(y)}`).join(" ");

function icon(t: Terrain, x: number, y: number, scale = 0.2) {
  const c = COLOURS[t].ink;
  const g = (inner: string) => `<g transform="translate(${f(x)} ${f(y)}) scale(${scale})">${inner}</g>`;
  switch (t) {
    case "forest":
      return g(`<path d="M-1.6 1.1 L-0.6 -1.2 L0.4 1.1 Z M-0.2 1.1 L0.9 -1.5 L2 1.1 Z" fill="${c}"/>`);
    case "pasture":
      return g(`<ellipse cx="0" cy="0.1" rx="1.25" ry="0.85" fill="#F7F4EC"/><ellipse cx="1.25" cy="-0.25" rx="0.42" ry="0.36" fill="#3A3A36"/><path d="M-0.6 0.9 V1.5 M0.5 0.9 V1.5" stroke="#3A3A36" stroke-width="0.28" stroke-linecap="round"/>`);
    case "fields":
      return g(`<path d="M-0.9 1.4 Q-0.7 0 -1 -1.3 M0 1.4 V-1.5 M0.9 1.4 Q0.7 0 1 -1.3" stroke="${c}" stroke-width="0.26" fill="none" stroke-linecap="round"/><ellipse cx="-1" cy="-1.1" rx="0.28" ry="0.5" fill="${c}"/><ellipse cx="0" cy="-1.35" rx="0.3" ry="0.55" fill="${c}"/><ellipse cx="1" cy="-1.1" rx="0.28" ry="0.5" fill="${c}"/>`);
    case "hills":
      return g(`<g fill="${c}"><rect x="-1.7" y="-0.05" width="1.6" height="0.75" rx="0.1"/><rect x="0.1" y="-0.05" width="1.6" height="0.75" rx="0.1"/><rect x="-0.8" y="-0.95" width="1.6" height="0.75" rx="0.1"/></g>`);
    case "mountains":
      return g(`<path d="M-2 1.1 L-0.6 -1.3 L0.8 1.1 Z" fill="${c}"/><path d="M-0.4 1.1 L0.9 -0.8 L2.1 1.1 Z" fill="${c}" opacity="0.8"/><path d="M-1.05 -0.52 L-0.6 -1.3 L-0.15 -0.52 L-0.6 -0.72 Z" fill="#F1F2F4"/>`);
    case "desert":
      return g(`<path d="M-2 0.9 Q-1 -0.2 0 0.9 M-0.4 0.9 Q0.8 -0.6 2 0.9" stroke="${c}" stroke-width="0.3" fill="none" stroke-linecap="round"/>`);
  }
}

const TERRAIN_OF: Record<Resource, Terrain> = { wood: "forest", sheep: "pasture", wheat: "fields", brick: "hills", ore: "mountains" };
const FONT = `font-family="Space Grotesk, system-ui, sans-serif" font-weight="700"`;

function token(n: number, x: number, y: number, delay: number) {
  const ink = isRed(n) ? "#B3261E" : "#1F1B16";
  const p = pips(n);
  const dots = Array.from({ length: p }, (_, i) => `<circle cx="${f(x + (i - (p - 1) / 2) * 0.072)}" cy="${f(y + 0.17)}" r="0.027" fill="${ink}"/>`).join("");
  return `<g class="tok" style="animation-delay:${delay}ms"><circle cx="${f(x)}" cy="${f(y + 0.04)}" r="0.35" fill="#000" opacity="0.28"/><circle cx="${f(x)}" cy="${f(y)}" r="0.35" fill="url(#cb-token)"/><circle cx="${f(x)}" cy="${f(y)}" r="0.3" fill="none" stroke="#CDB98F" stroke-width="0.014"/><text x="${f(x)}" y="${f(y + 0.035)}" text-anchor="middle" ${FONT} font-size="${n >= 10 ? 0.27 : 0.31}" fill="${ink}">${n}</text>${dots}</g>`;
}

const TERRAIN_NAME: Record<Terrain, string> = { forest: "Forest (wood)", pasture: "Pasture (sheep)", fields: "Fields (wheat)", hills: "Hills (brick)", mountains: "Mountains (ore)", desert: "Desert" };

function shade(hex: string, amount: number) {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v: number) => Math.max(0, Math.min(255, Math.round(amount > 0 ? v + (255 - v) * amount : v * (1 + amount))));
  return `#${[(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => ch(v).toString(16).padStart(2, "0")).join("")}`;
}

function defs() {
  const tiles = (Object.keys(COLOURS) as Terrain[])
    .map((t) => `<radialGradient id="cb-${t}" cx="45%" cy="35%" r="75%"><stop offset="0" stop-color="${shade(COLOURS[t].fill, 0.14)}"/><stop offset="0.65" stop-color="${COLOURS[t].fill}"/><stop offset="1" stop-color="${shade(COLOURS[t].fill, -0.18)}"/></radialGradient>`)
    .join("");
  return `<defs>${tiles}
<radialGradient id="cb-token" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#FFF9EC"/><stop offset="1" stop-color="#E8D9B6"/></radialGradient>
<linearGradient id="cb-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F7499"/><stop offset="1" stop-color="#1D4C6A"/></linearGradient>
<pattern id="cb-waves" width="0.9" height="0.45" patternUnits="userSpaceOnUse"><path d="M0 0.25 Q0.225 0.12 0.45 0.25 T0.9 0.25" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="0.025" fill="none"/></pattern>
<filter id="cb-shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="0.06" stdDeviation="0.05" flood-color="#000" flood-opacity="0.35"/></filter>
</defs>`;
}

/** Spot markers, drawn into the board's #cb-spots layer so toggling them doesn't re-deal. */
export function renderSpots(spots: Spot[]) {
  return spots
    .map((s, i) => `<g class="spot"><title>Best starting spot ${i + 1}: ${s.pips} pips</title><circle class="spot-ring" cx="${f(s.x)}" cy="${f(s.y)}" r="0.3" fill="none" stroke="#FAFAF8" stroke-width="0.05"/><circle cx="${f(s.x)}" cy="${f(s.y)}" r="0.21" fill="#1A1A1A" stroke="#FAFAF8" stroke-width="0.05"/><text x="${f(s.x)}" y="${f(s.y + 0.075)}" text-anchor="middle" ${FONT} font-size="0.21" fill="#FAFAF8">${i + 1}</text></g>`)
    .join("");
}

export function renderSvg(board: Board, spots: Spot[] = []) {
  const xs = board.hexes.map((h) => h.x);
  const ys = board.hexes.map((h) => h.y);
  const pad = 1.9;
  const minX = Math.min(...xs) - pad, maxX = Math.max(...xs) + pad;
  const minY = Math.min(...ys) - pad, maxY = Math.max(...ys) + pad;

  const outline = pts(frame(board.hexes.flatMap((h) => corners(h.x, h.y)), 0.85));
  const sea = `<polygon points="${outline}" fill="url(#cb-sea)" stroke="#1D4C6A" stroke-width="0.4" stroke-linejoin="round"/><polygon points="${outline}" fill="url(#cb-waves)"/>`;
  const shore = board.hexes.map((h) => `<polygon points="${pts(corners(h.x, h.y, 1.09))}" fill="#E6D6B0"/>`).join("");

  // Deal from the centre outwards: tiles first, then the number tokens.
  const order = board.hexes.map((h, i) => ({ i, d: Math.hypot(h.x, h.y) })).sort((a, b) => a.d - b.d);
  const rank = new Map(order.map((o, k) => [o.i, k]));
  const step = 28;
  const tokensStart = board.hexes.length * step * 0.6;

  const piers = board.ports
    .map((p) => `<path class="port" d="M${f(p.ax)} ${f(p.ay)} L${f(p.x)} ${f(p.y)} L${f(p.bx)} ${f(p.by)}" stroke="#C9AE7E" stroke-width="0.08" fill="none" stroke-linejoin="round"/>`)
    .join("");

  const ports = board.ports
    .map((p) => {
      const name = p.type === "any" ? "Any resource 3:1" : `${p.type[0].toUpperCase()}${p.type.slice(1)} 2:1`;
      const inner =
        p.type === "any"
          ? `<text x="${f(p.x)}" y="${f(p.y + 0.085)}" text-anchor="middle" ${FONT} font-size="0.24" fill="#1A1A1A">3:1</text>`
          : `${icon(TERRAIN_OF[p.type], p.x, p.y - 0.09, 0.085)}<text x="${f(p.x)}" y="${f(p.y + 0.22)}" text-anchor="middle" ${FONT} font-size="0.15" fill="#1A1A1A">2:1</text>`;
      return `<g class="port"><title>${name}</title><circle cx="${f(p.x)}" cy="${f(p.y + 0.035)}" r="0.34" fill="#000" opacity="0.25"/><circle cx="${f(p.x)}" cy="${f(p.y)}" r="0.34" fill="${p.type === "any" ? "#FAF5EA" : shade(PORT_COLOUR[p.type], 0.45)}" stroke="${p.type === "any" ? "#CDB98F" : PORT_COLOUR[p.type]}" stroke-width="0.05"/>${inner}</g>`;
    })
    .join("");

  const robberAt = board.hexes.findIndex((h) => h.terrain === "desert");
  const tiles = board.hexes
    .map((h, i) => {
      const c = COLOURS[h.terrain];
      const delay = rank.get(i)! * step;
      const label = h.number ? `${TERRAIN_NAME[h.terrain]}, ${h.number}` : TERRAIN_NAME[h.terrain];
      const robber =
        i === robberAt
          ? `<g transform="translate(${f(h.x)} ${f(h.y + 0.14)})"><ellipse cx="0" cy="0.36" rx="0.26" ry="0.07" fill="#000" opacity="0.25"/><path d="M-0.2 0.34 L-0.13 -0.12 Q0 -0.2 0.13 -0.12 L0.2 0.34 Z" fill="#2A2724"/><circle cx="0" cy="-0.27" r="0.14" fill="#2A2724"/><path d="M-0.07 -0.33 Q0 -0.38 0.05 -0.31" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="0.025" fill="none"/></g>`
          : "";
      const tok = h.number ? token(h.number, h.x, h.y + 0.12, tokensStart + rank.get(i)! * 22) : robber;
      return `<g class="tile" style="animation-delay:${delay}ms"><title>${label}</title><polygon points="${pts(corners(h.x, h.y, 0.965))}" fill="url(#cb-${h.terrain})" filter="url(#cb-shadow)"/><polygon points="${pts(corners(h.x, h.y, 0.92))}" fill="none" stroke="#FFFFFF" stroke-opacity="0.16" stroke-width="0.03"/><polygon points="${pts(corners(h.x, h.y, 0.965))}" fill="none" stroke="${c.ink}" stroke-opacity="0.45" stroke-width="0.025"/>${icon(h.terrain, h.x, h.y - 0.55)}${tok}</g>`;
    })
    .join("");

  const title = board.options.mode === "56" ? "Catan board for 5–6 players" : "Catan board for 3–4 players";
  return `<svg class="catan-svg" xmlns="http://www.w3.org/2000/svg" viewBox="${f(minX)} ${f(minY)} ${f(maxX - minX)} ${f(maxY - minY)}" role="img" aria-label="${title}"><title>${title}</title>${defs()}${sea}${piers}${shore}${tiles}${ports}<g id="cb-spots">${renderSpots(spots)}</g></svg>`;
}
