import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useCopy, useLang, type Copy } from "@/i18n";
import { SITE, formatShift } from "@/content/site";
import { NAV } from "@/components/Header";
import { Container, Divider } from "@/components/ui";

const COPY: Copy<{
  tagline: string;
  about: string;
  where: string;
  whereText: string;
  directions: string;
  when: string;
  weekdays: string;
  weekend: string;
  holidays: string;
  site: string;
  allergens: string;
  contact: string;
  legal: string;
  privacy: string;
  appPrivacy: string;
}> = {
  es: {
    tagline: "Sabor que enciende neuronas.",
    about: "Café de especialidad en el campus de la Universidad Francisco de Vitoria desde 2025.",
    where: "Dónde",
    whereText: "Entre el Edificio H y el CRAI",
    directions: "Cómo llegar",
    when: "Horario",
    weekdays: "Lunes a viernes",
    weekend: "Sábado y domingo, cerrado.",
    holidays: "En las vacaciones del campus el horario cambia.",
    site: "La web",
    allergens: "Alérgenos",
    contact: "Contacto",
    legal: "Aviso legal",
    privacy: "Privacidad",
    appPrivacy: "Privacidad de la app",
  },
  en: {
    tagline: "Flavour that sparks neurons.",
    about: "Specialty coffee on the Universidad Francisco de Vitoria campus since 2025.",
    where: "Where",
    whereText: "Between Building H and the CRAI library",
    directions: "Get directions",
    when: "Opening hours",
    weekdays: "Monday to Friday",
    weekend: "Closed on Saturdays and Sundays.",
    holidays: "Hours change during campus holidays.",
    site: "Explore",
    allergens: "Allergens",
    contact: "Contact",
    legal: "Legal notice",
    privacy: "Privacy",
    appPrivacy: "App privacy",
  },
  fr: {
    tagline: "Une saveur qui éveille les neurones.",
    about: "Café de spécialité sur le campus de l’Universidad Francisco de Vitoria depuis 2025.",
    where: "Où",
    whereText: "Entre le bâtiment H et le CRAI",
    directions: "Itinéraire",
    when: "Horaires",
    weekdays: "Du lundi au vendredi",
    weekend: "Fermé le samedi et le dimanche.",
    holidays: "Les horaires changent pendant les vacances du campus.",
    site: "Le site",
    allergens: "Allergènes",
    contact: "Contact",
    legal: "Mentions légales",
    privacy: "Confidentialité",
    appPrivacy: "Confidentialité de l’app",
  },
};

export function Footer() {
  const c = useCopy(COPY);
  const { lang } = useLang();
  const year = 2026;

  return (
    <footer className="relative mt-24 border-t border-ink/10 bg-paper-deep/60">
      <Divider wide className="mx-auto -mt-[46px] w-[min(560px,86vw)]" />
      <Container className="pb-10 pt-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src="/brand/logo-360.webp" alt="Raíz y Grano" width={360} height={451} loading="lazy" className="h-auto w-[104px]" />
            <p className="display-italic mt-4 text-xl text-forest">{c.tagline}</p>
            <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink-soft">{c.about}</p>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow">{c.where}</h2>
            <address className="mt-3 text-[15px] not-italic leading-relaxed text-ink-soft">
              {c.whereText}
              <br />
              {SITE.address.campus}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.locality} ({SITE.address.region})
            </address>
            <a href={SITE.maps} className="link mt-3 inline-flex items-center gap-1.5 text-[15px]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {c.directions}
            </a>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow">{c.when}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">{c.weekdays}</span>
              <br />
              {SITE.hours.shifts.map((shift) => (
                <span key={shift.opens} className="tabular block">
                  {formatShift(shift)}
                </span>
              ))}
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
              {c.weekend} {c.holidays}
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow">{c.site}</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[15px]">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-ink-soft hover:text-forest">
                    {item.label[lang]}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/alergenos" className="text-ink-soft hover:text-forest">
                  {c.allergens}
                </Link>
              </li>
            </ul>
            <h2 className="eyebrow mt-6">{c.contact}</h2>
            <ul className="mt-3 space-y-1.5 text-[15px]">
              <li>
                <a href={SITE.instagram.url} className="inline-flex items-center gap-2 text-ink-soft hover:text-forest">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  {SITE.instagram.handle}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-ink-soft hover:text-forest">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-10" />
        <div className="mt-5 flex flex-col gap-3 text-[13px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Raíz y Grano · {SITE.legal.name}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <Link to="/aviso-legal" className="hover:text-forest">
                {c.legal}
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="hover:text-forest">
                {c.privacy}
              </Link>
            </li>
            <li>
              <Link to="/alergenos" className="hover:text-forest">
                {c.allergens}
              </Link>
            </li>
            <li>
              <a href={SITE.app.privacy} className="hover:text-forest">
                {c.appPrivacy}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
