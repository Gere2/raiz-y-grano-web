import { describe, expect, it } from "vitest";
import { render } from "./entry-server";
import { PAGES } from "./routes";
import { headTags, llmsTxt, localBusiness, redirectPage, sitemap } from "./seo";

/**
 * Lo que ven Google, WhatsApp y quien tiene el JavaScript desactivado: el
 * HTML prerenderizado de cada página.
 */
describe("páginas prerenderizadas", () => {
  it("renderiza cada página con su cabecera, su pie y un único h1", () => {
    for (const page of PAGES) {
      const html = render(page.path);
      expect(html, page.path).toContain("Raíz y Grano");
      expect(html.match(/<h1[\s>]/g)?.length, page.path).toBe(1);
      expect(html, page.path).toContain("EURO SIRIUS, S.L.");
    }
  });

  it("dice lo que el informe y la app dicen hoy, y no lo de la web anterior", () => {
    const home = render("/");
    expect(home).toContain("Bono Curso 26/27");
    expect(home).toContain("31 de julio de 2027");
    expect(home).toContain("Todo empezó bajo tierra");
    expect(home).toContain("8:00 – 13:30");
    expect(home).toContain("14:00 – 19:00");
    for (const stale of ["Lovable", "9:00 - 17:00", "7:30", "unsplash", "Croissants", "Cero Desperdicio", "Matchá"]) {
      expect(home).not.toContain(stale);
    }
  });

  it("no publica cifras de negocio ni nombres de personas del informe", () => {
    const all = PAGES.map((p) => render(p.path)).join("\n");
    for (const internal of ["Ignacio", "tickets", "1.663", "552", "427 €", "Hacienda", "deuda", "Seguridad Social", "liquidaci", "Enverde"]) {
      expect(all, internal).not.toContain(internal);
    }
  });

  it("no manda a nadie al pedido de profesores mientras el reparto no esté abierto", () => {
    const all = PAGES.map((p) => render(p.path)).join("\n");
    expect(all).not.toContain("teacher-orders");
    const prof = render("/profesorado");
    expect(prof).toContain("Próximamente");
    expect(prof).toContain("lista de espera");
    expect(prof).toContain("mailto:info@raizygrano.com?subject=Lista%20de%20espera");
    expect(render("/")).toContain("/profesorado#lista-espera");
  });

  it("tiene el recomendador en la portada y en su página, empezando por la primera pregunta", () => {
    for (const path of ["/", "/recomendador"]) {
      const html = render(path);
      expect(html, path).toContain("¿No sabes qué tomar?");
      expect(html, path).toContain("¿Qué te apetece?");
      expect(html, path).toContain("Necesito despertarme");
    }
    expect(render("/carta")).toContain('href="/recomendador"');
  });

  it("enseña la carta con precios en formato de carta", () => {
    const carta = render("/carta");
    expect(carta).toContain("Café de especialidad V60");
    expect(carta).toContain("4,50 €");
    expect(carta).toContain("Strawberry Break");
    expect(carta).toContain("28 de septiembre de 2026");
  });

  it("responde con la ficha retirada a los QR antiguos y con 404 al resto", () => {
    expect(render("/p/galleta-chocochip")).toContain("Esta ficha ya no está vigente");
    expect(render("/p/no-existe")).toContain("Esta página no ha brotado");
  });
});

describe("cabecera y datos para buscadores", () => {
  it("pone título, descripción, canónica y Open Graph", () => {
    const head = headTags(PAGES.find((p) => p.path === "/carta")!);
    expect(head).toContain("<title>La carta 2026/27 · Raíz y Grano</title>");
    expect(head).toContain('<link rel="canonical" href="https://raizygrano.com/carta" />');
    expect(head).toContain('property="og:image" content="https://raizygrano.com/og.jpg"');
    expect(head).not.toContain("ld+json");
  });

  it("marca como noindex las fichas retiradas", () => {
    const head = headTags(PAGES.find((p) => p.path.startsWith("/p/"))!);
    expect(head).toContain('name="robots" content="noindex"');
    expect(head).not.toContain("canonical");
  });

  it("describe el local con su horario real", () => {
    const data = localBusiness();
    expect(data["@type"]).toBe("CafeOrCoffeeShop");
    expect(data.openingHoursSpecification).toEqual([
      expect.objectContaining({ opens: "08:00", closes: "13:30", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] }),
      expect.objectContaining({ opens: "14:00", closes: "19:00" }),
    ]);
    expect(headTags(PAGES[0])).toContain('"@type":"CafeOrCoffeeShop"');
  });

  it("genera redirecciones que conservan la consulta y el ancla", () => {
    const html = redirectPage("/carta#combos");
    expect(html).toContain('content="0; url=https://raizygrano.com/carta#combos"');
    expect(html).toContain('"/carta#combos"');
  });

  it("resume horario y dónde pedir en llms.txt", () => {
    const txt = llmsTxt();
    expect(txt).toContain("de 8:00 a 13:30 y de 14:00 a 19:00");
    expect(txt).toContain("https://app.raizygrano.com/");
    expect(txt).not.toContain("/p/");
  });

  it("deja fuera del sitemap lo que no se indexa", () => {
    const xml = sitemap("2026-09-30");
    expect(xml).toContain("<loc>https://raizygrano.com/</loc>");
    expect(xml).toContain("<loc>https://raizygrano.com/carta</loc>");
    expect(xml).not.toContain("/p/");
  });
});
