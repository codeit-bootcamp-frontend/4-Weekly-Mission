import {
  Error,
  resetErrorElement,
} from "../src/element.js";

const error = new Error(true);

let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let passwordConfirm = document.querySelector(".input-password-confirm");
let loginButton = document.querySelector(".button-signup");
let passwordIcon = document.querySelector(".password-icon");
let passwordConfimIcon = document.querySelector(".password-confirm-icon");

function styleErrorBorder(inputSlectorName) {
  let inputElement = document.querySelector(inputSlectorName);
  inputElement.style.outline = "1px solid red";
}

function removeBorderStyle(inputSlectorName) {
  let inputElement = document.querySelector(inputSlectorName);
  inputElement.style.outline = "none";
}

function noInputFocusOut() {
  error.removeErrorElement(".input-form-email");
  removeBorderStyle(".input-email");

  if (email.value.trim() === "") {
    error.createErrorSpanElement(".input-form-email");
    styleErrorBorder(".input-email")
    error.errorMessageInElement(".input-form-email", "이메일을 입력해 주세요");
  }
}

function noInputFocusOutPassword() {
  error.removeErrorElement(".input-form-password");
  removeBorderStyle(".input-password");

  if (password.value.trim() === "") {
    error.createErrorSpanElement(".input-form-password");
    styleErrorBorder(".input-password");
    error.errorMessageInElement(".input-form-password", "비밀번호를 입력해 주세요");
  }
}

function notValidEmailInput() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    return;
  }

  error.removeErrorElement(".input-form-email");
  removeBorderStyle(".input-email");
  
  if (emailRegex.test(email.value)) {
    return
  } else {
    error.createErrorSpanElement(".input-form-email");
    styleErrorBorder(".input-email");
    error.errorMessageInElement(".input-form-email", "올바른 이메일 주소가 아닙니다");
  }
}

function focusIn(parentElementSlectorName, inputSlectorName) {
  removeBorderStyle(inputSlectorName);
  resetErrorElement(parentElementSlectorName);
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    signupCheck();
  }
}

function aleadyUse() {
  let folderEmail = "test@codeit.com";
  if (email.value === folderEmail) {
    loginFail();
  } 
}

function notPasswordFormat() {
  let passwordFormat = password.value;

  if (passwordFormat === "") {
    return;
  }

  if (passwordFormat.length < 8 || /^[a-zA-Z]+$/.test(passwordFormat) || /^[0-9]+$/.test(passwordFormat)) {
    error.createErrorSpanElement(".input-form-password");
    styleErrorBorder(".input-password");
    error.errorMessageInElement(".input-form-password", "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
  }
}

function loginFail() {
  error.removeErrorElement(".input-form-email");
  removeBorderStyle(".input-email");

  error.createErrorSpanElement(".input-form-email");
  styleErrorBorder(".input-email");
  error.errorMessageInElement(".input-form-email", "이미 사용 중인 이메일 입니다");
}

function passwordisNotEqual() {
  error.removeErrorElement(".input-form-password-confirm");
  removeBorderStyle(".input-password-confirm");

  if (password.value !== passwordConfirm.value) {
    error.createErrorSpanElement(".input-form-password-confirm");
    styleErrorBorder(".input-password-confirm");
    error.errorMessageInElement(".input-form-password-confirm", "비밀번호가 일치하지 않아요");
  }
}

function togglePassword(element, icon) {
  if (element.type === "password") {
    element.type = "text";
    icon.setAttribute("src", "../Publics/sign/eye-off.svg");
  }
  else {
    element.type = "password";
    icon.setAttribute("src", "../Publics/sign/eye-on.svg");
  }
}

function signupCheck() {
  noInputFocusOut();
  aleadyUse();
  noInputFocusOutPassword();
  notPasswordFormat();
  notValidEmailInput();
  notValidEmailInput();
  passwordisNotEqual();

  if (error.state === true) {
    window.location.replace("../folder");
  }
}

email.addEventListener("focusout", noInputFocusOut);
email.addEventListener("focusout", aleadyUse);
password.addEventListener("focusout", noInputFocusOutPassword);
password.addEventListener("focusout", notPasswordFormat);
email.addEventListener("input", notValidEmailInput);
email.addEventListener("focusin", () => focusIn(".input-form-email", ".input-email"));
password.addEventListener("focusin", () => focusIn(".input-form-password", ".input-password"));
passwordConfirm.addEventListener("focusin", () => focusIn(".input-form-password-confirm", ".input-password-confirm"));
passwordConfirm.addEventListener("change", passwordisNotEqual);
loginButton.addEventListener("click", signupCheck);
passwordConfirm.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", () => togglePassword(password, passwordIcon));
passwordConfimIcon.addEventListener("click", () => togglePassword(passwordConfirm, passwordConfimIcon));