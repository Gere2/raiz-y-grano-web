import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

const LegalPrivacyPage = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      es: 'Política de privacidad y protección de datos - Raíz y Grano',
      en: 'Privacy and data protection policy - Raíz y Grano',
      fr: 'Politique de confidentialité et protection des données - Raíz y Grano',
    };
    const descriptions = {
      es: 'Información sobre responsable, tratamiento, base legal, conservación, cesiones y derechos RGPD.',
      en: 'Information on data controller, processing purposes, legal basis, retention, sharing, and GDPR rights.',
      fr: 'Informations sur le responsable, les finalités, la base légale, la conservation, les partages et les droits RGPD.',
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
        'En esta página te explicamos cómo tratamos tus datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',
      sections: [
        {
          heading: '1) Responsable del tratamiento',
          items: [
            'Identidad: Raíz y Grano.',
            'Correo de contacto para privacidad: info@raizygrano.com.',
            'Sitio web: https://raizygrano.com.',
          ],
        },
        {
          heading: '2) Qué datos recogemos',
          items: [
            'Datos identificativos y de contacto que nos envías (por ejemplo: nombre, correo o teléfono).',
            'Datos asociados a solicitudes de información, reservas o incidencias de atención al cliente.',
            'Datos técnicos mínimos de navegación y analítica agregada/anónima para medir uso del sitio.',
          ],
        },
        {
          heading: '3) Finalidades del tratamiento',
          items: [
            'Atender consultas, gestionar solicitudes y dar soporte.',
            'Gestionar reservas o comunicaciones relacionadas con el servicio.',
            'Mejorar la experiencia web y el rendimiento mediante analítica de uso.',
            'Cumplir obligaciones legales aplicables.',
          ],
        },
        {
          heading: '4) Base jurídica',
          items: [
            'Ejecución de medidas precontractuales o contractuales cuando realizas una solicitud o reserva.',
            'Interés legítimo para mejorar el servicio y la seguridad del sitio web.',
            'Consentimiento cuando sea exigible (por ejemplo, determinados tratamientos no esenciales).',
            'Cumplimiento de obligaciones legales.',
          ],
        },
        {
          heading: '5) Conservación de datos',
          items: [
            'Conservamos los datos durante el tiempo necesario para cumplir la finalidad para la que fueron recabados.',
            'Después, podrán mantenerse bloqueados durante los plazos legales de prescripción antes de su supresión definitiva.',
          ],
        },
        {
          heading: '6) Destinatarios y cesiones',
          items: [
            'No vendemos tus datos ni los cedemos a terceros salvo obligación legal o cuando sea necesario para prestar el servicio.',
            'Podemos trabajar con proveedores tecnológicos que actúan como encargados del tratamiento bajo contrato y garantías adecuadas.',
          ],
        },
        {
          heading: '7) Derechos de las personas',
          items: [
            'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad.',
            'Para ejercerlos, escríbenos a info@raizygrano.com indicando tu solicitud y un medio para verificar identidad.',
            'Si consideras que no hemos atendido correctamente tus derechos, puedes reclamar ante la AEPD (www.aepd.es).',
          ],
        },
        {
          heading: '8) Seguridad y confidencialidad',
          items: [
            'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a acceso no autorizado, pérdida o alteración.',
          ],
        },
        {
          heading: '9) Actualizaciones',
          items: [
            'Esta política puede actualizarse para reflejar cambios normativos o del servicio. Publicaremos siempre la versión vigente en esta misma URL.',
          ],
        },
      ],
      analyticsLinkLabel: 'Información de proveedores de analítica:',
    },
    en: {
      title: 'Privacy policy',
      intro:
        'This page explains how we process personal data under the GDPR framework.',
      sections: [
        {
          heading: '1) Data controller',
          items: [
            'Entity: Raíz y Grano.',
            'Privacy contact: info@raizygrano.com.',
            'Website: https://raizygrano.com.',
          ],
        },
        {
          heading: '2) Data we collect',
          items: [
            'Contact details you provide (such as name, email, or phone).',
            'Information linked to inquiries, bookings, or support requests.',
            'Minimal technical and aggregated/anonymous analytics data.',
          ],
        },
        {
          heading: '3) Purposes',
          items: [
            'Responding to inquiries and managing requests.',
            'Managing bookings and service-related communications.',
            'Improving website performance and user experience.',
            'Complying with legal obligations.',
          ],
        },
        {
          heading: '4) Legal basis',
          items: [
            'Pre-contractual or contractual measures.',
            'Legitimate interest in service quality and website security.',
            'Consent where required.',
            'Legal obligations.',
          ],
        },
        {
          heading: '5) Retention',
          items: [
            'Data is kept only for as long as required to fulfill the stated purposes.',
            'It may then be blocked for legal limitation periods before final deletion.',
          ],
        },
        {
          heading: '6) Recipients',
          items: [
            'We do not sell personal data.',
            'Data may be shared when legally required or with processors under data processing agreements.',
          ],
        },
        {
          heading: '7) Your rights',
          items: [
            'You may exercise access, rectification, erasure, objection, restriction, and portability rights.',
            'Contact info@raizygrano.com to submit your request.',
            'You may lodge a complaint with your data protection authority if needed.',
          ],
        },
      ],
      analyticsLinkLabel: 'Analytics provider information:',
    },
    fr: {
      title: 'Politique de confidentialité',
      intro:
        'Cette page explique le traitement des données personnelles conformément au RGPD.',
      sections: [
        {
          heading: '1) Responsable du traitement',
          items: [
            'Entité: Raíz y Grano.',
            'Contact confidentialité: info@raizygrano.com.',
            'Site web: https://raizygrano.com.',
          ],
        },
        {
          heading: '2) Données collectées',
          items: [
            'Données de contact fournies (nom, e-mail, téléphone).',
            'Données liées aux demandes, réservations et support.',
            'Données techniques minimales et mesure d’audience agrégée/anonyme.',
          ],
        },
        {
          heading: '3) Finalités',
          items: [
            'Répondre aux demandes et gérer les communications.',
            'Gérer les réservations et le service client.',
            'Améliorer le site et l’expérience utilisateur.',
            'Respecter les obligations légales.',
          ],
        },
        {
          heading: '4) Base légale',
          items: [
            'Mesures précontractuelles/contractuelles.',
            'Intérêt légitime (qualité du service et sécurité).',
            'Consentement lorsque requis.',
            'Obligations légales.',
          ],
        },
        {
          heading: '5) Conservation',
          items: [
            'Les données sont conservées uniquement le temps nécessaire aux finalités.',
            'Ensuite, elles peuvent être bloquées pendant les délais légaux avant suppression.',
          ],
        },
        {
          heading: '6) Destinataires',
          items: [
            'Nous ne vendons pas vos données.',
            'Partage uniquement en cas d’obligation légale ou avec des sous-traitants contractuellement encadrés.',
          ],
        },
        {
          heading: '7) Vos droits',
          items: [
            'Vous pouvez exercer vos droits d’accès, rectification, effacement, opposition, limitation et portabilité.',
            'Pour les exercer: info@raizygrano.com.',
          ],
        },
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
          {content.sections.map((section) => (
            <div key={section.heading} className="space-y-2">
              <h2 className="font-cormorant text-2xl text-[#5a3f23]">{section.heading}</h2>
              <ul className="list-disc list-inside space-y-1">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
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
