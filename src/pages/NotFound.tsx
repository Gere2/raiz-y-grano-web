import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#f2ecdf] font-opensans">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl border border-[#efeadf] px-8 py-16 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-[#a18968]">404</p>
          <h1 className="text-4xl md:text-5xl font-cormorant text-[#795a32] mt-4">
            No encontramos esta página
          </h1>
          <p className="text-[#6d5435] mt-4">
            La ruta <span className="font-semibold">{location.pathname}</span> no existe o ha cambiado.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center justify-center">
              Volver al inicio
            </Link>
            <Link
              to="/p"
              className="inline-flex items-center justify-center rounded-full border border-[#e0d4bb] px-5 py-2 text-sm font-semibold text-[#6d5435] hover:border-[#d3be97]"
            >
              Abrir catálogo
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
