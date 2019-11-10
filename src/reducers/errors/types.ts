export interface ErrorMessage {
  name?: string;
  email?: string;
  message?: string;
  // Additional properties
  [propName: string]: any;
}

export interface ErrorState {
  msg: ErrorMessage;
  status: undefined | number;
  timestamp: undefined | number;
}

export const GET_ERRORS = 'GET_ERRORS';

interface GetErrorsAction {
  type: typeof GET_ERRORS;
  payload: { msg: ErrorMessage; status?: number; timestamp?: number };
}

export type ErrorActionTypes = GetErrorsAction;
