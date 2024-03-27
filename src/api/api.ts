const URL = "https://bootcamp-api.codeit.kr";

interface FetchResponse {
  [key: string]: any;
}

const fetchToGetData = async (path: string): Promise<FetchResponse> => {
  const response = await fetch(path);
  const body = await response.json();
  return body;
};

//todo: path로 prop으로 받아서 경로 나눠주기
export const getData = async ({ path = "" }): Promise<FetchResponse> => {
  const detailPath = path && `${URL}/api/sample/${path}`;
  return fetchToGetData(detailPath);
};

export const getFolderListData = async (): Promise<FetchResponse> => {
  const detailPath = `${URL}/api/users/4/folders`;
  return fetchToGetData(detailPath);
};

export const getFolderLinksData = async ({
  folderId = "",
}): Promise<FetchResponse> => {
  const path = `${URL}/api/users/4/links`;
  const detailPath = folderId === "1" ? path : `${path}?folderId=${folderId}`;
  return fetchToGetData(detailPath);
};
