import React from 'react';

const IngredientsList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside text-[#6d5435] space-y-2">
    {items.map((ingredient) => (
      <li key={ingredient}>{ingredient}</li>
    ))}
  </ul>
);

export default IngredientsList;
