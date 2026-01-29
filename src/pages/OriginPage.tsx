import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Coffee, MapPin, Award, Shield, Heart, Sprout, CheckCircle2, Leaf } from 'lucide-react';

type Language = 'es' | 'en' | 'fr';

type SustainabilityCard = {
  icon: string;
  title: string;
  description: string;
};

type OriginCopy = {
  title: string;
  subtitle: string;
  coffeeSection: {
    title: string;
    subtitle: string;
    origin: string;
    originText: string;
    quality: string;
    qualityText: string;
    certification: string;
    certifications: string[];
  };
  bakerySection: {
    title: string;
    subtitle: string;
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
  sustainabilitySection: {
    title: string;
    cards: SustainabilityCard[];
  };
};

const originCopy: Record<Language, OriginCopy> = {
  es: {
    title: 'El Origen de Nuestro Sabor',
    subtitle: 'De la raíz a tu taza: un viaje de calidad y pasión',
    coffeeSection: {
      title: 'Café de Especialidad Colombiano',
      subtitle: 'Seleccionado desde las montañas de Colombia',
      origin: 'Origen',
      originText:
        'Nuestro café proviene de fincas seleccionadas en las regiones cafeteras de Colombia, conocidas mundialmente por producir algunos de los mejores granos del mundo. Trabajamos directamente con agricultores que cultivan café a altitudes superiores a 1.400 metros sobre el nivel del mar.',
      quality: 'Calidad',
      qualityText:
        'Cada lote es cuidadosamente seleccionado, tostado artesanalmente y transportado para preservar sus notas frutales, cuerpo medio y acidez balanceada. Nuestro café es 100% arábica, cultivado bajo sombra y con prácticas sostenibles.',
      certification: 'Certificaciones',
      certifications: [
        'Comercio Justo',
        'Cultivo Sostenible',
        'Café de Especialidad (SCA 80+)',
        'Trazabilidad completa de origen',
      ],
    },
    bakerySection: {
      title: 'Repostería Artesanal Madrileña',
      subtitle: 'Horneado con amor en Madrid',
      local: 'Producción Local',
      localText:
        'Nuestra repostería se elabora diariamente en Madrid por maestros pasteleros que siguen recetas tradicionales con un toque moderno. Cada muffin, galleta y tarta es horneado en pequeños lotes para garantizar frescura y calidad.',
      ingredients: 'Ingredientes de Primera',
      ingredientsText:
        'Utilizamos ingredientes naturales de proveedores locales: harina de trigo de alta calidad, mantequilla francesa, chocolate belga, frutas frescas de temporada y frutos secos seleccionados. Sin conservantes artificiales ni grasas trans.',
      varieties: 'Nuestras Especialidades',
      varietiesList: [
        'Cheesecakes cremosos (clásico y pistacho)',
        'Tarta de zanahoria con nueces',
        'Muffins artesanales (arándanos y calabaza)',
        'Galletas artesanas (chocolate, pistacho, nueces)',
      ],
    },
    qualitySection: {
      title: 'Compromiso con la Calidad y Seguridad',
      subtitle: 'Tu salud es nuestra prioridad',
      food: 'Seguridad Alimentaria',
      foodText:
        'Cumplimos estrictamente con todas las normativas sanitarias españolas y europeas (APPCC). Nuestro foodtruck cuenta con las certificaciones necesarias para operar y garantizar la máxima higiene en cada preparación.',
      standards: 'Estándares de Calidad',
      standardsList: [
        'Registro Sanitario vigente',
        'Control APPCC (Análisis de Peligros y Puntos Críticos)',
        'Trazabilidad completa de productos',
        'Inspecciones sanitarias periódicas superadas',
        'Personal formado en manipulación de alimentos',
        'Almacenamiento y conservación según normativa',
      ],
      allergens: 'Información de Alérgenos',
      allergensText:
        'Proporcionamos información clara sobre alérgenos en todos nuestros productos. Si tienes alguna alergia o intolerancia, consúltanos sin compromiso. Ofrecemos opciones vegetarianas, veganas y sin gluten (bajo pedido).',
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
          title: 'Comercio Justo',
          description: 'Pagamos precios justos a nuestros productores de café colombianos.',
        },
        {
          icon: 'Sprout',
          title: 'Cero Desperdicio',
          description: 'Optimizamos nuestra producción para minimizar el desperdicio alimentario.',
        },
      ],
    },
  },
  en: {
    title: 'The Origin of Our Flavor',
    subtitle: 'From root to cup: a journey of quality and passion',
    coffeeSection: {
      title: 'Colombian Specialty Coffee',
      subtitle: 'Selected from the mountains of Colombia',
      origin: 'Origin',
      originText:
        'Our coffee comes from selected farms in the coffee-growing regions of Colombia, known worldwide for producing some of the best beans. We work directly with farmers who grow coffee at altitudes above 1,400 meters above sea level.',
      quality: 'Quality',
      qualityText:
        'Each batch is carefully selected, artisanally roasted, and transported to preserve its fruity notes, medium body, and balanced acidity. Our coffee is 100% arabica, shade-grown with sustainable practices.',
      certification: 'Certifications',
      certifications: [
        'Fair Trade',
        'Sustainable Cultivation',
        'Specialty Coffee (SCA 80+)',
        'Complete origin traceability',
      ],
    },
    bakerySection: {
      title: 'Artisan Madrid Pastries',
      subtitle: 'Baked with love in Madrid',
      local: 'Local Production',
      localText:
        'Our pastries are made daily in Madrid by master pastry chefs who follow traditional recipes with a modern twist. Each muffin, cookie, and cake is baked in small batches to ensure freshness and quality.',
      ingredients: 'Premium Ingredients',
      ingredientsText:
        'We use natural ingredients from local suppliers: high-quality wheat flour, French butter, Belgian chocolate, fresh seasonal fruits, and selected nuts. No artificial preservatives or trans fats.',
      varieties: 'Our Specialties',
      varietiesList: [
        'Creamy cheesecakes (classic and pistachio)',
        'Carrot cake with walnuts',
        'Artisan muffins (blueberry and pumpkin)',
        'Artisan cookies (chocolate, pistachio, walnuts)',
      ],
    },
    qualitySection: {
      title: 'Commitment to Quality and Safety',
      subtitle: 'Your health is our priority',
      food: 'Food Safety',
      foodText:
        'We strictly comply with all Spanish and European health regulations (HACCP). Our food truck has the necessary certifications to operate and guarantee maximum hygiene in every preparation.',
      standards: 'Quality Standards',
      standardsList: [
        'Valid health registration',
        'HACCP Control (Hazard Analysis and Critical Control Points)',
        'Complete product traceability',
        'Periodic health inspections passed',
        'Staff trained in food handling',
        'Storage and preservation according to regulations',
      ],
      allergens: 'Allergen Information',
      allergensText:
        'We provide clear allergen information on all our products. If you have any allergies or intolerances, please ask us. We offer vegetarian, vegan, and gluten-free options (upon request).',
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
          title: 'Fair Trade',
          description: 'We pay fair prices to our Colombian coffee producers.',
        },
        {
          icon: 'Sprout',
          title: 'Zero Waste',
          description: 'We optimize our production to minimize food waste.',
        },
      ],
    },
  },
  fr: {
    title: "L'Origine de Notre Saveur",
    subtitle: 'De la racine à votre tasse : un voyage de qualité et passion',
    coffeeSection: {
      title: 'Café de Spécialité Colombien',
      subtitle: 'Sélectionné dans les montagnes de Colombie',
      origin: 'Origine',
      originText:
        "Notre café provient de fermes sélectionnées dans les régions caféières de Colombie, reconnues mondialement pour produire certains des meilleurs grains. Nous travaillons directement avec des agriculteurs qui cultivent du café à plus de 1 400 mètres d'altitude.",
      quality: 'Qualité',
      qualityText:
        "Chaque lot est soigneusement sélectionné, torréfié artisanalement et transporté pour préserver ses notes fruitées, son corps moyen et son acidité équilibrée. Notre café est 100% arabica, cultivé à l'ombre avec des pratiques durables.",
      certification: 'Certifications',
      certifications: [
        'Commerce Équitable',
        'Culture Durable',
        'Café de Spécialité (SCA 80+)',
        "Traçabilité complète d'origine",
      ],
    },
    bakerySection: {
      title: 'Pâtisserie Artisanale de Madrid',
      subtitle: 'Cuit avec amour à Madrid',
      local: 'Production Locale',
      localText:
        'Nos pâtisseries sont préparées quotidiennement à Madrid par des maîtres pâtissiers qui suivent des recettes traditionnelles avec une touche moderne. Chaque muffin, biscuit et gâteau est cuit en petits lots pour garantir fraîcheur et qualité.',
      ingredients: 'Ingrédients Premium',
      ingredientsText:
        'Nous utilisons des ingrédients naturels de fournisseurs locaux : farine de blé de haute qualité, beurre français, chocolat belge, fruits frais de saison et fruits secs sélectionnés. Sans conservateurs artificiels ni graisses trans.',
      varieties: 'Nos Spécialités',
      varietiesList: [
        'Cheesecakes crémeux (classique et pistache)',
        'Gâteau à la carotte avec noix',
        'Muffins artisanaux (myrtille et potiron)',
        'Biscuits artisanaux (chocolat, pistache, noix)',
      ],
    },
    qualitySection: {
      title: 'Engagement envers la Qualité et la Sécurité',
      subtitle: 'Votre santé est notre priorité',
      food: 'Sécurité Alimentaire',
      foodText:
        'Nous respectons strictement toutes les réglementations sanitaires espagnoles et européennes (HACCP). Notre food truck possède les certifications nécessaires pour opérer et garantir une hygiène maximale dans chaque préparation.',
      standards: 'Standards de Qualité',
      standardsList: [
        'Enregistrement sanitaire en vigueur',
        'Contrôle HACCP (Analyse des Dangers et Points Critiques)',
        'Traçabilité complète des produits',
        'Inspections sanitaires périodiques réussies',
        'Personnel formé à la manipulation des aliments',
        'Stockage et conservation selon les normes',
      ],
      allergens: 'Information sur les Allergènes',
      allergensText:
        'Nous fournissons des informations claires sur les allergènes pour tous nos produits. Si vous avez des allergies ou intolérances, consultez-nous. Nous proposons des options végétariennes, véganes et sans gluten (sur demande).',
    },
    sustainabilitySection: {
      title: 'Durabilité et Responsabilité',
      cards: [
        {
          icon: 'Leaf',
          title: 'Emballage Durable',
          description: 'Nous utilisons des emballages biodégradables et compostables dans la mesure du possible.',
        },
        {
          icon: 'Heart',
          title: 'Commerce Équitable',
          description: 'Nous payons des prix justes à nos producteurs de café colombiens.',
        },
        {
          icon: 'Sprout',
          title: 'Zéro Déchet',
          description: 'Nous optimisons notre production pour minimiser le gaspillage alimentaire.',
        },
      ],
    },
  },
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
        es: 'Descubre el origen de nuestro café colombiano de especialidad y nuestra repostería artesanal madrileña. Calidad, seguridad y sostenibilidad en cada producto.',
        en: 'Discover the origin of our Colombian specialty coffee and Madrid artisan pastries. Quality, safety and sustainability in every product.',
        fr: "Découvrez l'origine de notre café de spécialité colombien et de notre pâtisserie artisanale de Madrid. Qualité, sécurité et durabilité dans chaque produit.",
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
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' fill-opacity='0.02' fill-rule='evenodd' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/svg%3E\")",
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
              <p className="text-[#7d6a50] italic mb-8">{copy.coffeeSection.subtitle}</p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="text-[#a18968] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.coffeeSection.origin}
                  </h3>
                </div>
                <p className="text-[#6d5435] leading-relaxed">
                  {copy.coffeeSection.originText}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Award size={20} className="text-[#a18968] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.coffeeSection.quality}
                  </h3>
                </div>
                <p className="text-[#6d5435] leading-relaxed">
                  {copy.coffeeSection.qualityText}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#5a442c] mb-3 font-cormorant text-xl">
                  {copy.coffeeSection.certification}
                </h3>
                <ul className="space-y-2">
                  {copy.coffeeSection.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center text-[#6d5435]">
                      <CheckCircle2 size={18} className="text-[#93a75b] mr-2 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#ede3cc] rounded-2xl p-8 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop"
                  alt="Coffee beans from Colombia"
                  className="rounded-xl w-full h-[400px] object-cover shadow-md"
                />
              </div>
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
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop"
                  alt="Artisan pastries"
                  className="rounded-xl w-full h-[400px] object-cover shadow-md"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Coffee size={32} className="text-[#c7987f] mr-3" />
                <h2 className="text-4xl font-cormorant text-[#795a32]">
                  {copy.bakerySection.title}
                </h2>
              </div>
              <p className="text-[#7d6a50] italic mb-8">{copy.bakerySection.subtitle}</p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <MapPin size={20} className="text-[#c7987f] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.bakerySection.local}
                  </h3>
                </div>
                <p className="text-[#6d5435] leading-relaxed">
                  {copy.bakerySection.localText}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Heart size={20} className="text-[#c7987f] mr-2" />
                  <h3 className="font-semibold text-[#5a442c] font-cormorant text-xl">
                    {copy.bakerySection.ingredients}
                  </h3>
                </div>
                <p className="text-[#6d5435] leading-relaxed">
                  {copy.bakerySection.ingredientsText}
                </p>
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
              <p className="text-[#6d5435] leading-relaxed">
                {copy.qualitySection.foodText}
              </p>
            </div>

            <div className="bg-[#f9f7f2] p-8 rounded-2xl border border-[#efeadf]">
              <h3 className="font-semibold text-[#5a442c] mb-4 font-cormorant text-2xl">
                {copy.qualitySection.allergens}
              </h3>
              <p className="text-[#6d5435] leading-relaxed">
                {copy.qualitySection.allergensText}
              </p>
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

      <Footer />
    </div>
  );
};

export default OriginPage;
