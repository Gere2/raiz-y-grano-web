import React from 'react';
import { AlertTriangle, Droplets, Egg, Nut, Wheat } from 'lucide-react';

const ICONS: Record<string, React.ReactNode> = {
  gluten: <Wheat size={16} className="text-[#795a32]" />,
  huevo: <Egg size={16} className="text-[#795a32]" />,
  leche: <Droplets size={16} className="text-[#795a32]" />,
  'frutos de cáscara (nuez)': <Nut size={16} className="text-[#795a32]" />,
  'frutos de cáscara (pistacho)': <Nut size={16} className="text-[#795a32]" />,
  'frutos de cáscara': <Nut size={16} className="text-[#795a32]" />,
  trazas: <AlertTriangle size={16} className="text-[#795a32]" />,
};

const AllergenBadges = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className="inline-flex items-center gap-2 rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1 text-sm text-[#5a442c]"
      >
        {ICONS[item] ?? <AlertTriangle size={16} className="text-[#795a32]" />}
        {item}
      </span>
    ))}
  </div>
);

export default AllergenBadges;
