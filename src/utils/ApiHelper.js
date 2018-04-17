import {
  get,
  post
} from './HttpRequestHelper';
import CONSTANTS from '../data/Constants';

export async function chat(userId, message = '') {
  return post(CONSTANTS.URL.DISCOVERY_API, {
    userId,
    message
  });
}

export async function getRecipeInfo(id) {
  return get(`${CONSTANTS.URL.RECIPE_INFO_API}?recipeId=${id}&ver=origin&fields=recipeSummary,recipe`);
}

export async function quickChat(userId, payload, payloadText = '') {
  return post(CONSTANTS.URL.DISCOVERY_API, {
    userId,
    userAction: {
      payload,
      payloadText
    }
  });
}
