import {
  emailInput,
  passwordInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  loginBtn,
  eyeBtn,
  VALID_USER,
  isEmpty,
  isValidEmail,
  showError,
  hideError,
  isValidUser,
  showPassword,
  hidePassword,
} from "../js/utility.js";

/********************
 * UTILITY FUNCTION
 ********************/

//이메일 중복 검사
function isExistingEmail(emailInputValue) {
  if (emailInputValue === VALID_USER.email) {
    return true;
  }

  return false;
}

//비밀번호 양식
function validatePassword(passwordString) {
  // 값이 8자 미만인 경우
  if (passwordString.length < 8) {
    return false;
  }

  // 값이 숫자만 포함된 경우
  if (/^\d+$/.test(passwordString)) {
    return false;
  }

  // 값이 문자열만 포함된 경우
  if (/^[a-zA-Z]+$/.test(passwordString)) {
    return false;
  }

  return true;
}

//이메일 양식 유효성 검사
function isValidPassword(passwordInputValue) {
  if (validatePassword(passwordInputValue)) {
    return true;
  }
  return false;
}

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function checkEmailError() {
  if (isEmpty(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
  }

  if (!isValidEmail(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
  }

  if (isExistingEmail(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "이미 사용 중인 이메일입니다.");
  }

  return hideError(emailInput, emailErrorMessageElement);
}

//비밀번호 에러 검사
function checkPasswordError() {
  if (isEmpty(passwordInput.value)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
  }

  if (!validatePassword(passwordInput.value)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }

  return hideError(passwordInput, passwordErrorMessageElement);
}

//로그인 성공/실패
function checkLogin() {
  if (isValidUser(emailInput, passwordInput)) {
    return (location.href = "../folder/index.html");
  }

  showError(emailInput, emailErrorMessageElement, "이메일을 확인해 주세요.");
  showError(passwordInput, passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
  return;
}

//eyeBtn 비밀번호 토글
function togglePassword() {
  if (passwordInput.type === "password") {
    return showPassword();
  }

  return hidePassword();
}

/********************
 * KEY BINDING
 ********************/

//엔터 키로 checkLogin 호출
function checkLoginByEnter(event) {
  if (event.key === "Enter") {
    checkLogin();
  }
}

/********************
 * EVENT HANDLER
 ********************/

emailInput.addEventListener("focusout", checkEmailError);
passwordInput.addEventListener("focusout", checkPasswordError);
loginBtn.addEventListener("click", checkLogin);
document.body.addEventListener("keypress", checkLoginByEnter);
eyeBtn.addEventListener("click", togglePassword);
