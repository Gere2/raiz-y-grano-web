
import React from 'react';
import { Instagram, TiktokIcon, MapPin, Clock, Coffee, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Creamos un componente TikTok personalizado ya que no existe en lucide-react
const TikTok = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    <path d="M15 8h.01" />
    <path d="M20 12a8 8 0 1 0-4.98 7.4"></path>
    <path d="M15 12v-4h4"></path>
    <path d="M19 8V4"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-raiz-coffee text-white py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M45.2,-51.3C57.9,-39.9,67.3,-25,70.3,-8.6C73.3,7.8,70,25.6,60.1,38.7C50.2,51.8,33.7,60.2,16.3,64.1C-1.1,68,-19.4,67.4,-35.6,60.3C-51.8,53.1,-65.9,39.4,-70.7,23.7C-75.6,8,-71.1,-9.8,-62.9,-24.5C-54.7,-39.3,-42.7,-50.9,-29.4,-62.1C-16.1,-73.2,-1.5,-84,8.3,-93.1C17.9,-102.1,32.5,-62.7,45.2,-51.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M42.8,-68.1C55.9,-61.5,67.4,-50.5,74.4,-37C81.4,-23.4,83.9,-7.3,81.2,7.9C78.6,23.1,70.8,37.3,60.2,48.6C49.6,59.9,36.1,68.3,21.2,73.5C6.3,78.7,-10.2,80.9,-24.1,76.2C-38,71.6,-49.5,60.1,-59.1,47.4C-68.7,34.7,-76.5,20.8,-79.1,5.5C-81.8,-9.8,-79.3,-26.4,-70.9,-39.2C-62.5,-52.1,-48.1,-61.1,-34.1,-67.4C-20.1,-73.6,-6.6,-76.9,6.8,-77C20.1,-77.1,29.8,-74.7,42.8,-68.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top section with logo and contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/129ecb52-d06d-45ac-bd72-eb40a98107d4.png" 
                alt="Raíz y Grano Logo" 
                className="h-16 w-auto"
              />
              <h3 className="text-2xl font-cormorant">Raíz y Grano</h3>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-md">
              Sabor que enciende neuronas. Café de especialidad en el corazón de la universidad.
              Compromiso con la calidad y la experiencia única en cada taza.
            </p>
            <Link 
              to="/menu" 
              className="inline-block px-4 py-2 bg-raiz-terracotta text-white rounded-md hover:bg-opacity-90 transition-colors text-sm font-medium"
            >
              Ver nuestra carta completa
            </Link>
          </div>
          
          {/* Schedule */}
          <div>
            <h3 className="text-xl font-cormorant mb-4 flex items-center">
              <Clock size={18} className="mr-2" />
              Horario
            </h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Lunes a Viernes<br />
                9:00 - 17:00
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Sábados y Domingos<br />
                Cerrado
              </li>
            </ul>
          </div>
          
          {/* Contact and location */}
          <div>
            <h3 className="text-xl font-cormorant mb-4 flex items-center">
              <MapPin size={18} className="mr-2" />
              Encuéntranos
            </h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Entre el edificio H y CRAI - UFV Madrid
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-2 flex-shrink-0 mt-1" />
                <span>info@raizygrano.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 flex-shrink-0 mt-1" />
                <span>+34 612 345 678</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social media and copyright */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://www.instagram.com/raizygrano" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-raiz-terracotta transition-colors flex items-center"
              aria-label="Instagram"
            >
              <Instagram size={20} className="mr-2" />
              <span>@raizygrano</span>
            </a>
            <a 
              href="https://www.tiktok.com/@raizygrano" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-raiz-terracotta transition-colors flex items-center"
              aria-label="TikTok"
            >
              <TikTok />
              <span className="ml-2">@raizygrano</span>
            </a>
          </div>
          
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Raíz y Grano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
