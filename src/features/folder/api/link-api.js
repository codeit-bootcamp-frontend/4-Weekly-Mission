import { BASE_URL, USER_ID } from "api"

export const GET_LINK = `${BASE_URL}/users/${USER_ID}/links`

export const GET_LINK_BY_FOLDER_ID = (folderId) => `${BASE_URL}/users/${USER_ID}/links?folderId=${folderId}`

export const LINK_ERROR_MAP = Object.freeze({
  500: "서버 오류로 요청에 실패했습니다. 잠시후 다시 시도해주세요.",
  404: "요청한 링크를 찾을 수 없습니다.",
})
