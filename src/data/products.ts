import type { Language } from '@/context/LanguageContext';

export type Nutrition = {
  per100g?: Record<string, number | string>;
  perServing?: Record<string, number | string>;
  servingSizeG?: number;
  isEstimated?: boolean;
  disclaimer?: Record<Language, string>;
};

export type Product = {
  slug: string;
  category: 'bakery' | 'coffee';
  name: Record<Language, string>;
  description?: Record<Language, string>;
  ingredients: Record<Language, string[]>;
  allergens: string[];
  mayContain?: string[];
  nutrition?: Nutrition;
  origin?: {
    country?: string;
    process?: string;
    profile?: string[];
    aroma?: string[];
    acidity?: string;
    body?: string;
    notes?: string[];
    supplierName?: string;
    supplierUrl?: string;
  };
  images?: {
    main?: string;
    gallery?: string[];
  };
  updatedAt?: string;
};

export const ALLERGEN_LABELS: Record<Language, Record<string, string>> = {
  es: {
    gluten: 'Gluten',
    egg: 'Huevo',
    milk: 'Leche',
    nuts: 'Frutos de cáscara',
    soy: 'Soja',
  },
  en: {
    gluten: 'Gluten',
    egg: 'Egg',
    milk: 'Milk',
    nuts: 'Tree nuts',
    soy: 'Soy',
  },
  fr: {
    gluten: 'Gluten',
    egg: 'Œuf',
    milk: 'Lait',
    nuts: 'Fruits à coque',
    soy: 'Soja',
  },
};

export const ALLERGEN_OPTIONS = [
  { key: 'gluten' },
  { key: 'egg' },
  { key: 'milk' },
  { key: 'nuts' },
  { key: 'soy' },
];

export const PRODUCTS: Product[] = [
  {
    slug: 'bizcocho-zanahoria-clasico',
    category: 'bakery',
    name: {
      es: 'Bizcocho de zanahoria (clásico)',
      en: 'Carrot cake (classic)',
      fr: 'Gâteau à la carotte (classique)',
    },
    description: {
      es: 'Bizcocho húmedo y especiado con nueces y coco rallado.',
      en: 'Moist, spiced carrot cake with walnuts and shredded coconut.',
      fr: 'Gâteau moelleux aux épices avec noix et coco râpée.',
    },
    ingredients: {
      es: [
        'Zanahoria',
        'Huevo',
        'Harina de trigo',
        'Azúcar moreno',
        'Levadura',
        'Coco rallado',
        'Aceite',
        'Nuez moscada',
        'Canela',
        'Nueces',
        'Sal',
        'Ralladura de limón',
      ],
      en: [
        'Carrot',
        'Egg',
        'Wheat flour',
        'Brown sugar',
        'Baking powder',
        'Shredded coconut',
        'Oil',
        'Nutmeg',
        'Cinnamon',
        'Walnuts',
        'Salt',
        'Lemon zest',
      ],
      fr: [
        'Carotte',
        'Œuf',
        'Farine de blé',
        'Sucre brun',
        'Levure',
        'Noix de coco râpée',
        'Huile',
        'Muscade',
        'Cannelle',
        'Noix',
        'Sel',
        'Zeste de citron',
      ],
    },
    allergens: ['gluten', 'egg', 'nuts'],
    mayContain: ['milk', 'soy'],
    nutrition: {
      isEstimated: true,
      disclaimer: {
        es: 'Valores nutricionales estimados; pueden variar por lote.',
        en: 'Estimated nutritional values; may vary by batch.',
        fr: 'Valeurs nutritionnelles estimées ; peuvent varier selon le lot.',
      },
    },
    origin: {
      notes: ['inhouse_bakery', 'pasteurized_eggs', 'small_batch'],
    },
    images: {
      main: '/assets/products/bizcocho-zanahoria.jpg',
    },
    updatedAt: '2024-11-01',
  },
  {
    slug: 'bizcocho-zanahoria-nueces-coco',
    category: 'bakery',
    name: {
      es: 'Bizcocho zanahoria con nueces y coco',
      en: 'Carrot cake with walnuts & coconut',
      fr: 'Gâteau à la carotte avec noix et coco',
    },
    description: {
      es: 'Variante con extra de nueces y coco (ingredientes por confirmar).',
      en: 'Variant with extra walnuts and coconut (ingredients to confirm).',
      fr: 'Variante avec plus de noix et coco (ingrédients à confirmer).',
    },
    ingredients: {
      es: ['Ingredientes por confirmar'],
      en: ['Ingredients to be confirmed'],
      fr: ['Ingrédients à confirmer'],
    },
    allergens: ['gluten', 'egg', 'nuts', 'milk'],
    mayContain: ['soy'],
    origin: {
      notes: ['inhouse_bakery', 'pasteurized_eggs', 'small_batch'],
    },
    images: {
      main: '/assets/products/bizcocho-zanahoria-nueces.jpg',
    },
    updatedAt: '2024-11-01',
  },
  {
    slug: 'galletas-chips-chocolate',
    category: 'bakery',
    name: {
      es: 'Galletas chips de chocolate',
      en: 'Chocolate chip cookies',
      fr: 'Cookies aux pépites de chocolat',
    },
    description: {
      es: 'Galletas clásicas con chips de chocolate y toque de canela.',
      en: 'Classic cookies with chocolate chips and a hint of cinnamon.',
      fr: 'Biscuits classiques aux pépites de chocolat et une touche de cannelle.',
    },
    ingredients: {
      es: [
        'Harina de trigo',
        'Mantequilla',
        'Azúcar moreno',
        'Azúcar blanca',
        'Huevo',
        'Chocolate rallado',
        'Extracto de vainilla',
        'Bicarbonato de sodio',
        'Chips de chocolate',
        'Canela',
      ],
      en: [
        'Wheat flour',
        'Butter',
        'Brown sugar',
        'White sugar',
        'Egg',
        'Grated chocolate',
        'Vanilla extract',
        'Baking soda',
        'Chocolate chips',
        'Cinnamon',
      ],
      fr: [
        'Farine de blé',
        'Beurre',
        'Sucre brun',
        'Sucre blanc',
        'Œuf',
        'Chocolat râpé',
        'Extrait de vanille',
        'Bicarbonate de sodium',
        'Pépites de chocolat',
        'Cannelle',
      ],
    },
    allergens: ['gluten', 'egg', 'milk'],
    mayContain: ['nuts', 'soy'],
    nutrition: {
      isEstimated: true,
      disclaimer: {
        es: 'Valores nutricionales estimados; pueden variar por lote.',
        en: 'Estimated nutritional values; may vary by batch.',
        fr: 'Valeurs nutritionnelles estimées ; peuvent varier selon le lot.',
      },
    },
    origin: {
      notes: ['inhouse_bakery', 'pasteurized_eggs', 'small_batch'],
    },
    images: {
      main: '/assets/products/galletas-chips.jpg',
    },
    updatedAt: '2024-11-01',
  },
  {
    slug: 'galletas-chocolate-blanco-nueces',
    category: 'bakery',
    name: {
      es: 'Galletas chocolate blanco con nueces',
      en: 'White chocolate walnut cookies',
      fr: 'Cookies chocolat blanc et noix',
    },
    description: {
      es: 'Galletas con chocolate blanco y nueces trituradas.',
      en: 'Cookies with white chocolate and crushed walnuts.',
      fr: 'Biscuits au chocolat blanc et noix concassées.',
    },
    ingredients: {
      es: [
        'Harina de trigo',
        'Azúcar morena',
        'Huevo',
        'Mantequilla sin sal',
        'Chocolate blanco',
        'Nueces trituradas',
        'Maizena',
        'Bicarbonato de sodio',
        'Sal',
        'Vainilla',
      ],
      en: [
        'Wheat flour',
        'Brown sugar',
        'Egg',
        'Unsalted butter',
        'White chocolate',
        'Crushed walnuts',
        'Cornstarch',
        'Baking soda',
        'Salt',
        'Vanilla',
      ],
      fr: [
        'Farine de blé',
        'Sucre brun',
        'Œuf',
        'Beurre doux',
        'Chocolat blanc',
        'Noix concassées',
        'Fécule de maïs',
        'Bicarbonate de sodium',
        'Sel',
        'Vanille',
      ],
    },
    allergens: ['gluten', 'egg', 'milk', 'nuts'],
    mayContain: ['soy'],
    nutrition: {
      isEstimated: true,
      disclaimer: {
        es: 'Valores nutricionales estimados; pueden variar por lote.',
        en: 'Estimated nutritional values; may vary by batch.',
        fr: 'Valeurs nutritionnelles estimées ; peuvent varier selon le lot.',
      },
    },
    origin: {
      notes: ['inhouse_bakery', 'pasteurized_eggs', 'small_batch'],
    },
    images: {
      main: '/assets/products/galletas-chocolate-blanco.jpg',
    },
    updatedAt: '2024-11-01',
  },
  {
    slug: 'galletas-chocolate-negro-pistacho',
    category: 'bakery',
    name: {
      es: 'Galletas chocolate negro con pistacho',
      en: 'Dark chocolate pistachio cookies',
      fr: 'Cookies chocolat noir et pistache',
    },
    description: {
      es: 'Galletas con chocolate negro y pistacho (ingredientes por confirmar).',
      en: 'Cookies with dark chocolate and pistachio (ingredients to confirm).',
      fr: 'Biscuits chocolat noir et pistache (ingrédients à confirmer).',
    },
    ingredients: {
      es: ['Ingredientes por confirmar'],
      en: ['Ingredients to be confirmed'],
      fr: ['Ingrédients à confirmer'],
    },
    allergens: ['gluten', 'egg', 'milk', 'nuts'],
    mayContain: ['soy'],
    origin: {
      notes: ['inhouse_bakery', 'pasteurized_eggs', 'small_batch'],
    },
    images: {
      main: '/assets/products/galletas-chocolate-negro.jpg',
    },
    updatedAt: '2024-11-01',
  },
  {
    slug: 'cafe-insignia-amor-perfecto',
    category: 'coffee',
    name: {
      es: 'Café Insignia (Amor Perfecto)',
      en: 'Insignia Coffee (Amor Perfecto)',
      fr: 'Café Insignia (Amor Perfecto)',
    },
    description: {
      es: 'Café colombiano lavado, dulce y balanceado con notas cítricas y frutales.',
      en: 'Washed Colombian coffee with sweetness and citrus-fruity notes.',
      fr: 'Café colombien lavé, doux et équilibré avec des notes d’agrumes et de fruits.',
    },
    ingredients: {
      es: ['Café 100% arábica'],
      en: ['100% Arabica coffee'],
      fr: ['Café 100% arabica'],
    },
    allergens: [],
    mayContain: [],
    origin: {
      country: 'Colombia',
      process: 'Lavado',
      profile: ['Dulce', 'Notas cítricas y frutales'],
      aroma: ['Frutos rojos', 'Cítrico', 'Chocolate'],
      acidity: 'Media - cítrica',
      body: 'Medio - cremoso',
      supplierName: 'Café Amor Perfecto',
      supplierUrl: 'https://cafeamorperfecto.com/products/cafe-insignia-500-gr',
    },
    images: {
      main: '/assets/products/cafe-insignia.jpg',
    },
    updatedAt: '2024-11-01',
  },
];

const PRODUCT_ALIASES: Record<string, string> = {
  cz: 'bizcocho-zanahoria-clasico',
};

export const getProductBySlug = (slug: string) => {
  const resolved = PRODUCT_ALIASES[slug] ?? slug;
  return PRODUCTS.find((product) => product.slug === resolved);
};
