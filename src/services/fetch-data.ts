const apiHandler = async (url: string, method: string, body?: any): Promise<Response> => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return res;
};

const FETCH_API = {
  get: async (url: string) => await apiHandler(url, 'GET'),
  post: async (url: string, body: any) => await apiHandler(url, 'POST', body),
  put: async (url: string, body: any) => await apiHandler(url, 'PUT', body),
  delete: async (url: string) => await apiHandler(url, 'DELETE')
};

export default FETCH_API;
