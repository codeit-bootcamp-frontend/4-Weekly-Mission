const SERVER = "https://bootcamp-api.codeit.kr";

export async function getUserInformation() {
  const response = await fetch(`${SERVER}/api/sample/user`);
  if (!response.ok) {
    throw new Error("유저 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function getFolderInformation() {
  const response = await fetch(`${SERVER}/api/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
