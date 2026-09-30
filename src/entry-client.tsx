import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/archivo/wght.css";
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "./styles.css";
import { App } from "./App";
import { LEGACY_ANCHORS, REDIRECTS, legacyTarget } from "./routes";

// Enlaces de la web anterior («/#/menu», «/#/p/<ficha>?src=qr»). El HTML
// prerenderizado ya lo resuelve en el <head>; esto cubre el modo desarrollo.
const legacy = legacyTarget(window.location.hash, REDIRECTS, LEGACY_ANCHORS);

if (legacy) {
  window.location.replace(legacy);
} else {
  const container = document.getElementById("root")!;
  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
  // Las páginas llegan prerenderizadas (scripts/prerender.mjs): se hidratan.
  if (container.hasChildNodes()) hydrateRoot(container, app);
  else createRoot(container).render(app);
}
