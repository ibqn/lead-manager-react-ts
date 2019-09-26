import { GET_LEADS, LeadActionTypes, Lead } from './types';

export function getLeads(leads: Lead[]): LeadActionTypes {
  return {
    type: GET_LEADS,
    payload: leads
  };
}
