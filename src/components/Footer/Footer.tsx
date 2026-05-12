export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-zinc-900/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-md flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/LogoHeader.png" alt="CNPJ 360" className="h-11 w-auto" />
          </div>

          <p className="text-sm leading-relaxed text-zinc-400">
            Plataforma para consulta e visualização do CNPJ de possíveis Leads,
            focando numa melhor visualização das informações.
          </p>

          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} CNPJ 360</span>

            <span className="text-white/20">•</span>

            <span>Todos os direitos reservados</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Plataforma
            </span>

            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>

              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>

              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Recursos
            </span>

            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>

              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>

              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Suporte
            </span>

            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>

              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>

              <a href="#" className="transition-colors hover:text-cyan-100">
                Lorem ipsum dolor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
