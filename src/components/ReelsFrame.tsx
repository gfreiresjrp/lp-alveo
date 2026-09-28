import { IconStar } from "./Icons";

/**
 * Frame de vídeo no formato Reels do Instagram (9:16 vertical).
 *
 * COMO ADICIONAR O VÍDEO DO DEPOIMENTO:
 * 1. Coloque o arquivo em `public/videos/depoimento.mp4`
 *    (e, se quiser, uma imagem de capa em `public/videos/capa.jpg`).
 * 2. Use assim no Hero:
 *      <ReelsFrame src="/videos/depoimento.mp4" poster="/videos/capa.jpg" />
 *    Ou incorpore um Reels do Instagram passando `embedUrl`.
 *
 * Sem `src` nem `embedUrl`, mostra o placeholder "campo vago".
 */
export function ReelsFrame({
  src,
  poster,
  embedUrl,
  cliente = "Depoimento de cliente",
}: {
  src?: string;
  poster?: string;
  embedUrl?: string;
  cliente?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* brilho de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-lime/10 blur-3xl"
      />

      <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-b from-navy-deep to-black shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
        {src ? (
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : embedUrl ? (
          <iframe
            src={embedUrl}
            title="Depoimento em vídeo"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          // ===== Placeholder (campo vago para o vídeo) =====
          <div className="relative flex h-full w-full flex-col items-center justify-center p-5 text-center">
            <div
              aria-hidden
              className="absolute inset-3 rounded-[1.5rem] border border-dashed border-white/15"
            />

            {/* botão play */}
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-lime text-navy shadow-[0_0_0_10px_rgba(198,227,26,0.12)]">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>

            <p className="font-display relative mt-5 text-base font-semibold text-white">
              Vídeo de depoimento
            </p>
            <p className="relative mt-1 text-xs text-muted">
              Espaço reservado para o Reels da cliente
            </p>

            <span className="relative mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
              Formato 9:16 · Reels
            </span>
          </div>
        )}

        {/* legenda inferior (aparece por cima do vídeo) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
          <div className="flex items-center gap-1 text-lime">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-3.5 w-3.5" />
            ))}
          </div>
          <p className="mt-1 text-sm font-semibold text-white">{cliente}</p>
        </div>
      </div>
    </div>
  );
}
