import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/content/products';
import { Search } from 'lucide-react';

const TAG_FILTERS = ['suave y dulce', 'chocolate', 'con frutos secos'];

const ProductCatalogPage = () => {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'cake' | 'cookie'>('all');
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Catálogo de productos - Raíz y Grano';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Catálogo de productos con ingredientes, alérgenos, nutrición y trazabilidad por QR.',
      );
    }
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesTag = !tagFilter || product.tags.includes(tagFilter);
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.descriptionShort.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesTag && matchesQuery;
    }).sort((a, b) => {
      const aTop = a.tags.includes('top campus') ? 1 : 0;
      const bTop = b.tags.includes('top campus') ? 1 : 0;
      return bTop - aTop;
    });
  }, [categoryFilter, query, tagFilter]);

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />

      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Catálogo de productos"
            subtitle="Escanea el QR en vitrina para ver ingredientes, alérgenos, nutrición y trazabilidad."
            align="left"
          />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Todo', value: 'all' },
                { label: 'Bizcochos', value: 'cake' },
                { label: 'Galletas', value: 'cookie' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCategoryFilter(option.value as 'all' | 'cake' | 'cookie')}
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
            <div className="flex flex-wrap gap-2">
              {TAG_FILTERS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setTagFilter(tag === tagFilter ? null : tag)}
                  className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all ${
                    tagFilter === tag
                      ? 'bg-[#795a32] text-white border-[#795a32] shadow-sm'
                      : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d5435]" />
              <input
                type="search"
                placeholder="Buscar producto"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-full border border-[#e0d4bb] bg-white/80 py-2 pl-10 pr-4 text-sm text-[#5a442c] focus:outline-none focus:ring-2 focus:ring-[#a18968]/40"
                aria-label="Buscar producto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#efeadf] p-10 text-center text-[#6d5435]">
              No encontramos productos con ese filtro. Prueba con otro término o categoría.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}

          <p className="mt-10 text-xs text-[#7d6a50] italic">
            Tip: reemplaza las imágenes de producto en <span className="font-semibold">/public/assets/products/</span>.
          </p>
          <div className="mt-8 text-center text-sm text-[#6d5435]">
            ¿Tienes una alergia? Pregúntanos en barra.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductCatalogPage;
