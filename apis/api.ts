export async function getUser() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  const body = await response.json();
  return body;
}

export async function getLink(folderId: string | null) {
  if (!folderId) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/links");
    const body = await response.json();
    return body;
  }
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`);
  const body = await response.json();
  return body;
}

export async function getFolderList() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/folders");
  const body = await response.json();
  return body;
}

export async function getShared() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const body = await response.json();
  return body;
}
