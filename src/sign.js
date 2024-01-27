import { ERROR_MESSAGES, REGEX } from "./constants/VALIDATION.js";

const emailError = document.querySelector("#email-error");
const emailInput = document.querySelector("#email");
const passwordError = document.querySelector("#password-error");
const pwInput = document.querySelector("#password");
const pwCheckError = document.querySelector("#pwCheck-error");
const pwConfirmInput = document.querySelector("#password-confirm");
const form = document.querySelector("form");

const showError = (errorEl, input, errorType) => {
  errorEl.style.display = "block";
  input.style.borderColor = "red";
  errorEl.innerText = errorType;
};
const hideError = (input, errorEl) => {
  input.style.borderColor = "";
  errorEl.innerText = "";
};
const isValidFormat = (action, input) => {
  if (action === "email") return REGEX.email.test(input);
  if (action === "pw") return REGEX.pw.test(input);
};

// 이메일 유효성 검사
const validateEmail = () => {
  const emailValue = emailInput.value.trim();

  if (emailValue === "")
    showError(emailError, emailInput, ERROR_MESSAGES.email_empty);
  else if (!isValidFormat("email", emailValue))
    showError(emailError, emailInput, ERROR_MESSAGES.email_invalid);
  else hideError(emailInput, emailError);
};
emailInput.addEventListener("focusout", validateEmail);

// 비밀번호 유효성 검사
const validatePw = () => {
  const passwordValue = pwInput.value.trim();

  if (passwordValue === "")
    showError(passwordError, pwInput, ERROR_MESSAGES.password_empty);
  else if (!isValidFormat("pw", passwordValue))
    showError(passwordError, pwInput, ERROR_MESSAGES.password_invalid);
  else hideError(pwInput, passwordError);
};
pwInput.addEventListener("focusout", validatePw);

// 비밀번호 확인 유효성 검사
const validatePwConfirm = () => {
  const emptyMessage = document.querySelector("#pwConfirm-empty-message");
  const invalidMessage = document.querySelector("#pwConfirm-invalid-message");

  if (pwConfirmInput.value.trim() === "") {
    showError(pwConfirmInput, emptyMessage);
  } else {
    hideError(pwConfirmInput, emptyMessage);
  }

  if (pwInput.value.trim() !== pwConfirmInput.value.trim()) {
    showError(pwConfirmInput, invalidMessage);
  } else {
    hideError(pwConfirmInput, invalidMessage);
  }
};
const handleSignInFail = () => {
  showError(emailError, emailInput, ERROR_MESSAGES.email_check);
  hideError(passwordError, pwInput, ERROR_MESSAGES.password_check);
};

// 로그인 인증 검사
const handleSignIn = (e) => {
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();

  if (emailValue === "test@codeit.com" && pwValue === "codeit101") {
    console.log("로그인 성공!");
    window.location.href = "folder.html";
  } else {
    console.log("로그인 실패!");
    handleSignInFail();
  }
  e.preventDefault();
};
form.addEventListener("submit", handleSignIn);

// 비밀번호 숨김 아이콘 동작
const togglePwVisibility = () => {
  const eyeIcon = document.querySelector("#pw-eyeIcon");

  if (pwInput.type === "password") {
    pwInput.type = "text";
    eyeIcon.src = "./public/images/sign/eye-on.png";
  } else {
    pwInput.type = "password";
    eyeIcon.src = "./public/images/sign/eye-off.png";
  }
};
// 비밀번호 확인 숨김 아이콘 동작
const togglePwConfirmVisibility = () => {
  const eyeIcon = document.querySelector("#pwConfirm-eyeIcon");

  if (pwConfirmInput.type === "password") {
    pwConfirmInput.type = "text";
    eyeIcon.src = "./public/images/sign/eye-on.png";
  } else {
    pwConfirmInput.type = "password";
    eyeIcon.src = "./public/images/sign/eye-off.png";
  }
};
