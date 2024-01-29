/////////////모듈러하게 작성한 파일
import {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  toggleErrorVisibility,
} from "./common.js";
/**
 * HTML DOM Elements
 */
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");

const loginButton = document.querySelector(".login-button");
const showPasswordButton = document.querySelectorAll(".eyeoff-button");
const emailErrorMessage = document.querySelector(".email-error");
const pwErrorMessage = document.querySelector(".pw-error");

/**
 * UI Event Listeners
 */
emailInput.addEventListener("focusout", isValidEmail);
passwordInput.addEventListener("focusout", isValidPassword);
// emailInput.addEventListener("focusout", handleLogin);
// passwordInput.addEventListener("focusout", handleLogin);
loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  handleLogin(event);
});

//onSubmit을 활용하면 eyeoff-button이 클릭되는데 어떻게 해야 할까요?
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

function isValidEmail() {
  const email = emailInput.value;
  const isEmailEmpty = isEmpty(email);
  removeError(emailErrorMessage);
  if (isEmailEmpty) {
    toggleError(emailErrorMessage, "이메일을 입력해 주세요.");
    return false;
  }
  const isValidEmailFormat = isEmailFormat(email);
  if (!isValidEmailFormat && !isEmailEmpty) {
    toggleError(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
    return false;
  }
  return true;
}

function isValidPassword() {
  const password = passwordInput.value;
  const isPasswordEmpty = isEmpty(password);
  removeError(pwErrorMessage);
  if (isPasswordEmpty) {
    toggleError(pwErrorMessage, "비밀번호를 입력해 주세요.");
    return false;
  } else {
    removeError(pwErrorMessage);
    return true;
  }
}

function checkEmailInput() {
  toggleError(emailErrorMessage, "이메일을 확인해 주세요.");
}

function checkPasswordInput() {
  toggleError(pwErrorMessage, "비밀번호를 확인해 주세요.");
}

function isValidUser(loginInfo) {
  const validUserSchema = { email: "test@codeit.com", password: "codeit101" };
  const { email, password } = loginInfo;
  if (email !== validUserSchema.email) {
    return false;
  }
  if (password !== validUserSchema.password) {
    return false;
  }
  location.href = "../folder/index.html";
  return true;
}

function handleLogin() {
  const email = emailInput.value;
  const password = passwordInput.value;
  if (isValidEmail() && isValidPassword()) {
    const loginInfo = { email: email, password: password };
    if (!isValidUser(loginInfo)) {
      checkEmailInput();
      checkPasswordInput();
    }
  }
}

//눈모양 아이콘

showPasswordButton[0].addEventListener("click", function (event) {
  event.preventDefault();
  toggleErrorVisibility(passwordInput, event, 0);
});
