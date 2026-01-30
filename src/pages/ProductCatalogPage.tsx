import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import useLanguage from '@/hooks/useLanguage';
import { Search } from 'lucide-react';

const COPY = {
  es: {
    title: 'Catálogo de productos',
    subtitle: 'Escanea el QR en vitrina para ver ingredientes, alérgenos, nutrición y trazabilidad.',
    searchPlaceholder: 'Buscar producto',
    filters: {
      all: 'Todo',
      cake: 'Bizcochos',
      cookie: 'Galletas',
    },
    empty: 'No encontramos productos con ese filtro. Prueba con otro término o categoría.',
    tip: 'Tip: reemplaza las imágenes de producto en /public/assets/products/.',
    footer: '¿Tienes una alergia? Pregúntanos en barra.',
  },
  en: {
    title: 'Product catalog',
    subtitle: 'Scan the QR at the display to see ingredients, allergens, nutrition, and traceability.',
    searchPlaceholder: 'Search product',
    filters: {
      all: 'All',
      cake: 'Cakes',
      cookie: 'Cookies',
    },
    empty: 'No products found. Try another search or category.',
    tip: 'Tip: replace product images in /public/assets/products/.',
    footer: 'Have an allergy? Ask us at the counter.',
  },
  fr: {
    title: 'Catalogue de produits',
    subtitle: 'Scannez le QR en vitrine pour voir ingrédients, allergènes, nutrition et traçabilité.',
    searchPlaceholder: 'Rechercher un produit',
    filters: {
      all: 'Tout',
      cake: 'Gâteaux',
      cookie: 'Cookies',
    },
    empty: 'Aucun produit trouvé. Essayez un autre terme ou catégorie.',
    tip: 'Astuce : remplacez les images dans /public/assets/products/.',
    footer: 'Une allergie ? Demandez-nous au comptoir.',
  },
};

const ProductCatalogPage = () => {
  const { language, setLanguage } = useLanguage();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'cake' | 'cookie'>('all');
  const copy = COPY[language];

  useEffect(() => {
    document.title = `${copy.title} - Raíz y Grano`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', copy.subtitle);
    }
  }, [copy.subtitle, copy.title]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesFilter = filter === 'all' || product.category === filter;
      const matchesQuery =
        !normalizedQuery ||
        product.name[language].toLowerCase().includes(normalizedQuery) ||
        product.shortDescription[language].toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [filter, language, query]);

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />

      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={copy.title} subtitle={copy.subtitle} align="left" />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {([
                { label: copy.filters.all, value: 'all' },
                { label: copy.filters.cake, value: 'cake' },
                { label: copy.filters.cookie, value: 'cookie' },
              ] as const).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFilter(option.value)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                    filter === option.value
                      ? 'bg-[#a18968] text-white border-[#a18968] shadow-sm'
                      : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {(['es', 'en', 'fr'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all ${
                    language === lang
                      ? 'bg-[#a18968] text-white border-[#a18968] shadow-sm'
                      : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d5435]" />
              <input
                type="search"
                placeholder={copy.searchPlaceholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-full border border-[#e0d4bb] bg-white/80 py-2 pl-10 pr-4 text-sm text-[#5a442c] focus:outline-none focus:ring-2 focus:ring-[#a18968]/40"
                aria-label={copy.searchPlaceholder}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#efeadf] p-10 text-center text-[#6d5435]">
              {copy.empty}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} language={language} />
              ))}
            </div>
          )}

          <p className="mt-10 text-xs text-[#7d6a50] italic">{copy.tip}</p>
          <div className="mt-8 text-center text-sm text-[#6d5435]">{copy.footer}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductCatalogPage;
