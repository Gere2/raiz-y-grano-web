
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=774&auto=format&fit=crop',
    alt: 'Café espresso en taza artesanal',
  },
  {
    url: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=2070&auto=format&fit=crop',
    alt: 'Granos de café tostado',
  },
  {
    url: 'https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=987&auto=format&fit=crop',
    alt: 'Latte art en taza blanca',
  },
  {
    url: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=992&auto=format&fit=crop',
    alt: 'Croissants recién horneados',
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=847&auto=format&fit=crop',
    alt: 'Café y libro sobre mesa de madera',
  },
  {
    url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=871&auto=format&fit=crop',
    alt: 'Estudiantes conversando con café',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') navigateImage('prev');
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'Escape') closeModal();
  };

  return (
    <section id="gallery" className="section pt-24 bg-gradient-to-br from-raiz-cream/50 to-white relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-raiz-olive/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-raiz-terracotta/5 rounded-tr-full"></div>
      
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-4 relative inline-block">
          Galería
          <span className="absolute -z-10 left-0 right-0 bottom-0 h-3 bg-raiz-terracotta opacity-20 transform -rotate-1"></span>
        </h2>
        <p className="max-w-2xl mx-auto text-raiz-coffee opacity-80">
          Momentos para disfrutar, paladares que despertar y experiencias que compartir.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative h-64 md:h-80 rounded-lg overflow-hidden group animate-fade-in shadow-elegant cursor-pointer"
            style={{ animationDelay: `${0.1 * index}s` }}
            onClick={() => openModal(index)}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-raiz-coffee/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white font-cormorant text-xl mb-1">
                  {image.alt}
                </p>
                <div className="w-10 h-0.5 bg-raiz-terracotta"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://www.instagram.com/raizygrano" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-raiz-coffee px-6 py-3 border border-raiz-coffee/20 rounded-full hover:bg-raiz-olive/10 transition-all duration-300"
        >
          <span className="mr-2">Ver más en Instagram</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      {/* Enhanced Lightbox modal with navigation controls */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" 
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-raiz-coffee/50 rounded-full p-2 hover:bg-raiz-coffee transition-colors z-10"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button 
                className="p-2 rounded-full bg-raiz-coffee/50 text-white hover:bg-raiz-coffee transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button 
                className="p-2 rounded-full bg-raiz-coffee/50 text-white hover:bg-raiz-coffee transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].alt} 
              className="w-full h-full object-contain"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-cormorant text-xl">{images[selectedImage].alt}</p>
              <p className="text-white/70 text-sm mt-1">Imagen {selectedImage + 1} de {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
