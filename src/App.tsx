import { useMemo, useState } from "react";

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

type DashboardSection = "overview" | "details";

function App() {
  const [showCompany, setShowCompany] = useState(false);

  const [leadData, setLeadData] = useState<LeadDashboardResponse | null>(null);
  const [searcherName, setSearcherName] = useState("");

  const [activeSection, setActiveSection] =
    useState<DashboardSection>("overview");

  const shouldShowCompany = showCompany && leadData !== null;

  const companyData = useMemo(() => {
    return leadData ?? undefined;
  }, [leadData]);

  const sections: Array<{
    key: DashboardSection;
    label: string;
  }> = [
    {
      key: "overview",
      label: "Visão geral",
    },
    {
      key: "details",
      label: "Detalhes",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {shouldShowCompany && companyData ? (
        <>
          <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-900/80 px-8 py-5 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3 pl-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80 sm:text-sm">
                <img
                  src="/LogoHeader.png"
                  alt="CNPJ 360"
                  className="h-12 w-auto"
                />
              </div>

              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8 mt-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.key;

                  return (
                    <button
                      key={section.key}
                      onClick={() => setActiveSection(section.key)}
                      className={`group hover:cursor-pointer relative flex items-center justify-center px-1 pb-3 text-sm font-normal transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white/45 hover:text-white/80"
                      }`}
                    >
                      <span className="relative z-10 tracking-[0.01em]">
                        {section.label}
                      </span>

                      <span
                        className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#bb7944] transition-all duration-300 ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-70"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <Button
                onClick={() => {
                  setShowCompany(false);
                  setLeadData(null);
                  setSearcherName("");
                  setActiveSection("overview");
                }}
                className="rounded-full border border-white/10 bg-[#bb7944]/70 px-6 py-4 text-sm font-semibold text-white/80 transition-all duration-300 ease-out hover:cursor-pointer hover:-translate-y-0.5 hover:border-white/20 sm:h-11 sm:text-base"
              >
                Nova consulta
              </Button>
            </div>
          </header>

          <div className="w-full flex-1 bg-zinc-950 px-6 py-10 sm:px-10 sm:py-12">
            <div className="mx-auto grid max-w-[1800px] gap-8">
              {activeSection === "overview" && (
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
                </div>
              )}

              {activeSection === "details" && (
                <section className="grid grid-cols-[1.5fr_1fr] gap-8">
                  <GeneralInfoCard
                    metrics={companyData.metrics}
                    secondaryActivitiesCount={
                      companyData.secondaryActivities.length
                    }
                    partnersCount={companyData.partners.length}
                    currentTaxRegime={companyData.currentTaxRegime}
                  />
                  <PartnersCard
                    partners={companyData.partners}
                    nameOfSearcher={searcherName}
                  />
                </section>
              )}
            </div>
          </div>

          <Footer />
        </>
      ) : (
        <div className="flex flex-1 items-center justify-center px-6 py-8 sm:px-10 lg:px-14">
          <div className="w-full max-w-[1800px]">
            <LeadForm
              onSubmit={(data, name) => {
                setLeadData(data);
                setSearcherName(name);
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
