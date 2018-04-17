import CONSTANTS from '../data/Constants';

export function addMessage(message, messageType, timestamp) {
  return {
    type: CONSTANTS.ACTION_TYPES.ADD_MESSAGE,
    message,
    messageType,
    timestamp
  };
}

export default addMessage;
