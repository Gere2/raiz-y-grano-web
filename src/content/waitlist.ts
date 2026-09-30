import type { Lang } from "@/i18n";
import { SITE } from "@/content/site";

/**
 * Lista de espera del servicio para reuniones de departamento.
 *
 * El pedido de profesores existe en la app, pero el reparto todavía no está
 * disponible (decisión del propietario, 30-09-2026): la web no manda a nadie
 * a pedir y, a quien le interese, le ofrece apuntarse a la lista de espera.
 *
 * Es un correo prerrellenado a propósito: la web no tiene formularios ni
 * servidor, y así no entra ningún tercero a tratar esos datos. La política de
 * privacidad (src/pages/Legal.tsx) explica para qué se usan.
 */

const SUBJECT: Record<Lang, string> = {
  es: "Lista de espera · Café para reuniones",
  en: "Waiting list · Coffee for meetings",
  fr: "Liste d’attente · Café pour les réunions",
};

const BODY: Record<Lang, string> = {
  es: "Hola:\n\nMe gustaría apuntarme a la lista de espera del servicio para reuniones de departamento.\n\nNombre:\nDepartamento:\nEdificio y aula o despacho habituales:\n\nGracias.",
  en: "Hello,\n\nI’d like to join the waiting list for the department meetings service.\n\nName:\nDepartment:\nUsual building and room or office:\n\nThank you.",
  fr: "Bonjour,\n\nJe souhaite m’inscrire sur la liste d’attente du service pour les réunions de département.\n\nNom :\nDépartement :\nBâtiment et salle ou bureau habituels :\n\nMerci.",
};

export function waitlistMailto(lang: Lang): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(SUBJECT[lang])}&body=${encodeURIComponent(BODY[lang])}`;
}
