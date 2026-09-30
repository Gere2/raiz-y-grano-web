import { useCopy, type Copy } from "@/i18n";

const COPY: Copy<{ label: string; building: string; hint: string; path: string; caption: string }> = {
  es: {
    label: "Esquema del campus: Raíz y Grano está en el paseo, entre el Edificio H y el CRAI.",
    building: "Edificio H",
    hint: "San Agustín de Hipona",
    path: "paseo",
    caption: "Esquema, no a escala.",
  },
  en: {
    label: "Campus sketch: Raíz y Grano is on the walkway between Building H and the CRAI library.",
    building: "Building H",
    hint: "San Agustín de Hipona",
    path: "walkway",
    caption: "Sketch, not to scale.",
  },
  fr: {
    label: "Plan schématique : Raíz y Grano se trouve sur l’allée, entre le bâtiment H et le CRAI.",
    building: "Bâtiment H",
    hint: "San Agustín de Hipona",
    path: "allée",
    caption: "Schéma, pas à l’échelle.",
  },
};

/**
 * Plano dibujado a mano, en el estilo de los grabados: no es un mapa (para
 * eso está el enlace a Google Maps), solo dice «entre el H y el CRAI».
 * Sin iframe de mapas a propósito: cargaría cookies de terceros.
 */
export function CampusSketch() {
  const c = useCopy(COPY);
  return (
    <figure className="m-0">
      <svg viewBox="0 0 560 300" role="img" aria-label={c.label} className="h-auto w-full">
        <defs>
          <pattern id="rayado" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke="#27332E" strokeOpacity="0.16" strokeWidth="1.4" />
          </pattern>
        </defs>
        <rect width="560" height="300" rx="20" fill="#F3ECDF" />
        {/* arbolado */}
        {[
          [70, 250, 14],
          [104, 262, 10],
          [470, 252, 13],
          [502, 238, 9],
          [300, 86, 11],
          [262, 70, 8],
        ].map(([x, y, r]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={r} fill="#DCE3CF" stroke="#4B6A53" strokeWidth="1.2" />
            <path d={`M${x} ${y - r + 3} L${x} ${y + r - 3}`} stroke="#4B6A53" strokeWidth="0.9" strokeOpacity="0.7" />
          </g>
        ))}
        {/* paseo */}
        <path d="M18 196 C 150 186, 410 206, 542 194" fill="none" stroke="#E4D9C4" strokeWidth="34" strokeLinecap="round" />
        <path d="M24 196 C 150 186, 410 206, 536 194" fill="none" stroke="#B5653A" strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="6 7" />
        <text x="440" y="226" fontSize="12" fill="#656A60" fontStyle="italic" fontFamily="Archivo Variable, sans-serif">
          {c.path}
        </text>
        {/* accesos */}
        <path d="M130 152 L136 182" stroke="#27332E" strokeOpacity="0.35" strokeWidth="1.3" strokeDasharray="3 4" />
        <path d="M432 152 L426 182" stroke="#27332E" strokeOpacity="0.35" strokeWidth="1.3" strokeDasharray="3 4" />
        {/* Edificio H */}
        <rect x="42" y="36" width="178" height="116" rx="6" fill="#EAE0CD" stroke="#27332E" strokeWidth="1.4" />
        <rect x="42" y="36" width="178" height="116" rx="6" fill="url(#rayado)" />
        <rect x="66" y="66" width="130" height="50" rx="6" fill="#FBF8F1" stroke="#27332E" strokeOpacity="0.5" />
        <text x="131" y="89" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1F513F" fontFamily="Playfair Display Variable, Georgia, serif">
          {c.building}
        </text>
        <text x="131" y="106" textAnchor="middle" fontSize="10.5" fill="#4A554E" fontFamily="Archivo Variable, sans-serif">
          {c.hint}
        </text>
        {/* CRAI */}
        <rect x="340" y="36" width="178" height="116" rx="6" fill="#EAE0CD" stroke="#27332E" strokeWidth="1.4" />
        <rect x="340" y="36" width="178" height="116" rx="6" fill="url(#rayado)" />
        <rect x="374" y="72" width="110" height="40" rx="6" fill="#FBF8F1" stroke="#27332E" strokeOpacity="0.5" />
        <text x="429" y="98" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1F513F" fontFamily="Playfair Display Variable, Georgia, serif">
          CRAI
        </text>
        {/* Raíz y Grano */}
        <circle cx="281" cy="194" r="36" fill="#1F513F" fillOpacity="0.08" />
        <circle cx="281" cy="194" r="27" fill="#FBF8F1" stroke="#1F513F" strokeWidth="2" />
        <image href="/brand/marca.png" x="262" y="175" width="38" height="38" />
        <text x="281" y="252" textAnchor="middle" fontSize="17" fontWeight="700" fill="#1F513F" fontFamily="Playfair Display Variable, Georgia, serif">
          Raíz y Grano
        </text>
      </svg>
      <figcaption className="mt-2 text-[12.5px] text-ink-muted">{c.caption}</figcaption>
    </figure>
  );
}
