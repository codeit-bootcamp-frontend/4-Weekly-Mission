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

//비밀번호 보이기 버튼
const eyeBtn = document.querySelector("#password-eye");
const eyeBtnCheck = document.querySelector("#password-check-eye");
const eyeImgElement = document.querySelector("#password-check-eye .icon-eye");

//form element
const formElement = document.querySelector(".sign");

/********************
 * UTILITY FUNCTION
 ********************/

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
  passwordCheckInput.type = "text";
  eyeImgElement.src = "../public/icon/eye-on.svg";
}

//eyeBtnCheck 비밀번호 확인 안보이게
function hidePasswordCheck() {
  passwordCheckInput.type = "password";
  eyeImgElement.src = "../public/icon/eye-off.svg";
}

export {
  emailInput,
  passwordInput,
  passwordCheckInput,
  emailErrorMessageElement,
  passwordErrorMessageElement,
  passwordCheckErrorMessageElement,
  eyeBtn,
  eyeBtnCheck,
  formElement,
  showError,
  hideError,
  showPassword,
  hidePassword,
  showPasswordCheck,
  hidePasswordCheck,
};
