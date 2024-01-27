/////////////모듈러하게 작성한 파일
import {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  toggleErrorVisibility,
} from "../signin/common.js";
/**
 * HTML DOM Elements
 */
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");
const passwordCheck = document.querySelector("#pw-check");
const emailErrorMessage = document.querySelector(".email-error");
const pwErrorMessage = document.querySelector(".pw-error");
const pwCheckErrorMessage = document.querySelector(".pw-check-error");
const signUpButton = document.querySelector(".signup-btn");
const showPasswordButton = document.querySelectorAll(".eyeoff-button");
/**
 *
 * UI Event Listeners
 */
emailInput.addEventListener("focusout", function (event) {
  const email = emailInput.value;
  isValidEmail(email);
});
passwordInput.addEventListener("focusout", function () {
  const password = passwordInput.value;
  isValidPassword(password);
});
passwordCheck.addEventListener("focusout", function () {
  const passwordCheckValue = passwordCheck.value;
  const password = passwordInput.value;
  isValidPasswordCheckValue(password, passwordCheckValue);
});

signUpButton.addEventListener("click", function (event) {
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
passwordCheck.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    handleLogin(event);
  }
});
/**
 * Utility Logics
 */

function emailInUse(text) {
  return text === "test@codeit.com";
}
//숫자로만 이루어져 있는지 판별
function isNumericString(str) {
  return /^\d+$/.test(str);
}
//문자로만 이루어져 있는지 판별
function isAlphaString(str) {
  return /^[a-zA-Z]+$/.test(str);
}
function isStrongPassword(text) {
  return text.length >= 8 && !isNumericString(text) && !isAlphaString(text);
}

function isValidEmail(email) {
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
  const isEmailInUse = emailInUse(email);
  if (isEmailInUse) {
    toggleError(emailErrorMessage, "이미 사용중인 이메일입니다.");
    return false;
  }
  return true;
}

function isValidPassword(password) {
  const isPasswordEmpty = isEmpty(password);
  const isStrong = isStrongPassword(password);
  removeError(pwErrorMessage);
  if (isPasswordEmpty) {
    toggleError(pwErrorMessage, "비밀번호를 입력해 주세요.");
    return false;
  } else if (!isStrong) {
    toggleError(
      pwErrorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  } else {
    removeError(pwErrorMessage);
    return true;
  }
}

function isValidPasswordCheckValue(password, passwordCheckValue) {
  if (password != passwordCheckValue) {
    toggleError(pwCheckErrorMessage, "비밀번호가 일치하지 않아요.");
    return false;
  } else {
    removeError(pwCheckErrorMessage);
    return true;
  }
}

function handleLogin() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordCheckValue = passwordCheck.value;
  if (
    isValidEmail(email) &&
    isValidPassword(password) &&
    isValidPasswordCheckValue(password, passwordCheckValue)
  ) {
    location.href = "../folder/index.html";
  }
}

//눈모양 아이콘

showPasswordButton[0].addEventListener("click", function (event) {
  event.preventDefault();
  toggleErrorVisibility(passwordInput, event, 0);
});
showPasswordButton[1].addEventListener("click", function (event) {
  event.preventDefault();
  toggleErrorVisibility(passwordCheck, event, 1);
});
