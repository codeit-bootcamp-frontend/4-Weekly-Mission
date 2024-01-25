/////////////모듈러하게 작성한 파일
import {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  pwMasking,
} from "./common.js";
/**
 * HTML DOM Elements
 */
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");
const loginButton = document.querySelector(".login-button");
const showPasswordButton = document.querySelectorAll(".eyeoff-button");
/**
 * UI Event Listeners
 */
emailInput.addEventListener("focusout", handleLogin);
passwordInput.addEventListener("focusout", handleLogin);
loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  handleLogin(event);
});
emailInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    handleLogin(event);
  }
});
passwordInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    handleLogin(event);
  }
});
/**
 * Utility Logics
 */

/**
 * Validates a user's login information.
 *
 * This function checks if the provided login information matches a predefined valid user schema.
 * It compares both email and password from the loginInfo object with the valid user credentials.
 *
 * @param {Object} loginInfo - An object containing the user's login information.
 * @param {string} loginInfo.email - The email address of the user.
 * @param {string} loginInfo.password - The password of the user.
 * @returns {boolean} - Returns `true` if the email and password match the valid user schema, otherwise returns `false`.
 */
function isValidUser(loginInfo) {
  const validUserSchema = { email: "test@codeit.com", password: "codeit101" };

  const { email, password } = loginInfo;

  if (email !== validUserSchema.email) {
    return false;
  }

  if (password !== validUserSchema.password) {
    return false;
  }

  return true;
}

function validateUserLoginInfo(e) {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (e.target.id == "email-input") {
    const isEmailEmpty = isEmpty(email);
    if (isEmailEmpty) {
      const emailErrorMessage = document.querySelector(".email-error-message");
      toggleError(emailErrorMessage, "이메일을 입력해 주세요.");
      return false;
    }
    const isValidEmailFormat = isEmailFormat(email);
    if (!isValidEmailFormat && !isEmailEmpty) {
      const emailErrorMessage = document.querySelector(".email-error-message");
      toggleError(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
      return false;
    }
  }
  if (e.target.id == "pw-input") {
    const isPasswordEmpty = isEmpty(password);
    if (isPasswordEmpty) {
      const pwErrorMessage = document.querySelector(".pw-error-message");
      toggleError(pwErrorMessage, "비밀번호를 입력해 주세요.");
      return false;
    } else {
      const pwErrorMessage = document.querySelector(".pw-error-message");
      removeError(pwErrorMessage);
    }
  }

  return true;
}
/**
 * Service Logic
 */
function handleLogin(e) {
  const isValidInput = validateUserLoginInfo(e);
  if (!isValidInput) {
    return false;
  }
  if (isValidInput && e.target.id == "email-input") {
    removeError(e.target.nextElementSibling);
  }

  const email = emailInput.value;
  const password = passwordInput.value;
  // login 로직 실행
  const user = isValidUser({ email, password });
  if (
    (e.target.classList.value == "btn login-button" || e.type == "keypress") &&
    isEmailFormat(email) &&
    !isEmpty(email) &&
    !isEmpty(password)
  ) {
    if (!user) {
      const emailErrorMessage = document.querySelector(".email-error-message");
      const pwErrorMessage = document.querySelector(".pw-error-message");
      toggleError(emailErrorMessage, "이메일을 확인해 주세요.");
      toggleError(pwErrorMessage, "비밀번호를 확인해 주세요.");
      return;
    } else {
      location.href = "../folder/index.html";
    }
  }
}
//눈모양 아이콘

showPasswordButton[0].addEventListener("click", function (event) {
  event.preventDefault();
  pwMasking(passwordInput, event, 0);
});
