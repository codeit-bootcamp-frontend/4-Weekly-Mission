import { createErrorMessage } from './error.js'

export function isValidEmail(email) {
  return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,})$/.test(email);
}

export function isInputValid(inputElement) {
  return !inputElement.classList.contains("error");
}

export function validateEmail(event) {
  const emailInput = event.target;
  const emailError = emailInput.parentElement.querySelector(".error-message");

  if (emailError) {
    emailError.remove();
    emailInput.classList.remove("error");
  }

  if (emailInput.value === "") {
    createErrorMessage(emailInput, "이메일을 입력해 주세요.");
  } else if (!isValidEmail(emailInput.value)) {
    createErrorMessage(emailInput, "올바른 이메일 주소가 아닙니다.");
  }
}

export function validatePassword(event) {
  const passwordInput = event.target;
  const passwordError = passwordInput.parentElement.querySelector(".error-message");

  if (passwordError) {
    passwordError.remove();
    passwordInput.classList.remove("error");
  }

  if (passwordInput.value === "") {
    createErrorMessage(passwordInput, "비밀번호를 입력해 주세요.");
  }
}
