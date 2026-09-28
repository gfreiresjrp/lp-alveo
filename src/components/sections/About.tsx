/* eslint-disable @next/next/no-img-element */
import { Reveal } from "../Reveal";
import { FORM_ID, aboutPhotos } from "@/lib/site";

function Photo({ p, className }: { p: (typeof aboutPhotos)[number]; className: string }) {
  return (
    <figure className={`overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_-20px_rgba(11,29,58,0.35)] ${className}`}>
      <div className="relative flex aspect-[4/5] items-center justify-center bg-[linear-gradient(160deg,var(--color-navy-100),var(--color-navy-200))]">
        {p.src ? (
          <img src={p.src} alt={p.caption} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy-400">Foto</span>
        )}
      </div>
      <figcaption className="px-5 py-4 text-[0.82rem] font-semibold text-ink">{p.caption}</figcaption>
    </figure>
  );
}

export function About() {
  const [a, b] = aboutPhotos;

  return (
    <section id="quem-somos" className="section bg-navy-50">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <div className="relative mx-auto grid w-full max-w-[460px] grid-cols-[1fr_0.85fr] items-start gap-5">
          <Photo p={a} className="" />
          <Photo p={b} className="mt-16" />
        </div>

        <Reveal className="text-center lg:text-left">
          <span className="eyebrow">Quem somos</span>
          <h2 className="h-title text-[1.9rem] sm:text-[2.2rem] lg:text-[2.5rem]">
            Uma operação dedicada exclusivamente à <span className="hl">odontologia</span>.
          </h2>
          <div className="mt-7 space-y-5">
            <p className="lead">
              Não somos uma agência generalista. Toda a nossa operação, de tráfego
              e criação a atendimento e dados, é construída em torno da jornada
              do paciente odontológico.
            </p>
            <p className="lead">
              Nosso trabalho é medido pelo que importa para o seu negócio:
              avaliações agendadas, comparecimento e tratamentos fechados. Métricas
              de vaidade não entram no relatório.
            </p>
            <p className="lead">
              Atendemos de consultórios individuais a clínicas com múltiplas
              cadeiras, sempre com um número limitado de clientes por mês para
              garantir acompanhamento próximo.
            </p>
          </div>
          <div className="mt-10">
            <a href={`#${FORM_ID}`} className="cta">
              Conversar com um especialista
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
