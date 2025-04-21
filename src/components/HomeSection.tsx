import React, { useState, useEffect } from 'react';
import { MapPin, Coffee, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    setIsAnimated(true);
  }, []);

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
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-raiz-cream to-raiz-beige -z-10">
        <div className="absolute inset-0 bg-textured opacity-30" />
      </div>
      
      <div className="absolute -bottom-20 -left-20 opacity-10 animate-float-slow">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
          <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="absolute -top-20 -right-20 opacity-10 animate-float" style={{animationDelay: '1.5s'}}>
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
          <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 pt-40 md:pt-48 text-center relative z-10">
        <div className={`mb-16 transition-all duration-1000 ease-out transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-32 h-32 mx-auto mb-6">
            <img 
              src="/lovable-uploads/fd33af9d-0905-420c-aa56-e43e318cb3bb.png" 
              alt="Raíz y Grano Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cormorant text-raiz-coffee mb-6 tracking-tight font-medium">
            Raíz y Grano
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-cormorant italic text-raiz-coffee mb-12 tracking-wide max-w-2xl mx-auto">
            <span className="text-highlight">Sabor que enciende neuronas</span>
          </p>
          
          <div className="relative w-32 h-1 bg-raiz-terracotta/30 mx-auto mb-12">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-raiz-terracotta animate-pulse-subtle"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <button 
              className="btn-primary group flex items-center justify-center gap-2 px-6 py-3 text-lg"
              onClick={() => scrollToSection('menu')}
            >
              Ver Carta
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Cómo Llegar
              <MapPin size={18} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              icon: <MapPin size={28} className="text-raiz-olive" />,
              title: "Ubicación estratégica",
              description: "Situados en el corazón de la Universidad Francisco de Vitoria para tu comodidad.",
              delay: "0.2s"
            },
            {
              icon: <Coffee size={28} className="text-raiz-olive" />,
              title: "Café de especialidad",
              description: "Selección de granos premium tostados con precisión para un sabor excepcional.",
              delay: "0.4s"
            },
            {
              icon: <Leaf size={28} className="text-raiz-olive" />,
              title: "Ingredientes naturales",
              description: "Comprometidos con productos frescos y sostenibles en cada preparación.",
              delay: "0.6s"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`card flex flex-col items-center p-7 transition-all duration-500 transform ${
                isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} 
              style={{transitionDelay: feature.delay}}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-raiz-terracotta/20 to-raiz-beige/30 mb-5 transform transition-transform hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-cormorant font-semibold mb-3">{feature.title}</h3>
              <p className="text-center text-sm text-raiz-coffee/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-5 h-10 border-2 border-raiz-coffee/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-raiz-coffee/20 rounded-full mt-1 animate-scroll"></div>
          </div>
          <span className="text-xs text-raiz-coffee/40 mt-2 font-light tracking-wider">Explora</span>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
