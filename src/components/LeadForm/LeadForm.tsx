import { ArrowRight, Building2, IdCard, Mail, Phone } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

function LeadForm() {
  return (
    <section className="h-full w-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,220,170,0.08),transparent_55%),linear-gradient(180deg,rgba(24,24,30,0.98),rgba(12,12,16,0.98))] p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div className="pointer-events-none absolute right-[-12%] top-[-10%] size-[12rem] sm:size-[14rem] lg:size-[18rem] rounded-full" />
        <div className="pointer-events-none absolute left-[-8%] bottom-[-14%] size-[11rem] sm:size-[13rem] lg:size-[16rem] rounded-full" />

        <div className="mb-6 flex flex-col gap-3 sm:mb-7 sm:gap-4 lg:mb-9">
          <h2 className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
            Dados requeridos para consulta
          </h2>
          <p className="text-sm text-white/60 sm:text-base lg:text-lg">
            Preencha os campos abaixo e inicie a busca do CNPJ.
          </p>
        </div>

        <form className="grid flex-1 content-start gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
          <span className="group flex flex-col gap-2">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/60 sm:text-xs">
              Nome
            </span>
            <div className="relative">
              <Input
                type="text"
                placeholder="Ex: João da Silva"
                className="h-12 rounded-2xl border-white/10 bg-white/5 px-5 pr-14 text-sm text-white placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-visible:border-amber-100/35 focus-visible:ring-amber-100/10 sm:h-14 sm:text-base"
              />
              <Building2 className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-white/45 sm:size-5" />
            </div>
          </span>

          <span className="group flex flex-col gap-2">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/60 sm:text-xs">
              E-mail
            </span>
            <div className="relative">
              <Input
                type="email"
                placeholder="seu@email.com"
                className="h-12 rounded-2xl border-white/10 bg-white/5 px-5 pr-14 text-sm text-white placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-visible:border-amber-100/35 focus-visible:ring-amber-100/10 sm:h-14 sm:text-base"
              />
              <Mail className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-white/45 sm:size-5" />
            </div>
          </span>

          <span className="group flex flex-col gap-2">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/60 sm:text-xs">
              Telefone
            </span>
            <div className="relative">
              <Input
                type="tel"
                placeholder="(11) 99999-9999"
                className="h-12 rounded-2xl border-white/10 bg-white/5 px-5 pr-14 text-sm text-white placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-visible:border-amber-100/35 focus-visible:ring-amber-100/10 sm:h-14 sm:text-base"
              />
              <Phone className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-white/45 sm:size-5" />
            </div>
          </span>

          <span className="group flex flex-col gap-2">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/60 sm:text-xs">
              CNPJ
            </span>
            <div className="relative">
              <Input
                type="text"
                inputMode="numeric"
                placeholder="00.000.000/0000-00"
                className="h-12 rounded-2xl border-white/10 bg-white/5 px-5 pr-14 text-sm text-white placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus-visible:border-amber-100/35 focus-visible:ring-amber-100/10 sm:h-14 sm:text-base"
              />
              <IdCard className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-white/45 sm:size-5" />
            </div>
          </span>

          <div className="flex gap-4 pt-3 md:flex-row md:items-center md:justify-between" />
        </form>
        <Button className="relative mt-auto inline-flex h-12 w-full items-center justify-center gap-4 overflow-hidden rounded-2xl bg-[#bb7944]/80 px-8 py-4 text-sm font-semibold text-white/80 shadow-[0_16px_40px_rgba(198,170,100,0.17)] transition-all duration-300 ease-out hover:cursor-pointer hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_18px_50px_rgba(198,170,100,0.35)] focus-visible:ring-2 focus-visible:ring-amber-200/40 sm:h-14 sm:text-base">
          Consultar empresa
          <ArrowRight className="size-4 sm:size-5" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}

export default LeadForm;
