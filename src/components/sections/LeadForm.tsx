"use client";

import { useState } from "react";
import { Eyebrow } from "../ui";
import { IconCheck, IconArrowRight, IconShield } from "../Icons";
import { whatsappUrl } from "@/lib/site";

const investimento = [
  "Ainda não invisto",
  "Até R$ 3 mil/mês",
  "R$ 3 mil a R$ 10 mil/mês",
  "R$ 10 mil a R$ 30 mil/mês",
  "Acima de R$ 30 mil/mês",
];

const benefits = [
  "Análise dos seus canais atuais",
  "Onde você está perdendo dinheiro hoje",
  "Plano de ação com próximos passos",
  "Sem compromisso e 100% gratuito",
];

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    invest: "",
    desafio: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "*Novo pedido de diagnóstico — ALVEO*",
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa}`,
      `WhatsApp: ${form.whatsapp}`,
      `Investimento atual: ${form.invest || "não informado"}`,
      `Principal desafio: ${form.desafio || "não informado"}`,
    ].join("\n");
    setSent(true);
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="diagnostico" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] border border-lime/20 bg-gradient-to-br from-navy-deep to-navy shadow-card">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            {/* coluna oferta */}
            <div className="relative p-8 sm:p-10 lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-lime/10 blur-3xl"
              />
              <Eyebrow>Diagnóstico gratuito</Eyebrow>
              <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Descubra o potencial de crescimento do seu negócio
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Preencha os dados e receba uma análise estratégica da ALVEO com
                os principais pontos para aumentar suas vendas — sem enrolação.
              </p>

              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-lime text-navy">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-white/85">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2 text-xs text-muted">
                <IconShield className="h-4 w-4 text-lime" />
                Seus dados estão seguros e não serão compartilhados.
              </div>
            </div>

            {/* coluna form */}
            <div className="border-t border-white/10 bg-black/20 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-navy">
                    <IconCheck className="h-8 w-8" />
                  </span>
                  <h3 className="font-display mt-6 text-2xl font-bold text-white">
                    Pedido enviado!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-muted">
                    Abrimos o WhatsApp para finalizar seu contato. Se não abriu
                    automaticamente, fale com a gente pelo botão abaixo.
                  </p>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-lime-bright"
                  >
                    Abrir WhatsApp <IconArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field
                    label="Nome"
                    required
                    id="nome"
                    value={form.nome}
                    onChange={update("nome")}
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                  <Field
                    label="Empresa"
                    required
                    id="empresa"
                    value={form.empresa}
                    onChange={update("empresa")}
                    placeholder="Nome da sua empresa"
                    autoComplete="organization"
                  />
                  <Field
                    label="WhatsApp"
                    required
                    id="whatsapp"
                    type="tel"
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={update("whatsapp")}
                    placeholder="(00) 00000-0000"
                    autoComplete="tel"
                  />

                  <div>
                    <label
                      htmlFor="invest"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Investimento atual em marketing
                    </label>
                    <select
                      id="invest"
                      value={form.invest}
                      onChange={update("invest")}
                      className="w-full rounded-xl border border-white/12 bg-navy/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-lime focus:ring-2 focus:ring-lime/30"
                    >
                      <option value="" className="bg-navy">
                        Selecione uma faixa
                      </option>
                      {investimento.map((o) => (
                        <option key={o} value={o} className="bg-navy">
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="desafio"
                      className="mb-1.5 block text-sm font-medium text-white/85"
                    >
                      Qual seu principal desafio hoje?
                    </label>
                    <textarea
                      id="desafio"
                      value={form.desafio}
                      onChange={update("desafio")}
                      rows={3}
                      placeholder="Ex.: gero visitas mas não vendo, quero escalar, etc."
                      className="w-full resize-none rounded-xl border border-white/12 bg-navy/60 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-lime focus:ring-2 focus:ring-lime/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-4 text-sm font-bold text-navy transition-all duration-200 hover:bg-lime-bright hover:shadow-[0_14px_40px_-8px_rgba(198,227,26,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                  >
                    Quero meu diagnóstico gratuito
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-muted">
                    Ao enviar, você será direcionado ao nosso WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-white/85"
      >
        {label}
        {props.required && <span className="ml-0.5 text-lime">*</span>}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-xl border border-white/12 bg-navy/60 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-lime focus:ring-2 focus:ring-lime/30"
      />
    </div>
  );
}
