import {
  createErrorSpanElement,
  removeErrorElement,
  errorMessageInElement,
} from "../src/element.js";

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
  removeErrorElement(".input-form-email");
  removeBorderStyle(".input-email");

  if (email.value.trim() === "") {
    createErrorSpanElement(".input-form-email");
    styleErrorBorder(".input-email")
    errorMessageInElement(".input-form-email", "이메일을 입력해 주세요");
  }
}

function noInputFocusOutPassword() {
  removeErrorElement(".input-form-password");
  removeBorderStyle(".input-password");

  if (password.value.trim() === "") {
    createErrorSpanElement(".input-form-password");
    styleErrorBorder(".input-password");
    errorMessageInElement(".input-form-password", "비밀번호를 입력해 주세요");
  }
}

function notValidEmailInput() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    return;
  }

  removeErrorElement(".input-form-email");
  removeBorderStyle(".input-email");
  
  if (emailRegex.test(email.value)) {
    console.log("Email")
    return
  } else {
    createErrorSpanElement(".input-form-email");
    styleErrorBorder(".input-email");
    errorMessageInElement(".input-form-email", "올바른 이메일 주소가 아닙니다");
  }
}

function focusIn(parentElementSlectorName) {
  removeErrorElement(parentElementSlectorName)
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
  removeErrorElement(".input-form-email");
  createErrorSpanElement(".input-form-email");
  styleErrorBorder(".input-email");
  errorMessageInElement(".input-form-email", "이메일을 확인해 주세요");

  removeErrorElement(".input-form-password");
  createErrorSpanElement(".input-form-password");
  styleErrorBorder(".input-password");
  errorMessageInElement(".input-form-password", "비밀번호를 확인해 주세요");
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
//email.addEventListener("focusin", () => focusIn(".input-form-email"));
//password.addEventListener("focusin", () => focusIn(".input-form-password"));
loginButton.addEventListener("click", folderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", togglePassword);