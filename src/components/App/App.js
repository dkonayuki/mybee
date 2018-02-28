import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/styles/bootstrap-overrides.css';
import '../../assets/styles/common.css';

import React from 'react';
import PropTypes from 'prop-types';
import Router from '../../routes/Router';
import { connect } from 'react-redux';
import { storeUser } from '../../actions/user';
import {
  getLoginStatus,
  getProfilePicture
} from '../../utils/FbsdkHelper';
import CONSTANTS from '../../data/Constants';

import 'airbnb-js-shims'; // for IE to support es6 and later

function loadSdkAsynchronously() {
  ((d, s, id) => {
    let js = d.getElementsByTagName(s)[0];
    const fjs = js;
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setFbAsyncInit = this.setFbAsyncInit.bind(this);
  }

  componentWillMount() {
    this.setFbAsyncInit();
    loadSdkAsynchronously();
  }

  setFbAsyncInit() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: CONSTANTS.FB_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: CONSTANTS.FB_API_VERSION,
        cookie: true // use cookie to persist login state
      });

      this.checkLoginState();
    };
  }

  async checkLoginState() {
    const response = await getLoginStatus();
    if (response.authResponse) {
      // authorized
      this.storeUserInfo(response.authResponse);
    }
  }

  async storeUserInfo({ userID: id, accessToken }) {
    // get profile picture
    const data = await getProfilePicture(id);
    if (data) {
      this.props.onStoreUser({
        id,
        accessToken,
        pictureUrl: data.url,
        role: 2,
        loggedIn: true
      });
    }
  }

  render() {
    return <Router />;
  }
}

App.propTypes = {
  onStoreUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { onStoreUser: storeUser } // mapDispatchToProps
)(App);
