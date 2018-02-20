import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router';
import {
  Navbar as BootstrapNavbar,
  NavItem,
  Nav
} from 'react-bootstrap';
// import CONSTANTS from '../../data/Constants';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from '../../views/About';
import RecipePage from '../../views/RecipePage';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css';

import logo from '../../assets/images/logo.png';

function Navbar() {
  return (
    <Router>
      <BootstrapNavbar>
        <BootstrapNavbar.Header>
          <BootstrapNavbar.Brand>
            <Link to="/home">
              <img src={logo} alt="" />
            </Link>
          </BootstrapNavbar.Brand>
        </BootstrapNavbar.Header>
        <BootstrapNavbar.Collapse>
          <Nav>
            <LinkContainer to="/recipe">
              <NavItem>Recipe</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
          <BootstrapNavbar.Text pullRight>
            dkonayuki
          </BootstrapNavbar.Text>
        </BootstrapNavbar.Collapse>
        <Route exact path="/" component={RecipePage} />
        <Route path="/about" component={About} />
        <Route path="/recipe" component={RecipePage} />
      </BootstrapNavbar>
    </Router>
  );
}

export default Navbar;
