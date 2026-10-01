import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router";
import { useCopy, useLang, type Copy } from "@/i18n";
import { NOT_FOUND, findPage } from "@/routes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SKIP: Copy<string> = { es: "Saltar al contenido", en: "Skip to content", fr: "Aller au contenu" };

/**
 * Título y descripción de la página en el idioma activo. El HTML
 * prerenderizado ya los trae en castellano; esto los mantiene al navegar y
 * al cambiar de idioma.
 */
function RouteMeta() {
  const { pathname } = useLocation();
  const { lang } = useLang();
  useEffect(() => {
    const page = findPage(pathname) ?? NOT_FOUND;
    document.title = page.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute("content", page.description[lang]);
  }, [pathname, lang]);
  return null;
}

/**
 * Al cambiar de página se vuelve arriba; si el enlace lleva ancla
 * («/#visitanos»), se baja hasta ella cuando ya está pintada.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);
  useEffect(() => {
    // En la primera carga manda el navegador (ya bajó al ancla o está donde
    // la persona haya hecho scroll antes de que terminara de cargar).
    if (firstRender.current) {
      firstRender.current = false;
      // Si se entra con ancla («/#visitanos»), el navegador baja antes de que
      // carguen las tipografías y el texto cambia de alto: se recoloca al final.
      if (hash) {
        const id = decodeURIComponent(hash.slice(1));
        document.fonts?.ready.then(() => document.getElementById(id)?.scrollIntoView());
      }
      return;
    }
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const frame = window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      return () => window.cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  const skip = useCopy(SKIP);
  return (
    <>
      <RouteMeta />
      <ScrollManager />
      <div className="ambient" aria-hidden="true" />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
      >
        {skip}
      </a>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}
