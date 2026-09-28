"use client";

import { useEffect, useRef, useState } from "react";
import { IconShield } from "../Icons";
import { trackPixel } from "../MetaPixel";
import { FORM_ID, whatsappUrl } from "@/lib/site";

const faturamento = [
  "Até R$ 30 mil/mês",
  "De R$ 30 mil a R$ 60 mil/mês",
  "De R$ 60 mil a R$ 100 mil/mês",
  "De R$ 100 mil a R$ 200 mil/mês",
  "Acima de R$ 200 mil/mês",
];

/** (11) 91234-5678 */
function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const input =
  "w-full rounded-[10px] border border-navy-200 bg-white px-4 py-3.5 text-[0.95rem] text-ink outline-none transition placeholder:text-navy-400/80 focus:border-navy-600 focus:shadow-[0_0_0_4px_rgba(36,71,124,0.10)]";

export function HeroForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    cidade: "",
    faturamento: "",
  });
  const [sent, setSent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const tracking = useRef<Record<string, string>>({});

  // Guarda UTMs/gclid/fbclid da chegada (persistem mesmo se a URL mudar depois)
  useEffect(() => {
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
    const params = new URLSearchParams(window.location.search);
    let stored: Record<string, string> = {};
    try {
      stored = JSON.parse(sessionStorage.getItem("alveo_tracking") ?? "{}");
    } catch {}
    const fromUrl = Object.fromEntries(keys.filter((k) => params.get(k)).map((k) => [k, params.get(k)!]));
    tracking.current = { ...stored, ...fromUrl, referrer: stored.referrer ?? document.referrer };
    try {
      sessionStorage.setItem("alveo_tracking", JSON.stringify(tracking.current));
    } catch {}
  }, []);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const value = k === "whatsapp" ? maskPhone(e.target.value) : e.target.value;
    setForm((f) => ({ ...f, [k]: value }));
  };

  const digits = form.whatsapp.replace(/\D/g, "").length;
  const phoneOk = digits === 10 || digits === 11;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOk) return;
    const primeiroNome = form.nome.trim().split(/\s+/)[0];
    const msg = `Olá! Sou ${primeiroNome}, da ${form.empresa.trim()}, em ${form.cidade.trim()}, e gostaria de agendar uma conversa sobre o marketing da minha clínica.`;
    // Mesmo ID no pixel (navegador) e na API de Conversões (servidor) = lead contado uma vez só
    const eventId = crypto.randomUUID();
    const cookie = (name: string) => document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1];
    const fbclid = tracking.current.fbclid;
    const fbc = cookie("_fbc") ?? (fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined);

    // Salva o lead na planilha (keepalive: o envio continua mesmo com a aba do WhatsApp abrindo)
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        nome: form.nome,
        clinica: form.empresa,
        whatsapp: form.whatsapp,
        cidade: form.cidade,
        faturamento: form.faturamento,
        ...tracking.current,
        pagina: window.location.href,
        website: honeypot,
        event_id: eventId,
        fbp: cookie("_fbp"),
        fbc,
      }),
    }).catch(() => {});
    // Conversão no Facebook Ads
    trackPixel("Lead", { content_name: "Formulário LP ALVEO", content_category: form.faturamento }, eventId);
    setSent(true);
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div id={FORM_ID} className="relative mx-auto w-full max-w-[470px] scroll-mt-16 lg:mr-0">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-navy-100 bg-white px-6 pt-8 pb-7 shadow-[0_30px_80px_-20px_rgba(11,29,58,0.25)] sm:px-8"
      >
        <p className="font-display text-[1.3rem] font-bold tracking-tight text-ink">
          Agende uma conversa
        </p>
        <p className="mt-1.5 mb-6 text-[0.88rem] leading-relaxed text-muted">
          Leva menos de um minuto. Retornamos pelo WhatsApp em horário comercial.
        </p>

        {/* honeypot anti-spam: invisível para pessoas */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />

        <div className="mb-6 flex flex-col gap-4">
          <Field label="Nome">
            <input required autoComplete="name" placeholder="Seu nome completo" className={input} value={form.nome} onChange={set("nome")} />
          </Field>
          <Field label="Clínica ou consultório">
            <input required autoComplete="organization" placeholder="Nome da clínica ou consultório" className={input} value={form.empresa} onChange={set("empresa")} />
          </Field>
          <Field label="WhatsApp">
            <div className="flex">
              <span className="flex select-none items-center rounded-l-[10px] border border-r-0 border-navy-200 bg-navy-50 px-3.5 text-[0.95rem] font-semibold text-navy-600">
                +55
              </span>
              <input
                required
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="(11) 91234-5678"
                className={`${input} min-w-0 flex-1 rounded-l-none`}
                value={form.whatsapp}
                onChange={set("whatsapp")}
              />
            </div>
            {digits > 0 && (
              <p className={`mt-1 px-0.5 text-[0.78rem] font-semibold ${phoneOk ? "text-green-700" : "text-amber-700"}`}>
                {phoneOk ? "Perfeito, falaremos com você por este número." : "Digite o DDD + número (10 ou 11 dígitos)."}
              </p>
            )}
          </Field>
          <Field label="Cidade e bairro">
            <input required autoComplete="address-level2" placeholder="Ex.: Campinas, Cambuí" className={input} value={form.cidade} onChange={set("cidade")} />
          </Field>
          <Field label="Faturamento mensal">
            <select required className={`${input} cursor-pointer appearance-none ${form.faturamento ? "" : "text-muted"}`} value={form.faturamento} onChange={set("faturamento")}>
              <option value="" disabled>
                Selecione uma faixa
              </option>
              {faturamento.map((o) => (
                <option key={o} value={o} className="text-ink">
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <button type="submit" className="cta w-full">
          {sent ? "Abrindo o WhatsApp…" : "Solicitar contato"}
        </button>

        <p className="mt-4 flex items-start justify-center gap-2 text-[0.76rem] leading-snug text-muted">
          <IconShield className="mt-0.5 h-3.5 w-3.5 flex-none" />
          Dados protegidos. Confirmamos a disponibilidade da sua região na
          primeira conversa.
        </p>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.8rem] font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}
