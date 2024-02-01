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

import {
  passwordCheckInput,
  passwordCheckErrorMessageElement,
  eyeBtnCheck,
  showPasswordCheck,
  hidePasswordCheck,
} from "./ui.js";

/********************
 * UTILITY FUNCTION
 ********************/

//회원가입 이메일 중복 검사
function isEmailMatching(emailInputValue) {
  return emailInputValue === VALID_USER.email;
}

//회원가입 비밀번호 양식 유효성 검사
function isValidPasswordFormat(passwordInputValue) {
  //8자 미만인 경우
  if (passwordInputValue.length < 8) {
    return false;
  }

  //숫자가 없는 경우
  if (!/\d/.test(passwordInputValue)) {
    return false;
  }

  //영문이 없는 경우
  if (!/[a-zA-Z]/.test(passwordInputValue)) {
    return false;
  }
  return true;
}

//회원가입 유효성 검사
function isValidSignUp(emailInputValue, passwordInputValue, passwordCheckInputValue) {
  if (!isValidEmailFormat(emailInputValue)) {
    console.log(`case 1`);
    return false;
  }

  if (isEmailMatching(emailInputValue)) {
    console.log(`case 2`);
    return false;
  }

  if (!isValidPasswordFormat(passwordInputValue)) {
    console.log(`case 3`);
    return false;
  }

  if (passwordInputValue !== passwordCheckInputValue) {
    console.log(`case 4`);
    return false;
  }

  return true;
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

  if (isEmailMatching(email)) {
    return showError(emailInput, emailErrorMessageElement, "이미 사용 중인 이메일입니다.");
  }

  return hideError(emailInput, emailErrorMessageElement);
}

//비밀번호 에러 검사
function validatePassword() {
  const password = passwordInput.value;

  if (isTextEmpty(password)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
  }

  if (!isValidPasswordFormat(password)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }

  return hideError(passwordInput, passwordErrorMessageElement);
}

//비밀번호 확인 에러 검사
function validatePasswordCheck() {
  const password = passwordInput.value;
  const passwordCheck = passwordCheckInput.value;

  if (isTextEmpty(passwordCheck)) {
    return showError(passwordCheckInput, passwordCheckErrorMessageElement, "비밀번호를 입력해 주세요.");
  }

  if (!isPasswordMatching(password, passwordCheck)) {
    return showError(passwordCheckInput, passwordCheckErrorMessageElement, "비밀번호가 일치하지 않아요.");
  }

  return hideError(passwordCheckInput, passwordCheckErrorMessageElement);
}

//회원가입 성공/실패
function checkSignUp() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordCheck = passwordCheckInput.value;

  if (!isValidSignUp(email, password, passwordCheck)) {
    validateEmail();
    validatePassword();
    validatePasswordCheck();
    return;
  }

  return (location.href = "../folder/index.html");
}

//버튼 클릭 / 인풋 focus 상태에서 엔터 키로 checkSignUp 호출
function onSubmit(e) {
  e.preventDefault();
  checkSignUp();
}

//eyeBtn 비밀번호 토글
function togglePassword() {
  if (passwordInput.type === "password") {
    return showPassword();
  }

  return hidePassword();
}

//eyeBtnCheck 비밀번호 확인 토글
function togglePasswordCheck() {
  if (passwordCheckInput.type === "password") {
    return showPasswordCheck();
  }

  return hidePasswordCheck();
}

/********************
 * EVENT HANDLER
 ********************/

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
passwordCheckInput.addEventListener("focusout", validatePasswordCheck);
formElement.addEventListener("submit", onSubmit);
eyeBtn.addEventListener("click", togglePassword);
eyeBtnCheck.addEventListener("click", togglePasswordCheck);
