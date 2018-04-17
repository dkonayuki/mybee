import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from '../Message';
import MyBeePropTypes from '../../data/MyBeePropTypes';
import { Scrollbars } from 'react-custom-scrollbars';

import './ChatBox.css';

function ChatBox({
  messages
}) {
  const messageList = messages.map(message => (
    <Message
      key={`${message.text}_${message.timestamp}`}
      {...message}
    />
  )).reverse();
  if (messageList.length === 0) return null;

  return (
    <Scrollbars
      className="chatbox"
      style={{ width: 500 }}
      autoHeight
      autoHeightMin={50}
      autoHeightMax={200}
    >
      {messageList}
    </Scrollbars>
  );
}

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(MyBeePropTypes.message)
};

ChatBox.defaultProps = {
  messages: []
};

function mapStateToProps(state) {
  return {
    messages: state.chat
  };
}

export default connect(
  mapStateToProps,
  null // mapDispatchToProps
)(ChatBox);
