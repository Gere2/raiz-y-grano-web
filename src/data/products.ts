import type { Language } from '@/context/LanguageContext';

export type NutritionTable = {
  kcal: number;
  protein_g: number;
  carbs_g: number;
  sugars_g: number;
  fat_g: number;
  fiber_g?: number;
  salt_g?: number;
};

export type Nutrition = {
  isEstimated: boolean;
  servingSizeG?: number;
  disclaimer: Record<Language, string>;
  per100g?: NutritionTable;
  perServing?: NutritionTable;
};

export type Origin = {
  country?: string;
  process?: string;
  profile?: string[];
  aroma?: string[];
  acidity?: string;
  body?: string;
  supplierName?: string;
  supplierUrl?: string;
};

export type Product = {
  slug: string;
  category: 'bakery' | 'coffee';
  name: Record<Language, string>;
  description: Record<Language, string>;
  ingredients: Record<Language, string[]>;
  allergens: string[];
  mayContain?: string[];
  nutrition?: Nutrition;
  origin?: Origin;
  images?: { main?: string };
  updatedAt?: string;
  tags?: string[];
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

const ESTIMATED_DISCLAIMER: Record<Language, string> = {
  es: 'Valores nutricionales estimados; pueden variar por lote.',
  en: 'Estimated nutritional values; may vary by batch.',
  fr: 'Valeurs nutritionnelles estimées ; peuvent varier selon le lot.',
};

export const PRODUCTS: Product[] = [
  {
    slug: 'bizcocho-zanahoria-nuez-coco',
    category: 'bakery',
    name: {
      es: 'Bizcocho zanahoria + coco + nueces',
      en: 'Carrot cake with coconut & walnuts',
      fr: 'Gâteau carotte, coco & noix',
    },
    description: {
      es: 'Bizcocho húmedo con especias, coco y nueces.',
      en: 'Moist carrot cake with spices, coconut, and walnuts.',
      fr: 'Gâteau moelleux aux épices, coco et noix.',
    },
    ingredients: {
      es: [
        'Zanahoria rallada 500g',
        'Huevo 250g',
        'Harina trigo 300g',
        'Azúcar blanco 100g',
        'Azúcar moreno 100g',
        'Levadura química 20g',
        'Coco rallado 50g',
        'Aceite suave 50g',
        'Nuez moscada 0,5g',
        'Canela 1/2 cdta',
        'Nueces 130g',
        'Sal pizca',
        'Ralladura de 1 limón',
      ],
      en: [
        'Grated carrot 500g',
        'Egg 250g',
        'Wheat flour 300g',
        'White sugar 100g',
        'Brown sugar 100g',
        'Baking powder 20g',
        'Shredded coconut 50g',
        'Neutral oil 50g',
        'Nutmeg 0.5g',
        'Cinnamon 1/2 tsp',
        'Walnuts 130g',
        'Salt pinch',
        'Zest of 1 lemon',
      ],
      fr: [
        'Carotte râpée 500g',
        'Œuf 250g',
        'Farine de blé 300g',
        'Sucre blanc 100g',
        'Sucre brun 100g',
        'Levure chimique 20g',
        'Noix de coco râpée 50g',
        'Huile neutre 50g',
        'Muscade 0,5g',
        'Cannelle 1/2 c. à c.',
        'Noix 130g',
        'Pincée de sel',
        'Zeste d’1 citron',
      ],
    },
    allergens: ['gluten', 'egg', 'nuts'],
    mayContain: ['milk', 'soy'],
    nutrition: {
      isEstimated: true,
      servingSizeG: 123,
      disclaimer: ESTIMATED_DISCLAIMER,
      per100g: {
        kcal: 275,
        protein_g: 6.1,
        carbs_g: 34.4,
        sugars_g: 15.7,
        fat_g: 13.2,
        fiber_g: 2.6,
      },
      perServing: {
        kcal: 339,
        protein_g: 7.5,
        carbs_g: 42.4,
        sugars_g: 19.4,
        fat_g: 16.3,
        fiber_g: 3.2,
      },
    },
    images: {
      main: '/assets/products/bizcocho-zanahoria.jpg',
    },
    updatedAt: '2024-11-01',
    tags: ['suave-y-dulce', 'con-frutos-secos'],
  },
  {
    slug: 'galleta-chocochip',
    category: 'bakery',
    name: {
      es: 'Galleta chocochip',
      en: 'Chocochip cookie',
      fr: 'Cookie aux pépites de chocolat',
    },
    description: {
      es: 'Galleta clásica con chispas de chocolate y canela.',
      en: 'Classic cookie with chocolate chips and cinnamon.',
      fr: 'Cookie classique aux pépites de chocolat et cannelle.',
    },
    ingredients: {
      es: [
        'Mantequilla 113g',
        'Azúcar 125g',
        'Huevo M (1)',
        'Harina floja 62g',
        'Harina fuerza 109g',
        'Maizena 2,5g',
        'Bicarbonato 2,5g',
        'Sal 1/4 cdta',
        'Gotas chocolate 150g (oscuro o leche)',
        'Canela 1/2 cdta',
      ],
      en: [
        'Butter 113g',
        'Sugar 125g',
        'Egg (M, 1)',
        'Pastry flour 62g',
        'Bread flour 109g',
        'Cornstarch 2.5g',
        'Baking soda 2.5g',
        'Salt 1/4 tsp',
        'Chocolate chips 150g (dark or milk)',
        'Cinnamon 1/2 tsp',
      ],
      fr: [
        'Beurre 113g',
        'Sucre 125g',
        'Œuf (M, 1)',
        'Farine pâtissière 62g',
        'Farine de force 109g',
        'Fécule de maïs 2,5g',
        'Bicarbonate 2,5g',
        'Sel 1/4 c. à c.',
        'Pépites de chocolat 150g (noir ou lait)',
        'Cannelle 1/2 c. à c.',
      ],
    },
    allergens: ['gluten', 'egg', 'milk'],
    mayContain: ['soy', 'nuts'],
    nutrition: {
      isEstimated: true,
      servingSizeG: 51,
      disclaimer: ESTIMATED_DISCLAIMER,
      per100g: {
        kcal: 449,
        protein_g: 5.3,
        carbs_g: 56.9,
        sugars_g: 33.1,
        fat_g: 23.4,
        fiber_g: 2.7,
      },
      perServing: {
        kcal: 229,
        protein_g: 2.7,
        carbs_g: 29.0,
        sugars_g: 16.8,
        fat_g: 11.9,
        fiber_g: 1.4,
      },
    },
    images: {
      main: '/assets/products/galletas-chips.jpg',
    },
    updatedAt: '2024-11-01',
    tags: ['suave-y-dulce', 'con-frutos-secos'],
  },
  {
    slug: 'muffin-zanahoria',
    category: 'bakery',
    name: {
      es: 'Muffin de zanahoria',
      en: 'Carrot muffin',
      fr: 'Muffin à la carotte',
    },
    description: {
      es: 'Muffin de zanahoria con topping crujiente incluido.',
      en: 'Carrot muffin with included crunchy topping.',
      fr: 'Muffin à la carotte avec topping croustillant inclus.',
    },
    ingredients: {
      es: [
        'Jarabe de arce 15g',
        'Huevo 190g',
        'Aceite de coco 40g',
        'Vainilla 5g',
        'Stevia 30g',
        'Canela 2g',
        'Harina de almendra 110g',
        'Harina de avena 120g',
        'Levadura 6g',
        'Zanahoria 190g',
        'Nueces 60g',
        'Topping: harina almendra 14g + azúcar moreno 12,5g + harina normal 3g + nuez 5g',
      ],
      en: [
        'Maple syrup 15g',
        'Egg 190g',
        'Coconut oil 40g',
        'Vanilla 5g',
        'Stevia 30g',
        'Cinnamon 2g',
        'Almond flour 110g',
        'Oat flour 120g',
        'Baking powder 6g',
        'Carrot 190g',
        'Walnuts 60g',
        'Topping: almond flour 14g + brown sugar 12.5g + all-purpose flour 3g + walnut 5g',
      ],
      fr: [
        'Sirop d’érable 15g',
        'Œuf 190g',
        'Huile de coco 40g',
        'Vanille 5g',
        'Stévia 30g',
        'Cannelle 2g',
        'Farine d’amande 110g',
        'Farine d’avoine 120g',
        'Levure 6g',
        'Carotte 190g',
        'Noix 60g',
        'Topping : farine d’amande 14g + sucre brun 12,5g + farine 3g + noix 5g',
      ],
    },
    allergens: ['egg', 'nuts'],
    mayContain: ['gluten'],
    nutrition: {
      isEstimated: true,
      servingSizeG: 67,
      disclaimer: ESTIMATED_DISCLAIMER,
      per100g: {
        kcal: 305,
        protein_g: 9.9,
        carbs_g: 20.2,
        sugars_g: 4.9,
        fat_g: 21.8,
        fiber_g: 3.9,
      },
      perServing: {
        kcal: 204,
        protein_g: 6.6,
        carbs_g: 13.5,
        sugars_g: 3.3,
        fat_g: 14.6,
        fiber_g: 2.6,
      },
    },
    images: {
      main: '/assets/products/muffin-zanahoria.jpg',
    },
    updatedAt: '2024-11-01',
    tags: ['suave-y-dulce', 'con-frutos-secos'],
  },
  {
    slug: 'muffin-calabaza',
    category: 'bakery',
    name: {
      es: 'Muffin de calabaza con almendra',
      en: 'Pumpkin almond muffin',
      fr: 'Muffin à la courge et amande',
    },
    description: {
      es: 'Muffin de calabaza con almendra en la masa y decoración.',
      en: 'Pumpkin muffin with almonds in the batter and on top.',
      fr: 'Muffin à la courge avec amandes dans la pâte et en décoration.',
    },
    ingredients: {
      es: [
        'Puré de calabaza espeso 286g',
        '2 huevos',
        'Azúcar blanco 130g',
        'Azúcar moreno 50g',
        'Aceite suave 120ml',
        'Harina 220g + 1 cucharada',
        'Levadura química 10g',
        'Canela + pizca de sal',
        'Almendra troceada 40–50g (masa)',
        'Almendra extra para decorar',
      ],
      en: [
        'Thick pumpkin purée 286g',
        '2 eggs',
        'White sugar 130g',
        'Brown sugar 50g',
        'Neutral oil 120ml',
        'Flour 220g + 1 tbsp',
        'Baking powder 10g',
        'Cinnamon + pinch of salt',
        'Chopped almonds 40–50g (batter)',
        'Extra almonds for topping',
      ],
      fr: [
        'Purée de courge épaisse 286g',
        '2 œufs',
        'Sucre blanc 130g',
        'Sucre brun 50g',
        'Huile neutre 120ml',
        'Farine 220g + 1 c. à s.',
        'Levure chimique 10g',
        'Cannelle + pincée de sel',
        'Amandes concassées 40–50g (pâte)',
        'Amandes extra pour décorer',
      ],
    },
    allergens: ['gluten', 'egg', 'nuts'],
    nutrition: {
      isEstimated: true,
      servingSizeG: 80,
      disclaimer: ESTIMATED_DISCLAIMER,
      per100g: {
        kcal: 313,
        protein_g: 5.1,
        carbs_g: 40.6,
        sugars_g: 19.9,
        fat_g: 15.1,
        fiber_g: 1.7,
      },
      perServing: {
        kcal: 250,
        protein_g: 4.1,
        carbs_g: 32.4,
        sugars_g: 15.9,
        fat_g: 12.0,
        fiber_g: 1.3,
      },
    },
    images: {
      main: '/assets/products/muffin-calabaza.jpg',
    },
    updatedAt: '2024-11-01',
    tags: ['suave-y-dulce', 'con-frutos-secos'],
  },
  {
    slug: 'cafe-insignia',
    category: 'coffee',
    name: {
      es: 'Café Insignia (Amor Perfecto)',
      en: 'Insignia Coffee (Amor Perfecto)',
      fr: 'Café Insignia (Amor Perfecto)',
    },
    description: {
      es: 'Café colombiano lavado, dulce y balanceado con notas cítricas y frutales.',
      en: 'Washed Colombian coffee with sweet citrus and fruity notes.',
      fr: 'Café colombien lavé, doux et équilibré avec des notes d’agrumes et de fruits.',
    },
    ingredients: {
      es: ['Café 100% arábica'],
      en: ['100% Arabica coffee'],
      fr: ['Café 100% arabica'],
    },
    allergens: [],
    origin: {
      country: 'Colombia',
      process: 'Lavado',
      profile: ['Dulce', 'Cítrico', 'Frutal'],
      aroma: ['Frutos rojos', 'Cítrico', 'Chocolate'],
      acidity: 'Media (cítrica)',
      body: 'Medio (cremoso)',
      supplierName: 'Café Amor Perfecto',
      supplierUrl: 'https://cafeamorperfecto.com/products/cafe-insignia-500-gr',
    },
    images: {
      main: '/assets/products/cafe-insignia.jpg',
    },
    updatedAt: '2024-11-01',
    tags: ['suave-y-dulce'],
  },
];

export const getProductBySlug = (slug: string) => PRODUCTS.find((product) => product.slug === slug);
