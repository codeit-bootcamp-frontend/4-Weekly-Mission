// 유효한 email, password 값
import { validEmail, validPassword } from "./constants.js";
import {
  SIGNIN_SUCCESS_VALUE,
  PASSWORD_INVALID_VALUE,
  NOT,
} from "./constants.js";

/** 로그인 정보 맞으면 0, 비밀번호만 틀리면 -1, 둘 다 틀리면 0 반환 */
const checkValidLogin = function (email, password) {
  if (email === validEmail && password === validPassword) {
    return SIGNIN_SUCCESS_VALUE;
  } else if (email === validEmail && password !== validPassword) {
    return PASSWORD_INVALID_VALUE;
  } else {
    return NOT;
  }
};

export { checkValidLogin };
