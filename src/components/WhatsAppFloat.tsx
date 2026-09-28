"use client";

import { useEffect, useState } from "react";
import { IconWhatsApp } from "./Icons";
import { whatsappUrl } from "@/lib/site";

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
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-semibold text-[#052e16] shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <IconWhatsApp className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Falar agora</span>
    </a>
  );
}
