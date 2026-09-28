/**
 * Ilustrações vetoriais dos cards de serviço (viewBox 200×160).
 * Para usar imagens 3D no lugar, coloque os PNGs em /public/servicos
 * e preencha `image` no card correspondente em Services.tsx.
 */
type ArtProps = { className?: string };

const NAVY = "var(--color-navy)";
const NAVY6 = "var(--color-navy-600)";
const NAVY2 = "var(--color-navy-200)";
const NAVY1 = "var(--color-navy-100)";
const LIME = "var(--color-lime)";

function Bubble({ cx, cy, r, fill, children }: { cx: number; cy: number; r: number; fill: string; children?: React.ReactNode }) {
  return (
    <g>
      <circle cx={cx} cy={cy + 3} r={r} fill="rgba(11,29,58,0.12)" />
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#fff" strokeWidth="3" />
      {children}
    </g>
  );
}

/** Tráfego pago: constelação de plataformas de anúncio. */
export function ArtTraffic({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#feda75" />
          <stop offset=".45" stopColor="#d62976" />
          <stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      {/* Google Ads (centro, maior) */}
      <Bubble cx={104} cy={58} r={30} fill={NAVY}>
        <path d="M92 72 L102 48 L110 52 L100 76 Z" fill="#fbbc04" />
        <path d="M106 52 L114 48 L124 72 L116 76 Z" fill="#4285f4" />
        <circle cx="96" cy="72" r="5" fill="#34a853" />
      </Bubble>
      {/* Instagram */}
      <Bubble cx={86} cy={108} r={26} fill="url(#ig)">
        <rect x="74" y="96" width="24" height="24" rx="7" fill="none" stroke="#fff" strokeWidth="3" />
        <circle cx="86" cy="108" r="5.5" fill="none" stroke="#fff" strokeWidth="3" />
        <circle cx="93" cy="101" r="1.8" fill="#fff" />
      </Bubble>
      {/* Facebook */}
      <Bubble cx={138} cy={104} r={19} fill="#1877f2">
        <path d="M141 95 h-3.5 c-3 0-4.5 1.8-4.5 4.6 V103 h-3 v4 h3 v10 h4 v-10 h3.4 l.6-4 h-4 v-2.6 c0-1 .4-1.6 1.6-1.6 H141 Z" fill="#fff" />
      </Bubble>
      {/* WhatsApp */}
      <Bubble cx={62} cy={60} r={15} fill="#25d366">
        <path d="M55 67 l1.6-4.6 a8 8 0 1 1 3 3 Z" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
      </Bubble>
      {/* TikTok */}
      <Bubble cx={146} cy={48} r={13} fill="#111">
        <path d="M147 41 v11 a3.6 3.6 0 1 1 -3 -3.6 M147 41 c.6 2.6 2.4 4 4.6 4.2" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      </Bubble>
      {/* YouTube */}
      <Bubble cx={46} cy={98} r={12} fill="#ff0000">
        <path d="M43 93 v10 l8.5 -5 Z" fill="#fff" />
      </Bubble>
      <circle cx="170" cy="80" r="4" fill={LIME} />
      <circle cx="32" cy="70" r="3" fill={NAVY2} />
    </svg>
  );
}

/** Captação no WhatsApp: conversa chegando no celular. */
export function ArtWhatsApp({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      <rect x="66" y="12" width="68" height="136" rx="14" fill={NAVY} />
      <rect x="71" y="22" width="58" height="116" rx="8" fill="#eef3ea" />
      <rect x="71" y="22" width="58" height="18" rx="8" fill="#075e54" />
      <circle cx="80" cy="31" r="4.5" fill="#fff" opacity=".85" />
      <rect x="88" y="28" width="26" height="3.5" rx="1.75" fill="#fff" opacity=".85" />
      <rect x="76" y="48" width="36" height="14" rx="5" fill="#fff" />
      <rect x="88" y="67" width="36" height="14" rx="5" fill="#dcf8c6" />
      <rect x="76" y="86" width="30" height="14" rx="5" fill="#fff" />
      <rect x="84" y="105" width="40" height="14" rx="5" fill="#dcf8c6" />
      {/* notificação */}
      <g>
        <rect x="112" y="40" width="74" height="30" rx="10" fill="#fff" stroke={NAVY1} strokeWidth="2" />
        <circle cx="126" cy="55" r="8" fill="#25d366" />
        <path d="M122 59 l1-3 a4.6 4.6 0 1 1 1.8 1.8 Z" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="138" y="49" width="38" height="4" rx="2" fill={NAVY} />
        <rect x="138" y="57" width="28" height="4" rx="2" fill={NAVY2} />
      </g>
      <circle cx="186" cy="40" r="7" fill={LIME} stroke="#fff" strokeWidth="2" />
      <text x="186" y="43.5" textAnchor="middle" fontSize="9" fontWeight="800" fill={NAVY}>3</text>
    </svg>
  );
}

/** Criativos e vídeos: três posts em leque. */
export function ArtCreatives({ className }: ArtProps) {
  const post = (x: number, rot: number, head: string, accent: string, video = false) => (
    <g transform={`rotate(${rot} ${x + 30} 80)`}>
      <rect x={x + 2} y="24" width="60" height="98" rx="5" fill="rgba(11,29,58,0.14)" />
      <rect x={x} y="20" width="60" height="98" rx="5" fill="#fff" stroke={NAVY1} strokeWidth="1.5" />
      <circle cx={x + 8} cy="28" r="3.5" fill={NAVY6} />
      <rect x={x + 14} y="26.5" width="22" height="3" rx="1.5" fill={NAVY2} />
      <rect x={x + 4} y="36" width="52" height="58" rx="3" fill={head} />
      <rect x={x + 9} y="44" width="34" height="5" rx="2.5" fill="#fff" />
      <rect x={x + 9} y="52" width="24" height="5" rx="2.5" fill={accent} />
      {video && <path d={`M${x + 26} 68 v14 l12 -7 Z`} fill="#fff" />}
      <rect x={x + 4} y="100" width="30" height="3" rx="1.5" fill={NAVY2} />
      <rect x={x + 4} y="107" width="44" height="3" rx="1.5" fill={NAVY1} />
    </g>
  );
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      {post(18, -9, NAVY6, LIME)}
      {post(122, 9, NAVY6, LIME)}
      {post(70, 0, NAVY, LIME, true)}
    </svg>
  );
}

/** Treinamento comercial: atendente com headset + agenda confirmada. */
export function ArtTraining({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      {/* agenda */}
      <rect x="104" y="30" width="74" height="84" rx="10" fill="#fff" stroke={NAVY1} strokeWidth="2" />
      <rect x="104" y="30" width="74" height="20" rx="10" fill={NAVY} />
      <rect x="104" y="40" width="74" height="10" fill={NAVY} />
      <rect x="120" y="24" width="4" height="12" rx="2" fill={NAVY6} />
      <rect x="158" y="24" width="4" height="12" rx="2" fill={NAVY6} />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="114" y={60 + r * 17} width="10" height="10" rx="3" fill={r < 2 ? LIME : NAVY1} />
          {r < 2 && <path d={`M116.5 ${65 + r * 17} l2 2 l3.5 -4`} fill="none" stroke={NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
          <rect x="130" y={62 + r * 17} width={r === 1 ? 30 : 38} height="5" rx="2.5" fill={r < 2 ? NAVY2 : NAVY1} />
        </g>
      ))}
      {/* pessoa com headset */}
      <circle cx="66" cy="62" r="22" fill={NAVY6} />
      <circle cx="66" cy="58" r="12" fill="#f1c7a3" />
      <path d="M54 56 a12 12 0 0 1 24 0" fill={NAVY} />
      <path d="M50 60 a16 16 0 0 1 32 0" fill="none" stroke={NAVY} strokeWidth="3.5" strokeLinecap="round" />
      <rect x="47" y="58" width="6" height="10" rx="3" fill={LIME} />
      <path d="M50 68 q2 8 12 7" fill="none" stroke={NAVY} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M38 124 a28 28 0 0 1 56 0 Z" fill={NAVY} />
      <path d="M58 98 l8 10 l8 -10" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      {/* balão de fala */}
      <rect x="22" y="22" width="30" height="18" rx="8" fill={LIME} />
      <path d="M40 40 l4 6 l2 -6 Z" fill={LIME} />
      <circle cx="30" cy="31" r="2" fill={NAVY} />
      <circle cx="37" cy="31" r="2" fill={NAVY} />
      <circle cx="44" cy="31" r="2" fill={NAVY} />
    </svg>
  );
}

/** Google Meu Negócio: pin no mapa com avaliações. */
export function ArtMaps({ className }: ArtProps) {
  const star = (x: number, y: number) => (
    <path
      key={x}
      d={`M${x} ${y - 6} l1.8 3.8 4.2.5 -3.1 2.9.8 4.1 -3.7 -2.1 -3.7 2.1.8 -4.1 -3.1 -2.9 4.2 -.5 Z`}
      fill="#fbbc04"
    />
  );
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      {/* mapa */}
      <path d="M30 60 L74 46 L120 60 L168 46 L168 128 L120 142 L74 128 L30 142 Z" fill={NAVY1} />
      <path d="M74 46 V128 M120 60 V142" stroke="#fff" strokeWidth="2" />
      <path d="M30 100 Q80 84 110 108 T168 96" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M52 60 Q70 110 96 138" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      {/* pin */}
      <ellipse cx="100" cy="110" rx="14" ry="4" fill="rgba(11,29,58,0.18)" />
      <path d="M100 110 C86 92 74 80 74 64 a26 26 0 0 1 52 0 c0 16 -12 28 -26 46 Z" fill="#ea4335" />
      <circle cx="100" cy="64" r="11" fill="#fff" />
      <path d="M100 58 v12 M94 64 h12" stroke="#ea4335" strokeWidth="4" strokeLinecap="round" />
      {/* avaliação */}
      <rect x="122" y="18" width="66" height="26" rx="13" fill="#fff" stroke={NAVY1} strokeWidth="2" />
      {[134, 146, 158, 170].map((x) => star(x, 31))}
      <text x="181" y="35" textAnchor="middle" fontSize="10" fontWeight="800" fill={NAVY}>5</text>
    </svg>
  );
}

/** Relatórios: painel com gráfico subindo. */
export function ArtReports({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 160" className={className} aria-hidden>
      <rect x="26" y="26" width="148" height="104" rx="12" fill="rgba(11,29,58,0.12)" transform="translate(3 4)" />
      <rect x="26" y="26" width="148" height="104" rx="12" fill="#fff" stroke={NAVY1} strokeWidth="2" />
      <circle cx="40" cy="38" r="3" fill="#ff5f57" />
      <circle cx="50" cy="38" r="3" fill="#febc2e" />
      <circle cx="60" cy="38" r="3" fill="#28c840" />
      {/* KPIs */}
      <rect x="38" y="50" width="38" height="22" rx="5" fill={NAVY} />
      <rect x="43" y="56" width="18" height="3" rx="1.5" fill="#fff" opacity=".6" />
      <rect x="43" y="63" width="26" height="4" rx="2" fill={LIME} />
      <rect x="82" y="50" width="38" height="22" rx="5" fill={NAVY1} />
      <rect x="87" y="56" width="18" height="3" rx="1.5" fill={NAVY2} />
      <rect x="87" y="63" width="24" height="4" rx="2" fill={NAVY6} />
      {/* barras */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={40 + i * 13} y={118 - (14 + i * 6)} width="8" height={14 + i * 6} rx="2" fill={i === 5 ? NAVY : NAVY2} />
      ))}
      {/* linha de tendência */}
      <path d="M124 112 L136 100 L148 104 L162 84" fill="none" stroke={NAVY6} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="162" cy="84" r="4.5" fill={LIME} stroke={NAVY} strokeWidth="2" />
    </svg>
  );
}
