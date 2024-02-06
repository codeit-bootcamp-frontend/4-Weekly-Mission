import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  isPasswordValidString,
  isPasswordValidNumber,
} from "./utils.js";

const inputEmailPlaceholderMessage = "이메일을 입력해주세요.";
const invalidEmailErrorMessage = "올바른 이메일 주소가 아닙니다.";
const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) =>
  validateEmailInput(event.target.value)
);
function validateEmailInput(email) {
  if (email === "") {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      inputEmailPlaceholderMessage
    );
    return false;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      invalidEmailErrorMessage
    );
    return false;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  return true;
}

const inputPasswordPlaceholderMessage = "비밀번호를 입력해주세요.";
const passwordLength = 8;
const passwordRequirementMessage =
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
const passwordInput = document.querySelector("#passwordInput");
const passwordErrorMessage = document.querySelector("#password-error-message");
passwordInput.addEventListener("focusout", (event) =>
  validatePasswordInput(event.target.value)
);
function validatePasswordInput(password) {
  if (password === "") {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      inputPasswordPlaceholderMessage
    );
    return false;
  }
  if (
    password.length < passwordLength ||
    !isPasswordValidString(password) ||
    !isPasswordValidNumber(password)
  ) {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      passwordRequirementMessage
    );
    return false;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
  return true;
}

const passwordMismatchMessage = "비밀번호가 일치하지 않아요.";
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
      passwordMismatchMessage
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

const signForm = document.querySelector(".sign-form");
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
