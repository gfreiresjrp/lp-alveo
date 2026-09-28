/**
 * Divisor suave entre seções: linha em degradê que se dissolve nas pontas,
 * com um leve brilho lima ao centro. Separação sutil, sem corte seco.
 */
export function SectionDivider({ glow = true }: { glow?: boolean }) {
  return (
    <div aria-hidden className="relative -my-2 py-2">
      <div className="container-x">
        <div className="relative mx-auto max-w-5xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          {glow && (
            <div className="absolute left-1/2 top-1/2 h-20 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.05] blur-2xl" />
          )}
        </div>
      </div>
    </div>
  );
}
