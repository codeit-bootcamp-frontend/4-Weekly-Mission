const API_URL = "https://bootcamp-api.codeit.kr/api";

interface ApiProps {
  userId: number;
  folderId: number;
}

export async function GetUserFolder({ userId  }: ApiProps) {
  const response = await fetch(`${API_URL}/users/${userId}/folders`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function GetLinks({ userId, folderId }: ApiProps) {
  let query = `?folderId=${folderId}`;
  if (!folderId) {
    query = "";
  }
  const response = await fetch(`${API_URL}/users/${userId}/links${query}`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
