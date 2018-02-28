import React from 'react';
import PropTypes from 'prop-types';
import withSpinner from '../withSpinner';

import './FbLoginButton.css';

function FbLoginButton({
  onLogin,
  showSpinner
}) {
  function handleLoginClick() {
    showSpinner();
    onLogin();
  }

  return (
    <a
      onClick={handleLoginClick}
      className="fb-login-btn"
    >
      <i className="fab fa-facebook" />
    </a>
  );
}

FbLoginButton.propTypes = {
  onLogin: PropTypes.func,
  showSpinner: PropTypes.func.isRequired
};

FbLoginButton.defaultProps = {
  onLogin: null
};

export default withSpinner(FbLoginButton);
