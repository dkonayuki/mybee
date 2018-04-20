import user from './user';
import alert from './alert';
import chat from './chat';
import video from './video';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  user,
  alert,
  chat,
  video
});

export default reducers;
