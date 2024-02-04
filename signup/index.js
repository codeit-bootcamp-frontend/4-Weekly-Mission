import { errorElement } from "../src/element.js";
import { staticName, errorMessage } from "../src/static.js";
import {
  handleFocusIn,
  handleFocusOutForEmail,
  handleFocusOutForPassword,
  togglePassword,
  hasTokenInStorage
} from "../src/eventHandler.js"; // 공통 핸들러 호출
import { 
  requestAleadyUse, 
  requestSignup 
} from "../src/api/request.js";
import { urls } from "../src/api/url.js";

// 체인지 이벤트 : 이메일 중복을 검증한다.
async function aleadyUse(emailElement, aleadyUseUrl) {
  const isAleadyUse = await requestAleadyUse(emailElement, aleadyUseUrl);
  if (isAleadyUse === true) {
    loginDuplication();
  }
}

function loginDuplication() {
  //errorElement.removeErrorElement(staticName.parentElementSeletor.email);
  //errorElement.removeErrorBorder(staticName.elementSeletor.email);

  errorElement.createErrorSpanElement(staticName.parentElementSeletor.email);
  errorElement.errorBorder(staticName.elementSeletor.email);
  errorElement.errorMessageInElement(staticName.parentElementSeletor.email, errorMessage.aleadyUseEmail);
}

// 체인지 이벤트 : 비밀 번호와 비밀 번호 확인이 같은지 검증한다.
function passwordIsNotEqual(passwordElement, passwordConfirmElement) {
  errorElement.removeErrorElement(staticName.parentElementSeletor.passwordConfirm);
  errorElement.removeErrorBorder(staticName.elementSeletor.passwordConfirm);

  if (passwordElement.value !== passwordConfirmElement.value) {
    errorElement.createErrorSpanElement(staticName.parentElementSeletor.passwordConfirm);
    errorElement.errorBorder(staticName.elementSeletor.passwordConfirm);
    errorElement.errorMessageInElement(staticName.parentElementSeletor.passwordConfirm, errorMessage.passwordIsNotEqual);
  }
}

// 키보드 이벤트 : 엔터를 누르면, 회원가입을 시도한다.
function pressEnterForsignup(e, emailElement, passwordElement, passwordConfirmElement, signupUrl) {
  if (e.key === "Enter") {
    signupCheck(emailElement, passwordElement, passwordConfirmElement, signupUrl);
  }
}

// 클릭 이벤트: 회원가입을 시도한다.
async function signupCheck(emailElement, passwordElement, passwordConfirmElement, signupUrl) {
  handleFocusOutForEmail(
    email,
    staticName.elementSeletor.email,
    staticName.parentElementSeletor.email,
    errorMessage.isEmpty.email,
    errorMessage.notCorrectFormat.email
  )
  handleFocusOutForPassword(
    password,
    staticName.elementSeletor.password, 
    staticName.parentElementSeletor.password, 
    errorMessage.isEmpty.password,
    errorMessage.notCorrectFormat.password
  )
  passwordIsNotEqual(passwordElement, passwordConfirmElement);

  await requestSignup(emailElement, passwordElement, signupUrl);
}

// 선언을 아래에서 한다: 전역 객체를 함수에서 접근하지 않는다.
const email = document.querySelector(staticName.elementSeletor.email);
const password = document.querySelector(staticName.elementSeletor.password);
const passwordConfirm = document.querySelector(staticName.elementSeletor.passwordConfirm);
const passwordIcon = document.querySelector(staticName.iconSelector.password);
const passwordConfimIcon = document.querySelector(staticName.iconSelector.passwordConfirm);
const loginButton = document.querySelector(staticName.buttonSelector.signup);

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
email.addEventListener("change", () => aleadyUse(email, urls.aleadyUse));
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
passwordConfirm.addEventListener("change", () => passwordIsNotEqual(password, passwordConfirm));
loginButton.addEventListener("click", () => signupCheck(email, password, passwordConfirm, urls.signup));
passwordConfirm.addEventListener("keydown", () => pressEnterForsignup(email, password, passwordConfirm, urls.signup));
passwordIcon.addEventListener("click", () => togglePassword(password, passwordIcon));
passwordConfimIcon.addEventListener("click", () => togglePassword(passwordConfirm, passwordConfimIcon));
document.addEventListener('DOMContentLoaded', hasTokenInStorage);