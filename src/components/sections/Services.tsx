"use client";

import { useEffect, useRef } from "react";
import { ArtCreatives, ArtMaps, ArtReports, ArtTraffic, ArtTraining, ArtWhatsApp } from "../ServiceArt";
import { FORM_ID } from "@/lib/site";

const services = [
  {
    art: ArtTraffic,
    title: "Tráfego pago",
    desc: "Campanhas no Instagram, Facebook e Google para a sua região.",
    bullets: [
      "Segmentação por região e perfil de paciente.",
      "Foco nos tratamentos de maior valor para a clínica.",
      "Acompanhamento do custo por paciente adquirido.",
    ],
  },
  {
    art: ArtWhatsApp,
    title: "Captação no WhatsApp",
    desc: "Contatos qualificados direto no WhatsApp da clínica.",
    bullets: [
      "Fluxo de entrada pensado para agendar avaliações.",
      "Roteiros de atendimento para a recepção.",
      "Rotina de reativação de orçamentos em aberto.",
    ],
  },
  {
    art: ArtCreatives,
    title: "Criativos e vídeos",
    desc: "Comunicação que transmite confiança e autoridade.",
    bullets: [
      "Peças orientadas a conversão, não a curtidas.",
      "Roteiros de vídeo com o profissional responsável.",
      "Produção alinhada às normas de publicidade do CFO.",
    ],
  },
  {
    art: ArtTraining,
    title: "Treinamento comercial",
    desc: "O atendimento define se o contato vira paciente.",
    bullets: [
      "Capacitação da recepção para agendamento.",
      "Rotina de confirmação para reduzir faltas.",
      "Condução de orçamento para elevar o fechamento.",
    ],
  },
  {
    art: ArtMaps,
    title: "Google Meu Negócio",
    desc: "Presença forte para quem busca dentista na região.",
    bullets: [
      "Perfil otimizado para buscas locais.",
      "Estratégia para ampliar avaliações de pacientes.",
      "Mais ligações e rotas para a clínica.",
    ],
  },
  {
    art: ArtReports,
    title: "Relatórios de resultado",
    desc: "Clareza sobre quanto custa cada paciente.",
    bullets: [
      "Leads, agendamentos e custo por paciente.",
      "Reunião mensal de resultados e próximos passos.",
      "Decisões de investimento baseadas em dados.",
    ],
  },
];

/** Carrossel infinito: rola sozinho, pausa no hover e aceita arrastar. */
function useAutoScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let pos = el.scrollLeft;
    let raf = 0;

    // metade do conteúdo = uma volta (os cards estão duplicados)
    const loop = () => el.scrollWidth / 2;
    const wrap = () => {
      const half = loop();
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft <= 0) el.scrollLeft += half;
    };

    const tick = () => {
      if (!paused && !dragging && !reduce) {
        pos += 0.5;
        el.scrollLeft = pos;
        wrap();
        pos = el.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const enter = () => (paused = true);
    const leave = () => {
      paused = false;
      pos = el.scrollLeft;
    };
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return; // toque usa o scroll nativo
      dragging = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("dragging");
      el.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
      wrap();
    };
    const up = () => {
      dragging = false;
      pos = el.scrollLeft;
      el.classList.remove("dragging");
    };
    const touchEnd = () => (pos = el.scrollLeft);
    const onScroll = () => {
      if (!dragging && paused) wrap();
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("touchstart", enter, { passive: true });
    el.addEventListener("touchend", touchEnd, { passive: true });
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("touchstart", enter);
      el.removeEventListener("touchend", touchEnd);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return ref;
}

export function Services() {
  const ref = useAutoScroll();

  return (
    <section id="servicos" className="section bg-white text-center">
      <div className="container-x">
        <span className="eyebrow">O que entregamos</span>
        <h2 className="h-title mx-auto max-w-[760px] text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem]">
          Uma estrutura completa de <span className="hl">aquisição de pacientes</span>.
        </h2>
        <p className="lead mx-auto mt-6 mb-14 max-w-[600px]">
          Da campanha ao tratamento fechado, cada etapa é conduzida pelo mesmo time.
        </p>
      </div>

      <div ref={ref} className="svc-marquee mb-14 select-none">
        <div className="flex w-max gap-5 px-3 py-4">
          {[...services, ...services].map((s, i) => (
            <article
              key={i}
              aria-hidden={i >= services.length}
              className="flex w-[300px] flex-none flex-col rounded-[20px] border-2 border-navy-100 bg-white p-6 text-left shadow-[0_4px_32px_rgba(11,29,58,0.07)] sm:w-[326px]"
            >
              <div className="mb-7 flex h-[180px] items-center justify-center">
                <s.art className="h-full w-auto max-w-[78%]" />
              </div>
              <h3 className="mb-2 font-display text-[1.2rem] font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="mb-4 text-[0.92rem] leading-relaxed text-muted">{s.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[0.88rem] font-semibold leading-snug text-ink">
                    <span className="mt-[0.5em] h-1.5 w-1.5 flex-none rounded-full bg-navy-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <a href={`#${FORM_ID}`} className="cta">
        Agendar uma conversa
      </a>
    </section>
  );
}
