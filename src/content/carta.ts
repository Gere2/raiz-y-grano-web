import type { Copy } from "@/i18n";

/**
 * La carta 2026/27, tal como la cobra el TPV y la vende la app.
 *
 * Fuente: catálogo de producción `2026-2027-v22`, verificado el 28-09-2026
 * (53 productos visibles, 0 discrepancias; `output/catalog-sync-2026-09-28`
 * en raiz-app), agrupado en las nueve familias de la carta impresa y del
 * informe de septiembre. Los modificadores salen de
 * `apps/pos/src/lib/pos-modifiers.ts` y el menú desayuno o merienda de
 * `apps/app/lib/breakfast-menu.ts`.
 *
 * `pos` es el nombre exacto del producto en el TPV: así cada línea de la web
 * lleva a su producto, y `carta.test.ts` comprueba nombres y precios contra
 * la v22. Si cambia un precio en el TPV hay que cambiarlo aquí (y en el
 * test) y actualizar `CARTA_UPDATED`. La carta al día, con pedido, es la de
 * la app, y la web lo dice.
 */

export const CARTA_VERSION = "2026-2027-v22";
export const CARTA_UPDATED = "2026-09-28";

export type Variant = { pos: string; label: Copy<string>; price: number };

export type CartaItem = {
  /** Nombre del producto en el TPV. Los extras no son productos y no lo llevan. */
  pos?: string;
  name: Copy<string>;
  note?: Copy<string>;
  price?: number;
  variants?: Variant[];
};

export type Family = {
  id: string;
  /** Grabado de /brand/menu/<art>.png (los mismos de la app). */
  art: string;
  name: Copy<string>;
  blurb: Copy<string>;
  items: CartaItem[];
};

const same = (text: string): Copy<string> => ({ es: text, en: text, fr: text });

const CHANGES_WITH_SEASON: Copy<string> = {
  es: "Cambia con la temporada",
  en: "Changes with the season",
  fr: "Change selon la saison",
};

export const FAMILIES: Family[] = [
  {
    id: "cafe",
    art: "cafe",
    name: { es: "Café", en: "Coffee", fr: "Café" },
    blurb: {
      es: "Del espresso al café de especialidad en V60.",
      en: "From espresso to specialty V60 pour-over.",
      fr: "De l’espresso au café de spécialité en V60.",
    },
    items: [
      { pos: "Espresso", name: same("Espresso"), price: 2 },
      { pos: "Americano", name: same("Americano"), price: 2 },
      { pos: "Cortado", name: same("Cortado"), price: 2.3 },
      {
        pos: "Café con leche",
        name: { es: "Café con leche", en: "Latte (café con leche)", fr: "Café au lait" },
        price: 2.5,
      },
      {
        pos: "Café con leche grande",
        name: { es: "Café con leche grande", en: "Large latte", fr: "Grand café au lait" },
        price: 3,
      },
      {
        pos: "Café Bombón",
        name: same("Café bombón"),
        note: {
          es: "Con leche condensada",
          en: "Espresso with condensed milk",
          fr: "Espresso et lait concentré sucré",
        },
        price: 2.5,
      },
      { pos: "Cappuccino", name: same("Cappuccino"), price: 2.5 },
      { pos: "Flat White", name: same("Flat White"), price: 3 },
      { pos: "Moca", name: { es: "Moca", en: "Mocha", fr: "Moka" }, price: 2.8 },
      {
        pos: "Café de especialidad V60",
        name: { es: "Café de especialidad V60", en: "Specialty V60 pour-over", fr: "Café de spécialité V60" },
        note: {
          es: "Café de filtro, preparado taza a taza",
          en: "Filter coffee, brewed cup by cup",
          fr: "Café filtre, préparé tasse par tasse",
        },
        price: 4.5,
      },
    ],
  },
  {
    id: "cafe-frio",
    art: "cafe-frio",
    name: { es: "Café frío", en: "Iced coffee", fr: "Café glacé" },
    blurb: {
      es: "Cold brew, iced latte y flat white con hielo.",
      en: "Cold brew, iced lattes and an iced flat white.",
      fr: "Cold brew, iced latte et flat white glacé.",
    },
    items: [
      {
        pos: "Cold Brew",
        name: same("Cold Brew"),
        note: { es: "Café extraído en frío", en: "Cold-steeped coffee", fr: "Café infusé à froid" },
        price: 3.5,
      },
      { pos: "Iced Latte", name: same("Iced Latte"), price: 3.5 },
      { pos: "Iced Mocha", name: same("Iced Mocha"), price: 3.5 },
      {
        pos: "Flat White con hielo",
        name: { es: "Flat White con hielo", en: "Iced Flat White", fr: "Flat White glacé" },
        price: 4,
      },
      { pos: "Vanilla Iced Latte", name: same("Vanilla Iced Latte"), price: 4 },
      { pos: "Pistachio Iced Latte", name: same("Pistachio Iced Latte"), price: 4.5 },
    ],
  },
  {
    id: "matcha",
    art: "matcha",
    name: { es: "Matcha y de la casa", en: "Matcha & house specials", fr: "Matcha et créations maison" },
    blurb: {
      es: "Matcha latte y combinaciones propias, como el de fresa o el de pistacho.",
      en: "Matcha latte and our own blends, like strawberry or pistachio.",
      fr: "Matcha latte et nos propres recettes, comme fraise ou pistache.",
    },
    items: [
      { pos: "Matcha Latte", name: same("Matcha Latte"), price: 3 },
      { pos: "Iced Matcha", name: same("Iced Matcha"), price: 3.5 },
      {
        pos: "Iced Matcha de vainilla",
        name: { es: "Iced Matcha de vainilla", en: "Vanilla-flavoured Iced Matcha", fr: "Iced Matcha parfum vanille" },
        price: 3.5,
      },
      {
        pos: "Iced Matcha con sirope de vainilla",
        name: {
          es: "Iced Matcha con sirope de vainilla",
          en: "Iced Matcha with vanilla syrup",
          fr: "Iced Matcha au sirop de vanille",
        },
        price: 4,
      },
      { pos: "Strawberry Iced Matcha", name: same("Strawberry Iced Matcha"), price: 4.5 },
      { pos: "Pistachio Iced Matcha", name: same("Pistachio Iced Matcha"), price: 4.5 },
      {
        pos: "Dirty Matcha grande",
        name: { es: "Dirty Matcha grande", en: "Large Dirty Matcha", fr: "Dirty Matcha (grand)" },
        note: {
          es: "Matcha con un shot de espresso",
          en: "Matcha with a shot of espresso",
          fr: "Matcha et un shot d’espresso",
        },
        price: 4,
      },
    ],
  },
  {
    id: "chai",
    art: "chai",
    name: { es: "Chai y chocolate", en: "Chai & chocolate", fr: "Chai et chocolat" },
    blurb: {
      es: "Chai latte, dirty chai y ColaCao sin azúcares añadidos.",
      en: "Chai latte, dirty chai and ColaCao with no added sugar.",
      fr: "Chai latte, dirty chai et ColaCao sans sucres ajoutés.",
    },
    items: [
      { pos: "Chai Latte", name: same("Chai Latte"), price: 3 },
      {
        pos: "Chai grande",
        name: { es: "Chai grande", en: "Large Chai Latte", fr: "Chai latte (grand)" },
        price: 3.5,
      },
      { pos: "Iced Chai", name: same("Iced Chai"), price: 4 },
      {
        pos: "Dirty Chai",
        name: same("Dirty Chai"),
        note: {
          es: "Chai con un shot de espresso",
          en: "Chai with a shot of espresso",
          fr: "Chai et un shot d’espresso",
        },
        price: 4.5,
      },
      {
        pos: "ColaCao 0% azúcares añadidos",
        name: {
          es: "ColaCao 0 % azúcares añadidos",
          en: "ColaCao, no added sugar",
          fr: "ColaCao sans sucres ajoutés",
        },
        price: 2,
      },
    ],
  },
  {
    id: "tes",
    art: "tes",
    name: { es: "Tés e infusiones", en: "Teas & infusions", fr: "Thés et infusions" },
    blurb: {
      es: "Té verde, rooibos, la receta de la abuela y un té de temporada.",
      en: "Green tea, rooibos, grandma’s recipe and a seasonal tea.",
      fr: "Thé vert, rooibos, la recette de grand-mère et un thé de saison.",
    },
    items: [
      { pos: "Té verde", name: { es: "Té verde", en: "Green tea", fr: "Thé vert" }, price: 2 },
      {
        pos: "Té verde con jengibre y limón",
        name: {
          es: "Té verde con jengibre y limón",
          en: "Green tea with ginger & lemon",
          fr: "Thé vert gingembre et citron",
        },
        price: 2,
      },
      {
        pos: "Rooibos, hibisco, fresa y ciruela",
        name: {
          es: "Rooibos con hibisco, fresa y ciruela",
          en: "Rooibos with hibiscus, strawberry & plum",
          fr: "Rooibos hibiscus, fraise et prune",
        },
        price: 2,
      },
      {
        pos: "Té Receta de la Abuela",
        name: { es: "Té «receta de la abuela»", en: "“Grandma’s recipe” tea", fr: "Thé « recette de grand-mère »" },
        note: {
          es: "Hibisco, frutos rojos y fresa",
          en: "Hibiscus, red berries and strawberry",
          fr: "Hibiscus, fruits rouges et fraise",
        },
        price: 2,
      },
      {
        pos: "Té de temporada",
        name: { es: "Té de temporada", en: "Seasonal tea", fr: "Thé de saison" },
        note: CHANGES_WITH_SEASON,
        price: 2,
      },
    ],
  },
  {
    id: "fruta",
    art: "fruta",
    name: { es: "Frío y fruta", en: "Fruit & cold", fr: "Fruits et fraîcheur" },
    blurb: {
      es: "Smoothie de fruta al cien por cien y açaí bowl con granola.",
      en: "100% fruit smoothies and açaí bowls with granola.",
      fr: "Smoothie 100 % fruits et açaí bowl avec granola.",
    },
    items: [
      {
        pos: "Smoothie",
        name: same("Smoothie"),
        note: { es: "Fruta 100 %", en: "100% fruit", fr: "100 % fruits" },
        price: 4.5,
      },
      {
        pos: "Açaí Bowl",
        name: same("Açaí Bowl"),
        note: { es: "Con granola y toppings", en: "With granola and toppings", fr: "Avec granola et toppings" },
        price: 6,
      },
    ],
  },
  {
    id: "reposteria",
    art: "reposteria",
    name: { es: "Repostería", en: "Bakery", fr: "Pâtisserie" },
    blurb: {
      es: "Cookies, tartas, muffin y magdalena de temporada.",
      en: "Cookies, cakes, muffins and a seasonal magdalena.",
      fr: "Cookies, gâteaux, muffin et magdalena de saison.",
    },
    items: [
      {
        pos: "Cookie chocolate chips",
        name: { es: "Cookie de chips de chocolate", en: "Chocolate chip cookie", fr: "Cookie aux pépites de chocolat" },
        price: 2,
      },
      {
        pos: "Cookie de la semana",
        name: { es: "Cookie de la semana", en: "Cookie of the week", fr: "Cookie de la semaine" },
        note: { es: "Cambia cada semana", en: "Changes every week", fr: "Change chaque semaine" },
        price: 2,
      },
      {
        pos: "Magdalena de temporada",
        name: { es: "Magdalena de temporada", en: "Seasonal magdalena", fr: "Magdalena de saison" },
        note: {
          es: "Cambia con la temporada",
          en: "A Spanish-style muffin; changes with the season",
          fr: "Petit gâteau espagnol ; change selon la saison",
        },
        price: 1.5,
      },
      {
        pos: "Muffin de zanahoria y nueces",
        name: { es: "Muffin de zanahoria y nueces", en: "Carrot & walnut muffin", fr: "Muffin carotte et noix" },
        price: 2.5,
      },
      {
        pos: "Tarta de zanahoria y nueces",
        name: { es: "Tarta de zanahoria y nueces", en: "Carrot & walnut cake", fr: "Gâteau carotte et noix" },
        price: 2.5,
      },
      {
        pos: "Tarta de queso / cheesecake",
        name: { es: "Tarta de queso", en: "Cheesecake", fr: "Cheesecake" },
        price: 3.5,
      },
    ],
  },
  {
    id: "cookiecup",
    art: "cookiecup",
    name: same("CookieCup"),
    blurb: {
      es: "Café, matcha o chai servidos en un vaso de galleta.",
      en: "Coffee, matcha or chai served in an edible cookie cup.",
      fr: "Café, matcha ou chai servis dans un gobelet en biscuit.",
    },
    items: [
      {
        name: { es: "Café en CookieCup", en: "Coffee in a CookieCup", fr: "Café en CookieCup" },
        variants: [
          { pos: "Café en CookieCup original", label: same("original"), price: 3.5 },
          { pos: "Café en CookieCup chocolate", label: { es: "chocolate", en: "chocolate", fr: "chocolat" }, price: 4.5 },
        ],
      },
      {
        name: { es: "Matcha en CookieCup", en: "Matcha in a CookieCup", fr: "Matcha en CookieCup" },
        variants: [
          { pos: "Matcha en CookieCup original", label: same("original"), price: 4 },
          { pos: "Matcha en CookieCup chocolate", label: { es: "chocolate", en: "chocolate", fr: "chocolat" }, price: 5 },
        ],
      },
      {
        name: { es: "Chai en CookieCup", en: "Chai in a CookieCup", fr: "Chai en CookieCup" },
        variants: [
          { pos: "Chai en CookieCup original", label: same("original"), price: 4 },
          { pos: "Chai en CookieCup chocolate", label: { es: "chocolate", en: "chocolate", fr: "chocolat" }, price: 5 },
        ],
      },
    ],
  },
  {
    id: "combos",
    art: "combos",
    name: { es: "Combos", en: "Combos", fr: "Formules" },
    blurb: {
      es: "Una bebida y un dulce juntos, para las pausas y las reuniones.",
      en: "A drink and a treat together, for breaks and meetings.",
      fr: "Une boisson et une douceur ensemble, pour les pauses et les réunions.",
    },
    items: [
      {
        pos: "Café con leche + bizcocho de zanahoria",
        name: {
          es: "Café con leche + bizcocho de zanahoria",
          en: "Latte + carrot cake",
          fr: "Café au lait + gâteau à la carotte",
        },
        price: 4.5,
      },
      {
        pos: "Café con leche + muffin de zanahoria y nueces",
        name: {
          es: "Café con leche + muffin de zanahoria y nueces",
          en: "Latte + carrot & walnut muffin",
          fr: "Café au lait + muffin carotte et noix",
        },
        price: 4.5,
      },
      {
        pos: "Matcha Latte + bizcocho de zanahoria",
        name: {
          es: "Matcha Latte + bizcocho de zanahoria",
          en: "Matcha Latte + carrot cake",
          fr: "Matcha Latte + gâteau à la carotte",
        },
        price: 5,
      },
      {
        pos: "Café con leche + cheesecake",
        name: { es: "Café con leche + tarta de queso", en: "Latte + cheesecake", fr: "Café au lait + cheesecake" },
        price: 5.5,
      },
      {
        pos: "Strawberry Break",
        name: same("Strawberry Break"),
        note: {
          es: "Strawberry Iced Matcha y una cookie",
          en: "Strawberry Iced Matcha and a cookie",
          fr: "Strawberry Iced Matcha et un cookie",
        },
        price: 6,
      },
    ],
  },
];

/** Lo que no es de ninguna familia. */
export const WATER: CartaItem = { pos: "Agua", name: { es: "Agua", en: "Water", fr: "Eau" }, price: 1 };

const NO_CHARGE: Copy<string> = { es: "Sin suplemento", en: "No extra charge", fr: "Sans supplément" };

/** Para personalizar la bebida (modificadores del TPV y de la app). */
export const EXTRAS: CartaItem[] = [
  {
    name: {
      es: "Leche sin lactosa, de avena o de almendra",
      en: "Lactose-free, oat or almond milk",
      fr: "Lait sans lactose, d’avoine ou d’amande",
    },
    note: NO_CHARGE,
    price: 0,
  },
  {
    name: { es: "Descafeinado, canela o cacao", en: "Decaf, cinnamon or cocoa", fr: "Déca, cannelle ou cacao" },
    note: NO_CHARGE,
    price: 0,
  },
  { name: { es: "Tamaño grande", en: "Large size", fr: "Grande taille" }, price: 0.5 },
  { name: same("Extra shot"), price: 0.5 },
  { name: { es: "Doble shot", en: "Double shot", fr: "Double shot" }, price: 1 },
  { name: { es: "Sirope de vainilla", en: "Vanilla syrup", fr: "Sirop de vanille" }, price: 0.5 },
  {
    name: { es: "Sirope de fresa o de pistacho", en: "Strawberry or pistachio syrup", fr: "Sirop de fraise ou de pistache" },
    price: 1,
  },
  {
    name: { es: "Proteína de vainilla", en: "Vanilla protein", fr: "Protéine vanille" },
    note: { es: "Contiene leche y soja", en: "Contains milk and soy", fr: "Contient du lait et du soja" },
    price: 2,
  },
];

/** Precio más bajo de una familia, para el «desde» de las tarjetas. */
export function fromPrice(family: Family): number {
  const prices = family.items.flatMap((item) =>
    item.variants ? item.variants.map((v) => v.price) : item.price !== undefined ? [item.price] : [],
  );
  return Math.min(...prices);
}

/** Cada producto del TPV que aparece en la carta de la web, con su precio. */
export function posProducts(): { pos: string; price: number }[] {
  const rows: { pos: string; price: number }[] = [];
  for (const family of FAMILIES) {
    for (const item of family.items) {
      if (item.variants) {
        for (const v of item.variants) rows.push({ pos: v.pos, price: v.price });
      } else if (item.pos && item.price !== undefined) {
        rows.push({ pos: item.pos, price: item.price });
      }
    }
  }
  if (WATER.pos && WATER.price !== undefined) rows.push({ pos: WATER.pos, price: WATER.price });
  return rows;
}
