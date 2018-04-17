import CONSTANTS from '../data/Constants';

export async function post(url, body) {
  const response = await fetch(url, {
    body: JSON.stringify(body), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      partnerId: 'mybee-dev',
      accessToken: CONSTANTS.MYBEE_TOKEN
    },
    method: 'POST'
  });

  return response.json(); // parses response to JSON
}

export async function get(url) {
  const response = await fetch(url, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      partnerId: 'mybee-dev',
      accessToken: CONSTANTS.MYBEE_TOKEN
    }
  });

  return response.json(); // parses response to JSON
}
