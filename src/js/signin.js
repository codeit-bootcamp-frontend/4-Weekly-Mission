import {
  inputError,
  onFocusoutEmailInput,
  onFocusoutPasswordInput,
  passwordToggle,
} from "./utils/common.js";
import { USER_EMAIL, USER_PASSWORD } from "./utils/constant.js";
import {
  emailInput,
  errorMessage,
  passwordInput,
  loginButton,
  passwordEyeOff,
  passwordEyeOn,
} from "./utils/tags.js";

emailInput.addEventListener("focusout", onFocusoutEmailInput);
passwordInput.addEventListener("focusout", onFocusoutPasswordInput);

const signForm = (e) => {
  e.preventDefault();
  if (
    USER_EMAIL === emailInput.value &&
    USER_PASSWORD === passwordInput.value
  ) {
    window.location.href = "./folder";
  } else if (emailInput.value !== "test@codeit.com") {
    inputError(emailInput, errorMessage, "이메일을 확인해주세요.");
    document.querySelector(".email-input-container").append(errorMessage);
  } else if (passwordInput.value !== "codeit101") {
    inputError(passwordInput, errorMessage, "비밀번호를 확인해 주세요.");
    document.querySelector(".password-input-container").append(errorMessage);
  }
  return;
};

loginButton.addEventListener("click", signForm);
passwordEyeOff.addEventListener("click", passwordToggle);
passwordEyeOn.addEventListener("click", passwordToggle);
