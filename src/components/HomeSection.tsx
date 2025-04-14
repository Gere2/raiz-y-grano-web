
import React, { useState, useEffect } from 'react';
import { MapPin, Coffee, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
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
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-raiz-beige -z-10 opacity-80">
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23594a42' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Hero Section with improved layout and animations */}
      <div className="max-w-5xl mx-auto px-4 pt-28 md:pt-20 text-center">
        <div className={`mb-12 transition-all duration-1000 ease-out transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Hero Image with enhanced styling */}
          <div className="relative mb-8 inline-block">
            <img 
              src="/lovable-uploads/32254397-2fb6-4685-b8e9-c14006e6dd1b.png" 
              alt="Raíz y Grano Logo" 
              className="w-full max-w-md mx-auto drop-shadow-xl animate-float"
            />
            <div className="absolute -z-10 inset-0 bg-raiz-olive opacity-10 blur-3xl rounded-full transform scale-150 translate-y-6"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant text-raiz-coffee mb-4 tracking-wide">
            Raíz y Grano
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-cormorant italic text-raiz-coffee mb-10 tracking-wide">
            Sabor que enciende neuronas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <button 
              className="btn-primary group flex items-center justify-center gap-2 px-6 py-3 text-lg transform transition-all hover:scale-105"
              onClick={() => scrollToSection('menu')}
            >
              Ver Carta
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 text-lg transform transition-all hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Cómo Llegar
              <MapPin size={18} />
            </button>
          </div>
        </div>
        
        {/* Feature cards with improved styling and staggered animations */}
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
              className={`card flex flex-col items-center p-6 backdrop-blur-sm bg-white/30 hover:bg-white/50 border border-raiz-terracotta/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform ${
                isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} 
              style={{transitionDelay: feature.delay}}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-raiz-terracotta bg-opacity-20 mb-4 transform transition-transform hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-cormorant font-semibold mb-2">{feature.title}</h3>
              <p className="text-center text-sm text-raiz-coffee opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute -bottom-20 -left-20 opacity-5 animate-float-slow">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
          <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="absolute -top-20 -right-20 opacity-5 animate-float" style={{animationDelay: '1.5s'}}>
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
          <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="#4B2E20" strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-5 h-10 border-2 border-raiz-coffee/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-raiz-coffee/30 rounded-full mt-1 animate-scroll"></div>
          </div>
          <span className="text-xs text-raiz-coffee/50 mt-2">Explora</span>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
