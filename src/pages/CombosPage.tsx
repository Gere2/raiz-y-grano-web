import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import SectionCard from '@/components/SectionCard';
import { Coffee, Cookie } from 'lucide-react';

const CombosPage = () => {
  useEffect(() => {
    document.title = 'Combos rápidos - Raíz y Grano';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Combos pensados para decidir rápido en horas pico: bebida + repostería.',
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />
      <section className="pt-32 pb-12 px-4" style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Combos rápidos"
            subtitle="Dos opciones claras para subir ticket sin frenar la cola."
            align="left"
          />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <SectionCard title="Combo suave" icon={<Cookie size={24} className="text-[#a18968]" />}>
            <p className="text-[#6d5435] mb-4">
              Bizcocho de zanahoria (clásico) + café con leche.
            </p>
            <p className="text-xs text-[#7d6a50] italic">
              Ideal para desayuno rápido y equilibrado.
            </p>
          </SectionCard>
          <SectionCard title="Combo intenso" icon={<Coffee size={24} className="text-[#a18968]" />}>
            <p className="text-[#6d5435] mb-4">
              Galleta chocolate negro con pistacho + espresso.
            </p>
            <p className="text-xs text-[#7d6a50] italic">
              Para los que buscan energía y sabor profundo.
            </p>
          </SectionCard>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CombosPage;
