import { Cta, Eyebrow } from "../ui";
import { Reveal } from "../Reveal";
import { IconCheck, IconShield, IconClock, IconChart } from "../Icons";

const diffs = [
  {
    icon: IconChart,
    title: "Obcecados por ROI",
    text: "Cada ação é medida pelo impacto em vendas. Se não move o ponteiro do faturamento, não faz parte do plano.",
  },
  {
    icon: IconShield,
    title: "Transparência total",
    text: "Você tem acesso aos números, às campanhas e às decisões. Sem caixa-preta, sem métrica de vaidade.",
  },
  {
    icon: IconClock,
    title: "Agilidade de performance",
    text: "Ritmo de execução alto: criativos, testes e otimizações rodando de forma contínua, não uma vez por mês.",
  },
];

const checklist = [
  "Estratégia antes de execução",
  "Time especialista por canal",
  "Reuniões de performance recorrentes",
  "Sem fidelidade abusiva",
];

export function WhyAlveo() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Por que ALVEO</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Uma agência que pensa como{" "}
                <span className="text-lime">sócia do seu resultado</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Não estamos aqui para entregar tarefas. Estamos para fazer o seu
                negócio crescer de forma previsível — e crescer junto com ele.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {diffs.map((d, i) => {
                const Icon = d.icon;
                return (
                  <Reveal key={d.title} delay={i * 80}>
                    <div className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-lime/12 text-lime">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-white">
                          {d.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {d.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="card-surface relative overflow-hidden rounded-3xl p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime/10 blur-3xl"
              />
              <p className="font-display text-2xl font-bold text-white">
                O que muda quando você tem a ALVEO ao lado
              </p>
              <ul className="mt-6 space-y-3">
                {checklist.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-lime text-navy">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-white/85">{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-lime/20 bg-lime/[0.06] p-5">
                <p className="text-sm text-white/80">
                  Vagas limitadas por mês para garantir dedicação real a cada
                  cliente.
                </p>
                <Cta
                  href="#diagnostico"
                  variant="primary"
                  withArrow
                  className="mt-4 w-full"
                >
                  Garantir meu diagnóstico
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
