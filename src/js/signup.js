import {
  inputError,
  onFocusoutEmailInput,
  passwordToggle,
  passwordCheckToggle,
} from "./utils/common.js";
import { USER_EMAIL, PASSWORD_REGEX } from "./utils/constant.js";
import {
  emailInput,
  errorMessage,
  passwordInput,
  passwordEyeOff,
  passwordEyeOn,
  passwordCheck,
  passwordCheckEyeOff,
  passwordCheckEyeOn,
} from "./utils/tags.js";

const onBlurEmailInput = (e) => {
  e.preventDefault();
  if (emailInput.value === USER_EMAIL) {
    inputError(emailInput, errorMessage, "이미 사용 중인 이메일입니다.");
    document.querySelector(".email-input-container").append(errorMessage);
  }
  return;
};

emailInput.addEventListener("focusout", onFocusoutEmailInput);
emailInput.addEventListener("focusout", onBlurEmailInput);

const onBlurPasswordInput = (e) => {
  e.preventDefault();
  if (passwordInput.value !== PASSWORD_REGEX) {
    inputError(
      passwordInput,
      errorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    document.querySelector(".password-input-container").append(errorMessage);
  }
  return;
};

passwordInput.addEventListener("focusout", onBlurPasswordInput);

const passwordValueCheck = (e) => {
  e.preventDefault();
  if (passwordInput.value !== passwordCheck.value) {
    inputError(passwordCheck, errorMessage, "비밀번호가 일치하지 않아요.");
    document
      .querySelector(".password-check-input-container")
      .append(errorMessage);
  }
};

passwordCheck.addEventListener("focusout", passwordValueCheck);
passwordEyeOff.addEventListener("click", passwordToggle);
passwordEyeOn.addEventListener("click", passwordToggle);
passwordCheckEyeOff.addEventListener("click", passwordCheckToggle);
passwordCheckEyeOn.addEventListener("click", passwordCheckToggle);
