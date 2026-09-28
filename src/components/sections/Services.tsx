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

/**
 * Carrossel infinito movido por transform (GPU), não por scrollLeft:
 * no celular o scrollLeft fracionado é arredondado e o carrossel "treme".
 * Rola sozinho, pausa com o mouse em cima e aceita arrastar (mouse e dedo).
 */
function useCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vp = viewport.current;
    const tr = track.current;
    if (!vp || !tr) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SPEED = 32; // px por segundo
    let offset = 0;
    let hover = false;
    let dragging = false;
    let moved = false;
    let startX = 0;
    let startY = 0;
    let startOffset = 0;
    let last = performance.now();
    let raf = 0;

    // metade do trilho = uma volta (os cards estão duplicados)
    const wrap = () => {
      const half = tr.scrollWidth / 2;
      if (!half) return;
      offset = ((offset % half) - half) % half; // mantém em (-half, 0]
    };
    const paint = () => {
      tr.style.transform = `translate3d(${offset}px,0,0)`;
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      if (!reduce && !hover && !dragging) {
        offset -= SPEED * dt;
        wrap();
        paint();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const down = (e: PointerEvent) => {
      dragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
      startOffset = offset;
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      // no toque, gesto mais vertical que horizontal é rolagem da página
      if (!moved && e.pointerType !== "mouse" && Math.abs(e.clientY - startY) > Math.abs(dx)) {
        dragging = false;
        return;
      }
      if (Math.abs(dx) > 3 && !moved) {
        moved = true;
        vp.setPointerCapture(e.pointerId);
        vp.classList.add("dragging");
      }
      if (moved) {
        offset = startOffset + dx;
        wrap();
        paint();
      }
    };
    const up = () => {
      dragging = false;
      vp.classList.remove("dragging");
    };
    const enter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hover = true;
    };
    const leave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hover = false;
    };

    vp.addEventListener("pointerdown", down);
    vp.addEventListener("pointermove", move);
    vp.addEventListener("pointerup", up);
    vp.addEventListener("pointercancel", up);
    vp.addEventListener("pointerenter", enter);
    vp.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      vp.removeEventListener("pointerdown", down);
      vp.removeEventListener("pointermove", move);
      vp.removeEventListener("pointerup", up);
      vp.removeEventListener("pointercancel", up);
      vp.removeEventListener("pointerenter", enter);
      vp.removeEventListener("pointerleave", leave);
    };
  }, []);

  return { viewport, track };
}

export function Services() {
  const { viewport, track } = useCarousel();

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

      <div ref={viewport} className="svc-marquee mb-14 select-none">
        <div ref={track} className="flex w-max gap-5 px-3 py-4 will-change-transform">
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
