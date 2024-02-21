const apiHandler = async (url, method, body) => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res;
};

const FETCH_API = {
  get: async (url) => {
    return await apiHandler(url, 'GET');
  },
  post: async (url, body) => {
    return await apiHandler(url, 'POST', body);
  },
  put: async (url, body) => {
    return await apiHandler(url, 'PUT', body);
  },
  delete: async (url) => {
    return await apiHandler(url, 'DELETE');
  },
};

export default FETCH_API;
