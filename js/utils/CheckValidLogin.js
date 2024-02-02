// 유효한 email, password 값
import { validEmail, validPassword } from "./constants.js";

/** 로그인 정보 맞으면 0, 비밀번호만 틀리면 -1, 둘 다 틀리면 0 반환 */
const checkValidLogin = function (email, password) {
  if (email === validEmail && password === validPassword) {
    return 1;
  } else if (email === validEmail && password !== validPassword) {
    return -1;
  } else {
    return 0;
  }
};

export { checkValidLogin };
