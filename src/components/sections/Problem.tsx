import { SectionHeading } from "../ui";
import { Reveal } from "../Reveal";

const pains = [
  {
    title: "Investe e não vê retorno",
    text: "Você coloca dinheiro em anúncios e posts, mas não consegue medir quanto disso vira venda de verdade.",
  },
  {
    title: "Ações soltas, sem estratégia",
    text: "Tráfego de um lado, social media de outro, site parado. Nada conversa e o resultado se perde no meio.",
  },
  {
    title: "Dependência de indicação",
    text: "As vendas oscilam todo mês porque não existe um funil previsível gerando demanda de forma constante.",
  },
  {
    title: "Agência que some",
    text: "Relatório bonito, mas sem clareza do que foi feito, por quê, e qual o próximo passo para crescer.",
  },
];

export function Problem() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            center
            eyebrow="O problema"
            title={
              <>
                Fazer marketing não é o problema.{" "}
                <span className="text-lime">Fazer dar resultado é.</span>
              </>
            }
            description="A maioria das empresas não sofre por falta de esforço — sofre por falta de sistema. Se algum desses cenários é o seu, a ALVEO foi feita pra você."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-red-400/30 hover:bg-red-500/[0.04]">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-red-400/30 bg-red-500/10 text-red-300">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {p.text}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-white/80">
            O problema nunca foi o marketing.{" "}
            <span className="lime-underline font-semibold text-white">
              Foi a ausência de estratégia ligada a vendas.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
