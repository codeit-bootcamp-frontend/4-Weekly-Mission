import {
  Error,
  errorBorder,
} from "../src/element.js";
import { 
  staticName,
  errorMessage,
} from "../src/static.js";
import {
  handleFocusIn,
  handleFocusOutForEmail,
  handleFocusOutForPassword,
  togglePassword,
  hasTokenInStorage
} from "../src/eventHandler.js";
import { requestAleadyUse, requestSignup } from "../src/api/request.js";

const error = new Error(true);

const email = document.querySelector(staticName.elementSeletor.email);
const password = document.querySelector(staticName.elementSeletor.password);
const passwordConfirm = document.querySelector(staticName.elementSeletor.passwordConfirm);
const loginButton = document.querySelector(staticName.buttonSelector.signup);
const passwordIcon = document.querySelector(staticName.iconSelector.password);
const passwordConfimIcon = document.querySelector(staticName.iconSelector.passwordConfirm);

function noInputFocusOut(element, parentElementSelectorName, inputSelectorName, errorSentence) {
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
  
  if (emailRegex.test(email.value)) {
    return
  } else {
    error.createErrorSpanElement(staticName.parentElementSeletor.email);
    errorBorder(staticName.elementSeletor.email);
    error.errorMessageInElement(staticName.parentElementSeletor.email, errorMessage.notCorrectFormat.email);
  }
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    signupCheck();
  }
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

async function aleadyUse(emailElement) {
  const isAleadyUse = await requestAleadyUse(emailElement);
  if (isAleadyUse === true) {
    loginDuplication();
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
    await requestSignup();
  }
}

email.addEventListener("focusout", () => handleFocusOutForEmail(
  email,
  staticName.elementSeletor.email,
  staticName.parentElementSeletor.email,
  errorMessage.isEmpty.email,
  errorMessage.notCorrectFormat.email
));
password.addEventListener("focusout", () => handleFocusOutForPassword(
  password,
  staticName.elementSeletor.password, 
  staticName.parentElementSeletor.password, 
  errorMessage.isEmpty.password,
  errorMessage.notCorrectFormat.password
));
email.addEventListener("change", () => aleadyUse(email));
//password.addEventListener("focusout", notPasswordFormat);
email.addEventListener("focusin", () => handleFocusIn(
  staticName.parentElementSeletor.email,
  staticName.elementSeletor.email,
));
password.addEventListener("focusin", () => handleFocusIn(
  staticName.parentElementSeletor.password,
  staticName.elementSeletor.password,
));
passwordConfirm.addEventListener("focusin", () => handleFocusIn(
  staticName.parentElementSeletor.passwordConfirm, 
  staticName.elementSeletor.passwordConfirm,
));
passwordConfirm.addEventListener("change", passwordIsNotEqual);
loginButton.addEventListener("click", signupCheck);
passwordConfirm.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", () => togglePassword(password, passwordIcon));
passwordConfimIcon.addEventListener("click", () => togglePassword(passwordConfirm, passwordConfimIcon));
document.addEventListener('DOMContentLoaded', hasTokenInStorage);