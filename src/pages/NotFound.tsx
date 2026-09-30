import { useCopy, type Copy } from "@/i18n";
import { ButtonLink, Container, SectionHeader } from "@/components/ui";

const COPY: Copy<{ eyebrow: string; title: string; lead: string; home: string; menu: string }> = {
  es: {
    eyebrow: "Error 404",
    title: "Esta página no ha brotado",
    lead: "La dirección no existe o ha cambiado. La web se ha renovado: puede que lo que buscas esté en la carta o en el inicio.",
    home: "Ir al inicio",
    menu: "Ver la carta",
  },
  en: {
    eyebrow: "Error 404",
    title: "This page never sprouted",
    lead: "The address doesn’t exist or has changed. We’ve renewed the website: what you’re looking for may be on the menu or the home page.",
    home: "Go home",
    menu: "See the menu",
  },
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page n’a pas germé",
    lead: "L’adresse n’existe pas ou a changé. Le site a été renouvelé : ce que vous cherchez est peut-être sur la carte ou sur l’accueil.",
    home: "Aller à l’accueil",
    menu: "Voir la carte",
  },
};

export default function NotFound() {
  const c = useCopy(COPY);
  return (
    <section aria-labelledby="titulo-404" className="pt-10 sm:pt-16">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeader as="h1" id="titulo-404" eyebrow={c.eyebrow} title={c.title} intro={c.lead} />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/">{c.home}</ButtonLink>
              <ButtonLink to="/carta" variant="glass" arrow>
                {c.menu}
              </ButtonLink>
            </div>
          </div>
          <div className="md:col-span-5">
            <img src="/brand/emblema-grande.webp" alt="" aria-hidden="true" width={520} height={773} className="mx-auto h-auto w-[180px] opacity-80" />
          </div>
        </div>
      </Container>
    </section>
  );
}
