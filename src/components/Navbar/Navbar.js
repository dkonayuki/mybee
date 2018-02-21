import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  NavItem,
  Nav
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { storeUser } from '../../actions/user';
import { checkLoginState } from '../../utils/FbsdkHelper';

import './Navbar.css';

import logo from '../../assets/images/logo.png';

function Navbar({
  role,
  loggedIn,
  pictureUrl,
  onStoreUser
}) {
  function handleLogin() {
    // perform login
    window.FB.login(() => checkLoginState(onStoreUser));
  }

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
          <LinkContainer
            to="/recipe"
            disabled={role === 1}
          >
            <NavItem>Recipe</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
        {loggedIn ?
          <div className="avatar">
            <img src={pictureUrl} className="avatar-image avatar-image--icon" alt="avatar" />
          </div>
        :
          <a
            onClick={handleLogin}
            className="fb-login-btn"
          >
            <i className="fab fa-facebook" />
          </a>
        }
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

Navbar.propTypes = {
  role: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  onStoreUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { role, loggedIn, pictureUrl } = state.user;
  return { role, loggedIn, pictureUrl };
}

export default connect(
  mapStateToProps,
  { onStoreUser: storeUser },
  null,
  { pure: false } // fix an issue with react-router not using active class correctly
)(Navbar);
