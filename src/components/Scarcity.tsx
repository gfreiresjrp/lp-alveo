"use client";

import { useEffect, useState } from "react";
import { FORM_ID, brl, offer } from "@/lib/site";

/** Prazo real da condição: último instante do mês corrente (horário do visitante). */
function endOfMonth(now = new Date()) {
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
}

/** Tempo restante até o fim do mês. `null` até montar no cliente (evita divergência de hidratação). */
export function useDeadline() {
  const [left, setLeft] = useState<{ d: number; h: number; m: number; s: number; month: string } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const ms = Math.max(0, endOfMonth(now).getTime() - now.getTime());
      setLeft({
        d: Math.floor(ms / 86_400_000),
        h: Math.floor(ms / 3_600_000) % 24,
        m: Math.floor(ms / 60_000) % 60,
        s: Math.floor(ms / 1000) % 60,
        month: now.toLocaleDateString("pt-BR", { month: "long" }),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return left;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Contador até o fim do mês (dias : horas : min : seg). */
export function Countdown({ dark = false }: { dark?: boolean }) {
  const left = useDeadline();
  const units: [number | null, string][] = [
    [left?.d ?? null, "dias"],
    [left?.h ?? null, "horas"],
    [left?.m ?? null, "min"],
    [left?.s ?? null, "seg"],
  ];

  return (
    <div className="flex items-start gap-1.5" role="timer" aria-label="Tempo restante para esta condição">
      {units.map(([v, l], i) => (
        <div key={l} className="flex items-start gap-1.5">
          {i > 0 && <span className={`pt-2 font-display text-lg font-bold ${dark ? "text-white/30" : "text-navy-200"}`}>:</span>}
          <div className="flex w-[52px] flex-col items-center">
            <span
              className={`w-full rounded-lg py-2 text-center font-display text-[1.35rem] font-bold leading-none tabular-nums ${
                dark ? "bg-white/8 text-white" : "bg-navy-50 text-ink ring-1 ring-navy-100"
              }`}
            >
              {v === null ? "--" : pad(v)}
            </span>
            <span className={`mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/55" : "text-muted"}`}>{l}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Ocupação da agenda de novos clientes do mês. */
export function VagasBar({ dark = false }: { dark?: boolean }) {
  const taken = offer.vagasTotal - offer.vagasRestantes;
  const pct = Math.round((taken / offer.vagasTotal) * 100);

  return (
    <div className="w-full">
      <div className={`mb-2 flex justify-between text-[0.8rem] font-semibold ${dark ? "text-white/75" : "text-body"}`}>
        <span>
          <span className={dark ? "text-white" : "text-ink"}>{offer.vagasRestantes} de {offer.vagasTotal} vagas</span> disponíveis este mês
        </span>
        <span className="tabular-nums">{pct}% ocupado</span>
      </div>
      <div className={`h-1.5 overflow-hidden rounded-full ${dark ? "bg-white/12" : "bg-navy-100"}`}>
        <div className="h-full rounded-full bg-lime-dark" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/** Faixa fixa no topo com a condição do mês. */
export function TopBar() {
  const left = useDeadline();

  return (
    <a
      href={`#${FORM_ID}`}
      className="sticky top-0 z-50 block border-b border-white/10 bg-navy px-4 py-2.5 text-center text-[0.78rem] font-medium leading-snug text-white/80 sm:text-[0.82rem]"
    >
      <span className="font-semibold text-white">Primeiro mês por {brl(offer.price)}, sem contrato.</span>{" "}
      <span className="whitespace-nowrap">
        {offer.vagasRestantes} vagas para novos clientes{left ? ` em ${left.month}` : " este mês"}.
      </span>
      <span className="ml-3 hidden font-semibold text-lime md:inline">Agendar conversa →</span>
    </a>
  );
}
