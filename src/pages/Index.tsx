
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set title and description for SEO
    document.title = "Raíz y Grano - Café de Especialidad";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Raíz y Grano, foodtruck de café de especialidad en Universidad Francisco de Vitoria Madrid. Sabor que enciende neuronas.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HomeSection />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
