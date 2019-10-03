export interface Lead {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface LeadsState {
  leads: Lead[];
}

export const GET_LEADS = 'GET_LEADS';
export const DETELE_LEAD = 'DELETE_LEAD';

interface GetLeadsAction {
  type: typeof GET_LEADS;
  payload: Lead[];
}

interface DeleteLeadAction {
  type: typeof DETELE_LEAD;
  payload: number;
}

export type LeadActionTypes = GetLeadsAction | DeleteLeadAction;
