type ActivitiesCardProps = {
  mainActivity: {
    formattedCode: string;
    description: string;
  };
  secondaryActivities: Array<{
    code: string;
    description: string;
  }>;
};

export function ActivitiesCard({
  mainActivity,
  secondaryActivities,
}: Readonly<ActivitiesCardProps>) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              Atividades econômicas
            </span>

            <span className="text-lg font-semibold text-white sm:text-xl">
              CNAEs da empresa
            </span>

            <span className="text-xs text-zinc-400">
              Principal e secundárias
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Atividade principal
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                {mainActivity.formattedCode}
              </span>

              <p className="text-sm leading-relaxed font-semibold text-white">
                {mainActivity.description}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Atividades secundárias
            </p>

            <div className="mt-4 flex max-h-85 flex-col gap-3 overflow-y-auto pr-1">
              {secondaryActivities.length > 0 ? (
                secondaryActivities.map((activity) => (
                  <div
                    key={activity.code}
                    className="rounded-xl border border-white/5 bg-white/2 p-4 transition-colors hover:border-white/10 hover:bg-white/4"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-300">
                        {activity.code}
                      </span>

                      <p className="text-sm leading-relaxed text-white">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <span className="text-sm text-white/60">
                  Nenhuma atividade secundária encontrada
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
