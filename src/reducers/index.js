import user from './user';
import alert from './alert';
import chat from './chat';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  user,
  alert,
  chat
});

export default reducers;
