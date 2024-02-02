import {
  Error,
  resetErrorElement,
  errorBorder,
} from "../src/element.js";
import { 
  staticName,
  errorMessage,
  superUser
} from "../src/static.js";

const error = new Error(true);

const email = document.querySelector(staticName.elementSeletor.email);
const password = document.querySelector(staticName.elementSeletor.password);
const passwordConfirm = document.querySelector(staticName.elementSeletor.passwordConfirm);
const loginButton = document.querySelector(staticName.buttonSelector.signup);
const passwordIcon = document.querySelector(staticName.iconSelector.password);
const passwordConfimIcon = document.querySelector(staticName.iconSelector.passwordConfirm);

function noInputFocusOut(element, parentElementSelectorName, inputSelectorName, errorSentence) {
  error.removeErrorElement(parentElementSelectorName);

  if (element.value === "") {
    error.createErrorSpanElement(parentElementSelectorName);
    errorBorder(inputSelectorName)
    error.errorMessageInElement(parentElementSelectorName, errorSentence);
  }
}

function notValidEmailInput() {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    return;
  }

  error.removeErrorElement(staticName.parentElementSeletor.email);
  
  if (emailRegex.test(email.value)) {
    return
  } else {
    error.createErrorSpanElement(staticName.parentElementSeletor.email);
    errorBorder(staticName.elementSeletor.email);
    error.errorMessageInElement(staticName.parentElementSeletor.email, errorMessage.notCorrectFormat.email);
  }
}

function focusIn(parentElementSelectorName) {
  resetErrorElement(parentElementSelectorName);
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    signupCheck();
  }
}

async function aleadyUse() {
  const objectForJSON = {};
  const validateAleadyUse = email.value;
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
      console.log("pass")
    }
  })
  .catch((error) => {
    // fetch 요청 자체가 실패한 경우에 대한 처리
    console.error('fetch 요청 실패:', error);
  });
}

function notPasswordFormat() {
  const passwordFormat = password.value;

  if (passwordFormat === "") {
    return;
  }

  if (passwordFormat.length < 8 || /^[a-zA-Z]+$/.test(passwordFormat) || /^[0-9]+$/.test(passwordFormat)) {
    error.createErrorSpanElement(staticName.parentElementSeletor.password);
    errorBorder(staticName.elementSeletor.password);
    error.errorMessageInElement(staticName.parentElementSeletor.password, errorMessage.notCorrectFormat.password);
  }
}

function loginDuplication() {
  error.removeErrorElement(staticName.parentElementSeletor.email);

  error.createErrorSpanElement(staticName.parentElementSeletor.email);
  errorBorder(staticName.elementSeletor.email);
  error.errorMessageInElement(staticName.parentElementSeletor.email, errorMessage.aleadyUseEmail);
}

function passwordIsNotEqual() {
  error.removeErrorElement(staticName.parentElementSeletor.passwordConfirm);

  if (password.value !== passwordConfirm.value) {
    error.createErrorSpanElement(staticName.parentElementSeletor.passwordConfirm);
    errorBorder(staticName.elementSeletor.passwordConfirm);
    error.errorMessageInElement(staticName.parentElementSeletor.passwordConfirm, errorMessage.passwordIsNotEqual);
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
  noInputFocusOut(
    staticName.parentElementSeletor.email, 
    staticName.elementSeletor.email, 
    errorMessage.isEmpty.email
  );
  noInputFocusOut(
    staticName.parentElementSeletor.password, 
    staticName.elementSeletor.password, 
    errorMessage.isEmpty.password
  );
  notPasswordFormat();
  notValidEmailInput();
  passwordIsNotEqual();

  if (error.state === true) {
    await requestSignUp();
  }
}

async function requestSignUp() {
  const objectForJSON = {};
  const requestEmail = email.value;
  const requestpassword = password.value;
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
      return response.text();
    } else {
      aleadyUse();
    }
  })
  .then((result) => {
    const jsonToObject = JSON.parse(result);
    const accessToken = jsonToObject.data.accessToken;
    localStorage.setItem("accessToken", accessToken);

    window.location.replace("../folder");
  })
  .catch((error) => {
    console.error('fetch 요청 실패:', error);
  });
}

email.addEventListener("focusout", () => noInputFocusOut(
  email,
  staticName.parentElementSeletor.email,
  staticName.elementSeletor.email,
  errorMessage.isEmpty.email
));
password.addEventListener("focusout", () => noInputFocusOut(
  password,
  staticName.parentElementSeletor.password, 
  staticName.elementSeletor.password, 
  errorMessage.isEmpty.password
));
email.addEventListener("change", aleadyUse);
password.addEventListener("focusout", notPasswordFormat);
email.addEventListener("input", notValidEmailInput);
email.addEventListener("focusin", () => focusIn(
  staticName.parentElementSeletor.email,
  staticName.elementSeletor.email,
));
password.addEventListener("focusin", () => focusIn(
  staticName.parentElementSeletor.password,
  staticName.elementSeletor.password,
));
passwordConfirm.addEventListener("focusin", () => focusIn(
  staticName.parentElementSeletor.passwordConfirm, 
  staticName.elementSeletor.passwordConfirm,
));
passwordConfirm.addEventListener("change", passwordIsNotEqual);
loginButton.addEventListener("click", signupCheck);
passwordConfirm.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", () => togglePassword(password, passwordIcon));
passwordConfimIcon.addEventListener("click", () => togglePassword(passwordConfirm, passwordConfimIcon));
document.addEventListener('DOMContentLoaded', function() {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    window.location.href = '../folder';
  }
});