"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoWordmark } from "./Logo";
import { Cta } from "./ui";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link
          href="#top"
          aria-label="ALVEO — início"
          className="text-white transition-opacity hover:opacity-80"
        >
          <LogoWordmark className="h-6 w-auto sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Cta href="#diagnostico" variant="primary" withArrow>
            Diagnóstico grátis
          </Cta>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 top-0 z-40 origin-top bg-navy/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col pt-28 pb-10">
          <nav className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40 + 80}ms` : "0ms" }}
                className={`border-b border-white/10 py-4 font-display text-2xl font-semibold text-white transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Cta
              href="#diagnostico"
              variant="primary"
              withArrow
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Quero meu diagnóstico grátis
            </Cta>
          </div>
        </div>
      </div>
    </header>
  );
}
