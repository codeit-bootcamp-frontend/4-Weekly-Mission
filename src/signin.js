import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
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
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      invalidEmailErrorMessage
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const inputPasswordPlaceholderMessage = "비밀번호를 입력해주세요.";
const passwordLength = 8;
const passwordRequirementMessage =
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
const passwordInput = document.querySelector("#password");
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
    return;
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
    return;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
}

const passwordToggleButton = document.querySelector("#password-toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const loginFailureMessage = "이메일 혹은 비밀번호를 확인해주세요.";

const API_URL = "https://bootcamp-api.codeit.kr/api/sign-in";
const successPageURL = "../folder.html";

const signForm = document.querySelector(".sign-form");
signForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const isTestUser =
    emailInput.value === TEST_USER.email &&
    passwordInput.value === TEST_USER.password;

  if (isTestUser) {
    window.location.href = successPageURL;
    return;
  }

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = successPageURL;
      } else {
        return response.json();
      }
    })
    .then((errorData) => {
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        errorData.message || loginFailureMessage
      );
    })
    .catch((error) => {
      console.error(loginFailureMessage, error);
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        loginFailureMessage
      );
    });
});
