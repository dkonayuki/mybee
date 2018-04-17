import React from 'react';
import PropTypes from 'prop-types';

import './Directive.css';

function Directive({
  text,
  onClick
}) {
  return (
    <div
      className="directive"
      onClick={onClick}
    >
      {text}
    </div>
  );
}

Directive.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Directive.defaultProps = {
  text: '',
  onClick: null
};

export default Directive;
