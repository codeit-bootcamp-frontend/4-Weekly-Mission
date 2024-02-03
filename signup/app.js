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

import { isValidEmailFormat, getUserByEmail } from "../scripts/utils-sign.js";

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

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function validateEmail() {
  const email = emailInput.value;
  const user = getUserByEmail(email);

  if (isTextEmpty(email)) {
    return showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
  }

  if (!isValidEmailFormat(email)) {
    return showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
  }

  if (email === user.email) {
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

  if (password !== passwordCheck) {
    return showError(passwordCheckInput, passwordCheckErrorMessageElement, "비밀번호가 일치하지 않아요.");
  }

  return hideError(passwordCheckInput, passwordCheckErrorMessageElement);
}

//버튼 클릭 / 인풋 focus 상태에서 엔터로 회원가입 로직 실행
function handleRegister(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordCheck = passwordCheckInput.value;

  //이메일 형식을 만족하지 않을 경우 회원가입 실패
  if (!isValidEmailFormat(email)) {
    validateEmail();
    validatePassword();
    validatePasswordCheck();
    return;
  }

  //email과 일치하는 유저 저장 / 없으면 null
  const user = getUserByEmail(email);

  //user가 있을 경우 동일한 이메일 존재하므로 회원가입 실패
  if (user) {
    validateEmail();
    validatePassword();
    validatePasswordCheck();
    return;
  }

  //비밀번호 형식을 만족하지 않을 경우 회원가입 실패
  if (!isValidPasswordFormat(password)) {
    validateEmail();
    validatePassword();
    validatePasswordCheck();
    return;
  }

  //비밀번호와 비밀번호 확인이 동일하지 않을 경우 회원가입 실패
  if (password !== passwordCheck) {
    validateEmail();
    validatePassword();
    validatePasswordCheck();
    return;
  }

  //회원가입 성공
  //const newUser = createUser({ email, password })
  return (location.href = "../folder/index.html");
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
formElement.addEventListener("submit", handleRegister);
eyeBtn.addEventListener("click", togglePassword);
eyeBtnCheck.addEventListener("click", togglePasswordCheck);
