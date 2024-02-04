import { createErrorMessage } from './error/error.js'
import errorMessages from './error/errorMessage.js';

//이메일 정규식
export function isValidEmail(email) {
  return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,})$/.test(email);
}
//에러메세지 존재여부 확인
export function isInputValid(inputElement) {
  return !inputElement.classList.contains("error");
}
//이메일 validation
export function validateEmail(event) {
  const emailInput = event.target;
  const emailError = emailInput.parentElement.querySelector(".error-message");

  if (emailError) {
    emailError.remove();
    emailInput.classList.remove("error");
  }

  if (emailInput.value === "") {
    createErrorMessage(emailInput, errorMessages.EMAIL_REQUIRED);
  } else if (!isValidEmail(emailInput.value)) {
    createErrorMessage(emailInput, errorMessages.INVALID_EMAIL);
  }
}
//비밀번호 validation
export function validatePassword(event) {
  const passwordInput = event.target;
  const passwordError = passwordInput.parentElement.querySelector(".error-message");

  if (passwordError) {
    passwordError.remove();
    passwordInput.classList.remove("error");
  }

  if (passwordInput.value === "") {
    createErrorMessage(passwordInput, errorMessages.PASSWORD_REQUIRED);
  }
}
//비밀번호 정규식 validation
export function validatePasswordRegex(event) {
  const passwordInput = event.target;
  const password = passwordInput.value;
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (!regex.test(password)) {
    createErrorMessage(passwordInput, errorMessages.INVALID_PASSWORD);
  }
}
//비밀번호 확인
export function passwordCheck(passwordInput, confirmPasswordInput) {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    createErrorMessage(confirmPasswordInput, errorMessages.PASSWORD_MISMATCH);
  }
}
//이메일 중복
export async function emailCheck(event) {
  try {
    const emailInput = event.target;
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    });

    if (response.status === 409) {
      createErrorMessage(emailInput, errorMessages.PASSWORD_MISMATCH);
    }
  } catch (error) {
    console.log(`에러메세지 : ${error}`);
  }
}