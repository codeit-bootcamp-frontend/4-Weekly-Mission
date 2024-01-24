/********************
 * VARIABLE DEFINTION
 ********************/

//이메일, 비밀번호 input
const emailInput = document.querySelector("#input-email");
const passwordInput = document.querySelector("#input-password");

//이메일, 비밀번호 error-message
const emailErrorMessageElement = document.querySelector("#error-email");
const passwordErrorMessageElement = document.querySelector("#error-password");

//로그인 버튼
const loginBtn = document.querySelector(".btn-login");

//비밀번호 btn-eye
const eyeBtn = document.querySelector(".btn-eye");

//유효한 로그인 정보
const VALID_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

/********************
 * UTILITY FUNCTION
 ********************/

//인풋이 비어있는지 검사
function isEmpty(inputValue) {
  if (inputValue === "") {
    return true;
  }
  return false;
}

//이메일 양식
function validateEmail(emailString) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(emailString);
}

//이메일 양식 유효성 검사
function isValidEmail(emailInputValue) {
  if (validateEmail(emailInputValue)) {
    return true;
  }
  return false;
}

//인풋 에러 켜기 -> 에러 테두리 스타일 추가, 에러 메시지 출력
function showError(input, errorElement, message) {
  input.classList.add("sign-input-error");
  errorElement.textContent = message;
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
  if (emailInputValue === VALID_USER.email && passwordInputValue === VALID_USER.password) {
    return VALID_USER;
  }
  return null;
}

//로그인 유효성 검사
function isValidUser(emailInput, passwordInput) {
  return getUserByLoginInfo(emailInput.value, passwordInput.value);
}

//eyeBtn 비밀번호 보이게
function showPassword() {
  const imgElement = document.querySelector(".icon-eye");
  passwordInput.type = "text";
  imgElement.src = "../public/icon/eye-on.svg";
}

//eyeBtn 비밀번호 안보이게
function hidePassword() {
  const imgElement = document.querySelector(".icon-eye");
  passwordInput.type = "password";
  imgElement.src = "../public/icon/eye-off.svg";
}

/********************
 * EXPORT
 ********************/

export {
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
};
