import { SectionHeading } from "../ui";
import { Reveal } from "../Reveal";
import { IconStar } from "../Icons";

const stats = [
  { value: "6,4x", label: "ROAS médio das contas gerenciadas" },
  { value: "+312%", label: "de crescimento em geração de leads" },
  { value: "-31%", label: "de redução no custo de aquisição" },
  { value: "97%", label: "de clientes que renovam a parceria" },
];

const testimonials = [
  {
    quote:
      "Em 90 dias saímos de vendas imprevisíveis para um fluxo constante de leads qualificados. A ALVEO virou parte do nosso time.",
    name: "Cliente ALVEO",
    role: "Diretor — Serviços B2B",
  },
  {
    quote:
      "Finalmente entendi para onde vai cada real investido. Relatórios claros e, principalmente, resultado no caixa.",
    name: "Cliente ALVEO",
    role: "Fundadora — E-commerce",
  },
  {
    quote:
      "Profissionalismo e transparência do começo ao fim. Dobramos o faturamento sem perder a margem.",
    name: "Cliente ALVEO",
    role: "CEO — Educação",
  },
];

export function Results() {
  return (
    <section id="resultados" className="py-20 md:py-28">
      <div className="container-x">
        {/* faixa de números */}
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy/60 p-7 text-center">
                <p className="font-display text-4xl font-extrabold text-lime">
                  {s.value}
                </p>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <SectionHeading
            center
            className="mt-20"
            eyebrow="Quem confia na ALVEO"
            title={
              <>
                Resultado é o que fala mais alto —{" "}
                <span className="text-lime">e nossos clientes concordam</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <div className="flex gap-1 text-lime">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <IconStar key={j} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/15 font-display text-sm font-bold text-lime">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          * Depoimentos e métricas ilustrativos — substitua pelos resultados
          reais dos seus clientes.
        </p>
      </div>
    </section>
  );
}
