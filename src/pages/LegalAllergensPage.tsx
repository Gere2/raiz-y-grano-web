import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const LegalAllergensPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      es: 'Información de alérgenos - Raíz y Grano',
      en: 'Allergen information - Raíz y Grano',
      fr: 'Informations allergènes - Raíz y Grano',
    };
    const descriptions = {
      es: 'Información básica de alérgenos y trazas en Raíz y Grano.',
      en: 'Basic allergen and trace information at Raíz y Grano.',
      fr: 'Informations essentielles sur les allergènes et traces chez Raíz y Grano.',
    };
    document.title = titles[language];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }
  }, [language]);

  const copy = {
    es: {
      title: 'Información de alérgenos',
      intro:
        'Nuestros productos pueden contener gluten, huevo, leche, frutos de cáscara y soja. Consulta cada ficha para detalles.',
      bullets: [
        'El obrador trabaja con múltiples alérgenos, por lo que puede haber trazas.',
        'Si tienes una alergia grave, consulta con nuestro equipo antes de consumir.',
        'Las fichas QR muestran ingredientes y alérgenos actualizados por lote.',
      ],
    },
    en: {
      title: 'Allergen information',
      intro:
        'Our products may contain gluten, egg, milk, nuts, and soy. Check each product sheet for details.',
      bullets: [
        'Our bakery handles multiple allergens, so traces may be present.',
        'If you have a severe allergy, please ask our team before consuming.',
        'QR product sheets show up-to-date ingredients and allergens by batch.',
      ],
    },
    fr: {
      title: 'Informations allergènes',
      intro:
        'Nos produits peuvent contenir gluten, œuf, lait, fruits à coque et soja. Consultez chaque fiche produit.',
      bullets: [
        'L’atelier manipule plusieurs allergènes, des traces sont possibles.',
        'En cas d’allergie sévère, demandez conseil à notre équipe.',
        'Les fiches QR affichent les ingrédients et allergènes par lot.',
      ],
    },
  };

  const content = copy[language];

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />
      <section
        className="pt-32 pb-12 px-4"
        style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading title={content.title} subtitle={content.intro} align="left" />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#efeadf] p-8 text-[#6d5435] space-y-4">
          <ul className="list-disc list-inside space-y-2">
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LegalAllergensPage;
