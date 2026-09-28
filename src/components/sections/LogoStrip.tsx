const items = [
  "E-commerce",
  "Serviços",
  "Educação",
  "Saúde",
  "Imobiliário",
  "Indústria",
  "Food",
  "Tecnologia",
  "Varejo",
  "Beleza",
];

export function LogoStrip() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.015] py-8">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Estratégias que impulsionam negócios de todos os segmentos
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-4">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
