
import React from 'react';
import { MapPin, Coffee, Leaf } from 'lucide-react';

const HomeSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 bg-raiz-beige -z-10 opacity-70"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-12 animate-fade-in">
          {/* Foodtruck Illustration (SVG) */}
          <svg className="w-40 h-40 mx-auto mb-8" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60,180 L60,100 L180,100 L200,130 L200,180 Z" fill="#6D8C60" stroke="#4B2E20" strokeWidth="3"/>
            <path d="M60,100 L40,60 L20,60 L20,100 Z" fill="#DAB29C" stroke="#4B2E20" strokeWidth="3"/>
            <circle cx="70" cy="180" r="15" fill="#4B2E20" stroke="#4B2E20" strokeWidth="2"/>
            <circle cx="170" cy="180" r="15" fill="#4B2E20" stroke="#4B2E20" strokeWidth="2"/>
            <rect x="140" y="120" width="40" height="30" rx="5" fill="#F5EFE6" stroke="#4B2E20" strokeWidth="2"/>
            <path d="M120,130 Q140,115 160,130" stroke="#4B2E20" strokeWidth="2" fill="none"/>
            <path d="M120,140 Q140,155 160,140" stroke="#4B2E20" strokeWidth="2" fill="none"/>
          </svg>
          
          <h1 className="text-5xl md:text-6xl font-cormorant text-raiz-coffee mb-4">
            Raíz y Grano
          </h1>
          
          <p className="text-xl md:text-2xl font-cormorant italic text-raiz-coffee mb-8">
            Sabor que enciende neuronas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              className="btn-primary" 
              onClick={() => scrollToSection('menu')}
            >
              Ver Carta
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => scrollToSection('contact')}
            >
              Cómo Llegar
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="card flex flex-col items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-raiz-terracotta bg-opacity-20 mb-4">
              <MapPin size={28} className="text-raiz-olive" />
            </div>
            <h3 className="text-xl font-cormorant mb-2">Ubicación estratégica</h3>
            <p className="text-center text-sm text-raiz-coffee opacity-80">
              Situados en el corazón de la Universidad Francisco de Vitoria para tu comodidad.
            </p>
          </div>
          
          <div className="card flex flex-col items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-raiz-terracotta bg-opacity-20 mb-4">
              <Coffee size={28} className="text-raiz-olive" />
            </div>
            <h3 className="text-xl font-cormorant mb-2">Café de especialidad</h3>
            <p className="text-center text-sm text-raiz-coffee opacity-80">
              Selección de granos premium tostados con precisión para un sabor excepcional.
            </p>
          </div>
          
          <div className="card flex flex-col items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-raiz-terracotta bg-opacity-20 mb-4">
              <Leaf size={28} className="text-raiz-olive" />
            </div>
            <h3 className="text-xl font-cormorant mb-2">Ingredientes naturales</h3>
            <p className="text-center text-sm text-raiz-coffee opacity-80">
              Comprometidos con productos frescos y sostenibles en cada preparación.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 opacity-10 animate-float">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
          <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="absolute top-20 right-10 opacity-10 animate-float" style={{animationDelay: '1s'}}>
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
          <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
        </svg>
      </div>
    </section>
  );
};

export default HomeSection;
