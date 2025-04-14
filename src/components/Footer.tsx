
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Coffee, MapPin, Clock, ExternalLink, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Natural brown gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#493c2b] via-[#3c3022] to-[#2b241a]"></div>
      
      {/* Decorative coffee bean pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -left-20 animate-float" style={{animationDelay: '0.5s'}}>
          <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="currentColor" strokeWidth="1"/>
            <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1.2s'}}>
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,5 C7,5 3,10 3,16 C3,22 7,22 12,22 C17,22 21,22 21,16 C21,10 17,5 12,5 Z" stroke="currentColor" strokeWidth="1"/>
            <path d="M12,5 C12,5 10,1 12,1 C14,1 12,5 12,5 Z" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      
      {/* Wood grain texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wNSIgbnVtT2N0YXZlcz0iMiIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIxIDAgMCAwIDAgMCAxIDAgMCAwIDAgMCAxIDAgMCAwIDAgMCAwIDEiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')]" opacity="0.2"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Tagline - 4 columns on md screens */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <Link to="/" className="group">
              <h2 className="text-3xl font-cormorant mb-2 group-hover:text-raiz-terracotta transition-colors">
                Raíz y Grano
              </h2>
            </Link>
            <p className="text-sm italic opacity-80 mb-6">Sabor que enciende neuronas</p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/raizygrano" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300 hover:text-raiz-terracotta"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://tiktok.com/@raizygrano" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300 hover:text-raiz-terracotta"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.6 5C17 6.5 18.25 7.75 19.75 8.15V11.65C18.55 11.35 17.5 10.8 16.6 10V16.4C16.6 20.15 13.75 23 10 23C8.15 23 6.5 22.25 5.25 21C6.5 22.25 8.25 23 10.25 23C14 23 16.85 20.15 16.85 16.4V10C17.75 10.85 18.85 11.35 20 11.65V8.15C18.5 7.75 17.25 6.5 16.85 5H16.6Z" fill="currentColor"/>
                  <path d="M15.6 16.4C15.6 19.15 13.35 21.35 10.65 21.35C9.4 21.35 8.25 20.85 7.4 20.05C8.3 21.1 9.7 21.75 11.25 21.75C13.95 21.75 16.2 19.5 16.2 16.8V10.4C16.2 10.25 16.15 10.15 16.15 10C16.15 10.15 16.1 10.25 16.1 10.4V16.4H15.6Z" fill="currentColor"/>
                  <path d="M10.6 13.8C9.3 13.8 8.25 14.85 8.25 16.15C8.25 16.5 8.35 16.85 8.5 17.15C8.25 16.65 8.1 16.1 8.1 15.5C8.1 14.1 9.2 13 10.6 13C10.95 13 11.25 13.1 11.55 13.2C11.25 13.05 10.95 12.95 10.6 12.95V13.8Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 1H14V1.5C14 3.75 15.75 5.5 18 5.5V9.5C16.6 9.5 15.35 9 14.35 8.2C14.35 8.2 14.35 8.2 14.35 8.25V16.5C14.35 19 12.35 21 9.85 21C7.35 21 5.35 19 5.35 16.5C5.35 14 7.35 12 9.85 12C10.2 12 10.5 12.05 10.85 12.15V16.2C10.6 16.05 10.3 15.95 10 15.95C8.9 15.95 8 16.85 8 17.95C8 19.05 8.9 19.95 10 19.95C11.1 19.95 12 19.05 12 17.95V1H10Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="mailto:info@raizygrano.com" 
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300 hover:text-raiz-terracotta"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links - 3 columns on md screens */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-cormorant mb-6 border-b border-[#b68e5b] pb-2">Explora</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-raiz-terracotta transition-colors flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-raiz-terracotta transition-all duration-300 group-hover:w-4"></span>
                <Coffee size={14} className="transition-transform group-hover:rotate-12" />
                <span>Inicio</span>
              </Link>
              <Link to="/menu" className="hover:text-raiz-terracotta transition-colors flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-raiz-terracotta transition-all duration-300 group-hover:w-4"></span>
                <Coffee size={14} className="transition-transform group-hover:rotate-12" />
                <span>Carta Completa</span>
              </Link>
              <a href="#about" className="hover:text-raiz-terracotta transition-colors flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-raiz-terracotta transition-all duration-300 group-hover:w-4"></span>
                <Heart size={14} className="transition-transform group-hover:scale-110" />
                <span>Nosotros</span>
              </a>
              <a href="#gallery" className="hover:text-raiz-terracotta transition-colors flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-raiz-terracotta transition-all duration-300 group-hover:w-4"></span>
                <Heart size={14} className="transition-transform group-hover:scale-110" />
                <span>Galería</span>
              </a>
            </div>
          </div>
          
          {/* Contact Info - 5 columns on md screens */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-cormorant mb-6 border-b border-[#b68e5b] pb-2">Visítanos</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#b68e5b]" />
                <div>
                  <p className="font-medium mb-1">Universidad Francisco de Vitoria</p>
                  <p className="text-sm text-white/70">Entre el edificio H y CRAI - Universidad Francisco de Vitoria, Madrid</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0 text-[#b68e5b]" />
                <div>
                  <p className="font-medium">Horario</p>
                  <p className="text-sm text-white/70">Lunes a Viernes, de 9:00 a 17:00</p>
                </div>
              </div>
              
              <div className="flex items-center mt-2">
                <a 
                  href="https://maps.app.goo.gl/yourlocation" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#b68e5b] text-[#2b241a] px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-opacity-90 transition-all hover:translate-x-1 shadow-md"
                >
                  Cómo llegar
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 text-center text-sm opacity-70 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Raíz y Grano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
