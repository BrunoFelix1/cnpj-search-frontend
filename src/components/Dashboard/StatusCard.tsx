enum ERegistrationStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
  SUSPENDED = "SUSPENDED",
  UNKNOWN = "UNKNOWN",
}

type StatusCardProps = {
  status: {
    registrationStatus: ERegistrationStatus | string;
    statusColor: string;
    statusDate: string;
    statusReason: string;
  };
};

const STATUS_LABELS: Record<ERegistrationStatus, string> = {
  [ERegistrationStatus.ACTIVE]: "Ativa",
  [ERegistrationStatus.CLOSED]: "Baixada",
  [ERegistrationStatus.SUSPENDED]: "Suspensa",
  [ERegistrationStatus.UNKNOWN]: "Indefinida",
};

export function StatusCard({ status }: Readonly<StatusCardProps>) {
  const normalizedStatus =
    STATUS_LABELS[status.registrationStatus as ERegistrationStatus] ??
    STATUS_LABELS[ERegistrationStatus.UNKNOWN];

  return (
    <div className="rounded-2xl border border-none bg-linear-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
            Status cadastral
          </span>
          <span className="text-lg font-semibold text-white sm:text-xl">
            {normalizedStatus}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: status.statusColor }}
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {status.registrationStatus}
          </span>
        </div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-none bg-zinc-950 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Data do status
          </p>
          <p className="mt-2 text-sm font-semibold text-white">
            {status.statusDate}
          </p>
        </div>
        <div className="rounded-xl border border-none bg-zinc-950 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Motivo
          </p>
          <p className="mt-2 text-sm font-semibold text-white">
            {status.statusReason || "Sem informacao"}
          </p>
        </div>
      </div>
    </div>
  );
}
