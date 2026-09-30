import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

/**
 * Idiomas de la web: castellano, inglés y francés (los mismos de la web
 * anterior y de los carteles del curso: «HORARIO · OPENING HOURS · HORAIRES»).
 *
 * Las páginas se prerenderizan en castellano. Por eso el primer render es
 * SIEMPRE castellano (así la hidratación coincide con el HTML servido) y el
 * idioma guardado, el de `?lang=` o el del navegador se aplica justo después.
 */

export type Lang = "es" | "en" | "fr";
export const LANGS: readonly Lang[] = ["es", "en", "fr"];

/** Misma clave que usaba la web anterior: quien ya eligió idioma lo conserva. */
const STORAGE_KEY = "ryg_lang";

export type Copy<T> = Record<Lang, T>;

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue>({ lang: "es", setLang: () => {} });

export function normalizeLang(value?: string | null): Lang | null {
  if (!value) return null;
  const primary = value.toLowerCase().split("-")[0];
  return (LANGS as readonly string[]).includes(primary) ? (primary as Lang) : null;
}

function readStored(): Lang | null {
  try {
    return normalizeLang(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function store(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Navegación privada o almacenamiento bloqueado: el idioma dura esta visita.
  }
}

function detectBrowser(): Lang {
  const candidates = window.navigator.languages?.length ? window.navigator.languages : [window.navigator.language];
  for (const candidate of candidates) {
    const lang = normalizeLang(candidate);
    if (lang) return lang;
  }
  return "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const fromQuery = normalizeLang(new URLSearchParams(window.location.search).get("lang"));
    if (fromQuery) store(fromQuery);
    const next = fromQuery ?? readStored() ?? detectBrowser();
    if (next !== "es") setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    store(next);
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Devuelve el bloque de textos del idioma activo. */
export function useCopy<T>(copy: Copy<T>): T {
  return copy[useLang().lang];
}

const LOCALES: Record<Lang, string> = { es: "es-ES", en: "en-GB", fr: "fr-FR" };

/** Precio con coma decimal y símbolo detrás, como en la carta: «2,50 €». */
export function formatPrice(value: number, lang: Lang = "es"): string {
  const amount = new Intl.NumberFormat(LOCALES[lang], {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return lang === "en" ? `€${amount}` : `${amount} €`;
}

/** Fecha larga: «31 de julio de 2027». */
export function formatDate(iso: string, lang: Lang = "es"): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(LOCALES[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}
