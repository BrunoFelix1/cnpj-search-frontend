import { useState } from "react";

import LeadForm from "./components/LeadForm/LeadForm";
import type { LeadDashboardResponse } from "./types/lead.types";
import { CompanyCard } from "./components/Dashboard/CompanyCard";
import { StatusCard } from "./components/Dashboard/StatusCard";
import { LocationCard } from "./components/Dashboard/LocationCard";
import { ActivitiesCard } from "./components/Dashboard/ActivitiesCard";
import { PartnersCard } from "./components/Dashboard/PartnersCard";
import { GeneralInfoCard } from "./components/Dashboard/GeneralInfoCard";
import { Button } from "./components/ui/button";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [showCompany, setShowCompany] = useState(false);
  const [leadData, setLeadData] = useState<LeadDashboardResponse | null>(null);

  const shouldShowCompany = showCompany && leadData !== null;
  const companyData = leadData ?? undefined;

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {shouldShowCompany && companyData ? (
        <>
          <header className="w-full border-b border-white/5 bg-zinc-900/60 px-8 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center justify-start gap-3 pl-7 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80 sm:text-sm">
                <img
                  src="/LogoHeader.png"
                  alt="CNPJ 360"
                  className="h-12 w-auto"
                />
              </div>

              <Button
                onClick={() => setShowCompany(false)}
                className="rounded-2xl bg-[#bb7944]/80 px-6 py-4 text-sm font-semibold text-white/80 transition-all duration-300 ease-out hover:cursor-pointer hover:-translate-y-0.5 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-amber-200/40 sm:h-11 sm:text-base"
              >
                Nova consulta
              </Button>
            </div>
          </header>

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
                secondaryActivitiesCount={
                  companyData.secondaryActivities.length
                }
                partnersCount={companyData.partners.length}
                currentTaxRegime={companyData.currentTaxRegime}
              />
            </div>
          </div>

          <Footer />
        </>
      ) : (
        <div className="flex flex-1 items-center justify-center px-6 py-8 sm:px-10 lg:px-14">
          <div className="w-full max-w-[1800px]">
            <LeadForm
              onSubmit={(data) => {
                setLeadData(data);
                setShowCompany(true);
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
