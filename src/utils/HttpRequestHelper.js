export async function post(url, body) {
  const response = await fetch(url, {
    body: JSON.stringify(body), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  return response.json(); // parses response to JSON
}

export default post;
