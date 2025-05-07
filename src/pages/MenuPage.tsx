import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Coffee, CupSoda, Cake, Flower, Leaf, Wine } from 'lucide-react';

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
  const [activeCategory, setActiveCategory] = useState('cafés');

  useEffect(() => {
    document.title = 'Carta - Raíz y Grano';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Descubre nuestra carta completa de café de especialidad, bollería artesanal, zumos, vinos, desayunos y meriendas en Raíz y Grano.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const menuCategories: MenuCategory[] = [
    {
      title: 'CAFÉS',
      icon: <Coffee size={22} className="text-[#a18968]" />,
      items: [
        { name: 'Espresso', price: '2.00€', description: 'Intenso y aromático' },
        { name: 'Americano', price: '2.00€', description: 'Espresso con agua caliente' },
        { name: 'Cortado', price: '2.30€', description: 'Espresso con un toque de leche' },
        { name: 'Latte', price: '2.50€', description: 'Espresso con leche cremosa' },
        { name: 'Capuccino', price: '2.80€', description: 'Espresso, leche y espuma en perfecta armonía' },
        { name: 'Café con leche', price: '2.50€', description: 'El clásico de siempre' },
        { name: 'Café bombón', price: '3.20€', description: 'Espresso con leche condensada' },
      ],
    },
    {
      title: 'ESPECIALIDADES',
      icon: <Coffee size={22} className="text-[#75753c]" />,
      items: [
        { name: 'Flat White', price: '3.30€', description: 'Doble espresso con microespuma de leche' },
        { name: 'Cold Brew', price: '3.50€', description: 'Café de extracción en frío (12h)' },
        { name: 'Café de Especialidad V60', price: '4.50€', description: 'Método de filtrado manual' },
        { name: 'Matcha', price: '3.00€', description: '' },
        { name: 'Chai Latte', price: '2.50€', description: '' },
      ],
    },
    {
      title: 'BOLLERÍA ARTESANAL',
      icon: <Cake size={22} className="text-[#a18968]" />,
      items: [
        { name: 'Croissant', price: '2.50€', description: 'Clásico de mantequilla francesa' },
        { name: 'Pain au Chocolat', price: '2.80€', description: 'Hojaldre relleno de chocolate' },
        { name: 'Tarta de Zanahoria', price: '3.50€', description: 'Con coco, nueces y ralladura de limón' },
        { name: 'Tarta de Chocolate', price: '3.50€', description: 'Chocolate de primera calidad con crema de leche' },
        { name: 'Tarta de Queso', price: '3.50€', description: 'Tarta cremosa elaborada con los mejores quesos' },
      ],
    },
    {
      title: 'ZUMOS',
      icon: <CupSoda size={22} className="text-[#75753c]" />,
      items: [
        { name: 'Zumo de Naranja', price: '3.00€', description: 'Recién exprimido' },
        { name: 'Verde Detox', price: '4.50€', description: 'Manzana, pepino, apio y limón' },
        { name: 'Antioxidante', price: '4.50€', description: 'Remolacha, zanahoria, manzana y jengibre' },
        { name: 'Tropical', price: '4.50€', description: 'Piña, mango, naranja y maracuyá' },
        { name: 'Energizante', price: '4.50€', description: 'Naranja, zanahoria, manzana y jengibre' },
        { name: 'Zumo del Día', price: '4.50€', description: 'Pregunta por nuestra creación diaria' },
      ],
    },
    {
      title: 'VINOS',
      icon: <Wine size={22} className="text-[#a18968]" />,
      items: [
        { name: 'Marques de Vizhoja (Rioja Blanco)', price: '2.50€', description: '' },
        { name: 'Mara (Godello)', price: '2.50€', description: '' },
      ],
    },
    {
      title: 'DESAYUNOS Y MERIENDAS',
      icon: <Cake size={22} className="text-[#a18968]" />,
      items: [
        { name: 'Café + Tarta de queso', price: '5.50€', description: '' },
        { name: 'Café + Tarta de zanahoria', price: '5.00€', description: '' },
      ],
    },
    {
      title: 'SHOTS INMUNOLÓGICOS Y TÉS',
      icon: <Flower size={22} className="text-[#a18968]" />,
      items: [
        { name: 'Shot de Jengibre', price: '2.50€', description: 'Jengibre, limón y miel' },
        { name: 'Té de Hibiscus', price: '2.00€', description: '' },
        { name: 'Té verde con jengibre y ralladuras de limón', price: '2.00€', description: '' },
        { name: 'Te Mezcla de la abuela', price: '2.00€', description: '' },
      ],
    },
  ];

  const getCategoryId = (title: string) =>
    title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <div
        className="absolute inset-0 pointer-events-none select-none -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' fill-opacity='0.02' fill-rule='evenodd' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/svg%3E")`,
        }}
      />
      <Navbar />

      <section
        className="pt-32 pb-16 px-4"
        style={{ background: 'linear-gradient(135deg, #ede3cc 0%, #e0d4bb 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-cormorant text-[#795a32] mb-7 drop-shadow-sm tracking-tight">
            Carta Raíz y Grano
          </h1>
          <p className="max-w-2xl mx-auto text-[#7d6a50] mb-10 font-light italic">
            Artesanía, naturalidad y un café inolvidable.
            <br />
            Descubre nuestra carta, hecha con mimo y productos reales.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {menuCategories.map((category) => (
              <button
                key={getCategoryId(category.title)}
                onClick={() => setActiveCategory(getCategoryId(category.title))}
                className={`flex items-center px-5 py-2 rounded-full border transition-all shadow-md font-opensans tracking-wide text-base ${
                  activeCategory === getCategoryId(category.title)
                    ? 'bg-[#c7b391] text-[#503c28] border-[#c5ae86] font-semibold'
                    : 'bg-white/80 text-[#6d5435] border-[#e0d4bb] hover:border-[#d3be97]'
                }`}
                style={{ minWidth: 166, letterSpacing: '.02em' }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {menuCategories.map((category) => (
            <div
              key={getCategoryId(category.title)}
              id={getCategoryId(category.title)}
              className={`transition-all duration-700 ${
                activeCategory === getCategoryId(category.title) ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              <div className="flex items-center mb-7">
                <span className="mr-3">{category.icon}</span>
                <h2 className="text-3xl font-cormorant text-[#765536] border-b-2 border-[#dacbb2] pb-1">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f9f7f2] border border-[#efeadf] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    style={{ boxShadow: '0 2px 10px 0 rgba(190,170,140,0.05)' }}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-[#5a442c] tracking-tight font-cormorant">
                        {item.name}
                      </h3>
                      <span className="font-semibold text-[#a18968] ml-4 bg-[#e9e0d1] px-2 py-0.5 rounded-full text-sm font-opensans">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm opacity-80 mt-2 text-[#96836a] font-opensans">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 text-center">
            <p className="italic text-[#8f795f] opacity-70 mb-4">
              ¿Alergias o preferencias? Consúltanos sin compromiso.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Leaf size={16} className="text-[#93a75b]" />
              <span className="text-[#9c8867]">Opciones vegetarianas y veganas disponibles</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
