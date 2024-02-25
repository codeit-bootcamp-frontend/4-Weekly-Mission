const DEFAULT_PATH = 'https://bootcamp-api.codeit.kr/api';

export const getApi = async (apiPath) => {
  const apiUrl = DEFAULT_PATH + apiPath;
  const respons = await fetch(apiUrl);
  const body = await respons.json();
  return body;
};
