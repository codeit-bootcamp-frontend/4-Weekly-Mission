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

//일치하는 유저 데이터 찾아서 반환
function getValidUserInfo({ emailInputValue, passwordInputValue }) {
  if (VALID_USER.email !== emailInputValue) {
    return null;
  }

  if (VALID_USER.password !== passwordInputValue) {
    return null;
  }

  return VALID_USER;
}

//로그인 유효성 검사
function isValidUser(emailInputValue, passwordInputValue) {
  return getValidUserInfo({ emailInputValue, passwordInputValue });
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

//로그인 성공/실패
function checkSignIn() {
  if (!isValidUser(emailInput.value, passwordInput.value)) {
    showError(emailInput, emailErrorMessageElement, "이메일을 확인해 주세요.");
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
    return;
  }

  return (location.href = "../folder/index.html");
}

//버튼 클릭 / 인풋 focus 상태에서 엔터 키로 checkLogin 호출
function onSubmit(e) {
  e.preventDefault();
  checkSignIn();
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
formElement.addEventListener("submit", onSubmit);
eyeBtn.addEventListener("click", togglePassword);
