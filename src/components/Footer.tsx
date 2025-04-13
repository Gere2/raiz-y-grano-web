
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Coffee, MapPin, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-raiz-coffee text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-cormorant mb-2">Raíz y Grano</h2>
            <p className="text-sm italic opacity-80 mb-4">Sabor que enciende neuronas</p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/raizygrano" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-raiz-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://tiktok.com/@raizygrano" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-raiz-terracotta transition-colors"
                aria-label="TikTok"
              >
                {/* TikTok custom icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69C18.61 6.38 17.7 5.79 16.97 5C16.24 4.21 15.71 3.25 15.47 2.22H15.45C15.27 1.44 15.37 0 15.37 0H11.12V15.81C11.12 16.08 11.12 16.34 11.1 16.6C11.1 16.62 11.1 16.63 11.1 16.65C11.09 16.69 11.08 16.73 11.07 16.78C11.06 16.82 11.05 16.86 11.04 16.9C11.04 16.93 11.03 16.96 11.01 16.99C11 17.02 10.99 17.05 10.98 17.08C10.97 17.09 10.96 17.11 10.95 17.13C10.94 17.16 10.93 17.19 10.91 17.22C10.9 17.24 10.89 17.26 10.88 17.28C10.87 17.3 10.86 17.32 10.85 17.34C10.84 17.36 10.83 17.38 10.82 17.39C10.81 17.41 10.8 17.43 10.79 17.45C10.78 17.47 10.77 17.49 10.75 17.51C10.74 17.53 10.73 17.55 10.72 17.57C10.71 17.59 10.69 17.61 10.68 17.63C10.67 17.65 10.65 17.67 10.64 17.68C10.62 17.7 10.61 17.72 10.6 17.74C10.58 17.75 10.56 17.77 10.54 17.79C10.53 17.81 10.52 17.83 10.5 17.85C10.49 17.86 10.47 17.88 10.45 17.9C10.43 17.92 10.42 17.94 10.4 17.96C10.38 17.97 10.36 17.99 10.34 18.01C10.32 18.02 10.3 18.03 10.28 18.05C10.26 18.07 10.24 18.09 10.22 18.1C10.2 18.12 10.18 18.13 10.16 18.15C10.14 18.16 10.12 18.18 10.1 18.19C10.08 18.2 10.06 18.22 10.04 18.23C10.02 18.24 10 18.26 9.98 18.27C9.96 18.29 9.94 18.3 9.92 18.32C9.9 18.33 9.87 18.34 9.85 18.36C9.83 18.37 9.81 18.38 9.79 18.39C9.77 18.4 9.75 18.41 9.72 18.43C9.7 18.44 9.69 18.45 9.67 18.46C9.65 18.47 9.63 18.48 9.61 18.49C9.58 18.5 9.55 18.52 9.52 18.53C9.5 18.54 9.48 18.55 9.45 18.56C9.42 18.57 9.39 18.58 9.36 18.59C9.34 18.6 9.31 18.61 9.29 18.62C9.25 18.63 9.22 18.64 9.19 18.65C9.16 18.66 9.13 18.67 9.1 18.68C9.07 18.69 9.04 18.7 9.01 18.71C8.97 18.72 8.94 18.73 8.91 18.73C8.88 18.74 8.85 18.75 8.82 18.75C8.79 18.76 8.75 18.77 8.72 18.77C8.69 18.78 8.65 18.78 8.62 18.79C8.59 18.79 8.56 18.8 8.52 18.8C8.48 18.81 8.44 18.81 8.4 18.81C8.38 18.81 8.36 18.82 8.34 18.82C8.28 18.82 8.22 18.83 8.16 18.83C7.14 18.83 6.32 18.42 5.73 17.8C5.13 17.19 4.75 16.36 4.75 15.35C4.75 13.25 6.45 11.55 8.56 11.55C8.93 11.55 9.29 11.61 9.63 11.71V7.42C9.39 7.38 9.15 7.36 8.9 7.36C7.54 7.36 6.26 7.79 5.19 8.59C4.14 9.38 3.36 10.49 2.93 11.74C2.67 12.49 2.53 13.27 2.53 14.08C2.53 15.09 2.75 16.07 3.17 16.96C3.59 17.86 4.2 18.66 4.96 19.3C5.73 19.94 6.63 20.42 7.6 20.71C8.6 21 9.64 21.1 10.7 20.98C11.76 20.86 12.77 20.53 13.68 20.01C14.59 19.49 15.37 18.78 15.99 17.92C16.75 16.88 17.22 15.66 17.38 14.41V14.39C17.39 14.31 17.4 8.34 17.4 8.34C17.69 8.52 17.99 8.67 18.31 8.79C19.13 9.09 20.01 9.24 20.93 9.21V5.04C20.49 5.06 20.03 5.02 19.59 4.91V6.69Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-cormorant mb-4 border-b border-raiz-terracotta pb-2">Explora</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-raiz-terracotta transition-colors flex items-center">
                <Coffee size={16} className="mr-2" /> Inicio
              </Link>
              <Link to="/menu" className="hover:text-raiz-terracotta transition-colors flex items-center">
                <Coffee size={16} className="mr-2" /> Carta Completa
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-cormorant mb-4 border-b border-raiz-terracotta pb-2">Visítanos</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-sm">Entre el edificio H y CRAI - Universidad Francisco de Vitoria, Madrid</p>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <p className="text-sm">Lunes a Viernes, de 9:00 a 17:00</p>
              </div>
              <div className="flex items-center mt-4">
                <a 
                  href="https://maps.app.goo.gl/yourlocation" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-raiz-olive text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-opacity-90 transition-colors"
                >
                  Cómo llegar
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center text-sm opacity-70">
          <p>&copy; 2024 Raíz y Grano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
