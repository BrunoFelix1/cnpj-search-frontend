import { useState } from "react";

import LeadForm from "./components/LeadForm/LeadForm";
import leadResponseMock from "./mocks/LeadRespondeMock.json";
import { CompanyCard } from "./components/Dashboard/CompanyCard";
import { StatusCard } from "./components/Dashboard/StatusCard";
import { LocationCard } from "./components/Dashboard/LocationCard";
import { ActivitiesCard } from "./components/Dashboard/ActivitiesCard";
import { PartnersCard } from "./components/Dashboard/PartnersCard";
import { GeneralInfoCard } from "./components/Dashboard/GeneralInfoCard";
import { Button } from "./components/ui/button";

function App() {
  const [showCompany, setShowCompany] = useState(false);
  const companyData = leadResponseMock;

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <header className="w-full border-b border-white/5 bg-zinc-900/60 px-8 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex pl-7 items-center justify-start gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80 sm:text-sm">
            <img src="/LogoHeader.png" alt="CNPJ 360" className="h-12 w-auto" />
          </div>

          {showCompany ? (
            <Button className="rounded-2xl bg-[#bb7944]/80 px-6 py-4 text-sm font-semibold text-white/80  transition-all duration-300 ease-out hover:cursor-pointer hover:-translate-y-0.5 hover:brightness-110  focus-visible:ring-2 focus-visible:ring-amber-200/40 sm:h-11 sm:text-base">
              Nova consulta
            </Button>
          ) : null}
        </div>

        {showCompany ? null : (
          <div className="mt-4 text-center text-sm text-white/70">
            Preencha o formulário para visualizar os dados da empresa
          </div>
        )}
      </header>
      {showCompany ? (
        <div className="w-full flex-1 bg-zinc-950 px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-8">
            <div className="grid gap-8 lg:grid-cols-[3fr_1fr]">
              <CompanyCard company={companyData.company} />
              <StatusCard status={companyData.status} />
            </div>
            <LocationCard
              location={companyData.location}
              contacts={companyData.contacts}
            />
            <ActivitiesCard
              mainActivity={companyData.mainActivity}
              secondaryActivities={companyData.secondaryActivities}
            />
            <PartnersCard
              partners={companyData.partners}
              nameOfSearcher="rafael guimaraes lima"
            />
            <GeneralInfoCard
              metrics={companyData.metrics}
              secondaryActivitiesCount={companyData.secondaryActivities.length}
              partnersCount={companyData.partners.length}
              currentTaxRegime={companyData.currentTaxRegime}
            />
          </div>
        </div>
      ) : (
        <div className="grid w-full flex-1 items-stretch gap-16 px-15 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="flex h-full flex-col gap-8">
            <LeadForm onSubmit={() => setShowCompany(true)} />

            <div className="flex flex-wrap gap-4 text-xs text-white/70">
              <div className="flex w-full items-center justify-center">
                <span className="w-full text-center tracking-[0.35em] text-amber-100/70 -mt-4">
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
      )}
    </main>
  );
}

export default App;
