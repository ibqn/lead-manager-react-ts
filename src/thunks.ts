import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getLeads, deleteLead, addLead } from './reducers/leads/actions';
import { getErrors } from './reducers/errors/actions';
import { AppState } from './store';
import axios, { AxiosError } from 'axios';
import { Lead, LeadShallow } from './reducers/leads/types';

export const thunkGetLeads = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async dispatch => {
  try {
    const asyncResp = await axios.get('/api/leads');
    const data = asyncResp.data as Lead[];
    dispatch(getLeads(data));
  } catch (error) {
    const errors = {
      msg: error.response.data,
      status: error.response.status,
      timestamp: Date.now()
    };
    dispatch(getErrors(errors));
  }
};

export const thunkDeleteLead = (
  id: number
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    await axios.delete(`/api/leads/${id}/`);
    dispatch(deleteLead(id));
  } catch (error) {
    console.log(`error ${error}`);
  }
};

export const thunkAddLead = (
  lead: LeadShallow
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    const asyncResp = await axios.post('/api/leads/', lead);
    const data = asyncResp.data as Lead;
    dispatch(addLead(data));
  } catch (error) {
    // const error: AxiosError = err;
    // waiting for ?. operator support
    const errors = {
      msg: error.response.data,
      status: error.response.status,
      timestamp: Date.now()
    };
    dispatch(getErrors(errors));
  }
};
