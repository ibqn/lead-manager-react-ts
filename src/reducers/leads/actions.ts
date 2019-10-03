import { GET_LEADS, DETELE_LEAD, LeadActionTypes, Lead } from './types';

export function getLeads(leads: Lead[]): LeadActionTypes {
  return {
    type: GET_LEADS,
    payload: leads
  };
}

export function deleteLead(id: number): LeadActionTypes {
  return {
    type: DETELE_LEAD,
    payload: id
  };
}
