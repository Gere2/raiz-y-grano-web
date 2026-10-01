import type { Copy } from "@/i18n";
import { productIndex, type ProductRef } from "@/content/carta";

/**
 * Recomendador «¿No sabes qué tomar?».
 *
 * Cada producto de la carta 2026/27 tiene aquí un perfil: temperatura,
 * cafeína, dulzor, intensidad, si lleva leche y a qué sabe. El recomendador
 * pregunta qué te apetece, descarta lo que no puede ser (frío si lo quieres
 * caliente, con leche si no la quieres, con cafeína si no la quieres y no se
 * puede pedir descafeinado) y puntúa el resto.
 *
 * Los niveles son relativos dentro de la carta, no medidas: «cafeína 3» quiere
 * decir «lleva café», no unos miligramos. Precio y nombre salen de
 * `carta.ts`, así que no se desfasan; `recomendador.test.ts` comprueba que
 * cada producto de la carta tiene perfil y que siempre hay recomendación.
 */

export type Temp = "caliente" | "frio" | "ambos";
export type DrinkTaste = "cafe" | "cremoso" | "chocolate" | "afrutado" | "especiado" | "verde";
export type FoodTaste = "chocolate" | "cremoso" | "zanahoria" | "ligero" | "fruta" | "sorpresa";
export type Level = 0 | 1 | 2 | 3;

export type Profile = {
  pos: string;
  kind: "bebida" | "comida";
  temp: Temp;
  /** 0 sin cafeína · 1 poca (té) · 2 media (matcha) · 3 lleva café. */
  caffeine: Level;
  /** Dulzor de la receta tal cual se sirve (el azúcar del sobre aparte). */
  sweet: Level;
  /** Fuerza del sabor. */
  intensity: Level;
  /** Lleva leche de serie (se puede pedir sin lactosa o vegetal, sin suplemento). */
  milk: boolean;
  /** Lleva espresso y se puede pedir descafeinado, sin coste. */
  decaf?: boolean;
  /** Sabores, el principal primero. */
  tastes: (DrinkTaste | FoodTaste)[];
  /** Comida: 1 para picar, 2 para quitar el hambre. */
  hunger?: 1 | 2;
  /** CookieCup: la bebida va en un vaso de galleta. */
  cup?: boolean;
  /** Cambia con la temporada o cada semana. */
  varies?: boolean;
  /** Grabado propio (si no, el de su familia). */
  art?: string;
  /** Es el tamaño grande de otro producto: no se recomienda aparte, sale como consejo. */
  largeOf?: string;
  pitch: Copy<string>;
};

const c = (es: string, en: string, fr: string): Copy<string> => ({ es, en, fr });

export const PROFILES: Profile[] = [
  // ── Café ──────────────────────────────────────────────────────────
  { pos: "Espresso", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 3, milk: false, decaf: true, tastes: ["cafe"],
    pitch: c("Un trago corto e intenso del café de la casa.", "A short, intense shot of our house coffee.", "Un shot court et intense de notre café maison.") },
  { pos: "Americano", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 2, milk: false, decaf: true, tastes: ["cafe"],
    pitch: c("Espresso alargado con agua: largo y limpio.", "Espresso lengthened with water: long and clean.", "Espresso allongé à l’eau : long et net.") },
  { pos: "Cortado", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 2, milk: true, decaf: true, tastes: ["cafe"],
    pitch: c("Espresso con un toque de leche: intenso pero redondo.", "Espresso with a dash of milk: intense but rounded.", "Espresso avec une touche de lait : intense mais rond.") },
  { pos: "Café con leche", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 1, milk: true, decaf: true, tastes: ["cremoso", "cafe"], art: "cafe-con-leche",
    pitch: c("El clásico de cada mañana, suave y cremoso.", "The everyday classic, smooth and creamy.", "Le classique de tous les matins, doux et crémeux.") },
  { pos: "Café con leche grande", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 1, milk: true, decaf: true, tastes: ["cremoso", "cafe"], art: "cafe-con-leche", largeOf: "Café con leche",
    pitch: c("El clásico, en grande para las mañanas largas.", "The classic, large, for long mornings.", "Le classique, en grand pour les longues matinées.") },
  { pos: "Café Bombón", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 3, intensity: 2, milk: true, decaf: true, tastes: ["cremoso", "cafe"],
    pitch: c("Espresso con leche condensada: dulce y muy goloso.", "Espresso with condensed milk: sweet and indulgent.", "Espresso au lait concentré sucré : doux et gourmand.") },
  { pos: "Cappuccino", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 1, milk: true, decaf: true, tastes: ["cremoso", "cafe"], art: "cafe-con-leche",
    pitch: c("Espresso con leche y mucha espuma.", "Espresso with milk and plenty of foam.", "Espresso, lait et beaucoup de mousse.") },
  { pos: "Flat White", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 2, milk: true, decaf: true, tastes: ["cafe", "cremoso"], art: "cafe-con-leche",
    pitch: c("Más café que leche, con textura sedosa.", "More coffee than milk, with a silky texture.", "Plus de café que de lait, texture soyeuse.") },
  { pos: "Moca", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 2, intensity: 1, milk: true, decaf: true, tastes: ["chocolate", "cafe", "cremoso"],
    pitch: c("Café, chocolate y leche, todo en uno.", "Coffee, chocolate and milk, all in one.", "Café, chocolat et lait, tout en un.") },
  { pos: "Café de especialidad V60", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 0, intensity: 2, milk: false, tastes: ["cafe"],
    pitch: c("Café de filtro preparado para ti: el mejor modo de probar el origen.", "Filter coffee brewed for you: the best way to taste the origin.", "Café filtre préparé pour vous : la meilleure façon de goûter l’origine.") },

  // ── Café frío ─────────────────────────────────────────────────────
  { pos: "Cold Brew", kind: "bebida", temp: "frio", caffeine: 3, sweet: 0, intensity: 2, milk: false, tastes: ["cafe"], art: "cold-brew",
    pitch: c("Café extraído en frío durante horas: suave y con poco amargor.", "Coffee steeped cold for hours: smooth, with little bitterness.", "Café infusé à froid pendant des heures : doux et peu amer.") },
  { pos: "Iced Latte", kind: "bebida", temp: "frio", caffeine: 3, sweet: 0, intensity: 1, milk: true, decaf: true, tastes: ["cremoso", "cafe"],
    pitch: c("Espresso con leche fría y hielo: refrescante.", "Espresso with cold milk over ice: refreshing.", "Espresso, lait froid et glaçons : rafraîchissant.") },
  { pos: "Iced Mocha", kind: "bebida", temp: "frio", caffeine: 3, sweet: 2, intensity: 1, milk: true, decaf: true, tastes: ["chocolate", "cafe", "cremoso"],
    pitch: c("El moca en frío: chocolate, café y hielo.", "Mocha over ice: chocolate, coffee and ice.", "Le moka glacé : chocolat, café et glaçons.") },
  { pos: "Flat White con hielo", kind: "bebida", temp: "frio", caffeine: 3, sweet: 0, intensity: 2, milk: true, decaf: true, tastes: ["cafe", "cremoso"],
    pitch: c("El flat white en frío: mucho café y textura.", "An iced flat white: coffee-forward and silky.", "Le flat white glacé : beaucoup de café, texture soyeuse.") },
  { pos: "Vanilla Iced Latte", kind: "bebida", temp: "frio", caffeine: 3, sweet: 2, intensity: 1, milk: true, decaf: true, tastes: ["cremoso", "cafe"],
    pitch: c("Iced latte con vainilla: dulce y fresquito.", "Iced latte with vanilla: sweet and cool.", "Iced latte à la vanille : doux et frais.") },
  { pos: "Pistachio Iced Latte", kind: "bebida", temp: "frio", caffeine: 3, sweet: 2, intensity: 1, milk: true, decaf: true, tastes: ["cremoso", "cafe"], art: "matcha-pistacho",
    pitch: c("Iced latte con pistacho: cremoso y dulce.", "Iced latte with pistachio: creamy and sweet.", "Iced latte à la pistache : crémeux et doux.") },

  // ── Matcha y de la casa ───────────────────────────────────────────
  // Sin azúcar (confirmado por el propietario el 01-10-2026).
  { pos: "Matcha Latte", kind: "bebida", temp: "caliente", caffeine: 2, sweet: 0, intensity: 1, milk: true, tastes: ["verde", "cremoso"],
    pitch: c("Matcha con leche, sin azúcar: energía tranquila y sabor vegetal.", "Matcha with milk, no sugar: calm energy and a grassy flavour.", "Matcha au lait, sans sucre : énergie douce et saveur végétale.") },
  { pos: "Iced Matcha", kind: "bebida", temp: "frio", caffeine: 2, sweet: 1, intensity: 1, milk: true, tastes: ["verde", "cremoso"],
    pitch: c("Matcha con leche fría y hielo.", "Matcha with cold milk over ice.", "Matcha, lait froid et glaçons.") },
  { pos: "Iced Matcha de vainilla", kind: "bebida", temp: "frio", caffeine: 2, sweet: 2, intensity: 1, milk: true, tastes: ["verde", "cremoso"],
    pitch: c("Iced matcha con un toque de vainilla.", "Iced matcha with a hint of vanilla.", "Iced matcha avec une touche de vanille.") },
  { pos: "Iced Matcha con sirope de vainilla", kind: "bebida", temp: "frio", caffeine: 2, sweet: 3, intensity: 1, milk: true, tastes: ["verde", "cremoso"],
    pitch: c("Iced matcha endulzado con sirope de vainilla.", "Iced matcha sweetened with vanilla syrup.", "Iced matcha sucré au sirop de vanille.") },
  { pos: "Strawberry Iced Matcha", kind: "bebida", temp: "frio", caffeine: 2, sweet: 2, intensity: 1, milk: true, tastes: ["afrutado", "verde"], art: "matcha-fresa",
    pitch: c("Matcha frío con fresa: afrutado y dulce.", "Iced matcha with strawberry: fruity and sweet.", "Matcha glacé à la fraise : fruité et doux.") },
  { pos: "Pistachio Iced Matcha", kind: "bebida", temp: "frio", caffeine: 2, sweet: 2, intensity: 1, milk: true, tastes: ["verde", "cremoso"], art: "matcha-pistacho",
    pitch: c("Matcha frío con pistacho: cremoso y dulce.", "Iced matcha with pistachio: creamy and sweet.", "Matcha glacé à la pistache : crémeux et doux.") },
  { pos: "Dirty Matcha grande", kind: "bebida", temp: "ambos", caffeine: 3, sweet: 1, intensity: 2, milk: true, tastes: ["verde", "cafe"],
    pitch: c("Matcha con un shot de espresso, en grande: doble energía.", "Matcha with a shot of espresso, large: double the energy.", "Matcha et un shot d’espresso, en grand : double énergie.") },

  // ── Chai y chocolate ──────────────────────────────────────────────
  { pos: "Chai Latte", kind: "bebida", temp: "caliente", caffeine: 1, sweet: 2, intensity: 1, milk: true, tastes: ["especiado", "cremoso"],
    pitch: c("Té con especias y leche: cálido y reconfortante.", "Spiced tea with milk: warm and comforting.", "Thé épicé au lait : chaleureux et réconfortant.") },
  { pos: "Chai grande", kind: "bebida", temp: "caliente", caffeine: 1, sweet: 2, intensity: 1, milk: true, tastes: ["especiado", "cremoso"], largeOf: "Chai Latte",
    pitch: c("El chai latte, en grande.", "Chai latte, large.", "Le chai latte, en grand.") },
  { pos: "Iced Chai", kind: "bebida", temp: "frio", caffeine: 1, sweet: 2, intensity: 1, milk: true, tastes: ["especiado", "cremoso"],
    pitch: c("Chai con leche fría y hielo: especiado y fresco.", "Chai with cold milk over ice: spiced and cool.", "Chai, lait froid et glaçons : épicé et frais.") },
  { pos: "Dirty Chai", kind: "bebida", temp: "ambos", caffeine: 3, sweet: 2, intensity: 2, milk: true, tastes: ["especiado", "cafe"],
    pitch: c("Chai con un shot de espresso: especias y café.", "Chai with a shot of espresso: spice meets coffee.", "Chai et un shot d’espresso : épices et café.") },
  { pos: "ColaCao 0% azúcares añadidos", kind: "bebida", temp: "ambos", caffeine: 0, sweet: 1, intensity: 1, milk: true, tastes: ["chocolate", "cremoso"],
    pitch: c("El de toda la vida, sin azúcares añadidos.", "The classic Spanish cocoa drink, no added sugar.", "Le cacao classique espagnol, sans sucres ajoutés.") },

  // ── Tés e infusiones ──────────────────────────────────────────────
  { pos: "Té verde", kind: "bebida", temp: "caliente", caffeine: 1, sweet: 0, intensity: 1, milk: false, tastes: ["verde"],
    pitch: c("Té verde: ligero y con un poco de teína.", "Green tea: light, with a little caffeine.", "Thé vert : léger, avec un peu de théine.") },
  { pos: "Té verde con jengibre y limón", kind: "bebida", temp: "caliente", caffeine: 1, sweet: 0, intensity: 2, milk: false, tastes: ["verde", "afrutado"],
    pitch: c("Té verde con jengibre y ralladura de limón: con chispa.", "Green tea with ginger and lemon zest: zesty.", "Thé vert, gingembre et zeste de citron : vif.") },
  { pos: "Rooibos, hibisco, fresa y ciruela", kind: "bebida", temp: "caliente", caffeine: 0, sweet: 0, intensity: 1, milk: false, tastes: ["afrutado"],
    pitch: c("Rooibos afrutado, sin teína.", "Fruity rooibos, caffeine-free.", "Rooibos fruité, sans théine.") },
  { pos: "Té Receta de la Abuela", kind: "bebida", temp: "caliente", caffeine: 0, sweet: 0, intensity: 1, milk: false, tastes: ["afrutado"],
    pitch: c("Hibisco, frutos rojos y fresa: afrutado y reconfortante.", "Hibiscus, red berries and strawberry: fruity and comforting.", "Hibiscus, fruits rouges et fraise : fruité et réconfortant.") },
  { pos: "Té de temporada", kind: "bebida", temp: "caliente", caffeine: 1, sweet: 0, intensity: 1, milk: false, tastes: ["verde", "afrutado"], varies: true,
    pitch: c("Cambia con la temporada: pregúntanos cuál toca.", "Changes with the season: ask us which one it is.", "Change selon la saison : demandez-nous lequel.") },

  // ── Frío y fruta ──────────────────────────────────────────────────
  { pos: "Smoothie", kind: "bebida", temp: "frio", caffeine: 0, sweet: 2, intensity: 1, milk: false, tastes: ["afrutado"], art: "fruta",
    pitch: c("Fruta al cien por cien, batida y fría.", "100% fruit, blended and cold.", "100 % fruits, mixés et frais.") },
  { pos: "Açaí Bowl", kind: "comida", temp: "frio", caffeine: 0, sweet: 2, intensity: 1, milk: false, tastes: ["fruta", "ligero"], hunger: 2, art: "acai",
    pitch: c("Açaí con granola y toppings: fresco y saciante.", "Açaí with granola and toppings: fresh and filling.", "Açaí, granola et toppings : frais et rassasiant.") },

  // ── Repostería ────────────────────────────────────────────────────
  { pos: "Cookie chocolate chips", kind: "comida", temp: "ambos", caffeine: 0, sweet: 3, intensity: 2, milk: false, tastes: ["chocolate"], hunger: 1,
    pitch: c("La clásica de chips de chocolate.", "The classic chocolate chip cookie.", "Le cookie classique aux pépites de chocolat.") },
  { pos: "Cookie de la semana", kind: "comida", temp: "ambos", caffeine: 0, sweet: 3, intensity: 2, milk: false, tastes: ["sorpresa"], hunger: 1, varies: true,
    pitch: c("Cambia cada semana: pregúntanos cuál toca.", "Changes every week: ask us which one it is.", "Change chaque semaine : demandez-nous lequel.") },
  { pos: "Magdalena de temporada", kind: "comida", temp: "ambos", caffeine: 0, sweet: 2, intensity: 1, milk: false, tastes: ["ligero"], hunger: 1, varies: true,
    pitch: c("Esponjosa y ligera, de temporada.", "Light and fluffy, seasonal.", "Moelleuse et légère, de saison.") },
  { pos: "Muffin de zanahoria y nueces", kind: "comida", temp: "ambos", caffeine: 0, sweet: 2, intensity: 1, milk: false, tastes: ["zanahoria"], hunger: 1,
    pitch: c("Zanahoria y nueces en formato muffin.", "Carrot and walnuts, muffin-style.", "Carotte et noix, en muffin.") },
  { pos: "Tarta de zanahoria y nueces", kind: "comida", temp: "ambos", caffeine: 0, sweet: 2, intensity: 1, milk: false, tastes: ["zanahoria"], hunger: 2,
    pitch: c("Nuestro bizcocho de zanahoria y nueces, el del menú desayuno o merienda.", "Our carrot and walnut cake, the one in the breakfast menu.", "Notre gâteau carotte et noix, celui de la formule petit-déjeuner.") },
  { pos: "Tarta de queso / cheesecake", kind: "comida", temp: "ambos", caffeine: 0, sweet: 2, intensity: 2, milk: false, tastes: ["cremoso"], hunger: 2,
    pitch: c("Cremosa y contundente.", "Creamy and rich.", "Crémeux et généreux.") },

  // ── CookieCup: la bebida va en un vaso de galleta ─────────────────
  { pos: "Café en CookieCup original", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 2, intensity: 1, milk: true, decaf: true, tastes: ["cafe", "cremoso"], cup: true,
    pitch: c("Café caliente en un vaso de galleta: te lo bebes y te lo comes.", "Hot coffee in a cookie cup: drink it, then eat it.", "Café chaud dans un gobelet en biscuit : on le boit, puis on le mange.") },
  { pos: "Café en CookieCup chocolate", kind: "bebida", temp: "caliente", caffeine: 3, sweet: 3, intensity: 1, milk: true, decaf: true, tastes: ["chocolate", "cafe"], cup: true,
    pitch: c("Café en un vaso de galleta con chocolate.", "Coffee in a chocolate cookie cup.", "Café dans un gobelet en biscuit au chocolat.") },
  { pos: "Matcha en CookieCup original", kind: "bebida", temp: "caliente", caffeine: 2, sweet: 2, intensity: 1, milk: true, tastes: ["verde", "cremoso"], cup: true,
    pitch: c("Matcha caliente en un vaso de galleta.", "Hot matcha in a cookie cup.", "Matcha chaud dans un gobelet en biscuit.") },
  { pos: "Matcha en CookieCup chocolate", kind: "bebida", temp: "caliente", caffeine: 2, sweet: 3, intensity: 1, milk: true, tastes: ["verde", "chocolate"], cup: true,
    pitch: c("Matcha en un vaso de galleta con chocolate.", "Matcha in a chocolate cookie cup.", "Matcha dans un gobelet en biscuit au chocolat.") },
  { pos: "Chai en CookieCup original", kind: "bebida", temp: "caliente", caffeine: 1, sweet: 3, intensity: 1, milk: true, tastes: ["especiado", "cremoso"], cup: true,
    pitch: c("Chai caliente en un vaso de galleta.", "Hot chai in a cookie cup.", "Chai chaud dans un gobelet en biscuit.") },
  { pos: "Chai en CookieCup chocolate", kind: "bebida", temp: "caliente", caffeine: 1, sweet: 3, intensity: 1, milk: true, tastes: ["especiado", "chocolate"], cup: true,
    pitch: c("Chai en un vaso de galleta con chocolate.", "Chai in a chocolate cookie cup.", "Chai dans un gobelet en biscuit au chocolat.") },
];

// ── Preguntas ───────────────────────────────────────────────────────

export type Want = "beber" | "comer" | "ambos";
export type TempAnswer = "caliente" | "frio" | "igual";
export type Energy = "tope" | "suave" | "nada";
export type Sweet = "nada" | "poco" | "capricho";
export type Milk = "normal" | "vegetal" | "sinleche";
export type Hunger = "picoteo" | "hambre";

export type Answers = {
  want?: Want;
  temp?: TempAnswer;
  energy?: Energy;
  taste?: DrinkTaste;
  sweet?: Sweet;
  milk?: Milk;
  food?: FoodTaste;
  hunger?: Hunger;
};

export type StepId = keyof Answers;

/** Qué se pregunta según lo que te apetece. */
export function stepsFor(want?: Want): StepId[] {
  if (want === "comer") return ["want", "food", "hunger"];
  if (want === "ambos") return ["want", "temp", "energy", "taste", "sweet", "milk", "food"];
  if (want === "beber") return ["want", "temp", "energy", "taste", "sweet", "milk"];
  return ["want"];
}

// ── Puntuación ──────────────────────────────────────────────────────

export type Scored = { profile: Profile; product: ProductRef; score: number; decafTip: boolean };

const INDEX = productIndex();

/** El tamaño grande de un producto, si lo hay en la carta. */
export function largeVersionOf(pos: string): ProductRef | null {
  const large = PROFILES.find((p) => p.largeOf === pos);
  return large ? productFor(large) : null;
}

export function productFor(profile: Profile): ProductRef {
  const product = INDEX.get(profile.pos);
  if (!product) throw new Error(`Sin producto en la carta: ${profile.pos}`);
  return product;
}

/** Dónde encaja cada sabor pedido: principal (+6), secundario (+3) o nada (-2). */
function tasteScore(tastes: Profile["tastes"], wanted: string | undefined): number {
  if (!wanted) return 0;
  const i = (tastes as string[]).indexOf(wanted);
  return i === 0 ? 6 : i > 0 ? 3 : -2;
}

/** Bebidas: null si no puede ser; si no, cuánto encaja. */
export function scoreDrink(p: Profile, a: Answers): number | null {
  if (p.kind !== "bebida") return null;
  if (p.largeOf) return null;
  if (a.temp === "caliente" && p.temp === "frio") return null;
  if (a.temp === "frio" && p.temp === "caliente") return null;
  if (a.milk === "sinleche" && p.milk) return null;
  if (a.energy === "nada" && p.caffeine > 0 && !p.decaf) return null;
  // Si quieres bebida y comida, el vaso de galleta ya es las dos cosas.
  if (a.want === "ambos" && p.cup) return null;

  let s = tasteScore(p.tastes, a.taste);
  if (a.energy === "tope") s += [-1, 0, 1.5, 3][p.caffeine];
  if (a.energy === "suave") s += [1, 3, 2.5, 0.5][p.caffeine];
  if (a.energy === "nada") s += p.caffeine === 0 ? 3 : 0.5; // descafeinado: vale, pero mejor lo que ya no lleva
  if (a.sweet === "nada") s += [3, 1, -1, -3][p.sweet];
  if (a.sweet === "poco") s += [1, 3, 2, -1][p.sweet];
  if (a.sweet === "capricho") s += [-2, 0, 2, 3][p.sweet];
  if (a.taste === "cafe") s += p.intensity * 0.5;
  if (a.taste === "cremoso") s += (3 - p.intensity) * 0.3;
  if (a.temp && a.temp !== "igual" && p.temp === a.temp) s += 0.5;
  if (a.want === "beber" && p.cup && a.sweet === "capricho") s += 1;
  if (p.varies) s -= 0.5;
  return s;
}

/** Comida: siempre puede ser (no hay restricciones duras); cuánto encaja. */
export function scoreFood(p: Profile, a: Answers): number | null {
  if (p.kind !== "comida") return null;
  let s = a.food === "sorpresa" ? (p.varies ? 6 : 1) : tasteScore(p.tastes, a.food);
  if (a.hunger === "hambre") s += p.hunger === 2 ? 2 : 0;
  if (a.hunger === "picoteo") s += p.hunger === 1 ? 2 : 0;
  if (a.sweet === "nada") s += p.sweet <= 2 ? 1 : 0;
  if (a.sweet === "capricho") s += p.sweet === 3 ? 1 : 0;
  if (a.temp === "frio" && p.temp === "frio") s += 0.5;
  return s;
}

function ranked(score: (p: Profile) => number | null, a: Answers): Scored[] {
  const out: Scored[] = [];
  PROFILES.forEach((profile) => {
    const s = score(profile);
    if (s === null) return;
    out.push({ profile, product: productFor(profile), score: s, decafTip: a.energy === "nada" && profile.caffeine > 0 });
  });
  // Orden estable: a igual puntuación, el orden de la carta.
  return out.sort((x, y) => y.score - x.score);
}

export function rankDrinks(a: Answers): Scored[] {
  return ranked((p) => scoreDrink(p, a), a);
}

export function rankFoods(a: Answers): Scored[] {
  return ranked((p) => scoreFood(p, a), a);
}

// ── Bebida y comida juntas ──────────────────────────────────────────

/** Combos de la carta: [bebida, comida] → combo. */
const COMBOS: [string, string, string][] = [
  ["Café con leche", "Tarta de zanahoria y nueces", "Café con leche + bizcocho de zanahoria"],
  ["Café con leche", "Muffin de zanahoria y nueces", "Café con leche + muffin de zanahoria y nueces"],
  ["Matcha Latte", "Tarta de zanahoria y nueces", "Matcha Latte + bizcocho de zanahoria"],
  ["Café con leche", "Tarta de queso / cheesecake", "Café con leche + cheesecake"],
  ["Strawberry Iced Matcha", "Cookie chocolate chips", "Strawberry Break"],
  ["Strawberry Iced Matcha", "Cookie de la semana", "Strawberry Break"],
];

/** El bizcocho que convierte cualquier bebida en menú desayuno o merienda (+2 €). */
export const MENU_PASTRY = "Tarta de zanahoria y nueces";
export const MENU_SUPPLEMENT = 2;

export type Deal = { kind: "combo"; combo: ProductRef } | { kind: "menu" } | null;
export type PairPrice = { total: number; regular: number; saving: number; deal: Deal };

export function pairPrice(drink: ProductRef, food: ProductRef): PairPrice {
  const regular = Math.round((drink.price + food.price) * 100) / 100;
  const combo = COMBOS.find(([d, f]) => d === drink.pos && f === food.pos);
  if (combo) {
    const ref = INDEX.get(combo[2]);
    if (!ref) throw new Error(`Sin combo en la carta: ${combo[2]}`);
    return { total: ref.price, regular, saving: Math.round((regular - ref.price) * 100) / 100, deal: { kind: "combo", combo: ref } };
  }
  if (food.pos === MENU_PASTRY) {
    const total = Math.round((drink.price + MENU_SUPPLEMENT) * 100) / 100;
    return { total, regular, saving: Math.round((regular - total) * 100) / 100, deal: { kind: "menu" } };
  }
  return { total: regular, regular, saving: 0, deal: null };
}

export type Pair = { drink: Scored; food: Scored; price: PairPrice; score: number };

/** Mejores parejas: bebida y comida por separado, más un empujón si sale más barato juntas. */
export function rankPairs(a: Answers): Pair[] {
  const drinks = rankDrinks(a).slice(0, 6);
  const foods = rankFoods(a).slice(0, 4);
  const pairs: Pair[] = [];
  for (const drink of drinks) {
    for (const food of foods) {
      const price = pairPrice(drink.product, food.product);
      pairs.push({ drink, food, price, score: drink.score + food.score + (price.saving > 0 ? 1.5 : 0) });
    }
  }
  return pairs.sort((x, y) => y.score - x.score);
}

// ── Planes rápidos ──────────────────────────────────────────────────

export type Preset = { id: string; art: string; label: Copy<string>; answers: Answers };

export const PRESETS: Preset[] = [
  {
    id: "despertar",
    art: "cafe",
    label: c("Necesito despertarme", "I need to wake up", "J’ai besoin de me réveiller"),
    answers: { want: "beber", temp: "igual", energy: "tope", taste: "cafe", sweet: "nada", milk: "normal" },
  },
  {
    id: "biblioteca",
    art: "matcha",
    label: c("Pausa en la biblioteca", "Library break", "Pause à la bibliothèque"),
    answers: { want: "ambos", temp: "caliente", energy: "suave", taste: "cremoso", sweet: "poco", milk: "normal", food: "zanahoria" },
  },
  {
    id: "fresquito",
    art: "matcha-fresa",
    label: c("Algo fresquito", "Something cool", "Quelque chose de frais"),
    answers: { want: "beber", temp: "frio", energy: "suave", taste: "afrutado", sweet: "poco", milk: "normal" },
  },
  {
    id: "capricho",
    art: "cookiecup",
    label: c("Me lo merezco", "I deserve a treat", "Je le mérite"),
    answers: { want: "ambos", temp: "igual", energy: "suave", taste: "chocolate", sweet: "capricho", milk: "normal", food: "chocolate" },
  },
  {
    id: "sin-cafeina",
    art: "tes",
    label: c("Sin cafeína", "No caffeine", "Sans caféine"),
    answers: { want: "beber", temp: "caliente", energy: "nada", taste: "afrutado", sweet: "nada", milk: "sinleche" },
  },
  {
    id: "hambre",
    art: "acai",
    label: c("Tengo hambre", "I’m hungry", "J’ai faim"),
    answers: { want: "comer", food: "fruta", hunger: "hambre" },
  },
];
