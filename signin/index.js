import {
  Error,
  errorBorder,
} from "../src/element.js";
import { 
  staticName,
  errorMessage,
  superUser
} from "../src/static.js";
import {
  handleFocusIn,
  handleFocusOutForEmail,
  notInput,
  togglePassword,
  hasTokenInStorage
} from "../src/eventHandler.js";
import { requestLogin } from "../src/api/request.js";

const error = new Error(true);

const email = document.querySelector(staticName.elementSeletor.email);
const password = document.querySelector(staticName.elementSeletor.password);
const loginButton = document.querySelector(staticName.buttonSelector.signin);
const passwordIcon = document.querySelector(staticName.iconSelector.password);

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    routefolderPage();
  }
}

async function routefolderPage() {
  if (email.value === superUser.email && password.value === superUser.password) {
    await requestLogin();
    window.location.replace("../folder");
  } else {
    loginFail();
  } 
}

function loginFail() {
  error.removeErrorElement(staticName.parentElementSeletor.email);
  error.createErrorSpanElement(staticName.parentElementSeletor.email);
  errorBorder(staticName.elementSeletor.email);
  error.errorMessageInElement(staticName.parentElementSeletor.email, errorMessage.loginFail.email);

  error.removeErrorElement(staticName.parentElementSeletor.password);
  error.createErrorSpanElement(staticName.parentElementSeletor.password);
  errorBorder(staticName.elementSeletor.password);
  error.errorMessageInElement(staticName.parentElementSeletor.password, errorMessage.loginFail.password);
}

email.addEventListener("focusout", () => handleFocusOutForEmail(
  email,
  staticName.elementSeletor.email,
  staticName.parentElementSeletor.email,
  errorMessage.isEmpty.email,
  errorMessage.notCorrectFormat.email
));
password.addEventListener("focusout", () => notInput(
  password, 
  staticName.elementSeletor.password, 
  staticName.parentElementSeletor.password, 
  errorMessage.isEmpty.password
));
email.addEventListener("focusin", () => handleFocusIn(staticName.parentElementSeletor.email));
password.addEventListener("focusin", () => handleFocusIn(staticName.parentElementSeletor.password));
loginButton.addEventListener("click", routefolderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", () => togglePassword(password, passwordIcon));
document.addEventListener('DOMContentLoaded', hasTokenInStorage);