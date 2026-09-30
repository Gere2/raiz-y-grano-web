import { Building2, Clock3, CreditCard, Users } from "lucide-react";
import { useCopy, type Copy } from "@/i18n";
import { SITE } from "@/content/site";
import { ArtTile, ButtonLink, Container, IconTile, SectionHeader, TextLink } from "@/components/ui";

type Step = { title: string; text: string };

const COPY: Copy<{
  eyebrow: string;
  title: string;
  lead: string;
  order: string;
  signup: string;
  stepsEyebrow: string;
  stepsTitle: string;
  steps: Step[];
  facts: { title: string; text: string }[];
  originEyebrow: string;
  originTitle: string;
  originText: string[];
  originLink: string;
  contactTitle: string;
  contactText: string;
}> = {
  es: {
    eyebrow: "Profesorado y departamentos",
    title: "Café para tu reunión, sin bajar a la barra",
    lead: "Pide combos de reunión o un pedido a medida desde la app y te lo llevamos al aula o al despacho, a la hora que nos digas.",
    order: "Hacer un pedido",
    signup: "Crear mi cuenta",
    stepsEyebrow: "Cómo funciona",
    stepsTitle: "Cuatro pasos, todos desde el móvil",
    steps: [
      {
        title: "Crea tu cuenta como profesor o profesora",
        text: "Al registrarte en la app elige «Profesor/a» y añade tu departamento y tu ubicación habitual. Así aparece la pestaña «Delivery», la de los pedidos para reuniones.",
      },
      {
        title: "Elige combos o arma tu pedido",
        text: "Los combos de reunión se configuran hueco a hueco (bebida, snack y repostería) para que cada persona tenga lo suyo. Si prefieres, pide producto a producto.",
      },
      {
        title: "Dinos dónde y cuándo",
        text: "Aula o despacho y hora de entrega. El pedido queda a nombre de tu departamento.",
      },
      {
        title: "Paga desde la app y listo",
        text: "Se paga con tarjeta al enviar el pedido y lo preparamos para la hora que has elegido.",
      },
    ],
    facts: [
      { title: "En tu aula o despacho", text: "Llevamos el pedido hasta donde está la reunión." },
      { title: "A la hora que digas", text: "Tú eliges la hora de entrega al pedir." },
      { title: "A nombre del departamento", text: "Cada pedido queda asociado a tu departamento." },
      { title: "Pago con tarjeta", text: "Se paga en la propia app, sin efectivo." },
    ],
    originEyebrow: "De dónde sale",
    originTitle: "Nació de unas prácticas",
    originText: [
      "En la primavera de 2026, unas prácticas del programa UniUniversidad de la Universidad Francisco de Vitoria nos dieron las manos para hacer algo que veíamos a diario: había una demanda que nunca bajaba a la barra.",
      "Durante cinco semanas llevamos café y repostería a aulas, despachos y salas de reunión, y de ahí salió el pedido de profesores de la app. Este curso queremos convertirlo en un servicio estable.",
    ],
    originLink: "Lee nuestra historia",
    contactTitle: "¿Un pedido grande o para otro día?",
    contactText: "Escríbenos y lo preparamos contigo:",
  },
  en: {
    eyebrow: "Faculty and departments",
    title: "Coffee for your meeting, without going down to the bar",
    lead: "Order meeting combos or a custom order in the app and we’ll bring it to your classroom or office, at the time you choose.",
    order: "Place an order",
    signup: "Create my account",
    stepsEyebrow: "How it works",
    stepsTitle: "Four steps, all from your phone",
    steps: [
      {
        title: "Create your account as a teacher",
        text: "When you sign up in the app, choose “Teacher” and add your department and usual location. The “Delivery” tab, for meeting orders, will appear.",
      },
      {
        title: "Pick combos or build your order",
        text: "Meeting combos are set up slot by slot (drink, snack and something sweet) so everyone gets what they like. Or order product by product.",
      },
      {
        title: "Tell us where and when",
        text: "Classroom or office and delivery time. The order goes under your department’s name.",
      },
      {
        title: "Pay in the app and you’re done",
        text: "You pay by card when you send the order and we prepare it for the time you chose.",
      },
    ],
    facts: [
      { title: "In your classroom or office", text: "We bring the order to where the meeting is." },
      { title: "At the time you choose", text: "You pick the delivery time when you order." },
      { title: "Under your department", text: "Each order is linked to your department." },
      { title: "Card payment", text: "Paid in the app, no cash needed." },
    ],
    originEyebrow: "Where it comes from",
    originTitle: "It started with an internship",
    originText: [
      "In spring 2026, an internship through the Universidad Francisco de Vitoria’s UniUniversidad programme gave us the extra hands to do something we saw every day: there was demand that never made it down to the bar.",
      "For five weeks we took coffee and pastries to classrooms, offices and meeting rooms, and that became the teacher orders in the app. This year we want to make it a steady service.",
    ],
    originLink: "Read our story",
    contactTitle: "A large order, or for another day?",
    contactText: "Write to us and we’ll plan it with you:",
  },
  fr: {
    eyebrow: "Enseignants et départements",
    title: "Du café pour votre réunion, sans descendre au comptoir",
    lead: "Commandez des formules de réunion ou une commande sur mesure dans l’app : nous l’apportons en salle ou au bureau, à l’heure de votre choix.",
    order: "Passer une commande",
    signup: "Créer mon compte",
    stepsEyebrow: "Comment ça marche",
    stepsTitle: "Quatre étapes, toutes depuis votre téléphone",
    steps: [
      {
        title: "Créez votre compte enseignant",
        text: "À l’inscription dans l’app, choisissez « Profesor/a » et indiquez votre département et votre lieu habituel. L’onglet « Delivery », celui des commandes de réunion, apparaît.",
      },
      {
        title: "Choisissez des formules ou composez votre commande",
        text: "Les formules de réunion se composent créneau par créneau (boisson, snack et pâtisserie) pour que chacun ait ce qu’il aime.",
      },
      {
        title: "Indiquez le lieu et l’heure",
        text: "Salle ou bureau et heure de livraison. La commande est au nom de votre département.",
      },
      {
        title: "Payez dans l’app, c’est tout",
        text: "Le paiement se fait par carte à l’envoi de la commande, et nous la préparons pour l’heure choisie.",
      },
    ],
    facts: [
      { title: "En salle ou au bureau", text: "Nous apportons la commande là où a lieu la réunion." },
      { title: "À l’heure choisie", text: "Vous choisissez l’heure de livraison en commandant." },
      { title: "Au nom du département", text: "Chaque commande est liée à votre département." },
      { title: "Paiement par carte", text: "Réglé dans l’app, sans espèces." },
    ],
    originEyebrow: "D’où ça vient",
    originTitle: "Né d’un stage",
    originText: [
      "Au printemps 2026, un stage du programme UniUniversidad de l’Universidad Francisco de Vitoria nous a donné les bras pour faire ce que nous voyions chaque jour : une demande qui ne descendait jamais jusqu’au comptoir.",
      "Pendant cinq semaines, nous avons porté café et pâtisseries dans les salles, les bureaux et les salles de réunion ; c’est devenu la commande enseignants de l’app. Cette année, nous voulons en faire un service régulier.",
    ],
    originLink: "Lire notre histoire",
    contactTitle: "Une grosse commande, ou pour un autre jour ?",
    contactText: "Écrivez-nous et nous l’organisons avec vous :",
  },
};

const FACT_ICONS = [Building2, Clock3, Users, CreditCard];

export default function Profesorado() {
  const c = useCopy(COPY);

  return (
    <>
      <section aria-labelledby="titulo-profesorado" className="pt-8 sm:pt-12">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader as="h1" id="titulo-profesorado" eyebrow={c.eyebrow} title={c.title} intro={c.lead} />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to={SITE.app.teacher} size="lg">
                  {c.order}
                </ButtonLink>
                <ButtonLink to={`${SITE.app.home}login`} size="lg" variant="glass">
                  {c.signup}
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="card grid grid-cols-2 gap-3 p-4">
                {["combos", "cafe-con-leche", "reposteria", "strawberry-break"].map((art) => (
                  <div key={art} className="grid place-items-center">
                    <ArtTile art={art} size={128} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="titulo-pasos" className="pt-20 sm:pt-24">
        <Container>
          <SectionHeader id="titulo-pasos" eyebrow={c.stepsEyebrow} title={c.stepsTitle} />
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {c.steps.map((step, i) => (
              <li key={step.title} className="card flex gap-4 p-6">
                <span className="display grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage-light text-xl text-forest" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="display text-[1.3rem] leading-tight text-forest">{step.title}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.facts.map((fact, i) => {
              const Icon = FACT_ICONS[i];
              return (
                <li key={fact.title} className="card-inset flex items-start gap-3 p-4">
                  <IconTile tone={i % 2 ? "cream" : "leaf"} size={40}>
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </IconTile>
                  <div>
                    <p className="font-semibold text-ink">{fact.title}</p>
                    <p className="mt-0.5 text-[14px] leading-snug text-ink-soft">{fact.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="titulo-origen-reparto" className="band-leaf mt-20 py-16 sm:mt-24 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionHeader id="titulo-origen-reparto" eyebrow={c.originEyebrow} title={c.originTitle} light />
              <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-paper/90">
                {c.originText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ButtonLink to="/historia" variant="cream" arrow className="mt-8">
                {c.originLink}
              </ButtonLink>
            </div>
            <div className="lg:col-span-4">
              <img src="/brand/emblema-crema.png" alt="" aria-hidden="true" width={241} height={360} loading="lazy" className="mx-auto h-auto w-[150px] sm:w-[180px]" />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="titulo-contacto-profes" className="pt-16">
        <Container>
          <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 id="titulo-contacto-profes" className="display text-[1.6rem] leading-tight text-forest">
                {c.contactTitle}
              </h2>
              <p className="mt-1 text-[15.5px] text-ink-soft">
                {c.contactText} <TextLink to={`mailto:${SITE.email}`}>{SITE.email}</TextLink>
              </p>
            </div>
            <ButtonLink to={SITE.app.teacher}>{c.order}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
