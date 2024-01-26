import {
  Error,
  resetErrorElement,
} from "../src/element.js";

const error = new Error(true);

let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let loginButton = document.querySelector(".button-login");
let passwordIcon = document.querySelector(".password-icon");

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
    console.log("Email")
    return
  } else {
    error.createErrorSpanElement(".input-form-email");
    styleErrorBorder(".input-email");
    error.errorMessageInElement(".input-form-email", "올바른 이메일 주소가 아닙니다");
  }
}

function focusIn(parentElementSlectorName, inputSlectorName) {
  removeBorderStyle(inputSlectorName);
  resetErrorElement(parentElementSlectorName)
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    folderPage();
  }
}

function folderPage() {
  let folderEmail = "test@codeit.com";
  let folderPassword = "codeit101";

  if (email.value === folderEmail && password.value === folderPassword) {
    window.location.replace("../folder");
  } else {
    loginFail();
  }
}

function loginFail() {
  error.removeErrorElement(".input-form-email");
  error.createErrorSpanElement(".input-form-email");
  styleErrorBorder(".input-email");
  error.errorMessageInElement(".input-form-email", "이메일을 확인해 주세요");

  error.removeErrorElement(".input-form-password");
  error.createErrorSpanElement(".input-form-password");
  styleErrorBorder(".input-password");
  error.errorMessageInElement(".input-form-password", "비밀번호를 확인해 주세요");
}

function togglePassword() {
  if (password.type === "password") {
    password.type = "text";
    passwordIcon.setAttribute("src", "../Publics/sign/eye-off.svg");
  } else {
    password.type = "password";
    passwordIcon.setAttribute("src", "../Publics/sign/eye-on.svg");
  }
}

email.addEventListener("focusout", noInputFocusOut);
password.addEventListener("focusout", noInputFocusOutPassword);
email.addEventListener("input", notValidEmailInput);
email.addEventListener("focusin", () => focusIn(".input-form-email", ".input-email"));
password.addEventListener("focusin", () => focusIn(".input-form-password", ".input-password"));
loginButton.addEventListener("click", folderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", togglePassword);