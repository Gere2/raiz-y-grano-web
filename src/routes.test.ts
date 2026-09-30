import { describe, expect, it } from "vitest";
import { ARCHIVED_SHEETS, LEGACY_ANCHORS, PAGES, REDIRECTS, findPage, legacyTarget } from "./routes";

const go = (hash: string) => legacyTarget(hash, REDIRECTS, LEGACY_ANCHORS);

describe("enlaces de la web anterior (HashRouter)", () => {
  it("lleva cada ruta antigua a su página nueva", () => {
    expect(go("#/")).toBe("/");
    expect(go("#/menu")).toBe("/carta");
    expect(go("#/origen")).toBe("/origen");
    expect(go("#/combos")).toBe("/carta#combos");
    expect(go("#/recurrentes")).toBe("/la-app");
    expect(go("#/legal/privacidad")).toBe("/privacidad");
    expect(go("#/politica-de-privacidad")).toBe("/privacidad");
    expect(go("#/legal/alergenos")).toBe("/alergenos");
    expect(go("#/qr")).toBe("/alergenos");
    expect(go("#/p")).toBe("/alergenos");
  });

  it("mantiene vivos los QR impresos de las fichas, con su ?lang y ?src", () => {
    for (const slug of ARCHIVED_SHEETS) {
      expect(go(`#/p/${slug}?lang=en&src=qr`)).toBe(`/p/${slug}?lang=en&src=qr`);
    }
    expect(go("#/p/cafe-insignia?lang=fr&src=qr")).toBe("/origen?lang=fr&src=qr");
  });

  it("pone la consulta antes del ancla", () => {
    expect(go("#/combos?lang=en")).toBe("/carta?lang=en#combos");
  });

  it("traduce las anclas de la antigua página única", () => {
    expect(go("#menu")).toBe("/carta");
    expect(go("#contact")).toBe("/#visitanos");
    expect(go("#about")).toBe("/historia");
  });

  it("no toca las anclas nuevas ni las vacías", () => {
    for (const hash of ["", "#", "#visitanos", "#carta", "#contenido", "#combos", "#instalar"]) {
      expect(go(hash)).toBeNull();
    }
  });

  it("es autocontenida, porque el prerenderizado copia su código en el <head>", () => {
    const source = legacyTarget.toString();
    const inlined = new Function(`return (${source});`)() as typeof legacyTarget;
    expect(inlined("#/menu?lang=en", REDIRECTS, LEGACY_ANCHORS)).toBe("/carta?lang=en");
  });
});

describe("mapa de la web", () => {
  it("no tiene rutas duplicadas ni redirecciones que pisen páginas", () => {
    const paths = PAGES.map((p) => p.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const from of Object.keys(REDIRECTS)) expect(paths).not.toContain(from);
  });

  it("redirige siempre a una página que existe", () => {
    for (const to of Object.values(REDIRECTS)) {
      if (/^https:\/\/app\.raizygrano\.com\//.test(to)) continue;
      expect(findPage(to.split("#")[0])).toBeDefined();
    }
  });

  it("tiene título y descripción en los tres idiomas, y descripciones de buscador razonables", () => {
    for (const page of PAGES) {
      for (const lang of ["es", "en", "fr"] as const) {
        expect(page.title[lang].length).toBeGreaterThan(8);
        expect(page.description[lang].length).toBeGreaterThan(30);
        expect(page.description[lang].length).toBeLessThanOrEqual(170);
      }
    }
  });

  it("encuentra páginas con o sin barra final", () => {
    expect(findPage("/carta/")?.path).toBe("/carta");
    expect(findPage("/")?.path).toBe("/");
    expect(findPage("/no-existe")).toBeUndefined();
  });
});
