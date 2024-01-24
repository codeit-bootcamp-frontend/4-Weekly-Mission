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
  isTextEmpty,
  isValidEmailFormat,
  isEmailMatching,
  isValidPasswordFormat,
  isPasswordMatching,
  showError,
  hideError,
  isValidSignUp,
  showPassword,
  hidePassword,
  showPasswordCheck,
  hidePasswordCheck,
} from "../scripts/utils.js";

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
  if (isTextEmpty(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
  }

  if (!isValidEmailFormat(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
  }

  if (isEmailMatching(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "이미 사용 중인 이메일입니다.");
  }

  return hideError(emailInput, emailErrorMessageElement);
}

//비밀번호 에러 검사
function checkPasswordError() {
  if (isTextEmpty(passwordInput.value)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
  }

  if (!isValidPasswordFormat(passwordInput.value)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }

  return hideError(passwordInput, passwordErrorMessageElement);
}

//비밀번호 확인 에러 검사
function checkPasswordCheckError() {
  if (isTextEmpty(passwordCheckInput.value)) {
    return showError(passwordCheckInput, passwordCheckErrorMessageElement, "비밀번호를 입력해 주세요.");
  }

  if (!isPasswordMatching(passwordInput.value, passwordCheckInput.value)) {
    return showError(passwordCheckInput, passwordCheckErrorMessageElement, "비밀번호가 일치하지 않아요.");
  }

  return hideError(passwordCheckInput, passwordCheckErrorMessageElement);
}

//회원가입 성공/실패
function checkSignUp() {
  console.log(isValidSignUp(emailInput.value, passwordInput.value, passwordCheckInput.value));
  if (isValidSignUp(emailInput.value, passwordInput.value, passwordCheckInput.value)) {
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

//eyeBtnCheck 비밀번호 확인 토글
function togglePasswordCheck() {
  if (passwordCheckInput.type === "password") {
    return showPasswordCheck();
  }

  return hidePasswordCheck();
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
eyeBtnCheck.addEventListener("click", togglePasswordCheck);
