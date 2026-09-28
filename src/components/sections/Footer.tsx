import { LogoWordmark } from "../Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white pb-10 text-center">
      <div className="py-10">
        <a href="#top" className="inline-flex items-center gap-1.5 font-display text-[0.9rem] font-semibold text-navy-600 hover:text-navy">
          <span className="font-extrabold" aria-hidden>
            ^
          </span>
          Retornar ao topo
        </a>
      </div>
      <div className="container-x">
        <LogoWordmark className="mx-auto mb-2 h-7 w-auto text-navy" />
        <p className="mb-1 text-[0.75rem] text-muted">
          {site.fullName} · {site.tagline}
        </p>
        <p className="text-[0.68rem] text-muted">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
