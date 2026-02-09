import type { Nutrition, NutritionTable as NutritionTableData } from '@/data/products';
import type { Language } from '@/context/LanguageContext';

const LABELS: Record<Language, { per100g: string; perServing: string; servingSize: string }> = {
  es: { per100g: 'Por 100g', perServing: 'Por ración', servingSize: 'Ración' },
  en: { per100g: 'Per 100g', perServing: 'Per serving', servingSize: 'Serving' },
  fr: { per100g: 'Pour 100g', perServing: 'Par portion', servingSize: 'Portion' },
};

const METRIC_LABELS: Record<Language, Record<keyof NutritionTableData, string>> = {
  es: {
    kcal: 'kcal',
    protein_g: 'Proteínas (g)',
    carbs_g: 'Carbohidratos (g)',
    sugars_g: 'Azúcares (g)',
    fat_g: 'Grasas (g)',
    fiber_g: 'Fibra (g)',
    salt_g: 'Sal (g)',
  },
  en: {
    kcal: 'kcal',
    protein_g: 'Protein (g)',
    carbs_g: 'Carbs (g)',
    sugars_g: 'Sugars (g)',
    fat_g: 'Fat (g)',
    fiber_g: 'Fiber (g)',
    salt_g: 'Salt (g)',
  },
  fr: {
    kcal: 'kcal',
    protein_g: 'Protéines (g)',
    carbs_g: 'Glucides (g)',
    sugars_g: 'Sucres (g)',
    fat_g: 'Lipides (g)',
    fiber_g: 'Fibres (g)',
    salt_g: 'Sel (g)',
  },
};

const renderRows = (data: NutritionTableData | undefined, language: Language) => {
  if (!data) {
    return null;
  }
  return (Object.keys(data) as Array<keyof NutritionTableData>).map((key) => {
    const value = data[key];
    if (value === undefined) {
      return null;
    }
    return (
      <div key={key} className="flex justify-between text-sm text-[#6d5435]">
        <span>{METRIC_LABELS[language][key]}</span>
        <span>{value}</span>
      </div>
    );
  });
};

type NutritionTableProps = {
  nutrition: Nutrition;
  language: Language;
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
        {renderRows(nutrition.per100g, language)}
      </div>
    ) : null}
    {nutrition.perServing ? (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[#795a32]">{LABELS[language].perServing}</p>
        {renderRows(nutrition.perServing, language)}
      </div>
    ) : null}
    {nutrition.isEstimated && nutrition.disclaimer?.[language] ? (
      <p className="text-xs text-[#7d6a50] italic">{nutrition.disclaimer?.[language]}</p>
    ) : null}
  </div>
);

export default NutritionTable;
