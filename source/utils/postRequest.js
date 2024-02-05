const postFetcher = (route, body) => {
  return fetch(`https://bootcamp-api.codeit.kr/${route}`, {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({ body }),
  });
};

export default postFetcher;
