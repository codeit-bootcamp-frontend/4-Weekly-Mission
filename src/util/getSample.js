const BASE_URL = "https://bootcamp-api.codeit.kr/";
const END_POINT = {
  folder: "api/sample/folder",
  user: "api/sample/user",
};

async function getSample(type) {
  try {
    const res = await fetch(`${BASE_URL}${END_POINT[type]}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("정보를 불러오는 데 실패했습니다. (err)");
    throw err;
  }
}

export default getSample;
