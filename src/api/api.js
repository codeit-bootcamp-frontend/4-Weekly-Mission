const URL = "https://bootcamp-api.codeit.kr";

const fetchToGetData = async (path) => {
  const response = await fetch(path);
  const body = await response.json();
  return body;
};

//todo: path로 prop으로 받아서 경로 나눠주기
export const getData = async ({ path = "" }) => {
  const detailPath = path && `${URL}/api/sample/${path}`;
  return fetchToGetData(detailPath);
};

export const getFolderListData = async () => {
  const detailPath = `${URL}/api/users/4/folders`;
  return fetchToGetData(detailPath);
};

export const getFolderLinksData = async ({ folderId = "" }) => {
  const path = `${URL}/api/users/4/links`;
  const detailPath = folderId === "1" ? path : `${path}?folderId=${folderId}`;
  return fetchToGetData(detailPath);
};
