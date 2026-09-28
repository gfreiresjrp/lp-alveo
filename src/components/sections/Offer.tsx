import { Reveal } from "../Reveal";
import { Countdown, VagasBar } from "../Scarcity";
import { IconCheck } from "../Icons";
import { FORM_ID, brl, offer } from "@/lib/site";

const included = [
  "Diagnóstico da clínica e do mercado local",
  "Campanhas no Meta Ads e Google Ads",
  "Criativos alinhados às normas do CFO",
  "Captação direto no WhatsApp da clínica",
  "Treinamento da recepção para agendamento",
  "Relatório de performance ao fim dos 30 dias",
];

const steps = [
  { n: "01", t: "Implantação", d: "Diagnóstico, estratégia e campanhas no ar nos primeiros dias." },
  { n: "02", t: "Primeiros 30 dias", d: "Acompanhamento próximo, ajustes semanais e relatório completo." },
  { n: "03", t: "Continuidade", d: "Com os números em mãos, você decide se seguimos no plano mensal." },
];

export function Offer() {
  return (
    <section id="condicao" className="section bg-navy-50">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-[760px] text-center lg:mb-20">
          <span className="eyebrow">Condição de entrada</span>
          <h2 className="h-title text-[1.9rem] sm:text-[2.3rem] lg:text-[2.7rem]">
            Primeiro mês por {brl(offer.price)}, <span className="hl">sem contrato</span>.
          </h2>
          <p className="lead mx-auto mt-6 max-w-[620px]">
            Preferimos que você avalie nosso trabalho pelos números. Nos primeiros
            30 dias você tem a operação completa por um valor de entrada e só
            depois decide sobre a continuidade.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <ol className="mb-12 flex flex-col gap-3">
              {steps.map((s) => (
                <li key={s.n} className="flex items-start gap-5 rounded-2xl border border-navy-100 bg-white px-6 py-5">
                  <span className="pt-0.5 font-display text-sm font-bold text-navy-400">{s.n}</span>
                  <div>
                    <p className="font-display text-[1.02rem] font-bold text-ink">{s.t}</p>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-muted">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-navy-600">
              Incluso no primeiro mês
            </p>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-[0.93rem] text-body">
                  <IconCheck className="mt-0.5 h-5 w-5 flex-none text-lime-dark" strokeWidth={2.5} />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-[0_40px_90px_-30px_rgba(11,29,58,0.6)] ring-1 ring-white/10 sm:p-10">
              {/* brilho lima no canto */}
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-lime/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-lime px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-navy">
                    Condição de entrada
                  </span>
                  <span className="text-[0.78rem] font-medium text-white/60">
                    {offer.vagasRestantes} de {offer.vagasTotal} vagas
                  </span>
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <span className="mb-2 font-display text-[1.4rem] font-semibold text-white/70">R$</span>
                  <span className="font-display text-[4.2rem] font-bold leading-[0.9] tracking-[-0.04em]">{offer.price}</span>
                  <span className="mb-2 text-[0.95rem] text-white/60">/ primeiro mês</span>
                </div>

                <ul className="mt-7 space-y-3">
                  {["Sem contrato de fidelidade", "Sem multa de cancelamento", "Operação completa desde o primeiro dia"].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-[0.92rem] text-white/85">
                      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-lime/15 text-lime">
                        <IconCheck className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="my-8 h-px bg-white/10" />

                <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white/55">
                  Esta condição encerra em
                </p>
                <Countdown dark />

                <div className="mt-7">
                  <VagasBar dark />
                </div>

                <a href={`#${FORM_ID}`} className="cta mt-9 w-full">
                  Garantir minha vaga
                </a>
                <p className="mt-4 text-center text-[0.76rem] leading-relaxed text-white/45">
                  Verba de anúncios paga diretamente às plataformas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
