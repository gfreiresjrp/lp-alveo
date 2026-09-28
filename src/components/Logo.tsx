type SvgProps = React.SVGProps<SVGSVGElement>;

/**
 * Símbolo ALVEO (o "A" / seta de crescimento).
 * Traços em currentColor + triângulo lima. Placeholder vetorial até o
 * arquivo oficial ser enviado.
 */
export function LogoSymbol({ title = "ALVEO", ...props }: SvgProps & { title?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" role="img" aria-label={title} {...props}>
      <path
        d="M14 88 L50 12 L86 88"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 46 L66 82 L50 82 Z" fill="var(--color-lime)" />
    </svg>
  );
}

/**
 * Wordmark ALVEO. Letras geométricas com acentos em verde lima
 * (triângulo no A, barra central do E). Recolorível via currentColor.
 */
export function LogoWordmark({
  title = "ALVEO",
  ...props
}: SvgProps & { title?: string }) {
  const s = 15;
  return (
    <svg viewBox="0 0 700 150" fill="none" role="img" aria-label={title} {...props}>
      {/* A */}
      <path
        d="M18 132 L64 20 L110 132"
        stroke="currentColor"
        strokeWidth={s}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M64 74 L86 132 L64 132 Z" fill="var(--color-lime)" />

      {/* L */}
      <path
        d="M156 20 L156 132 L232 132"
        stroke="currentColor"
        strokeWidth={s}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* V */}
      <path
        d="M266 20 L318 132 L370 20"
        stroke="currentColor"
        strokeWidth={s}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* E (três barras, central lima) */}
      <line x1="410" y1="26" x2="500" y2="26" stroke="currentColor" strokeWidth={s} strokeLinecap="round" />
      <line x1="410" y1="76" x2="496" y2="76" stroke="var(--color-lime)" strokeWidth={s} strokeLinecap="round" />
      <line x1="410" y1="126" x2="500" y2="126" stroke="currentColor" strokeWidth={s} strokeLinecap="round" />

      {/* O */}
      <circle cx="606" cy="76" r="56" stroke="currentColor" strokeWidth={s} />
    </svg>
  );
}

/** Logo completa: símbolo + wordmark, com opção de exibir a assinatura. */
export function Logo({
  className = "",
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-white ${className}`}>
      <LogoWordmark className="h-full w-auto" />
      {showTagline && (
        <span className="sr-only">ALVEO Marketing e Vendas</span>
      )}
    </span>
  );
}
