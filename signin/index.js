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
} from "../src/eventHandler.js";

const error = new Error(true);

const email = document.querySelector(staticName.elementSeletor.email);
const password = document.querySelector(staticName.elementSeletor.password);
const loginButton = document.querySelector(staticName.buttonSelector.signin);
const passwordIcon = document.querySelector(staticName.iconSelector.password);

function noInputFocusOut(element, parentElementSelectorName, inputSelectorName, errorSentence) {
  error.removeErrorElement(parentElementSelectorName);

  if (element.value === "") {
    error.createErrorSpanElement(parentElementSelectorName);
    errorBorder(inputSelectorName)
    error.errorMessageInElement(parentElementSelectorName, errorSentence);
  }
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    folderPage();
  }
}

function folderPage() {
  if (email.value === superUser.email && password.value === superUser.password) {
    requestLogin();
  } else {
    loginFail();
  } 
}

function requestLogin() {
  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(superUser),
  })
  .then((response) => {
    if (response.status === 200) {
      return response.text();
    } else {
      console.error('서버 응답이 성공적이지 않습니다. 상태 코드:', response.status);
    }
  })
  .then((result) => {
    const jsonToObject = JSON.parse(result);
    const accessToken = jsonToObject.data.accessToken;
    localStorage.setItem("accessToken", accessToken);

    window.location.replace("../folder");
  })
  .catch((error) => {
    // fetch 요청 자체가 실패한 경우에 대한 처리
    console.error('fetch 요청 실패:', error);
  });
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
loginButton.addEventListener("click", folderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", () => togglePassword(password, passwordIcon));
document.addEventListener('DOMContentLoaded', function() {
  // 로컬 스토리지에서 accessToken을 가져옵니다.
  const accessToken = localStorage.getItem('accessToken');

  // 만약 accessToken이 있다면 "/folder" 페이지로 리다이렉트합니다.
  if (accessToken) {
    window.location.href = '../folder';
  }
});