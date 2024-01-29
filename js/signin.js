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

// 로그인 폼 제출 이벤트 핸들러
function handleSignFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    event.preventDefault();

    if (emailInput.value !== "test@codeit.com") {
      emailError.textContent = "이메일을 확인해주세요.";
      emailInput.classList.remove("sign-input");
      emailInput.classList.add("sign-input-error");
    }

    if (passwordInput.value !== "codeit101") {
      passwordError.textContent = "비밀번호를 확인해주세요.";
      passwordInput.classList.remove("sign-input");
      passwordInput.classList.add("sign-input-error");
    }
  }
}

// 눈 아이콘 클릭 이벤트 핸들러
let isEyeOn = false;

function handleEyeClick() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye");

  isEyeOn = !isEyeOn;

  if (isEyeOn) {
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

// 로그인 폼 제출 이벤트 등록
document
  .getElementById("sign-form")
  .addEventListener("submit", handleSignFormSubmit);

// 눈 아이콘 클릭 이벤트 등록
document.getElementById("eye").addEventListener("click", handleEyeClick);
