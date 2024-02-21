const SERVER = "https://bootcamp-api.codeit.kr";

export async function getUser() {
  const response = await fetch(`${SERVER}/api/sample/user`);
  if (!response.ok) {
    throw new Error("유저 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getSharedFolder() {
  const response = await fetch(`${SERVER}/api/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getMyFolderList(userId) {
  const response = await fetch(`${SERVER}/api/users/${userId}/folders`);
  if (!response.ok) {
    throw new Error("폴더 목록을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getMyFolder(userId, folderId) {
  const query = folderId ? `?folderId=${folderId}` : "";
  const response = await fetch(`${SERVER}/api/users/${userId}/links${query}`);
  if (!response.ok) {
    throw new Error("폴더 내용을 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
