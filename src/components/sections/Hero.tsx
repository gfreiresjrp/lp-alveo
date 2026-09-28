import { LogoWordmark } from "../Logo";
import { HeroForm } from "./HeroForm";
import { IconCheck } from "../Icons";
import { FORM_ID, brl, offer } from "@/lib/site";

const points = [
  "Campanhas focadas nos tratamentos de maior valor",
  "Captação direto no WhatsApp da clínica",
  "Treinamento da recepção para converter avaliações",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-navy-50)_0%,#fff_60%,var(--color-navy-100)_100%)] pt-10 pb-24 lg:pt-12 lg:pb-32"
    >
      {/* grade sutil ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--color-navy-100)_1px,transparent_1px),linear-gradient(90deg,var(--color-navy-100)_1px,transparent_1px)] bg-[size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]"
      />

      <div className="container-x relative">
        <div className="mb-14 flex justify-center lg:mb-20">
          <LogoWordmark className="h-8 w-auto text-navy md:h-9" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="text-center lg:text-left">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-[0.78rem] font-semibold text-navy-600 shadow-[0_2px_10px_-4px_rgba(11,29,58,0.15)]">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-dark" />
              Marketing especializado em odontologia
            </span>
            <h1 className="font-display text-[2.4rem] leading-[1.04] font-bold tracking-[-0.035em] text-ink [text-wrap:balance] sm:text-[3rem] lg:text-[3.6rem]">
              Mais pacientes na sua cadeira.{" "}
              <span className="text-navy-400">Todos os meses.</span>
            </h1>

            <p className="lead mx-auto mt-8 max-w-[540px] lg:mx-0">
              Sua clínica não precisa depender de indicação para crescer.
              Assumimos a captação de ponta a ponta, do primeiro anúncio ao
              tratamento fechado, para que você foque no atendimento.
            </p>

            <ul className="mx-auto mt-9 flex max-w-[320px] flex-col gap-5 sm:max-w-none lg:mx-0 lg:mt-8 lg:w-fit lg:gap-3.5">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex flex-col items-center gap-2 text-center text-[0.95rem] font-medium text-ink lg:flex-row lg:gap-3 lg:text-left"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-navy text-lime">
                    <IconCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-11 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <a href={`#${FORM_ID}`} className="cta">
                Agendar uma conversa
              </a>
              <p className="text-center text-[0.85rem] leading-snug text-muted sm:text-left">
                Primeiro mês por <b className="text-ink">{brl(offer.price)}</b>
                <br />
                sem contrato de fidelidade.
              </p>
            </div>
          </div>

          <HeroForm />
        </div>
      </div>
    </section>
  );
}
