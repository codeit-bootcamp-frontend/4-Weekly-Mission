const BASE_URL = "https://bootcamp-api.codeit.kr";

export default async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}/api/sample/user`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.log("유저 정보 불러오기 실패");
  }
}
