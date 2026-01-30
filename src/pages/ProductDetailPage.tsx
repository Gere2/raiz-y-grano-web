import { useEffect, useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import SectionCard from '@/components/SectionCard';
import AllergenBadges from '@/components/AllergenBadges';
import IngredientsList from '@/components/IngredientsList';
import NutritionTable from '@/components/NutritionTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getProductBySlug } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { trackEvent } from '@/lib/analytics';
import { Award, ClipboardList, MapPin, ShieldCheck } from 'lucide-react';

const originValueTranslations: Record<string, { es: string; en: string; fr: string }> = {
  Lavado: { es: 'Lavado', en: 'Washed', fr: 'Lavé' },
  Dulce: { es: 'Dulce', en: 'Sweet', fr: 'Doux' },
  'Notas cítricas y frutales': {
    es: 'Notas cítricas y frutales',
    en: 'Citrus and fruity notes',
    fr: 'Notes d’agrumes et de fruits',
  },
  'Frutos rojos': { es: 'Frutos rojos', en: 'Red fruits', fr: 'Fruits rouges' },
  Cítrico: { es: 'Cítrico', en: 'Citrus', fr: 'Agrumes' },
  Chocolate: { es: 'Chocolate', en: 'Chocolate', fr: 'Chocolat' },
  'Media - cítrica': {
    es: 'Media - cítrica',
    en: 'Medium - citric',
    fr: 'Moyenne - citronnée',
  },
  'Medio - cremoso': {
    es: 'Medio - cremoso',
    en: 'Medium - creamy',
    fr: 'Moyen - crémeux',
  },
};

const bakeryOriginNotes: Record<string, { es: string; en: string; fr: string }> = {
  inhouse_bakery: {
    es: 'Obrador propio en Madrid',
    en: 'In-house bakery in Madrid',
    fr: 'Atelier de pâtisserie à Madrid',
  },
  pasteurized_eggs: {
    es: 'Huevo pasteurizado',
    en: 'Pasteurized eggs',
    fr: 'Œufs pasteurisés',
  },
  small_batch: {
    es: 'Producción por lotes',
    en: 'Small-batch production',
    fr: 'Production en petits lots',
  },
};

const ProductDetailPage = () => {
  const { language } = useLanguage();
  const { slug } = useParams();
  const location = useLocation();
  const product = useMemo(() => (slug ? getProductBySlug(slug) : undefined), [slug]);
  const params = new URLSearchParams(location.search);
  const isAdmin = params.get('admin') === '1';
  const isQrSource = params.get('src') === 'qr' || document.referrer.includes('/qr');

  useEffect(() => {
    if (!product) {
      const titles = {
        es: 'Producto no encontrado - Raíz y Grano',
        en: 'Product not found - Raíz y Grano',
        fr: 'Produit introuvable - Raíz y Grano',
      };
      document.title = titles[language];
      return;
    }

    document.title = `${product.name[language]} - Raíz y Grano`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', product.description?.[language] ?? product.name[language]);
    }

    trackEvent('product_view', { slug: product.slug, category: product.category });
    if (isQrSource) {
      trackEvent('qr_scan', { slug: product.slug });
    }
  }, [isQrSource, language, product]);

  const labels = {
    es: {
      home: 'Inicio',
      catalog: 'Catálogo',
      back: 'Volver al catálogo',
      ingredients: 'Ingredientes',
      allergens: 'Alérgenos',
      contains: 'Contiene:',
      mayContain: 'Puede contener trazas:',
      allergensNote: 'Consulta al personal si tienes alergias.',
      nutrition: 'Nutrición',
      nutritionPending: 'Pendiente de cálculo nutricional',
      nutritionAdmin: 'Añadir datos de nutrición en products.ts',
      origin: 'Origen y trazabilidad',
      originBakery: 'Obrador propio en Madrid con producción diaria y control por lotes.',
      supplier: 'Proveedor',
      notFoundTitle: 'Producto no encontrado',
      notFoundBody: 'No existe una ficha para este producto. Revisa el catálogo completo.',
    },
    en: {
      home: 'Home',
      catalog: 'Catalog',
      back: 'Back to catalog',
      ingredients: 'Ingredients',
      allergens: 'Allergens',
      contains: 'Contains:',
      mayContain: 'May contain traces:',
      allergensNote: 'Ask our team if you have allergies.',
      nutrition: 'Nutrition',
      nutritionPending: 'Nutrition calculation pending',
      nutritionAdmin: 'Add nutrition data in products.ts',
      origin: 'Origin & traceability',
      originBakery: 'In-house bakery in Madrid with daily production and batch control.',
      supplier: 'Supplier',
      notFoundTitle: 'Product not found',
      notFoundBody: 'No product sheet exists for this item. Check the catalog.',
    },
    fr: {
      home: 'Accueil',
      catalog: 'Catalogue',
      back: 'Retour au catalogue',
      ingredients: 'Ingrédients',
      allergens: 'Allergènes',
      contains: 'Contient :',
      mayContain: 'Peut contenir des traces :',
      allergensNote: 'Demandez à notre équipe en cas d’allergie.',
      nutrition: 'Nutrition',
      nutritionPending: 'Calcul nutritionnel en attente',
      nutritionAdmin: 'Ajouter la nutrition dans products.ts',
      origin: 'Origine & traçabilité',
      originBakery: 'Atelier de pâtisserie à Madrid, production quotidienne et par lot.',
      supplier: 'Fournisseur',
      notFoundTitle: 'Produit introuvable',
      notFoundBody: 'Aucune fiche produit pour cet article. Consultez le catalogue.',
    },
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f2ecdf] font-opensans">
        <Navbar />
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl border border-[#efeadf] px-8 py-16 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-cormorant text-[#795a32]">{labels[language].notFoundTitle}</h1>
            <p className="text-[#6d5435] mt-4">{labels[language].notFoundBody}</p>
            <Link to="/p" className="btn-primary inline-flex items-center justify-center mt-6">
              {labels[language].catalog}
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const translateOriginValue = (value?: string) => {
    if (!value) {
      return undefined;
    }
    return originValueTranslations[value]?.[language] ?? value;
  };

  const translateOriginList = (values?: string[]) =>
    values?.map((value) => originValueTranslations[value]?.[language] ?? value) ?? [];

  const fallbackImage =
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop';

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />

      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { label: labels[language].home, to: '/' },
              { label: labels[language].catalog, to: '/p' },
              { label: product.name[language] },
            ]}
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl border border-[#efeadf] shadow-sm overflow-hidden">
              <img
                src={product.images?.main ?? fallbackImage}
                onError={(event) => {
                  (event.currentTarget as HTMLImageElement).src = fallbackImage;
                }}
                alt={product.name[language]}
                className="w-full h-[320px] object-cover"
              />
            </div>
            <div>
              <SectionHeading
                title={product.name[language]}
                subtitle={product.description?.[language] ?? ''}
                align="left"
              />
              {product.allergens.length ? (
                <AllergenBadges items={product.allergens} language={language} />
              ) : (
                <p className="text-sm text-[#6d5435] italic">
                  {language === 'es'
                    ? 'Sin alérgenos declarados.'
                    : language === 'en'
                      ? 'No declared allergens.'
                      : 'Aucun allergène déclaré.'}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => document.getElementById('allergens')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary inline-flex items-center"
                >
                  {labels[language].allergens}
                </button>
                <Link
                  to="/p"
                  className="inline-flex items-center rounded-full border border-[#e0d4bb] px-4 py-2 text-sm font-semibold text-[#6d5435] hover:border-[#d3be97]"
                >
                  {labels[language].back}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title={labels[language].ingredients} icon={<ClipboardList size={24} className="text-[#a18968]" />}>
              <IngredientsList items={product.ingredients[language]} />
            </SectionCard>

            <SectionCard title={labels[language].allergens} icon={<ShieldCheck size={24} className="text-[#a18968]" />}>
              <div id="allergens" />
              {product.allergens.length ? (
                <div className="space-y-3">
                  <p className="text-xs text-[#7d6a50]">{labels[language].contains}</p>
                  <AllergenBadges items={product.allergens} language={language} />
                </div>
              ) : (
                <p className="text-sm text-[#6d5435] italic">
                  {language === 'es'
                    ? 'No contiene alérgenos declarados.'
                    : language === 'en'
                      ? 'No declared allergens.'
                      : 'Aucun allergène déclaré.'}
                </p>
              )}
              {product.mayContain?.length ? (
                <div className="mt-4 text-sm text-[#6d5435]">
                  <p className="font-semibold">{labels[language].mayContain}</p>
                  <AllergenBadges items={product.mayContain} language={language} />
                </div>
              ) : null}
              <p className="text-xs text-[#7d6a50] mt-3">{labels[language].allergensNote}</p>
            </SectionCard>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SectionCard title={labels[language].origin} icon={<MapPin size={24} className="text-[#a18968]" />}>
              {product.category === 'coffee' ? (
                <ul className="text-[#6d5435] space-y-2">
                  {product.origin?.country ? (
                    <li>
                      <span className="font-semibold">{language === 'es' ? 'País' : language === 'en' ? 'Country' : 'Pays'}:</span>{' '}
                      {product.origin.country}
                    </li>
                  ) : null}
                  {product.origin?.process ? (
                    <li>
                      <span className="font-semibold">{language === 'es' ? 'Proceso' : language === 'en' ? 'Process' : 'Procédé'}:</span>{' '}
                      {translateOriginValue(product.origin.process)}
                    </li>
                  ) : null}
                  {product.origin?.profile?.length ? (
                    <li>
                      <span className="font-semibold">{language === 'es' ? 'Perfil' : language === 'en' ? 'Profile' : 'Profil'}:</span>{' '}
                      {translateOriginList(product.origin.profile).join(', ')}
                    </li>
                  ) : null}
                  {product.origin?.aroma?.length ? (
                    <li>
                      <span className="font-semibold">{language === 'es' ? 'Aroma' : language === 'en' ? 'Aroma' : 'Arômes'}:</span>{' '}
                      {translateOriginList(product.origin.aroma).join(', ')}
                    </li>
                  ) : null}
                  {product.origin?.acidity ? (
                    <li>
                      <span className="font-semibold">{language === 'es' ? 'Acidez' : language === 'en' ? 'Acidity' : 'Acidité'}:</span>{' '}
                      {translateOriginValue(product.origin.acidity)}
                    </li>
                  ) : null}
                  {product.origin?.body ? (
                    <li>
                      <span className="font-semibold">{language === 'es' ? 'Cuerpo' : language === 'en' ? 'Body' : 'Corps'}:</span>{' '}
                      {translateOriginValue(product.origin.body)}
                    </li>
                  ) : null}
                  {product.origin?.supplierName && product.origin?.supplierUrl ? (
                    <li>
                      <span className="font-semibold">{labels[language].supplier}:</span>{' '}
                      <a
                        href={product.origin.supplierUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#795a32] font-semibold hover:underline"
                        onClick={() => trackEvent('outbound_click', { url: product.origin?.supplierUrl, slug: product.slug })}
                      >
                        {product.origin.supplierName}
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <div className="space-y-2 text-[#6d5435]">
                  <p>{labels[language].originBakery}</p>
                  <ul className="list-disc list-inside text-sm">
                    {product.origin?.notes?.map((note) => (
                      <li key={note}>{bakeryOriginNotes[note]?.[language] ?? note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </SectionCard>

            <SectionCard title={labels[language].nutrition} icon={<Award size={24} className="text-[#a18968]" />}>
              {product.nutrition ? (
                <NutritionTable nutrition={product.nutrition} language={language} />
              ) : (
                <div className="text-[#6d5435] space-y-2">
                  <p className="font-semibold">{labels[language].nutritionPending}</p>
                  {isAdmin ? (
                    <p className="text-xs text-[#7d6a50] italic">{labels[language].nutritionAdmin}</p>
                  ) : null}
                </div>
              )}
            </SectionCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
