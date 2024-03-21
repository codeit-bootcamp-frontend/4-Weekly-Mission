import axios from "axios";
import { SERVER_URL } from "./constant";


export async function requestAxiosData(path) {
  try {
    const response = await axios.get(`${SERVER_URL}/${path}`);
    return response.data;
  } catch (error) {
    console.error("서버 요청 중 문제가 발생했습니다 :", error);
  }
}

export function profileDataApi() {
  return requestAxiosData("sample/user");
}

export function ownerDataApi() {
  return requestAxiosData("sample/folder");
}

export function folderListDataApi() {
  return requestAxiosData("users/1/folders");
}

export function folderLinkDataApi(id) {
  const folderId = id === "all" ? null : +id;
  return folderId === null
    ? requestAxiosData("users/1/links")
    : requestAxiosData(`users/1/links?folderid=${folderId}`);
}

