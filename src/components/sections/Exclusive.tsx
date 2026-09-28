import { FORM_ID } from "@/lib/site";
import { BR_VIEWBOX, brStates } from "@/lib/brazil-map";

function BrazilMap() {
  return (
    <svg viewBox={BR_VIEWBOX} className="h-auto w-full drop-shadow-[0_24px_50px_rgba(0,0,0,0.35)]" role="img" aria-label="Mapa do Brasil">
      <defs>
        <linearGradient id="br-fill" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="360" y2="398">
          <stop offset="0" stopColor="#3a74c4" />
          <stop offset="0.55" stopColor="#24477c" />
          <stop offset="1" stopColor="#c6e31a" />
        </linearGradient>
      </defs>
      {Object.entries(brStates).map(([uf, d]) => (
        <path key={uf} d={d} fill="url(#br-fill)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

export function Exclusive() {
  return (
    <section className="section bg-[linear-gradient(135deg,var(--color-navy-deep)_0%,var(--color-navy)_100%)] text-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <span className="eyebrow on-dark">Exclusividade regional</span>
          <h2 className="h-title text-[1.9rem] text-white sm:text-[2.3rem] lg:text-[2.6rem]">
            Não atendemos duas clínicas concorrentes na mesma região.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[1.02rem] leading-relaxed text-white/75 lg:mx-0">
            Cada região tem um único parceiro ALVEO. Quando a sua é ocupada, as
            clínicas vizinhas passam para a lista de espera. Por isso limitamos a
            entrada de novos clientes a cada mês.
          </p>
          <div className="mt-10">
            <a href={`#${FORM_ID}`} className="cta">
              Verificar disponibilidade da minha região
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <BrazilMap />
        </div>
      </div>
    </section>
  );
}
