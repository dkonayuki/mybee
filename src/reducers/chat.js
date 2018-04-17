import CONSTANTS from '../data/Constants';

const initialState = [];

function chat(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.ACTION_TYPES.ADD_MESSAGE:
      return [...state, {
        text: action.message,
        type: action.messageType,
        timestamp: action.timestamp || Date.now()
      }];
    default:
      return state;
  }
}

export default chat;
