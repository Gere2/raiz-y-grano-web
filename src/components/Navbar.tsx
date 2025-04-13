
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
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
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 py-2",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="z-50">
          <h1 className="text-2xl md:text-3xl font-cormorant font-semibold text-raiz-coffee">
            Raíz y Grano
          </h1>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'menu', 'about', 'gallery', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative text-raiz-coffee hover:text-raiz-olive transition-colors capitalize font-opensans"
            >
              {item === 'menu' ? 'Carta' : 
               item === 'about' ? 'Nosotros' : 
               item === 'gallery' ? 'Galería' : 
               item === 'contact' ? 'Contacto' : 
               'Inicio'}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden z-50 text-raiz-coffee p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div className={`
          fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6
          transition-transform duration-300 ease-in-out transform
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          {['home', 'menu', 'about', 'gallery', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-xl text-raiz-coffee hover:text-raiz-olive transition-colors capitalize"
            >
              {item === 'menu' ? 'Carta' : 
               item === 'about' ? 'Nosotros' : 
               item === 'gallery' ? 'Galería' : 
               item === 'contact' ? 'Contacto' : 
               'Inicio'}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
