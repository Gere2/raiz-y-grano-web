import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import AllergenBadges from '@/components/AllergenBadges';
import { PRODUCTS } from '@/data/products';
import useLanguage from '@/hooks/useLanguage';
import { Award, Calendar, ClipboardList, MapPin, PackageCheck, ShieldCheck, QrCode } from 'lucide-react';

const COPY = {
  es: {
    backHome: 'Inicio',
    catalog: 'Catálogo',
    viewAllergens: 'Ver alérgenos',
    backCatalog: 'Volver al catálogo',
    ingredients: 'Ingredientes',
    allergens: 'Alérgenos',
    mayContain: 'Puede contener trazas',
    traceability: 'Origen y trazabilidad',
    storage: 'Conservación',
    nutrition: 'Nutrición',
    nutritionPending: 'Valores nutricionales: próximamente (estimados; pueden variar por lote).',
    lot: 'Lote y fecha',
    lotLabel: 'Lote',
    productionDate: 'Fecha de producción',
    lotNote: 'Información visible en vitrina y actualizada por lote.',
    qrTitle: 'QR de esta ficha',
    qrNote: 'Escanéalo para abrir la ficha pública del producto.',
    notFoundTitle: 'Producto no encontrado',
    notFoundText: 'No existe una ficha para este producto. Revisa el catálogo completo.',
    catalogCta: 'Abrir catálogo',
  },
  en: {
    backHome: 'Home',
    catalog: 'Catalog',
    viewAllergens: 'View allergens',
    backCatalog: 'Back to catalog',
    ingredients: 'Ingredients',
    allergens: 'Allergens',
    mayContain: 'May contain traces',
    traceability: 'Origin & traceability',
    storage: 'Storage',
    nutrition: 'Nutrition',
    nutritionPending: 'Nutrition values: coming soon (estimates; may vary by lot).',
    lot: 'Batch & date',
    lotLabel: 'Batch',
    productionDate: 'Production date',
    lotNote: 'Shown at the counter and updated by batch.',
    qrTitle: 'QR for this product',
    qrNote: 'Scan to open the public product page.',
    notFoundTitle: 'Product not found',
    notFoundText: 'No record for this product yet. Check the full catalog.',
    catalogCta: 'Open catalog',
  },
  fr: {
    backHome: 'Accueil',
    catalog: 'Catalogue',
    viewAllergens: 'Voir les allergènes',
    backCatalog: 'Retour au catalogue',
    ingredients: 'Ingrédients',
    allergens: 'Allergènes',
    mayContain: 'Peut contenir des traces',
    traceability: 'Origine et traçabilité',
    storage: 'Conservation',
    nutrition: 'Nutrition',
    nutritionPending: 'Valeurs nutritionnelles : bientôt (estimées; peuvent varier selon le lot).',
    lot: 'Lot et date',
    lotLabel: 'Lot',
    productionDate: 'Date de production',
    lotNote: 'Affiché en vitrine et mis à jour par lot.',
    qrTitle: 'QR de cette fiche',
    qrNote: 'Scannez pour ouvrir la page publique du produit.',
    notFoundTitle: 'Produit introuvable',
    notFoundText: 'Aucune fiche pour ce produit. Consultez le catalogue complet.',
    catalogCta: 'Ouvrir le catalogue',
  },
};

const ProductDetailPage = () => {
  const { language, setLanguage } = useLanguage();
  const { slug } = useParams();
  const product = useMemo(() => PRODUCTS.find((item) => item.slug === slug), [slug]);
  const copy = COPY[language];

  useEffect(() => {
    if (!product) {
      document.title = `Producto no encontrado - Raíz y Grano`;
      return;
    }
    document.title = `${product.name[language]} - Raíz y Grano`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', product.shortDescription[language]);
    }
  }, [language, product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f2ecdf] font-opensans">
        <Navbar />
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl border border-[#efeadf] px-8 py-16 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-cormorant text-[#795a32]">{copy.notFoundTitle}</h1>
            <p className="text-[#6d5435] mt-4">{copy.notFoundText}</p>
            <Link
              to="/p"
              className="btn-primary inline-flex items-center justify-center mt-6"
            >
              {copy.catalogCta}
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
          <div className="text-sm text-[#6d5435] mb-4">
            <Link to="/" className="hover:underline">
              {copy.backHome}
            </Link>{' '}
            /{' '}
            <Link to="/p" className="hover:underline">
              {copy.catalog}
            </Link>{' '}
            / <span className="font-semibold">{product.name[language]}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
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
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl border border-[#efeadf] shadow-sm overflow-hidden">
              <img
                src={product.image}
                onError={(event) => {
                  (event.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop';
                }}
                alt={product.name[language]}
                className="w-full h-[320px] object-cover"
              />
            </div>
            <div>
              <SectionHeading title={product.name[language]} subtitle={product.shortDescription[language]} align="left" />
              <AllergenBadges allergens={product.allergens} language={language} />
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => document.getElementById('allergens')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary inline-flex items-center"
                >
                  {copy.viewAllergens}
                </button>
                <Link
                  to="/p"
                  className="inline-flex items-center rounded-full border border-[#e0d4bb] px-4 py-2 text-sm font-semibold text-[#6d5435] hover:border-[#d3be97]"
                >
                  {copy.backCatalog}
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#7d6a50] italic">
            Tip: reemplaza la imagen en{' '}
            <span className="font-semibold">/public{product.image}</span>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">{copy.ingredients}</h3>
              </div>
              <ul className="list-disc list-inside text-[#6d5435] space-y-2">
                {product.ingredients[language].map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div id="allergens" className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">{copy.allergens}</h3>
              </div>
              <AllergenBadges allergens={product.allergens} language={language} />
              {product.mayContain?.[language]?.length ? (
                <div className="mt-4 text-sm text-[#6d5435]">
                  <p className="font-semibold">{copy.mayContain}:</p>
                  <ul className="list-disc list-inside">
                    {product.mayContain[language].map((item) => (
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
                <h3 className="text-2xl font-cormorant text-[#795a32]">{copy.traceability}</h3>
              </div>
              <ul className="text-[#6d5435] space-y-2">
                <li>{product.origin.place[language]}</li>
                <li>{product.origin.producer[language]}</li>
                <li>{product.origin.notes[language]}</li>
                <li>{language === 'es' && 'Producción por lotes y control interno.'}</li>
                {language === 'en' && <li>Small-batch production with internal controls.</li>}
                {language === 'fr' && <li>Production en petits lots avec contrôle interne.</li>}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <PackageCheck size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">{copy.storage}</h3>
              </div>
              <p className="text-[#6d5435]">{product.storage[language]}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Award size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">{copy.nutrition}</h3>
              </div>
              <p className="text-[#6d5435]">{product.nutritionNote[language] ?? copy.nutritionPending}</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={24} className="text-[#a18968]" />
                <h3 className="text-2xl font-cormorant text-[#795a32]">{copy.lot}</h3>
              </div>
              <p className="text-[#6d5435]">{copy.lotLabel}: —</p>
              <p className="text-[#6d5435]">{copy.productionDate}: —</p>
              <p className="text-xs text-[#7d6a50] italic mt-3">{copy.lotNote}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <QrCode size={24} className="text-[#a18968]" />
              <h3 className="text-2xl font-cormorant text-[#795a32]">{copy.qrTitle}</h3>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-[#f9f7f2] p-4 rounded-xl inline-flex">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(publicUrl)}`}
                  alt={`QR ${product.name[language]}`}
                  className="h-[128px] w-[128px]"
                />
              </div>
              <div>
                <p className="text-[#6d5435] mb-2">{copy.qrNote}</p>
                <a href={publicUrl} className="text-sm font-semibold text-[#795a32] hover:underline">
                  {publicUrl}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
