import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { PRODUCTS } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import QrCode from '@/components/QrCode';

const QrCatalogPage = () => {
  const { language } = useLanguage();
  const [qrLanguage, setQrLanguage] = useState(language);

  useEffect(() => {
    setQrLanguage(language);
  }, [language]);

  useEffect(() => {
    const titles = {
      es: 'QR para productos - Raíz y Grano',
      en: 'Product QR labels - Raíz y Grano',
      fr: 'QR produits - Raíz y Grano',
    };
    const descriptions = {
      es: 'Panel interno para imprimir QRs de productos.',
      en: 'Internal panel to print product QR labels.',
      fr: 'Panneau interne pour imprimer les QR produits.',
    };
    document.title = titles[language];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[language]);
    }
  }, [language]);

  const labels = {
    es: {
      title: 'Panel QR',
      subtitle: 'Genera e imprime etiquetas QR en formato A4.',
      print: 'Imprimir',
      language: 'Idioma de QR',
    },
    en: {
      title: 'QR panel',
      subtitle: 'Generate and print QR labels on A4.',
      print: 'Print',
      language: 'QR language',
    },
    fr: {
      title: 'Panneau QR',
      subtitle: 'Générez et imprimez des étiquettes QR en A4.',
      print: 'Imprimer',
      language: 'Langue QR',
    },
  };

  const content = labels[language];
  const qrLinks = useMemo(
    () =>
      PRODUCTS.map((product) => ({
        ...product,
        url: `https://raizygrano.com/#/p/${product.slug}?lang=${qrLanguage}&src=qr`,
      })),
    [qrLanguage],
  );

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <div className="print:hidden">
        <Navbar />
      </div>
      <section className="pt-32 pb-12 px-4 print:hidden" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={content.title} subtitle={content.subtitle} align="left" />
          <div className="flex flex-wrap gap-4 items-center mt-6">
            <div className="flex items-center gap-2 text-sm text-[#6d5435]">
              <span className="font-semibold">{content.language}:</span>
              {(['es', 'en', 'fr'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setQrLanguage(lang)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                    qrLanguage === lang
                      ? 'bg-[#a18968] text-white border-[#a18968]'
                      : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                  }`}
                  aria-label={`Cambiar idioma a ${lang.toUpperCase()}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn-primary inline-flex items-center"
            >
              {content.print}
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="mx-auto max-w-[210mm] bg-white rounded-2xl border border-[#efeadf] p-6 print:border-none print:p-0 print:shadow-none">
          <div className="grid grid-cols-2 gap-6 print:gap-4">
            {qrLinks.map((product) => (
              <div
                key={product.slug}
                className="border border-[#e0d4bb] rounded-xl p-4 flex flex-col items-center text-center gap-3"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#a18968]">QR</p>
                <h3 className="text-lg font-cormorant text-[#795a32]">{product.name[qrLanguage]}</h3>
                <QrCode value={product.url} size={140} />
                <p className="text-[10px] text-[#6d5435] break-all">{product.url}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default QrCatalogPage;
