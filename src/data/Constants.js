const environments = {
  production: {
    URL: {
      DISCOVERY_API: 'https://api.mybee.life/web-agent/v1/recipes/discovery',
      RECIPE_INFO_API: 'https://api.mybee.life/web-recipe/v1/recipes',
      BASE_PATH: '/',
      RECIPE_SOURCE: 'https://www.mybee.life/reallife/recipes'
    },
    FB_APP_ID: process.env.REACT_APP_FB_APP_ID,
    FB_APP_SECRET: process.env.REACT_APP_FB_APP_SECRET,
    MYBEE_TOKEN: process.env.REACT_APP_MYBEE_TOKEN
  },
  staging: { // not in used
  },
  development: { // for localhost
    URL: {
      DISCOVERY_API: 'https://api.mybee.life/web-agent/v1/recipes/discovery',
      RECIPE_INFO_API: 'https://api.mybee.life/web-recipe/v1/recipes',
      BASE_PATH: '/',
      RECIPE_SOURCE: 'https://www.mybee.life/reallife/recipes'
    },
    FB_APP_ID: process.env.REACT_APP_FB_APP_ID,
    FB_APP_SECRET: process.env.REACT_APP_FB_APP_SECRET,
    MYBEE_TOKEN: process.env.REACT_APP_MYBEE_TOKEN
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
    CLEAR_ALERT: 'CLEAR_ALERT',
    ADD_MESSAGE: 'ADD_MESSAGE'
  },
  FB_API_VERSION: 'v2.12',
  ALERT: {
    TITLE: {
      ERROR: 'Error'
    },
    MESSAGE: {
      WELCOME: 'Welcome to MyBee!',
      ERROR: 'Error!'
    }
  },
  INGREDIENT_NUMBER: 4,
  CHAT: {
    MESSAGE: {
      TYPE: {
        USER: 0,
        MYBEE: 1
      }
    },
    PAYLOAD: {
      START: 'GET_STARTED_PAYLOAD'
    }
  }
});

export default CONSTANTS;
