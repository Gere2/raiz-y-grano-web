import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const LegalPrivacyPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      es: 'Política de privacidad - Raíz y Grano',
      en: 'Privacy policy - Raíz y Grano',
      fr: 'Politique de confidentialité - Raíz y Grano',
    };
    const descriptions = {
      es: 'Información básica sobre privacidad y contacto en Raíz y Grano.',
      en: 'Basic privacy and contact information for Raíz y Grano.',
      fr: 'Informations essentielles sur la confidentialité et le contact pour Raíz y Grano.',
    };
    document.title = titles[language];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }
  }, [language]);

  const copy = {
    es: {
      title: 'Política de privacidad',
      intro:
        'En Raíz y Grano protegemos tus datos y solo usamos la información necesaria para ofrecerte el mejor servicio.',
      bullets: [
        'No compartimos tus datos con terceros sin tu consentimiento.',
        'Solo recopilamos datos esenciales para reservas, contacto o atención al cliente.',
        'Puedes solicitar la eliminación o actualización de tus datos escribiendo a info@raizygrano.com.',
      ],
    },
    en: {
      title: 'Privacy policy',
      intro:
        'At Raíz y Grano we protect your data and only use the information needed to deliver our service.',
      bullets: [
        'We do not share your data with third parties without your consent.',
        'We only collect essential data for reservations, contact, or customer support.',
        'You can request deletion or updates by emailing info@raizygrano.com.',
      ],
    },
    fr: {
      title: 'Politique de confidentialité',
      intro:
        'Chez Raíz y Grano, nous protégeons vos données et n’utilisons que les informations nécessaires au service.',
      bullets: [
        'Nous ne partageons pas vos données sans votre consentement.',
        'Nous collectons uniquement les données essentielles pour les réservations ou le support.',
        'Vous pouvez demander la suppression ou la mise à jour via info@raizygrano.com.',
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

export default LegalPrivacyPage;
