import { SectionHeading } from "../ui";
import { Reveal } from "../Reveal";
import { IconSearch, IconGear, IconRocket, IconChart } from "../Icons";

const steps = [
  {
    icon: IconSearch,
    title: "Diagnóstico",
    text: "Mergulhamos no seu negócio, mercado e números atuais para encontrar os gargalos e as maiores oportunidades de crescimento.",
  },
  {
    icon: IconGear,
    title: "Estratégia",
    text: "Desenhamos o plano: canais, oferta, funil, metas e cronograma. Você sabe exatamente o que será feito e por quê.",
  },
  {
    icon: IconRocket,
    title: "Execução",
    text: "Colocamos tudo no ar com nosso time de tráfego, criação e conteúdo — com padrão e velocidade de agência de performance.",
  },
  {
    icon: IconChart,
    title: "Otimização",
    text: "Acompanhamos os dados de perto, testamos e escalamos o que funciona. Crescimento contínuo, não sorte pontual.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Como funciona"
            title={
              <>
                Um processo claro,{" "}
                <span className="text-lime">do diagnóstico à escala</span>
              </>
            }
            description="Nada de caixa-preta. Você acompanha cada etapa e entende exatamente para onde o seu investimento está indo."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* linha conectora (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent lg:block"
          />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-lime/30 bg-navy shadow-[0_0_0_6px_rgba(11,29,58,1)]">
                      <Icon className="h-6 w-6 text-lime" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-lime text-xs font-bold text-navy">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display mt-5 text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
