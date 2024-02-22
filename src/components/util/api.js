const ERROR_MSG = "데이터 불러오기 실패";

const sharedUserSampleApiURL = "https://bootcamp-api.codeit.kr/api/users/1";
const sharedFolderSampleApiURL =
  "https://bootcamp-api.codeit.kr/api/sample/folder";
const folderListApiURL = "https://bootcamp-api.codeit.kr/api/users/1/folders";
const folderListAllDataApiURL =
  "https://bootcamp-api.codeit.kr/api/users/1/links";
const folderListDataApiURL =
  "https://bootcamp-api.codeit.kr/api/users/1/links?folderId=";

async function getApiResponse(url, errorMessage) {
  const response = await fetch(url);
  if (!response.ok) {
    return new Error(errorMessage);
  }
  const body = await response.json();

  return body;
}

export function getSharedUserSample() {
  return getApiResponse(sharedUserSampleApiURL, ERROR_MSG);
}

export function getSharedFolderSample() {
  return getApiResponse(sharedFolderSampleApiURL, ERROR_MSG);
}

export function getFolderList() {
  return getApiResponse(folderListApiURL, ERROR_MSG);
}

export function getFolderListData(id) {
  const requestUrl = id ? folderListDataApiURL + id : folderListAllDataApiURL;
  return getApiResponse(requestUrl, ERROR_MSG);
}
