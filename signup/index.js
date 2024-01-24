import {
  emailInput,
  passwordInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  loginBtn,
  eyeBtn,
  isEmpty,
  isValidEmail,
  showError,
  hideError,
  isValidUser,
  showPassword,
  hidePassword,
} from "../js/utility.js";

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function checkEmailError() {
  if (isEmpty(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
  }

  if (!isValidEmail()) {
    return showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
  }

  return hideError(emailInput, emailErrorMessageElement);
}

//비밀번호 에러 검사
function checkPasswordError() {
  if (isEmpty(passwordInput.value)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
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
