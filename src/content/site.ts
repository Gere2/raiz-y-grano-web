/**
 * Hechos del negocio: FUENTE ÚNICA de la web.
 *
 * La web anterior decía «9:00 – 17:00» en Contacto y «7:30 – 19:00» en el pie.
 * Todo lo que se repite en varias páginas (horario, dirección, enlaces a la
 * app, datos legales) vive aquí y solo aquí.
 *
 * De dónde sale cada dato (verificado el 30-09-2026):
 * - Horario: cartel de horarios del curso 2026/27 y `DEFAULT_DAY` de
 *   `apps/app/lib/app-ordering-schedule.ts` (lunes a viernes, 8:00 – 13:30 y
 *   14:00 – 19:00; sábado y domingo, cerrado).
 * - Datos legales: `apps/app/lib/legal/company.ts` (aviso legal de la app).
 * - Enlaces: rutas vivas de app.raizygrano.com.
 */

export const SITE = {
  name: "Raíz y Grano",
  url: "https://raizygrano.com",

  app: {
    home: "https://app.raizygrano.com/",
    bono: "https://app.raizygrano.com/bono",
    rewards: "https://app.raizygrano.com/rewards",
    // Sin enlace al pedido de profesores: el reparto aún no está disponible
    // (30-09-2026). La web ofrece lista de espera (src/content/waitlist.ts).
    privacy: "https://app.raizygrano.com/privacidad",
    terms: "https://app.raizygrano.com/condiciones",
  },

  instagram: {
    url: "https://www.instagram.com/raizygrano",
    handle: "@raizygrano",
  },
  email: "info@raizygrano.com",
  phone: "696 766 943",
  maps: "https://maps.app.goo.gl/tBJEeQn1JR6FbxsH9",

  address: {
    street: "Ctra. Pozuelo-Majadahonda km 1,800",
    postalCode: "28223",
    locality: "Pozuelo de Alarcón",
    region: "Madrid",
    country: "ES",
    campus: "Universidad Francisco de Vitoria",
  },

  /** Lunes (1) a viernes (5). Mismo horario todos los días lectivos. */
  hours: {
    days: [1, 2, 3, 4, 5],
    shifts: [
      { opens: "08:00", closes: "13:30" },
      { opens: "14:00", closes: "19:00" },
    ],
  },

  /** Bono Curso 26/27 (`apps/app/lib/exam-pass/config.ts`). */
  bono: {
    credits: 10,
    validUntil: "2027-07-31",
  },

  /** Menú desayuno o merienda (`apps/app/lib/breakfast-menu.ts`). */
  breakfastMenuSupplement: 2,

  legal: {
    name: "EURO SIRIUS, S.L.",
    taxId: "B56142656",
    address: "Calle Villagarcía, 8, bajo B, 28011 Madrid",
    registry:
      "Registro Mercantil de Madrid, tomo 45.507, folio 32, sección 8, hoja M-800422, inscripción 1",
    venue:
      "Frente al Edificio San Agustín de Hipona (Edificio H), Universidad Francisco de Vitoria, Ctra. Pozuelo-Majadahonda km 1,800, 28223 Pozuelo de Alarcón (Madrid)",
    /** Última revisión del aviso legal y la política de privacidad de la web. */
    updated: "2026-09-30",
  },
} as const;

export type Shift = (typeof SITE.hours.shifts)[number];

/** «8:00», no «08:00»: así se escribe la hora en la carta y en los carteles. */
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":");
  return `${Number(h)}:${m}`;
}

/** «8:00 – 13:30», con semirraya entre espacios (la de los rangos). */
export function formatShift(shift: Shift): string {
  return `${formatTime(shift.opens)} – ${formatTime(shift.closes)}`;
}
