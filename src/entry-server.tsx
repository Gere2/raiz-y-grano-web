import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { App } from "./App";

export { LEGACY_ANCHORS, NOT_FOUND, PAGES, REDIRECTS, legacyTarget } from "./routes";
export { headTags, llmsTxt, redirectPage, sitemap } from "./seo";

/** HTML de una ruta, para escribirlo en dist/ (scripts/prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
