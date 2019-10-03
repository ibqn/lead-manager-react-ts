import {
  GET_LEADS,
  DETELE_LEAD,
  LeadsState,
  LeadActionTypes,
  ADD_LEAD
} from './types';

const initialState: LeadsState = {
  leads: []
};

export function LeadReducer(
  state = initialState,
  action: LeadActionTypes
): LeadsState {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DETELE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: state.leads.concat(action.payload)
      };
    default:
      return state;
  }
}
