import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="root-container">
      <div className="wrapper">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: null
};

export default Layout;
