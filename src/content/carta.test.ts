import { describe, expect, it } from "vitest";
import { CARTA_VERSION, FAMILIES, fromPrice, posProducts } from "./carta";

/**
 * Catálogo de producción 2026-2027-v22 (verificado el 2026-09-28): los 53
 * productos visibles del TPV con su precio. Si el TPV cambia, este test falla
 * hasta que la carta de la web y esta lista se actualicen juntas.
 */
const TPV_V22: [string, number][] = [
  ["Agua", 1],
  ["Americano", 2],
  ["Açaí Bowl", 6],
  ["Café Bombón", 2.5],
  ["Café con leche", 2.5],
  ["Café con leche + bizcocho de zanahoria", 4.5],
  ["Café con leche + cheesecake", 5.5],
  ["Café con leche + muffin de zanahoria y nueces", 4.5],
  ["Café con leche grande", 3],
  ["Café de especialidad V60", 4.5],
  ["Café en CookieCup chocolate", 4.5],
  ["Café en CookieCup original", 3.5],
  ["Cappuccino", 2.5],
  ["Chai Latte", 3],
  ["Chai en CookieCup chocolate", 5],
  ["Chai en CookieCup original", 4],
  ["Chai grande", 3.5],
  ["ColaCao 0% azúcares añadidos", 2],
  ["Cold Brew", 3.5],
  ["Cookie chocolate chips", 2],
  ["Cookie de la semana", 2],
  ["Cortado", 2.3],
  ["Dirty Chai", 4.5],
  ["Dirty Matcha grande", 4],
  ["Espresso", 2],
  ["Flat White", 3],
  ["Flat White con hielo", 4],
  ["Iced Chai", 4],
  ["Iced Latte", 3.5],
  ["Iced Matcha", 3.5],
  ["Iced Matcha con sirope de vainilla", 4],
  ["Iced Matcha de vainilla", 3.5],
  ["Iced Mocha", 3.5],
  ["Magdalena de temporada", 1.5],
  ["Matcha Latte", 3],
  ["Matcha Latte + bizcocho de zanahoria", 5],
  ["Matcha en CookieCup chocolate", 5],
  ["Matcha en CookieCup original", 4],
  ["Moca", 2.8],
  ["Muffin de zanahoria y nueces", 2.5],
  ["Pistachio Iced Latte", 4.5],
  ["Pistachio Iced Matcha", 4.5],
  ["Rooibos, hibisco, fresa y ciruela", 2],
  ["Smoothie", 4.5],
  ["Strawberry Break", 6],
  ["Strawberry Iced Matcha", 4.5],
  ["Tarta de queso / cheesecake", 3.5],
  ["Tarta de zanahoria y nueces", 2.5],
  ["Té Receta de la Abuela", 2],
  ["Té de temporada", 2],
  ["Té verde", 2],
  ["Té verde con jengibre y limón", 2],
  ["Vanilla Iced Latte", 4],
];

describe("carta 2026/27", () => {
  it("es la versión del catálogo que dice ser", () => {
    expect(CARTA_VERSION).toBe("2026-2027-v22");
  });

  it("tiene todos los productos del TPV, y ninguno más", () => {
    const web = posProducts().map((p) => p.pos).sort();
    expect(web).toEqual(TPV_V22.map(([name]) => name).sort());
  });

  it("cobra lo mismo que el TPV", () => {
    const tpv = new Map(TPV_V22);
    for (const { pos, price } of posProducts()) {
      expect([pos, price]).toEqual([pos, tpv.get(pos)]);
    }
  });

  it("no repite productos", () => {
    const names = posProducts().map((p) => p.pos);
    expect(new Set(names).size).toBe(names.length);
  });

  it("se agrupa en las nueve familias de la carta impresa", () => {
    expect(FAMILIES.map((f) => f.id)).toEqual([
      "cafe", "cafe-frio", "matcha", "chai", "tes", "fruta", "reposteria", "cookiecup", "combos",
    ]);
  });

  it("calcula el «desde» de cada familia", () => {
    const byId = Object.fromEntries(FAMILIES.map((f) => [f.id, fromPrice(f)]));
    expect(byId).toEqual({
      cafe: 2, "cafe-frio": 3.5, matcha: 3, chai: 2, tes: 2, fruta: 4.5, reposteria: 1.5, cookiecup: 3.5, combos: 4.5,
    });
  });

  it("tiene cada texto en los tres idiomas", () => {
    for (const family of FAMILIES) {
      for (const text of [family.name, family.blurb, ...family.items.flatMap((i) => [i.name, i.note].filter(Boolean))]) {
        expect(text && text.es && text.en && text.fr).toBeTruthy();
      }
    }
  });
});
