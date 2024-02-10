const BASE_URL = "https://bootcamp-api.codeit.kr/";
const END_POINT = {
  folder: "api/sample/folder",
  user: "api/sample/user",
};

async function getUser() {
  try {
    const res = await fetch(`${BASE_URL}${END_POINT.user}`);
    const user = await res.json();
    return user;
  } catch (err) {
    console.log("유저 정보를 불러오는 데 실패했습니다. (err)");
    throw err;
  }
}

export default getUser;
