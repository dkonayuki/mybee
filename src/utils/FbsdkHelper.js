import CONSTANTS from '../data/Constants';


export async function getLoginStatus() {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus((response) => {
      const { error } = response;
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

export async function getProfilePicture(id) {
  return new Promise((resolve, reject) => {
    window.FB.api(`/${id}/picture?redirect=false`, (response) => {
      const { data, error } = response;
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    }, {
      scope: 'public_profile'
    });
  });
}

export async function getUserIdsForApps(id) {
  const { access_token: appAccessToken } = await getAppAccessToken();
  return new Promise((resolve, reject) => {
    window.FB.api(`/${id}/ids_for_apps?access_token=${appAccessToken}`, (response) => {
      const { data, error } = response;
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

async function getAppAccessToken() {
  return new Promise((resolve) => {
    window.FB.api(`/oauth/access_token?client_id=${CONSTANTS.FB_APP_ID}`
      + `&client_secret=${CONSTANTS.FB_APP_SECRET}&grant_type=client_credentials`, response => resolve(response));
  });
}

export async function getUserInfo(id) {
  return new Promise((resolve) => {
    window.FB.api(`/${id}?fields=email,first_name,last_name,birthday`, response => resolve(response));
  });
}
