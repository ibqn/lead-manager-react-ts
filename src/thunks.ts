import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getLeads } from './reducers/leads/actions';
import { AppState } from './store';
import axios from 'axios';
import { LeadActionTypes, Lead } from './reducers/leads/types';

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
    console.log(`error {error}`);
  }
};
