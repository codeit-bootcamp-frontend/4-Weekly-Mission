import {
  handleEmailInput,
  handlePasswordInput,
  handleEyeClick,
} from "../utils/input.js";

import { MASTER_EMAIL, MASTER_PASSWORD } from "../constant/user.js";
import { validateEmail, validatePassword } from "../utils/validation.js";

/**
 * 로그인 폼 제출 이벤트 핸들러
 *
 * @param {event} event - submit event
 */
function handleSignFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const isEmailValid = validateEmail(emailInput.value, emailError, "signin");
  const isPasswordValid = validatePassword(passwordInput.value, passwordError);

  if (isEmailValid && isPasswordValid) {
    if (
      emailInput.value === MASTER_EMAIL &&
      passwordInput.value === MASTER_PASSWORD
    ) {
      window.location.href = "/folder";
    } else {
      handleLoginError(emailInput, passwordInput, emailError, passwordError);
    }
  }
}

/**
 * 로그인 에러 메시지 표시
 *
 * @param {element} emailInput - 이메일 입력 필드
 * @param {element} passwordInput - 비밀번호 입력 필드
 * @param {element} emailError - 이메일 에러 메시지 표시할 html element
 * @param {element} passwordError - 비밀번호 에러 메시지 표시할 html element
 */
function handleLoginError(
  emailInput,
  passwordInput,
  emailError,
  passwordError
) {
  displayErrorMessage(emailInput, emailError, "이메일을 확인해주세요.");
  displayErrorMessage(passwordInput, passwordError, "비밀번호를 확인해주세요.");
}

/**
 * 에러 메시지 표시 및 입력 필드 스타일 변경
 *
 * @param {element} inputElement
 * @param {element} errorElement
 * @param {string} errorMessage
 */
function displayErrorMessage(inputElement, errorElement, errorMessage) {
  errorElement.textContent = errorMessage;
  inputElement.classList.remove("sign-input");
  inputElement.classList.add("sign-input-error");
}

// 이메일 입력 이벤트 등록
document
  .getElementById("email")
  .addEventListener("focusout", () => handleEmailInput("signin"));

// 비밀번호 입력 이벤트 등록
document
  .getElementById("password")
  .addEventListener("focusout", handlePasswordInput);

// 로그인 폼 제출 이벤트 등록
document
  .getElementById("sign-form")
  .addEventListener("submit", handleSignFormSubmit);

// 눈 아이콘 클릭 이벤트 등록
document
  .getElementById("eye1")
  .addEventListener("click", () => handleEyeClick("eye1"));
