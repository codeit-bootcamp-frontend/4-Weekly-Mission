const baseUrl = 'https://bootcamp-api.codeit.kr/api';

const request = async (url, method, body, headers = {}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const res = await fetch(baseUrl + url, options);
  const data = await res.json();

  if (res.ok) return data;
  else throw Error(data);
};

export const get = (url) => request(url, 'GET');
export const post = (url, body) => request(url, 'POST', body);
