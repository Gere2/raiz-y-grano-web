import React from 'react';
import { Link } from 'react-router-dom';
import AllergenBadges from '@/components/AllergenBadges';
import type { Language, Product } from '@/data/products';

const CATEGORY_LABELS: Record<Product['category'], Record<Language, string>> = {
  cake: { es: 'Bizcocho', en: 'Cake', fr: 'Gâteau' },
  cookie: { es: 'Galleta', en: 'Cookie', fr: 'Cookie' },
};

const ProductCard = ({ product, language }: { product: Product; language: Language }) => {
  const primaryAllergens = product.allergens.filter((item) => item !== 'may_contain_traces').slice(0, 2);

  return (
    <div className="bg-white rounded-2xl border border-[#efeadf] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          onError={(event) => {
            (event.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop';
          }}
          alt={product.name[language]}
          className="h-48 w-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#6d5435]">
          {CATEGORY_LABELS[product.category][language]}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-cormorant text-[#795a32]">{product.name[language]}</h3>
          <p className="text-sm text-[#6d5435] mt-1">{product.shortDescription[language]}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-[#6d5435]">
          <span className="rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1">
            {language === 'es' && 'Alérgenos principales'}
            {language === 'en' && 'Key allergens'}
            {language === 'fr' && 'Allergènes clés'}
          </span>
          <span className="rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1">
            {language === 'es' && 'Obrador Madrid'}
            {language === 'en' && 'Madrid bakery'}
            {language === 'fr' && 'Atelier Madrid'}
          </span>
        </div>
        <AllergenBadges allergens={primaryAllergens} language={language} />
        <Link to={`/p/${product.slug}`} className="btn-primary inline-flex items-center justify-center w-full">
          {language === 'es' && 'Ver ficha'}
          {language === 'en' && 'View details'}
          {language === 'fr' && 'Voir la fiche'}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
