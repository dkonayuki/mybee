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
