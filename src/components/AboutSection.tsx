
import React from 'react';
import { Sprout, Coffee, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section pt-24 relative overflow-hidden">
      {/* Fondo texturizado con degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-raiz-beige to-raiz-cream bg-opacity-80 z-0">
        <div className="absolute inset-0 bg-textured opacity-10"></div>
        {/* Elementos decorativos */}
        <svg className="absolute -bottom-24 -right-24 text-raiz-terracotta opacity-10" width="300" height="300" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="absolute -top-24 -left-24 text-raiz-olive opacity-10" width="300" height="300" viewBox="0 0 100 100">
          <path d="M20,50 Q50,20 80,50 T140,50" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M20,60 Q50,30 80,60 T140,60" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <path d="M20,70 Q50,40 80,70 T140,70" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-8 relative inline-block">
          Nosotros
          <span className="absolute -z-10 left-0 right-0 bottom-0 h-3 bg-raiz-terracotta opacity-20 transform -rotate-1"></span>
        </h2>

        <div className="mb-12 max-w-3xl mx-auto bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-lg shadow-elegant">
          <p className="text-xl md:text-2xl font-cormorant italic text-raiz-coffee mb-8 leading-relaxed relative">
            <span className="absolute -left-3 top-0 text-4xl text-raiz-terracotta opacity-30">"</span>
            Raíz y Grano no solo sirve café; es una pausa consciente, un momento para 
            conectar y disfrutar del sabor auténtico.
            <span className="absolute -right-3 bottom-0 text-4xl text-raiz-terracotta opacity-30">"</span>
          </p>
          
          <p className="mb-6 text-raiz-coffee">
            Nacimos como un espacio para ofrecer a la comunidad universitaria una experiencia de café 
            diferente, donde cada taza es preparada con atención al detalle y pasión por el origen. 
            En Raíz y Grano entendemos que un buen café puede transformar un momento cotidiano en algo especial.
          </p>
          
          <p className="text-raiz-coffee">
            Nuestra filosofía se basa en la trazabilidad y sostenibilidad, conociendo el recorrido 
            de cada grano desde su origen hasta tu taza, respetando a los productores y al medio ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card flex flex-col items-center animate-fade-in bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-raiz-terracotta/10" style={{animationDelay: '0.2s'}}>
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-raiz-olive/20 mb-4 mt-6 group transform transition-all duration-300 hover:scale-110">
              <Sprout size={32} className="text-raiz-olive transform transition-all duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-cormorant font-medium mb-3 text-raiz-coffee">Origen</h3>
            <div className="h-px w-16 bg-raiz-terracotta/30 mb-4"></div>
            <p className="text-center px-6 pb-6 text-raiz-coffee/90">
              Seleccionamos granos de pequeños productores comprometidos con prácticas agrícolas sostenibles.
            </p>
          </div>
          
          <div className="card flex flex-col items-center animate-fade-in bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-raiz-terracotta/10" style={{animationDelay: '0.4s'}}>
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-raiz-olive/20 mb-4 mt-6 group transform transition-all duration-300 hover:scale-110">
              <Coffee size={32} className="text-raiz-olive transform transition-all duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-cormorant font-medium mb-3 text-raiz-coffee">Proceso</h3>
            <div className="h-px w-16 bg-raiz-terracotta/30 mb-4"></div>
            <p className="text-center px-6 pb-6 text-raiz-coffee/90">
              Tostamos nuestros granos cuidadosamente para desarrollar su perfil aromático único.
            </p>
          </div>
          
          <div className="card flex flex-col items-center animate-fade-in bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-raiz-terracotta/10" style={{animationDelay: '0.6s'}}>
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-raiz-olive/20 mb-4 mt-6 group transform transition-all duration-300 hover:scale-110">
              <Leaf size={32} className="text-raiz-olive transform transition-all duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-cormorant font-medium mb-3 text-raiz-coffee">Compromiso</h3>
            <div className="h-px w-16 bg-raiz-terracotta/30 mb-4"></div>
            <p className="text-center px-6 pb-6 text-raiz-coffee/90">
              Utilizamos envases compostables y prácticas que reducen nuestro impacto ambiental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
