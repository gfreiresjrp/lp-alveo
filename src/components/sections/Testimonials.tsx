"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { FORM_ID, testimonials } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Play() {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-navy shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M7 4.5v15l13-7.5z" />
      </svg>
    </span>
  );
}

function Video({ t }: { t: (typeof testimonials)[number] }) {
  const [playing, setPlaying] = useState(false);
  const box =
    "group relative block aspect-[9/16] w-full overflow-hidden rounded-[14px] border-2 border-white/10 bg-navy";

  if (t.src) {
    return (
      <div className={box}>
        <video src={t.src} poster={t.poster} controls playsInline preload="metadata" className="h-full w-full object-cover" />
      </div>
    );
  }

  if (t.youtubeId) {
    return playing ? (
      <div className={box}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}?autoplay=1&rel=0`}
          title={`Depoimento de ${t.name}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    ) : (
      <button type="button" onClick={() => setPlaying(true)} className={`${box} cursor-pointer`} aria-label={`Assistir depoimento de ${t.name}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${t.youtubeId}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover brightness-[.85]"
        />
        <Play />
      </button>
    );
  }

  return (
    <div className={`${box} bg-[linear-gradient(160deg,var(--color-navy-deep),#050d1c)]`}>
      <Play />
      <span className="absolute inset-x-0 bottom-6 text-center font-display text-xs font-bold uppercase tracking-[0.18em] text-white/50">
        Vídeo em breve
      </span>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="section bg-navy-800 text-center">
      <div className="container-x">
        <span className="eyebrow on-dark">Depoimentos</span>
        <h2 className="h-title mx-auto max-w-[720px] text-[1.9rem] text-white sm:text-[2.3rem] lg:text-[2.6rem]">
          O que dizem os dentistas <span className="hl-dark">que trabalham conosco</span>.
        </h2>
        <p className="mx-auto mt-5 mb-16 max-w-[560px] text-[1.02rem] leading-relaxed text-white/65">
          Relatos de clínicas e consultórios parceiros sobre a rotina antes e
          depois da ALVEO.
        </p>

        <div className="mb-16 flex flex-col items-center gap-14">
          {testimonials.map((t, i) => (
            <Reveal key={i} className="w-full max-w-[400px] text-left">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lime font-display text-[0.8rem] font-extrabold text-navy">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-display text-[0.88rem] font-extrabold leading-tight text-white">{t.name}</p>
                  <p className="text-[0.73rem] text-navy-200">{t.company}</p>
                </div>
              </div>
              <Video t={t} />
            </Reveal>
          ))}
        </div>

        <a href={`#${FORM_ID}`} className="cta">
          Agendar uma conversa
        </a>
      </div>
    </section>
  );
}
