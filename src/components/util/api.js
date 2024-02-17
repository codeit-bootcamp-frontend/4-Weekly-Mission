const errMessage = "데이터 불러오기 실패";

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
  return getApiResponse(sharedUserSampleApiURL, errMessage);
}

export function getSharedFolderSample() {
  return getApiResponse(sharedFolderSampleApiURL, errMessage);
}

export function getFolderList() {
  return getApiResponse(folderListApiURL, errMessage);
}

export function getFolderListData(id) {
  if (id) {
    return getApiResponse(folderListDataApiURL + id, errMessage);
  } else {
    return getApiResponse(folderListAllDataApiURL, errMessage);
  }
}
