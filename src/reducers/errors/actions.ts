import { GET_ERRORS, ErrorActionTypes, ErrorMessage } from './types';

export function getErrors(error: {
  msg: ErrorMessage;
  status?: number;
}): ErrorActionTypes {
  return {
    type: GET_ERRORS,
    payload: error
  };
}
