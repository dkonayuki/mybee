export function checkLoginState(callback) {
  window.FB.getLoginStatus((response) => {
    if (response.authResponse) {
      const {
        userID: id,
        accessToken
      } = response.authResponse;

      // get profile picture
      window.FB.api(`/${id}/picture`, ({ data }) => {
        if (callback !== undefined) {
          callback({
            id,
            accessToken,
            pictureUrl: data.url,
            role: 2,
            loggedIn: true
          });
        }
      }, {
        scope: 'public_profile'
      });
    }
  });
}

export default checkLoginState;
