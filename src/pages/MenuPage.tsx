
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Coffee, CupSoda, Cake, Flower, Leaf } from 'lucide-react';

// Tipos de datos para los elementos del menú
type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
  icon: React.ReactNode;
};

const MenuPage = () => {
  // Estado para la categoría activa - Inicializada como "cafés" por defecto
  const [activeCategory, setActiveCategory] = useState("cafés");
  
  useEffect(() => {
    // Set title and description for SEO
    document.title = "Carta - Raíz y Grano";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubre nuestra carta completa de café de especialidad, bollería artesanal, zumos y más en Raíz y Grano.');
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Datos del menú
  const menuCategories: MenuCategory[] = [
    {
      title: "CAFÉS",
      icon: <Coffee size={24} className="text-raiz-terracotta" />,
      items: [
        { name: 'Espresso', price: '2.50€', description: 'Intenso y aromático' },
        { name: 'Americano', price: '3.00€', description: 'Espresso con agua caliente' },
        { name: 'Cortado', price: '2.80€', description: 'Espresso con un toque de leche' },
        { name: 'Latte', price: '3.50€', description: 'Espresso con leche cremosa' },
        { name: 'Capuccino', price: '3.80€', description: 'Espresso, leche y espuma en perfecta armonía' },
        { name: 'Café con leche', price: '2.90€', description: 'El clásico de siempre' },
        { name: 'Café bombón', price: '3.20€', description: 'Espresso con leche condensada' },
      ]
    },
    {
      title: "ESPECIALIDADES",
      icon: <Coffee size={24} className="text-raiz-olive" />,
      items: [
        { name: 'Flat White', price: '3.90€', description: 'Doble espresso con microespuma de leche' },
        { name: 'Mocha', price: '4.20€', description: 'Espresso, chocolate y leche' },
        { name: 'Affogato', price: '4.50€', description: 'Espresso sobre helado de vainilla' },
        { name: 'Cold Brew', price: '3.90€', description: 'Café de extracción en frío (12h)' },
        { name: 'Café de Especialidad V60', price: '4.50€', description: 'Método de filtrado manual' },
        { name: 'Café de Especialidad Chemex', price: '4.80€', description: 'Método de filtrado para resaltar notas florales' },
        { name: 'Café de Especialidad Aeropress', price: '4.50€', description: 'Método de inmersión y presión' },
        { name: 'Café Nitro', price: '4.90€', description: 'Cold brew infusionado con nitrógeno' },
      ]
    },
    {
      title: "BOLLERÍA ARTESANAL",
      icon: <Cake size={24} className="text-raiz-terracotta" />,
      items: [
        { name: 'Croissant', price: '2.50€', description: 'Clásico de mantequilla francesa' },
        { name: 'Pain au Chocolat', price: '2.80€', description: 'Hojaldre relleno de chocolate' },
        { name: 'Tarta de Zanahoria', price: '4.50€', description: 'Con especias y frosting' },
        { name: 'Cookies', price: '2.50€', description: 'Chocolate, avena o frutos rojos' },
        { name: 'Banana Bread', price: '3.20€', description: 'Casero con nueces' },
        { name: 'Muffin de Arándanos', price: '3.00€', description: 'Esponjoso con arándanos frescos' },
        { name: 'Brownie', price: '3.50€', description: 'Chocolate intenso con nueces' },
        { name: 'Napolitana', price: '2.60€', description: 'Hojaldre con crema pastelera' },
      ]
    },
    {
      title: "ZUMOS",
      icon: <CupSoda size={24} className="text-raiz-olive" />,
      items: [
        { name: 'Zumo de Naranja', price: '3.50€', description: 'Recién exprimido' },
        { name: 'Verde Detox', price: '4.90€', description: 'Manzana, pepino, apio y limón' },
        { name: 'Antioxidante', price: '4.90€', description: 'Remolacha, zanahoria, manzana y jengibre' },
        { name: 'Tropical', price: '4.50€', description: 'Piña, mango, naranja y maracuyá' },
        { name: 'Energizante', price: '4.90€', description: 'Naranja, zanahoria, manzana y jengibre' },
        { name: 'Zumo del Día', price: '4.50€', description: 'Pregunta por nuestra creación diaria' },
      ]
    },
    {
      title: "SHOTS INMUNOLÓGICOS",
      icon: <Flower size={24} className="text-raiz-terracotta" />,
      items: [
        { name: 'Shot de Jengibre', price: '2.50€', description: 'Jengibre, limón y miel' },
        { name: 'Shot Antiinflamatorio', price: '2.90€', description: 'Cúrcuma, pimienta negra, limón y miel' },
        { name: 'Shot Defensas', price: '3.20€', description: 'Equinácea, propóleo y limón' },
        { name: 'Shot Vitamina C', price: '2.90€', description: 'Naranja, acerola y bayas de goji' },
        { name: 'Shot Detox', price: '3.50€', description: 'Aloe vera, limón y clorofila' },
      ]
    },
  ];

  // Convertir ID para usar en los enlaces
  const getCategoryId = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="min-h-screen bg-raiz-beige">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#8c7b6e] to-raiz-beige">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant text-white mb-6">
            Nuestra Carta Completa
          </h1>
          <p className="max-w-2xl mx-auto text-white opacity-80 mb-8">
            Cada elemento de nuestra carta cuenta una historia de origen, calidad y preparación cuidadosa. 
            En Raíz y Grano seleccionamos ingredientes frescos y de primera calidad, garantizando 
            sabores excepcionales en cada bocado y sorbo.
          </p>
          
          {/* Category navigation */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {menuCategories.map((category) => (
              <button
                key={getCategoryId(category.title)}
                onClick={() => setActiveCategory(getCategoryId(category.title))}
                className={`flex items-center px-4 py-2 rounded-full border transition-all ${
                  activeCategory === getCategoryId(category.title)
                    ? 'bg-raiz-coffee text-white border-raiz-coffee' 
                    : 'bg-white/80 text-raiz-coffee border-raiz-coffee/20 hover:border-raiz-coffee'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {menuCategories.map((category) => (
            <div 
              key={getCategoryId(category.title)}
              id={getCategoryId(category.title)}
              className={`transition-all duration-500 ${
                activeCategory === getCategoryId(category.title) ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              <div className="flex items-center mb-8">
                <span className="mr-3">{category.icon}</span>
                <h2 className="text-3xl font-cormorant text-raiz-coffee border-b-2 border-raiz-terracotta pb-2">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white bg-opacity-80 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-raiz-coffee">{item.name}</h3>
                      <span className="font-medium text-raiz-olive ml-4">{item.price}</span>
                    </div>
                    <p className="text-sm opacity-70 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-16 text-center">
            <p className="italic text-raiz-coffee opacity-70 mb-4">¿Alguna alergia o preferencia alimentaria? Consúltanos.</p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Leaf size={16} className="text-raiz-olive" />
              <span>Opciones vegetarianas y veganas disponibles</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
