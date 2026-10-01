import { useCopy, type Copy } from "@/i18n";
import { Recomendador } from "@/components/Recomendador";
import { Container, SectionHeader, TextLink } from "@/components/ui";

export const RECOMENDADOR_COPY: Copy<{
  eyebrow: string;
  title: string;
  lead: string;
  howTitle: string;
  how: string;
  menu: string;
}> = {
  es: {
    eyebrow: "Recomendador",
    title: "¿No sabes qué tomar?",
    lead: "Cuéntanos qué te apetece ahora mismo y te decimos qué pedir de la carta. Un toque por pregunta.",
    howTitle: "Cómo elegimos",
    how: "Cada producto de la carta tiene su perfil: si es frío o caliente, cuánta cafeína lleva, lo dulce que es y a qué sabe. Con tus respuestas descartamos lo que no encaja y te enseñamos lo que más se parece a lo que te apetece, con su precio y, si sale más barato, el combo o el menú.",
    menu: "Ver la carta completa",
  },
  en: {
    eyebrow: "Recommender",
    title: "Not sure what to get?",
    lead: "Tell us what you fancy right now and we’ll tell you what to order. One tap per question.",
    howTitle: "How we choose",
    how: "Every product on the menu has a profile: hot or cold, how much caffeine, how sweet and what it tastes like. We rule out what doesn’t fit your answers and show you the closest match, with its price and, when it’s cheaper, the combo or menu.",
    menu: "See the full menu",
  },
  fr: {
    eyebrow: "Recommandations",
    title: "Vous hésitez ?",
    lead: "Dites-nous ce qui vous ferait envie maintenant et nous vous disons quoi commander. Une touche par question.",
    howTitle: "Comment on choisit",
    how: "Chaque produit de la carte a son profil : chaud ou froid, combien de caféine, à quel point il est sucré et quel goût il a. On écarte ce qui ne correspond pas à vos réponses et on vous montre ce qui s’en rapproche le plus, avec son prix et, quand c’est moins cher, la formule.",
    menu: "Voir toute la carte",
  },
};

export default function RecomendadorPage() {
  const c = useCopy(RECOMENDADOR_COPY);
  return (
    <section aria-labelledby="titulo-recomendador" className="pt-8 sm:pt-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeader as="h1" id="titulo-recomendador" eyebrow={c.eyebrow} title={c.title} intro={c.lead} />
            <img
              src="/brand/semillas.webp"
              alt=""
              aria-hidden="true"
              width={700}
              height={695}
              className="mt-8 hidden h-auto w-[220px] opacity-90 lg:block"
            />
          </div>
          {/* En el móvil, primero el cuestionario y después la explicación. */}
          <div className="lg:col-span-8 lg:row-span-2">
            <Recomendador />
          </div>
          <div className="card-inset p-5 lg:col-span-4">
            <h2 className="display text-[1.2rem] text-forest">{c.howTitle}</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{c.how}</p>
            <TextLink to="/carta" className="mt-3 inline-block text-[14.5px]">
              {c.menu}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
