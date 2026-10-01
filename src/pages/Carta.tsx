import { Leaf, ShieldAlert, Sparkles, Wheat } from "lucide-react";
import { formatDate, formatPrice, useCopy, useLang, type Copy } from "@/i18n";
import { CARTA_UPDATED, EXTRAS, FAMILIES, WATER } from "@/content/carta";
import { SITE } from "@/content/site";
import { CartaRow } from "@/components/Carta";
import { ArtTile, ButtonLink, Container, Eyebrow, IconTile, SectionHeader, TextLink, cx } from "@/components/ui";

const COPY: Copy<{
  eyebrow: string;
  title: string;
  intro: string;
  meta: (date: string) => string;
  order: string;
  allergens: string;
  picker: string;
  jump: string;
  menuTitle: string;
  menuText: (price: string) => string;
  menuNote: string;
  extrasTitle: string;
  extrasText: string;
  alsoTitle: string;
  allergyTitle: string;
  allergyText: string;
  allergyLink: string;
  appTitle: string;
  appText: string;
  appCta: string;
}> = {
  es: {
    eyebrow: "La carta 2026/27",
    title: "Lo que servimos este curso",
    intro: "Café de especialidad en el centro y, alrededor, matcha, bebidas frías, tés y repostería artesanal.",
    meta: (date) => `Precios con IVA incluido. Carta actualizada el ${date}; en la app ves siempre la del día y puedes pedir.`,
    order: "Pedir en la app",
    allergens: "Alérgenos",
    picker: "¿No sabes qué elegir? Prueba el recomendador",
    jump: "Ir a una familia de la carta",
    menuTitle: "Menú desayuno o merienda",
    menuText: (price) => `Añade un bizcocho de zanahoria a cualquier bebida de la carta por ${price} más.`,
    menuNote: "Salvo el agua y los combos, que ya llevan su dulce. También en la app, con «Hazlo menú».",
    extrasTitle: "Para personalizar",
    extrasText: "Cada bebida, a tu manera.",
    alsoTitle: "Y además",
    allergyTitle: "¿Alergias o intolerancias?",
    allergyText: "Dínoslo antes de pedir y te informamos de los alérgenos de cada producto. En la barra se trabaja con leche, gluten, huevo, soja y frutos de cáscara.",
    allergyLink: "Más sobre alérgenos",
    appTitle: "La carta del día, en tu móvil",
    appText: "En la app ves lo que hay hoy, eliges la leche, pagas y lo recoges en barra sin hacer cola.",
    appCta: "Abrir la app",
  },
  en: {
    eyebrow: "Menu 2026/27",
    title: "What we’re serving this year",
    intro: "Specialty coffee at the centre and, around it, matcha, iced drinks, teas and artisan bakery.",
    meta: (date) => `Prices include VAT. Menu updated on ${date}; the app always shows today’s menu and lets you order.`,
    order: "Order in the app",
    allergens: "Allergens",
    picker: "Not sure what to pick? Try the recommender",
    jump: "Jump to a menu section",
    menuTitle: "Breakfast or afternoon menu",
    menuText: (price) => `Add a slice of carrot cake to any drink on the menu for ${price} more.`,
    menuNote: "Except water and the combos, which already include a treat. Also in the app, with “Make it a menu”.",
    extrasTitle: "Make it yours",
    extrasText: "Every drink, the way you like it.",
    alsoTitle: "Also",
    allergyTitle: "Allergies or intolerances?",
    allergyText: "Tell us before you order and we’ll tell you the allergens in each product. Our bar handles milk, gluten, egg, soy and tree nuts.",
    allergyLink: "More about allergens",
    appTitle: "Today’s menu, on your phone",
    appText: "The app shows what we have today: choose your milk, pay and pick it up at the bar without queuing.",
    appCta: "Open the app",
  },
  fr: {
    eyebrow: "La carte 2026/27",
    title: "Ce que nous servons cette année",
    intro: "Le café de spécialité au centre et, autour, le matcha, les boissons glacées, les thés et la pâtisserie artisanale.",
    meta: (date) => `Prix TTC. Carte mise à jour le ${date} ; l’app affiche toujours celle du jour et permet de commander.`,
    order: "Commander sur l’app",
    allergens: "Allergènes",
    picker: "Vous hésitez ? Laissez-vous guider",
    jump: "Aller à une famille de la carte",
    menuTitle: "Formule petit-déjeuner ou goûter",
    menuText: (price) => `Ajoutez un gâteau à la carotte à n’importe quelle boisson de la carte pour ${price} de plus.`,
    menuNote: "Sauf l’eau et les formules, qui ont déjà leur douceur. Aussi dans l’app, avec « Hazlo menú ».",
    extrasTitle: "À votre goût",
    extrasText: "Chaque boisson, comme vous l’aimez.",
    alsoTitle: "Et aussi",
    allergyTitle: "Allergies ou intolérances ?",
    allergyText: "Dites-le-nous avant de commander et nous vous indiquerons les allergènes de chaque produit. Au comptoir, nous manipulons lait, gluten, œuf, soja et fruits à coque.",
    allergyLink: "En savoir plus sur les allergènes",
    appTitle: "La carte du jour, sur votre téléphone",
    appText: "L’app affiche ce qu’il y a aujourd’hui : choisissez votre lait, payez et récupérez au comptoir sans attendre.",
    appCta: "Ouvrir l’app",
  },
};

export default function Carta() {
  const c = useCopy(COPY);
  const { lang } = useLang();

  return (
    <>
      <section aria-labelledby="titulo-carta" className="pt-8 sm:pt-12">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionHeader as="h1" id="titulo-carta" eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
              <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ink-muted">{c.meta(formatDate(CARTA_UPDATED, lang))}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink to={SITE.app.home}>{c.order}</ButtonLink>
                <ButtonLink to="/alergenos" variant="glass">
                  {c.allergens}
                </ButtonLink>
              </div>
              <TextLink to="/recomendador" className="mt-5 inline-flex items-center gap-1.5 text-[15.5px]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {c.picker}
              </TextLink>
            </div>
            <div className="hidden lg:col-span-4 lg:block">
              <img src="/brand/semillas.webp" alt="" aria-hidden="true" width={700} height={695} className="ml-auto h-auto w-[250px] opacity-90" />
            </div>
          </div>
        </Container>
      </section>

      {/* Índice de familias: cristal, porque flota bajo la cabecera. */}
      <nav aria-label={c.jump} className="sticky top-[76px] z-40 mt-8 sm:top-[82px]">
        <Container>
          <ul className="glass no-scrollbar flex gap-1 overflow-x-auto rounded-full p-1.5">
            {FAMILIES.map((family) => (
              <li key={family.id} className="shrink-0">
                <a href={`#${family.id}`} className="nav-link h-9 whitespace-nowrap px-3.5 text-[13.5px]">
                  {family.name[lang]}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <Container className="mt-8">
        <div className="columns-1 gap-5 md:columns-2 [&>*]:mb-5">
          {FAMILIES.map((family) => (
            <section
              key={family.id}
              id={family.id}
              aria-labelledby={`familia-${family.id}`}
              className="card break-inside-avoid scroll-mt-16 p-5 sm:p-6"
            >
              <header className="flex items-center gap-4">
                <ArtTile art={family.art} size={72} />
                <div>
                  <h2 id={`familia-${family.id}`} className="display text-[1.6rem] leading-tight text-forest">
                    {family.name[lang]}
                  </h2>
                  <p className="mt-0.5 text-[14.5px] leading-snug text-ink-soft">{family.blurb[lang]}</p>
                </div>
              </header>
              <ul className="mt-3 divide-y divide-ink/[0.07]">
                {family.items.map((item) => (
                  <CartaRow key={item.pos ?? item.name.es} item={item} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-2 grid gap-5 lg:grid-cols-3">
          <section aria-labelledby="titulo-menu" className="card-cream p-6">
            <IconTile tone="cream">
              <Wheat className="h-6 w-6" strokeWidth={1.7} />
            </IconTile>
            <h2 id="titulo-menu" className="display mt-4 text-[1.45rem] leading-tight text-forest">
              {c.menuTitle}
            </h2>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink">{c.menuText(formatPrice(SITE.breakfastMenuSupplement, lang))}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{c.menuNote}</p>
          </section>

          <section aria-labelledby="titulo-extras" className="card p-6">
            <div className="flex items-center gap-3">
              <ArtTile art="extras" size={52} />
              <div>
                <h2 id="titulo-extras" className="display text-[1.45rem] leading-tight text-forest">
                  {c.extrasTitle}
                </h2>
                <p className="text-[14px] text-ink-soft">{c.extrasText}</p>
              </div>
            </div>
            <ul className="mt-2 divide-y divide-ink/[0.07] text-[15px]">
              {EXTRAS.map((item) => (
                <CartaRow key={item.name.es} item={item} plus />
              ))}
            </ul>
          </section>

          <div className="grid gap-5">
            <section aria-labelledby="titulo-alergias" className="card p-6">
              <IconTile>
                <ShieldAlert className="h-6 w-6" strokeWidth={1.7} />
              </IconTile>
              <h2 id="titulo-alergias" className="display mt-4 text-[1.45rem] leading-tight text-forest">
                {c.allergyTitle}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{c.allergyText}</p>
              <TextLink to="/alergenos" className="mt-3 inline-block text-[15px]">
                {c.allergyLink}
              </TextLink>
            </section>
            <section aria-labelledby="titulo-ademas" className="card p-6">
              <div className="flex items-center gap-3">
                <ArtTile art="otras-bebidas" size={52} />
                <h2 id="titulo-ademas" className="display text-[1.45rem] leading-tight text-forest">
                  {c.alsoTitle}
                </h2>
              </div>
              <ul className="mt-1 text-[15px]">
                <CartaRow item={WATER} />
              </ul>
            </section>
          </div>
        </div>

        <section aria-labelledby="titulo-app-carta" className={cx("card-leaf mt-10 flex flex-col items-start gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9")}>
          <div className="max-w-xl">
            <Eyebrow light>
              <span className="inline-flex items-center gap-2">
                <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
                app.raizygrano.com
              </span>
            </Eyebrow>
            <h2 id="titulo-app-carta" className="display mt-2 text-[1.8rem] leading-tight text-paper">
              {c.appTitle}
            </h2>
            <p className="mt-2 text-[15.5px] leading-relaxed text-paper/85">{c.appText}</p>
          </div>
          <ButtonLink to={SITE.app.home} variant="cream" size="lg">
            {c.appCta}
          </ButtonLink>
        </section>
      </Container>
    </>
  );
}
