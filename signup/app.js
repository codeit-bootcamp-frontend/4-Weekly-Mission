/* Service Logic */

import { isTextEmpty } from "../scripts/utils.js";
import { VALID_USER } from "../scripts/userdb.js";
import {
  emailInput,
  passwordInput,
  confirmPasswordInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  confirmPasswordErrorMessageElement,
  eyeBtn,
  eyeBtnCheck,
  formElement,
  showError,
  hideError,
  togglePassword,
  toggleConfirmPassword,
} from "./ui.js";

/********************
 * UTILITY FUNCTION
 ********************/

//이메일 양식 유효성 검사
function isValidEmailFormat(emailInputValue) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(emailInputValue);
}

//이메일이 일치하는 유저 데이터 반환
function getUserByEmail(emailInputValue) {
  if (VALID_USER.email !== emailInputValue) {
    return null;
  }

  return VALID_USER;
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

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function validateEmail() {
  const email = emailInput.value;

  if (isTextEmpty(email)) {
    showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
    return false;
  }

  if (!isValidEmailFormat(email)) {
    showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
    return false;
  }

  const user = getUserByEmail(email);

  if (user) {
    showError(emailInput, emailErrorMessageElement, "이미 사용 중인 이메일입니다.");
    return false;
  }

  hideError(emailInput, emailErrorMessageElement);
  return true;
}

//비밀번호 에러 검사
function validatePassword() {
  const password = passwordInput.value;

  if (isTextEmpty(password)) {
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
    return false;
  }

  if (!isValidPasswordFormat(password)) {
    showError(passwordInput, passwordErrorMessageElement, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    return false;
  }

  hideError(passwordInput, passwordErrorMessageElement);
  return true;
}

//비밀번호 확인 에러 검사
function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isTextEmpty(confirmPassword)) {
    showError(confirmPasswordInput, confirmPasswordErrorMessageElement, "비밀번호를 입력해 주세요.");
    return false;
  }

  if (password !== confirmPassword) {
    showError(confirmPasswordInput, confirmPasswordErrorMessageElement, "비밀번호가 일치하지 않아요.");
    return false;
  }

  hideError(confirmPasswordInput, confirmPasswordErrorMessageElement);
  return true;
}

//버튼 클릭 / 인풋 focus 상태에서 엔터로 회원가입 로직 실행
function handleRegister(e) {
  e.preventDefault();

  //회원가입 성공/실패 플래그
  let continueRegister = true;

  //비밀번호 조건을 만족하지 않을 경우
  if (!validatePassword()) {
    continueRegister = false;
  }

  //비밀번호 확인 조건을 만족하지 않을 경우
  if (!validateConfirmPassword()) {
    continueRegister = false;
  }

  //이메일 조건을 만족하지 않을 경우
  if (!validateEmail()) {
    continueRegister = false;
  }

  //회원가입 실패
  if (!continueRegister) {
    console.log(`회원가입 실패`);
    return;
  }

  //회원가입 성공
  //const newUser = createUser({ email, password })
  return (location.href = "../folder");
}

/********************
 * EVENT HANDLER
 ********************/

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
confirmPasswordInput.addEventListener("focusout", validateConfirmPassword);
formElement.addEventListener("submit", handleRegister);
eyeBtn.addEventListener("click", togglePassword);
eyeBtnCheck.addEventListener("click", toggleConfirmPassword);
