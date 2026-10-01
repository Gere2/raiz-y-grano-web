import { Link } from "react-router";
import { formatPrice, useCopy, useLang, type Copy } from "@/i18n";
import { fromPrice, type CartaItem, type Family } from "@/content/carta";
import { ArtTile, cx } from "@/components/ui";

const COPY: Copy<{ from: string }> = {
  es: { from: "desde" },
  en: { from: "from" },
  fr: { from: "dès" },
};

/** Tarjeta de familia para la portada: grabado, nombre, frase y «desde». */
export function FamilyCard({ family }: { family: Family }) {
  const { lang } = useLang();
  const c = useCopy(COPY);
  return (
    <Link
      to={`/carta#${family.id}`}
      className="card group flex items-center gap-4 p-4 transition-transform duration-300 ease-out-soft hover:-translate-y-0.5 sm:p-5"
    >
      <ArtTile art={family.art} size={76} className="transition-transform duration-500 ease-spring group-hover:rotate-[-3deg]" />
      <div className="min-w-0">
        <h3 className="display text-[1.3rem] leading-tight text-forest">{family.name[lang]}</h3>
        <p className="mt-1 text-[14px] leading-snug text-ink-soft">{family.blurb[lang]}</p>
        <p className="mt-1.5 text-[13px] font-semibold text-clay-deep">
          {c.from} <span className="tabular">{formatPrice(fromPrice(family), lang)}</span>
        </p>
      </div>
    </Link>
  );
}

/** Una línea de carta: nombre, nota, puntos y precio. */
export function CartaRow({ item, plus }: { item: CartaItem; plus?: boolean }) {
  const { lang } = useLang();
  if (item.variants) {
    return (
      <li className="py-2.5">
        <div className="flex items-baseline">
          <span className="font-semibold text-ink">{item.name[lang]}</span>
        </div>
        <ul className="mt-1 space-y-0.5 pl-3">
          {item.variants.map((variant) => (
            <li key={variant.pos} className="flex items-baseline text-[15px] text-ink-soft">
              <span>{variant.label[lang]}</span>
              <span className="leader" aria-hidden="true" />
              <span className="tabular font-semibold text-ink">{formatPrice(variant.price, lang)}</span>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  const free = item.price === 0;
  return (
    <li className="py-2.5">
      <div className="flex items-baseline">
        <span className="font-semibold text-ink">{item.name[lang]}</span>
        {!free && item.price !== undefined && (
          <>
            <span className="leader" aria-hidden="true" />
            <span className="tabular font-semibold text-ink">
              {plus && "+"}
              {formatPrice(item.price, lang)}
            </span>
          </>
        )}
      </div>
      {item.note && <p className={cx("mt-0.5 text-[14px]", free ? "font-semibold text-forest" : "text-ink-muted")}>{item.note[lang]}</p>}
    </li>
  );
}
