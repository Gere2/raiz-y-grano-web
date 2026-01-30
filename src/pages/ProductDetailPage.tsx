import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import SectionCard from '@/components/SectionCard';
import AllergenBadges from '@/components/AllergenBadges';
import IngredientsList from '@/components/IngredientsList';
import NutritionTable from '@/components/NutritionTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PRODUCTS, getProductBySlug } from '@/content/products';
import { Award, Calendar, ClipboardList, MapPin, PackageCheck, QrCode, ShieldCheck } from 'lucide-react';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = useMemo(() => (slug ? getProductBySlug(slug) : undefined), [slug]);

  useEffect(() => {
    if (!product) {
      document.title = 'Producto no encontrado - Raíz y Grano';
      return;
    }
    document.title = `${product.name} - Raíz y Grano`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', product.descriptionShort);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f2ecdf] font-opensans">
        <Navbar />
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl border border-[#efeadf] px-8 py-16 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-cormorant text-[#795a32]">Producto no encontrado</h1>
            <p className="text-[#6d5435] mt-4">
              No existe una ficha para este producto. Revisa el catálogo completo.
            </p>
            <Link to="/p" className="btn-primary inline-flex items-center justify-center mt-6">
              Abrir catálogo
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const publicUrl = `https://raizygrano.com/#/p/${product.slug}`;

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />

      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Inicio', to: '/' },
              { label: 'Catálogo', to: '/p' },
              { label: product.name },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl border border-[#efeadf] shadow-sm overflow-hidden">
              <img
                src={product.images.hero}
                onError={(event) => {
                  (event.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop';
                }}
                alt={product.name}
                className="w-full h-[320px] object-cover"
              />
            </div>
            <div>
              <SectionHeading title={product.name} subtitle={product.descriptionShort} align="left" />
              <p className="text-[#6d5435] mb-4">{product.descriptionLong}</p>
              <AllergenBadges items={product.allergens.contains} />
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => document.getElementById('allergens')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary inline-flex items-center"
                >
                  Ver alérgenos
                </button>
                <Link
                  to="/p"
                  className="inline-flex items-center rounded-full border border-[#e0d4bb] px-4 py-2 text-sm font-semibold text-[#6d5435] hover:border-[#d3be97]"
                >
                  Volver al catálogo
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#7d6a50] italic">
            Tip: reemplaza la imagen en <span className="font-semibold">/public{product.images.hero}</span>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title="Ingredientes" icon={<ClipboardList size={24} className="text-[#a18968]" />}>
              <IngredientsList items={product.ingredients} />
            </SectionCard>

            <SectionCard title="Alérgenos" icon={<ShieldCheck size={24} className="text-[#a18968]" />} >
              <div id="allergens" />
              <p className="text-xs text-[#7d6a50] mb-3">Contiene:</p>
              <AllergenBadges items={product.allergens.contains} />
              <p className="text-xs text-[#7d6a50] mt-3">
                Consulta al personal si tienes alergias.
              </p>
              {product.allergens.mayContain.length ? (
                <div className="mt-4 text-sm text-[#6d5435]">
                  <p className="font-semibold">Puede contener trazas:</p>
                  <AllergenBadges items={product.allergens.mayContain} />
                </div>
              ) : null}
            </SectionCard>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title="Origen y trazabilidad" icon={<MapPin size={24} className="text-[#a18968]" />}>
              <ul className="text-[#6d5435] space-y-2">
                <li>{product.origin.madeIn}</li>
                <li>{product.origin.production}</li>
                {product.origin.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <p className="text-sm text-[#6d5435] mt-4">
                Maridaje recomendado: <span className="font-semibold">{product.pairing}</span>
              </p>
            </SectionCard>

            <SectionCard title="Conservación" icon={<PackageCheck size={24} className="text-[#a18968]" />}>
              <p className="text-[#6d5435]">{product.storage}</p>
              <p className="text-xs text-[#7d6a50] italic mt-2">
                Consulta al personal si necesitas información adicional de conservación.
              </p>
            </SectionCard>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title="Nutrición" icon={<Award size={24} className="text-[#a18968]" />}>
              <NutritionTable
                disclaimer={product.nutrition.disclaimer}
                per100g={product.nutrition.per100g}
                perServing={product.nutrition.perServing}
              />
            </SectionCard>

            <SectionCard title="Lote y fecha" icon={<Calendar size={24} className="text-[#a18968]" />}>
              <p className="text-[#6d5435]">Lote: —</p>
              <p className="text-[#6d5435]">Fecha de producción: —</p>
              <p className="text-xs text-[#7d6a50] italic mt-3">
                Información visible en vitrina y actualizada por lote.
              </p>
            </SectionCard>
          </div>

          <SectionCard title="QR de esta ficha" icon={<QrCode size={24} className="text-[#a18968]" />}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-[#f9f7f2] p-4 rounded-xl inline-flex">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                    publicUrl,
                  )}`}
                  alt={`QR ${product.name}`}
                  className="h-[128px] w-[128px]"
                />
              </div>
              <div>
                <p className="text-[#6d5435] mb-2">Escanéalo para abrir la ficha pública del producto.</p>
                <a href={publicUrl} className="text-sm font-semibold text-[#795a32] hover:underline">
                  {publicUrl}
                </a>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
