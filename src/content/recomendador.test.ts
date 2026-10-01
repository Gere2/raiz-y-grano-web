import { describe, expect, it } from "vitest";
import { FAMILIES, productIndex } from "./carta";
import {
  PRESETS,
  PROFILES,
  pairPrice,
  rankDrinks,
  rankFoods,
  rankPairs,
  stepsFor,
  type Answers,
  type DrinkTaste,
  type Energy,
  type FoodTaste,
  type Hunger,
  type Milk,
  type Sweet,
  type TempAnswer,
} from "./recomendador";

const index = productIndex();
const ref = (pos: string) => {
  const product = index.get(pos);
  if (!product) throw new Error(pos);
  return product;
};
const top = (a: Answers) => rankDrinks(a)[0]?.profile.pos;

describe("perfiles del recomendador", () => {
  it("cubren toda la carta salvo el agua y los combos, y nada más", () => {
    const carta = [...index.keys()].filter((pos) => {
      const family = index.get(pos)!.familyId;
      return family !== "combos" && pos !== "Agua";
    });
    expect(PROFILES.map((p) => p.pos).sort()).toEqual(carta.sort());
  });

  it("no repiten producto y tienen frase en los tres idiomas", () => {
    expect(new Set(PROFILES.map((p) => p.pos)).size).toBe(PROFILES.length);
    for (const p of PROFILES) {
      expect(p.pitch.es && p.pitch.en && p.pitch.fr, p.pos).toBeTruthy();
      expect(p.tastes.length, p.pos).toBeGreaterThan(0);
    }
  });

  it("dicen la verdad sobre lo básico de la carta", () => {
    const byPos = new Map(PROFILES.map((p) => [p.pos, p]));
    // Lo frío de la carta es frío; las infusiones de fruta no llevan cafeína.
    for (const id of ["cafe-frio"]) {
      const family = FAMILIES.find((f) => f.id === id)!;
      for (const item of family.items) expect(byPos.get(item.pos!)!.temp, item.pos).toBe("frio");
    }
    expect(byPos.get("Rooibos, hibisco, fresa y ciruela")!.caffeine).toBe(0);
    expect(byPos.get("Té Receta de la Abuela")!.caffeine).toBe(0);
    // Los CookieCup son solo en caliente (bebidas de 220 ml en vaso de galleta).
    for (const p of PROFILES.filter((x) => x.cup)) expect(p.temp, p.pos).toBe("caliente");
  });
});

describe("recomendaciones", () => {
  it("«necesito despertarme»: un espresso", () => {
    expect(top({ want: "beber", temp: "igual", energy: "tope", taste: "cafe", sweet: "nada", milk: "normal" })).toBe("Espresso");
  });

  it("frío, suave, afrutado y un poco dulce: el matcha de fresa", () => {
    expect(top({ want: "beber", temp: "frio", energy: "suave", taste: "afrutado", sweet: "poco", milk: "normal" })).toBe(
      "Strawberry Iced Matcha",
    );
  });

  it("caliente, sin cafeína y sin leche: una infusión de fruta", () => {
    expect(["Rooibos, hibisco, fresa y ciruela", "Té Receta de la Abuela"]).toContain(
      top({ want: "beber", temp: "caliente", energy: "nada", taste: "afrutado", sweet: "nada", milk: "sinleche" }),
    );
  });

  it("frío, a tope, cremoso y de capricho: un iced latte de sirope", () => {
    expect(["Pistachio Iced Latte", "Vanilla Iced Latte"]).toContain(
      top({ want: "beber", temp: "frio", energy: "tope", taste: "cremoso", sweet: "capricho", milk: "normal" }),
    );
  });

  it("si quiere sabor a café sin cafeína, propone uno descafeinado y lo avisa", () => {
    const [best] = rankDrinks({ want: "beber", temp: "caliente", energy: "nada", taste: "cafe", sweet: "nada", milk: "normal" });
    expect(best.profile.decaf).toBe(true);
    expect(best.decafTip).toBe(true);
  });

  it("para comer con hambre y algo de fruta: el açaí", () => {
    expect(rankFoods({ want: "comer", food: "fruta", hunger: "hambre" })[0].profile.pos).toBe("Açaí Bowl");
  });

  it("«pausa en la biblioteca»: bebida caliente y suave con bizcocho, al precio del combo o del menú", () => {
    const [best] = rankPairs(PRESETS.find((p) => p.id === "biblioteca")!.answers);
    expect(best.drink.profile.temp).toBe("caliente");
    expect([1, 2]).toContain(best.drink.profile.caffeine);
    expect(best.food.profile.pos).toBe("Tarta de zanahoria y nueces");
    expect(best.price.saving).toBeGreaterThan(0);
  });

  it("el matcha latte no lleva azúcar: sale para quien no quiere nada dulce", () => {
    const firstThree = rankDrinks({ want: "beber", temp: "caliente", energy: "suave", taste: "verde", sweet: "nada", milk: "normal" })
      .slice(0, 3)
      .map((s) => s.profile.pos);
    expect(firstThree).toContain("Matcha Latte");
    expect(PROFILES.find((p) => p.pos === "Matcha Latte")!.sweet).toBe(0);
  });

  it("no ofrece el tamaño grande como otra opción: es la misma bebida", () => {
    for (const a of PRESETS.map((p) => p.answers)) {
      expect(rankDrinks(a).some((s) => s.profile.largeOf)).toBe(false);
    }
  });

  it("cada plan rápido da una recomendación", () => {
    for (const preset of PRESETS) {
      const a = preset.answers;
      const found = a.want === "ambos" ? rankPairs(a).length : a.want === "comer" ? rankFoods(a).length : rankDrinks(a).length;
      expect(found, preset.id).toBeGreaterThan(0);
    }
  });
});

describe("precio de bebida y comida juntas", () => {
  it("usa el combo de la carta cuando existe", () => {
    const p = pairPrice(ref("Café con leche"), ref("Tarta de queso / cheesecake"));
    expect(p).toMatchObject({ total: 5.5, regular: 6, saving: 0.5 });
    expect(p.deal?.kind).toBe("combo");
  });

  it("con el bizcocho, cualquier bebida es menú desayuno o merienda (+2 €)", () => {
    const p = pairPrice(ref("Iced Chai"), ref("Tarta de zanahoria y nueces"));
    expect(p).toMatchObject({ total: 6, regular: 6.5, saving: 0.5, deal: { kind: "menu" } });
  });

  it("sin oferta, suma la carta", () => {
    expect(pairPrice(ref("Espresso"), ref("Cookie chocolate chips"))).toMatchObject({ total: 4, saving: 0, deal: null });
  });

  it("el Strawberry Break es el matcha de fresa con cookie", () => {
    expect(pairPrice(ref("Strawberry Iced Matcha"), ref("Cookie chocolate chips")).total).toBe(6);
  });
});

describe("cualquier combinación de respuestas", () => {
  const temps: TempAnswer[] = ["caliente", "frio", "igual"];
  const energies: Energy[] = ["tope", "suave", "nada"];
  const tastes: DrinkTaste[] = ["cafe", "cremoso", "chocolate", "afrutado", "especiado", "verde"];
  const sweets: Sweet[] = ["nada", "poco", "capricho"];
  const milks: Milk[] = ["normal", "vegetal", "sinleche"];
  const foods: FoodTaste[] = ["chocolate", "cremoso", "zanahoria", "ligero", "fruta", "sorpresa"];
  const hungers: Hunger[] = ["picoteo", "hambre"];

  it("tiene recomendación de bebida, y respeta frío o caliente, leche y cafeína", () => {
    let checked = 0;
    for (const temp of temps)
      for (const energy of energies)
        for (const taste of tastes)
          for (const sweet of sweets)
            for (const milk of milks) {
              const a: Answers = { want: "beber", temp, energy, taste, sweet, milk };
              const list = rankDrinks(a);
              expect(list.length, JSON.stringify(a)).toBeGreaterThan(0);
              for (const { profile: p } of list) {
                if (temp === "caliente") expect(p.temp).not.toBe("frio");
                if (temp === "frio") expect(p.temp).not.toBe("caliente");
                if (milk === "sinleche") expect(p.milk).toBe(false);
                if (energy === "nada") expect(p.caffeine === 0 || p.decaf).toBe(true);
              }
              checked++;
            }
    expect(checked).toBe(3 * 3 * 6 * 3 * 3);
  });

  it("tiene pareja de bebida y comida, sin vaso de galleta repetido", () => {
    for (const temp of temps)
      for (const energy of energies)
        for (const milk of milks)
          for (const food of foods) {
            const a: Answers = { want: "ambos", temp, energy, taste: "cremoso", sweet: "poco", milk, food };
            const [best] = rankPairs(a);
            expect(best, JSON.stringify(a)).toBeDefined();
            expect(best.drink.profile.cup).toBeFalsy();
          }
  });

  it("tiene algo de comer", () => {
    for (const food of foods)
      for (const hunger of hungers) {
        expect(rankFoods({ want: "comer", food, hunger }).length).toBeGreaterThan(0);
      }
  });

  it("pregunta solo lo que hace falta", () => {
    expect(stepsFor()).toEqual(["want"]);
    expect(stepsFor("comer")).toEqual(["want", "food", "hunger"]);
    expect(stepsFor("beber")).toHaveLength(6);
    expect(stepsFor("ambos")).toHaveLength(7);
  });
});
