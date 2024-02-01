/* Service Logic */

import { isTextEmpty } from "../scripts/utils.js";

import {
  emailInput,
  passwordInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  eyeBtn,
  formElement,
  showError,
  hideError,
  showPassword,
  hidePassword,
} from "../scripts/ui-sign.js";

import { VALID_USER, isValidEmailFormat } from "../scripts/utils-sign.js";

/********************
 * UTILITY FUNCTION
 ********************/

//이메일이 일치하는 유저 데이터 반환
function getUserByEmail(emailInputValue) {
  if (VALID_USER.email !== emailInputValue) {
    return null;
  }

  return VALID_USER;
}

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function validateEmail() {
  const email = emailInput.value;

  if (isTextEmpty(email)) {
    return showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
  }

  if (!isValidEmailFormat(email)) {
    return showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
  }

  return hideError(emailInput, emailErrorMessageElement);
}

//비밀번호 에러 검사
function validatePassword() {
  const password = passwordInput.value;

  if (isTextEmpty(password)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
  }

  return hideError(passwordInput, passwordErrorMessageElement);
}

//버튼 클릭 / 인풋 focus 상태에서 엔터 키로 checkLogin 호출
function handleLogin(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  //email과 일치하는 유저 저장 / 없으면 null
  const user = getUserByEmail(email);

  //null일 경우 데이터베이스에 user가 존재하지 않으므로 로그인 실패
  if (user === null) {
    showError(emailInput, emailErrorMessageElement, "이메일을 확인해 주세요.");
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
    return;
  }

  //데이터베이스에 user가 존재하지만 password가 동일하지 않은 경우 로그인 실패
  if (user.password !== password) {
    showError(emailInput, emailErrorMessageElement, "이메일을 확인해 주세요.");
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
    return;
  }

  //로그인 성공
  return (location.href = "../folder/index.html");
}

//eyeBtn 비밀번호 토글
function togglePassword() {
  if (passwordInput.type === "password") {
    return showPassword();
  }

  return hidePassword();
}

/********************
 * EVENT HANDLER
 ********************/

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
formElement.addEventListener("submit", handleLogin);
eyeBtn.addEventListener("click", togglePassword);
