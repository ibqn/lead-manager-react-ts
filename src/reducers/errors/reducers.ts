import { GET_ERRORS, ErrorState, ErrorActionTypes } from './types';

const initialState: ErrorState = {
  msg: {},
  status: null
};

export function ErrorReducer(state = initialState, action: ErrorActionTypes) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
}
