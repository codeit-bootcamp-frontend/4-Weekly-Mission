const BASE_URL = "https://bootcamp-api.codeit.kr/api";
const URL_TYPE = {
  user: "/sample/user",
  folder: "/sample/folder",
};

export async function getData(type) {
  try {
    const response = await fetch(`${BASE_URL}${URL_TYPE[type]}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}