import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import AllergenBadges from '@/components/AllergenBadges';
import NotFound from '@/pages/NotFound';
import { PRODUCTS } from '@/data/products';
import { Award, Calendar, ClipboardList, MapPin, PackageCheck, ShieldCheck } from 'lucide-react';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = useMemo(() => PRODUCTS.find((item) => item.slug === slug), [slug]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />

      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-[#6d5435] mb-4">
            <Link to="/" className="hover:underline">
              Inicio
            </Link>{' '}
            /{' '}
            <Link to="/p" className="hover:underline">
              Catálogo
            </Link>{' '}
            / <span className="font-semibold">{product.name}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl border border-[#efeadf] shadow-sm overflow-hidden">
              <img
                src={product.images.hero ?? '/assets/products/placeholder.jpg'}
                onError={(event) => {
                  (event.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop';
                }}
                alt={product.name}
                className="w-full h-[320px] object-cover"
              />
            </div>
            <div>
              <SectionHeading title={product.name} subtitle={product.shortDescription} align="left" />
              <AllergenBadges allergens={product.allergens} />
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => document.getElementById('allergens')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary inline-flex items-center"
                >
                  Ver alérgenos
                </button>
                <Link to="/p" className="inline-flex items-center rounded-full border border-[#e0d4bb] px-4 py-2 text-sm font-semibold text-[#6d5435] hover:border-[#d3be97]">
                  Volver al catálogo
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#7d6a50] italic">
            Tip: reemplaza la imagen en{' '}
            <span className="font-semibold">/public{product.images.hero ?? '/assets/products/placeholder.jpg'}</span>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">Ingredientes</h3>
              </div>
              <ul className="list-disc list-inside text-[#6d5435] space-y-2">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div id="allergens" className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">Alérgenos</h3>
              </div>
              <AllergenBadges allergens={product.allergens} />
              {product.mayContain?.length ? (
                <div className="mt-4 text-sm text-[#6d5435]">
                  <p className="font-semibold">Puede contener trazas:</p>
                  <ul className="list-disc list-inside">
                    {product.mayContain.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">Trazabilidad</h3>
              </div>
              <ul className="text-[#6d5435] space-y-2">
                <li>Obrador: {product.traceability.madeIn}</li>
                <li>{product.traceability.batchTracking}</li>
                <li>{product.traceability.egg}</li>
                <li>Producción por lotes y control interno</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <PackageCheck size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">Conservación</h3>
              </div>
              <p className="text-[#6d5435]">
                {product.storage.bestWithinHours
                  ? `Consumir preferentemente en ${product.storage.bestWithinHours}h.`
                  : 'Consumir preferentemente en las próximas horas.'}
              </p>
              <p className="text-[#6d5435] mt-2">{product.storage.notes}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Award size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">Nutrición</h3>
              </div>
              {product.nutrition.per100g ? (
                <div className="text-sm text-[#6d5435] space-y-1">
                  <p>Energía: {product.nutrition.per100g.energyKcal ?? '—'} kcal</p>
                  <p>Grasas: {product.nutrition.per100g.fatG ?? '—'} g</p>
                  <p>Grasas saturadas: {product.nutrition.per100g.satFatG ?? '—'} g</p>
                  <p>Carbohidratos: {product.nutrition.per100g.carbsG ?? '—'} g</p>
                  <p>Azúcares: {product.nutrition.per100g.sugarG ?? '—'} g</p>
                  <p>Fibra: {product.nutrition.per100g.fiberG ?? '—'} g</p>
                  <p>Proteínas: {product.nutrition.per100g.proteinG ?? '—'} g</p>
                  <p>Sal: {product.nutrition.per100g.saltG ?? '—'} g</p>
                </div>
              ) : (
                <p className="text-[#6d5435]">{product.nutrition.note}</p>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">Lote y fecha</h3>
              </div>
              <p className="text-[#6d5435]">Lote: —</p>
              <p className="text-[#6d5435]">Fecha de producción: —</p>
              <p className="text-xs text-[#7d6a50] italic mt-3">
                Información visible en vitrina y actualizada por lote.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
