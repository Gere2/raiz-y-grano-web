
import React from 'react';

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
    <section id="menu" className="section pt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-4">
          Nuestra Carta
        </h2>
        <p className="max-w-2xl mx-auto text-raiz-coffee opacity-80">
          Cada taza cuenta una historia de origen, tostado artesanal y preparación cuidadosa. 
          En Raíz y Grano seleccionamos granos de especialidad, garantizando trazabilidad 
          y sabores excepcionales en cada sorbo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Coffee Image */}
        <div className="col-span-1 md:col-span-3 h-64 md:h-80 rounded-lg overflow-hidden mb-8">
          <div 
            className="w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470&auto=format&fit=crop')`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <h3 className="text-white text-3xl font-cormorant">Café de Especialidad</h3>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="card animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h3 className="text-2xl font-cormorant mb-4 text-raiz-coffee border-b-2 border-raiz-terracotta pb-2">
            Café Caliente
          </h3>
          <ul className="space-y-4">
            {menuItems.cafeCaliente.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-raiz-coffee">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
                <span className="font-medium text-raiz-olive ml-4">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-2xl font-cormorant mb-4 text-raiz-coffee border-b-2 border-raiz-terracotta pb-2">
            Especialidades
          </h3>
          <ul className="space-y-4">
            {menuItems.especialidades.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-raiz-coffee">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
                <span className="font-medium text-raiz-olive ml-4">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card animate-fade-in" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-cormorant mb-4 text-raiz-coffee border-b-2 border-raiz-terracotta pb-2">
            Repostería Artesanal
          </h3>
          <ul className="space-y-4">
            {menuItems.reposteria.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-raiz-coffee">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
                <span className="font-medium text-raiz-olive ml-4">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
