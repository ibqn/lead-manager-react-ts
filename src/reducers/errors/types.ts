export interface ErrorMessage {
  name?: string;
  email?: string;
  message?: string;
  // Additional properties
  [propName: string]: any;
}

export interface ErrorState {
  mgs: ErrorMessage;
  status: null | number;
}

export const GET_ERRORS = 'GET_ERRORS';

interface GetErrorsAction {
  type: typeof GET_ERRORS;
  payload: { msg: ErrorMessage; status?: number };
}

export type ErrorActionTypes = GetErrorsAction;