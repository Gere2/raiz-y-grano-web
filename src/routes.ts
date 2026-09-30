import type { Copy } from "@/i18n";

/**
 * Mapa de la web: rutas, metadatos y redirecciones.
 *
 * Cada ruta de `PAGES` se prerenderiza en `dist/<ruta>/index.html` con su
 * título, descripción y URL canónica (scripts/prerender.mjs). Así Google y
 * las vistas previas de WhatsApp ven cada página, y no el
 * «Lovable Generated Project» de la web anterior.
 */

export type PageMeta = {
  path: string;
  title: Copy<string>;
  description: Copy<string>;
  /** Fuera del buscador y del sitemap (fichas retiradas, 404). */
  noindex?: boolean;
};

const BRAND = "Raíz y Grano";

/** Fichas de repostería de 2024 que se imprimieron en códigos QR. */
export const ARCHIVED_SHEETS = ["bizcocho-zanahoria-nuez-coco", "galleta-chocochip", "muffin-zanahoria", "muffin-calabaza"] as const;

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: {
      es: `${BRAND} · Café de especialidad en el campus de la UFV`,
      en: `${BRAND} · Specialty coffee on the UFV campus`,
      fr: `${BRAND} · Café de spécialité sur le campus de l’UFV`,
    },
    description: {
      es: "Café de especialidad, matcha y repostería en el campus de la Universidad Francisco de Vitoria. Pide desde la app y recoge en barra sin hacer cola.",
      en: "Specialty coffee, matcha and bakery on the Universidad Francisco de Vitoria campus. Order from the app and skip the queue.",
      fr: "Café de spécialité, matcha et pâtisserie sur le campus de l’Universidad Francisco de Vitoria. Commandez sur l’app et évitez la file.",
    },
  },
  {
    path: "/carta",
    title: {
      es: `La carta 2026/27 · ${BRAND}`,
      en: `Menu 2026/27 · ${BRAND}`,
      fr: `La carte 2026/27 · ${BRAND}`,
    },
    description: {
      es: "Precios de la carta 2026/27: café de especialidad, café frío, matcha, chai, tés, açaí, repostería, CookieCup y combos. Leche vegetal sin suplemento.",
      en: "Prices for the 2026/27 menu: specialty coffee, iced coffee, matcha, chai, teas, açaí, bakery, CookieCup and combos. Plant milk at no extra charge.",
      fr: "Les prix de la carte 2026/27 : café de spécialité, café glacé, matcha, chai, thés, açaí, pâtisserie, CookieCup et formules. Lait végétal sans supplément.",
    },
  },
  {
    path: "/la-app",
    title: {
      es: `La app · ${BRAND}`,
      en: `The app · ${BRAND}`,
      fr: `L’app · ${BRAND}`,
    },
    description: {
      es: "Pide desde el móvil y recoge en barra sin hacer cola, acumula granos, supera retos y usa el Bono Curso 26/27.",
      en: "Order from your phone and pick up at the bar without queuing, earn beans, take on challenges and use the Term Pass 26/27.",
      fr: "Commandez depuis votre téléphone et récupérez au comptoir sans attendre, cumulez des grains et utilisez le Bono Curso 26/27.",
    },
  },
  {
    path: "/profesorado",
    title: {
      es: `Profesorado y departamentos · ${BRAND}`,
      en: `Faculty and departments · ${BRAND}`,
      fr: `Enseignants et départements · ${BRAND}`,
    },
    description: {
      es: "Próximamente: café y repostería para reuniones de departamento, entregados en tu aula o despacho del campus de la UFV. Apúntate a la lista de espera.",
      en: "Coming soon: coffee and pastries for department meetings, delivered to your classroom or office on the UFV campus. Join the waiting list.",
      fr: "Bientôt : café et pâtisseries pour les réunions de département, livrés en salle ou au bureau sur le campus de l’UFV. Liste d’attente ouverte.",
    },
  },
  {
    path: "/historia",
    title: {
      es: `Nuestra historia · ${BRAND}`,
      en: `Our story · ${BRAND}`,
      fr: `Notre histoire · ${BRAND}`,
    },
    description: {
      es: "Cómo nació Raíz y Grano en el campus de la UFV: del montaje en 2025 al segundo curso completo, y las herramientas que construimos por el camino.",
      en: "How Raíz y Grano grew on the UFV campus: from setting up in 2025 to our second full academic year, and the tools we built along the way.",
      fr: "Comment Raíz y Grano est né sur le campus de l’UFV : de l’installation en 2025 à la deuxième année complète.",
    },
  },
  {
    path: "/origen",
    title: {
      es: `El origen del café · ${BRAND}`,
      en: `Where our coffee comes from · ${BRAND}`,
      fr: `L’origine du café · ${BRAND}`,
    },
    description: {
      es: "Café de especialidad de Amor Perfecto, tostado en Colombia cerca de donde se cultiva, y cómo preparamos cada taza.",
      en: "Specialty coffee from Amor Perfecto, roasted in Colombia close to where it is grown, and how we prepare every cup.",
      fr: "Café de spécialité d’Amor Perfecto, torréfié en Colombie près de là où il est cultivé.",
    },
  },
  {
    path: "/alergenos",
    title: {
      es: `Alérgenos · ${BRAND}`,
      en: `Allergens · ${BRAND}`,
      fr: `Allergènes · ${BRAND}`,
    },
    description: {
      es: "Qué alérgenos se manipulan en nuestra barra y cómo informarte antes de pedir.",
      en: "Which allergens we handle at our bar and how to ask before you order.",
      fr: "Les allergènes manipulés à notre comptoir et comment vous informer avant de commander.",
    },
  },
  {
    path: "/aviso-legal",
    title: {
      es: `Aviso legal · ${BRAND}`,
      en: `Legal notice · ${BRAND}`,
      fr: `Mentions légales · ${BRAND}`,
    },
    description: {
      es: "Datos identificativos del titular de raizygrano.com.",
      en: "Identification of the owner of raizygrano.com.",
      fr: "Identification du titulaire de raizygrano.com.",
    },
  },
  {
    path: "/privacidad",
    title: {
      es: `Política de privacidad · ${BRAND}`,
      en: `Privacy policy · ${BRAND}`,
      fr: `Politique de confidentialité · ${BRAND}`,
    },
    description: {
      es: "Qué datos trata esta web, para qué y cómo ejercer tus derechos.",
      en: "What data this website processes, why, and how to exercise your rights.",
      fr: "Les données traitées par ce site, pourquoi et comment exercer vos droits.",
    },
  },
  ...ARCHIVED_SHEETS.map(
    (slug): PageMeta => ({
      path: `/p/${slug}`,
      noindex: true,
      title: {
        es: `Ficha retirada · ${BRAND}`,
        en: `Archived product sheet · ${BRAND}`,
        fr: `Fiche retirée · ${BRAND}`,
      },
      description: {
        es: "Esta ficha de producto era de 2024 y ya no está vigente. Pregúntanos en barra por los alérgenos.",
        en: "This product sheet dates from 2024 and is no longer current. Ask us at the bar about allergens.",
        fr: "Cette fiche produit date de 2024 et n’est plus à jour. Demandez-nous au comptoir pour les allergènes.",
      },
    }),
  ),
];

export const NOT_FOUND: PageMeta = {
  path: "/404",
  noindex: true,
  title: {
    es: `Página no encontrada · ${BRAND}`,
    en: `Page not found · ${BRAND}`,
    fr: `Page introuvable · ${BRAND}`,
  },
  description: {
    es: "Esta página no existe. Vuelve al inicio o mira la carta.",
    en: "This page does not exist. Go back home or see the menu.",
    fr: "Cette page n’existe pas. Revenez à l’accueil ou consultez la carte.",
  },
};

/**
 * Rutas antiguas y atajos. Las de la web anterior no se pueden romper: hay
 * enlaces compartidos y códigos QR impresos que apuntan a ellas.
 */
export const REDIRECTS: Record<string, string> = {
  "/menu": "/carta",
  "/combos": "/carta#combos",
  "/recurrentes": "/la-app",
  "/qr": "/alergenos",
  "/p": "/alergenos",
  "/p/cafe-insignia": "/origen",
  "/legal/privacidad": "/privacidad",
  "/politica-de-privacidad": "/privacidad",
  "/legal/alergenos": "/alergenos",
  "/nosotros": "/historia",
  "/app": "https://app.raizygrano.com/",
  "/pedir": "https://app.raizygrano.com/",
  "/bono": "https://app.raizygrano.com/bono",
};

/** Anclas de la web anterior, que era una sola página con secciones. */
export const LEGACY_ANCHORS: Record<string, string> = {
  home: "/",
  menu: "/carta",
  about: "/historia",
  gallery: "/",
  contact: "/#visitanos",
};

export function findPage(pathname: string): PageMeta | undefined {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return PAGES.find((page) => page.path === clean);
}

/**
 * Traduce una URL de la web anterior (HashRouter: «/#/menu», «/#/p/<slug>?lang=en&src=qr»)
 * a la ruta nueva. Devuelve null si no hay nada que redirigir.
 *
 * Es AUTOCONTENIDA a propósito: el prerenderizado copia su código fuente en
 * un <script> dentro del <head>, para redirigir antes de que cargue nada, así
 * que no puede usar nada de fuera de su propio cuerpo.
 */
export function legacyTarget(
  hash: string,
  redirects: Record<string, string>,
  anchors: Record<string, string>,
): string | null {
  if (!hash || hash.length < 2) return null;
  if (hash.charAt(1) !== "/") {
    const id = hash.slice(1).toLowerCase();
    return Object.prototype.hasOwnProperty.call(anchors, id) ? anchors[id] : null;
  }
  const rest = hash.slice(1);
  const q = rest.indexOf("?");
  const path = (q === -1 ? rest : rest.slice(0, q)).replace(/\/+$/, "") || "/";
  const search = q === -1 ? "" : rest.slice(q);
  const target = Object.prototype.hasOwnProperty.call(redirects, path) ? redirects[path] : path;
  if (/^https?:/.test(target)) return target;
  const cut = target.indexOf("#");
  return cut === -1 ? target + search : target.slice(0, cut) + search + target.slice(cut);
}
