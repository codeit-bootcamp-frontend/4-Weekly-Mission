import {
  emailInput,
  passwordInput,
  passwordCheckInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  passwordCheckErrorMessageElement,
  loginBtn,
  eyeBtn,
  eyeBtnCheck,
  isEmpty,
  isValidEmail,
  isExistingEmail,
  isValidPassword,
  isSamePassword,
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

  if (!isValidPassword(passwordInput.value)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }

  return hideError(passwordInput, passwordErrorMessageElement);
}

//비밀번호 확인 에러 검사
function checkPasswordCheckError() {
  if (isEmpty(passwordCheckInput.value)) {
    return showError(passwordCheckInput, passwordCheckErrorMessageElement, "비밀번호를 입력해 주세요.");
  }

  if (!isSamePassword(passwordInput.value, passwordCheckInput.value)) {
    return showError(passwordCheckInput, passwordCheckErrorMessageElement, "비밀번호가 일치하지 않아요.");
  }

  return hideError(passwordCheckInput, passwordCheckErrorMessageElement);
}

//회원가입 성공/실패
function checkSignUp() {
  if (isValidUser(emailInput, passwordInput)) {
    return (location.href = "../folder/index.html");
  }

  checkEmailError();
  checkPasswordError();
  checkPasswordCheckError();
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

//엔터 키로 checkSignUp 호출
function checkSignUpByEnter(event) {
  if (event.key === "Enter") {
    checkSignUp();
  }
}

/********************
 * EVENT HANDLER
 ********************/

emailInput.addEventListener("focusout", checkEmailError);
passwordInput.addEventListener("focusout", checkPasswordError);
passwordCheckInput.addEventListener("focusout", checkPasswordCheckError);
loginBtn.addEventListener("click", checkSignUp);
document.body.addEventListener("keypress", checkSignUpByEnter);
eyeBtn.addEventListener("click", togglePassword);
