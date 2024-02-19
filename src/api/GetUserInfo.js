export async function GetUserInfo() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  if (!response.ok) {
    throw new Error("사용자 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function GetUserInfoTest() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");
  if (!response.ok) {
    throw new Error("사용자 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export default GetUserInfoTest;
