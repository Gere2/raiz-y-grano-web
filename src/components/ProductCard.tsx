import { Link } from 'react-router-dom';
import AllergenBadges from '@/components/AllergenBadges';
import type { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

const ProductCard = ({ product }: { product: Product }) => {
  const { language } = useLanguage();
  const mainAllergens = product.allergens.slice(0, 2);

  const categoryLabels = {
    es: { bakery: 'Obrador', coffee: 'Café' },
    en: { bakery: 'Bakery', coffee: 'Coffee' },
    fr: { bakery: 'Pâtisserie', coffee: 'Café' },
  };

  const fallbackImage =
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop';

  return (
    <div className="bg-white rounded-2xl border border-[#efeadf] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <img
          src={product.images?.main ?? fallbackImage}
          onError={(event) => {
            (event.currentTarget as HTMLImageElement).src = fallbackImage;
          }}
          alt={product.name[language]}
          className="h-48 w-full object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#6d5435]">
          {categoryLabels[language][product.category]}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-cormorant text-[#795a32]">{product.name[language]}</h3>
          {product.description?.[language] ? (
            <p className="text-sm text-[#6d5435] mt-1">{product.description?.[language]}</p>
          ) : null}
        </div>
        {mainAllergens.length ? (
          <AllergenBadges items={mainAllergens} language={language} />
        ) : (
          <p className="text-xs text-[#6d5435] italic">{language === 'es' ? 'Sin alérgenos declarados.' : language === 'en' ? 'No declared allergens.' : 'Aucun allergène déclaré.'}</p>
        )}
        <Link to={`/p/${product.slug}`} className="btn-primary inline-flex items-center justify-center w-full">
          {language === 'es' ? 'Ver ficha' : language === 'en' ? 'View details' : 'Voir la fiche'}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
