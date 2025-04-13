
import React from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section pt-24 bg-raiz-olive bg-opacity-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-4">
            Contacto
          </h2>
          <p className="max-w-2xl mx-auto text-raiz-coffee opacity-80">
            Encuéntranos en el campus y disfruta de un momento de tranquilidad con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card animate-fade-in">
            <div className="flex items-start mb-6">
              <div className="bg-raiz-terracotta bg-opacity-20 p-3 rounded-full mr-4">
                <MapPin size={24} className="text-raiz-olive" />
              </div>
              <div>
                <h3 className="text-xl font-cormorant mb-2">Ubicación</h3>
                <p className="opacity-80">
                  Entre el edificio H y CRAI - UFV Madrid<br />
                  Universidad Francisco de Vitoria<br />
                  Ctra. Pozuelo-Majadahonda km 1,800<br />
                  28223 Pozuelo de Alarcón, Madrid
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-raiz-terracotta bg-opacity-20 p-3 rounded-full mr-4">
                <Clock size={24} className="text-raiz-olive" />
              </div>
              <div>
                <h3 className="text-xl font-cormorant mb-2">Horario</h3>
                <p className="opacity-80">
                  Lunes a Viernes<br />
                  9:00 - 17:00
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-raiz-terracotta bg-opacity-20 p-3 rounded-full mr-4">
                <Instagram size={24} className="text-raiz-olive" />
              </div>
              <div>
                <h3 className="text-xl font-cormorant mb-2">Síguenos</h3>
                <a 
                  href="https://www.instagram.com/raizygrano" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-raiz-olive hover:text-raiz-coffee transition-colors"
                >
                  @raizygrano
                </a>
              </div>
            </div>
          </div>

          <div className="card animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h3 className="text-xl font-cormorant mb-4">Encuéntranos</h3>
            
            {/* Simple illustrated map */}
            <div className="relative w-full h-64 bg-white rounded-lg overflow-hidden border border-raiz-terracotta border-opacity-30">
              <div className="absolute inset-0 bg-raiz-beige">
                {/* Simplified map illustration */}
                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background pattern */}
                  <rect width="400" height="300" fill="#F5EFE6" />
                  
                  {/* Buildings */}
                  <rect x="50" y="50" width="100" height="60" rx="2" fill="#DAB29C" />
                  <text x="100" y="85" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="12">Edificio H</text>
                  
                  <rect x="250" y="50" width="100" height="60" rx="2" fill="#DAB29C" />
                  <text x="300" y="85" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="12">CRAI</text>
                  
                  {/* Foodtruck location */}
                  <circle cx="200" cy="150" r="15" fill="#6D8C60" />
                  <text x="200" y="170" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="12">Raíz y Grano</text>
                  
                  {/* Paths */}
                  <path d="M100 110 L100 150 L185 150" stroke="#4B2E20" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M300 110 L300 150 L215 150" stroke="#4B2E20" strokeWidth="2" strokeDasharray="4 2" />
                  
                  {/* Compass */}
                  <circle cx="350" cy="250" r="20" fill="white" stroke="#4B2E20" strokeWidth="1" />
                  <text x="350" y="245" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="16">N</text>
                  <path d="M350 230 L350 238" stroke="#4B2E20" strokeWidth="1" />
                  <path d="M350 262 L350 270" stroke="#4B2E20" strokeWidth="1" />
                  <path d="M330 250 L338 250" stroke="#4B2E20" strokeWidth="1" />
                  <path d="M362 250 L370 250" stroke="#4B2E20" strokeWidth="1" />
                </svg>
              </div>
            </div>
            
            <p className="mt-4 text-center text-sm opacity-80">
              Te esperamos con la mejor selección de café de especialidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
