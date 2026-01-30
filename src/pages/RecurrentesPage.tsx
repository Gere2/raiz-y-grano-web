import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import SectionCard from '@/components/SectionCard';
import { BadgeCheck, ClipboardList, QrCode } from 'lucide-react';

const RecurrentesPage = () => {
  useEffect(() => {
    document.title = 'Recurrentes - Raíz y Grano';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Programa simple de fidelidad para la comunidad UFV: rápido, claro y sin fricción.',
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />
      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Recurrentes"
            subtitle="Un sistema simple de fidelidad para quienes vuelven cada semana."
            align="left"
          />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <SectionCard title="Escanea" icon={<QrCode size={24} className="text-[#a18968]" />}>
            <p className="text-[#6d5435]">Muestra tu QR en barra y suma visitas sin perder tiempo.</p>
          </SectionCard>
          <SectionCard title="Suma visitas" icon={<ClipboardList size={24} className="text-[#a18968]" />}>
            <p className="text-[#6d5435]">Cada compra cuenta. Nosotros registramos tu visita.</p>
          </SectionCard>
          <SectionCard title="Beneficio" icon={<BadgeCheck size={24} className="text-[#a18968]" />}>
            <p className="text-[#6d5435]">Al llegar a tu meta, recibes un detalle en tu siguiente visita.</p>
          </SectionCard>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RecurrentesPage;
