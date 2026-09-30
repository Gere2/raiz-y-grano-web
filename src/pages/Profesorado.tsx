import { BellRing, Building2, Clock3, CreditCard, Mail, Users } from "lucide-react";
import { useCopy, useLang, type Copy } from "@/i18n";
import { waitlistMailto } from "@/content/waitlist";
import { ArtTile, ButtonLink, Container, IconTile, SectionHeader, TextLink } from "@/components/ui";

/**
 * /profesorado: el servicio para reuniones de departamento, que TODAVÍA NO
 * está disponible (30-09-2026). La página cuenta cómo funcionará y ofrece la
 * lista de espera; no enlaza con el pedido de profesores de la app.
 */

type Step = { title: string; text: string };

const COPY: Copy<{
  eyebrow: string;
  soon: string;
  title: string;
  lead: string;
  join: string;
  how: string;
  stepsEyebrow: string;
  stepsTitle: string;
  steps: Step[];
  facts: { title: string; text: string }[];
  waitTitle: string;
  waitText: string;
  waitButton: string;
  waitPrivacy: string;
  privacy: string;
  originEyebrow: string;
  originTitle: string;
  originText: string[];
  originLink: string;
}> = {
  es: {
    eyebrow: "Profesorado y departamentos",
    soon: "Próximamente",
    title: "Café para tu reunión, sin bajar a la barra",
    lead: "Estamos preparando un servicio para que profesorado y departamentos pidan café y repostería para sus reuniones y se los llevemos al aula o al despacho. Todavía no está disponible: si te interesa, apúntate a la lista de espera y te avisaremos cuando empiece.",
    join: "Apuntarme a la lista de espera",
    how: "Cómo funcionará",
    stepsEyebrow: "Cómo funcionará",
    stepsTitle: "Así lo pedirás cuando esté abierto",
    steps: [
      { title: "Tu cuenta de profesor o profesora", text: "En la app te registrarás como profesor o profesora, con tu departamento y tu ubicación habitual." },
      { title: "Combos o un pedido a medida", text: "Los combos de reunión se eligen hueco a hueco (bebida, snack y repostería) para que cada persona tenga lo suyo." },
      { title: "Dónde y cuándo", text: "Nos dirás el aula o el despacho y la hora, y el pedido irá a nombre de tu departamento." },
      { title: "Pago desde la app", text: "Lo pagarás con tarjeta al enviarlo y te lo llevaremos a la hora elegida." },
    ],
    facts: [
      { title: "En tu aula o despacho", text: "Llevaremos el pedido hasta donde sea la reunión." },
      { title: "A la hora que digas", text: "Elegirás la hora de entrega al pedir." },
      { title: "A nombre del departamento", text: "Cada pedido irá asociado a tu departamento." },
      { title: "Pago con tarjeta", text: "Desde la propia app, sin efectivo." },
    ],
    waitTitle: "Apúntate a la lista de espera",
    waitText: "Escríbenos con tu nombre, tu departamento y dónde soléis reuniros (el correo ya va preparado). Cuando el servicio arranque, serás de los primeros en saberlo.",
    waitButton: "Apuntarme por correo",
    waitPrivacy: "Usaremos tu correo solo para avisarte de este servicio, y puedes pedirnos que te borremos de la lista cuando quieras.",
    privacy: "Privacidad",
    originEyebrow: "De dónde sale",
    originTitle: "Nació de unas prácticas",
    originText: [
      "En la primavera de 2026, unas prácticas del programa UniUniversidad de la Universidad Francisco de Vitoria nos dieron las manos para hacer algo que veíamos a diario: había una demanda que nunca bajaba a la barra.",
      "Durante cinco semanas llevamos café y repostería a aulas, despachos y salas de reunión, y de ahí salió el pedido de profesores de la app. Ahora queremos que funcione un curso entero, con alguien dedicado al reparto. Hasta entonces, lista de espera.",
    ],
    originLink: "Lee nuestra historia",
  },
  en: {
    eyebrow: "Faculty and departments",
    soon: "Coming soon",
    title: "Coffee for your meeting, without going down to the bar",
    lead: "We’re preparing a service so faculty and departments can order coffee and pastries for their meetings and have them brought to the classroom or office. It isn’t available yet: if you’re interested, join the waiting list and we’ll let you know when it starts.",
    join: "Join the waiting list",
    how: "How it will work",
    stepsEyebrow: "How it will work",
    stepsTitle: "How you’ll order once it opens",
    steps: [
      { title: "Your teacher account", text: "In the app you’ll sign up as a teacher, with your department and usual location." },
      { title: "Combos or a custom order", text: "Meeting combos are chosen slot by slot (drink, snack and something sweet) so everyone gets what they like." },
      { title: "Where and when", text: "You’ll tell us the room or office and the time, and the order will go under your department’s name." },
      { title: "Pay in the app", text: "You’ll pay by card when you send it and we’ll bring it at the time you chose." },
    ],
    facts: [
      { title: "In your classroom or office", text: "We’ll bring the order to wherever the meeting is." },
      { title: "At the time you choose", text: "You’ll pick the delivery time when you order." },
      { title: "Under your department", text: "Each order will be linked to your department." },
      { title: "Card payment", text: "In the app itself, no cash needed." },
    ],
    waitTitle: "Join the waiting list",
    waitText: "Write to us with your name, your department and where you usually meet (the email is already drafted). When the service starts, you’ll be among the first to know.",
    waitButton: "Join by email",
    waitPrivacy: "We’ll only use your email to tell you about this service, and you can ask us to remove you from the list at any time.",
    privacy: "Privacy",
    originEyebrow: "Where it comes from",
    originTitle: "It started with an internship",
    originText: [
      "In spring 2026, an internship through the Universidad Francisco de Vitoria’s UniUniversidad programme gave us the extra hands to do something we saw every day: there was demand that never made it down to the bar.",
      "For five weeks we took coffee and pastries to classrooms, offices and meeting rooms, and that became the teacher orders in the app. Now we want it to work for a whole academic year, with someone dedicated to deliveries. Until then, a waiting list.",
    ],
    originLink: "Read our story",
  },
  fr: {
    eyebrow: "Enseignants et départements",
    soon: "Bientôt",
    title: "Du café pour votre réunion, sans descendre au comptoir",
    lead: "Nous préparons un service pour que les enseignants et les départements commandent café et pâtisseries pour leurs réunions, livrés en salle ou au bureau. Il n’est pas encore disponible : si cela vous intéresse, inscrivez-vous sur la liste d’attente et nous vous préviendrons dès son lancement.",
    join: "M’inscrire sur la liste d’attente",
    how: "Comment ça marchera",
    stepsEyebrow: "Comment ça marchera",
    stepsTitle: "Comment vous commanderez à l’ouverture",
    steps: [
      { title: "Votre compte enseignant", text: "Dans l’app, vous vous inscrirez comme enseignant, avec votre département et votre lieu habituel." },
      { title: "Formules ou commande sur mesure", text: "Les formules de réunion se composent créneau par créneau (boisson, snack et pâtisserie) pour que chacun ait ce qu’il aime." },
      { title: "Où et quand", text: "Vous indiquerez la salle ou le bureau et l’heure ; la commande sera au nom de votre département." },
      { title: "Paiement dans l’app", text: "Vous paierez par carte à l’envoi et nous livrerons à l’heure choisie." },
    ],
    facts: [
      { title: "En salle ou au bureau", text: "Nous apporterons la commande là où a lieu la réunion." },
      { title: "À l’heure choisie", text: "Vous choisirez l’heure de livraison en commandant." },
      { title: "Au nom du département", text: "Chaque commande sera liée à votre département." },
      { title: "Paiement par carte", text: "Dans l’app, sans espèces." },
    ],
    waitTitle: "Inscrivez-vous sur la liste d’attente",
    waitText: "Écrivez-nous avec votre nom, votre département et votre lieu de réunion habituel (l’e-mail est déjà rédigé). Au lancement, vous serez parmi les premiers informés.",
    waitButton: "M’inscrire par e-mail",
    waitPrivacy: "Nous utiliserons votre e-mail uniquement pour vous informer de ce service, et vous pouvez demander à être retiré de la liste à tout moment.",
    privacy: "Confidentialité",
    originEyebrow: "D’où ça vient",
    originTitle: "Né d’un stage",
    originText: [
      "Au printemps 2026, un stage du programme UniUniversidad de l’Universidad Francisco de Vitoria nous a donné les bras pour faire ce que nous voyions chaque jour : une demande qui ne descendait jamais jusqu’au comptoir.",
      "Pendant cinq semaines, nous avons porté café et pâtisseries dans les salles, les bureaux et les salles de réunion ; c’est devenu la commande enseignants de l’app. Nous voulons maintenant que cela fonctionne toute l’année, avec quelqu’un dédié aux livraisons. D’ici là, une liste d’attente.",
    ],
    originLink: "Lire notre histoire",
  },
};

const FACT_ICONS = [Building2, Clock3, Users, CreditCard];

export default function Profesorado() {
  const c = useCopy(COPY);
  const { lang } = useLang();
  const mailto = waitlistMailto(lang);

  return (
    <>
      <section aria-labelledby="titulo-profesorado" className="pt-8 sm:pt-12">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader
                as="h1"
                id="titulo-profesorado"
                eyebrow={
                  <span className="inline-flex flex-wrap items-center gap-2">
                    {c.eyebrow}
                    <span className="pill pill-cream normal-case tracking-normal">{c.soon}</span>
                  </span>
                }
                title={c.title}
                intro={c.lead}
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to={mailto} size="lg">
                  {c.join}
                </ButtonLink>
                <ButtonLink to="#como-funcionara" size="lg" variant="glass" arrow external={false}>
                  {c.how}
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

      <section id="lista-espera" aria-labelledby="titulo-lista" className="scroll-mt-28 pt-16">
        <Container>
          <div className="card-cream flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <IconTile tone="cream" size={52}>
                <BellRing className="h-6 w-6" strokeWidth={1.7} />
              </IconTile>
              <div className="max-w-2xl">
                <h2 id="titulo-lista" className="display text-[1.6rem] leading-tight text-forest">
                  {c.waitTitle}
                </h2>
                <p className="mt-2 text-[15.5px] leading-relaxed text-ink">{c.waitText}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                  {c.waitPrivacy} <TextLink to="/privacidad">{c.privacy}</TextLink>.
                </p>
              </div>
            </div>
            <ButtonLink to={mailto} className="shrink-0 self-start md:self-auto">
              <Mail className="h-[17px] w-[17px]" aria-hidden="true" />
              {c.waitButton}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="como-funcionara" aria-labelledby="titulo-pasos" className="scroll-mt-28 pt-20 sm:pt-24">
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
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to={mailto} variant="cream">
                  {c.join}
                </ButtonLink>
                <ButtonLink to="/historia" variant="outline-cream" arrow>
                  {c.originLink}
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-4">
              <img src="/brand/emblema-crema.png" alt="" aria-hidden="true" width={241} height={360} loading="lazy" className="mx-auto h-auto w-[150px] sm:w-[180px]" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
