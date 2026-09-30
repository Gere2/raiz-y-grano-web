import { useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import { ARCHIVED_SHEETS, REDIRECTS } from "@/routes";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Carta from "@/pages/Carta";
import LaApp from "@/pages/LaApp";
import Profesorado from "@/pages/Profesorado";
import Historia from "@/pages/Historia";
import Origen from "@/pages/Origen";
import Alergenos from "@/pages/Alergenos";
import FichaRetirada from "@/pages/FichaRetirada";
import NotFound from "@/pages/NotFound";
import { AvisoLegal, Privacidad } from "@/pages/Legal";

/** Atajos que salen de la web (raizygrano.com/app → la app). */
function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

/** Solo existen las fichas que se imprimieron en QR; el resto es un 404. */
function Ficha() {
  const { slug } = useParams();
  return (ARCHIVED_SHEETS as readonly string[]).includes(slug ?? "") ? <FichaRetirada /> : <NotFound />;
}

export function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/la-app" element={<LaApp />} />
          <Route path="/profesorado" element={<Profesorado />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/origen" element={<Origen />} />
          <Route path="/alergenos" element={<Alergenos />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/p/:slug" element={<Ficha />} />
          {Object.entries(REDIRECTS).map(([from, to]) => (
            <Route
              key={from}
              path={from}
              element={/^https?:/.test(to) ? <ExternalRedirect to={to} /> : <Navigate to={to} replace />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
}
