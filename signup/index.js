import {
  Error,
  resetErrorElement,
  errorBorder,
  removeBorder
} from "../src/element.js";

const error = new Error(true);

let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
let passwordConfirm = document.querySelector(".input-password-confirm");
let loginButton = document.querySelector(".button-signup");
let passwordIcon = document.querySelector(".password-icon");
let passwordConfimIcon = document.querySelector(".password-confirm-icon");

function noInputFocusOut(element, parentElementSlectorName, inputSlectorName, errorSentence) {
  error.removeErrorElement(parentElementSlectorName);
  removeBorder(inputSlectorName);

  if (element.value === "") {
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
  resetErrorElement(parentElementSlectorName);
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    signupCheck();
  }
}

async function aleadyUse() {
  const objectForJSON = {};
  let validateAleadyUse = email.value;
  objectForJSON.email = validateAleadyUse;
  requestAleadyUse(objectForJSON);
}

function requestAleadyUse(objectForJSON) {
  fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectForJSON),
  })
  .then((response) => {
    if (response.status === 409) {
      loginDuplication();
      console.log(error.state)
    } else {
      error.removeErrorElement(".input-form-email");
      removeBorder(".input-email");
      console.log("pass")
    }
  })
  .catch((error) => {
    // fetch 요청 자체가 실패한 경우에 대한 처리
    console.error('fetch 요청 실패:', error);
  });
}

function notPasswordFormat() {
  let passwordFormat = password.value;

  if (passwordFormat === "") {
    return;
  }

  if (passwordFormat.length < 8 || /^[a-zA-Z]+$/.test(passwordFormat) || /^[0-9]+$/.test(passwordFormat)) {
    error.createErrorSpanElement(".input-form-password");
    errorBorder(".input-password");
    error.errorMessageInElement(".input-form-password", "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
  }
}

function loginDuplication() {
  error.removeErrorElement(".input-form-email");
  removeBorder(".input-email");

  error.createErrorSpanElement(".input-form-email");
  errorBorder(".input-email");
  error.errorMessageInElement(".input-form-email", "이미 사용 중인 이메일 입니다");
}

function passwordisNotEqual() {
  error.removeErrorElement(".input-form-password-confirm");
  removeBorder(".input-password-confirm");

  if (password.value !== passwordConfirm.value) {
    error.createErrorSpanElement(".input-form-password-confirm");
    errorBorder(".input-password-confirm");
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

async function signupCheck() {
  noInputFocusOut(".input-form-email", ".input-email", "이메일을 입력해 주세요");
  noInputFocusOut(".input-form-password", ".input-password", "비밀번호를 입력해 주세요");
  notPasswordFormat();
  notValidEmailInput();
  passwordisNotEqual();

  if (error.state === true) {
    await requestSignUp();
  }
}

async function requestSignUp() {
  const objectForJSON = {};
  let requestEmail = email.value;
  let requestpassword = password.value;
  objectForJSON.email = requestEmail;
  objectForJSON.password = requestpassword;

  fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectForJSON),
  })
  .then((response) => {
    if (response.status === 200) {
      window.location.replace("../folder");
    } else {
      aleadyUse();
    }
  })
  .catch((error) => {
    console.error('fetch 요청 실패:', error);
  });
}

email.addEventListener("focusout", () => noInputFocusOut(email, ".input-form-email", ".input-email", "이메일을 입력해 주세요"));
email.addEventListener("change", aleadyUse);
password.addEventListener("focusout", () => noInputFocusOut(password, ".input-form-password", ".input-password", "비밀번호를 입력해 주세요"));
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