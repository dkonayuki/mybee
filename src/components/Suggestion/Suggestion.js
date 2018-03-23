import React from 'react';
import PropTypes from 'prop-types';

import './Suggestion.css';

function Suggestion({
  text,
  onClick
}) {
  return (
    <div
      className="suggestion"
      onClick={onClick}
    >
      {text}
    </div>
  );
}

Suggestion.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Suggestion.defaultProps = {
  text: '',
  onClick: null
};

export default Suggestion;
