import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import SectionCard from '@/components/SectionCard';
import ProductCard from '@/components/ProductCard';
import { ALLERGEN_LABELS, ALLERGEN_OPTIONS, PRODUCTS } from '@/data/products';
import { Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TAG_OPTIONS = ['suave-y-dulce', 'con-frutos-secos'];

const ProductCatalogPage = () => {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'bakery' | 'coffee'>('all');
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [excludeAllergens, setExcludeAllergens] = useState(true);
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  useEffect(() => {
    const titles = {
      es: 'Catálogo de productos - Raíz y Grano',
      en: 'Product catalog - Raíz y Grano',
      fr: 'Catalogue produits - Raíz y Grano',
    };
    const descriptions = {
      es: 'Catálogo con ingredientes, alérgenos, nutrición y trazabilidad por QR.',
      en: 'Catalog with ingredients, allergens, nutrition, and QR traceability.',
      fr: 'Catalogue avec ingrédients, allergènes, nutrition et traçabilité QR.',
    };
    document.title = titles[language];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }
  }, [language]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const name = product.name[language].toLowerCase();
      const description = product.description?.[language]?.toLowerCase() ?? '';
      const matchesQuery = !normalizedQuery || name.includes(normalizedQuery) || description.includes(normalizedQuery);
      const matchesTag = !tagFilter || product.tags?.includes(tagFilter);

      if (selectedAllergens.length === 0) {
        return matchesCategory && matchesQuery && matchesTag;
      }

      const hasSelectedAllergen = selectedAllergens.some((allergen) => product.allergens.includes(allergen));
      const matchesAllergens = excludeAllergens ? !hasSelectedAllergen : hasSelectedAllergen;

      return matchesCategory && matchesQuery && matchesAllergens && matchesTag;
    });
  }, [categoryFilter, excludeAllergens, language, query, selectedAllergens, tagFilter]);

  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen) ? prev.filter((item) => item !== allergen) : [...prev, allergen],
    );
  };

  const tagLabels: Record<string, Record<'es' | 'en' | 'fr', string>> = {
    'suave-y-dulce': { es: 'Suave y dulce', en: 'Soft & sweet', fr: 'Doux et sucré' },
    'con-frutos-secos': { es: 'Con frutos secos', en: 'With nuts', fr: 'Avec fruits à coque' },
  };

  const labels = {
    es: {
      title: 'Catálogo de productos',
      subtitle: 'Escanea el QR en vitrina para ver ingredientes, alérgenos, nutrición y trazabilidad.',
      search: 'Buscar producto',
      all: 'Todo',
      bakery: 'Obrador',
      coffee: 'Café',
      allergensTitle: 'Alérgenos',
      onlyWithout: 'Solo sin los alérgenos seleccionados',
      reset: 'Limpiar filtros',
      empty: 'No encontramos productos con ese filtro. Prueba con otro término o categoría.',
      quickDecision: 'Decisión rápida',
      quickCopy: 'Selecciona un filtro para encontrar tu producto ideal.',
      exploreAll: 'Ver todo',
      note: '¿Tienes una alergia? Pregúntanos en barra.',
      tagsTitle: 'Tags',
    },
    en: {
      title: 'Product catalog',
      subtitle: 'Scan the QR at the display to see ingredients, allergens, nutrition, and traceability.',
      search: 'Search product',
      all: 'All',
      bakery: 'Bakery',
      coffee: 'Coffee',
      allergensTitle: 'Allergens',
      onlyWithout: 'Only without selected allergens',
      reset: 'Clear filters',
      empty: 'No products match the filter. Try another term or category.',
      quickDecision: 'Quick decision',
      quickCopy: 'Pick a filter to find the right product faster.',
      exploreAll: 'View all',
      note: 'Have an allergy? Ask at the counter.',
      tagsTitle: 'Tags',
    },
    fr: {
      title: 'Catalogue produits',
      subtitle: 'Scannez le QR en vitrine pour voir ingrédients, allergènes, nutrition et traçabilité.',
      search: 'Rechercher un produit',
      all: 'Tout',
      bakery: 'Pâtisserie',
      coffee: 'Café',
      allergensTitle: 'Allergènes',
      onlyWithout: 'Uniquement sans les allergènes sélectionnés',
      reset: 'Réinitialiser',
      empty: 'Aucun produit ne correspond à ce filtre. Essayez un autre terme ou catégorie.',
      quickDecision: 'Décision rapide',
      quickCopy: 'Choisissez un filtre pour trouver le bon produit plus vite.',
      exploreAll: 'Voir tout',
      note: 'Vous avez une allergie ? Demandez au comptoir.',
      tagsTitle: 'Tags',
    },
  };

  const content = labels[language];

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />

      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={content.title} subtitle={content.subtitle} align="left" />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {[
                { label: content.all, value: 'all' },
                { label: content.bakery, value: 'bakery' },
                { label: content.coffee, value: 'coffee' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCategoryFilter(option.value as 'all' | 'bakery' | 'coffee')}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all ${
                    categoryFilter === option.value
                      ? 'bg-[#a18968] text-white border-[#a18968] shadow-sm'
                      : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d5435]" />
              <input
                type="search"
                placeholder={content.search}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-full border border-[#e0d4bb] bg-white/80 py-2 pl-10 pr-4 text-sm text-[#5a442c] focus:outline-none focus:ring-2 focus:ring-[#a18968]/40"
                aria-label={content.search}
              />
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <SectionCard title={content.quickDecision}>
              <p className="text-[#6d5435] mb-4">{content.quickCopy}</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCategoryFilter('bakery')}
                  className="btn-primary inline-flex items-center"
                >
                  {content.bakery}
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('coffee')}
                  className="inline-flex items-center rounded-full border border-[#e0d4bb] px-4 py-2 text-sm font-semibold text-[#6d5435] hover:border-[#d3be97]"
                >
                  {content.coffee}
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryFilter('all')}
                  className="inline-flex items-center rounded-full border border-[#e0d4bb] px-4 py-2 text-sm font-semibold text-[#6d5435] hover:border-[#d3be97]"
                >
                  {content.exploreAll}
                </button>
              </div>
            </SectionCard>
            <SectionCard title={content.allergensTitle}>
              <div className="flex flex-wrap gap-3">
                {ALLERGEN_OPTIONS.map((option) => (
                  <label
                    key={option.key}
                    className="flex items-center gap-2 rounded-full border border-[#e0d4bb] bg-white/80 px-3 py-2 text-xs font-semibold text-[#6d5435] cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAllergens.includes(option.key)}
                      onChange={() => toggleAllergen(option.key)}
                      className="accent-[#795a32]"
                      aria-label={ALLERGEN_LABELS[language][option.key]}
                    />
                    {ALLERGEN_LABELS[language][option.key]}
                  </label>
                ))}
              </div>
              <label className="mt-4 flex items-center gap-2 text-xs text-[#6d5435]">
                <input
                  type="checkbox"
                  checked={excludeAllergens}
                  onChange={(event) => setExcludeAllergens(event.target.checked)}
                  className="accent-[#795a32]"
                />
                {content.onlyWithout}
              </label>
              <button
                type="button"
                onClick={() => {
                  setSelectedAllergens([]);
                  setExcludeAllergens(true);
                }}
                className="mt-3 text-xs font-semibold text-[#795a32] hover:underline"
              >
                {content.reset}
              </button>
            </SectionCard>
            <SectionCard title={content.tagsTitle}>
              <div className="flex flex-wrap gap-2">
                {TAG_OPTIONS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setTagFilter(tag === tagFilter ? null : tag)}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${
                      tagFilter === tag
                        ? 'bg-[#795a32] text-white border-[#795a32]'
                        : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                    }`}
                  >
                    {tagLabels[tag][language]}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setTagFilter(null)}
                className="mt-3 text-xs font-semibold text-[#795a32] hover:underline"
              >
                {content.reset}
              </button>
            </SectionCard>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#efeadf] p-10 text-center text-[#6d5435]">
              {content.empty}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}

          <div className="mt-8 text-center text-sm text-[#6d5435]">{content.note}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductCatalogPage;
