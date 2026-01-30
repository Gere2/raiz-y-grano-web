import type { Nutrition } from '@/data/products';
import type { Language } from '@/context/LanguageContext';

type NutritionTableProps = {
  nutrition: Nutrition;
  language: Language;
};

const LABELS: Record<Language, { per100g: string; perServing: string; servingSize: string }> = {
  es: { per100g: 'Por 100g', perServing: 'Por ración', servingSize: 'Ración' },
  en: { per100g: 'Per 100g', perServing: 'Per serving', servingSize: 'Serving' },
  fr: { per100g: 'Pour 100g', perServing: 'Par portion', servingSize: 'Portion' },
};

const renderRows = (data?: Record<string, number | string>) => {
  if (!data) {
    return null;
  }
  return Object.entries(data).map(([key, value]) => (
    <div key={key} className="flex justify-between text-sm text-[#6d5435]">
      <span className="capitalize">{key}</span>
      <span>{value}</span>
    </div>
  ));
};

const NutritionTable = ({ nutrition, language }: NutritionTableProps) => (
  <div className="space-y-3">
    {nutrition.servingSizeG ? (
      <p className="text-xs text-[#7d6a50] italic">
        {LABELS[language].servingSize}: {nutrition.servingSizeG}g
      </p>
    ) : null}
    {nutrition.per100g ? (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[#795a32]">{LABELS[language].per100g}</p>
        {renderRows(nutrition.per100g)}
      </div>
    ) : null}
    {nutrition.perServing ? (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[#795a32]">{LABELS[language].perServing}</p>
        {renderRows(nutrition.perServing)}
      </div>
    ) : null}
    {nutrition.disclaimer?.[language] ? (
      <p className="text-xs text-[#7d6a50] italic">{nutrition.disclaimer?.[language]}</p>
    ) : null}
  </div>
);

export default NutritionTable;
