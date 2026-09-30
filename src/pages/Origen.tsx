import { Coffee, Droplets, GraduationCap, Snowflake } from "lucide-react";
import { useCopy, type Copy } from "@/i18n";
import { SITE } from "@/content/site";
import { ArtTile, ButtonLink, Container, IconTile, SectionHeader } from "@/components/ui";

type Row = { label: string; value: string };
type Card = { title: string; text: string };

const COPY: Copy<{
  eyebrow: string;
  title: string;
  lead: string;
  coffeeEyebrow: string;
  coffeeTitle: string;
  coffeeText: string[];
  profileTitle: string;
  profile: Row[];
  lotNote: string;
  brewEyebrow: string;
  brewTitle: string;
  brew: Card[];
  moreEyebrow: string;
  moreTitle: string;
  more: (Card & { art: string })[];
  learnTitle: string;
  learnText: string;
  learnCta: string;
  menuCta: string;
}> = {
  es: {
    eyebrow: "Origen",
    title: "Del cafetal a tu taza",
    lead: "Nuestro café es de Amor Perfecto: café de especialidad colombiano que se tuesta en origen, cerca de donde se cultiva.",
    coffeeEyebrow: "El café",
    coffeeTitle: "Tostado en Colombia, cerca del cafetal",
    coffeeText: [
      "El tueste en origen es la seña de Amor Perfecto: el café se tuesta en Colombia, cerca de donde crece, en vez de viajar verde para tostarse lejos.",
      "Trabajan directamente con los caficultores para cuidar la calidad, la trazabilidad y un precio justo, y con un código QR cuentan la historia de cada café: la finca, quién lo produce, la variedad y el proceso.",
    ],
    profileTitle: "Perfil del café de la casa",
    profile: [
      { label: "País", value: "Colombia" },
      { label: "Proceso", value: "Lavado" },
      { label: "Perfil", value: "Dulce, cítrico y frutal" },
      { label: "Aroma", value: "Frutos rojos, cítrico y chocolate" },
      { label: "Acidez", value: "Media, cítrica" },
      { label: "Cuerpo", value: "Medio y cremoso" },
    ],
    lotNote: "Cuando cambia el lote cambian las notas: pregúntanos en barra por el café de esta semana.",
    brewEyebrow: "En la barra",
    brewTitle: "Cómo lo preparamos",
    brew: [
      { title: "Espresso y con leche", text: "La base de la carta: espresso, cortado, café con leche, cappuccino y flat white, con la leche que prefieras y sin suplemento por la vegetal." },
      { title: "V60, taza a taza", text: "Café de filtro preparado para ti, para probar el café solo y notar lo que cuenta su etiqueta." },
      { title: "Cold brew", text: "Café extraído en frío durante horas: suave, refrescante y con menos amargor." },
    ],
    moreEyebrow: "Más allá del café",
    moreTitle: "Lo que lo acompaña",
    more: [
      { art: "matcha", title: "Matcha", text: "Matcha latte, frío o caliente, y nuestras combinaciones de fresa, pistacho y vainilla." },
      { art: "reposteria", title: "Repostería de obrador", text: "Cookies, tartas, muffin y la magdalena de temporada, de obradores artesanos." },
      { art: "acai", title: "Açaí y fruta", text: "Açaí bowl con granola y toppings, y smoothies de fruta al cien por cien." },
    ],
    learnTitle: "Aprende jugando",
    learnText: "En la app hay cuestionarios sobre el origen del café: qué es el tueste en origen, cómo leer una etiqueta (origen, proceso, variedad y notas) o qué quiere decir que un café tenga «notas a chocolate». Cada uno te da granos.",
    learnCta: "Abrir la app",
    menuCta: "Ver la carta",
  },
  en: {
    eyebrow: "Origin",
    title: "From the coffee farm to your cup",
    lead: "Our coffee comes from Amor Perfecto: Colombian specialty coffee roasted at origin, close to where it’s grown.",
    coffeeEyebrow: "The coffee",
    coffeeTitle: "Roasted in Colombia, close to the farm",
    coffeeText: [
      "Roasting at origin is Amor Perfecto’s hallmark: the coffee is roasted in Colombia, close to where it grows, instead of travelling green to be roasted far away.",
      "They work directly with coffee farmers to look after quality, traceability and a fair price, and use a QR code to tell each coffee’s story: the farm, the producer, the variety and the process.",
    ],
    profileTitle: "Our house coffee",
    profile: [
      { label: "Country", value: "Colombia" },
      { label: "Process", value: "Washed" },
      { label: "Profile", value: "Sweet, citrusy and fruity" },
      { label: "Aroma", value: "Red berries, citrus and chocolate" },
      { label: "Acidity", value: "Medium, citrus" },
      { label: "Body", value: "Medium and creamy" },
    ],
    lotNote: "When the lot changes, so do the notes: ask us at the bar about this week’s coffee.",
    brewEyebrow: "At the bar",
    brewTitle: "How we make it",
    brew: [
      { title: "Espresso and milk drinks", text: "The core of the menu: espresso, cortado, latte, cappuccino and flat white, with the milk you prefer and no charge for plant milk." },
      { title: "V60, cup by cup", text: "Filter coffee brewed just for you, to taste the coffee on its own and find what its label promises." },
      { title: "Cold brew", text: "Coffee steeped cold for hours: smooth, refreshing and less bitter." },
    ],
    moreEyebrow: "Beyond coffee",
    moreTitle: "What goes with it",
    more: [
      { art: "matcha", title: "Matcha", text: "Matcha latte, hot or iced, and our strawberry, pistachio and vanilla blends." },
      { art: "reposteria", title: "Bakery", text: "Cookies, cakes, muffins and the seasonal magdalena, from artisan bakeries." },
      { art: "acai", title: "Açaí and fruit", text: "Açaí bowls with granola and toppings, and 100% fruit smoothies." },
    ],
    learnTitle: "Learn as you play",
    learnText: "The app has quizzes about where coffee comes from: what roasting at origin means, how to read a label (origin, process, variety and notes) or what “chocolate notes” really means. Each one earns you beans.",
    learnCta: "Open the app",
    menuCta: "See the menu",
  },
  fr: {
    eyebrow: "Origine",
    title: "De la plantation à votre tasse",
    lead: "Notre café vient d’Amor Perfecto : un café de spécialité colombien torréfié à l’origine, près de là où il est cultivé.",
    coffeeEyebrow: "Le café",
    coffeeTitle: "Torréfié en Colombie, près de la plantation",
    coffeeText: [
      "La torréfaction à l’origine est la signature d’Amor Perfecto : le café est torréfié en Colombie, près de là où il pousse, au lieu de voyager vert pour être torréfié loin.",
      "Ils travaillent directement avec les caféiculteurs pour soigner la qualité, la traçabilité et un prix juste, et un code QR raconte l’histoire de chaque café : la ferme, le producteur, la variété et le procédé.",
    ],
    profileTitle: "Notre café maison",
    profile: [
      { label: "Pays", value: "Colombie" },
      { label: "Procédé", value: "Lavé" },
      { label: "Profil", value: "Doux, agrumes et fruité" },
      { label: "Arôme", value: "Fruits rouges, agrumes et chocolat" },
      { label: "Acidité", value: "Moyenne, agrumes" },
      { label: "Corps", value: "Moyen et crémeux" },
    ],
    lotNote: "Quand le lot change, les notes changent : demandez-nous au comptoir le café de la semaine.",
    brewEyebrow: "Au comptoir",
    brewTitle: "Comment nous le préparons",
    brew: [
      { title: "Espresso et boissons lactées", text: "La base de la carte : espresso, cortado, café au lait, cappuccino et flat white, avec le lait de votre choix et sans supplément pour le végétal." },
      { title: "V60, tasse par tasse", text: "Un café filtre préparé pour vous, pour goûter le café seul et retrouver ce que promet son étiquette." },
      { title: "Cold brew", text: "Un café infusé à froid pendant des heures : doux, rafraîchissant et moins amer." },
    ],
    moreEyebrow: "Au-delà du café",
    moreTitle: "Pour l’accompagner",
    more: [
      { art: "matcha", title: "Matcha", text: "Matcha latte, chaud ou glacé, et nos recettes fraise, pistache et vanille." },
      { art: "reposteria", title: "Pâtisserie artisanale", text: "Cookies, gâteaux, muffin et la magdalena de saison, d’ateliers artisanaux." },
      { art: "acai", title: "Açaí et fruits", text: "Açaí bowl avec granola et toppings, et smoothies 100 % fruits." },
    ],
    learnTitle: "Apprendre en jouant",
    learnText: "L’app propose des quiz sur l’origine du café : ce qu’est la torréfaction à l’origine, comment lire une étiquette (origine, procédé, variété et notes) ou ce que veut dire « notes de chocolat ». Chacun vous rapporte des grains.",
    learnCta: "Ouvrir l’app",
    menuCta: "Voir la carte",
  },
};

const BREW_ICONS = [Coffee, Droplets, Snowflake];

export default function Origen() {
  const c = useCopy(COPY);

  return (
    <>
      <section aria-labelledby="titulo-origen" className="pt-8 sm:pt-12">
        <Container>
          <SectionHeader as="h1" id="titulo-origen" eyebrow={c.eyebrow} title={c.title} intro={c.lead} />
        </Container>
        <div className="mx-auto mt-6 max-w-[1100px] px-2">
          <img
            src="/brand/ritual-900.webp"
            srcSet="/brand/ritual-900.webp 900w, /brand/ritual.webp 1600w"
            sizes="(min-width: 1100px) 1100px, 100vw"
            alt=""
            aria-hidden="true"
            width={1600}
            height={882}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section aria-labelledby="titulo-cafe" className="pt-12 sm:pt-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader id="titulo-cafe" eyebrow={c.coffeeEyebrow} title={c.coffeeTitle} />
              <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft">
                {c.coffeeText.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <aside aria-labelledby="titulo-perfil" className="card p-6 sm:p-7 lg:col-span-5">
              <div className="flex items-center gap-3">
                <ArtTile art="cafe" size={56} />
                <h3 id="titulo-perfil" className="display text-[1.35rem] leading-tight text-forest">
                  {c.profileTitle}
                </h3>
              </div>
              <dl className="mt-4 divide-y divide-ink/[0.07]">
                {c.profile.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5 text-[15px]">
                    <dt className="text-ink-muted">{row.label}</dt>
                    <dd className="text-right font-semibold text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">{c.lotNote}</p>
            </aside>
          </div>
        </Container>
      </section>

      <section aria-labelledby="titulo-preparacion" className="pt-20 sm:pt-24">
        <Container>
          <SectionHeader id="titulo-preparacion" eyebrow={c.brewEyebrow} title={c.brewTitle} />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {c.brew.map((card, i) => {
              const Icon = BREW_ICONS[i];
              return (
                <li key={card.title} className="card p-6">
                  <IconTile tone={i === 1 ? "cream" : "leaf"}>
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </IconTile>
                  <h3 className="display mt-4 text-[1.3rem] leading-tight text-forest">{card.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{card.text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="titulo-mas" className="pt-20 sm:pt-24">
        <Container>
          <SectionHeader id="titulo-mas" eyebrow={c.moreEyebrow} title={c.moreTitle} />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {c.more.map((card) => (
              <li key={card.title} className="card flex items-center gap-4 p-5">
                <ArtTile art={card.art} size={84} />
                <div>
                  <h3 className="display text-[1.25rem] leading-tight text-forest">{card.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-snug text-ink-soft">{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="titulo-aprende" className="pt-16">
        <Container>
          <div className="card-leaf flex flex-col gap-6 p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <IconTile size={48}>
                <GraduationCap className="h-6 w-6" strokeWidth={1.7} />
              </IconTile>
              <h2 id="titulo-aprende" className="display mt-4 text-[1.8rem] leading-tight text-paper">
                {c.learnTitle}
              </h2>
              <p className="mt-2 text-[15.5px] leading-relaxed text-paper/85">{c.learnText}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to={SITE.app.home} variant="cream">
                {c.learnCta}
              </ButtonLink>
              <ButtonLink to="/carta" variant="outline-cream" arrow>
                {c.menuCta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
