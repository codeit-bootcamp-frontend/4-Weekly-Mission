const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getUser() {
  const response = await fetch(`${BASE_URL}/api/sample/user`);
  if (!response.ok) {
    throw new Error("유저 정보를 불러올 수 없습니다.");
  }
  const user = await response.json();
  return user;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/api/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러올 수 없습니다.");
  }
  const folder = await response.json();
  return folder;
}

export async function getFolderList() {
  const response = await fetch(`${BASE_URL}/api/users/1/folders`);
  if (!response.ok) {
    throw new Error("폴더 목록을 불러올 수 없습니다..");
  }
  const folderList = await response.json();
  return folderList;
}

export async function getAllLinks() {
  const response = await fetch(`${BASE_URL}/api/users/1/links`);
  if (!response.ok) {
    throw new Error("전체 폴더 링크를 불러오는데 실패했습니다");
  }
  const allLinks = await response.json();
  return allLinks;
}

export async function getFolderLink(id) {
  const response = await fetch(`${BASE_URL}/api/users/1/links?folderId=${id}`);
  if (!response.ok) {
    throw new Error("해당 폴더 링크를 불러오는데 실패했습니다");
  }
  const folderLink = await response.json();
  return folderLink;
}
