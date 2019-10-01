import { combineReducers } from 'redux';
import { LeadReducer } from './leads/reducers';

export default combineReducers({
  leads: LeadReducer
});
