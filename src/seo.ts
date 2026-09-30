import { SITE, formatShift } from "@/content/site";
import { PAGES, type PageMeta } from "@/routes";

/**
 * Etiquetas del <head> de cada página prerenderizada: título, descripción,
 * URL canónica, vista previa para redes y mensajería (Open Graph) y, en la
 * portada, los datos estructurados del local para los buscadores.
 */

const OG_IMAGE = `${SITE.url}/og.jpg`;

function esc(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`;
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/** Datos estructurados del local (schema.org CafeOrCoffeeShop). */
export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/icon-512.png`,
    image: OG_IMAGE,
    description:
      "Café de especialidad, matcha y repostería en el campus de la Universidad Francisco de Vitoria. Pedidos por app para recoger en barra.",
    servesCuisine: ["Café de especialidad", "Matcha", "Repostería"],
    priceRange: "€",
    currenciesAccepted: "EUR",
    acceptsReservations: false,
    hasMenu: `${SITE.url}/carta`,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.street} (campus de la ${SITE.address.campus}, entre el Edificio H y el CRAI)`,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    containedInPlace: {
      "@type": "CollegeOrUniversity",
      name: SITE.address.campus,
      url: "https://www.ufv.es",
    },
    openingHoursSpecification: SITE.hours.shifts.map((shift) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SITE.hours.days.map((d) => DAYS[d - 1]),
      opens: shift.opens,
      closes: shift.closes,
    })),
    sameAs: [SITE.instagram.url, SITE.app.home],
  };
}

export function headTags(meta: PageMeta): string {
  const url = canonicalUrl(meta.path);
  const title = esc(meta.title.es);
  const description = esc(meta.description.es);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Raíz y Grano, café de especialidad en el campus de la UFV" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  if (meta.path === "/") {
    tags.push(`<script type="application/ld+json">${JSON.stringify(localBusiness()).replace(/</g, "\\u003c")}</script>`);
  }
  return tags.join("\n    ");
}

/** Página mínima que redirige una URL antigua a la nueva. */
export function redirectPage(to: string): string {
  const target = /^https?:/.test(to) ? to : `${SITE.url}${to}`;
  const safe = esc(target);
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Raíz y Grano</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${safe}" />
    <meta http-equiv="refresh" content="0; url=${safe}" />
    <script>(function (t) { var i = t.indexOf("#"); location.replace(i < 0 ? t + location.search : t.slice(0, i) + location.search + t.slice(i)); })(${JSON.stringify(to)});</script>
  </head>
  <body>
    <p><a href="${safe}">Raíz y Grano</a></p>
  </body>
</html>
`;
}

/**
 * /llms.txt: resumen en texto plano para asistentes de IA (horario, sitio,
 * dónde pedir). Sale de los mismos datos que la web, para que no se desfase.
 */
export function llmsTxt(): string {
  const shifts = SITE.hours.shifts.map((s) => `de ${formatShift(s).replace(" – ", " a ")}`).join(" y ");
  const pages = PAGES.filter((page) => !page.noindex && page.path !== "/")
    .map((page) => `- [${page.title.es.split(" · ")[0]}](${canonicalUrl(page.path)}): ${page.description.es}`)
    .join("\n");
  return `# ${SITE.name}

> Cafetería de café de especialidad en el campus de la ${SITE.address.campus} (${SITE.address.locality}, ${SITE.address.region}), entre el Edificio H y el CRAI. Abre de lunes a viernes, ${shifts}; sábado y domingo, cerrado. Los pedidos se hacen en la app ${SITE.app.home} y se recogen en barra.

## Páginas

${pages}

## Contacto

- Correo: ${SITE.email}
- Instagram: ${SITE.instagram.url}
- App de pedidos: ${SITE.app.home}
`;
}

export function sitemap(lastmod: string): string {
  const urls = PAGES.filter((page) => !page.noindex)
    .map(
      (page) =>
        `  <url><loc>${canonicalUrl(page.path)}</loc><lastmod>${lastmod}</lastmod><priority>${page.path === "/" ? "1.0" : "0.7"}</priority></url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
