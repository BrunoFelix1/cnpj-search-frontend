type CompanyCardProps = {
  company: {
    corporateName: string;
    tradeName: string;
    formattedCnpj: string;
    legalNature: string;
    companySize: string;
    branchType: string;
    openingDate: string;
    yearsInBusiness: number;
  };
};

export function CompanyCard({ company }: Readonly<CompanyCardProps>) {
  return (
    <div className="w-full rounded-2xl border border-none bg-linear-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/70">
              {company.tradeName}
            </span>
            <span className="text-lg font-semibold text-white sm:text-xl">
              {company.corporateName}
            </span>
            <span className="text-xs text-zinc-400">
              CNPJ: {company.formattedCnpj}
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-none bg-zinc-950 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Natureza jurÍdica
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {company.legalNature}
            </p>
          </div>
          <div className="rounded-xl border border-none bg-zinc-950 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Data de abertura
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {company.openingDate}
            </p>
          </div>
          <div className="rounded-xl border border-none bg-zinc-950 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Tempo de atividade
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {company.yearsInBusiness} anos
            </p>
          </div>
          <div className="rounded-xl border border-none bg-zinc-950 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Tipo de unidade
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              {company.branchType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
