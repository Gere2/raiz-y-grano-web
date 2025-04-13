
import React from 'react';

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
  return (
    <section id="gallery" className="section pt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-cormorant text-raiz-coffee mb-4">
          Galería
        </h2>
        <p className="max-w-2xl mx-auto text-raiz-coffee opacity-80">
          Momentos para disfrutar, paladares que despertar y experiencias que compartir.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative h-64 md:h-72 rounded-lg overflow-hidden group animate-fade-in"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-raiz-coffee bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end justify-start p-4">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://www.instagram.com/raizygrano" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-raiz-coffee hover:text-raiz-olive transition-colors"
        >
          <span className="mr-2">Ver más en Instagram</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
