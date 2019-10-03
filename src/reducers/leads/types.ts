export interface LeadShallow {
  name: string;
  email: string;
  message: string;
}

export interface Lead extends LeadShallow {
  id: number;
  created_at: string;
}

export interface LeadsState {
  leads: Lead[];
}

export const GET_LEADS = 'GET_LEADS';
export const DETELE_LEAD = 'DELETE_LEAD';
export const ADD_LEAD = 'ADD_LEAD';

interface GetLeadsAction {
  type: typeof GET_LEADS;
  payload: Lead[];
}

interface DeleteLeadAction {
  type: typeof DETELE_LEAD;
  payload: number;
}

interface AddLeadAction {
  type: typeof ADD_LEAD;
  payload: Lead;
}

export type LeadActionTypes = GetLeadsAction | DeleteLeadAction | AddLeadAction;
