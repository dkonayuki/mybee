import PropTypes from 'prop-types';
import React from 'react';
import Alert from '../Alert';

import './Page.css';

function Page({ showAlert, alert, onAlertDismiss, children }) {
  return (
    <div className="page">
      <div className={`page__alert ${alert.className || ''}`}>
        {showAlert &&
        <Alert
          title={alert.title} message={alert.message}
          style={alert.style} onDismiss={onAlertDismiss}
        />}
      </div>
      <div className="page__content">
        {children}
      </div>
    </div>
  );
}

Page.propTypes = {
  showAlert: PropTypes.bool,
  alert: PropTypes.object,
  children: PropTypes.node,
  onAlertDismiss: PropTypes.func
};

Page.defaultProps = {
  showAlert: false,
  children: '',
  alert: {
    title: '',
    message: '',
    style: '',
    className: ''
  },
  onAlertDismiss: () => null
};

export default Page;
