import { brl, offer } from "@/lib/site";

const items = [
  "Marketing especializado em odontologia",
  `Primeiro mês por ${brl(offer.price)}`,
  "Sem contrato de fidelidade",
  "Exclusividade por região",
  "Relatórios mensais de performance",
];

function Group() {
  return (
    <div className="flex flex-none">
      {Array.from({ length: 4 }).flatMap((_, r) =>
        items.map((t) => (
          <span key={`${r}-${t}`}>
            {t} <span className="mq-x">•</span>
          </span>
        )),
      )}
    </div>
  );
}

/** Duas faixas diagonais correndo em sentidos opostos (divisória hero → depoimentos). */
export function Marquee() {
  return (
    <section className="mq-section" aria-label={items.join(" • ")}>
      <div className="mq-fill f1" aria-hidden />
      <div className="mq-fill f2" aria-hidden />
      {(["b1", "b2"] as const).map((b) => (
        <div key={b} className={`mq-band ${b}`} aria-hidden>
          <div className="mq-track">
            <Group />
            <Group />
          </div>
        </div>
      ))}
    </section>
  );
}
