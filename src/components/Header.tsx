import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LANGS, useCopy, useLang, type Copy, type Lang } from "@/i18n";
import { SITE } from "@/content/site";
import { cx } from "@/components/ui";

type NavItem = { to: string; label: Copy<string> };

export const NAV: NavItem[] = [
  { to: "/carta", label: { es: "Carta", en: "Menu", fr: "Carte" } },
  { to: "/la-app", label: { es: "La app", en: "The app", fr: "L’app" } },
  { to: "/profesorado", label: { es: "Profesorado", en: "Faculty", fr: "Enseignants" } },
  { to: "/historia", label: { es: "Historia", en: "Our story", fr: "Histoire" } },
  { to: "/origen", label: { es: "Origen", en: "Origin", fr: "Origine" } },
];

const COPY: Copy<{ order: string; menu: string; close: string; home: string; visit: string; language: string }> = {
  es: { order: "Pedir", menu: "Abrir menú", close: "Cerrar menú", home: "Raíz y Grano, inicio", visit: "Visítanos", language: "Idioma" },
  en: { order: "Order", menu: "Open menu", close: "Close menu", home: "Raíz y Grano, home", visit: "Visit us", language: "Language" },
  fr: { order: "Commander", menu: "Ouvrir le menu", close: "Fermer le menu", home: "Raíz y Grano, accueil", visit: "Nous trouver", language: "Langue" },
};

const LANG_NAMES: Record<Lang, string> = { es: "Español", en: "English", fr: "Français" };

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  const c = useCopy(COPY);
  return (
    <div className={cx("segmented", className)} role="group" aria-label={c.language}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className="segmented-item"
          aria-pressed={lang === code}
          aria-label={LANG_NAMES[code]}
          lang={code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function BrandLink({ label }: { label: string }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2 rounded-full pr-1" aria-label={label}>
      <img src="/brand/marca.png" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
      <span className="display truncate text-[19px] leading-none text-forest">Raíz y Grano</span>
    </Link>
  );
}

/**
 * Cabecera flotante: la misma cápsula de cristal de la app, con la planta del
 * logotipo y el nombre en la serif de la marca. En el móvil, el menú se abre
 * como una hoja de cristal bajo la cápsula.
 */
export function Header() {
  const c = useCopy(COPY);
  const { lang } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Al navegar, el menú se cierra.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    sheetRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pb-2 pt-3 sm:px-4">
      <div className="glass mx-auto flex h-14 max-w-page items-center justify-between gap-2 rounded-full pl-2.5 pr-2 sm:h-[60px] sm:pl-3">
        <BrandLink label={c.home} />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="nav-link">
                  {item.label[lang]}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/#visitanos" className="nav-link">
                {c.visit}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageSwitch className="hidden md:inline-flex" />
          <a href={SITE.app.home} className="btn btn-primary btn-sm">
            {c.order}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="btn btn-glass btn-sm w-[38px] px-0 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? c.close : c.menu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-[18px] w-[18px]" aria-hidden="true" /> : <Menu className="h-[18px] w-[18px]" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="glass-scrim animate-fade fixed inset-0 -z-10 lg:hidden" aria-hidden="true" onClick={() => setOpen(false)} />
          <div
            ref={sheetRef}
            id="menu-movil"
            className="glass-sheet animate-sheet mx-auto mt-2 max-w-page p-3 lg:hidden"
          >
            <nav aria-label="Principal">
              <ul className="grid gap-1">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cx(
                          "display flex items-center justify-between rounded-2xl px-4 py-3 text-[22px]",
                          isActive ? "bg-sage-pale text-forest" : "text-ink hover:bg-ink/5",
                        )
                      }
                    >
                      {item.label[lang]}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <Link to="/#visitanos" className="display flex rounded-2xl px-4 py-3 text-[22px] text-ink hover:bg-ink/5">
                    {c.visit}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-ink/10 px-2 pt-3">
              <LanguageSwitch />
              <a href={SITE.app.home} className="btn btn-primary btn-md">
                {c.order}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
