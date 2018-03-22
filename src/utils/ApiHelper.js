import { post } from './HttpRequestHelper';
import CONSTANTS from '../data/Constants';

export async function discover(userId, message = '') {
  return post(`${CONSTANTS.URL.DISCOVERY_API}?accessToken=${CONSTANTS.MYBEE_TOKEN}`, {
    userId,
    message
  });
}

export default discover;
