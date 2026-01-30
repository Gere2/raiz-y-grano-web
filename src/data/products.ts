export type Language = 'es' | 'en' | 'fr';

export type AllergenKey =
  | 'gluten'
  | 'eggs'
  | 'milk'
  | 'nuts'
  | 'walnut'
  | 'pistachio'
  | 'may_contain_traces';

type Localized<T> = Record<Language, T>;

export type Product = {
  slug: string;
  category: 'cake' | 'cookie';
  name: Localized<string>;
  shortDescription: Localized<string>;
  ingredients: Localized<string[]>;
  allergens: AllergenKey[];
  mayContain?: Localized<string[]>;
  nutritionNote: Localized<string>;
  origin: {
    place: Localized<string>;
    producer: Localized<string>;
    notes: Localized<string>;
  };
  storage: Localized<string>;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'cz',
    category: 'cake',
    name: {
      es: 'Bizcocho de zanahoria (clásico)',
      en: 'Carrot cake (classic)',
      fr: 'Gâteau à la carotte (classique)',
    },
    shortDescription: {
      es: 'Zanahoria, especias y ralladura de limón. Horneado por lotes en Madrid.',
      en: 'Carrot, spices, and lemon zest. Small-batch baked in Madrid.',
      fr: 'Carotte, épices et zeste de citron. Cuit en petits lots à Madrid.',
    },
    ingredients: {
      es: [
        'Zanahoria',
        'Huevo',
        'Harina (trigo)',
        'Azúcar moreno',
        'Levadura',
        'Aceite',
        'Nuez moscada',
        'Canela',
        'Sal',
        'Ralladura de limón',
      ],
      en: [
        'Carrot',
        'Eggs',
        'Flour (wheat)',
        'Brown sugar',
        'Baking powder',
        'Oil',
        'Nutmeg',
        'Cinnamon',
        'Salt',
        'Lemon zest',
      ],
      fr: [
        'Carotte',
        'Œufs',
        'Farine (blé)',
        'Sucre brun',
        'Levure',
        'Huile',
        'Noix de muscade',
        'Cannelle',
        'Sel',
        'Zeste de citron',
      ],
    },
    allergens: ['gluten', 'eggs', 'may_contain_traces'],
    mayContain: {
      es: ['Trazas de frutos de cáscara (según manipulación en obrador).'],
      en: ['Traces of tree nuts (depending on workshop handling).'],
      fr: ['Traces de fruits à coque (selon la manipulation en atelier).'],
    },
    nutritionNote: {
      es: 'Valores nutricionales estimados; pueden variar por lote.',
      en: 'Nutritional values are estimates and may vary by lot.',
      fr: 'Valeurs nutritionnelles estimées ; elles peuvent varier selon le lot.',
    },
    origin: {
      place: {
        es: 'Madrid (obrador propio)',
        en: 'Madrid (in-house bakery)',
        fr: 'Madrid (atelier interne)',
      },
      producer: {
        es: 'Equipo Raíz y Grano',
        en: 'Raíz y Grano team',
        fr: 'Équipe Raíz y Grano',
      },
      notes: {
        es: 'Huevo pasteurizado y trazabilidad interna por lote.',
        en: 'Pasteurized eggs and internal batch traceability.',
        fr: 'Œufs pasteurisés et traçabilité interne par lot.',
      },
    },
    storage: {
      es: 'Conservar en lugar fresco y seco. Refrigerar si hay calor para mantener textura.',
      en: 'Store in a cool, dry place. Refrigerate in warm weather to preserve texture.',
      fr: 'Conserver dans un endroit frais et sec. Réfrigérer en cas de chaleur.',
    },
    image: '/assets/products/cz.jpg',
  },
  {
    slug: 'cz-cn',
    category: 'cake',
    name: {
      es: 'Bizcocho de zanahoria con nueces y coco',
      en: 'Carrot cake with walnuts and coconut',
      fr: 'Gâteau à la carotte avec noix et coco',
    },
    shortDescription: {
      es: 'Versión con coco rallado y nueces. Más textura y aroma.',
      en: 'With shredded coconut and walnuts for extra texture and aroma.',
      fr: 'Avec coco râpé et noix pour plus de texture et d’arôme.',
    },
    ingredients: {
      es: [
        'Zanahoria',
        'Huevo',
        'Harina (trigo)',
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
        'Eggs',
        'Flour (wheat)',
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
        'Œufs',
        'Farine (blé)',
        'Sucre brun',
        'Levure',
        'Noix de coco râpée',
        'Huile',
        'Noix de muscade',
        'Cannelle',
        'Noix',
        'Sel',
        'Zeste de citron',
      ],
    },
    allergens: ['gluten', 'eggs', 'nuts', 'walnut', 'may_contain_traces'],
    mayContain: {
      es: ['Trazas de otros frutos de cáscara.'],
      en: ['Traces of other tree nuts.'],
      fr: ['Traces d’autres fruits à coque.'],
    },
    nutritionNote: {
      es: 'Valores nutricionales estimados; pueden variar por lote.',
      en: 'Nutritional values are estimates and may vary by lot.',
      fr: 'Valeurs nutritionnelles estimées ; elles peuvent varier selon le lot.',
    },
    origin: {
      place: {
        es: 'Madrid (obrador propio)',
        en: 'Madrid (in-house bakery)',
        fr: 'Madrid (atelier interne)',
      },
      producer: {
        es: 'Equipo Raíz y Grano',
        en: 'Raíz y Grano team',
        fr: 'Équipe Raíz y Grano',
      },
      notes: {
        es: 'Huevo pasteurizado y trazabilidad interna por lote.',
        en: 'Pasteurized eggs and internal batch traceability.',
        fr: 'Œufs pasteurisés et traçabilité interne par lot.',
      },
    },
    storage: {
      es: 'Conservar en lugar fresco. Refrigerar si hay temperatura alta.',
      en: 'Store in a cool place. Refrigerate in warm weather.',
      fr: 'Conserver au frais. Réfrigérer si la température est élevée.',
    },
    image: '/assets/products/cz-cn.jpg',
  },
  {
    slug: 'cookie-chips',
    category: 'cookie',
    name: {
      es: 'Galleta chips de chocolate',
      en: 'Chocolate chip cookie',
      fr: 'Cookie aux pépites de chocolat',
    },
    shortDescription: {
      es: 'Mantequilla, vainilla y chips de chocolate. Crujiente por fuera, tierna por dentro.',
      en: 'Butter, vanilla, and chocolate chips. Crisp outside, soft inside.',
      fr: 'Beurre, vanille et pépites de chocolat. Croquante et moelleuse.',
    },
    ingredients: {
      es: [
        'Harina (trigo)',
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
        'Flour (wheat)',
        'Butter',
        'Brown sugar',
        'White sugar',
        'Eggs',
        'Grated chocolate',
        'Vanilla extract',
        'Baking soda',
        'Chocolate chips',
        'Cinnamon',
      ],
      fr: [
        'Farine (blé)',
        'Beurre',
        'Sucre brun',
        'Sucre blanc',
        'Œufs',
        'Chocolat râpé',
        'Extrait de vanille',
        'Bicarbonate de soude',
        'Pépites de chocolat',
        'Cannelle',
      ],
    },
    allergens: ['gluten', 'eggs', 'milk', 'may_contain_traces'],
    mayContain: {
      es: ['Trazas de frutos de cáscara.'],
      en: ['Traces of tree nuts.'],
      fr: ['Traces de fruits à coque.'],
    },
    nutritionNote: {
      es: 'Valores nutricionales estimados; pueden variar por lote.',
      en: 'Nutritional values are estimates and may vary by lot.',
      fr: 'Valeurs nutritionnelles estimées ; elles peuvent varier selon le lot.',
    },
    origin: {
      place: {
        es: 'Madrid (obrador propio)',
        en: 'Madrid (in-house bakery)',
        fr: 'Madrid (atelier interne)',
      },
      producer: {
        es: 'Equipo Raíz y Grano',
        en: 'Raíz y Grano team',
        fr: 'Équipe Raíz y Grano',
      },
      notes: {
        es: 'Huevo pasteurizado y trazabilidad interna por lote.',
        en: 'Pasteurized eggs and internal batch traceability.',
        fr: 'Œufs pasteurisés et traçabilité interne par lot.',
      },
    },
    storage: {
      es: 'Guardar en recipiente hermético para mantener textura.',
      en: 'Store in an airtight container to preserve texture.',
      fr: 'Conserver dans un récipient hermétique.',
    },
    image: '/assets/products/cookie-chips.jpg',
  },
  {
    slug: 'cookie-white-walnut',
    category: 'cookie',
    name: {
      es: 'Galleta chocolate blanco con nueces',
      en: 'White chocolate & walnut cookie',
      fr: 'Cookie chocolat blanc et noix',
    },
    shortDescription: {
      es: 'Chocolate blanco + nueces. Masa con maizena para una mordida más suave.',
      en: 'White chocolate and walnuts with a softer bite.',
      fr: 'Chocolat blanc et noix pour une texture plus douce.',
    },
    ingredients: {
      es: [
        'Harina (trigo)',
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
        'Flour (wheat)',
        'Brown sugar',
        'Eggs',
        'Unsalted butter',
        'White chocolate',
        'Crushed walnuts',
        'Cornstarch',
        'Baking soda',
        'Salt',
        'Vanilla',
      ],
      fr: [
        'Farine (blé)',
        'Sucre brun',
        'Œufs',
        'Beurre doux',
        'Chocolat blanc',
        'Noix concassées',
        'Fécule de maïs',
        'Bicarbonate de soude',
        'Sel',
        'Vanille',
      ],
    },
    allergens: ['gluten', 'eggs', 'milk', 'nuts', 'walnut', 'may_contain_traces'],
    mayContain: {
      es: ['Trazas de otros frutos de cáscara.'],
      en: ['Traces of other tree nuts.'],
      fr: ['Traces d’autres fruits à coque.'],
    },
    nutritionNote: {
      es: 'Valores nutricionales estimados; pueden variar por lote.',
      en: 'Nutritional values are estimates and may vary by lot.',
      fr: 'Valeurs nutritionnelles estimées ; elles peuvent varier selon le lot.',
    },
    origin: {
      place: {
        es: 'Madrid (obrador propio)',
        en: 'Madrid (in-house bakery)',
        fr: 'Madrid (atelier interne)',
      },
      producer: {
        es: 'Equipo Raíz y Grano',
        en: 'Raíz y Grano team',
        fr: 'Équipe Raíz y Grano',
      },
      notes: {
        es: 'Huevo pasteurizado y trazabilidad interna por lote.',
        en: 'Pasteurized eggs and internal batch traceability.',
        fr: 'Œufs pasteurisés et traçabilité interne par lot.',
      },
    },
    storage: {
      es: 'Recipiente hermético. Evitar humedad.',
      en: 'Airtight container. Avoid humidity.',
      fr: 'Récipient hermétique. Éviter l’humidité.',
    },
    image: '/assets/products/cookie-white-walnut.jpg',
  },
  {
    slug: 'cookie-dark-pistachio',
    category: 'cookie',
    name: {
      es: 'Galleta chocolate negro con pistacho',
      en: 'Dark chocolate & pistachio cookie',
      fr: 'Cookie chocolat noir et pistache',
    },
    shortDescription: {
      es: 'Chocolate negro + pistacho. Intensa y equilibrada.',
      en: 'Dark chocolate with pistachio. Intense yet balanced.',
      fr: 'Chocolat noir et pistache. Intense et équilibrée.',
    },
    ingredients: {
      es: [
        'Harina (trigo)',
        'Mantequilla',
        'Azúcar',
        'Huevo',
        'Chocolate negro',
        'Pistacho',
        'Bicarbonato',
        'Vainilla',
        'Sal',
      ],
      en: [
        'Flour (wheat)',
        'Butter',
        'Sugar',
        'Eggs',
        'Dark chocolate',
        'Pistachio',
        'Baking soda',
        'Vanilla',
        'Salt',
      ],
      fr: [
        'Farine (blé)',
        'Beurre',
        'Sucre',
        'Œufs',
        'Chocolat noir',
        'Pistache',
        'Bicarbonate',
        'Vanille',
        'Sel',
      ],
    },
    allergens: ['gluten', 'eggs', 'milk', 'nuts', 'pistachio', 'may_contain_traces'],
    mayContain: {
      es: ['Trazas de otros frutos de cáscara.'],
      en: ['Traces of other tree nuts.'],
      fr: ['Traces d’autres fruits à coque.'],
    },
    nutritionNote: {
      es: 'Valores nutricionales estimados; pueden variar por lote.',
      en: 'Nutritional values are estimates and may vary by lot.',
      fr: 'Valeurs nutritionnelles estimées ; elles peuvent varier selon le lot.',
    },
    origin: {
      place: {
        es: 'Madrid (obrador propio)',
        en: 'Madrid (in-house bakery)',
        fr: 'Madrid (atelier interne)',
      },
      producer: {
        es: 'Equipo Raíz y Grano',
        en: 'Raíz y Grano team',
        fr: 'Équipe Raíz y Grano',
      },
      notes: {
        es: 'Huevo pasteurizado y trazabilidad interna por lote.',
        en: 'Pasteurized eggs and internal batch traceability.',
        fr: 'Œufs pasteurisés et traçabilité interne par lot.',
      },
    },
    storage: {
      es: 'Recipiente hermético. Evitar humedad.',
      en: 'Airtight container. Avoid humidity.',
      fr: 'Récipient hermétique. Éviter l’humidité.',
    },
    image: '/assets/products/cookie-dark-pistachio.jpg',
  },
];
