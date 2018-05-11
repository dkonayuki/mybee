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
import {
  getProfilePicture
} from '../../utils/FbsdkHelper';
import FbLoginButton from '../FbLoginButton';
import { showMessage } from '../../actions/alert';
import CONSTANTS from '../../data/Constants';

import './Navbar.css';

import logo from '../../assets/images/logo.png';
import profileImg from '../../assets/images/user_profile.png';

function Navbar({
  role,
  loggedIn,
  pictureUrl,
  onStoreUser,
  onShowMessage
}) {
  async function storeUserInfo({ userID: id, accessToken }) {
    // get profile picture
    const data = await getProfilePicture(id);
    if (data) {
      onStoreUser({
        id,
        accessToken,
        pictureUrl: data.url,
        role: 2,
        loggedIn: true
      });

      onShowMessage(CONSTANTS.ALERT.MESSAGE.WELCOME);
    }
  }

  function logoutUser() {
    // logout user
    onStoreUser({
      role: 1,
      loggedIn: false
    });
  }

  function handleLogin() {
    // perform login
    window.FB.login((response) => {
      if (response.status === 'connected') {
        // authorized
        storeUserInfo(response.authResponse);
      } else {
        // logout user if unauthorized
        logoutUser();
      }
    }, { scope: 'public_profile,email' });
  }

  function handleLogout() {
    window.FB.logout(logoutUser);
  }

  return (
    <BootstrapNavbar collapseOnSelect>
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
        <div className="navbar-right">
          {loggedIn ?
            <div className="user-menu hidden-xs">
              <Dropdown
                pullRight
                id="drop-down-user"
              >
                <Dropdown.Toggle>
                  <img
                    src={pictureUrl === '' ? profileImg : pictureUrl}
                    className="avatar-image avatar-image--icon"
                    alt="avatar"
                  />
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
            <FbLoginButton
              onLogin={handleLogin}
            />
          }
        </div>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

Navbar.propTypes = {
  role: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  pictureUrl: PropTypes.string,
  onStoreUser: PropTypes.func.isRequired,
  onShowMessage: PropTypes.func.isRequired
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
  {
    onStoreUser: storeUser,
    onShowMessage: showMessage
  },
  null,
  { pure: false } // fix an issue with react-router not using active class correctly
)(Navbar);
