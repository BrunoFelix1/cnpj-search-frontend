type GeneralInfoCardProps = {
  metrics: {
    yearsInBusiness: number;
    partnersCount: number;
    secondaryActivitiesCount: number;
    shareCapital: string;
    isActive: boolean;
  };

  secondaryActivitiesCount: number;
  partnersCount: number;
  currentTaxRegime: string;
};

export function GeneralInfoCard({
  metrics,
  secondaryActivitiesCount,
  partnersCount,
  currentTaxRegime,
}: Readonly<GeneralInfoCardProps>) {
  const metricCards = [
    {
      label: "Tempo de atividade",
      value: `${metrics.yearsInBusiness} anos`,
      highlight: false,
    },
    {
      label: "Sócios",
      value: partnersCount,
      highlight: false,
    },
    {
      label: "Atividades secundárias",
      value: secondaryActivitiesCount,
      highlight: false,
    },
    {
      label: "Capital social",
      value: metrics.shareCapital,
      highlight: true,
    },
    {
      label: "Regime tributário",
      value: currentTaxRegime,
      highlight: false,
    },
    {
      label: "Status",
      value: metrics.isActive ? "Ativa" : "Inativa",
      highlight: metrics.isActive,
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-linear-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Métricas
            </span>

            <span className="text-lg font-semibold text-white sm:text-xl">
              Indicadores da empresa
            </span>

            <span className="text-xs text-zinc-400">
              Informações estratégicas e operacionais da empresa
            </span>
          </div>

          <div
            className={`rounded-full px-4 py-2 text-xs font-semibold ${
              metrics.isActive
                ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                : "border border-red-400/20 bg-red-400/10 text-red-100"
            }`}
          >
            {metrics.isActive ? "Empresa ativa" : "Empresa inativa"}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metricCards.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-2xl border p-5 transition-all duration-300 ${
                metric.highlight
                  ? "border-cyan-400/15 bg-cyan-400/5"
                  : "border-white/5 bg-zinc-950 hover:border-white/10 hover:bg-zinc-900"
              }`}
            >
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {metric.label}
                </span>

                <span
                  className={`text-lg font-bold sm:text-xl ${
                    metric.highlight ? "text-cyan-100" : "text-white"
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
