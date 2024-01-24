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
function isValidEmail() {
  if (validateEmail(emailInput.value)) {
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
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function checkEmailError() {
  if (isEmpty(emailInput.value)) {
    return showError(emailInput, emailErrorMessageElement, "이메일을 입력해 주세요.");
  } else if (!isValidEmail()) {
    return showError(emailInput, emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
  } else {
    return hideError(emailInput, emailErrorMessageElement);
  }
}

//비밀번호 에러 검사
function checkPasswordError() {
  if (isEmpty(passwordInput.value)) {
    return showError(passwordInput, passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
  } else {
    return hideError(passwordInput, passwordErrorMessageElement);
  }
}

//로그인 성공/실패
function checkLogin() {
  if (isValidUser(emailInput, passwordInput)) {
    return (location.href = "../folder/index.html");
  } else {
    showError(emailInput, emailErrorMessageElement, "이메일을 확인해 주세요.");
    showError(passwordInput, passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
    return;
  }
}

//eyeBtn 비밀번호 토글
function togglePassword() {
  if (passwordInput.type === "password") {
    return showPassword();
  } else {
    return hidePassword();
  }
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
 * EXPORT
 ********************/

export {
  emailInput,
  passwordInput,
  loginBtn,
  eyeBtn,
  checkEmailError,
  checkPasswordError,
  checkLogin,
  checkLoginByEnter,
  togglePassword,
};
