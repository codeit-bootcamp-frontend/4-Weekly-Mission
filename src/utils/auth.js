import { ERROR_MESSAGES, REGEX } from "../constants/VALIDATION.js";
import { getTokens } from "./token.js";

export const emailError = document.querySelector("#email-error");
export const emailInput = document.querySelector("#email");
export const pwError = document.querySelector("#password-error");
export const pwInput = document.querySelector("#password");
export const form = document.querySelector("form");
export const pwToggle = document.querySelector("#pw-eyeIcon");
export const pwConfirmError = document.querySelector("#pwConfirm-error");
export const pwConfirmInput = document.querySelector("#password-confirm");
export const pwConfirmToggle = document.querySelector("#pwConfirm-eyeIcon");

export const checkLoginStatus = () => {
  const tokens = getTokens();
  if (tokens.accessToken) window.location.href = "folder.html";
};

export const showError = (errorEl, input, errorType) => {
  errorEl.style.display = "block";
  input.style.borderColor = "red";
  errorEl.innerText = errorType;
};
export const hideError = (errorEl, input) => {
  errorEl.innerText = "";
  input.style.borderColor = "";
};

export const isValidFormat = (action, input) => {
  if (action === "email") return REGEX.email.test(input);
  if (action === "pw") return REGEX.pw.test(input);
};

// 이메일 유효성 검사
export const validateEmail = () => {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    showError(emailError, emailInput, ERROR_MESSAGES.email_empty);
  } else if (!isValidFormat("email", emailValue)) {
    showError(emailError, emailInput, ERROR_MESSAGES.email_invalid);
  } else {
    hideError(emailError, emailInput);
  }
};

// 비밀번호 유효성 검사
export const validatePw = () => {
  const passwordValue = pwInput.value.trim();

  if (passwordValue === "") {
    showError(pwError, pwInput, ERROR_MESSAGES.password_empty);
  } else if (!isValidFormat("pw", passwordValue)) {
    showError(pwError, pwInput, ERROR_MESSAGES.password_invalid);
  } else {
    hideError(pwError, pwInput);
  }
};

// 비밀번호 확인 유효성 검사
export const validatePwConfirm = () => {
  const passwordValue = pwInput.value.trim();
  const pwConfirmValue = pwConfirmInput.value.trim();

  if (pwConfirmValue === "") {
    showError(pwConfirmError, pwConfirmInput, ERROR_MESSAGES.pwConfirm_empty);
  } else if (passwordValue !== pwConfirmValue) {
    showError(pwConfirmError, pwConfirmInput, ERROR_MESSAGES.pwConfirm_check);
  } else {
    hideError(pwConfirmError, pwConfirmInput);
  }
};

// 비밀번호 확인 숨김 아이콘 동작
export const eyeToggle = (input, eyeIcon) => {
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.src = "./public/images/sign/eye-on.png";
  } else {
    input.type = "password";
    eyeIcon.src = "./public/images/sign/eye-off.png";
  }
};
