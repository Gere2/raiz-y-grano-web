
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, CupSoda, Cake } from 'lucide-react';

// Menu data
const menuItems = {
  cafeCaliente: [
    { name: 'Espresso', price: '2.50€', description: 'Intenso y aromático' },
    { name: 'Americano', price: '3.00€', description: 'Espresso con agua caliente' },
    { name: 'Cortado', price: '2.80€', description: 'Espresso con un toque de leche' },
    { name: 'Latte', price: '3.50€', description: 'Espresso con leche cremosa' },
    { name: 'Capuccino', price: '3.80€', description: 'Espresso, leche y espuma en perfecta armonía' },
  ],
  especialidades: [
    { name: 'Flat White', price: '3.90€', description: 'Doble espresso con microespuma de leche' },
    { name: 'Mocha', price: '4.20€', description: 'Espresso, chocolate y leche' },
    { name: 'Affogato', price: '4.50€', description: 'Espresso sobre helado de vainilla' },
    { name: 'Cold Brew', price: '3.90€', description: 'Café de extracción en frío (12h)' },
    { name: 'Café de Especialidad V60', price: '4.50€', description: 'Método de filtrado manual' },
  ],
  reposteria: [
    { name: 'Croissant', price: '2.50€', description: 'Clásico de mantequilla francesa' },
    { name: 'Pain au Chocolat', price: '2.80€', description: 'Hojaldre relleno de chocolate' },
    { name: 'Tarta de Zanahoria', price: '4.50€', description: 'Con especias y frosting' },
    { name: 'Cookies', price: '2.50€', description: 'Chocolate, avena o frutos rojos' },
    { name: 'Banana Bread', price: '3.20€', description: 'Casero con nueces' },
  ]
};

const MenuSection = () => {
  return (
    <section id="menu" className="section pt-24 relative bg-raiz-sand">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-textured opacity-30"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-4 relative inline-block">
          Nuestra Carta
          <span className="absolute -z-10 left-0 right-0 bottom-0 h-3 bg-raiz-terracotta opacity-20 transform -rotate-1"></span>
        </h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Cada taza cuenta una historia de origen, tostado artesanal y preparación cuidadosa. 
          En Raíz y Grano seleccionamos granos de especialidad, garantizando trazabilidad 
          y sabores excepcionales en cada sorbo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
        {/* Menu Categories with Icons */}
        <div className="menu-card animate-elegant-entrance" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center mb-5">
            <div className="w-10 h-10 rounded-full bg-raiz-terracotta/20 flex items-center justify-center mr-3">
              <Coffee size={20} className="text-raiz-coffee" />
            </div>
            <h3 className="text-2xl font-cormorant text-raiz-coffee">
              Café Caliente
            </h3>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-raiz-terracotta/50 via-raiz-terracotta/20 to-transparent mb-6"></div>
          <ul className="space-y-5">
            {menuItems.cafeCaliente.map((item, index) => (
              <li key={index} className="flex justify-between items-start group">
                <div>
                  <h4 className="font-medium text-raiz-coffee group-hover:text-raiz-olive transition-colors duration-300">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
                <span className="font-medium text-raiz-olive ml-4 bg-raiz-olive/10 px-2 py-1 rounded-full text-sm">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-card animate-elegant-entrance" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center mb-5">
            <div className="w-10 h-10 rounded-full bg-raiz-terracotta/20 flex items-center justify-center mr-3">
              <CupSoda size={20} className="text-raiz-coffee" />
            </div>
            <h3 className="text-2xl font-cormorant text-raiz-coffee">
              Especialidades
            </h3>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-raiz-terracotta/50 via-raiz-terracotta/20 to-transparent mb-6"></div>
          <ul className="space-y-5">
            {menuItems.especialidades.map((item, index) => (
              <li key={index} className="flex justify-between items-start group">
                <div>
                  <h4 className="font-medium text-raiz-coffee group-hover:text-raiz-olive transition-colors duration-300">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
                <span className="font-medium text-raiz-olive ml-4 bg-raiz-olive/10 px-2 py-1 rounded-full text-sm">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-card animate-elegant-entrance" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center mb-5">
            <div className="w-10 h-10 rounded-full bg-raiz-terracotta/20 flex items-center justify-center mr-3">
              <Cake size={20} className="text-raiz-coffee" />
            </div>
            <h3 className="text-2xl font-cormorant text-raiz-coffee">
              Repostería Artesanal
            </h3>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-raiz-terracotta/50 via-raiz-terracotta/20 to-transparent mb-6"></div>
          <ul className="space-y-5">
            {menuItems.reposteria.map((item, index) => (
              <li key={index} className="flex justify-between items-start group">
                <div>
                  <h4 className="font-medium text-raiz-coffee group-hover:text-raiz-olive transition-colors duration-300">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
                <span className="font-medium text-raiz-olive ml-4 bg-raiz-olive/10 px-2 py-1 rounded-full text-sm">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 relative z-10">
        <Link 
          to="/menu" 
          className="btn-primary inline-flex items-center group"
        >
          Ver carta completa
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default MenuSection;
