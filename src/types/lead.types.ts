export type SearchLeadDto = {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
};

export type LeadDashboardResponse = {
  company: {
    corporateName: string;
    tradeName: string;
    cnpj: string;
    legalNature: string;
    companySize: string;
    openingDate: string;
  };

  status: {
    registrationStatus: string;
    registrationStatusDate: string;
    specialStatus?: string;
    specialStatusDate?: string;
  };

  location: {
    formattedAddress: string;
    city: string;
    state: string;
    formattedZipCode: string;
    latitude: number;
    longitude: number;
  };

  contacts: {
    formattedPhone?: string;
    email?: string;
    hasContactInfo?: boolean;
  };

  mainActivity: {
    formattedCode: string;
    description: string;
  };

  secondaryActivities: Array<{
    code: string;
    description: string;
  }>;

  partners: Array<{
    name: string;
    role: string;
    ageRange: string;
    entryDate: string;
  }>;

  metrics: {
    yearsInBusiness: number;
    partnersCount: number;
    secondaryActivitiesCount: number;
    shareCapital: string;
    isActive: boolean;
  };

  currentTaxRegime: string;
};
