import { Archive } from "lucide-react";
import { useCopy, type Copy } from "@/i18n";
import { AllergenInfo } from "@/pages/Alergenos";
import { ButtonLink, Container, IconTile, SectionHeader } from "@/components/ui";

/**
 * /p/<ficha>: las fichas de repostería de 2024 que se imprimieron en códigos
 * QR. La repostería de este curso llega de obradores artesanos y aquellas
 * fichas (ingredientes, alérgenos y nutrición de recetas propias) pueden no
 * coincidir con lo que se sirve hoy. Mostrar alérgenos equivocados es peor
 * que no mostrarlos, así que la URL sigue viva pero explica que la ficha se
 * retiró y remite a la barra.
 */

const COPY: Copy<{ eyebrow: string; title: string; lead: string; allergens: string; menu: string }> = {
  es: {
    eyebrow: "Ficha retirada",
    title: "Esta ficha ya no está vigente",
    lead: "Has llegado desde un código QR de nuestra repostería de 2024. La de este curso llega de obradores artesanos y su receta puede no coincidir con la de aquella ficha, así que la hemos retirado. Si tienes una alergia o una intolerancia, pregúntanos en barra antes de pedir.",
    allergens: "Información sobre alérgenos",
    menu: "Ver la carta de este curso",
  },
  en: {
    eyebrow: "Archived sheet",
    title: "This product sheet is no longer current",
    lead: "You’ve arrived from a QR code for our 2024 bakery. This year’s pastries come from artisan bakeries and their recipes may not match that sheet, so we’ve taken it down. If you have an allergy or intolerance, ask us at the bar before you order.",
    allergens: "Allergen information",
    menu: "See this year’s menu",
  },
  fr: {
    eyebrow: "Fiche retirée",
    title: "Cette fiche n’est plus à jour",
    lead: "Vous arrivez depuis un code QR de notre pâtisserie de 2024. Celle de cette année vient d’ateliers artisanaux et sa recette peut différer de cette fiche : nous l’avons donc retirée. En cas d’allergie ou d’intolérance, demandez-nous au comptoir avant de commander.",
    allergens: "Informations sur les allergènes",
    menu: "Voir la carte de cette année",
  },
};

export default function FichaRetirada() {
  const c = useCopy(COPY);
  return (
    <section aria-labelledby="titulo-ficha" className="pt-8 sm:pt-12">
      <Container>
        <div className="flex items-start gap-5">
          <IconTile size={60}>
            <Archive className="h-7 w-7" strokeWidth={1.7} />
          </IconTile>
          <SectionHeader as="h1" id="titulo-ficha" eyebrow={c.eyebrow} title={c.title} intro={c.lead} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/alergenos">{c.allergens}</ButtonLink>
          <ButtonLink to="/carta" variant="glass" arrow>
            {c.menu}
          </ButtonLink>
        </div>
        <div className="mt-12">
          <AllergenInfo />
        </div>
      </Container>
    </section>
  );
}
