
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      // We need to wait for the navigation to complete before scrolling
      setTimeout(() => {
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
      }, 100);
    } else {
      // We're already on the home page, just scroll
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
    }
  };

  const handleMenuClick = (path: string, id?: string) => {
    setMenuOpen(false);
    
    if (id) {
      scrollToSection(id);
    } else {
      navigate(path);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 py-2",
        isScrolled ? "bg-[#5a4a3f] shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="z-50">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl md:text-3xl font-cormorant font-semibold text-white">
              Raíz y Grano
            </h1>
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => handleMenuClick('/', 'home')}
            className="relative text-white hover:text-raiz-terracotta transition-colors capitalize font-opensans"
          >
            Inicio
          </button>
          <button
            onClick={() => handleMenuClick('/menu')}
            className="relative text-white hover:text-raiz-terracotta transition-colors capitalize font-opensans"
          >
            Carta
          </button>
          <button
            onClick={() => handleMenuClick('/', 'about')}
            className="relative text-white hover:text-raiz-terracotta transition-colors capitalize font-opensans"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleMenuClick('/', 'gallery')}
            className="relative text-white hover:text-raiz-terracotta transition-colors capitalize font-opensans"
          >
            Galería
          </button>
          <button
            onClick={() => handleMenuClick('/', 'contact')}
            className="relative text-white hover:text-raiz-terracotta transition-colors capitalize font-opensans"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden z-50 text-white p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div className={`
          fixed inset-0 bg-[#5a4a3f] flex flex-col items-center justify-center space-y-6
          transition-transform duration-300 ease-in-out transform
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}>
          <button
            onClick={() => handleMenuClick('/', 'home')}
            className="text-xl text-white hover:text-raiz-terracotta transition-colors capitalize"
          >
            Inicio
          </button>
          <button
            onClick={() => handleMenuClick('/menu')}
            className="text-xl text-white hover:text-raiz-terracotta transition-colors capitalize"
          >
            Carta
          </button>
          <button
            onClick={() => handleMenuClick('/', 'about')}
            className="text-xl text-white hover:text-raiz-terracotta transition-colors capitalize"
          >
            Nosotros
          </button>
          <button
            onClick={() => handleMenuClick('/', 'gallery')}
            className="text-xl text-white hover:text-raiz-terracotta transition-colors capitalize"
          >
            Galería
          </button>
          <button
            onClick={() => handleMenuClick('/', 'contact')}
            className="text-xl text-white hover:text-raiz-terracotta transition-colors capitalize"
          >
            Contacto
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
