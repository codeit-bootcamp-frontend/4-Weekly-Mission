const errMessage = "프로필 영역의 데이터 불러오기 실패";

const sharedUserSampleApiURL = "https://bootcamp-api.codeit.kr/api/sample/user";
const sharedFolderSampleApiURL =
  "https://bootcamp-api.codeit.kr/api/sample/folder";

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
