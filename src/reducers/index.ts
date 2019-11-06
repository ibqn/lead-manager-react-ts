import { combineReducers } from 'redux';
import { LeadReducer } from './leads/reducers';
import { ErrorReducer } from './errors/reducers';

export default combineReducers({
  leads: LeadReducer,
  errors: ErrorReducer
});
