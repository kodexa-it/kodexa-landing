/**
 * Portada: ilustración original (vector) de una planta de gestión de residuos. Es conceptual, no una foto del cliente.
 */
export function CaseCover({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={label} className="h-auto w-full rounded-[1.5rem] border border-line bg-mist shadow-[0_30px_60px_-30px_rgb(32_33_36/0.35)]">
      <defs>
        <linearGradient id="cv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff4ea" />
          <stop offset="1" stopColor="#f0f1f3" />
        </linearGradient>
        <pattern id="cv-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#202124" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="640" height="420" fill="url(#cv-sky)" />
      <rect width="640" height="420" fill="url(#cv-grid)" />
      <circle cx="520" cy="118" r="64" fill="#ffb98f" opacity="0.7" />
      <circle cx="520" cy="118" r="38" fill="#fb6e1a" opacity="0.9" />
      {/* edificios lejanos */}
      <g fill="#202124" opacity="0.1">
        <rect x="20" y="236" width="70" height="104" />
        <rect x="98" y="262" width="52" height="78" />
        <rect x="470" y="250" width="90" height="90" />
        <rect x="566" y="224" width="50" height="116" />
      </g>
      {/* chimeneas y vapor */}
      <g fill="#202124">
        <rect x="116" y="130" width="24" height="120" rx="2" />
        <rect x="116" y="130" width="24" height="10" fill="#fb6e1a" />
        <rect x="160" y="158" width="20" height="92" rx="2" />
        <rect x="160" y="158" width="20" height="8" fill="#fb6e1a" />
      </g>
      <g fill="#ffffff" opacity="0.9">
        <circle cx="130" cy="112" r="14" />
        <circle cx="148" cy="94" r="18" />
        <circle cx="172" cy="80" r="14" />
        <circle cx="170" cy="140" r="10" />
        <circle cx="184" cy="124" r="12" />
      </g>
      {/* nave principal con techo en sierra */}
      <path d="M70 340V228l50 24v-24l50 24v-24l50 24v-24l50 24v-24l40 20v116Z" fill="#202124" />
      <g fill="#fb6e1a">
        <rect x="96" y="276" width="34" height="64" rx="2" opacity="0.95" />
      </g>
      <g fill="#ffffff" opacity="0.85">
        <rect x="150" y="262" width="26" height="16" rx="2" />
        <rect x="188" y="262" width="26" height="16" rx="2" />
        <rect x="226" y="262" width="26" height="16" rx="2" />
        <rect x="264" y="262" width="26" height="16" rx="2" />
      </g>
      {/* cinta transportadora */}
      <path d="M318 300 392 226" stroke="#202124" strokeWidth="8" strokeLinecap="round" />
      <path d="M318 300 392 226" stroke="#fb6e1a" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
      {/* silos */}
      <g>
        <rect x="372" y="196" width="64" height="144" fill="#3a3d42" />
        <ellipse cx="404" cy="196" rx="32" ry="10" fill="#55585d" />
        <rect x="372" y="236" width="64" height="6" fill="#fb6e1a" opacity="0.9" />
        <rect x="448" y="236" width="46" height="104" fill="#3a3d42" />
        <ellipse cx="471" cy="236" rx="23" ry="8" fill="#55585d" />
      </g>
      {/* camión */}
      <g>
        <rect x="486" y="296" width="96" height="42" rx="4" fill="#fb6e1a" />
        <path d="M582 304h26l16 18v16h-42Z" fill="#202124" />
        <rect x="596" y="310" width="14" height="10" rx="1" fill="#ffffff" opacity="0.85" />
        <circle cx="510" cy="340" r="12" fill="#202124" />
        <circle cx="510" cy="340" r="5" fill="#ffffff" opacity="0.8" />
        <circle cx="600" cy="340" r="12" fill="#202124" />
        <circle cx="600" cy="340" r="5" fill="#ffffff" opacity="0.8" />
      </g>
      {/* suelo */}
      <rect y="348" width="640" height="72" fill="#202124" opacity="0.06" />
      <path d="M0 384H640" stroke="#202124" strokeOpacity="0.25" strokeDasharray="22 16" strokeWidth="2" />
      {/* flecha circular (ciclo) */}
      <g fill="none" stroke="#fb6e1a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
        <path d="M60 96a30 30 0 0 1 50-18" />
        <path d="M110 66v14H96" />
        <path d="M100 126a30 30 0 0 1-50-16" />
        <path d="M50 142v-14h14" />
      </g>
      {/* tarjeta de interfaz flotante */}
      <g transform="translate(300 52)">
        <rect width="150" height="96" rx="10" fill="#ffffff" stroke="#202124" strokeOpacity="0.12" />
        <circle cx="14" cy="14" r="3.5" fill="#fb6e1a" />
        <circle cx="26" cy="14" r="3.5" fill="#202124" opacity="0.2" />
        <circle cx="38" cy="14" r="3.5" fill="#202124" opacity="0.2" />
        <rect x="14" y="30" width="86" height="9" rx="3" fill="#202124" />
        <rect x="14" y="46" width="120" height="5" rx="2.5" fill="#202124" opacity="0.2" />
        <rect x="14" y="56" width="100" height="5" rx="2.5" fill="#202124" opacity="0.2" />
        <rect x="14" y="70" width="44" height="14" rx="7" fill="#fb6e1a" />
      </g>
    </svg>
  )
}
