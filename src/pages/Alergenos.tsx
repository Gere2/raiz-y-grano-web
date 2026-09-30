import { MessageCircle, ShieldAlert } from "lucide-react";
import { useCopy, type Copy } from "@/i18n";
import { SITE } from "@/content/site";
import { ButtonLink, Container, IconTile, SectionHeader, TextLink, cx } from "@/components/ui";

/** Los 14 alérgenos del anexo II del Reglamento (UE) 1169/2011. */
const ANNEX_II = ["gluten", "crustaceos", "huevo", "pescado", "cacahuetes", "soja", "leche", "frutosCascara", "apio", "mostaza", "sesamo", "sulfitos", "altramuces", "moluscos"] as const;
type Allergen = (typeof ANNEX_II)[number];

/** Lo que se manipula en nuestra barra (matriz de alérgenos de la carta 2026/27). */
const AT_OUR_BAR: Allergen[] = ["leche", "gluten", "huevo", "soja", "frutosCascara"];

const COPY: Copy<{
  eyebrow: string;
  title: string;
  lead: string;
  ask: string;
  barTitle: string;
  barText: string;
  milkTitle: string;
  milkText: string;
  tracesTitle: string;
  tracesText: string;
  sheetsTitle: string;
  sheetsText: string;
  appTitle: string;
  appText: string;
  annexTitle: string;
  annexText: string;
  atBar: string;
  names: Record<Allergen, string>;
  menu: string;
}> = {
  es: {
    eyebrow: "Información alimentaria",
    title: "Alérgenos",
    lead: "Si tienes una alergia o una intolerancia, dínoslo antes de pedir y te informamos de los alérgenos de cada producto.",
    ask: "Pregúntanos en barra",
    barTitle: "Qué se manipula en nuestra barra",
    barText: "En la carta hay productos con leche, gluten, huevo, soja y frutos de cáscara (nueces y pistacho, por ejemplo).",
    milkTitle: "Leches y bebidas vegetales",
    milkText: "Tenemos leche normal, sin lactosa, de avena y de almendra, todas sin suplemento. La de almendra es un fruto de cáscara y la de avena puede contener gluten según la marca: si lo necesitas, te enseñamos el envase.",
    tracesTitle: "Trazas",
    tracesText: "Compartimos espacio y utensilios, así que no podemos garantizar la ausencia de trazas de ningún alérgeno.",
    sheetsTitle: "La ficha de cada producto",
    sheetsText: "Estamos completando la ficha de alérgenos de cada producto de la carta 2026/27 con las fichas técnicas de nuestros proveedores y obradores. Mientras tanto, la información te la damos en barra, antes de que pidas.",
    appTitle: "Si pides por la app",
    appText: "Si tienes una alergia, consúltanos antes en barra o escríbenos a",
    annexTitle: "Los 14 alérgenos de declaración obligatoria",
    annexText: "Son los del anexo II del Reglamento (UE) 1169/2011. Marcamos los que se manipulan en nuestra barra.",
    atBar: "En nuestra barra",
    names: {
      gluten: "Cereales con gluten",
      crustaceos: "Crustáceos",
      huevo: "Huevo",
      pescado: "Pescado",
      cacahuetes: "Cacahuetes",
      soja: "Soja",
      leche: "Leche (incluida la lactosa)",
      frutosCascara: "Frutos de cáscara",
      apio: "Apio",
      mostaza: "Mostaza",
      sesamo: "Sésamo",
      sulfitos: "Sulfitos",
      altramuces: "Altramuces",
      moluscos: "Moluscos",
    },
    menu: "Ver la carta",
  },
  en: {
    eyebrow: "Food information",
    title: "Allergens",
    lead: "If you have an allergy or intolerance, tell us before you order and we’ll tell you the allergens in each product.",
    ask: "Ask us at the bar",
    barTitle: "What we handle at our bar",
    barText: "Our menu includes products with milk, gluten, egg, soy and tree nuts (walnuts and pistachio, for example).",
    milkTitle: "Milks and plant drinks",
    milkText: "We have regular, lactose-free, oat and almond milk, all at no extra charge. Almond is a tree nut and oat milk may contain gluten depending on the brand: if you need to, we’ll show you the carton.",
    tracesTitle: "Traces",
    tracesText: "We share space and utensils, so we can’t guarantee the absence of traces of any allergen.",
    sheetsTitle: "A sheet for every product",
    sheetsText: "We’re completing the allergen sheet for every product on the 2026/27 menu with the technical sheets from our suppliers and bakeries. Until then, we’ll give you the information at the bar, before you order.",
    appTitle: "If you order in the app",
    appText: "If you have an allergy, ask us at the bar first or write to",
    annexTitle: "The 14 allergens that must be declared",
    annexText: "Those listed in Annex II of Regulation (EU) 1169/2011. We mark the ones handled at our bar.",
    atBar: "At our bar",
    names: {
      gluten: "Cereals containing gluten",
      crustaceos: "Crustaceans",
      huevo: "Eggs",
      pescado: "Fish",
      cacahuetes: "Peanuts",
      soja: "Soybeans",
      leche: "Milk (including lactose)",
      frutosCascara: "Tree nuts",
      apio: "Celery",
      mostaza: "Mustard",
      sesamo: "Sesame",
      sulfitos: "Sulphites",
      altramuces: "Lupin",
      moluscos: "Molluscs",
    },
    menu: "See the menu",
  },
  fr: {
    eyebrow: "Information alimentaire",
    title: "Allergènes",
    lead: "Si vous avez une allergie ou une intolérance, dites-le-nous avant de commander et nous vous indiquerons les allergènes de chaque produit.",
    ask: "Demandez-nous au comptoir",
    barTitle: "Ce que nous manipulons au comptoir",
    barText: "La carte comprend des produits avec du lait, du gluten, des œufs, du soja et des fruits à coque (noix et pistache, par exemple).",
    milkTitle: "Laits et boissons végétales",
    milkText: "Nous avons du lait classique, sans lactose, d’avoine et d’amande, tous sans supplément. L’amande est un fruit à coque et le lait d’avoine peut contenir du gluten selon la marque : si besoin, nous vous montrons l’emballage.",
    tracesTitle: "Traces",
    tracesText: "Nous partageons l’espace et les ustensiles : nous ne pouvons pas garantir l’absence de traces d’allergènes.",
    sheetsTitle: "Une fiche par produit",
    sheetsText: "Nous complétons la fiche allergènes de chaque produit de la carte 2026/27 avec les fiches techniques de nos fournisseurs et ateliers. En attendant, nous vous informons au comptoir, avant votre commande.",
    appTitle: "Si vous commandez sur l’app",
    appText: "Si vous avez une allergie, demandez-nous d’abord au comptoir ou écrivez à",
    annexTitle: "Les 14 allergènes à déclaration obligatoire",
    annexText: "Ceux de l’annexe II du règlement (UE) 1169/2011. Nous signalons ceux manipulés à notre comptoir.",
    atBar: "À notre comptoir",
    names: {
      gluten: "Céréales contenant du gluten",
      crustaceos: "Crustacés",
      huevo: "Œufs",
      pescado: "Poissons",
      cacahuetes: "Arachides",
      soja: "Soja",
      leche: "Lait (y compris le lactose)",
      frutosCascara: "Fruits à coque",
      apio: "Céleri",
      mostaza: "Moutarde",
      sesamo: "Sésame",
      sulfitos: "Sulfites",
      altramuces: "Lupin",
      moluscos: "Mollusques",
    },
    menu: "Voir la carte",
  },
};

export function AllergenInfo() {
  const c = useCopy(COPY);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { title: c.barTitle, text: c.barText },
          { title: c.milkTitle, text: c.milkText },
          { title: c.tracesTitle, text: c.tracesText },
          { title: c.sheetsTitle, text: c.sheetsText },
        ].map((block) => (
          <section key={block.title} className="card p-6">
            <h2 className="display text-[1.3rem] leading-tight text-forest">{block.title}</h2>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{block.text}</p>
          </section>
        ))}
      </div>
      <p className="card-inset mt-4 flex items-start gap-3 p-4 text-[15px] leading-relaxed text-ink-soft">
        <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
        <span>
          <strong className="text-ink">{c.appTitle}.</strong> {c.appText} <TextLink to={`mailto:${SITE.email}`}>{SITE.email}</TextLink>.
        </span>
      </p>
    </>
  );
}

export default function Alergenos() {
  const c = useCopy(COPY);

  return (
    <>
      <section aria-labelledby="titulo-alergenos" className="pt-8 sm:pt-12">
        <Container>
          <div className="flex items-start gap-5">
            <IconTile tone="cream" size={60}>
              <ShieldAlert className="h-7 w-7" strokeWidth={1.7} />
            </IconTile>
            <SectionHeader as="h1" id="titulo-alergenos" eyebrow={c.eyebrow} title={c.title} intro={c.lead} />
          </div>
        </Container>
      </section>

      <section className="pt-10">
        <Container>
          <AllergenInfo />
        </Container>
      </section>

      <section aria-labelledby="titulo-anexo" className="pt-16">
        <Container>
          <SectionHeader id="titulo-anexo" title={c.annexTitle} intro={c.annexText} />
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {ANNEX_II.map((key) => {
              const here = AT_OUR_BAR.includes(key);
              return (
                <li
                  key={key}
                  className={cx(
                    "flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-[15px]",
                    here ? "border-clay/30 bg-clay-light/70 font-semibold text-ink" : "border-ink/[0.07] bg-paper-light/70 text-ink-soft",
                  )}
                >
                  <span>{c.names[key]}</span>
                  {here && <span className="pill pill-cream shrink-0 bg-paper-light">{c.atBar}</span>}
                </li>
              );
            })}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="/carta" variant="glass" arrow>
              {c.menu}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
