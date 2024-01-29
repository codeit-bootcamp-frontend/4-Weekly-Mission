import {
  handleInputError,
  handleInputSuccess,
  validateEmail,
  validatePassword,
} from "../utils/validation.js";

// 이메일 입력 이벤트 핸들러
function handleEmailInput() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();

  if (!validateEmail(email, emailError)) {
    handleInputError(emailInput);
  } else {
    handleInputSuccess(emailInput);
  }
}

// 비밀번호 입력 이벤트 핸들러
function handlePasswordInput() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const password = passwordInput.value.trim();

  if (!validatePassword(password, passwordError)) {
    handleInputError(passwordInput);
  } else {
    handleInputSuccess(passwordInput);
  }
}

// 비밀번호 확인 입력 이벤트 핸들러
function handlePasswordCheckInput() {
  const passwordInput = document.getElementById("password");
  const passwordCheckInput = document.getElementById("password-check");
  const passwordCheckError = document.getElementById("passwordCheckError");
  const password = passwordInput.value.trim();
  const passwordCheck = passwordCheckInput.value.trim();

  if (passwordCheck === "") {
    passwordCheckError.textContent = "비밀번호를 입력해주세요.";
    passwordCheckInput.classList.remove("sign-input");
    passwordCheckInput.classList.add("sign-input-error");
  } else if (password !== passwordCheck) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
    passwordCheckInput.classList.remove("sign-input");
    passwordCheckInput.classList.add("sign-input-error");
  } else {
    passwordCheckError.textContent = "";
    passwordCheckInput.classList.remove("sign-input-error");
    passwordCheckInput.classList.add("sign-input");
  }
}

// 회원가입 폼 제출 이벤트 핸들러
function handleSignFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const passwordCheckInput = document.getElementById("password-check");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const passwordCheckError = document.getElementById("passwordCheckError");

  let isEmailValid = false;
  let isPasswordValid = false;
  let isPasswordCheckValid = false;

  // 이메일
  if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
    emailError.textContent = "이메일을 확인해주세요.";
    emailInput.classList.remove("sign-input");
    emailInput.classList.add("sign-input-error");
  } else {
    isEmailValid = true;
  }

  // 비밀번호
  if (passwordInput.value === "" || passwordRegex.test(passwordInput.value)) {
    passwordError.textContent = "비밀번호를 확인해주세요.";
    passwordInput.classList.remove("sign-input");
    passwordInput.classList.add("sign-input-error");
  } else {
    isPasswordValid = true;
  }

  // 비밀번호 확인
  if (
    passwordCheckInput.value === "" ||
    passwordInput.value !== passwordCheckInput.value
  ) {
    passwordCheckError.textContent = "비밀번호를 확인해주세요.";
    passwordCheckInput.classList.remove("sign-input");
    passwordCheckInput.classList.add("sign-input-error");
  } else {
    isPasswordCheckValid = true;
  }

  // 이메일, 비밀번호, 비밀번호 확인 모두 입력되었을 때
  if (isEmailValid && isPasswordValid && isPasswordCheckValid) {
    window.location.href = "/folder";
  }
}

// 눈 아이콘 클릭 이벤트 핸들러
let isEye1On = false;
let isEye2On = false;

function handleEye1Click() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye1");

  isEye1On = !isEye1On;

  if (isEye1On) {
    passwordInput.setAttribute("type", "text");
    eyeIcon.setAttribute("src", "./assets/sign/eye-on.svg");
  } else {
    passwordInput.setAttribute("type", "password");
    eyeIcon.setAttribute("src", "./assets/sign/eye-off.svg");
  }
}

function handleEye2Click() {
  const passwordInput = document.getElementById("password-check");
  const eyeIcon = document.getElementById("eye2");

  isEye2On = !isEye2On;

  if (isEye2On) {
    passwordInput.setAttribute("type", "text");
    eyeIcon.setAttribute("src", "./assets/sign/eye-on.svg");
  } else {
    passwordInput.setAttribute("type", "password");
    eyeIcon.setAttribute("src", "./assets/sign/eye-off.svg");
  }
}

/**
 * 이벤트 등록
 */
// 이메일 입력 이벤트 등록
document.getElementById("email").addEventListener("focusout", handleEmailInput);

// 비밀번호 입력 이벤트 등록
document
  .getElementById("password")
  .addEventListener("focusout", handlePasswordInput);

// 비밀번호 확인 입력 이벤트 등록
document
  .getElementById("password-check")
  .addEventListener("focusout", handlePasswordCheckInput);

// 회원가입 폼 제출 이벤트 등록
document
  .getElementById("sign-form")
  .addEventListener("submit", handleSignFormSubmit);

// 눈 아이콘 클릭 이벤트 등록
document.getElementById("eye1").addEventListener("click", handleEye1Click);
document.getElementById("eye2").addEventListener("click", handleEye2Click);
