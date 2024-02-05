import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
  isPasswordValidString,
  isPasswordValidNumber,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) =>
  validateEmailInput(event.target.value)
);
function validateEmailInput(email) {
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이메일을 입력해주세요."
    );
    return false;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return false;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  return true;
}

const passwordInput = document.querySelector("#passwordInput");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return false;
  }
  if (
    password.length < 8 ||
    !isPasswordValidString(password) ||
    !isPasswordValidNumber(password)
  ) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
  return true;
}

const passwordCheckInput = document.querySelector("#passwordCheckInput");
const passwordCheckErrorMessage = document.querySelector(
  "#passwordCheck-error-message"
);
passwordCheckInput.addEventListener("focusout", (event) =>
  validatePasswordCheckInput(event.target.value)
);
function validatePasswordCheckInput(password) {
  if (password !== passwordInput.value) {
    setInputError(
      { input: passwordCheckInput, errorMessage: passwordCheckErrorMessage },
      "비밀번호가 일치하지 않아요."
    );
    return false;
  }
  removeInputError({
    input: passwordCheckInput,
    errorMessage: passwordCheckErrorMessage,
  });
  return true;
}

const passwordToggleButton = document.querySelector(".password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const passwordCheckToggleButton = document.querySelector(
  ".password-check-toggle"
);
passwordCheckToggleButton.addEventListener("click", () =>
  togglePassword(passwordCheckInput, passwordCheckToggleButton)
);

const signForm = document.querySelector("#form");
const successPageURL = "../folder.html";
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  validateEmailInput(emailInput.value);
  validatePasswordInput(passwordInput.value);
  validatePasswordCheckInput(passwordCheckInput.value);

  if (
    validateEmailInput(emailInput.value) &&
    validatePasswordInput(passwordInput.value) &&
    validatePasswordCheckInput(passwordCheckInput.value)
  ) {
    window.location.href = successPageURL;
  }
}
