import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../data/Constants';

import './Message.css';

function Message({
  text,
  type
}) {
  return (
    <div className={`message ${type === CONSTANTS.CHAT.MESSAGE.TYPE.USER ? 'message--user' : 'message--mybee'}`}>
      <span className="message__text">
        {text}
      </span>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired
};

export default Message;
