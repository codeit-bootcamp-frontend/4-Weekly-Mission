import { MASTER_EMAIL, MASTER_PASSWORD } from "../constant/user.js";
import { EMAIL_REGREX, PASSWORD_REGREX } from "../constant/regrex.js";

/**
 * 이메일 주소의 유효성을 검사하고 에러 메시지를 표시
 *
 * @param {string} email - 입력된 이메일 주소
 * @param {element} emailError - 이메일 에러 메시지를 표시할 html element
 * @param {'signin' | 'signup'} page - 회원가입 페이지인지 로그인 페이지인지 구분
 * @returns {boolean} - 이메일 주소의 유효성 검사 결과
 */
export function validateEmail(email, emailError, page) {
  if (email === "") {
    emailError.textContent = "이메일을 입력해 주세요.";
    return false;
  } else if (!EMAIL_REGREX.test(email)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    return false;
  } else if (email === MASTER_EMAIL && page === "signup") {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

/**
 * 비밀번호의 유효성을 검사하고 에러 메시지를 표시
 *
 * @param {string} password
 * @param {element} passwordError
 * @returns {boolean} - 비밀번호의 유효성 검사 결과
 */
export function validatePassword(password, passwordError) {
  if (password === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    return false;
  } else if (PASSWORD_REGREX.test(password)) {
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

/**
 * 비밀번호 확인의 유효성을 검사하고 에러 메시지를 표시
 *
 * @param {string} password
 * @param {string} passwordCheck
 * @param {element} passwordCheckError
 * @returns {boolean} - 비밀번호 확인의 유효성 검사 결과
 */
export function validatePasswordCheck(
  password,
  passwordCheck,
  passwordCheckError
) {
  if (passwordCheck === "") {
    passwordCheckError.textContent = "비밀번호를 확인해주세요.";
    return false;
  } else if (password !== passwordCheck) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
    return false;
  } else {
    passwordCheckError.textContent = "";
    return true;
  }
}
