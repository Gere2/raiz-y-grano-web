import { Quote } from "lucide-react";
import { useCopy, type Copy } from "@/i18n";
import { ButtonLink, Container, SectionHeader, cx } from "@/components/ui";
import { SITE } from "@/content/site";

type Milestone = { when: string; title: string; text: string; underground?: boolean; now?: boolean };
type Tool = { where: string; name: string; text: string };
type Pledge = { title: string; text: string };

const COPY: Copy<{
  eyebrow: string;
  title: string;
  intro: string;
  plantAlt: string;
  timelineLabel: string;
  soil: string;
  milestones: Milestone[];
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
      "La cafetería se llama Raíz y Grano por el origen del café. Pero el nombre acabó describiendo también cómo creció: tres meses de raíz (comprar el grano, levantar el punto dentro del campus) antes de que asomara nada por encima de la tierra. Cada hoja de esta planta es un servicio que nació en el campus.",
    plantAlt:
      "El recorrido de la cafetería dibujado como una planta, sin escala: bajo tierra, el grano y sus raíces; el tallo asoma con el piloto, se detiene en verano y crece desde la apertura; tres hojas y, arriba, una yema.",
    timelineLabel: "Hitos, del más reciente al primero",
    soil: "Bajo tierra",
    milestones: [
      {
        when: "Curso 2026/27",
        title: "Lo que está brotando",
        text: "El segundo curso completo: la carta nueva, el bono válido todo el curso y el trabajo que no se ve, saber cada día qué servimos, qué desperdiciamos y por qué.",
        now: true,
      },
      {
        when: "Abr – may 2026",
        title: "El café sube a los despachos",
        text: "Unas prácticas del programa UniUniversidad de la UFV nos permitieron llevar café y repostería a aulas y despachos. De ahí salió el pedido de profesores.",
      },
      {
        when: "Feb 2026",
        title: "Pedidos desde la app",
        text: "Sin colas en la hora punta: pides entre clase y clase y lo recoges en barra.",
      },
      {
        when: "Dic 2025",
        title: "El bono de exámenes",
        text: "Cafés comprados por adelantado para la época de biblioteca. Acabó siendo lo más usado de la app y hoy es el Bono Curso.",
      },
      {
        when: "16 sep 2025",
        title: "Apertura oficial",
        text: "Abrimos ya con equipo y, a lo largo del curso, construimos el TPV, la app y el panel con la cafetería abierta.",
      },
      {
        when: "Verano 2025",
        title: "Una pausa",
        text: "Paramos hasta septiembre para volver con una segunda persona en la barra.",
      },
      {
        when: "Primavera 2025",
        title: "El piloto",
        text: "Los primeros cafés del campus, y una lección: hace falta equipo.",
      },
      {
        when: "Ene – mar 2025",
        title: "El montaje",
        text: "Se compra el grano y se levanta el punto dentro del campus. La primera compra de café, el 29 de enero de 2025.",
        underground: true,
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
      "The café is called Raíz y Grano (root and bean) after the origin of coffee. But the name ended up describing how it grew, too: three months of roots (buying the beans, setting up on campus) before anything showed above ground. Each leaf on this plant is a service that was born on campus.",
    plantAlt:
      "The café’s journey drawn as a plant, not to scale: underground, the bean and its roots; the stem appears with the pilot, pauses in summer and grows from the opening; three leaves and, at the top, a bud.",
    timelineLabel: "Milestones, from the latest to the first",
    soil: "Underground",
    milestones: [
      {
        when: "Year 2026/27",
        title: "What’s sprouting now",
        text: "Our second full year: a new menu, a pass valid all year and the work nobody sees, knowing every day what we serve, what we waste and why.",
        now: true,
      },
      {
        when: "Apr – May 2026",
        title: "Coffee goes up to the offices",
        text: "An internship through UFV’s UniUniversidad programme let us take coffee and pastries to classrooms and offices. That became the teacher orders.",
      },
      { when: "Feb 2026", title: "Ordering from the app", text: "No queues at rush hour: order between classes and pick it up at the bar." },
      {
        when: "Dec 2025",
        title: "The exam pass",
        text: "Coffees bought in advance for library season. It became the most used feature of the app, and today it’s the Term Pass.",
      },
      {
        when: "16 Sep 2025",
        title: "Official opening",
        text: "We opened with a team and, over the year, built the till, the app and the dashboard while the café was open.",
      },
      { when: "Summer 2025", title: "A pause", text: "We stopped until September to come back with a second person behind the bar." },
      { when: "Spring 2025", title: "The pilot", text: "The first coffees on campus, and a lesson: you need a team." },
      {
        when: "Jan – Mar 2025",
        title: "Setting up",
        text: "Buying the beans and setting up our spot on campus. The first coffee purchase, on 29 January 2025.",
        underground: true,
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
      "Le café s’appelle Raíz y Grano (racine et grain) en référence à l’origine du café. Mais le nom a fini par décrire aussi sa croissance : trois mois de racines (acheter le grain, installer le point de vente sur le campus) avant que rien n’apparaisse à la surface. Chaque feuille de cette plante est un service né sur le campus.",
    plantAlt:
      "Le parcours du café dessiné comme une plante, sans échelle : sous terre, le grain et ses racines ; la tige sort avec le pilote, s’arrête en été et grandit depuis l’ouverture ; trois feuilles et, en haut, un bourgeon.",
    timelineLabel: "Les étapes, de la plus récente à la première",
    soil: "Sous terre",
    milestones: [
      {
        when: "Année 2026/27",
        title: "Ce qui est en train de pousser",
        text: "La deuxième année complète : une nouvelle carte, un bono valable toute l’année et le travail invisible, savoir chaque jour ce que nous servons, ce que nous gaspillons et pourquoi.",
        now: true,
      },
      {
        when: "Avr. – mai 2026",
        title: "Le café monte dans les bureaux",
        text: "Un stage du programme UniUniversidad de l’UFV nous a permis de porter café et pâtisseries en salle et au bureau. C’est devenu la commande enseignants.",
      },
      { when: "Févr. 2026", title: "Commander sur l’app", text: "Plus de file à l’heure de pointe : commandez entre deux cours et récupérez au comptoir." },
      {
        when: "Déc. 2025",
        title: "Le bono d’examens",
        text: "Des cafés achetés d’avance pour la saison de la bibliothèque. C’est devenu la fonction la plus utilisée de l’app ; aujourd’hui, c’est le Bono Curso.",
      },
      {
        when: "16 sept. 2025",
        title: "Ouverture officielle",
        text: "Nous avons ouvert avec une équipe et, au fil de l’année, construit la caisse, l’app et le tableau de bord, café ouvert.",
      },
      { when: "Été 2025", title: "Une pause", text: "Nous nous sommes arrêtés jusqu’en septembre pour revenir avec une deuxième personne au comptoir." },
      { when: "Printemps 2025", title: "Le pilote", text: "Les premiers cafés du campus, et une leçon : il faut une équipe." },
      {
        when: "Janv. – mars 2025",
        title: "L’installation",
        text: "On achète le grain et on installe le point de vente sur le campus. Premier achat de café le 29 janvier 2025.",
        underground: true,
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
  const above = c.milestones.filter((m) => !m.underground);
  const below = c.milestones.filter((m) => m.underground);

  return (
    <>
      <section aria-labelledby="titulo-historia" className="pt-8 sm:pt-12">
        <Container>
          <SectionHeader as="h1" id="titulo-historia" eyebrow={c.eyebrow} title={c.title} intro={c.intro} />
        </Container>
      </section>

      <section aria-label={c.timelineLabel} className="pt-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <figure className="card sticky top-[96px] overflow-hidden p-0">
                <img
                  src="/brand/planta.svg"
                  alt={c.plantAlt}
                  width={432}
                  height={702}
                  className="mx-auto block h-auto max-h-[70vh] w-auto"
                />
              </figure>
            </div>
            <ol className="lg:col-span-7">
              {above.map((m) => (
                <li key={m.when} className="relative border-l-2 border-sage-light pb-8 pl-7 last:pb-4">
                  <span
                    className={cx(
                      "absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2",
                      m.now ? "border-clay bg-clay-light" : "border-forest bg-paper-light",
                    )}
                    aria-hidden="true"
                  />
                  <p className="eyebrow">{m.when}</p>
                  <h2 className="display mt-1 text-[1.45rem] leading-tight text-forest">{m.title}</h2>
                  <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">{m.text}</p>
                </li>
              ))}
              <li className="relative -ml-px mt-2 rounded-3xl border border-kraft-dark bg-kraft/70 p-6 pl-7" aria-label={c.soil}>
                <p className="eyebrow text-ink-muted">{c.soil}</p>
                {below.map((m) => (
                  <div key={m.when} className="mt-3">
                    <p className="eyebrow">{m.when}</p>
                    <h2 className="display mt-1 text-[1.45rem] leading-tight text-forest">{m.title}</h2>
                    <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">{m.text}</p>
                  </div>
                ))}
              </li>
            </ol>
          </div>
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
