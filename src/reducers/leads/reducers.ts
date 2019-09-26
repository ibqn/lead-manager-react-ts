import { GET_LEADS, LeadsState, LeadActionTypes } from './types';

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
    default:
      return state;
  }
}
