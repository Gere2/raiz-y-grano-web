
import React from 'react';
import { MapPin, Clock, Instagram, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="section pt-24 pb-32 relative overflow-hidden">
      {/* Fondo con diseño texturizado */}
      <div className="absolute inset-0 bg-gradient-to-tl from-raiz-olive/5 to-raiz-cream/50 z-0">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-raiz-terracotta/5 rounded-full"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-raiz-olive/5 rounded-full"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-4 relative inline-block">
            Contacto
            <span className="absolute -z-10 left-0 right-0 bottom-0 h-3 bg-raiz-terracotta opacity-20 transform -rotate-1"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-raiz-coffee opacity-80">
            Encuéntranos en el campus y disfruta de un momento de tranquilidad con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3 bg-white/80 backdrop-blur-sm border-raiz-terracotta/10 overflow-hidden shadow-elegant hover:shadow-soft transition-all duration-300">
            <div className="relative h-40 bg-raiz-olive/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-raiz-olive opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                  <path d="M70,50 C70,60.5 60.5,70 50,70 C39.5,70 30,60.5 30,50 C30,39.5 39.5,30 50,30 C60.5,30 70,39.5 70,50 Z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-raiz-terracotta/20 p-3 rounded-full mr-5 shadow-sm">
                    <MapPin size={24} className="text-raiz-olive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cormorant font-medium mb-2 text-raiz-coffee">Ubicación</h3>
                    <p className="opacity-80 leading-relaxed">
                      Entre el edificio H y CRAI - UFV Madrid<br />
                      Universidad Francisco de Vitoria<br />
                      Ctra. Pozuelo-Majadahonda km 1,800<br />
                      28223 Pozuelo de Alarcón, Madrid
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/tBJEeQn1JR6FbxsH9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-sm text-raiz-olive hover:text-raiz-coffee transition-colors"
                    >
                      <span className="mr-1">Ver en Google Maps</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-raiz-terracotta/20 p-3 rounded-full mr-5 shadow-sm">
                    <Clock size={24} className="text-raiz-olive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cormorant font-medium mb-2 text-raiz-coffee">Horario</h3>
                    <p className="opacity-80 leading-relaxed">
                      Lunes a Viernes<br />
                      9:00 - 17:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-raiz-terracotta/20 p-3 rounded-full mr-5 shadow-sm">
                    <Instagram size={24} className="text-raiz-olive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cormorant font-medium mb-2 text-raiz-coffee">Síguenos</h3>
                    <a 
                      href="https://www.instagram.com/raizygrano" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-raiz-olive hover:text-raiz-coffee transition-colors flex items-center"
                    >
                      <span>@raizygrano</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-raiz-terracotta/20 p-3 rounded-full mr-5 shadow-sm">
                    <Mail size={24} className="text-raiz-olive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cormorant font-medium mb-2 text-raiz-coffee">Email</h3>
                    <a 
                      href="mailto:info@raizygrano.com" 
                      className="text-raiz-olive hover:text-raiz-coffee transition-colors"
                    >
                      info@raizygrano.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-raiz-terracotta/10 overflow-hidden shadow-elegant hover:shadow-soft transition-all duration-300">
            <div className="p-8">
              <h3 className="text-xl font-cormorant font-medium mb-6 text-raiz-coffee">Encuéntranos</h3>
              
              {/* Mapa mejorado e ilustrado */}
              <div className="relative w-full h-80 bg-raiz-beige rounded-lg overflow-hidden border border-raiz-terracotta border-opacity-30 shadow-inner">
                <div className="absolute inset-0">
                  {/* Mapa ilustrado mejorado */}
                  <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Fondo texturizado */}
                    <rect width="400" height="400" fill="#F5EFE6" />
                    <pattern id="pattern-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="0.5" fill="#4B2E20" fillOpacity="0.1" />
                    </pattern>
                    <rect width="400" height="400" fill="url(#pattern-dots)" />
                    
                    {/* Caminos */}
                    <path d="M50 200 L350 200" stroke="#4B2E20" strokeWidth="6" strokeOpacity="0.1" />
                    <path d="M200 50 L200 350" stroke="#4B2E20" strokeWidth="6" strokeOpacity="0.1" />
                    
                    {/* Edificios */}
                    <rect x="70" y="80" width="100" height="70" rx="4" fill="#DAB29C" />
                    <text x="120" y="125" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="14" fontWeight="bold">Edificio H</text>
                    
                    <rect x="230" y="80" width="100" height="70" rx="4" fill="#DAB29C" />
                    <text x="280" y="125" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="14" fontWeight="bold">CRAI</text>
                    
                    {/* Zona verde */}
                    <circle cx="120" cy="280" r="50" fill="#6D8C60" fillOpacity="0.3" />
                    <circle cx="280" cy="280" r="50" fill="#6D8C60" fillOpacity="0.3" />
                    
                    {/* Foodtruck location */}
                    <circle cx="200" cy="200" r="25" fill="#6D8C60" />
                    <circle cx="200" cy="200" r="15" fill="#4B2E20" fillOpacity="0.8" />
                    <text x="200" y="245" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="14" fontWeight="bold">Raíz y Grano</text>
                    
                    {/* Caminos al foodtruck */}
                    <path d="M120 150 L120 200 L175 200" stroke="#4B2E20" strokeWidth="2" strokeDasharray="4 2" />
                    <path d="M280 150 L280 200 L225 200" stroke="#4B2E20" strokeWidth="2" strokeDasharray="4 2" />
                    
                    {/* Más detalles */}
                    <circle cx="80" cy="260" r="10" fill="#DAB29C" opacity="0.5" />
                    <circle cx="320" cy="260" r="10" fill="#DAB29C" opacity="0.5" />
                    <circle cx="100" cy="290" r="8" fill="#DAB29C" opacity="0.5" />
                    <circle cx="300" cy="290" r="8" fill="#DAB29C" opacity="0.5" />
                    
                    {/* Brújula */}
                    <circle cx="350" cy="350" r="20" fill="white" stroke="#4B2E20" strokeWidth="1" />
                    <text x="350" y="355" textAnchor="middle" fill="#4B2E20" fontFamily="Arial" fontSize="16">N</text>
                    <path d="M350 330 L350 340" stroke="#4B2E20" strokeWidth="1" />
                    <path d="M350 360 L350 370" stroke="#4B2E20" strokeWidth="1" />
                    <path d="M330 350 L340 350" stroke="#4B2E20" strokeWidth="1" />
                    <path d="M360 350 L370 350" stroke="#4B2E20" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-raiz-terracotta/10 rounded-lg border border-raiz-terracotta/20">
                <p className="text-center text-sm opacity-80 italic font-cormorant text-lg">
                  "Te esperamos con una sonrisa y la mejor selección de café de especialidad para acompañar tus momentos en el campus."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
