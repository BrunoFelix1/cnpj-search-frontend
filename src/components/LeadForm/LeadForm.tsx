import type { FormEvent } from "react";
import { ArrowRight, Building2, IdCard, Mail, Phone } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

type LeadFormProps = {
  onSubmit?: () => void;
};

function LeadForm({ onSubmit }: Readonly<LeadFormProps>) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <section className="h-full w-full">
      <div className="grid min-h-[680px] overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.55)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,215,165,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(180,140,255,0.18),transparent_35%),linear-gradient(160deg,rgba(22,20,28,0.98),rgba(12,12,16,0.98))]" />

          <div className="absolute -top-24 right-[-5%] h-56 w-56 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 opacity-25">
            <div className="relative h-72 w-72">
              <div className="absolute right-2 top-4 h-14 w-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur" />

              <div className="absolute right-24 top-14 h-20 w-20 rounded-[1.6rem] border border-white/10 bg-white/5 backdrop-blur" />

              <div className="absolute right-10 top-32 h-12 w-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur" />

              <div className="absolute right-36 top-40 h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur" />

              <div className="absolute bottom-0 right-36 h-14 w-14 rounded-xl border border-white/10 bg-white/5 backdrop-blur" />
            </div>
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <div className="max-w-lg">
              <h1 className="max-w-md mt-10 text-5xl leading-[1.05] font-light tracking-[-0.04em] text-white">
                Consulte as informações de {""}
                <span className="font-semibold text-amber-100">
                  qualquer
                </span>{" "}
                empresa em segundos
              </h1>

              <p className="mt-7 max-w-sm text-xl leading-relaxed text-white/75">
                Para você definir estratégias de forma rápida e eficiente.
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between bg-zinc-950 px-8 py-8 sm:px-10 lg:px-14 lg:py-10">
          <div className="flex flex-col items-center">
            <img
              src="/LogoHeader.png"
              alt="CNPJ 360"
              className="h-14 w-auto object-contain"
            />

            <h2 className="mt-5 text-center text-2xl font-semibold tracking-[-0.03em] text-white">
              Bem vindo!
            </h2>

            <p className="mt-2 text-center text-sm text-white/50">
              Preencha os dados abaixo para iniciar a busca.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-6"
          >
            <div className="group">
              <label className="mb-2 block text-xs font-medium text-white/70">
                Nome
              </label>

              <div className="relative">
                <Input
                  type="text"
                  placeholder="Ex: João da Silva"
                  className="h-14 rounded-none border-0 border-b border-white/10 bg-transparent px-0 pr-12 text-sm text-white placeholder:text-white/25 shadow-none transition focus-visible:border-amber-100/35 focus-visible:ring-0"
                />

                <Building2 className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-white/30" />
              </div>
            </div>

            <div className="group">
              <label className="mb-2 block text-xs font-medium text-white/70 ">
                E-mail
              </label>

              <div className="relative">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="h-14 rounded-none border-0 border-b border-white/10 bg-transparent px-0 pr-12 text-sm text-white placeholder:text-white/25 shadow-none transition focus-visible:border-amber-100/35 focus-visible:ring-0"
                />

                <Mail className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-white/30" />
              </div>
            </div>

            <div className="group">
              <label className="mb-2 block text-xs font-medium text-white/70">
                Telefone
              </label>

              <div className="relative">
                <Input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="h-14 rounded-none border-0 border-b border-white/10 bg-transparent px-0 pr-12 text-sm text-white placeholder:text-white/25 shadow-none transition focus-visible:border-amber-100/35 focus-visible:ring-0"
                />

                <Phone className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-white/30" />
              </div>
            </div>

            <div className="group">
              <label className="mb-2 block text-xs font-medium text-white/70">
                CNPJ
              </label>

              <div className="relative">
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="00.000.000/0000-00"
                  className="h-14 rounded-none border-0 border-b border-white/10 bg-transparent px-0 pr-12 text-sm text-white placeholder:text-white/25 shadow-none transition focus-visible:border-amber-100/35 focus-visible:ring-0"
                />

                <IdCard className="pointer-events-none absolute right-1 top-1/2 size-4 -translate-y-1/2 text-white/30" />
              </div>
            </div>

            <div className="pt-3">
              <Button
                type="submit"
                className="flex h-14 hover:cursor-pointer w-full items-center justify-center gap-3 rounded-2xl bg-[#bb7944]/90 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(187,121,68,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Consultar empresa
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <span className="text-xs text-white/40">
              Desenvolvido por{" "}
              <span className="font-semibold text-amber-100/80">
                @BrunoFelix
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
