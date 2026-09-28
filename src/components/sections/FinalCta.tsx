import { Cta } from "../ui";
import { Reveal } from "../Reveal";
import { LogoSymbol } from "../Logo";
import { whatsappUrl } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="pb-24 pt-8">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-lime/25 bg-gradient-to-br from-navy-deep via-navy to-black px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-lime/15 blur-[100px]" />
            </div>

            <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lime/12 text-lime">
              <LogoSymbol className="h-9 w-9" />
            </span>

            <h2 className="font-display relative mx-auto mt-8 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Pronto para transformar marketing em{" "}
              <span className="text-lime">vendas reais?</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted">
              Dê o primeiro passo com um diagnóstico gratuito. Sem compromisso,
              com clareza total sobre o potencial do seu negócio.
            </p>

            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta href="#diagnostico" variant="primary" withArrow>
                Quero meu diagnóstico grátis
              </Cta>
              <Cta
                href={whatsappUrl()}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </Cta>
            </div>

            <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-lime/80">
              Estratégia • Performance • Resultados
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
