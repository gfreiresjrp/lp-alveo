import { Reveal } from "../Reveal";
import { LogoSymbol } from "../Logo";
import { FORM_ID } from "@/lib/site";

const steps = [
  { letter: "A", label: "Atração", text: "Campanhas segmentadas para pacientes da sua região com intenção de tratamento." },
  { letter: "L", label: "Leads", text: "Contatos qualificados chegando direto ao WhatsApp da clínica." },
  { letter: "V", label: "Vendas", text: "Recepção treinada para agendar avaliações e conduzir o fechamento." },
  { letter: "E", label: "Escala", text: "Ampliação de investimento e canais sobre o que já foi validado." },
  { letter: "O", label: "Otimização", text: "Análise de custo por paciente e ajustes contínuos de performance." },
];

/* Geometria do ciclo (viewBox 360×360): 5 etapas num anel, sentido horário a partir do topo. */
const C = 180;
const R = 132;
const angle = (i: number) => ((-90 + i * 72) * Math.PI) / 180;
const pt = (a: number, r = R) => [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
const GAP = (17 * Math.PI) / 180;

function arc(i: number) {
  const [x1, y1] = pt(angle(i) + GAP);
  const [x2, y2] = pt(angle(i + 1) - GAP);
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${R} ${R} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

function Cycle({ id }: { id: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[350px]">
      <svg viewBox="0 0 360 360" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <marker id={id} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 Z" fill="var(--color-navy-600)" />
          </marker>
        </defs>
        <circle cx={C} cy={C} r={R - 46} fill="var(--color-navy-50)" stroke="var(--color-navy-100)" strokeWidth="2" />
        {steps.map((_, i) => (
          <path key={i} d={arc(i)} fill="none" stroke="var(--color-navy-600)" strokeWidth="3" strokeDasharray="7 6" markerEnd={`url(#${id})`} />
        ))}
        {steps.map((s, i) => {
          const [x, y] = pt(angle(i));
          return (
            <g key={s.letter}>
              <circle cx={x} cy={y} r="27" fill="var(--color-navy)" stroke="var(--color-lime)" strokeWidth="3" />
              <text x={x} y={y + 8} textAnchor="middle" className="font-display" fontSize="24" fontWeight="900" fill="var(--color-lime)">
                {s.letter}
              </text>
            </g>
          );
        })}
      </svg>
      <LogoSymbol className="absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2 text-navy" />
    </div>
  );
}

function Card({ s, i }: { s: (typeof steps)[number]; i: number }) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-navy-50 px-6 py-6 text-left">
      <h3 className="mb-2 font-display text-[1rem] font-bold text-ink">
        <span className="mr-2 text-navy-400">{String(i + 1).padStart(2, "0")}</span>
        {s.label}
      </h3>
      <p className="text-[0.88rem] leading-relaxed text-muted">{s.text}</p>
    </div>
  );
}

export function Method() {
  return (
    <section id="metodo" className="section bg-white text-center">
      <div className="container-x">
        <span className="eyebrow">O método ALVEO</span>
        <h2 className="h-title mx-auto max-w-[760px] text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem]">
          Um processo contínuo para manter a <span className="hl">agenda ocupada</span>.
        </h2>
        <p className="lead mx-auto mt-6 mb-16 max-w-[620px] lg:mb-20">
          Cada letra da ALVEO representa uma etapa de um ciclo que leva o
          paciente do primeiro contato até a cadeira e se repete todos os meses.
        </p>

        <Reveal className="mx-auto mb-16 max-w-[1100px]">
          {/* desktop: cards dos dois lados do ciclo */}
          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex flex-1 flex-col gap-5">
              <Card s={steps[0]} i={0} />
              <Card s={steps[1]} i={1} />
            </div>
            <div className="w-[360px] flex-none">
              <Cycle id="arrow-lg" />
            </div>
            <div className="flex flex-1 flex-col gap-5">
              <Card s={steps[2]} i={2} />
              <Card s={steps[3]} i={3} />
            </div>
          </div>
          <div className="mx-auto mt-8 hidden max-w-[380px] lg:block">
            <Card s={steps[4]} i={4} />
          </div>

          {/* mobile/tablet: ciclo em cima, cards em grade */}
          <div className="lg:hidden">
            <Cycle id="arrow-sm" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {steps.map((s, i) => (
                <Card key={s.letter} s={s} i={i} />
              ))}
            </div>
          </div>
        </Reveal>

        <a href={`#${FORM_ID}`} className="cta">
          Agendar uma conversa
        </a>
      </div>
    </section>
  );
}
