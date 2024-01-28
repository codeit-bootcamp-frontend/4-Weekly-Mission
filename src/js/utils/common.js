export {
  inputError,
  onFocusoutEmailInput,
  onFocusoutPasswordInput,
  passwordToggle,
  passwordCheckToggle,
};

import { EMAIL_REGEX } from "./constant.js";
import {
  emailInput,
  errorMessage,
  passwordInput,
  passwordEyeOff,
  passwordEyeOn,
  passwordCheckEyeOff,
  passwordCheckEyeOn,
  passwordCheck,
} from "./tags.js";

const inputError = (input, element, message) => {
  input.classList.add("error");
  element.textContent = message;
  element.classList.add("error-message");
};

const onFocusoutEmailInput = (e) => {
  if (emailInput.value === "") {
    inputError(emailInput, errorMessage, "이메일을 입력해 주세요.");
  } else if (!EMAIL_REGEX.test(emailInput.value)) {
    inputError(emailInput, errorMessage, "올바른 이메일 주소가 아닙니다.");
  }
  document.querySelector(".email-input-container").append(errorMessage);
  return;
};

const onFocusoutPasswordInput = (e) => {
  if (passwordInput.value === "") {
    inputError(passwordInput, errorMessage, "비밀번호를 입력해 주세요.");
    document.querySelector(".password-input-container").append(errorMessage);
  }
  return;
};

const passwordToggle = (e) => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeOff.style.display = "none";
    passwordEyeOn.style.display = "inline";
  } else {
    passwordInput.type = "password";
    passwordEyeOff.style.display = "inline";
    passwordEyeOn.style.display = "none";
  }
};

const passwordCheckToggle = (e) => {
  if (passwordCheck.type === "password") {
    passwordCheck.type = "text";
    passwordCheckEyeOff.style.display = "none";
    passwordCheckEyeOn.style.display = "inline";
  } else {
    passwordCheck.type = "password";
    passwordCheckEyeOff.style.display = "inline";
    passwordCheckEyeOn.style.display = "none";
  }
};
