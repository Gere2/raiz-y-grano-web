
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-raiz-coffee text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-cormorant mb-4">Raíz y Grano</h3>
          <p className="text-sm opacity-80">
            Sabor que enciende neuronas.<br />
            Café de especialidad en el corazón de la universidad.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-cormorant mb-4">Horario</h3>
          <p className="text-sm opacity-80">
            Lunes a Viernes<br />
            9:00 - 17:00
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-cormorant mb-4">Síguenos</h3>
          <a 
            href="https://www.instagram.com/raizygrano" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-raiz-terracotta transition-colors"
          >
            <Instagram size={20} className="mr-2" />
            <span>@raizygrano</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/20 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Raíz y Grano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
