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
      es: 'Información básica sobre privacidad y analítica en Raíz y Grano.',
      en: 'Basic privacy and analytics information for Raíz y Grano.',
      fr: 'Informations essentielles sur la confidentialité et la mesure d’audience.',
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
        'En Raíz y Grano protegemos tus datos y usamos la información mínima necesaria para mejorar el servicio.',
      bullets: [
        'No compartimos tus datos con terceros sin tu consentimiento.',
        'Solo recopilamos datos esenciales para reservas, contacto o atención al cliente.',
        'Podemos usar analítica anónima (Plausible o Umami) para entender visitas y mejorar la experiencia.',
        'Puedes solicitar la eliminación o actualización de tus datos escribiendo a info@raizygrano.com.',
      ],
      analyticsLinkLabel: 'Más información sobre la analítica:',
    },
    en: {
      title: 'Privacy policy',
      intro:
        'At Raíz y Grano we protect your data and only use what is necessary to improve the service.',
      bullets: [
        'We do not share your data with third parties without your consent.',
        'We only collect essential data for reservations, contact, or customer support.',
        'We may use anonymous analytics (Plausible or Umami) to understand visits and improve the experience.',
        'You can request deletion or updates by emailing info@raizygrano.com.',
      ],
      analyticsLinkLabel: 'Analytics provider info:',
    },
    fr: {
      title: 'Politique de confidentialité',
      intro:
        'Chez Raíz y Grano, nous protégeons vos données et n’utilisons que le minimum nécessaire.',
      bullets: [
        'Nous ne partageons pas vos données sans votre consentement.',
        'Nous collectons uniquement les données essentielles pour les réservations ou le support.',
        'Nous pouvons utiliser une mesure d’audience anonyme (Plausible ou Umami) pour améliorer le service.',
        'Vous pouvez demander la suppression ou la mise à jour via info@raizygrano.com.',
      ],
      analyticsLinkLabel: 'En savoir plus sur la mesure d’audience :',
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
          <p className="text-sm text-[#6d5435] font-semibold">{content.analyticsLinkLabel}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://plausible.io/data-policy"
              target="_blank"
              rel="noreferrer"
              className="text-[#795a32] hover:underline"
            >
              Plausible
            </a>
            <a
              href="https://umami.is/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-[#795a32] hover:underline"
            >
              Umami
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LegalPrivacyPage;
