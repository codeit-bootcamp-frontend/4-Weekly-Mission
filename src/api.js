const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}/api/sample/user`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.log("유저 정보 불러오기 실패");
  }
}

export async function getFolder() {
  try {
    const response = await fetch(`${BASE_URL}/api/sample/folder`);
    const folder = await response.json();
    return folder;
  } catch (error) {
    console.log("폴더 정보 불러오기 실패");
  }
}
