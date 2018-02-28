import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';
import Page from '../Page';

import './Layout.css';

function Layout({
  children
}) {
  return (
    <div className="root-container">
      <Helmet>
        <title>Mybee</title>
      </Helmet>
      <div className="wrapper">
        <Navbar />
        <Page>
          {children}
        </Page>
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
