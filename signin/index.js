import { errorElement } from "../src/element.js";
import { staticName, errorMessage } from "../src/static.js";
import {
  handleFocusIn,
  handleFocusOutForEmail,
  notInput,
  togglePassword,
  hasTokenInStorage
} from "../src/eventHandler.js"; // 공통 핸들러 호출
import { requestLogin } from "../src/api/request.js";

// 키보드 이벤트 : 엔터를 누르면, 로그인을 시도한다.
function pressEnterForsignin(e, emailElement, passwordElement) {
  if (e.key === "Enter") {
    signinCheck(emailElement, passwordElement);
  }
}

// 클릭 이벤트: 로그인을 시도한다.
async function signinCheck(emailElement, passwordElement) {
  try {
    await requestLogin(emailElement, passwordElement);
    window.location.replace("../folder");
  } catch {
    loginFail();
  }
}

function loginFail() {
  errorElement.removeErrorElement(staticName.parentElementSeletor.email);
  errorElement.removeErrorBorder(staticName.elementSeletor.email);
  errorElement.createErrorSpanElement(staticName.parentElementSeletor.email);
  errorElement.errorBorder(staticName.elementSeletor.email);
  errorElement.errorMessageInElement(staticName.parentElementSeletor.email, errorMessage.loginFail.email);

  errorElement.removeErrorElement(staticName.parentElementSeletor.password);
  errorElement.removeErrorBorder(staticName.elementSeletor.password);
  errorElement.createErrorSpanElement(staticName.parentElementSeletor.password);
  errorElement.errorBorder(staticName.elementSeletor.password);
  errorElement.errorMessageInElement(staticName.parentElementSeletor.password, errorMessage.loginFail.password);
}

// 선언을 아래에서 한다: 전역 객체를 함수에서 접근하지 않는다.
const email = document.querySelector(staticName.elementSeletor.email);
const password = document.querySelector(staticName.elementSeletor.password);
const loginButton = document.querySelector(staticName.buttonSelector.signin);
const passwordIcon = document.querySelector(staticName.iconSelector.password);

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
loginButton.addEventListener("click", () => signinCheck(email, password));
password.addEventListener("keydown", () => pressEnterForsignin(email, password));
passwordIcon.addEventListener("click", () => togglePassword(password, passwordIcon));
document.addEventListener('DOMContentLoaded', hasTokenInStorage);