"use client";

import { useEffect, useState } from "react";
import { IconWhatsApp } from "./Icons";
import { FORM_ID } from "@/lib/site";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      // Leva ao formulário: nenhum contato chega no WhatsApp sem virar lead antes
      href={`#${FORM_ID}`}
      onClick={() => {
        // depois de rolar até o formulário, já coloca o cursor no primeiro campo
        setTimeout(() => document.querySelector<HTMLInputElement>(`#${FORM_ID} input:not([tabindex="-1"])`)?.focus({ preventScroll: true }), 600);
      }}
      aria-label="Falar com a ALVEO: preencha o formulário"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-semibold text-[#052e16] shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <IconWhatsApp className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Falar agora</span>
    </a>
  );
}
