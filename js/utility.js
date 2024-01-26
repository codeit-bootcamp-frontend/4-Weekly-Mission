/********************
 * VARIABLE DEFINTION
 ********************/

//이메일, 비밀번호 input
const emailInput = document.querySelector("#input-email");
const passwordInput = document.querySelector("#input-password");
const passwordCheckInput = document.querySelector("#input-password-check");

//이메일, 비밀번호 error-message
const emailErrorMessageElement = document.querySelector("#error-email");
const passwordErrorMessageElement = document.querySelector("#error-password");
const passwordCheckErrorMessageElement = document.querySelector("#error-password-check");

//로그인 버튼
const loginBtn = document.querySelector(".btn-login");

//비밀번호 보이기 버튼
const eyeBtn = document.querySelector("#password-eye");
const eyeBtnCheck = document.querySelector("#password-check-eye");

//유효한 로그인 정보
const VALID_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

/********************
 * UTILITY FUNCTION
 ********************/

//인풋이 비어있는지 검사
function isTextEmpty(inputValue) {
  if (inputValue === "") {
    return true;
  }
  return false;
}

//이메일 양식 유효성 검사
function isValidEmailFormat(emailInputValue) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(emailInputValue);
}

//이메일 중복 검사
function isEmailMatching(emailInputValue) {
  if (emailInputValue === VALID_USER.email) {
    return true;
  }
  return false;
}

//비밀번호 양식 유효성 검사
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

//비밀번호 확인 유효성 검사
function isPasswordMatching(passwordInputValue, passwordCheckInputValue) {
  return passwordInputValue === passwordCheckInputValue;
}

//인풋 에러 켜기 -> 에러 테두리 스타일 추가, 에러 메시지 출력
function showError(input, errorElement, message) {
  errorElement.classList.remove("hidden");
}

//인풋 에러 끄기 -> 에러 테두리 스타일 제거, 에러 메시지 숨기기
function hideError(input, errorElement) {
  input.classList.remove("sign-input-error");
  errorElement.textContent = "";
  errorElement.classList.add("hidden");
}

//유효한 유저 정보 반환
function getUserByLoginInfo(emailInputValue, passwordInputValue) {
  if (!isEmailMatching(emailInputValue)) {
    return null;
  }
  if (!isPasswordMatching(passwordInputValue)) {
    return null;
  }
  return VALID_USER;
}

//로그인 유효성 검사
function isValidUser(emailInputValue, passwordInputValue) {
  return getUserByLoginInfo(emailInputValue, passwordInputValue);
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

  if (!isPasswordMatching(passwordInputValue, passwordCheckInputValue)) {
    console.log(`case 4`);
    return false;
  }

  return true;
}

//eyeBtn 비밀번호 보이게
function showPassword() {
  const imgElement = document.querySelector("#password-eye .icon-eye");
  passwordInput.type = "text";
  imgElement.src = "../public/icon/eye-on.svg";
}

//eyeBtn 비밀번호 안보이게
function hidePassword() {
  const imgElement = document.querySelector("#password-eye .icon-eye");
  passwordInput.type = "password";
  imgElement.src = "../public/icon/eye-off.svg";
}

//eyeBtnCheck 비밀번호 확인 보이게
function showPasswordCheck() {
  const imgElement = document.querySelector("#password-check-eye .icon-eye");
  passwordCheckInput.type = "text";
  imgElement.src = "../public/icon/eye-on.svg";
}

//eyeBtnCheck 비밀번호 확인 안보이게
function hidePasswordCheck() {
  const imgElement = document.querySelector("#password-check-eye .icon-eye");
  passwordCheckInput.type = "password";
  imgElement.src = "../public/icon/eye-off.svg";
}

/********************
 * EXPORT
 ********************/

export {
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
  isValidUser,
  isValidSignUp,
  showPassword,
  hidePassword,
  showPasswordCheck,
  hidePasswordCheck,
};
