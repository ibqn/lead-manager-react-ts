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

interface GetLeadsAction {
  type: typeof GET_LEADS;
  payload: Lead[];
}

export type LeadActionTypes = GetLeadsAction;
