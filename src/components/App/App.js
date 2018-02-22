import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/styles/bootstrap-overrides.css';
import '../../assets/styles/common.css';

import React from 'react';
import PropTypes from 'prop-types';
import Router from '../../routes/Router';
import { connect } from 'react-redux';
import { storeUser } from '../../actions/user';
import { checkLoginState } from '../../utils/FbsdkHelper';
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
    this.state = {
      isFbSdkLoaded: false
    };

    this.setFbAsyncInit = this.setFbAsyncInit.bind(this);
  }

  componentWillMount() {
    this.setFbAsyncInit();
    loadSdkAsynchronously();
  }

  componentDidUpdate() {
    if (this.state.isFbSdkLoaded && !this.props.loggedIn) {
      // check login and store user information
      checkLoginState(this.props.storeUser);
    }
  }

  setFbAsyncInit() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: CONSTANTS.FB_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: CONSTANTS.FB_API_VERSION
      });

      this.setState({
        isFbSdkLoaded: true
      });
    };
  }

  render() {
    return <Router />;
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  storeUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { loggedIn } = state.user;
  return { loggedIn };
}

export default connect(
  mapStateToProps,
  { storeUser } // mapDispatchToProps
)(App);
