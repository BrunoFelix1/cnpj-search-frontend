import LeadForm from "./components/LeadForm/LeadForm";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <header className="w-full bg-zinc-900/70 border-b border-white/10 px-8 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
        <div className="flex w-full pl-7 items-center justify-start gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80 sm:text-sm">
          <img src="/LogoHeader.png" alt="CNPJ 360" className="h-12 w-auto" />
        </div>
      </header>
      <div className="grid w-full flex-1 items-stretch gap-16 px-15 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="flex h-full flex-col gap-8">
          <LeadForm />

          <div className="flex flex-wrap gap-4 text-xs text-white/70">
            <div className="flex w-full items-center justify-center">
              <span className="w-full text-center tracking-[0.35em] text-amber-100/70">
                Desenvolvido por @BrunoFelix. Todos os direitos reservados.
              </span>
            </div>
          </div>
        </section>

        <section className="relative hidden w-full min-h-120 items-center justify-center overflow-hidden rounded-[1.75rem] lg:flex">
          <div className="absolute inset-0 flex items-center justify-center rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(252,215,165,0.2),transparent_55%),radial-gradient(circle_at_75%_20%,rgba(170,140,255,0.25),transparent_45%),linear-gradient(160deg,rgba(22,20,28,0.98),rgba(12,12,16,0.98))]">
            <img src="/Logo.png" alt="CNPJ 360" className="h-70 w-auto" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
