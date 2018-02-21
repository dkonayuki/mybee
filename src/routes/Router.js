import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../views/About';
import RecipePage from '../views/RecipePage';
import {
  user,
  visitor
} from '../utils/AuthorizationHelper';
import { connect } from 'react-redux';

function Router({ role }) {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={visitor(About, role)} />
        <Route path="/about" component={visitor(About, role)} />
        <Route path="/recipe" component={user(RecipePage, role)} />
      </Layout>
    </BrowserRouter>
  );
}

Router.propTypes = {
  role: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return { role: state.user.role };
}

export default connect(mapStateToProps)(Router);
