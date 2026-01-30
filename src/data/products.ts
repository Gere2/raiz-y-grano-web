export type AllergenKey =
  | 'gluten'
  | 'egg'
  | 'milk'
  | 'nuts'
  | 'walnut'
  | 'pistachio'
  | 'may_contain_traces';

export type Product = {
  slug: string;
  name: string;
  category: 'cake' | 'cookie';
  shortDescription: string;
  ingredients: string[];
  allergens: AllergenKey[];
  mayContain?: string[];
  storage: {
    bestWithinHours?: number;
    notes: string;
  };
  traceability: {
    madeIn: string;
    batchTracking: string;
    egg: string;
  };
  nutrition: {
    per100g?: {
      energyKcal?: number;
      fatG?: number;
      satFatG?: number;
      carbsG?: number;
      sugarG?: number;
      fiberG?: number;
      proteinG?: number;
      saltG?: number;
    };
    note: string;
  };
  images: {
    hero?: string;
  };
};

export const PRODUCTS: Product[] = [
  {
    slug: 'cz',
    name: 'Bizcocho de zanahoria (clásico)',
    category: 'cake',
    shortDescription: 'Zanahoria, especias y ralladura de limón. Horneado por lotes en Madrid.',
    ingredients: [
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
    allergens: ['gluten', 'egg', 'may_contain_traces'],
    mayContain: ['Trazas de frutos secos (según manipulación en obrador)'],
    storage: {
      bestWithinHours: 48,
      notes: 'Conservar en lugar fresco y seco. Si hace calor, refrigerar para mantener textura.',
    },
    traceability: {
      madeIn: 'Madrid (obrador propio)',
      batchTracking: 'Trazabilidad interna por lote',
      egg: 'Huevo pasteurizado',
    },
    nutrition: {
      note: 'Valores nutricionales: en preparación (se mostrarán como estimados por lote).',
    },
    images: {
      hero: '/assets/products/cz.jpg',
    },
  },
  {
    slug: 'cz-cn',
    name: 'Bizcocho de zanahoria con nueces y coco',
    category: 'cake',
    shortDescription: 'Versión con coco rallado y nueces. Más textura y aroma.',
    ingredients: [
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
    allergens: ['gluten', 'egg', 'nuts', 'walnut', 'may_contain_traces'],
    mayContain: ['Trazas de otros frutos secos'],
    storage: {
      bestWithinHours: 48,
      notes: 'Conservar en lugar fresco. Refrigerar si hay temperatura alta.',
    },
    traceability: {
      madeIn: 'Madrid (obrador propio)',
      batchTracking: 'Trazabilidad interna por lote',
      egg: 'Huevo pasteurizado',
    },
    nutrition: {
      note: 'Valores nutricionales: estimados próximamente (pueden variar por lote).',
    },
    images: {
      hero: '/assets/products/cz-cn.jpg',
    },
  },
  {
    slug: 'cc',
    name: 'Galleta chips de chocolate',
    category: 'cookie',
    shortDescription: 'Mantequilla, vainilla y chips de chocolate. Crujiente por fuera, tierna por dentro.',
    ingredients: [
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
    allergens: ['gluten', 'egg', 'milk', 'may_contain_traces'],
    mayContain: ['Trazas de frutos secos'],
    storage: {
      bestWithinHours: 72,
      notes: 'Guardar en recipiente hermético para mantener textura.',
    },
    traceability: {
      madeIn: 'Madrid (obrador propio)',
      batchTracking: 'Trazabilidad interna por lote',
      egg: 'Huevo pasteurizado',
    },
    nutrition: {
      note: 'Valores nutricionales: en preparación (se mostrarán como estimados por lote).',
    },
    images: {
      hero: '/assets/products/cc.jpg',
    },
  },
  {
    slug: 'wcn',
    name: 'Galleta chocolate blanco con nueces',
    category: 'cookie',
    shortDescription: 'Chocolate blanco + nueces. Masa con maizena para una mordida más suave.',
    ingredients: [
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
    allergens: ['gluten', 'egg', 'milk', 'nuts', 'walnut', 'may_contain_traces'],
    mayContain: ['Trazas de otros frutos secos'],
    storage: {
      bestWithinHours: 72,
      notes: 'Recipiente hermético. Evitar humedad.',
    },
    traceability: {
      madeIn: 'Madrid (obrador propio)',
      batchTracking: 'Trazabilidad interna por lote',
      egg: 'Huevo pasteurizado',
    },
    nutrition: {
      note: 'Valores nutricionales: en preparación (se mostrarán como estimados por lote).',
    },
    images: {
      hero: '/assets/products/wcn.jpg',
    },
  },
  {
    slug: 'dcp',
    name: 'Galleta chocolate negro con pistacho',
    category: 'cookie',
    shortDescription: 'Chocolate negro + pistacho. Intensa y equilibrada.',
    ingredients: [
      'Harina (trigo)',
      'Mantequilla',
      'Azúcar moreno',
      'Azúcar blanca',
      'Huevo',
      'Chocolate negro',
      'Extracto de vainilla',
      'Bicarbonato de sodio',
      'Pistacho (trozos)',
      'Sal',
    ],
    allergens: ['gluten', 'egg', 'milk', 'nuts', 'pistachio', 'may_contain_traces'],
    mayContain: ['Trazas de otros frutos secos'],
    storage: {
      bestWithinHours: 72,
      notes: 'Recipiente hermético.',
    },
    traceability: {
      madeIn: 'Madrid (obrador propio)',
      batchTracking: 'Trazabilidad interna por lote',
      egg: 'Huevo pasteurizado',
    },
    nutrition: {
      note: 'Valores nutricionales: en preparación (estimados; pueden variar por lote).',
    },
    images: {
      hero: '/assets/products/dcp.jpg',
    },
  },
];
