import {
  Error,
  resetErrorElement,
  errorBorder,
  removeBorder
} from "../src/element.js";

const error = new Error(true);

let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let loginButton = document.querySelector(".button-login");
let passwordIcon = document.querySelector(".password-icon");

function noInputFocusOut(parentElementSlectorName, inputSlectorName, errorSentence) {
  error.removeErrorElement(parentElementSlectorName);
  removeBorder(inputSlectorName);

  if (email.value.trim() === "") {
    error.createErrorSpanElement(parentElementSlectorName);
    errorBorder(inputSlectorName)
    error.errorMessageInElement(parentElementSlectorName, errorSentence);
  }
}

function notValidEmailInput() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    return;
  }

  error.removeErrorElement(".input-form-email");
  removeBorder(".input-email");
  
  if (emailRegex.test(email.value)) {
    return
  } else {
    error.createErrorSpanElement(".input-form-email");
    errorBorder(".input-email");
    error.errorMessageInElement(".input-form-email", "올바른 이메일 주소가 아닙니다");
  }
}

function focusIn(parentElementSlectorName, inputSlectorName) {
  removeBorder(inputSlectorName);
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
  errorBorder(".input-email");
  error.errorMessageInElement(".input-form-email", "이메일을 확인해 주세요");

  error.removeErrorElement(".input-form-password");
  error.createErrorSpanElement(".input-form-password");
  errorBorder(".input-password");
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

email.addEventListener("focusout", () => noInputFocusOut(".input-form-email", ".input-email", "이메일을 입력해 주세요"));
password.addEventListener("focusout", () => noInputFocusOut(".input-form-password", ".input-password", "비밀번호를 입력해 주세요"));
email.addEventListener("input", notValidEmailInput);
email.addEventListener("focusin", () => focusIn(".input-form-email", ".input-email"));
password.addEventListener("focusin", () => focusIn(".input-form-password", ".input-password"));
loginButton.addEventListener("click", folderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", togglePassword);