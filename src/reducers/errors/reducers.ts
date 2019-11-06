import { GET_ERRORS, ErrorState, ErrorActionTypes } from './types';

const initialState: ErrorState = {
  msg: {},
  status: undefined
};

export function ErrorReducer(
  state = initialState,
  action: ErrorActionTypes
): ErrorState {
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
