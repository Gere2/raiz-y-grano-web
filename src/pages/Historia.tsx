import { Quote } from "lucide-react";
import { useCopy, type Copy } from "@/i18n";
import { ButtonLink, Container, SectionHeader, cx } from "@/components/ui";
import { SITE } from "@/content/site";

type Mark = { when: string; text: string };
type Chapter = { when: string; title: string; text: string; marks?: Mark[]; now?: boolean };
type Tool = { where: string; name: string; text: string };
type Pledge = { title: string; text: string };

/**
 * Un grabado por capítulo, en el mismo orden que `chapters`: el grano con sus
 * raíces, la primera taza, la planta del logo, el café con galleta que sube a
 * los despachos y el brote en el vaso.
 */
const ART = [
  { src: "/brand/emblema-grande.webp", width: 520, height: 773 },
  { src: "/brand/historia/piloto.webp", width: 360, height: 394 },
  { src: "/brand/historia/tallo.webp", width: 420, height: 404 },
  { src: "/brand/historia/hojas.webp", width: 360, height: 417 },
  { src: "/brand/historia/brote.webp", width: 360, height: 434 },
] as const;

const COPY: Copy<{
  eyebrow: string;
  title: string;
  intro: string;
  chaptersLabel: string;
  now: string;
  chapters: [Chapter, Chapter, Chapter, Chapter, Chapter];
  toolsEyebrow: string;
  toolsTitle: string;
  toolsIntro: string;
  tools: Tool[];
  careEyebrow: string;
  careTitle: string;
  careIntro: string;
  care: Pledge[];
  closing: string[];
  closingSmall: string;
  cta: string;
}> = {
  es: {
    eyebrow: "Nuestra historia",
    title: "Todo empezó bajo tierra",
    intro:
      "La cafetería se llama Raíz y Grano por el origen del café. Con el tiempo, el nombre acabó contando también cómo creció: primero la raíz, bajo tierra, y después todo lo demás. Aquí va en cinco capítulos, del primer grano a hoy.",
    chaptersLabel: "La historia en cinco capítulos",
    now: "Ahora",
    chapters: [
      {
        when: "Ene – mar 2025",
        title: "Bajo tierra",
        text: "Antes de servir un solo café hubo tres meses de raíz: elegir el grano y levantar el punto dentro del campus.",
        marks: [{ when: "29 ene 2025", text: "La primera compra de café." }],
      },
      {
        when: "Primavera y verano 2025",
        title: "Los primeros cafés",
        text: "El piloto demostró que el campus quería este café y nos dejó una lección: hace falta equipo.",
        marks: [{ when: "Verano 2025", text: "Paramos hasta septiembre para volver con una segunda persona en la barra." }],
      },
      {
        when: "Sep – dic 2025",
        title: "Abrimos con equipo",
        text: "El 16 de septiembre de 2025 abrimos ya con equipo y, con la cafetería abierta, construimos nuestras propias herramientas: el TPV, la app y el panel.",
        marks: [
          {
            when: "Dic 2025",
            text: "El bono de exámenes: cafés comprados por adelantado para la época de biblioteca. Acabó siendo lo más usado de la app y hoy es el Bono Curso.",
          },
        ],
      },
      {
        when: "Feb – may 2026",
        title: "El café sale de la barra",
        text: "Con la cafetería en marcha, el café empezó a llegar más allá de la cola.",
        marks: [
          { when: "Feb 2026", text: "Pedidos desde la app: pides entre clase y clase y lo recoges en barra." },
          {
            when: "Abr – may 2026",
            text: "Unas prácticas del programa UniUniversidad de la UFV nos llevaron con café y repostería a aulas y despachos. De ahí salió el pedido de profesores.",
          },
        ],
      },
      {
        when: "Curso 2026/27",
        title: "Lo que está brotando",
        text: "El segundo curso completo: la carta nueva, el bono válido todo el curso y el trabajo que no se ve (saber cada día qué servimos, qué desperdiciamos y por qué).",
        now: true,
      },
    ],
    toolsEyebrow: "Lo que hemos construido",
    toolsTitle: "Herramientas hechas en el campus, para el campus",
    toolsIntro:
      "Con el equipo ya formado, a lo largo del primer curso construimos nuestras propias herramientas, con la cafetería abierta. No las compramos hechas: las diseñamos para cómo funciona un campus.",
    tools: [
      { where: "En la barra", name: "El TPV", text: "Cobra, emite el ticket, envía el recibo por email y mantiene la carta al día." },
      { where: "En el móvil", name: "La app", text: "Pedido anticipado para saltarse la cola, granos, retos, cuestionarios sobre el origen del café y el Bono Curso." },
      { where: "En el despacho", name: "El pedido de profesores", text: "Combos de reunión con aula, hora y departamento. Ya está construido; el reparto se abrirá más adelante, y de momento hay lista de espera." },
      { where: "Detrás", name: "El panel", text: "La receta de cada producto, los proveedores y las facturas, leídas con ayuda de IA. Es la parte que no se ve y la que nos deja decidir con datos." },
    ],
    careEyebrow: "Este curso",
    careTitle: "Lo que nos comprometemos a cuidar",
    careIntro: "No son promesas de crecimiento, sino de oficio: cosas concretas que se podrán comprobar al final del curso.",
    care: [
      { title: "Saber qué se desperdicia y por qué", text: "Registrar la merma el mismo día en que ocurre, para desperdiciar menos." },
      { title: "Que cada producto lleve a su papel", text: "De cualquier producto se podrá llegar a su receta, a su proveedor y a sus alérgenos." },
      { title: "Que el reparto a despachos sea un servicio", text: "Lo que en primavera funcionó cinco semanas tiene que poder funcionar un curso entero." },
      { title: "Seguir colaborando con la Universidad", text: "UniUniversidad nos enseñó que un programa de la Universidad puede abrir un servicio nuevo en la cafetería. Queremos seguir por ese camino." },
    ],
    closing: [
      "El piloto demostró que el campus quería este café.",
      "El primer curso, que podíamos sostenerlo e inventar servicios con la comunidad.",
      "El segundo tiene que demostrar algo más difícil: que sabemos qué servimos, qué desperdiciamos y por qué.",
    ],
    closingSmall: "Lo que aprendemos aquí puede servir también a otras cafeterías pequeñas. Es una razón más para hacerlo bien en casa primero.",
    cta: "Pásate a probarlo",
  },
  en: {
    eyebrow: "Our story",
    title: "It all started underground",
    intro:
      "The café is called Raíz y Grano (root and bean) after the origin of coffee. Over time, the name came to describe how it grew, too: roots first, underground, and then everything else. Here it is in five chapters, from the first bean to today.",
    chaptersLabel: "Our story in five chapters",
    now: "Now",
    chapters: [
      {
        when: "Jan – Mar 2025",
        title: "Underground",
        text: "Before we served a single coffee, there were three months of roots: choosing the beans and setting up our spot on campus.",
        marks: [{ when: "29 Jan 2025", text: "Our first coffee purchase." }],
      },
      {
        when: "Spring and summer 2025",
        title: "The first coffees",
        text: "The pilot showed that the campus wanted this coffee, and taught us a lesson: you need a team.",
        marks: [{ when: "Summer 2025", text: "We paused until September to come back with a second person behind the bar." }],
      },
      {
        when: "Sep – Dec 2025",
        title: "Opening with a team",
        text: "On 16 September 2025 we opened, now with a team, and built our own tools while the café was open: the till, the app and the dashboard.",
        marks: [
          {
            when: "Dec 2025",
            text: "The exam pass: coffees bought in advance for library season. It became the most used feature of the app, and today it’s the Term Pass.",
          },
        ],
      },
      {
        when: "Feb – May 2026",
        title: "Coffee beyond the bar",
        text: "With the café up and running, our coffee started reaching people beyond the queue.",
        marks: [
          { when: "Feb 2026", text: "Ordering from the app: order between classes and pick it up at the bar." },
          {
            when: "Apr – May 2026",
            text: "An internship through UFV’s UniUniversidad programme took our coffee and pastries to classrooms and offices. That became the teacher orders.",
          },
        ],
      },
      {
        when: "Year 2026/27",
        title: "What’s sprouting now",
        text: "Our second full year: a new menu, a pass valid all year and the work nobody sees (knowing every day what we serve, what we waste and why).",
        now: true,
      },
    ],
    toolsEyebrow: "What we built",
    toolsTitle: "Tools made on campus, for campus",
    toolsIntro:
      "Once the team was in place, over our first full year we built our own tools, with the café open. We didn’t buy them off the shelf: we designed them for the way a campus works.",
    tools: [
      { where: "At the bar", name: "The till", text: "Takes payments, prints the ticket, emails the receipt and keeps the menu up to date." },
      { where: "On your phone", name: "The app", text: "Order ahead to skip the queue, beans, challenges, quizzes about coffee origins and the Term Pass." },
      { where: "In the office", name: "Teacher orders", text: "Meeting combos with room, time and department. It’s already built; deliveries will open later, and for now there’s a waiting list." },
      { where: "Behind it all", name: "The dashboard", text: "Each product’s recipe, suppliers and invoices, read with the help of AI. The part you don’t see, and the one that lets us decide with data." },
    ],
    careEyebrow: "This year",
    careTitle: "What we commit to looking after",
    careIntro: "Not growth promises, but craft: concrete things you’ll be able to check at the end of the year.",
    care: [
      { title: "Knowing what we waste and why", text: "Recording waste the same day it happens, so we waste less." },
      { title: "Every product traceable", text: "From any product you’ll be able to get to its recipe, its supplier and its allergens." },
      { title: "Office delivery as a real service", text: "What worked for five weeks in spring has to work for a whole year." },
      { title: "Keep working with the University", text: "UniUniversidad showed us that a University programme can open a new service at the café. We want to keep going that way." },
    ],
    closing: [
      "The pilot showed that the campus wanted this coffee.",
      "The first year, that we could sustain it and invent services with the community.",
      "The second has to prove something harder: that we know what we serve, what we waste and why.",
    ],
    closingSmall: "What we learn here could help other small cafés too. One more reason to get it right at home first.",
    cta: "Come and try it",
  },
  fr: {
    eyebrow: "Notre histoire",
    title: "Tout a commencé sous terre",
    intro:
      "Le café s’appelle Raíz y Grano (racine et grain) en référence à l’origine du café. Avec le temps, le nom a fini par raconter aussi sa croissance : d’abord des racines, sous terre, puis tout le reste. Voici l’histoire en cinq chapitres, du premier grain à aujourd’hui.",
    chaptersLabel: "L’histoire en cinq chapitres",
    now: "Maintenant",
    chapters: [
      {
        when: "Janv. – mars 2025",
        title: "Sous terre",
        text: "Avant de servir le moindre café, il y a eu trois mois de racines : choisir le grain et installer notre point de vente sur le campus.",
        marks: [{ when: "29 janv. 2025", text: "Notre premier achat de café." }],
      },
      {
        when: "Printemps et été 2025",
        title: "Les premiers cafés",
        text: "Le pilote a montré que le campus voulait ce café et nous a laissé une leçon : il faut une équipe.",
        marks: [{ when: "Été 2025", text: "Une pause jusqu’en septembre, pour revenir avec une deuxième personne au comptoir." }],
      },
      {
        when: "Sept. – déc. 2025",
        title: "L’ouverture, en équipe",
        text: "Le 16 septembre 2025, nous avons ouvert avec une équipe et, café ouvert, nous avons construit nos propres outils : la caisse, l’app et le tableau de bord.",
        marks: [
          {
            when: "Déc. 2025",
            text: "Le bono d’examens : des cafés achetés d’avance pour la saison de la bibliothèque. C’est devenu la fonction la plus utilisée de l’app ; aujourd’hui, c’est le Bono Curso.",
          },
        ],
      },
      {
        when: "Févr. – mai 2026",
        title: "Le café sort du comptoir",
        text: "Une fois le café bien lancé, nos boissons ont commencé à aller plus loin que la file d’attente.",
        marks: [
          { when: "Févr. 2026", text: "Commander sur l’app : on commande entre deux cours et on récupère au comptoir." },
          {
            when: "Avr. – mai 2026",
            text: "Un stage du programme UniUniversidad de l’UFV nous a permis de porter café et pâtisseries en salle et au bureau. C’est devenu la commande enseignants.",
          },
        ],
      },
      {
        when: "Année 2026/27",
        title: "Ce qui est en train de pousser",
        text: "La deuxième année complète : une nouvelle carte, un bono valable toute l’année et le travail invisible (savoir chaque jour ce que nous servons, ce que nous gaspillons et pourquoi).",
        now: true,
      },
    ],
    toolsEyebrow: "Ce que nous avons construit",
    toolsTitle: "Des outils faits sur le campus, pour le campus",
    toolsIntro:
      "Une fois l’équipe en place, pendant notre première année complète, nous avons construit nos propres outils, café ouvert. Nous ne les avons pas achetés tout faits : nous les avons conçus pour la vie d’un campus.",
    tools: [
      { where: "Au comptoir", name: "La caisse", text: "Encaisse, édite le ticket, envoie le reçu par e-mail et tient la carte à jour." },
      { where: "Sur le téléphone", name: "L’app", text: "Commande anticipée, grains, défis, quiz sur l’origine du café et le Bono Curso." },
      { where: "Au bureau", name: "La commande enseignants", text: "Des formules de réunion avec salle, heure et département. C’est déjà construit ; les livraisons ouvriront plus tard, et en attendant il y a une liste d’attente." },
      { where: "En coulisses", name: "Le tableau de bord", text: "La recette de chaque produit, les fournisseurs et les factures, lues avec l’aide de l’IA. La partie invisible, qui nous permet de décider avec des données." },
    ],
    careEyebrow: "Cette année",
    careTitle: "Ce que nous nous engageons à soigner",
    careIntro: "Pas des promesses de croissance, mais de métier : des choses concrètes que l’on pourra vérifier en fin d’année.",
    care: [
      { title: "Savoir ce qui se gaspille et pourquoi", text: "Enregistrer les pertes le jour même, pour gaspiller moins." },
      { title: "Chaque produit traçable", text: "De chaque produit, on pourra remonter à sa recette, à son fournisseur et à ses allergènes." },
      { title: "La livraison au bureau, un vrai service", text: "Ce qui a marché cinq semaines au printemps doit pouvoir marcher toute l’année." },
      { title: "Continuer avec l’Université", text: "UniUniversidad nous a appris qu’un programme de l’Université peut ouvrir un nouveau service au café. Nous voulons continuer dans cette voie." },
    ],
    closing: [
      "Le pilote a montré que le campus voulait ce café.",
      "La première année, que nous pouvions le faire durer et inventer des services avec la communauté.",
      "La deuxième doit prouver quelque chose de plus difficile : que nous savons ce que nous servons, ce que nous gaspillons et pourquoi.",
    ],
    closingSmall: "Ce que nous apprenons ici peut aussi servir à d’autres petits cafés. Une raison de plus de bien faire chez nous d’abord.",
    cta: "Venez goûter",
  },
};

export default function Historia() {
  const c = useCopy(COPY);

  return (
    <>
      <section aria-labelledby="titulo-historia" className="pt-8 sm:pt-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeader as="h1" id="titulo-historia" eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
          </div>
        </Container>
      </section>

      {/* Del primer grano a hoy, en orden: cada capítulo con su grabado y un
          tallo que los une (centrado en el móvil, bajo los grabados después). */}
      <section aria-label={c.chaptersLabel} className="pt-10 sm:pt-14">
        <Container>
          <ol className="mx-auto max-w-4xl">
            {c.chapters.map((chapter, i) => {
              const art = ART[i];
              return (
                <li key={chapter.title}>
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-auto block h-9 w-0 border-l-2 border-dashed border-sage/35 sm:mx-0 sm:ml-[calc(6.5rem_-_1px)]"
                    />
                  )}
                  <article className="card overflow-hidden sm:grid sm:grid-cols-[13rem_1fr]">
                    <div
                      className={cx(
                        "relative grid place-items-center px-6 py-6 sm:pb-8 sm:pt-12",
                        i === 0 ? "bg-kraft" : chapter.now ? "bg-clay-light/70" : "bg-[#f1e9db]",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="display absolute left-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full bg-paper-light/85 text-[15px] text-forest shadow-[inset_0_0_0_1px_rgba(39,51,46,0.08)]"
                      >
                        {i + 1}
                      </span>
                      <img
                        src={art.src}
                        alt=""
                        aria-hidden="true"
                        width={art.width}
                        height={art.height}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="h-[128px] w-auto sm:h-[150px]"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="eyebrow">{chapter.when}</span>
                        {chapter.now && <span className="pill pill-cream min-h-0 py-0.5 text-[12px]">{c.now}</span>}
                      </p>
                      <h2 className="display mt-1.5 text-[1.5rem] leading-tight text-forest sm:text-[1.65rem]">{chapter.title}</h2>
                      <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{chapter.text}</p>
                      {chapter.marks && (
                        <ul className="mt-4 space-y-3 border-l-2 border-sage-light pl-4">
                          {chapter.marks.map((mark) => (
                            <li key={mark.when}>
                              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-forest-light">{mark.when}</p>
                              <p className="mt-0.5 text-[15px] leading-relaxed text-ink">{mark.text}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="titulo-herramientas" className="pt-20 sm:pt-24">
        <Container>
          <SectionHeader id="titulo-herramientas" eyebrow={c.toolsEyebrow} title={c.toolsTitle} intro={c.toolsIntro} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.tools.map((tool, i) => (
              <li key={tool.name} className={cx("p-6", i === 3 ? "card-ink" : "card")}>
                <p className={cx("eyebrow", i === 3 && "eyebrow-cream")}>{tool.where}</p>
                <h3 className={cx("display mt-1.5 text-[1.35rem] leading-tight", i === 3 ? "text-paper" : "text-forest")}>{tool.name}</h3>
                <p className={cx("mt-2 text-[15px] leading-relaxed", i === 3 ? "text-paper/80" : "text-ink-soft")}>{tool.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="titulo-cuidar" className="band-kraft mt-20 py-16 sm:mt-24 sm:py-20">
        <Container>
          <SectionHeader id="titulo-cuidar" eyebrow={c.careEyebrow} title={c.careTitle} intro={c.careIntro} />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {c.care.map((item, i) => (
              <li key={item.title} className="card flex gap-4 p-6">
                <span className="display grid h-11 w-11 shrink-0 place-items-center rounded-full bg-clay-light text-xl text-clay-dark" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="display text-[1.3rem] leading-tight text-forest">{item.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-label={c.closing[0]} className="pt-20 sm:pt-24">
        <Container>
          <figure className="card-leaf mx-auto max-w-4xl p-8 sm:p-12">
            <Quote className="h-8 w-8 text-sage-light" aria-hidden="true" />
            <blockquote className="display mt-4 space-y-3 text-[1.5rem] leading-snug text-paper sm:text-[1.85rem]">
              {c.closing.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </blockquote>
            <figcaption className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-paper/80">{c.closingSmall}</figcaption>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/#visitanos" variant="cream" arrow>
                {c.cta}
              </ButtonLink>
              <ButtonLink to={SITE.app.home} variant="outline-cream">
                app.raizygrano.com
              </ButtonLink>
            </div>
          </figure>
        </Container>
      </section>
    </>
  );
}
