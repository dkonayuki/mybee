import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  NavItem,
  Nav,
  Dropdown,
  MenuItem
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

  function handleLogout() {
    window.FB.logout(() => checkLoginState(onStoreUser));
  }

  return (
    <BootstrapNavbar>
      <BootstrapNavbar.Header>
        <BootstrapNavbar.Brand>
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
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
          <div className="user-menu hidden-xs">
            <Dropdown
              pullRight
              id="drop-down-user"
            >
              <Dropdown.Toggle>
                <img src={pictureUrl} className="avatar-image avatar-image--icon" alt="avatar" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem eventKey="1">
                  <i className="fas fa-cog" />
                  Settings
                </MenuItem>
                <MenuItem divider />
                <MenuItem
                  eventKey="2"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt" />
                  Logout
                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
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
  pictureUrl: PropTypes.string,
  onStoreUser: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  pictureUrl: ''
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
