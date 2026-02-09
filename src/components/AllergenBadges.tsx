import type { ReactNode } from 'react';
import { AlertTriangle, Droplets, Egg, Nut, Wheat, Leaf } from 'lucide-react';
import { ALLERGEN_LABELS } from '@/data/products';
import type { Language } from '@/context/LanguageContext';

const ICONS: Record<string, ReactNode> = {
  gluten: <Wheat size={16} className="text-[#795a32]" />,
  egg: <Egg size={16} className="text-[#795a32]" />,
  milk: <Droplets size={16} className="text-[#795a32]" />,
  nuts: <Nut size={16} className="text-[#795a32]" />,
  soy: <Leaf size={16} className="text-[#795a32]" />,
  traces: <AlertTriangle size={16} className="text-[#795a32]" />,
};

const AllergenBadges = ({ items, language }: { items: string[]; language: Language }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="inline-flex items-center gap-2 rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1 text-sm text-[#5a442c]"
      >
        {ICONS[item] ?? <AlertTriangle size={16} className="text-[#795a32]" />}
        {ALLERGEN_LABELS[language][item] ?? item}
      </span>
    ))}
  </div>
);

export default AllergenBadges;
