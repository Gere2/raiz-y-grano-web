import type { ReactNode } from "react";
import { Languages } from "lucide-react";
import { formatDate, useCopy, useLang, type Copy } from "@/i18n";
import { SITE } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui";

/**
 * Textos legales de la web (no de la app, que tiene los suyos en
 * app.raizygrano.com). Los datos del titular salen de `SITE.legal`, copia de
 * `apps/app/lib/legal/company.ts`: si cambian allí, cambian aquí.
 *
 * El texto vinculante está en castellano; en inglés y francés se muestra un
 * resumen encima.
 */

const UPDATED: Copy<(date: string) => string> = {
  es: (date) => `Última actualización: ${date}.`,
  en: (date) => `Last updated: ${date}.`,
  fr: (date) => `Dernière mise à jour : ${date}.`,
};

function LegalShell({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow: string;
  title: string;
  summary?: Copy<{ heading: string; points: string[] } | null>;
  children: ReactNode;
}) {
  const { lang } = useLang();
  const updated = useCopy(UPDATED);
  const note = summary?.[lang];
  return (
    <section className="pt-8 sm:pt-12">
      <Container className="max-w-3xl">
        <SectionHeader as="h1" eyebrow={eyebrow} title={title} />
        <p className="mt-3 text-[14px] text-ink-muted">{updated(formatDate(SITE.legal.updated, lang))}</p>
        {note && (
          <aside lang={lang} className="card-inset mt-8 p-5">
            <p className="flex items-center gap-2 font-semibold text-ink">
              <Languages className="h-4 w-4 text-forest" aria-hidden="true" />
              {note.heading}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-ink-soft marker:text-clay">
              {note.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </aside>
        )}
        <div lang="es" className="prose-raiz card mt-8 p-6 sm:p-9">
          {children}
        </div>
      </Container>
    </section>
  );
}

const AVISO_SUMMARY: Copy<{ heading: string; points: string[] } | null> = {
  es: null,
  en: {
    heading: "Summary in English (the binding text below is in Spanish)",
    points: [
      `raizygrano.com is owned by ${SITE.legal.name} (tax ID ${SITE.legal.taxId}), trading as Raíz y Grano.`,
      `Contact: ${SITE.email}.`,
      "This website is informative: orders and payments happen in the app, app.raizygrano.com, which has its own terms.",
    ],
  },
  fr: {
    heading: "Résumé en français (le texte qui fait foi, ci-dessous, est en espagnol)",
    points: [
      `raizygrano.com appartient à ${SITE.legal.name} (NIF ${SITE.legal.taxId}), sous le nom commercial Raíz y Grano.`,
      `Contact : ${SITE.email}.`,
      "Ce site est informatif : les commandes et les paiements se font dans l’app, app.raizygrano.com, qui a ses propres conditions.",
    ],
  },
};

export function AvisoLegal() {
  const { lang } = useLang();
  return (
    <LegalShell
      eyebrow={lang === "es" ? "Información legal" : lang === "en" ? "Legal information" : "Informations légales"}
      title={lang === "es" ? "Aviso legal" : lang === "en" ? "Legal notice" : "Mentions légales"}
      summary={AVISO_SUMMARY}
    >
      <h2>Quién es el titular de esta web</h2>
      <p>
        Esta web (raizygrano.com) es titularidad de <strong>{SITE.legal.name}</strong>, que opera bajo el nombre comercial
        Raíz y Grano.
      </p>
      <ul>
        <li>NIF: {SITE.legal.taxId}</li>
        <li>Domicilio social: {SITE.legal.address}</li>
        <li>Local: {SITE.legal.venue}</li>
        <li>
          Correo de contacto: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>Teléfono: {SITE.phone}</li>
        <li>Datos registrales: {SITE.legal.registry}</li>
      </ul>

      <h2>Para qué sirve esta web</h2>
      <p>
        Es una web informativa sobre la cafetería: la carta, los horarios, la app, el servicio para profesorado y nuestra
        historia. Desde aquí no se vende nada. Los pedidos, los pagos, el Bono Curso y el programa de granos están en la app,{" "}
        <a href={SITE.app.home}>app.raizygrano.com</a>, que tiene su propio aviso legal, su política de privacidad y sus{" "}
        <a href={SITE.app.terms}>condiciones de compra</a>.
      </p>
      <p>Los precios de la carta que se publican aquí incluyen el IVA y llevan la fecha de su última actualización.</p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el diseño, el logotipo, los grabados y las ilustraciones de esta web pertenecen a {SITE.legal.name}. No
        se pueden reproducir con fines comerciales sin nuestro permiso. Las marcas de terceros que se citan (por ejemplo, la
        de nuestro proveedor de café) pertenecen a sus titulares.
      </p>

      <h2>Enlaces</h2>
      <p>
        Esta web enlaza con la app, con Google Maps y con Instagram. Al pulsar esos enlaces sales de raizygrano.com y se aplican
        las condiciones de cada servicio.
      </p>

      <h2>Ley aplicable y reclamaciones</h2>
      <p>
        Esta web se rige por la legislación española. Para cualquier reclamación puedes escribirnos primero a{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. También puedes acudir a la oficina municipal de información al
        consumidor de tu municipio o al organismo de consumo de tu comunidad autónoma. Hay hojas oficiales de reclamaciones a
        tu disposición en el local.
      </p>
    </LegalShell>
  );
}

const PRIVACY_SUMMARY: Copy<{ heading: string; points: string[] } | null> = {
  es: null,
  en: {
    heading: "Summary in English (the binding text below is in Spanish)",
    points: [
      `Controller: ${SITE.legal.name} (Raíz y Grano), ${SITE.email}.`,
      "This website uses no cookies, no analytics and no advertising. It only stores the language you choose in your browser.",
      "It is hosted on GitHub Pages, which logs visitors’ IP addresses for security. We don’t receive those logs.",
      "If you email us, we use your message only to reply. You can exercise your data protection rights by writing to us.",
      "If you join the faculty waiting list by email, we only use your details to tell you when the service starts.",
      "The app (app.raizygrano.com) has its own privacy policy.",
    ],
  },
  fr: {
    heading: "Résumé en français (le texte qui fait foi, ci-dessous, est en espagnol)",
    points: [
      `Responsable : ${SITE.legal.name} (Raíz y Grano), ${SITE.email}.`,
      "Ce site n’utilise ni cookies, ni outil d’analyse, ni publicité. Il enregistre seulement dans votre navigateur la langue choisie.",
      "Il est hébergé sur GitHub Pages, qui enregistre l’adresse IP des visiteurs pour des raisons de sécurité. Nous ne recevons pas ces journaux.",
      "Si vous nous écrivez, nous utilisons votre message uniquement pour vous répondre. Vous pouvez exercer vos droits en nous écrivant.",
      "Si vous vous inscrivez par e-mail sur la liste d’attente enseignants, nous utilisons vos données uniquement pour vous prévenir du lancement.",
      "L’app (app.raizygrano.com) a sa propre politique de confidentialité.",
    ],
  },
};

export function Privacidad() {
  const { lang } = useLang();
  return (
    <LegalShell
      eyebrow={lang === "es" ? "Información legal" : lang === "en" ? "Legal information" : "Informations légales"}
      title={lang === "es" ? "Política de privacidad" : lang === "en" ? "Privacy policy" : "Politique de confidentialité"}
      summary={PRIVACY_SUMMARY}
    >
      <p>
        Esta política explica qué datos personales trata la web raizygrano.com, conforme al Reglamento (UE) 2016/679 (RGPD) y
        a la Ley Orgánica 3/2018 (LOPDGDD). La app de pedidos, <a href={SITE.app.home}>app.raizygrano.com</a>, tiene{" "}
        <a href={SITE.app.privacy}>su propia política de privacidad</a>.
      </p>

      <h2>Responsable del tratamiento</h2>
      <ul>
        <li>
          {SITE.legal.name} (nombre comercial Raíz y Grano), NIF {SITE.legal.taxId}.
        </li>
        <li>Domicilio: {SITE.legal.address}.</li>
        <li>
          Contacto para cualquier cuestión de privacidad: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </li>
      </ul>

      <h2>Qué datos trata esta web</h2>
      <p>
        <strong>Ni cookies, ni analítica, ni publicidad.</strong> Esta web no instala cookies ni usa herramientas de medición
        de audiencia o de publicidad. Las tipografías y las imágenes se sirven desde la propia web, sin llamadas a servicios de
        terceros.
      </p>
      <p>
        <strong>Tu idioma.</strong> Si eliges idioma, lo guardamos en el almacenamiento local de tu navegador para recordarlo
        la próxima vez. Ese dato no sale de tu dispositivo y puedes borrarlo desde los ajustes del navegador.
      </p>
      <p>
        <strong>Registros del alojamiento.</strong> La web está alojada en GitHub Pages, un servicio de GitHub, Inc. Como
        cualquier servidor, GitHub registra datos técnicos de cada visita (entre ellos, la dirección IP) para servir la página y
        por seguridad. Nosotros no recibimos esos registros ni los usamos.
      </p>
      <p>
        <strong>Si nos escribes.</strong> Si nos escribes por correo electrónico, tratamos tu dirección y lo que nos cuentes
        para responderte. La base jurídica es la gestión de tu solicitud y, cuando se refiere a un pedido o a un servicio,
        la relación contractual o precontractual (art. 6.1.b RGPD); en el resto de casos, nuestro interés legítimo en
        contestar a quien nos escribe (art. 6.1.f RGPD). Conservamos esos mensajes mientras sea necesario para atenderte y,
        después, durante los plazos legales de prescripción. Si nos escribes por Instagram, Meta trata además esos datos según
        su propia política.
      </p>
      <p>
        <strong>Lista de espera para profesorado.</strong> Si te apuntas por correo a la lista de espera del servicio para
        reuniones de departamento, guardamos tu nombre, tu correo, tu departamento y lo que nos cuentes solo para avisarte
        cuando el servicio empiece. La base jurídica es tu consentimiento (art. 6.1.a RGPD), que puedes retirar cuando quieras
        escribiéndonos. Te borraremos de la lista cuando lo pidas o, como tarde, cuando te hayamos avisado del arranque.
      </p>

      <h2>A quién se comunican</h2>
      <p>
        No vendemos ni cedemos datos a terceros. Los únicos que pueden tratarlos por cuenta nuestra son los proveedores que
        hacen funcionar la web y el correo: GitHub, Inc. (alojamiento de la web) y nuestro proveedor de correo electrónico.
        GitHub está en Estados Unidos y presta el servicio con las garantías del Marco de Privacidad de Datos UE-EE. UU. o de
        cláusulas contractuales tipo, según proceda.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedirnos acceder a tus datos, rectificarlos o suprimirlos, oponerte a su tratamiento, limitarlo o solicitar su
        portabilidad escribiendo a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Si crees que no hemos atendido bien tu
        solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es">www.aepd.es</a>).
      </p>

      <h2>Cambios</h2>
      <p>
        Si cambia algo de lo que se cuenta aquí (por ejemplo, si algún día añadimos analítica), actualizaremos esta página y su
        fecha antes de hacerlo.
      </p>
    </LegalShell>
  );
}
