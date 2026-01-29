import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Award,
  CheckCircle2,
  Coffee,
  Cookie,
  Heart,
  Info,
  Leaf,
  ListChecks,
  MapPin,
  QrCode,
  Shield,
  Sprout,
} from 'lucide-react';

type Language = 'es' | 'en' | 'fr';

type Chip = {
  label: string;
  value: string;
};

type SustainabilityCard = {
  icon: string;
  title: string;
  description: string;
};

type OriginCopy = {
  title: string;
  subtitle: string;
  readMore: {
    more: string;
    less: string;
  };
  coffeeSection: {
    title: string;
    subtitle: string;
    chips: Chip[];
    origin: string;
    originText: string;
    quality: string;
    qualityText: string;
    commitments: string;
    commitmentsList: string[];
  };
  bakerySection: {
    title: string;
    subtitle: string;
    chips: Chip[];
    local: string;
    localText: string;
    ingredients: string;
    ingredientsText: string;
    varieties: string;
    varietiesList: string[];
  };
  qualitySection: {
    title: string;
    subtitle: string;
    food: string;
    foodText: string;
    standards: string;
    standardsList: string[];
    allergens: string;
    allergensText: string;
  };
  qrSection: {
    title: string;
    steps: string[];
    note: string;
    ctaLabel: string;
    ctaHref: string;
  };
  sustainabilitySection: {
    title: string;
    cards: SustainabilityCard[];
  };
  finalCta: {
    text: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const originCopy: Record<Language, OriginCopy> = {
  es: {
    title: 'El Origen de Nuestro Sabor',
    subtitle: 'De la raíz a tu taza: un viaje de calidad y pasión',
    readMore: {
      more: 'Leer más',
      less: 'Ver menos',
    },
    coffeeSection: {
      title: 'Café de Especialidad (Colombia)',
      subtitle: 'Seleccionado desde las montañas de Colombia',
      chips: [
        { label: 'País', value: 'Colombia' },
        { label: 'Altitud', value: 'Según lote (1.400m+)' },
        { label: 'Variedad', value: 'Arábica' },
        { label: 'Tueste', value: 'Artesanal' },
        { label: 'Perfil', value: 'Frutal / balanceado' },
      ],
      origin: 'Origen',
      originText:
        'Trabajamos con cafés colombianos seleccionados por perfil sensorial. Elegimos lotes con notas limpias, cuerpo medio y acidez equilibrada, priorizando consistencia en taza y claridad aromática.',
      quality: 'Calidad',
      qualityText:
        'Ajustamos la receta de tueste por lote y cuidamos el transporte y la conservación para proteger aromas. Cuando aplica, indicamos altitud y variedad en la ficha interna de cada lote.',
      commitments: 'Compromisos / Estándares',
      commitmentsList: [
        'Selección por perfil sensorial y consistencia',
        'Tueste en lotes pequeños y ajuste de receta',
        'Conservación y transporte para proteger aromas',
        'Trazabilidad por lote (cuando aplica)',
      ],
    },
    bakerySection: {
      title: 'Obrador propio en Madrid',
      subtitle: 'Horneado con amor en Madrid',
      chips: [
        { label: 'Obrador', value: 'Propio' },
        { label: 'Horneado', value: 'Diario' },
        { label: 'Huevo', value: 'Pasteurizado' },
        { label: 'Producción', value: 'Por lotes' },
        { label: 'Trazabilidad', value: 'Interna por lote' },
      ],
      local: 'Producción Local',
      localText:
        'Horneamos a diario bizcochos y galletas en pequeños lotes para garantizar frescura. Cada producción queda registrada para asegurar trazabilidad y consistencia.',
      ingredients: 'Ingredientes de Primera',
      ingredientsText:
        'Harina de trigo, mantequilla en galletas, aceite en bizcochos, chocolate y frutos secos seleccionados. Huevo pasteurizado para máxima seguridad.',
      varieties: 'Nuestras Especialidades',
      varietiesList: [
        'Bizcocho de zanahoria (clásico)',
        'Bizcocho de zanahoria con nueces y coco',
        'Galletas chips de chocolate',
        'Galletas chocolate blanco con nueces',
        'Galletas chocolate negro con pistacho',
      ],
    },
    qualitySection: {
      title: 'Compromiso con la Calidad y Seguridad',
      subtitle: 'Tu salud es nuestra prioridad',
      food: 'Seguridad Alimentaria',
      foodText:
        'Cumplimos con la normativa sanitaria vigente (APPCC) y mantenemos controles internos de higiene en cada preparación.',
      standards: 'Estándares de Calidad',
      standardsList: [
        'Registro sanitario vigente',
        'Control APPCC (Análisis de Peligros y Puntos Críticos)',
        'Trazabilidad interna de productos',
        'Personal formado en manipulación de alimentos',
        'Almacenamiento y conservación según normativa',
      ],
      allergens: 'Información de Alérgenos',
      allergensText:
        'Trabajamos con gluten, huevo, leche y frutos secos; puede contener trazas. Consulta el QR del producto para ingredientes y alérgenos.',
    },
    qrSection: {
      title: 'Trazabilidad por QR',
      steps: [
        'Escanea el QR en vitrina',
        'Ver ingredientes y alérgenos',
        'Ver nutrición y origen',
      ],
      note: 'Valores nutricionales estimados; pueden variar por lote.',
      ctaLabel: 'Ver ejemplo',
      ctaHref: '/p/cz',
    },
    sustainabilitySection: {
      title: 'Sostenibilidad y Responsabilidad',
      cards: [
        {
          icon: 'Leaf',
          title: 'Packaging Sostenible',
          description: 'Utilizamos envases biodegradables y compostables siempre que es posible.',
        },
        {
          icon: 'Heart',
          title: 'Relación directa',
          description: 'Trabajamos con proveedores que priorizan calidad y prácticas responsables.',
        },
        {
          icon: 'Sprout',
          title: 'Cero Desperdicio',
          description: 'Optimizamos nuestra producción para minimizar el desperdicio alimentario.',
        },
      ],
    },
    finalCta: {
      text: 'Escanea el QR de cada producto para ver ingredientes, alérgenos, nutrición y origen.',
      buttonLabel: 'Abrir catálogo',
      buttonHref: '/p',
    },
  },
  en: {
    title: 'The Origin of Our Flavor',
    subtitle: 'From root to cup: a journey of quality and passion',
    readMore: {
      more: 'Read more',
      less: 'Show less',
    },
    coffeeSection: {
      title: 'Specialty Coffee (Colombia)',
      subtitle: 'Selected from the mountains of Colombia',
      chips: [
        { label: 'Country', value: 'Colombia' },
        { label: 'Altitude', value: 'By lot (1,400m+)' },
        { label: 'Variety', value: 'Arabica' },
        { label: 'Roast', value: 'Small batch' },
        { label: 'Profile', value: 'Fruity / balanced' },
      ],
      origin: 'Origin',
      originText:
        'We work with Colombian coffees selected by sensory profile. We choose lots with clean notes, medium body, and balanced acidity, prioritizing cup consistency and aromatic clarity.',
      quality: 'Quality',
      qualityText:
        'We adjust roast recipes by lot and care for transport and storage to preserve aromas. When available, altitude and variety are indicated in each lot’s internal record.',
      commitments: 'Commitments / Standards',
      commitmentsList: [
        'Selection by sensory profile and consistency',
        'Small-batch roasting and recipe adjustments',
        'Storage and transport to protect aromas',
        'Lot traceability (when available)',
      ],
    },
    bakerySection: {
      title: 'In-house bakery in Madrid',
      subtitle: 'Baked with love in Madrid',
      chips: [
        { label: 'Bakery', value: 'In-house' },
        { label: 'Bake', value: 'Daily' },
        { label: 'Eggs', value: 'Pasteurized' },
        { label: 'Production', value: 'Small batches' },
        { label: 'Traceability', value: 'Internal by lot' },
      ],
      local: 'Local Production',
      localText:
        'We bake cakes and cookies daily in small batches to ensure freshness. Each batch is logged for traceability and consistency.',
      ingredients: 'Premium Ingredients',
      ingredientsText:
        'Wheat flour, butter in cookies, oil in cakes, chocolate, and selected nuts. Pasteurized eggs for added safety.',
      varieties: 'Our Specialties',
      varietiesList: [
        'Carrot cake (classic)',
        'Carrot cake with walnuts and coconut',
        'Chocolate chip cookies',
        'White chocolate cookies with walnuts',
        'Dark chocolate cookies with pistachio',
      ],
    },
    qualitySection: {
      title: 'Commitment to Quality and Safety',
      subtitle: 'Your health is our priority',
      food: 'Food Safety',
      foodText:
        'We comply with current health regulations (HACCP) and maintain internal hygiene controls for every preparation.',
      standards: 'Quality Standards',
      standardsList: [
        'Valid health registration',
        'HACCP control (Hazard Analysis and Critical Control Points)',
        'Internal product traceability',
        'Staff trained in food handling',
        'Storage and preservation according to regulations',
      ],
      allergens: 'Allergen Information',
      allergensText:
        'We work with gluten, eggs, milk, and nuts; products may contain traces. Check the product QR for ingredients and allergens.',
    },
    qrSection: {
      title: 'QR Traceability',
      steps: [
        'Scan the QR at the display',
        'View ingredients and allergens',
        'See nutrition and origin',
      ],
      note: 'Nutritional values are estimates and may vary by lot.',
      ctaLabel: 'View example',
      ctaHref: '/p/cz',
    },
    sustainabilitySection: {
      title: 'Sustainability and Responsibility',
      cards: [
        {
          icon: 'Leaf',
          title: 'Sustainable Packaging',
          description: 'We use biodegradable and compostable containers whenever possible.',
        },
        {
          icon: 'Heart',
          title: 'Direct relationships',
          description: 'We work with partners that prioritize quality and responsible practices.',
        },
        {
          icon: 'Sprout',
          title: 'Zero Waste',
          description: 'We optimize production to minimize food waste.',
        },
      ],
    },
    finalCta: {
      text: 'Scan each product’s QR to see ingredients, allergens, nutrition, and origin.',
      buttonLabel: 'Open catalog',
      buttonHref: '/p',
    },
  },
  fr: {
    title: "L'Origine de Notre Saveur",
    subtitle: 'De la racine à votre tasse : un voyage de qualité et passion',
    readMore: {
      more: 'Lire plus',
      less: 'Voir moins',
    },
    coffeeSection: {
      title: 'Café de spécialité (Colombie)',
      subtitle: 'Sélectionné dans les montagnes de Colombie',
      chips: [
        { label: 'Pays', value: 'Colombie' },
        { label: 'Altitude', value: 'Selon lot (1 400m+)' },
        { label: 'Variété', value: 'Arabica' },
        { label: 'Torréfaction', value: 'Petits lots' },
        { label: 'Profil', value: 'Fruité / équilibré' },
      ],
      origin: 'Origine',
      originText:
        'Nous travaillons avec des cafés colombiens sélectionnés selon le profil sensoriel. Nous choisissons des lots aux notes nettes, corps moyen et acidité équilibrée, en privilégiant la constance en tasse.',
      quality: 'Qualité',
      qualityText:
        'Nous ajustons la recette de torréfaction par lot et prenons soin du transport et de la conservation pour protéger les arômes. Lorsque c’est possible, l’altitude et la variété sont indiquées dans la fiche interne du lot.',
      commitments: 'Engagements / Standards',
      commitmentsList: [
        'Sélection par profil sensoriel et constance',
        'Torréfaction en petits lots et ajustement de recette',
        'Conservation et transport pour protéger les arômes',
        'Traçabilité par lot (lorsque disponible)',
      ],
    },
    bakerySection: {
      title: 'Atelier de pâtisserie à Madrid',
      subtitle: 'Cuit avec amour à Madrid',
      chips: [
        { label: 'Atelier', value: 'Sur place' },
        { label: 'Cuisson', value: 'Quotidienne' },
        { label: 'Œufs', value: 'Pasteurisés' },
        { label: 'Production', value: 'Petits lots' },
        { label: 'Traçabilité', value: 'Interne par lot' },
      ],
      local: 'Production locale',
      localText:
        'Nous cuisons chaque jour des gâteaux et biscuits en petits lots pour garantir la fraîcheur. Chaque lot est enregistré pour la traçabilité et la constance.',
      ingredients: 'Ingrédients de qualité',
      ingredientsText:
        'Farine de blé, beurre pour les biscuits, huile pour les gâteaux, chocolat et fruits secs sélectionnés. Œufs pasteurisés pour plus de sécurité.',
      varieties: 'Nos spécialités',
      varietiesList: [
        'Gâteau à la carotte (classique)',
        'Gâteau à la carotte avec noix et coco',
        'Biscuits aux pépites de chocolat',
        'Biscuits chocolat blanc et noix',
        'Biscuits chocolat noir et pistache',
      ],
    },
    qualitySection: {
      title: 'Engagement envers la Qualité et la Sécurité',
      subtitle: 'Votre santé est notre priorité',
      food: 'Sécurité alimentaire',
      foodText:
        'Nous respectons la réglementation sanitaire en vigueur (HACCP) et maintenons des contrôles internes d’hygiène pour chaque préparation.',
      standards: 'Standards de qualité',
      standardsList: [
        'Enregistrement sanitaire en vigueur',
        'Contrôle HACCP (Analyse des dangers et points critiques)',
        'Traçabilité interne des produits',
        'Personnel formé à la manipulation des aliments',
        'Stockage et conservation selon les normes',
      ],
      allergens: 'Informations sur les allergènes',
      allergensText:
        'Nous travaillons avec gluten, œufs, lait et fruits à coque ; des traces peuvent être présentes. Consultez le QR du produit pour les ingrédients et allergènes.',
    },
    qrSection: {
      title: 'Traçabilité par QR',
      steps: [
        'Scanne le QR en vitrine',
        'Voir ingrédients et allergènes',
        'Voir nutrition et origine',
      ],
      note: 'Valeurs nutritionnelles estimées ; elles peuvent varier selon le lot.',
      ctaLabel: 'Voir un exemple',
      ctaHref: '/p/cz',
    },
    sustainabilitySection: {
      title: 'Durabilité et Responsabilité',
      cards: [
        {
          icon: 'Leaf',
          title: 'Emballage durable',
          description: 'Nous utilisons des emballages biodégradables et compostables dès que possible.',
        },
        {
          icon: 'Heart',
          title: 'Relations directes',
          description: 'Nous travaillons avec des partenaires qui privilégient qualité et pratiques responsables.',
        },
        {
          icon: 'Sprout',
          title: 'Zéro déchet',
          description: 'Nous optimisons la production pour limiter le gaspillage alimentaire.',
        },
      ],
    },
    finalCta: {
      text: 'Scannez le QR de chaque produit pour voir ingrédients, allergènes, nutrition et origine.',
      buttonLabel: 'Ouvrir le catalogue',
      buttonHref: '/p',
    },
  },
};

const DataChips = ({ chips }: { chips: Chip[] }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {chips.map((chip) => (
      <span
        key={`${chip.label}-${chip.value}`}
        className="px-3 py-1 rounded-full bg-white/70 border border-[#e0d4bb] text-[#6d5435] text-sm"
      >
        <span className="font-semibold">{chip.label}:</span> {chip.value}
      </span>
    ))}
  </div>
);

const ReadMore = ({
  text,
  moreLabel,
  lessLabel,
}: {
  text: string;
  moreLabel: string;
  lessLabel: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p
        className="text-[#6d5435] leading-relaxed"
        style={
          open
            ? undefined
            : {
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }
        }
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-2 text-sm font-semibold text-[#795a32] hover:underline"
      >
        {open ? lessLabel : moreLabel}
      </button>
    </div>
  );
};

const OriginPage = () => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const titleMap = {
      es: 'Nuestro Origen - Raíz y Grano',
      en: 'Our Origin - Raíz y Grano',
      fr: 'Notre Origine - Raíz y Grano',
    };
    document.title = titleMap[language];

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descriptionMap = {
        es: 'Descubre el origen de nuestro café colombiano y nuestra repostería artesanal en Madrid. Calidad, seguridad y trazabilidad por QR en cada producto.',
        en: 'Discover the origin of our Colombian coffee and Madrid bakery. Quality, safety, and QR traceability in every product.',
        fr: "Découvrez l'origine de notre café colombien et de notre pâtisserie madrilène. Qualité, sécurité et traçabilité par QR pour chaque produit.",
      };
      metaDescription.setAttribute('content', descriptionMap[language]);
    }
    window.scrollTo(0, 0);
  }, [language]);

  const copy = originCopy[language];

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Leaf: <Leaf size={40} className="text-[#93a75b]" />,
      Heart: <Heart size={40} className="text-[#c7987f]" />,
      Sprout: <Sprout size={40} className="text-[#75753c]" />,
    };
    return icons[iconName];
  };

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <div
        className="absolute inset-0 pointer-events-none select-none -z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' fill-opacity='0.02' fill-rule='evenodd' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/svg%3E\")",
        }}
      />

      <Navbar />

      <section
        className="pt-32 pb-16 px-4"
        style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant text-[#795a32] mb-7 drop-shadow-sm tracking-tight">
            {copy.title}
          </h1>
          <p className="max-w-2xl mx-auto text-[#7d6a50] text-lg mb-10 font-light italic">
            {copy.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {(['es', 'en', 'fr'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold tracking-wide transition-all ${
                  language === lang
                    ? 'bg-[#a18968] text-white border-[#a18968] shadow-sm'
                    : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Coffee size={32} className="text-[#a18968] mr-3" />
                <h2 className="text-4xl font-cormorant text-[#795a32]">
                  {copy.coffeeSection.title}
                </h2>
              </div>
              <p className="text-[#7d6a50] italic mb-6">{copy.coffeeSection.subtitle}</p>
              <DataChips chips={copy.coffeeSection.chips} />

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="text-[#a18968] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.coffeeSection.origin}
                  </h3>
                </div>
                <ReadMore
                  text={copy.coffeeSection.originText}
                  moreLabel={copy.readMore.more}
                  lessLabel={copy.readMore.less}
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Award size={20} className="text-[#a18968] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.coffeeSection.quality}
                  </h3>
                </div>
                <ReadMore
                  text={copy.coffeeSection.qualityText}
                  moreLabel={copy.readMore.more}
                  lessLabel={copy.readMore.less}
                />
              </div>

              <div>
                <h3 className="font-semibold text-[#5a442c] mb-3 font-cormorant text-xl">
                  {copy.coffeeSection.commitments}
                </h3>
                <ul className="space-y-2">
                  {copy.coffeeSection.commitmentsList.map((commitment, idx) => (
                    <li key={idx} className="flex items-center text-[#6d5435]">
                      <CheckCircle2 size={18} className="text-[#93a75b] mr-2 flex-shrink-0" />
                      {commitment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#ede3cc] rounded-2xl p-8 shadow-lg">
                <img
                  src="/assets/coffee-origin.jpg"
                  onError={(event) => {
                    (event.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop';
                  }}
                  alt="Coffee beans from Colombia"
                  className="rounded-xl w-full h-[400px] object-cover shadow-md"
                />
              </div>
              <p className="mt-3 text-xs text-[#7d6a50] italic">
                Tip: reemplaza esta imagen con una propia en <span className="font-semibold">/public/assets/coffee-origin.jpg</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f9f7f2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="bg-[#ede3cc] rounded-2xl p-8 shadow-lg">
                <img
                  src="/assets/bakery-origin.jpg"
                  onError={(event) => {
                    (event.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop';
                  }}
                  alt="Freshly baked cookies"
                  className="rounded-xl w-full h-[400px] object-cover shadow-md"
                />
              </div>
              <p className="mt-3 text-xs text-[#7d6a50] italic">
                Tip: reemplaza esta imagen con una propia en <span className="font-semibold">/public/assets/bakery-origin.jpg</span>.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Cookie size={32} className="text-[#c7987f] mr-3" />
                <h2 className="text-4xl font-cormorant text-[#795a32]">
                  {copy.bakerySection.title}
                </h2>
              </div>
              <p className="text-[#7d6a50] italic mb-6">{copy.bakerySection.subtitle}</p>
              <DataChips chips={copy.bakerySection.chips} />

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="text-[#c7987f] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.bakerySection.local}
                  </h3>
                </div>
                <ReadMore
                  text={copy.bakerySection.localText}
                  moreLabel={copy.readMore.more}
                  lessLabel={copy.readMore.less}
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Heart size={20} className="text-[#c7987f] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.bakerySection.ingredients}
                  </h3>
                </div>
                <ReadMore
                  text={copy.bakerySection.ingredientsText}
                  moreLabel={copy.readMore.more}
                  lessLabel={copy.readMore.less}
                />
              </div>

              <div>
                <h3 className="font-semibold text-[#5a442c] mb-3 font-cormorant text-xl">
                  {copy.bakerySection.varieties}
                </h3>
                <ul className="space-y-2">
                  {copy.bakerySection.varietiesList.map((variety, idx) => (
                    <li key={idx} className="flex items-center text-[#6d5435]">
                      <CheckCircle2 size={18} className="text-[#c7987f] mr-2 flex-shrink-0" />
                      {variety}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield size={40} className="text-[#a18968] mr-3" />
              <h2 className="text-4xl font-cormorant text-[#795a32]">
                {copy.qualitySection.title}
              </h2>
            </div>
            <p className="text-[#7d6a50] italic text-lg">{copy.qualitySection.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f9f7f2] p-8 rounded-2xl border border-[#efeadf]">
              <h3 className="font-semibold text-[#5a442c] mb-4 font-cormorant text-2xl">
                {copy.qualitySection.food}
              </h3>
              <ReadMore
                text={copy.qualitySection.foodText}
                moreLabel={copy.readMore.more}
                lessLabel={copy.readMore.less}
              />
            </div>

            <div className="bg-[#f9f7f2] p-8 rounded-2xl border border-[#efeadf]">
              <h3 className="font-semibold text-[#5a442c] mb-4 font-cormorant text-2xl">
                {copy.qualitySection.allergens}
              </h3>
              <ReadMore
                text={copy.qualitySection.allergensText}
                moreLabel={copy.readMore.more}
                lessLabel={copy.readMore.less}
              />
            </div>
          </div>

          <div className="bg-[#ede3cc] p-8 rounded-2xl">
            <h3 className="font-semibold text-[#5a442c] mb-6 font-cormorant text-2xl text-center">
              {copy.qualitySection.standards}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {copy.qualitySection.standardsList.map((standard, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 size={20} className="text-[#93a75b] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-[#6d5435]">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f9f7f2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <QrCode size={40} className="text-[#a18968] mr-3" />
              <h2 className="text-4xl font-cormorant text-[#795a32]">{copy.qrSection.title}</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[QrCode, ListChecks, Info].map((Icon, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#efeadf] shadow-sm">
                <Icon size={28} className="text-[#a18968] mb-3" />
                <p className="text-[#6d5435] font-medium">{copy.qrSection.steps[idx]}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#ede3cc] p-6 rounded-2xl">
            <p className="text-[#6d5435] text-sm italic">{copy.qrSection.note}</p>
            <Link
              to={copy.qrSection.ctaHref}
              className="btn-primary inline-flex items-center justify-center"
            >
              {copy.qrSection.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f2ecdf]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cormorant text-[#795a32] text-center mb-12">
            {copy.sustainabilitySection.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {copy.sustainabilitySection.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{getIcon(card.icon)}</div>
                <h3 className="font-semibold text-[#5a442c] mb-3 font-cormorant text-xl">
                  {card.title}
                </h3>
                <p className="text-[#6d5435]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 bg-[#f2ecdf]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#efeadf] px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
            <p className="text-[#5a442c] font-medium">{copy.finalCta.text}</p>
            <Link to={copy.finalCta.buttonHref} className="btn-primary inline-flex items-center">
              {copy.finalCta.buttonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OriginPage;
