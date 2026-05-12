import api from "../api/axios";
import type { LeadDashboardResponse, SearchLeadDto } from "../types/lead.types";

export async function searchLead(
  payload: SearchLeadDto,
): Promise<LeadDashboardResponse> {
  const response = await api.post<LeadDashboardResponse>(
    "/leads/search",
    payload,
  );

  return response.data;
}
