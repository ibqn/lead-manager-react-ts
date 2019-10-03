import {
  GET_LEADS,
  DETELE_LEAD,
  ADD_LEAD,
  LeadActionTypes,
  Lead
} from './types';

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

export function addLead(lead: Lead): LeadActionTypes {
  return {
    type: ADD_LEAD,
    payload: lead
  };
}
