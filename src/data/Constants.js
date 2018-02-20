const environments = {
  production: {
    URL: {
      RECIPE_API: 'http://api.mybee.life:2701/reallife-agent/v1/recipes',
      BASE_PATH: '/'
    }
  },
  staging: { // not in used
  },
  development: { // for localhost
    URL: {
      RECIPE_API: 'http://api.mybee.life:2701/reallife-agent/v1/recipes',
      BASE_PATH: '/'
    }
  },
  test: { // for testing with jest, don't forget to mock stuff
    URL: {
    }
  }
};

// npm run will always run with NODE_ENV assigned as 'development'
const envConsts = environments[process.env.NODE_ENV];

const CONSTANTS = Object.assign({}, envConsts, {

});

export default CONSTANTS;