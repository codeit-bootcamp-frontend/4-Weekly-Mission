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
function isEmpty(input) {
  if (input.value === "") {
    return true;
  }
  return false;
}

//이메일 양식
function isEmailFormat(emailString) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(emailString);
}

//이메일 양식 유효성 검사
function isValidEmail() {
  if (isEmailFormat(emailInput.value)) {
    return true;
  }
  return false;
}

//에러 메시지에 해당하는 인풋 요소 반환
function targetInput(errorElement) {
  if (errorElement === emailErrorMessageElement) {
    return emailInput;
  } else if (errorElement === passwordErrorMessageElement) {
    return passwordInput;
  } else {
    return null;
  }
}

//인풋 에러 켜기 -> 에러 테두리 스타일 추가, 에러 메시지 출력
function showError(errorElement, message) {
  targetInput(errorElement).classList.add("sign-input-error");
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
}

//인풋 에러 끄기 -> 에러 테두리 스타일 제거, 에러 메시지 숨기기
function hideError(errorElement) {
  targetInput(errorElement).classList.remove("sign-input-error");
  errorElement.textContent = "";
  errorElement.classList.add("hidden");
}

//로그인 유효성 검사
function isValidUser(emailInput, passwordInput) {
  if (emailInput.value !== VALID_USER.email) {
    return false;
  } else if (passwordInput.value !== VALID_USER.password) {
    return false;
  } else {
    return true;
  }
}

//eyeBtn 비밀번호 보이게
function showPassword() {
  const icon = eyeBtn.firstElementChild;
  passwordInput.type = "text";
  icon.src = "../public/icon/eye-on.svg";
}

//eyeBtn 비밀번호 안보이게
function hidePassword() {
  const icon = eyeBtn.firstElementChild;
  passwordInput.type = "password";
  icon.src = "../public/icon/eye-off.svg";
}

/********************
 * ACTIVE FUNCTION
 ********************/

//이메일 에러 검사
function checkEmailError() {
  if (isEmpty(emailInput)) {
    showError(emailErrorMessageElement, "이메일을 입력해 주세요.");
  } else if (!isValidEmail()) {
    showError(emailErrorMessageElement, "올바른 이메일 주소가 아닙니다.");
  } else {
    hideError(emailErrorMessageElement);
  }
}

//비밀번호 에러 검사
function checkPasswordError() {
  if (isEmpty(passwordInput)) {
    showError(passwordErrorMessageElement, "비밀번호를 입력해 주세요.");
  } else {
    hideError(passwordErrorMessageElement);
  }
}

//로그인 성공/실패
function checkLogin() {
  if (isValidUser(emailInput, passwordInput)) {
    location.href = "../folder/index.html";
  } else {
    showError(emailErrorMessageElement, "이메일을 확인해 주세요.");
    showError(passwordErrorMessageElement, "비밀번호를 확인해 주세요.");
  }
}

//eyeBtn 비밀번호 토글
function togglePassword() {
  if (passwordInput.type === "password") {
    showPassword();
  } else {
    hidePassword();
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
 * EVENT HANDLER
 ********************/

emailInput.addEventListener("focusout", checkEmailError);
passwordInput.addEventListener("focusout", checkPasswordError);
loginBtn.addEventListener("click", checkLogin);
document.body.addEventListener("keypress", checkLoginByEnter);
eyeBtn.addEventListener("click", togglePassword);
