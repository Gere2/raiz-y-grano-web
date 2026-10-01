import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Coffee,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  Sprout,
  Wheat,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { useCopy, useLang, type Copy } from "@/i18n";
import { SITE, formatShift } from "@/content/site";
import { FAMILIES } from "@/content/carta";
import { waitlistMailto } from "@/content/waitlist";
import { BonoCard } from "@/components/Bono";
import { Recomendador } from "@/components/Recomendador";
import { RECOMENDADOR_COPY } from "@/pages/RecomendadorPage";
import { FamilyCard } from "@/components/Carta";
import { CampusSketch } from "@/components/CampusSketch";
import { ButtonLink, Container, Eyebrow, IconTile, SectionHeader, TextLink } from "@/components/ui";

/** React 18 no conoce `fetchPriority`; en minúsculas llega tal cual al HTML. */
const HIGH_PRIORITY = { fetchpriority: "high" } as Record<string, string>;

type Door = { eyebrow: string; title: string; text: string; link: string };

type HomeCopy = {
  hero: { eyebrow: string; title: string; lead: string; order: string; menu: string; picker: string; hours: string; milk: string; combo: string };
  soon: string;
  doors: { eyebrow: string; title: string; intro: string; bar: Door; phone: Door; office: Door };
  app: { eyebrow: string; title: string; points: string[]; cta: string; install: string };
  carta: { eyebrow: string; title: string; intro: string; notes: string[]; cta: string };
  teachers: { eyebrow: string; title: string; text: string; steps: string[]; how: string; order: string };
  story: { eyebrow: string; title: string; text: string; milestones: [string, string][]; cta: string };
  origin: { eyebrow: string; title: string; text: string; chips: string[]; quiz: string; cta: string };
  visit: {
    eyebrow: string;
    title: string;
    intro: string;
    where: string;
    whereText: string;
    directions: string;
    when: string;
    weekdays: string;
    morning: string;
    afternoon: string;
    weekend: string;
    appHours: string;
    write: string;
  };
};

const COPY: Copy<HomeCopy> = {
  es: {
    hero: {
      eyebrow: "Café de especialidad · Campus UFV",
      title: "Café de especialidad, entre clase y clase",
      lead: "Estamos en el campus de la Universidad Francisco de Vitoria, entre el Edificio H y el CRAI. Pide desde la app, sáltate la cola y recógelo en barra.",
      order: "Pedir en la app",
      menu: "Ver la carta",
      picker: "¿No sabes qué tomar? Te ayudamos a elegir",
      hours: "Lunes a viernes · 8:00 – 19:00",
      milk: "Leche vegetal sin suplemento",
      combo: "Menú desayuno o merienda +2 €",
    },
    soon: "Próximamente",
    doors: {
      eyebrow: "Cómo pedir",
      title: "En la barra, en el móvil y, pronto, en tu despacho",
      intro: "Hoy puedes pedir en la barra o desde la app. El servicio para reuniones de departamento está en camino.",
      bar: {
        eyebrow: "En la barra",
        title: "Pásate entre clases",
        text: "Café de especialidad, matcha, tés y repostería artesanal, preparados al momento. Añade un bizcocho de zanahoria a cualquier bebida y es menú desayuno o merienda por 2 € más.",
        link: "Ver la carta",
      },
      phone: {
        eyebrow: "En el móvil",
        title: "Pide sin hacer cola",
        text: "Elige tu bebida en la app, paga en segundos y recógela en barra cuando esté lista. Con cada compra sumas granos para canjear.",
        link: "Conoce la app",
      },
      office: {
        eyebrow: "En tu despacho",
        title: "Café para tu reunión",
        text: "Estamos preparando combos de reunión con entrega en el aula o el despacho. Todavía no está disponible: apúntate a la lista de espera y te avisamos cuando empiece.",
        link: "Lista de espera",
      },
    },
    app: {
      eyebrow: "La app",
      title: "Tu café, en el bolsillo",
      points: [
        "Pide desde el móvil y recoge en barra sin hacer cola.",
        "Acumula granos con cada compra y canjéalos por cafés, bollería y más recompensas.",
        "Misiones, insignias y cuestionarios sobre el origen del café.",
        "Se instala desde el navegador: no hace falta tienda de apps.",
      ],
      cta: "Abrir la app",
      install: "Cómo instalarla",
    },
    carta: {
      eyebrow: "La carta 2026/27",
      title: "Lo que servimos este curso",
      intro: "Café de especialidad en el centro y, alrededor, matcha, bebidas frías, tés y repostería artesanal. Nueve familias para las distintas horas del campus: el café de antes de clase, la pausa en la biblioteca, la reunión de departamento.",
      notes: ["Leche vegetal sin suplemento", "Tés y dulces de temporada", "¿Alergias? Pregúntanos antes de pedir"],
      cta: "Ver la carta completa",
    },
    teachers: {
      eyebrow: "Profesorado y departamentos",
      title: "¿Reunión de departamento? Pronto te lo llevaremos.",
      text: "Estamos preparando combos de reunión con bebida, snack y repostería, elegidos hueco a hueco, con entrega en el aula o el despacho a la hora que digas. Todavía no está disponible: si te interesa, apúntate a la lista de espera y serás de los primeros en saberlo.",
      steps: ["Te apuntas a la lista de espera con un correo.", "Te avisamos en cuanto el servicio arranque.", "Pides desde la app: aula o despacho, hora y departamento."],
      how: "Cómo funcionará",
      order: "Apuntarme a la lista de espera",
    },
    story: {
      eyebrow: "Nuestra historia",
      title: "Todo empezó bajo tierra",
      text: "La cafetería se llama Raíz y Grano por el origen del café. Pero el nombre acabó describiendo también cómo creció: tres meses de raíz (comprar el grano, levantar el punto dentro del campus) antes de que asomara nada por encima de la tierra.",
      milestones: [
        ["Primavera 2025", "Los primeros cafés del campus"],
        ["16 sep 2025", "Apertura oficial, ya con equipo"],
        ["Curso 2026/27", "El segundo curso completo"],
      ],
      cta: "Leer la historia",
    },
    origin: {
      eyebrow: "Origen",
      title: "Del cafetal a tu taza",
      text: "Nuestro café es de Amor Perfecto: café de especialidad colombiano que se tuesta en origen, cerca de donde se cultiva, trabajando directamente con quienes lo cultivan.",
      chips: ["Colombia", "Tostado en origen", "Proceso lavado", "Frutos rojos, cítrico y chocolate"],
      quiz: "En la app hay cuestionarios sobre el origen del café, y cada uno te da granos.",
      cta: "Conoce el origen",
    },
    visit: {
      eyebrow: "Visítanos",
      title: "Te esperamos en el campus",
      intro: "Nuestro punto está en el paseo entre el Edificio H (San Agustín de Hipona) y el CRAI.",
      where: "Dónde",
      whereText: "Entre el Edificio H y el CRAI",
      directions: "Cómo llegar",
      when: "Cuándo",
      weekdays: "Lunes a viernes",
      morning: "Mañana",
      afternoon: "Tarde",
      weekend: "Sábado y domingo, cerrado. En las vacaciones del campus el horario cambia.",
      appHours: "Los pedidos por la app siguen el mismo horario.",
      write: "Escríbenos",
    },
  },
  en: {
    hero: {
      eyebrow: "Specialty coffee · UFV campus",
      title: "Specialty coffee, between classes",
      lead: "We’re on the Universidad Francisco de Vitoria campus, between Building H and the CRAI library. Order in the app, skip the queue and pick it up at the bar.",
      order: "Order in the app",
      menu: "See the menu",
      picker: "Not sure what to get? We’ll help you choose",
      hours: "Monday to Friday · 8:00 – 19:00",
      milk: "Plant milk at no extra charge",
      combo: "Breakfast or afternoon menu +€2",
    },
    soon: "Coming soon",
    doors: {
      eyebrow: "How to order",
      title: "At the bar, on your phone and, soon, in your office",
      intro: "Today you can order at the bar or in the app. The service for department meetings is on its way.",
      bar: {
        eyebrow: "At the bar",
        title: "Drop by between classes",
        text: "Specialty coffee, matcha, teas and artisan bakery, made on the spot. Add a slice of carrot cake to any drink and it becomes a breakfast or afternoon menu for €2 more.",
        link: "See the menu",
      },
      phone: {
        eyebrow: "On your phone",
        title: "Order without queuing",
        text: "Choose your drink in the app, pay in seconds and pick it up at the bar when it’s ready. Every purchase earns you beans to redeem.",
        link: "Discover the app",
      },
      office: {
        eyebrow: "In your office",
        title: "Coffee for your meeting",
        text: "We’re preparing meeting combos delivered to your classroom or office. It isn’t available yet: join the waiting list and we’ll let you know when it starts.",
        link: "Waiting list",
      },
    },
    app: {
      eyebrow: "The app",
      title: "Your coffee, in your pocket",
      points: [
        "Order from your phone and pick up at the bar without queuing.",
        "Earn beans with every purchase and redeem them for coffees, pastries and more.",
        "Missions, badges and quizzes about where coffee comes from.",
        "Install it from your browser: no app store needed.",
      ],
      cta: "Open the app",
      install: "How to install it",
    },
    carta: {
      eyebrow: "Menu 2026/27",
      title: "What we’re serving this year",
      intro: "Specialty coffee at the centre and, around it, matcha, iced drinks, teas and artisan bakery. Nine families for the different moments on campus: the coffee before class, the library break, the department meeting.",
      notes: ["Plant milk at no extra charge", "Seasonal teas and treats", "Allergies? Ask us before you order"],
      cta: "See the full menu",
    },
    teachers: {
      eyebrow: "Faculty and departments",
      title: "Department meeting? Soon we’ll bring it over.",
      text: "We’re preparing meeting combos with a drink, a snack and something sweet, chosen slot by slot, delivered to your classroom or office at the time you choose. It isn’t available yet: if you’re interested, join the waiting list and you’ll be among the first to know.",
      steps: ["Join the waiting list with an email.", "We’ll let you know as soon as the service starts.", "Order in the app: room, time and department."],
      how: "How it will work",
      order: "Join the waiting list",
    },
    story: {
      eyebrow: "Our story",
      title: "It all started underground",
      text: "The café is called Raíz y Grano (root and bean) after the origin of coffee. But the name ended up describing how it grew, too: three months of roots (buying the beans, setting up on campus) before anything showed above ground.",
      milestones: [
        ["Spring 2025", "The first coffees on campus"],
        ["16 Sep 2025", "Official opening, now with a team"],
        ["Year 2026/27", "Our second full academic year"],
      ],
      cta: "Read our story",
    },
    origin: {
      eyebrow: "Origin",
      title: "From the coffee farm to your cup",
      text: "Our coffee comes from Amor Perfecto: Colombian specialty coffee roasted at origin, close to where it is grown, working directly with the people who grow it.",
      chips: ["Colombia", "Roasted at origin", "Washed process", "Red berries, citrus and chocolate"],
      quiz: "The app has quizzes about where coffee comes from, and each one earns you beans.",
      cta: "Discover the origin",
    },
    visit: {
      eyebrow: "Visit us",
      title: "See you on campus",
      intro: "You’ll find us on the walkway between Building H (San Agustín de Hipona) and the CRAI library.",
      where: "Where",
      whereText: "Between Building H and the CRAI",
      directions: "Get directions",
      when: "When",
      weekdays: "Monday to Friday",
      morning: "Morning",
      afternoon: "Afternoon",
      weekend: "Closed on Saturdays and Sundays. Hours change during campus holidays.",
      appHours: "App orders follow the same hours.",
      write: "Write to us",
    },
  },
  fr: {
    hero: {
      eyebrow: "Café de spécialité · Campus UFV",
      title: "Du café de spécialité, entre deux cours",
      lead: "Nous sommes sur le campus de l’Universidad Francisco de Vitoria, entre le bâtiment H et le CRAI. Commandez sur l’app, évitez la file et récupérez votre boisson au comptoir.",
      order: "Commander sur l’app",
      menu: "Voir la carte",
      picker: "Vous hésitez ? On vous aide à choisir",
      hours: "Du lundi au vendredi · 8:00 – 19:00",
      milk: "Lait végétal sans supplément",
      combo: "Formule petit-déjeuner ou goûter +2 €",
    },
    soon: "Bientôt",
    doors: {
      eyebrow: "Comment commander",
      title: "Au comptoir, sur votre téléphone et, bientôt, dans votre bureau",
      intro: "Aujourd’hui, vous pouvez commander au comptoir ou sur l’app. Le service pour les réunions de département arrive bientôt.",
      bar: {
        eyebrow: "Au comptoir",
        title: "Passez entre deux cours",
        text: "Café de spécialité, matcha, thés et pâtisserie artisanale, préparés sur le moment. Ajoutez un gâteau à la carotte à n’importe quelle boisson : c’est la formule petit-déjeuner ou goûter, pour 2 € de plus.",
        link: "Voir la carte",
      },
      phone: {
        eyebrow: "Sur votre téléphone",
        title: "Commandez sans attendre",
        text: "Choisissez votre boisson dans l’app, payez en quelques secondes et récupérez-la au comptoir quand elle est prête. Chaque achat vous rapporte des grains.",
        link: "Découvrir l’app",
      },
      office: {
        eyebrow: "Dans votre bureau",
        title: "Du café pour votre réunion",
        text: "Nous préparons des formules de réunion livrées en salle ou au bureau. Ce n’est pas encore disponible : inscrivez-vous sur la liste d’attente et nous vous préviendrons au lancement.",
        link: "Liste d’attente",
      },
    },
    app: {
      eyebrow: "L’app",
      title: "Votre café, dans la poche",
      points: [
        "Commandez depuis votre téléphone et récupérez au comptoir sans attendre.",
        "Cumulez des grains à chaque achat et échangez-les contre des cafés, des pâtisseries et d’autres récompenses.",
        "Missions, badges et quiz sur l’origine du café.",
        "Elle s’installe depuis le navigateur : pas besoin de store.",
      ],
      cta: "Ouvrir l’app",
      install: "Comment l’installer",
    },
    carta: {
      eyebrow: "La carte 2026/27",
      title: "Ce que nous servons cette année",
      intro: "Le café de spécialité au centre et, autour, le matcha, les boissons glacées, les thés et la pâtisserie artisanale. Neuf familles pour les différents moments du campus : le café avant le cours, la pause à la bibliothèque, la réunion de département.",
      notes: ["Lait végétal sans supplément", "Thés et douceurs de saison", "Allergies ? Demandez-nous avant de commander"],
      cta: "Voir toute la carte",
    },
    teachers: {
      eyebrow: "Enseignants et départements",
      title: "Une réunion de département ? Bientôt, on vous l’apporte.",
      text: "Nous préparons des formules de réunion avec boisson, snack et pâtisserie, choisies créneau par créneau, livrées en salle ou au bureau à l’heure de votre choix. Pas encore disponible : si cela vous intéresse, inscrivez-vous sur la liste d’attente et vous serez parmi les premiers informés.",
      steps: ["Inscrivez-vous sur la liste d’attente par e-mail.", "Nous vous prévenons dès le lancement du service.", "Commandez sur l’app : salle, heure et département."],
      how: "Comment ça marchera",
      order: "M’inscrire sur la liste d’attente",
    },
    story: {
      eyebrow: "Notre histoire",
      title: "Tout a commencé sous terre",
      text: "Le café s’appelle Raíz y Grano (racine et grain) en référence à l’origine du café. Mais le nom a fini par décrire aussi sa croissance : trois mois de racines (acheter le grain, installer le point de vente sur le campus) avant que rien n’apparaisse à la surface.",
      milestones: [
        ["Printemps 2025", "Les premiers cafés du campus"],
        ["16 sept. 2025", "Ouverture officielle, avec une équipe"],
        ["Année 2026/27", "La deuxième année complète"],
      ],
      cta: "Lire notre histoire",
    },
    origin: {
      eyebrow: "Origine",
      title: "De la plantation à votre tasse",
      text: "Notre café vient d’Amor Perfecto : un café de spécialité colombien torréfié sur place, près de là où il est cultivé, en lien direct avec ceux qui le cultivent.",
      chips: ["Colombie", "Torréfié à l’origine", "Procédé lavé", "Fruits rouges, agrumes et chocolat"],
      quiz: "L’app propose des quiz sur l’origine du café, et chacun vous rapporte des grains.",
      cta: "Découvrir l’origine",
    },
    visit: {
      eyebrow: "Nous trouver",
      title: "On vous attend sur le campus",
      intro: "Nous sommes sur l’allée entre le bâtiment H (San Agustín de Hipona) et le CRAI.",
      where: "Où",
      whereText: "Entre le bâtiment H et le CRAI",
      directions: "Itinéraire",
      when: "Quand",
      weekdays: "Du lundi au vendredi",
      morning: "Matin",
      afternoon: "Après-midi",
      weekend: "Fermé le samedi et le dimanche. Les horaires changent pendant les vacances du campus.",
      appHours: "Les commandes sur l’app suivent les mêmes horaires.",
      write: "Écrivez-nous",
    },
  },
};

function Hero({ c }: { c: HomeCopy["hero"] }) {
  return (
    <section aria-labelledby="titulo-inicio" className="relative overflow-hidden pb-4 pt-8 sm:pt-12">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="animate-fade-up">
              <Eyebrow>{c.eyebrow}</Eyebrow>
            </div>
            <h1
              id="titulo-inicio"
              className="display animate-fade-up delay-1 mt-4 text-[2.6rem] leading-[1.04] text-forest sm:text-6xl lg:text-[4.1rem]"
            >
              {c.title}
            </h1>
            <p className="lead animate-fade-up delay-2 mt-5 max-w-xl">{c.lead}</p>
            <div className="animate-fade-up delay-3 mt-7 flex flex-wrap gap-3">
              <ButtonLink to={SITE.app.home} size="lg">
                {c.order}
              </ButtonLink>
              <ButtonLink to="/carta" size="lg" variant="glass" arrow>
                {c.menu}
              </ButtonLink>
            </div>
            <a href="#recomendador" className="link animate-fade-up delay-3 mt-5 inline-flex items-center gap-1.5 text-[15.5px]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {c.picker}
            </a>
            <ul className="animate-fade-up delay-4 mt-7 flex flex-wrap gap-2">
              <li className="pill pill-glass">
                <Clock3 className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
                {c.hours}
              </li>
              <li className="pill pill-glass">
                <Leaf className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
                {c.milk}
              </li>
              <li className="pill pill-glass">
                <Wheat className="h-3.5 w-3.5 text-clay-deep" aria-hidden="true" />
                {c.combo}
              </li>
            </ul>
          </div>
          <div className="relative hidden lg:col-span-5 lg:block">
            <img
              src="/brand/logo.webp"
              alt="Logotipo de Raíz y Grano: una planta de hojas verdes y ocres sobre las palabras Raíz y Grano"
              width={640}
              height={801}
              {...HIGH_PRIORITY}
              className="animate-fade-up delay-2 mx-auto h-auto w-[min(360px,100%)]"
            />
          </div>
        </div>
      </Container>
      <div className="relative mx-auto mt-8 max-w-[960px] px-3 lg:-mt-6">
        <img
          src="/brand/ritual-900.webp"
          srcSet="/brand/ritual-900.webp 900w, /brand/ritual.webp 1600w"
          sizes="(min-width: 980px) 940px, 100vw"
          alt=""
          aria-hidden="true"
          width={1600}
          height={882}
          {...HIGH_PRIORITY}
          className="animate-fade-up delay-3 mx-auto h-auto w-full"
        />
      </div>
    </section>
  );
}

function DoorCard({
  door,
  to,
  icon,
  tone,
  soon,
}: {
  door: Door;
  to: string;
  icon: ReactNode;
  tone?: "leaf" | "cream";
  /** Servicio que aún no está abierto: lleva la etiqueta «Próximamente». */
  soon?: string;
}) {
  return (
    <article className="card flex flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <IconTile tone={tone} size={52}>
          {icon}
        </IconTile>
        {soon && <span className="pill pill-cream">{soon}</span>}
      </div>
      <p className="eyebrow mt-5">{door.eyebrow}</p>
      <h3 className="display mt-1.5 text-[1.55rem] leading-tight text-forest">{door.title}</h3>
      <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">{door.text}</p>
      <Link to={to} className="link mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px]">
        {door.link}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function Home() {
  const c = useCopy(COPY);
  const { lang } = useLang();
  const picker = useCopy(RECOMENDADOR_COPY);

  return (
    <>
      <Hero c={c.hero} />

      {/* Tres puertas */}
      <section id="como-funciona" aria-labelledby="titulo-puertas" className="pt-16 sm:pt-20">
        <Container>
          <SectionHeader id="titulo-puertas" eyebrow={c.doors.eyebrow} title={c.doors.title} intro={c.doors.intro} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <DoorCard door={c.doors.bar} to="/carta" tone="cream" icon={<Coffee className="h-6 w-6" strokeWidth={1.7} />} />
            <DoorCard door={c.doors.phone} to="/la-app" tone="leaf" icon={<Smartphone className="h-6 w-6" strokeWidth={1.7} />} />
            <DoorCard
              door={c.doors.office}
              to="/profesorado#lista-espera"
              soon={c.soon}
              icon={<BriefcaseBusiness className="h-6 w-6" strokeWidth={1.7} />}
            />
          </div>
        </Container>
      </section>

      {/* Bono y app */}
      <section id="la-app" aria-label={c.app.title} className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <BonoCard />
            <article className="card-leaf flex flex-col p-6 sm:p-8">
              <Eyebrow light>{c.app.eyebrow}</Eyebrow>
              <h3 className="display mt-1.5 text-[1.75rem] leading-tight text-paper sm:text-[2rem]">{c.app.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {c.app.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15.5px] leading-relaxed text-paper/90">
                    <Sprout className="mt-1 h-4 w-4 shrink-0 text-[#DCE3CF]" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                <ButtonLink to={SITE.app.home} variant="cream">
                  {c.app.cta}
                </ButtonLink>
                <ButtonLink to="/la-app#instalar" variant="outline-cream" arrow>
                  {c.app.install}
                </ButtonLink>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* La carta */}
      <section id="carta" aria-labelledby="titulo-carta" className="pt-20 sm:pt-24">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader id="titulo-carta" eyebrow={c.carta.eyebrow} title={c.carta.title} intro={c.carta.intro} />
            <ButtonLink to="/carta" variant="glass" arrow className="self-start lg:self-auto">
              {c.carta.cta}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FAMILIES.map((family) => (
              <FamilyCard key={family.id} family={family} />
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {c.carta.notes.map((note, i) => (
              <li key={note} className={i === 0 ? "pill pill-leaf" : i === 1 ? "pill" : "pill pill-cream"}>
                {i === 2 ? <Link to="/alergenos">{note}</Link> : note}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Recomendador */}
      <section id="recomendador" aria-labelledby="titulo-recomendador-inicio" className="pt-20 sm:pt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <SectionHeader id="titulo-recomendador-inicio" eyebrow={picker.eyebrow} title={picker.title} intro={picker.lead} />
              <p className="mt-5 hidden text-[14.5px] leading-relaxed text-ink-soft lg:block">{picker.how}</p>
              <img
                src="/brand/semillas.webp"
                alt=""
                aria-hidden="true"
                width={700}
                height={695}
                loading="lazy"
                className="mt-8 hidden h-auto w-[200px] opacity-90 lg:block"
              />
            </div>
            <div className="lg:col-span-8">
              <Recomendador />
            </div>
          </div>
        </Container>
      </section>

      {/* Profesorado */}
      <section id="profesorado" aria-labelledby="titulo-profesorado" className="band-kraft mt-20 py-16 sm:mt-24 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader
                id="titulo-profesorado"
                eyebrow={
                  <span className="inline-flex flex-wrap items-center gap-2">
                    {c.teachers.eyebrow}
                    <span className="pill pill-cream normal-case tracking-normal">{c.soon}</span>
                  </span>
                }
                title={c.teachers.title}
                intro={c.teachers.text}
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to={waitlistMailto(lang)}>{c.teachers.order}</ButtonLink>
                <ButtonLink to="/profesorado" variant="glass" arrow>
                  {c.teachers.how}
                </ButtonLink>
              </div>
            </div>
            <ol className="card grid gap-0 p-2 lg:col-span-5">
              {c.teachers.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl p-4">
                  <span className="display grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-light text-lg text-forest" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="pt-2 text-[15.5px] leading-relaxed text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Historia */}
      <section id="historia" aria-labelledby="titulo-historia" className="band-leaf py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-4">
              <img
                src="/brand/emblema-crema.png"
                alt=""
                aria-hidden="true"
                width={241}
                height={360}
                loading="lazy"
                className="mx-auto h-auto w-[150px] opacity-95 sm:w-[190px]"
              />
            </div>
            <div className="order-1 lg:order-2 lg:col-span-8">
              <SectionHeader id="titulo-historia" eyebrow={c.story.eyebrow} title={c.story.title} intro={c.story.text} light />
              <ol className="mt-8 grid gap-3 sm:grid-cols-3">
                {c.story.milestones.map(([when, what]) => (
                  <li key={when} className="rounded-2xl border border-paper/20 bg-paper/10 p-4">
                    <p className="eyebrow eyebrow-cream">{when}</p>
                    <p className="mt-1.5 text-[15px] leading-snug text-paper">{what}</p>
                  </li>
                ))}
              </ol>
              <ButtonLink to="/historia" variant="cream" arrow className="mt-8">
                {c.story.cta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Origen */}
      <section id="origen" aria-labelledby="titulo-origen" className="pt-20 sm:pt-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader id="titulo-origen" eyebrow={c.origin.eyebrow} title={c.origin.title} intro={c.origin.text} />
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.origin.chips.map((chip) => (
                  <li key={chip} className="pill pill-leaf">
                    {chip}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] text-ink-soft">{c.origin.quiz}</p>
              <ButtonLink to="/origen" variant="glass" arrow className="mt-6">
                {c.origin.cta}
              </ButtonLink>
            </div>
            <div className="lg:col-span-5">
              <div className="card relative overflow-hidden p-8">
                <img
                  src="/brand/emblema-grande.webp"
                  alt=""
                  aria-hidden="true"
                  width={520}
                  height={773}
                  loading="lazy"
                  className="mx-auto h-auto w-[170px] sm:w-[200px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Visítanos */}
      <section id="visitanos" aria-labelledby="titulo-visitanos" className="pt-20 sm:pt-24">
        <Container>
          <SectionHeader id="titulo-visitanos" eyebrow={c.visit.eyebrow} title={c.visit.title} intro={c.visit.intro} />
          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            <div className="card p-4 sm:p-6 lg:col-span-7">
              <CampusSketch />
              <div className="mt-4 flex flex-col gap-4 border-t border-ink/[0.07] px-1 pt-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {c.visit.where}
                  </p>
                  <address className="mt-2 text-[15.5px] not-italic leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">{c.visit.whereText}</span>
                    <br />
                    {SITE.address.campus}
                    <br />
                    {SITE.address.street}, {SITE.address.postalCode} {SITE.address.locality}
                  </address>
                </div>
                <ButtonLink to={SITE.maps} size="sm" variant="glass" className="self-start sm:self-auto">
                  {c.visit.directions}
                </ButtonLink>
              </div>
            </div>
            <div className="grid content-start gap-5 lg:col-span-5">
              <div className="card p-6">
                <p className="eyebrow flex items-center gap-2">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {c.visit.when}
                </p>
                <p className="display mt-2 text-[1.35rem] text-forest">{c.visit.weekdays}</p>
                <dl className="mt-3 space-y-1.5 text-[15.5px]">
                  {[c.visit.morning, c.visit.afternoon].map((label, i) => (
                    <div key={label} className="flex items-baseline">
                      <dt className="text-ink-soft">{label}</dt>
                      <span className="leader" aria-hidden="true" />
                      <dd className="tabular font-semibold text-ink">{formatShift(SITE.hours.shifts[i])}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{c.visit.weekend}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-muted">{c.visit.appHours}</p>
              </div>
              <div className="card p-6">
                <p className="eyebrow">{c.visit.write}</p>
                <ul className="mt-3 space-y-2 text-[15.5px]">
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-forest" aria-hidden="true" />
                    <TextLink to={SITE.instagram.url}>{SITE.instagram.handle}</TextLink>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-forest" aria-hidden="true" />
                    <TextLink to={`mailto:${SITE.email}`}>{SITE.email}</TextLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
