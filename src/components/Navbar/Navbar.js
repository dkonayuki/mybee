import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  NavItem,
  Nav
} from 'react-bootstrap';
// import CONSTANTS from '../../data/Constants';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css';

import logo from '../../assets/images/logo.png';

function Navbar() {
  return (
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
    </BootstrapNavbar>
  );
}

export default Navbar;
