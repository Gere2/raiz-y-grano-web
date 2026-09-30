import { Bean } from "lucide-react";
import { formatDate, useCopy, useLang, type Copy } from "@/i18n";
import { SITE } from "@/content/site";
import { ButtonLink, Eyebrow, cx } from "@/components/ui";

const COPY: Copy<{
  eyebrow: string;
  name: string;
  tagline: string;
  included: string;
  premium: string;
  validity: (date: string) => string;
  cta: string;
  where: string;
}> = {
  es: {
    eyebrow: "Para este curso",
    name: "Bono Curso 26/27",
    tagline: "10 bebidas base para estudiar mejor",
    included: "Café solo, americano, cortado o café con leche, sin pagar nada más. Cualquier leche, también la vegetal, sin suplemento.",
    premium: "Matcha, chai y bebidas frías, con un pequeño suplemento.",
    validity: (date) => `Válido todo el curso, hasta el ${date}.`,
    cta: "Comprar el bono",
    where: "Se compra y se canjea en la app.",
  },
  en: {
    eyebrow: "For this academic year",
    name: "Term Pass 26/27",
    tagline: "10 base drinks to study better",
    included: "Espresso, americano, cortado or latte at no extra cost. Any milk, plant milk included, at no extra charge.",
    premium: "Matcha, chai and iced drinks with a small supplement.",
    validity: (date) => `Valid all year, until ${date}.`,
    cta: "Get the pass",
    where: "Bought and redeemed in the app.",
  },
  fr: {
    eyebrow: "Pour cette année",
    name: "Bono Curso 26/27",
    tagline: "10 boissons de base pour mieux étudier",
    included: "Espresso, americano, cortado ou café au lait, sans rien payer de plus. Tous les laits, végétaux compris, sans supplément.",
    premium: "Matcha, chai et boissons glacées avec un petit supplément.",
    validity: (date) => `Valable toute l’année, jusqu’au ${date}.`,
    cta: "Acheter le bono",
    where: "S’achète et s’utilise dans l’app.",
  },
};

/** Los diez sellos del bono, como en la tarjeta de la app. */
export function BonoStamps({ className }: { className?: string }) {
  return (
    <div className={cx("grid grid-cols-10 gap-1.5", className)} aria-hidden="true">
      {Array.from({ length: SITE.bono.credits }, (_, i) => (
        <span key={i} className="stamp">
          <Bean className="h-[55%] w-[55%]" strokeWidth={1.6} />
        </span>
      ))}
    </div>
  );
}

export function BonoCard({ className }: { className?: string }) {
  const c = useCopy(COPY);
  const { lang } = useLang();
  return (
    <article className={cx("card-cream flex flex-col p-6 sm:p-8", className)} aria-labelledby="bono-titulo">
      <div className="flex items-start gap-4">
        <img src="/brand/menu/cafe-con-leche.png" alt="" width={192} height={192} loading="lazy" className="h-16 w-16 shrink-0 sm:h-[72px] sm:w-[72px]" />
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h3 id="bono-titulo" className="display mt-1.5 text-[1.75rem] leading-tight text-forest">
            {c.name}
          </h3>
          <p className="mt-1 text-[15px] text-ink-soft">{c.tagline}</p>
        </div>
      </div>
      <BonoStamps className="mt-6" />
      <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-ink-soft">
        <li>{c.included}</li>
        <li>{c.premium}</li>
        <li className="font-semibold text-ink">{c.validity(formatDate(SITE.bono.validUntil, lang))}</li>
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-7">
        <ButtonLink to={SITE.app.bono}>{c.cta}</ButtonLink>
        <span className="text-[13.5px] text-ink-muted">{c.where}</span>
      </div>
    </article>
  );
}
