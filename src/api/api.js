const url = "https://bootcamp-api.codeit.kr";

//todo: path로 prop으로 받아서 경로 나눠주기
export const getData = async ({ path = "" }) => {
  const detailPath = path && `api/sample/${path}`;
  const response = await fetch(`${url}/${detailPath}`);
  const body = await response.json();
  return body;
};

export const getFolderListData = async () => {
  const detailPath = `${url}/api/users/1/folders`;
  const response = await fetch(detailPath);
  const body = await response.json();
  return body;
};

export const getWholeFolderListData = async () => {
  const detailPath = `${url}/api/users/1/links`;
  const response = await fetch(detailPath);
  const body = await response.json();
  return body;
};
