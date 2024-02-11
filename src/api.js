export async function getSharedUserSample() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  if (!response.ok) {
    return new Error("프로필 영역의 데이터 불러오기 실패");
  }
  const body = await response.json();

  return body;
}

export async function getSharedFolderSample() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (!response.ok) {
    return new Error("프로필 영역의 데이터 불러오기 실패");
  }
  const body = await response.json();

  return body;
}
