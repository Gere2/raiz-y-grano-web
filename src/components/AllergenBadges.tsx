import React from 'react';
import { AlertTriangle, Droplets, Egg, Nut, Wheat } from 'lucide-react';
import type { AllergenKey } from '@/data/products';

const ALLERGEN_LABELS: Record<AllergenKey, string> = {
  gluten: 'Gluten',
  egg: 'Huevo',
  milk: 'Leche',
  nuts: 'Frutos secos',
  walnut: 'Nuez',
  pistachio: 'Pistacho',
  may_contain_traces: 'Puede contener trazas',
};

const ALLERGEN_ICONS: Record<AllergenKey, React.ReactNode> = {
  gluten: <Wheat size={16} className="text-[#795a32]" />,
  egg: <Egg size={16} className="text-[#795a32]" />,
  milk: <Droplets size={16} className="text-[#795a32]" />,
  nuts: <Nut size={16} className="text-[#795a32]" />,
  walnut: <Nut size={16} className="text-[#795a32]" />,
  pistachio: <Nut size={16} className="text-[#795a32]" />,
  may_contain_traces: <AlertTriangle size={16} className="text-[#795a32]" />,
};

const AllergenBadges = ({ allergens }: { allergens: AllergenKey[] }) => (
  <div className="flex flex-wrap gap-2">
    {allergens.map((allergen) => (
      <span
        key={allergen}
        className="inline-flex items-center gap-2 rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1 text-sm text-[#5a442c]"
      >
        {ALLERGEN_ICONS[allergen]}
        {ALLERGEN_LABELS[allergen]}
      </span>
    ))}
  </div>
);

export default AllergenBadges;
