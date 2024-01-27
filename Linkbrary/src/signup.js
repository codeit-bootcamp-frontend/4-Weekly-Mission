import {
  setInputError,
  removeInputError,
  isEmailValid,
  isPasswordValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const emailErrorMessage = document.querySelector("#email-error-message");
emailInput.addEventListener("focusout", (event) => validateEmailDuplicate(event.target.value));
function validateEmailDuplicate(email) {
  if (email === TEST_USER.email){
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      "이미 사용 중인 이메일입니다."
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordCheckInput = document.querySelector("#password-check");
const passwordCheckErrorMessage = document.querySelector("#password-check-error-message");
let passwordCorrect = true;
passwordCheckInput.addEventListener("focusout", (event) => validatePasswordCheckInput(event.target.value));
function validatePasswordCheckInput(password) {
  passwordCorrect = (password === passwordInput.value);
  console.log(password, passwordInput.value, isCorrect);
  if (!passwordCorrect) {
    setInputError(
      { input: passwordCheckInput, errorMessage: passwordCheckErrorMessage },
      "비밀번호가 일치하지 않아요."
    );
    return;
  }
  removeInputError({ input: passwordCheckInput, errorMessage: passwordCheckErrorMessage });
}

const passwordCheckToggleButton = document.querySelector("#password-check-toggle");
passwordCheckToggleButton.addEventListener("click", () =>
  togglePassword(passwordCheckInput, passwordCheckToggleButton)
);

const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  const isTestUser 
  = isEmailValid(emailInput.value) && isPasswordValid(passwordInput.value)
    && passwordCorrect && (emailInput.value !== TEST_USER.email);

  if (isTestUser) {
    location.href = "/folder";
    return;
  }
  setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
  setInputError(
    { input: passwordInput, errorMessage: passwordErrorMessage },
    "비밀번호를 확인해주세요."
  );
  setInputError({ input: passwordCheckInput, errorMessage: passwordCheckErrorMessage },
    "비밀번호가 일치한지 확인해주세요." );
}
