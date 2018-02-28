const environments = {
  production: {
    URL: {
      RECIPE_API: 'http://api.mybee.life:2701/reallife-agent/v1/recipes',
      BASE_PATH: '/'
    },
    FB_APP_ID: '1260035304059338'
  },
  staging: { // not in used
  },
  development: { // for localhost
    URL: {
      RECIPE_API: 'http://api.mybee.life:2701/reallife-agent/v1/recipes',
      BASE_PATH: '/'
    },
    FB_APP_ID: '608323486178700'
  },
  test: { // for testing with jest, don't forget to mock stuff
    URL: {
    }
  }
};

// npm run will always run with NODE_ENV assigned as 'development'
const envConsts = environments[process.env.NODE_ENV];

const CONSTANTS = Object.assign({}, envConsts, {
  ACTION_TYPES: {
    STORE_USER: 'STORE_USER',
    SHOW_ERROR: 'SHOW_ERROR',
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    CLEAR_ALERT: 'CLEAR_ALERT'
  },
  FB_API_VERSION: 'v2.12',
  ALERT: {
    TITLE: {
      ERROR: 'Error'
    }
  }
});

export default CONSTANTS;
