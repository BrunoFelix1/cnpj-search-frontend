type PartnersCardProps = {
  partners: Array<{
    name: string;
    role: string;
    ageRange: string;
    entryDate: string;
  }>;

  nameOfSearcher?: string;
};

export function PartnersCard({
  partners,
  nameOfSearcher,
}: Readonly<PartnersCardProps>) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Sócios e administradores
            </span>

            <span className="text-lg font-semibold text-white sm:text-xl">
              Lista de sócios e administradores
            </span>

            <span className="text-xs text-zinc-400">
              Informações sobre os sócios e administradores da empresa
            </span>
          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300">
            {partners.length} {partners.length === 1 ? "registro" : "registros"}
          </div>
        </div>

        <div className="max-h-72 overflow-y-auto pr-1">
          <div className="grid gap-4 ">
            {partners.length > 0 ? (
              partners.map((partner, index) => {
                const isHighlighted =
                  partner.name.trim().toLowerCase() ===
                  nameOfSearcher?.trim().toLowerCase();

                return (
                  <div
                    key={`${partner.name}-${index}`}
                    className={`group rounded-2xl p-5  transition-all duration-300  ${
                      isHighlighted
                        ? "border  border-white/10 bg-cyan-400/5 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
                        : "border border-white/10 bg-zinc-950 hover:border-white/10 hover:bg-zinc-900"
                    }`}
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between ">
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-semibold text-white sm:text-base">
                              {partner.name}
                            </h3>

                            {isHighlighted ? (
                              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-100">
                                Lead Contato
                              </span>
                            ) : null}
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                            <span
                              className={`rounded-full px-3 py-1 ${
                                isHighlighted
                                  ? "border border-cyan-400/15 bg-cyan-400/10 text-cyan-100"
                                  : "border border-white/10 bg-white/5 text-zinc-300"
                              }`}
                            >
                              {partner.role}
                            </span>

                            <span className="text-white/20">•</span>

                            <span>{partner.ageRange}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-1 lg:items-end">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                          Entrada na sociedade
                        </span>

                        <span className="text-sm font-semibold text-white">
                          {partner.entryDate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-zinc-950 p-8 text-center">
                <span className="text-sm text-white/60">
                  Nenhum sócio ou administrador encontrado
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
