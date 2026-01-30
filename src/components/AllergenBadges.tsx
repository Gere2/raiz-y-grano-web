import React from 'react';
import { AlertTriangle, Droplets, Egg, Nut, Wheat } from 'lucide-react';
import type { AllergenKey, Language } from '@/data/products';

type LabelMap = Record<Language, string>;

const ALLERGEN_LABELS: Record<AllergenKey, LabelMap> = {
  gluten: { es: 'Gluten', en: 'Gluten', fr: 'Gluten' },
  eggs: { es: 'Huevo', en: 'Eggs', fr: 'Œufs' },
  milk: { es: 'Leche', en: 'Milk', fr: 'Lait' },
  nuts: { es: 'Frutos de cáscara', en: 'Tree nuts', fr: 'Fruits à coque' },
  walnut: { es: 'Nuez', en: 'Walnut', fr: 'Noix' },
  pistachio: { es: 'Pistacho', en: 'Pistachio', fr: 'Pistache' },
  may_contain_traces: { es: 'Puede contener trazas', en: 'May contain traces', fr: 'Peut contenir des traces' },
};

const ALLERGEN_ICONS: Record<AllergenKey, React.ReactNode> = {
  gluten: <Wheat size={16} className="text-[#795a32]" />,
  eggs: <Egg size={16} className="text-[#795a32]" />,
  milk: <Droplets size={16} className="text-[#795a32]" />,
  nuts: <Nut size={16} className="text-[#795a32]" />,
  walnut: <Nut size={16} className="text-[#795a32]" />,
  pistachio: <Nut size={16} className="text-[#795a32]" />,
  may_contain_traces: <AlertTriangle size={16} className="text-[#795a32]" />,
};

const AllergenBadges = ({ allergens, language }: { allergens: AllergenKey[]; language: Language }) => (
  <div className="flex flex-wrap gap-2">
    {allergens.map((allergen) => (
      <span
        key={allergen}
        className="inline-flex items-center gap-2 rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1 text-sm text-[#5a442c]"
      >
        {ALLERGEN_ICONS[allergen]}
        {ALLERGEN_LABELS[allergen][language]}
      </span>
    ))}
  </div>
);

export default AllergenBadges;
