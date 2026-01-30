import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { PRODUCTS } from '@/content/products';

const QrCatalogPage = () => {
  useEffect(() => {
    document.title = 'QR para productos - Raíz y Grano';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Panel interno para descargar QRs de productos.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />
      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Panel QR"
            subtitle="Descarga los QRs listos para imprimir y pegar en vitrina."
            align="left"
          />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const publicUrl = `https://raizygrano.com/#/p/${product.slug}`;
            return (
              <div
                key={product.slug}
                className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm space-y-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#a18968]">QR</p>
                  <h3 className="text-xl font-cormorant text-[#795a32] mt-2">{product.name}</h3>
                  <p className="text-sm text-[#6d5435] mt-1">{product.descriptionShort}</p>
                </div>
                <div className="bg-[#f9f7f2] p-4 rounded-xl inline-flex">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                      publicUrl,
                    )}`}
                    alt={`QR ${product.name}`}
                    className="h-[140px] w-[140px]"
                  />
                </div>
                <a
                  href={publicUrl}
                  className="text-sm font-semibold text-[#795a32] hover:underline break-all"
                >
                  {publicUrl}
                </a>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QrCatalogPage;
