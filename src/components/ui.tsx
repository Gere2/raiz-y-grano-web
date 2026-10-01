import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={cx("eyebrow", light && "eyebrow-cream")}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  light,
  as: Heading = "h2",
  id,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={cx(
          "display mt-3",
          Heading === "h1" ? "text-[2.5rem] leading-[1.05] sm:text-6xl" : "text-[2rem] leading-[1.1] sm:text-[2.75rem]",
          light ? "text-paper" : "text-forest",
        )}
      >
        {title}
      </Heading>
      {intro && <div className={cx("mt-4 text-[1.0625rem] leading-relaxed sm:text-lg", light ? "text-paper/85" : "text-ink-soft")}>{intro}</div>}
    </div>
  );
}

type ButtonProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "glass" | "cream" | "outline-cream";
  size?: "lg" | "md" | "sm";
  className?: string;
  /** Muestra la flecha de enlace externo (app.raizygrano.com, mapas…). */
  external?: boolean;
  arrow?: boolean;
};

// Nombres de clase completos: Tailwind solo genera las clases que encuentra
// escritas tal cual en el código, así que no se pueden componer con `btn-${x}`.
const SIZE_CLASS = { lg: "btn-lg", md: "btn-md", sm: "btn-sm" } as const;
const VARIANT_CLASS = {
  primary: "btn-primary",
  glass: "btn-glass",
  cream: "btn-cream",
  "outline-cream": "btn-outline-cream",
} as const;

/** Botón que es un enlace: interno con react-router, externo con <a>. */
export function ButtonLink({ to, children, variant = "primary", size = "md", className, external, arrow }: ButtonProps) {
  const classes = cx("btn", SIZE_CLASS[size], VARIANT_CLASS[variant], className);
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(to);
  // La flecha de salida solo para webs; un mailto: ya dice lo que hace.
  const icon = /^https?:/.test(to) ? (
    <ArrowUpRight className="h-[17px] w-[17px]" strokeWidth={2} aria-hidden="true" />
  ) : arrow ? (
    <ArrowRight className="h-[17px] w-[17px]" strokeWidth={2} aria-hidden="true" />
  ) : null;
  // Los enlaces externos se abren en la misma pestaña: quien pulsa «Pedir»
  // quiere ir a la app, no acumular pestañas.
  if (isExternal) {
    return (
      <a href={to} className={classes}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
      {icon}
    </Link>
  );
}

/** Enlace de texto: interno o externo. */
export function TextLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    return (
      <a href={to} className={cx("link", className)}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cx("link", className)}>
      {children}
    </Link>
  );
}

/** El divisor de la marca: una raíz con hoja, café, varillas de matcha y pistacho. */
export function Divider({ className, wide }: { className?: string; wide?: boolean }) {
  return (
    <img
      src={wide ? "/brand/divisor-raiz.webp" : "/brand/divisor.png"}
      alt=""
      aria-hidden="true"
      width={wide ? 1100 : 720}
      height={wide ? 189 : 119}
      loading="lazy"
      decoding="async"
      className={cx("pointer-events-none select-none", className)}
    />
  );
}

/** Grabado de la carta sobre lámina de papel kraft. */
export function ArtTile({ art, size = 88, className }: { art: string; size?: number; className?: string }) {
  return (
    <span className={cx("art-tile", className)} style={{ width: size, height: size }}>
      <img
        src={`/brand/menu/${art}.png`}
        alt=""
        aria-hidden="true"
        width={192}
        height={192}
        loading="lazy"
        decoding="async"
        style={{ width: size * 0.84, height: size * 0.84 }}
      />
    </span>
  );
}

export function IconTile({ children, tone, size = 48 }: { children: ReactNode; tone?: "leaf" | "cream"; size?: number }) {
  return (
    <span className={cx("icon-tile", tone === "leaf" && "tile-leaf", tone === "cream" && "tile-cream")} style={{ width: size, height: size }} aria-hidden="true">
      {children}
    </span>
  );
}
