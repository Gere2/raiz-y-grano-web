
import React from 'react';
import { Sprout, Coffee, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-raiz-terracotta bg-opacity-10 pt-24 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute -top-20 -left-20 text-raiz-coffee" width="300" height="300" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M20,60 Q50,30 80,60 T140,60" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M20,70 Q50,40 80,70 T140,70" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
        <svg className="absolute -bottom-20 -right-20 text-raiz-coffee" width="300" height="300" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M20,60 Q50,30 80,60 T140,60" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M20,70 Q50,40 80,70 T140,70" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-8">
          Nosotros
        </h2>

        <div className="mb-12">
          <p className="text-xl md:text-2xl font-cormorant italic text-raiz-coffee mb-8 leading-relaxed">
            "Raíz y Grano no solo sirve café; es una pausa consciente, un momento para 
            conectar y disfrutar del sabor auténtico."
          </p>
          
          <p className="mb-6 max-w-3xl mx-auto">
            Nacimos como un espacio para ofrecer a la comunidad universitaria una experiencia de café 
            diferente, donde cada taza es preparada con atención al detalle y pasión por el origen. 
            En Raíz y Grano entendemos que un buen café puede transformar un momento cotidiano en algo especial.
          </p>
          
          <p className="max-w-3xl mx-auto">
            Nuestra filosofía se basa en la trazabilidad y sostenibilidad, conociendo el recorrido 
            de cada grano desde su origen hasta tu taza, respetando a los productores y al medio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card flex flex-col items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-raiz-olive bg-opacity-20 mb-4">
              <Sprout size={28} className="text-raiz-olive" />
            </div>
            <h3 className="text-xl font-cormorant mb-2">Origen</h3>
            <p className="text-center text-sm opacity-80">
              Seleccionamos granos de pequeños productores comprometidos con prácticas agrícolas sostenibles.
            </p>
          </div>
          
          <div className="card flex flex-col items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-raiz-olive bg-opacity-20 mb-4">
              <Coffee size={28} className="text-raiz-olive" />
            </div>
            <h3 className="text-xl font-cormorant mb-2">Proceso</h3>
            <p className="text-center text-sm opacity-80">
              Tostamos nuestros granos cuidadosamente para desarrollar su perfil aromático único.
            </p>
          </div>
          
          <div className="card flex flex-col items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-raiz-olive bg-opacity-20 mb-4">
              <Leaf size={28} className="text-raiz-olive" />
            </div>
            <h3 className="text-xl font-cormorant mb-2">Compromiso</h3>
            <p className="text-center text-sm opacity-80">
              Utilizamos envases compostables y prácticas que reducen nuestro impacto ambiental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
