const BASE_URL = "https://bootcamp-api.codeit.kr/";

export async function getProfile() {
  const query = "api/users/1";
  const response = await fetch(`${BASE_URL}${query}`);
  if (!response.ok) {
    throw new Error("사용자의 프로필을 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  return result;
}

export async function getShared() {
  const query = "api/sample/folder";
  const response = await fetch(`${BASE_URL}${query}`);
  if (!response.ok) {
    throw new Error("공유된 폴더를 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  return result;
}

export async function getFolders() {
  const query = "api/users/1/folders";
  const response = await fetch(`${BASE_URL}${query}`);
  if (!response.ok) {
    throw new Error("폴더의 목록을 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  return result;
}

export async function getLinksInFolder(folderId) {
  const TOTAL_LINKS_URL = `${BASE_URL}api/users/1/links`;
  const LINKS_URL = `${BASE_URL}api/users/1/links?folderId=${folderId}`;
  const FETCH_URL = folderId ? LINKS_URL : TOTAL_LINKS_URL;

  const response = await fetch(FETCH_URL);

  if (!response.ok) {
    throw new Error("폴더의 링크를 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  return result;
}
