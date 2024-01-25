/////////////모듈러하게 작성한 파일
import {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  pwMasking,
} from "../signin/common.js";
/**
 * HTML DOM Elements
 */
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");
const signUpButton = document.querySelector(".signup-btn");
const showPasswordButton = document.querySelectorAll(".eyeoff-button");
const passwordCheck = document.querySelector("#pw-check");
/**
 * UI Event Listeners
 */
emailInput.addEventListener("focusout", handleLogin);
passwordInput.addEventListener("focusout", handleLogin);
passwordCheck.addEventListener("focusout", handleLogin);
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

function arePasswordsMatching() {
  const password = passwordInput.value;
  const confirmPassword = passwordCheck.value;
  return password == confirmPassword;
}

// function requestUserInput(empty, selector, message) {
//   if (empty) {
//     let errorMessage = document.querySelector(selector);
//     toggleError(errorMessage, message);
//     return false;
//   } else {
//     let errorMessage = document.querySelector(selector);
//     removeError(errorMessage);
//     return true;
//   }
// }
/**

 */

function validateUserSignUpInfo(e) {
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = passwordCheck.value;
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
    const isEmailInUse = emailInUse(email);
    if (isEmailInUse) {
      const emailErrorMessage = document.querySelector(".email-error-message");
      toggleError(emailErrorMessage, "이미 사용중인 이메일입니다.");
      return false;
    }
  }

  if (e.target.id == "pw-input") {
    const isPasswordEmpty = isEmpty(password);
    // if (
    //   !requestUserInput(
    //     isPasswordEmpty,
    //     ".pw-error-message",
    //     "비밀번호를 입력해 주세요."
    //   )
    // ) {
    //   return false;
    // }
    if (isPasswordEmpty) {
      const pwErrorMessage = document.querySelector(".pw-error-message");
      toggleError(pwErrorMessage, "비밀번호를 입력해 주세요.");
      return false;
    } else {
      const pwErrorMessage = document.querySelector(".pw-error-message");
      removeError(pwErrorMessage);
    }
    const isStrong = isStrongPassword(password);
    const pwErrorMessage = document.querySelector(".pw-error-message");
    if (!isStrong) {
      // const pwErrorMessage = document.querySelector(".pw-error-message");
      toggleError(
        pwErrorMessage,
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
      );
      return false;
    } else {
      // const pwErrorMessage = document.querySelector(".pw-error-message");
      removeError(pwErrorMessage);
    }
  }
  if (e.target.id == "pw-check") {
    const pwCheckErrorMessage = document.querySelector(
      ".pw-check-error-message"
    );
    if (!arePasswordsMatching()) {
      toggleError(pwCheckErrorMessage, "비밀번호가 일치하지 않아요.");
      return false;
    } else {
      removeError(pwCheckErrorMessage);
    }
  }
  return true;
}
/**
 * Service Logic
 */
function handleLogin(e) {
  const isValidInput = validateUserSignUpInfo(e);
  if (!isValidInput) {
    return false;
  }
  if (isValidInput && e.target.id == "email-input") {
    removeError(e.target.nextElementSibling);
  }

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = passwordCheck.value;
  // signup 로직 실행
  if (
    (e.target.classList.value == "signup-btn btn" || e.type == "keypress") &&
    isEmailFormat(email) &&
    !isEmpty(email) &&
    !isEmpty(password) &&
    !isEmpty(confirmPassword) &&
    isStrongPassword(password) &&
    arePasswordsMatching()
  ) {
    location.href = "../folder/index.html";
  }
}
//눈모양 아이콘

showPasswordButton[0].addEventListener("click", function (event) {
  event.preventDefault();
  pwMasking(passwordInput, event, 0);
});
showPasswordButton[1].addEventListener("click", function (event) {
  event.preventDefault();
  pwMasking(passwordCheck, event, 1);
});
