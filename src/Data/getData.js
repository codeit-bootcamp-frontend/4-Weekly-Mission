const BASE_URL = "https://bootcamp-api.codeit.kr/api";
const URL_TYPE = {
  user: "/sample/user",
  folder: "/sample/folder",
  folders: "/users/1/folders",
  links: "/users/1/links",
};

export async function getData(type, id = "") {
  try {
    const response = await fetch(
      `${BASE_URL}${URL_TYPE[type]}${id ? "?folderId=" + id : ""}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
