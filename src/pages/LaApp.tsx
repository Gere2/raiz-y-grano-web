import { Award, Bean, Globe, Languages, ReceiptText, Share, Smartphone, SquarePlus, Trophy } from "lucide-react";
import type { ReactNode } from "react";
import { useCopy, type Copy } from "@/i18n";
import { SITE } from "@/content/site";
import { BonoCard } from "@/components/Bono";
import { ButtonLink, Container, IconTile, SectionHeader, TextLink } from "@/components/ui";

type Feature = { title: string; text: string };

const COPY: Copy<{
  eyebrow: string;
  title: string;
  lead: string;
  open: string;
  bono: string;
  featuresEyebrow: string;
  featuresTitle: string;
  features: Feature[];
  bonoEyebrow: string;
  bonoTitle: string;
  bonoText: string;
  bonoTerms: string;
  installEyebrow: string;
  installTitle: string;
  installText: string;
  iphone: string;
  iphoneSteps: ReactNode[];
  android: string;
  androidSteps: ReactNode[];
  legal: string;
  privacy: string;
  terms: string;
  screenshotAlt: string;
}> = {
  es: {
    eyebrow: "La app de Raíz y Grano",
    title: "Tu café, sin hacer cola",
    lead: "Pide desde el móvil entre clase y clase, paga en segundos y recógelo en barra cuando esté listo. La hicimos nosotros, para cómo funciona un campus.",
    open: "Abrir la app",
    bono: "Comprar el Bono Curso",
    featuresEyebrow: "Qué puedes hacer",
    featuresTitle: "Todo lo de la barra, en el bolsillo",
    features: [
      { title: "Pide desde el móvil", text: "Elige tu café, personaliza la leche y paga en segundos. Te avisamos cuando está listo para recoger." },
      { title: "Acumula granos", text: "Con cada compra ganas granos que puedes canjear por cafés gratis, bollería y más recompensas." },
      { title: "Sube de nivel", text: "Completa misiones, desbloquea insignias y mantén tu racha semanal." },
      { title: "Aprende sobre café", text: "Cuestionarios sobre el origen del café y sobre cómo catarlo. Cada uno te da granos." },
      { title: "Recibo por email", text: "Cada pedido te llega por correo, para que lo tengas a mano." },
      { title: "En castellano o en inglés", text: "La app se adapta al idioma de tu móvil y puedes cambiarlo cuando quieras." },
    ],
    bonoEyebrow: "Bono Curso 26/27",
    bonoTitle: "Diez bebidas para todo el curso",
    bonoText: "Lo lanzamos en diciembre de 2025 como bono de exámenes, pensado para la época de biblioteca, y acabó siendo lo más usado de la app. Este curso dura el curso entero.",
    bonoTerms: "Condiciones del bono",
    installEyebrow: "Instálala",
    installTitle: "Como una app más, sin pasar por la tienda",
    installText: "Es una aplicación web: se instala desde el navegador y ocupa muy poco. Abre app.raizygrano.com y sigue estos pasos.",
    iphone: "En iPhone (Safari)",
    iphoneSteps: [
      <>Toca el botón <strong>Compartir</strong>.</>,
      <>Elige <strong>Añadir a pantalla de inicio</strong>.</>,
      <>Pulsa <strong>Añadir</strong> y ya tienes la planta en tu pantalla.</>,
    ],
    android: "En Android (Chrome)",
    androidSteps: [
      <>Toca el menú <strong>⋮</strong> de arriba a la derecha.</>,
      <>Elige <strong>Instalar aplicación</strong> o <strong>Añadir a pantalla de inicio</strong>.</>,
      <>Confirma y ábrela desde tus aplicaciones.</>,
    ],
    legal: "La app tiene su propia política de privacidad y sus condiciones de compra:",
    privacy: "privacidad de la app",
    terms: "condiciones",
    screenshotAlt: "Pantalla de inicio de la app de Raíz y Grano en un móvil, con el saludo, el Bono Curso 26/27 y las categorías de la carta.",
  },
  en: {
    eyebrow: "The Raíz y Grano app",
    title: "Your coffee, without the queue",
    lead: "Order from your phone between classes, pay in seconds and pick it up at the bar when it’s ready. We built it ourselves, for the way a campus works.",
    open: "Open the app",
    bono: "Get the Term Pass",
    featuresEyebrow: "What you can do",
    featuresTitle: "Everything from the bar, in your pocket",
    features: [
      { title: "Order from your phone", text: "Choose your coffee, pick your milk and pay in seconds. We’ll let you know when it’s ready to collect." },
      { title: "Earn beans", text: "Every purchase earns you beans you can redeem for free coffees, pastries and more rewards." },
      { title: "Level up", text: "Complete missions, unlock badges and keep your weekly streak going." },
      { title: "Learn about coffee", text: "Quizzes about where coffee comes from and how to taste it. Each one earns you beans." },
      { title: "Receipt by email", text: "Every order is emailed to you, so you always have it at hand." },
      { title: "In Spanish or English", text: "The app follows your phone’s language and you can switch any time." },
    ],
    bonoEyebrow: "Term Pass 26/27",
    bonoTitle: "Ten drinks for the whole year",
    bonoText: "We launched it in December 2025 as an exam pass for library season, and it became the most used feature of the app. This year it lasts the whole academic year.",
    bonoTerms: "Pass conditions",
    installEyebrow: "Install it",
    installTitle: "Like any other app, without the app store",
    installText: "It’s a web app: you install it from your browser and it takes up very little space. Open app.raizygrano.com and follow these steps.",
    iphone: "On iPhone (Safari)",
    iphoneSteps: [
      <>Tap the <strong>Share</strong> button.</>,
      <>Choose <strong>Add to Home Screen</strong>.</>,
      <>Tap <strong>Add</strong> and the plant is on your home screen.</>,
    ],
    android: "On Android (Chrome)",
    androidSteps: [
      <>Tap the <strong>⋮</strong> menu at the top right.</>,
      <>Choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</>,
      <>Confirm and open it from your apps.</>,
    ],
    legal: "The app has its own privacy policy and purchase terms:",
    privacy: "app privacy",
    terms: "terms",
    screenshotAlt: "Home screen of the Raíz y Grano app on a phone, with the greeting, the Term Pass 26/27 and the menu categories.",
  },
  fr: {
    eyebrow: "L’app de Raíz y Grano",
    title: "Votre café, sans faire la queue",
    lead: "Commandez depuis votre téléphone entre deux cours, payez en quelques secondes et récupérez au comptoir quand c’est prêt. Nous l’avons conçue nous-mêmes, pour la vie d’un campus.",
    open: "Ouvrir l’app",
    bono: "Acheter le Bono Curso",
    featuresEyebrow: "Ce que vous pouvez faire",
    featuresTitle: "Tout le comptoir, dans votre poche",
    features: [
      { title: "Commandez depuis votre téléphone", text: "Choisissez votre café et votre lait, payez en quelques secondes. Nous vous prévenons quand c’est prêt." },
      { title: "Cumulez des grains", text: "Chaque achat vous rapporte des grains à échanger contre des cafés offerts, des pâtisseries et d’autres récompenses." },
      { title: "Montez de niveau", text: "Relevez des missions, débloquez des badges et gardez votre série hebdomadaire." },
      { title: "Apprenez le café", text: "Des quiz sur l’origine du café et sur la dégustation. Chacun vous rapporte des grains." },
      { title: "Reçu par e-mail", text: "Chaque commande vous est envoyée par e-mail." },
      { title: "En espagnol ou en anglais", text: "L’app suit la langue de votre téléphone et vous pouvez la changer à tout moment." },
    ],
    bonoEyebrow: "Bono Curso 26/27",
    bonoTitle: "Dix boissons pour toute l’année",
    bonoText: "Lancé en décembre 2025 comme bono d’examens, pour la saison de la bibliothèque, il est devenu la fonction la plus utilisée de l’app. Cette année, il vaut pour toute l’année universitaire.",
    bonoTerms: "Conditions du bono",
    installEyebrow: "Installez-la",
    installTitle: "Comme une app, sans passer par le store",
    installText: "C’est une application web : elle s’installe depuis le navigateur et prend très peu de place. Ouvrez app.raizygrano.com et suivez ces étapes.",
    iphone: "Sur iPhone (Safari)",
    iphoneSteps: [
      <>Touchez le bouton <strong>Partager</strong>.</>,
      <>Choisissez <strong>Sur l’écran d’accueil</strong>.</>,
      <>Touchez <strong>Ajouter</strong> : la plante est sur votre écran.</>,
    ],
    android: "Sur Android (Chrome)",
    androidSteps: [
      <>Touchez le menu <strong>⋮</strong> en haut à droite.</>,
      <>Choisissez <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong>.</>,
      <>Confirmez et ouvrez-la depuis vos applications.</>,
    ],
    legal: "L’app a sa propre politique de confidentialité et ses conditions d’achat :",
    privacy: "confidentialité de l’app",
    terms: "conditions",
    screenshotAlt: "Écran d’accueil de l’app Raíz y Grano sur un téléphone, avec le Bono Curso 26/27 et les catégories de la carte.",
  },
};

const FEATURE_ICONS = [Smartphone, Bean, Trophy, Award, ReceiptText, Languages];

export default function LaApp() {
  const c = useCopy(COPY);

  return (
    <>
      <section aria-labelledby="titulo-app" className="pt-8 sm:pt-12">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader as="h1" id="titulo-app" eyebrow={c.eyebrow} title={c.title} intro={c.lead} />
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to={SITE.app.home} size="lg">
                  {c.open}
                </ButtonLink>
                <ButtonLink to={SITE.app.bono} size="lg" variant="glass">
                  {c.bono}
                </ButtonLink>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2">
                <li className="pill pill-glass">
                  <Globe className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
                  app.raizygrano.com
                </li>
                <li className="pill pill-glass">
                  <Smartphone className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
                  iPhone · Android
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <figure className="relative mx-auto w-[min(300px,78vw)]">
                <div className="rounded-[46px] bg-ink p-[10px] shadow-[0_30px_60px_-24px_rgba(39,51,46,0.55)]">
                  <img
                    src="/brand/app-inicio.webp"
                    alt={c.screenshotAlt}
                    width={780}
                    height={1688}
                    className="block h-auto w-full rounded-[37px]"
                  />
                </div>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="titulo-funciones" className="pt-20 sm:pt-24">
        <Container>
          <SectionHeader id="titulo-funciones" eyebrow={c.featuresEyebrow} title={c.featuresTitle} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <li key={feature.title} className="card p-6">
                  <IconTile tone={i % 3 === 1 ? "cream" : i % 3 === 0 ? "leaf" : undefined}>
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </IconTile>
                  <h3 className="display mt-4 text-[1.3rem] leading-tight text-forest">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{feature.text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="titulo-bono-app" className="pt-20 sm:pt-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader id="titulo-bono-app" eyebrow={c.bonoEyebrow} title={c.bonoTitle} intro={c.bonoText} />
              <TextLink to={`${SITE.app.bono}/condiciones`} className="mt-5 inline-block text-[15px]">
                {c.bonoTerms}
              </TextLink>
            </div>
            <div className="lg:col-span-7">
              <BonoCard />
            </div>
          </div>
        </Container>
      </section>

      <section id="instalar" aria-labelledby="titulo-instalar" className="band-kraft mt-20 py-16 sm:mt-24 sm:py-20">
        <Container>
          <SectionHeader id="titulo-instalar" eyebrow={c.installEyebrow} title={c.installTitle} intro={c.installText} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { title: c.iphone, steps: c.iphoneSteps, icon: <Share className="h-6 w-6" strokeWidth={1.7} /> },
              { title: c.android, steps: c.androidSteps, icon: <SquarePlus className="h-6 w-6" strokeWidth={1.7} /> },
            ].map((platform) => (
              <article key={platform.title} className="card p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <IconTile tone="leaf">{platform.icon}</IconTile>
                  <h3 className="display text-[1.35rem] text-forest">{platform.title}</h3>
                </div>
                <ol className="mt-5 space-y-3">
                  {platform.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-soft">
                      <span className="display grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sage-light text-sm text-forest" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[14px] text-ink-muted">
            {c.legal} <TextLink to={SITE.app.privacy}>{c.privacy}</TextLink> · <TextLink to={SITE.app.terms}>{c.terms}</TextLink>.
          </p>
        </Container>
      </section>
    </>
  );
}
