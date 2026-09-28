"use client";

import { useState } from "react";
import { brl, offer } from "@/lib/site";

const faqs = [
  {
    q: `Como funciona o primeiro mês por ${brl(offer.price)}?`,
    a: `Nos primeiros 30 dias você tem a operação completa (diagnóstico, campanhas, captação e treinamento da recepção) por ${brl(offer.price)}, sem assinatura de contrato de fidelidade.`,
  },
  {
    q: "O que acontece depois dos primeiros 30 dias?",
    a: "Apresentamos um relatório completo de resultados. Se fizer sentido para você, seguimos com o plano mensal. Caso contrário, encerramos a parceria sem multa ou burocracia.",
  },
  {
    q: "A verba de anúncios está incluída no valor?",
    a: "Não. A verba de mídia é paga diretamente às plataformas (Meta e Google), no cartão da clínica, o que garante total transparência sobre o investimento. Na primeira conversa indicamos o valor adequado para a sua região.",
  },
  {
    q: "Vocês atendem profissionais que trabalham sozinhos?",
    a: "Sim. Atendemos desde consultórios individuais até clínicas com várias cadeiras e especialidades. A estratégia é dimensionada para a estrutura e a capacidade de atendimento de cada cliente.",
  },
  {
    q: "Por que apenas uma clínica por região?",
    a: "Para não colocar dois clientes disputando o mesmo paciente. Quando uma região é ocupada, os demais interessados entram em lista de espera. Por isso, a entrada de novos clientes é limitada.",
  },
  {
    q: "Quais especialidades vocês atendem?",
    a: "Clínica geral, implantodontia, ortodontia, estética dental, harmonização orofacial, entre outras. As campanhas são direcionadas aos procedimentos com maior potencial para a sua clínica.",
  },
  {
    q: "A comunicação segue as normas do CFO?",
    a: "Sim. Toda a comunicação é produzida em conformidade com o Código de Ética Odontológica e as normas de publicidade do Conselho Federal de Odontologia.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="text-center lg:sticky lg:top-16 lg:text-left">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="h-title text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem]">
            Antes de <span className="hl">conversarmos</span>.
          </h2>
          <p className="lead mt-5">
            As dúvidas mais comuns de quem está avaliando a ALVEO. Se a sua não
            estiver aqui, responderemos na primeira conversa.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-xl border border-navy-100 bg-white transition-colors hover:border-navy-200">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-display text-[0.98rem] font-semibold text-ink"
                >
                  {f.q}
                  <span
                    aria-hidden
                    className={`ml-2 flex-none text-[1.1rem] font-extrabold text-navy-600 transition-transform duration-250 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-350 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[0.93rem] leading-relaxed text-body">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
