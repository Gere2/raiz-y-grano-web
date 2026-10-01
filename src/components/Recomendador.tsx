import { useEffect, useId, useMemo, useRef, useState, type ReactNode, type Ref } from "react";
import { ArrowLeft, Lightbulb, Plus, RotateCcw, Shuffle, Sparkles } from "lucide-react";
import { formatPrice, useCopy, useLang, type Copy, type Lang } from "@/i18n";
import { SITE } from "@/content/site";
import {
  PRESETS,
  PROFILES,
  largeVersionOf,
  productFor,
  rankDrinks,
  rankFoods,
  rankPairs,
  stepsFor,
  type Answers,
  type Pair,
  type Profile,
  type Scored,
  type StepId,
} from "@/content/recomendador";
import { ArtTile, ButtonLink, TextLink, cx } from "@/components/ui";

/**
 * «¿No sabes qué tomar?»: una pregunta cada vez y una recomendación de la
 * carta con su porqué. Todo pasa en el navegador: no se guarda ni se envía
 * nada. El motor (qué encaja con qué) vive en src/content/recomendador.ts.
 */

type Option = { value: string; label: Copy<string>; hint?: Copy<string>; art?: string };
type Question = { title: Copy<string>; options: Option[] };

const c = (es: string, en: string, fr: string): Copy<string> => ({ es, en, fr });

const QUESTIONS: Record<StepId, Question> = {
  want: {
    title: c("¿Qué te apetece?", "What do you fancy?", "Qu’est-ce qui vous ferait envie ?"),
    options: [
      { value: "beber", label: c("Algo de beber", "Something to drink", "Une boisson"), art: "cafe-con-leche" },
      { value: "comer", label: c("Algo de comer", "Something to eat", "Quelque chose à manger"), art: "reposteria" },
      { value: "ambos", label: c("Las dos cosas", "Both", "Les deux"), art: "combos" },
    ],
  },
  temp: {
    title: c("¿Frío o caliente?", "Hot or cold?", "Chaud ou froid ?"),
    options: [
      { value: "caliente", label: c("Caliente", "Hot", "Chaud"), art: "cafe" },
      { value: "frio", label: c("Frío", "Cold", "Froid"), art: "cafe-frio" },
      { value: "igual", label: c("Me da igual", "Either", "Peu importe") },
    ],
  },
  energy: {
    title: c("¿Cuánta energía necesitas?", "How much energy do you need?", "Besoin de combien d’énergie ?"),
    options: [
      { value: "tope", label: c("A tope", "Full power", "À fond"), hint: c("Con café", "With coffee", "Avec du café") },
      { value: "suave", label: c("Algo suave", "Just a little", "Un peu"), hint: c("Matcha, chai o té", "Matcha, chai or tea", "Matcha, chai ou thé") },
      { value: "nada", label: c("Sin cafeína", "No caffeine", "Sans caféine"), hint: c("O descafeinado", "Or decaf", "Ou déca") },
    ],
  },
  taste: {
    title: c("¿Qué sabor te pide el cuerpo?", "What flavour are you craving?", "Quelle saveur vous tente ?"),
    options: [
      { value: "cafe", label: c("Café, café", "Pure coffee", "Du vrai café"), art: "cafe" },
      { value: "cremoso", label: c("Cremoso y suave", "Creamy and smooth", "Crémeux et doux"), art: "cafe-con-leche" },
      { value: "chocolate", label: c("Chocolate", "Chocolate", "Chocolat"), art: "cookiecup" },
      { value: "afrutado", label: c("Afrutado", "Fruity", "Fruité"), art: "fruta" },
      { value: "especiado", label: c("Especiado", "Spiced", "Épicé"), art: "chai" },
      { value: "verde", label: c("Matcha o té verde", "Matcha or green tea", "Matcha ou thé vert"), art: "matcha" },
    ],
  },
  sweet: {
    title: c("¿Y de dulce?", "How sweet?", "Et côté sucré ?"),
    options: [
      { value: "nada", label: c("Nada dulce", "Not sweet", "Pas sucré") },
      { value: "poco", label: c("Un poco", "A little", "Un peu") },
      { value: "capricho", label: c("Me doy un capricho", "Treat me", "Je me fais plaisir") },
    ],
  },
  milk: {
    title: c("¿Y la leche?", "What about milk?", "Et le lait ?"),
    options: [
      { value: "normal", label: c("Me vale cualquiera", "Any milk is fine", "N’importe lequel") },
      {
        value: "vegetal",
        label: c("Vegetal o sin lactosa", "Plant-based or lactose-free", "Végétal ou sans lactose"),
        hint: c("Sin suplemento", "No extra charge", "Sans supplément"),
      },
      { value: "sinleche", label: c("Sin leche", "No milk", "Sans lait") },
    ],
  },
  food: {
    title: c("¿Y para comer?", "And to eat?", "Et à manger ?"),
    options: [
      { value: "chocolate", label: c("Chocolate", "Chocolate", "Chocolat"), art: "strawberry-break" },
      { value: "cremoso", label: c("Algo cremoso", "Something creamy", "Quelque chose de crémeux"), art: "reposteria" },
      { value: "zanahoria", label: c("Zanahoria y nueces", "Carrot and walnut", "Carotte et noix"), art: "combos" },
      { value: "ligero", label: c("Algo ligero", "Something light", "Quelque chose de léger") },
      { value: "fruta", label: c("Fruta y granola", "Fruit and granola", "Fruits et granola"), art: "acai" },
      { value: "sorpresa", label: c("Sorpréndeme", "Surprise me", "Surprenez-moi") },
    ],
  },
  hunger: {
    title: c("¿Cuánta hambre tienes?", "How hungry are you?", "Quelle faim avez-vous ?"),
    options: [
      { value: "picoteo", label: c("Para picar algo", "Just a bite", "Juste un petit creux") },
      { value: "hambre", label: c("Bastante", "Pretty hungry", "Bien faim") },
    ],
  },
};

type UiCopy = {
  rush: string;
  surprise: string;
  step: (n: number, total?: number) => string;
  back: string;
  recommend: string;
  plan: string;
  surprised: string;
  why: string;
  order: string;
  seeMenu: string;
  another: string;
  restart: string;
  alsoLike: string;
  allergy: string;
  allergyLink: string;
  privacy: string;
  together: (total: string) => string;
  combo: (total: string, saving: string) => string;
  menu: (total: string) => string;
  tips: {
    decaf: string;
    milk: string;
    iced: string;
    cup: string;
    makeMenu: string;
    bono: string;
    large: (price: string) => string;
  };
  chips: {
    temp: Record<Profile["temp"], string>;
    caffeine: [string, string, string, string];
    sweet: [string, string, string, string];
  };
};

const UI: Copy<UiCopy> = {
  es: {
    rush: "¿Con prisa? Elige un plan:",
    surprise: "Sorpréndeme",
    step: (n, total) => (total ? `Pregunta ${n} de ${total}` : `Pregunta ${n}`),
    back: "Atrás",
    recommend: "Te recomendamos",
    plan: "Tu plan",
    surprised: "Al azar",
    why: "Por qué",
    order: "Pídelo en la app",
    seeMenu: "Verlo en la carta",
    another: "Otra opción",
    restart: "Empezar de nuevo",
    alsoLike: "También te puede gustar",
    allergy: "¿Alergias o intolerancias? Pregúntanos antes de pedir.",
    allergyLink: "Alérgenos",
    privacy: "Todo pasa en tu navegador: no guardamos tus respuestas.",
    together: (t) => `Juntos: ${t}`,
    combo: (t, s) => `En combo: ${t} (te ahorras ${s})`,
    menu: (t) => `Como menú desayuno o merienda: ${t} (el bizcocho, a 2 €)`,
    tips: {
      decaf: "Pídelo descafeinado: sin coste.",
      milk: "Con leche de avena, de almendra o sin lactosa: sin suplemento.",
      iced: "Lo puedes pedir caliente o con hielo.",
      cup: "Va en un vaso de galleta que también se come. Solo en caliente.",
      makeMenu: "¿Con hambre? Añade un bizcocho de zanahoria por 2 € más y es menú desayuno o merienda.",
      bono: "Si tienes el Bono Curso 26/27, es una de sus bebidas base.",
      large: (price) => `También lo hay en grande: ${price}.`,
    },
    chips: {
      temp: { caliente: "Caliente", frio: "Frío", ambos: "Frío o caliente" },
      caffeine: ["Sin cafeína", "Poca cafeína", "Energía tranquila", "Con café"],
      sweet: ["Nada dulce", "Poco dulce", "Dulce", "Muy dulce"],
    },
  },
  en: {
    rush: "In a hurry? Pick a plan:",
    surprise: "Surprise me",
    step: (n, total) => (total ? `Question ${n} of ${total}` : `Question ${n}`),
    back: "Back",
    recommend: "We recommend",
    plan: "Your plan",
    surprised: "Random pick",
    why: "Why",
    order: "Order it in the app",
    seeMenu: "See it on the menu",
    another: "Another option",
    restart: "Start over",
    alsoLike: "You might also like",
    allergy: "Allergies or intolerances? Ask us before you order.",
    allergyLink: "Allergens",
    privacy: "It all happens in your browser: we don’t store your answers.",
    together: (t) => `Together: ${t}`,
    combo: (t, s) => `As a combo: ${t} (you save ${s})`,
    menu: (t) => `As a breakfast or afternoon menu: ${t} (the cake for €2)`,
    tips: {
      decaf: "Ask for it decaf: no extra charge.",
      milk: "With oat, almond or lactose-free milk: no extra charge.",
      iced: "You can have it hot or iced.",
      cup: "Served in an edible cookie cup. Hot only.",
      makeMenu: "Hungry? Add a slice of carrot cake for €2 more and it’s a breakfast or afternoon menu.",
      bono: "If you have the Term Pass 26/27, it’s one of its base drinks.",
      large: (price) => `Also available in a large size: ${price}.`,
    },
    chips: {
      temp: { caliente: "Hot", frio: "Cold", ambos: "Hot or iced" },
      caffeine: ["No caffeine", "A little caffeine", "Calm energy", "With coffee"],
      sweet: ["Not sweet", "Lightly sweet", "Sweet", "Very sweet"],
    },
  },
  fr: {
    rush: "Pressé ? Choisissez un plan :",
    surprise: "Surprenez-moi",
    step: (n, total) => (total ? `Question ${n} sur ${total}` : `Question ${n}`),
    back: "Retour",
    recommend: "On vous recommande",
    plan: "Votre formule",
    surprised: "Au hasard",
    why: "Pourquoi",
    order: "Commandez-le sur l’app",
    seeMenu: "Voir sur la carte",
    another: "Autre option",
    restart: "Recommencer",
    alsoLike: "Vous aimerez peut-être aussi",
    allergy: "Allergies ou intolérances ? Demandez-nous avant de commander.",
    allergyLink: "Allergènes",
    privacy: "Tout se passe dans votre navigateur : nous ne gardons pas vos réponses.",
    together: (t) => `Ensemble : ${t}`,
    combo: (t, s) => `En formule : ${t} (vous économisez ${s})`,
    menu: (t) => `En formule petit-déjeuner ou goûter : ${t} (le gâteau à 2 €)`,
    tips: {
      decaf: "Demandez-le déca : sans supplément.",
      milk: "Avec du lait d’avoine, d’amande ou sans lactose : sans supplément.",
      iced: "Vous pouvez le prendre chaud ou glacé.",
      cup: "Servi dans un gobelet en biscuit qui se mange. Uniquement chaud.",
      makeMenu: "Une petite faim ? Ajoutez un gâteau à la carotte pour 2 € de plus : c’est la formule petit-déjeuner ou goûter.",
      bono: "Avec le Bono Curso 26/27, c’est l’une de ses boissons de base.",
      large: (price) => `Existe aussi en grand : ${price}.`,
    },
    chips: {
      temp: { caliente: "Chaud", frio: "Froid", ambos: "Chaud ou glacé" },
      caffeine: ["Sans caféine", "Un peu de caféine", "Énergie douce", "Avec du café"],
      sweet: ["Pas sucré", "Peu sucré", "Sucré", "Très sucré"],
    },
  },
};

/** Las cuatro bebidas base del Bono Curso (apps/app/lib/exam-pass/config.ts). */
const BONO_BASE = new Set(["Espresso", "Americano", "Cortado", "Café con leche"]);

// «Cremoso» y «chocolate» están en las dos preguntas: la etiqueta depende de si es bebida o comida.
const DRINK_TASTE: Record<string, Copy<string>> = Object.fromEntries(QUESTIONS.taste.options.map((o) => [o.value, o.label]));
const FOOD_TASTE: Record<string, Copy<string>> = Object.fromEntries(QUESTIONS.food.options.map((o) => [o.value, o.label]));

function artFor(profile: Profile): string {
  return profile.art ?? productFor(profile).familyArt;
}

function reasons(p: Profile, ui: UiCopy, lang: Lang): string[] {
  const out: string[] = [];
  if (p.kind === "bebida") {
    out.push(ui.chips.temp[p.temp], ui.chips.caffeine[p.caffeine]);
  }
  out.push(ui.chips.sweet[p.sweet]);
  const taste = (p.kind === "bebida" ? DRINK_TASTE : FOOD_TASTE)[p.tastes[0]];
  if (taste && p.tastes[0] !== "sorpresa") out.push(taste[lang]);
  return out;
}

function tips(item: Scored, a: Answers, ui: UiCopy, lang: Lang): string[] {
  const p = item.profile;
  const out: string[] = [];
  const large = largeVersionOf(p.pos);
  if (large) out.push(ui.tips.large(formatPrice(large.price, lang)));
  if (item.decafTip) out.push(ui.tips.decaf);
  if (a.milk === "vegetal" && p.milk) out.push(ui.tips.milk);
  if (p.kind === "bebida" && p.temp === "ambos") out.push(ui.tips.iced);
  if (p.cup) out.push(ui.tips.cup);
  if (BONO_BASE.has(p.pos)) out.push(ui.tips.bono);
  if (a.want === "beber" && p.kind === "bebida" && !p.cup && a.sweet !== "nada") out.push(ui.tips.makeMenu);
  return out;
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="pill pill-leaf">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProductHeading({
  item,
  lang,
  headingRef,
  size = "lg",
}: {
  item: Scored;
  lang: Lang;
  headingRef?: Ref<HTMLHeadingElement>;
  size?: "lg" | "md";
}) {
  return (
    <div className="flex items-center gap-4">
      <ArtTile art={artFor(item.profile)} size={size === "lg" ? 96 : 72} />
      <div className="min-w-0">
        <h3
          ref={headingRef}
          tabIndex={-1}
          className={cx("display leading-tight text-forest outline-none", size === "lg" ? "text-[1.75rem] sm:text-[2rem]" : "text-[1.35rem]")}
        >
          {item.product.name[lang]}
        </h3>
        <p className="tabular mt-0.5 font-semibold text-clay-deep">{formatPrice(item.product.price, lang)}</p>
      </div>
    </div>
  );
}

export function Recomendador() {
  const { lang } = useLang();
  const ui = useCopy(UI);
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [option, setOption] = useState(0);
  const [surprise, setSurprise] = useState<Scored | null>(null);
  const focusRef = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);
  const questionId = useId();

  const steps = stepsFor(answers.want);
  const current = steps[Math.min(step, steps.length - 1)];
  const question = QUESTIONS[current];

  const result = useMemo(() => {
    if (!done || surprise) return null;
    if (answers.want === "ambos") return { kind: "pair" as const, pairs: rankPairs(answers).slice(0, 8) };
    const list = answers.want === "comer" ? rankFoods(answers) : rankDrinks(answers);
    return { kind: "single" as const, picks: list.slice(0, 6) };
  }, [done, surprise, answers]);

  // Al cambiar de pregunta o al llegar al resultado, el foco va al titular
  // (lectores de pantalla y teclado), pero nunca en la primera carga.
  useEffect(() => {
    if (interacted.current) focusRef.current?.focus({ preventScroll: true });
  }, [step, done, option, surprise]);

  function act(fn: () => void) {
    interacted.current = true;
    fn();
  }

  function choose(value: string) {
    act(() => {
      const next = { ...answers, [current]: value } as Answers;
      // Cambiar lo que te apetece reinicia el camino.
      if (current === "want") {
        setAnswers({ want: value as Answers["want"] });
        setStep(1);
        return;
      }
      setAnswers(next);
      const path = stepsFor(next.want);
      if (step + 1 >= path.length) {
        setOption(0);
        setDone(true);
      } else {
        setStep(step + 1);
      }
    });
  }

  function back() {
    act(() => {
      if (surprise) {
        setSurprise(null);
        setDone(false);
        setStep(0);
        return;
      }
      if (done) setDone(false);
      else setStep(Math.max(0, step - 1));
    });
  }

  function restart() {
    act(() => {
      setAnswers({});
      setStep(0);
      setDone(false);
      setOption(0);
      setSurprise(null);
    });
  }

  function runPreset(a: Answers) {
    act(() => {
      setAnswers(a);
      setStep(stepsFor(a.want).length - 1);
      setOption(0);
      setSurprise(null);
      setDone(true);
    });
  }

  function surpriseMe() {
    act(() => {
      const pool = PROFILES.filter((p) => !p.varies);
      const profile = pool[Math.floor(Math.random() * pool.length)];
      setSurprise({ profile, product: productFor(profile), score: 0, decafTip: false });
      setAnswers({});
      setOption(0);
      setDone(true);
    });
  }

  const total = answers.want ? steps.length : undefined;
  const progress = done ? 1 : total ? step / total : 0;

  // ── Resultado ──────────────────────────────────────────────────────
  let resultView: ReactNode = null;
  if (done && surprise) {
    resultView = (
      <div className="space-y-5">
        <p className="eyebrow flex items-center gap-2">
          <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
          {ui.surprised}
        </p>
        <ProductHeading item={surprise} lang={lang} headingRef={focusRef} />
        <p className="text-[16px] leading-relaxed text-ink-soft">{surprise.profile.pitch[lang]}</p>
        <Chips items={reasons(surprise.profile, ui, lang)} />
        <ResultActions familyId={surprise.product.familyId} ui={ui} onAnother={surpriseMe} onRestart={restart} />
      </div>
    );
  } else if (result?.kind === "single" && result.picks.length) {
    const pick = result.picks[option % result.picks.length];
    const alternatives = result.picks.filter((p) => p !== pick).slice(0, 2);
    const itemTips = tips(pick, answers, ui, lang);
    resultView = (
      <div className="space-y-5">
        <p className="eyebrow flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {ui.recommend}
        </p>
        <ProductHeading item={pick} lang={lang} headingRef={focusRef} />
        <p className="text-[16px] leading-relaxed text-ink-soft">{pick.profile.pitch[lang]}</p>
        <div>
          <p className="mb-2 text-[13px] font-semibold text-ink-muted">{ui.why}</p>
          <Chips items={reasons(pick.profile, ui, lang)} />
        </div>
        {itemTips.length > 0 && <TipList items={itemTips} />}
        <ResultActions
          familyId={pick.product.familyId}
          ui={ui}
          onAnother={() => act(() => setOption(option + 1))}
          onRestart={restart}
        />
        {alternatives.length > 0 && (
          <div className="border-t border-ink/[0.07] pt-4">
            <p className="mb-2 text-[13px] font-semibold text-ink-muted">{ui.alsoLike}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {alternatives.map((alt) => (
                <li key={alt.profile.pos}>
                  <button
                    type="button"
                    onClick={() => act(() => setOption(result.picks.indexOf(alt)))}
                    className="flex w-full items-center gap-3 rounded-2xl border border-ink/10 bg-paper-light px-3 py-2.5 text-left transition-colors hover:border-forest/40"
                  >
                    <ArtTile art={artFor(alt.profile)} size={44} />
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-ink">{alt.product.name[lang]}</span>
                      <span className="tabular text-[13px] text-ink-muted">{formatPrice(alt.product.price, lang)}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  } else if (result?.kind === "pair" && result.pairs.length) {
    const pair: Pair = result.pairs[option % result.pairs.length];
    const { price } = pair;
    const totalLabel = formatPrice(price.total, lang);
    const priceLine =
      price.deal?.kind === "combo"
        ? ui.combo(totalLabel, formatPrice(price.saving, lang))
        : price.deal?.kind === "menu"
          ? ui.menu(totalLabel)
          : ui.together(totalLabel);
    const itemTips = tips(pair.drink, answers, ui, lang);
    resultView = (
      <div className="space-y-5">
        <p className="eyebrow flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {ui.plan}
        </p>
        <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <div className="card-inset p-4">
            <ProductHeading item={pair.drink} lang={lang} headingRef={focusRef} size="md" />
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{pair.drink.profile.pitch[lang]}</p>
          </div>
          <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-sage-light text-forest" aria-hidden="true">
            <Plus className="h-4 w-4" />
          </span>
          <div className="card-inset p-4">
            <ProductHeading item={pair.food} lang={lang} size="md" />
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{pair.food.profile.pitch[lang]}</p>
          </div>
        </div>
        <p className="rounded-2xl bg-clay-light/70 px-4 py-3 text-[15px] font-semibold text-clay-dark">{priceLine}</p>
        <div>
          <p className="mb-2 text-[13px] font-semibold text-ink-muted">{ui.why}</p>
          <Chips items={[...reasons(pair.drink.profile, ui, lang), ...reasons(pair.food.profile, ui, lang).slice(-1)]} />
        </div>
        {itemTips.length > 0 && <TipList items={itemTips} />}
        <ResultActions
          familyId={pair.drink.product.familyId}
          ui={ui}
          onAnother={() => act(() => setOption(option + 1))}
          onRestart={restart}
        />
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="h-1.5 bg-ink/[0.06]" aria-hidden="true">
        <div
          className="h-full bg-forest transition-[width] duration-500 ease-out-soft"
          style={{ width: `${progress * 100}%`, borderRadius: progress < 1 ? "0 999px 999px 0" : undefined }}
        />
      </div>
      <div className="p-5 sm:p-8">
        {done ? (
          <div>
            <button type="button" onClick={back} className="mb-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-soft hover:text-forest">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {ui.back}
            </button>
            {resultView}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[13px] font-semibold text-ink-muted">{ui.step(step + 1, total)}</p>
              {step > 0 && (
                <button type="button" onClick={back} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-soft hover:text-forest">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {ui.back}
                </button>
              )}
            </div>
            <h3 id={questionId} ref={focusRef} tabIndex={-1} className="display mt-2 text-[1.75rem] leading-tight text-forest outline-none sm:text-[2.1rem]">
              {question.title[lang]}
            </h3>
            <div
              role="group"
              aria-labelledby={questionId}
              className={cx("mt-5 grid gap-2.5", question.options.length > 3 ? "grid-cols-2 sm:grid-cols-3" : "sm:grid-cols-3")}
            >
              {question.options.map((opt) => {
                const selected = answers[current] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => choose(opt.value)}
                    className={cx(
                      "flex min-h-[64px] items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-[transform,border-color,background-color] duration-200 active:scale-[0.98]",
                      selected ? "border-forest bg-sage-pale" : "border-ink/10 bg-paper-light hover:border-forest/40 hover:bg-white",
                    )}
                  >
                    {opt.art && <img src={`/brand/menu/${opt.art}.png`} alt="" aria-hidden="true" width={192} height={192} className="h-11 w-11 shrink-0" />}
                    <span className="min-w-0">
                      <span className="block font-semibold leading-snug text-ink">{opt.label[lang]}</span>
                      {opt.hint && <span className="mt-0.5 block text-[13px] leading-snug text-ink-muted">{opt.hint[lang]}</span>}
                    </span>
                  </button>
                );
              })}
            </div>

            {step === 0 && (
              <div className="mt-7 border-t border-ink/[0.07] pt-5">
                <p className="text-[13px] font-semibold text-ink-muted">{ui.rush}</p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {PRESETS.map((preset) => (
                    <li key={preset.id}>
                      <button
                        type="button"
                        onClick={() => runPreset(preset.answers)}
                        className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-light py-1 pl-1 pr-3.5 text-[14px] font-semibold text-ink transition-colors hover:border-forest/40"
                      >
                        <img src={`/brand/menu/${preset.art}.png`} alt="" aria-hidden="true" width={192} height={192} className="h-7 w-7" />
                        {preset.label[lang]}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={surpriseMe}
                      className="inline-flex h-9 items-center gap-2 rounded-full bg-sage-light px-3.5 text-[14px] font-semibold text-forest transition-colors hover:bg-sage-pale"
                    >
                      <Shuffle className="h-4 w-4" aria-hidden="true" />
                      {ui.surprise}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-ink/[0.07] pt-4 text-[13px] text-ink-muted">
          <span>{ui.allergy}</span>
          <TextLink to="/alergenos">{ui.allergyLink}</TextLink>
          <span className="w-full sm:w-auto">{ui.privacy}</span>
        </p>
      </div>
    </div>
  );
}

function TipList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((tip) => (
        <li key={tip} className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
          {tip}
        </li>
      ))}
    </ul>
  );
}

function ResultActions({
  familyId,
  ui,
  onAnother,
  onRestart,
}: {
  familyId: string;
  ui: UiCopy;
  onAnother: () => void;
  onRestart: () => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2.5">
        <ButtonLink to={SITE.app.home}>{ui.order}</ButtonLink>
        <ButtonLink to={`/carta#${familyId}`} variant="glass" arrow>
          {ui.seeMenu}
        </ButtonLink>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <button type="button" onClick={onAnother} className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-forest hover:underline">
          <Shuffle className="h-4 w-4" aria-hidden="true" />
          {ui.another}
        </button>
        <button type="button" onClick={onRestart} className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink-soft hover:text-forest">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          {ui.restart}
        </button>
      </div>
    </div>
  );
}
