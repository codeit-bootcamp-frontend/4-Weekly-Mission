import { BASE_URL } from "api"

export const GET_SHARE_API = `${BASE_URL}/sample/folder`

export const SHARE_ERROR_MAP = Object.freeze({
  500: "서버 오류로 요청에 실패했습니다. 잠시후 다시 시도해주세요.",
  404: "요청한 폴더를 찾을 수 없습니다.",
})
