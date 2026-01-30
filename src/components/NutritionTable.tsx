import React from 'react';

type NutritionTableProps = {
  disclaimer: string;
  per100g?: Record<string, number | string>;
  perServing?: Record<string, number | string>;
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

const NutritionTable = ({ disclaimer, per100g, perServing }: NutritionTableProps) => (
  <div className="space-y-3">
    {per100g ? (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[#795a32]">Por 100g</p>
        {renderRows(per100g)}
      </div>
    ) : null}
    {perServing ? (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[#795a32]">Por ración</p>
        {renderRows(perServing)}
      </div>
    ) : null}
    <p className="text-xs text-[#7d6a50] italic">{disclaimer}</p>
  </div>
);

export default NutritionTable;
