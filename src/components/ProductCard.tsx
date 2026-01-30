import React from 'react';
import { Link } from 'react-router-dom';
import AllergenBadges from '@/components/AllergenBadges';
import TagChips from '@/components/TagChips';
import type { Product } from '@/content/products';

const ProductCard = ({ product }: { product: Product }) => {
  const mainAllergens = product.allergens.contains.slice(0, 2);

  return (
    <div className="bg-white rounded-2xl border border-[#efeadf] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <img
          src={product.images.hero}
          onError={(event) => {
            (event.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop';
          }}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#6d5435]">
          {product.category === 'cake' ? 'Bizcocho' : 'Galleta'}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-cormorant text-[#795a32]">{product.name}</h3>
          <p className="text-sm text-[#6d5435] mt-1">{product.descriptionShort}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-[#6d5435]">
          <span className="rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1">Alérgenos principales</span>
          <span className="rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-1">Obrador Madrid</span>
        </div>
        <AllergenBadges items={mainAllergens} />
        <TagChips tags={product.tags} />
        <Link to={`/p/${product.slug}`} className="btn-primary inline-flex items-center justify-center w-full">
          Ver ficha
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
