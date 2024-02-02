import {
  Error,
  resetErrorElement,
  errorBorder,
} from "../src/element.js";

const superUser = { 
  email: "test@codeit.com",
  password: "sprint101"
}

const error = new Error(true);

const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const loginButton = document.querySelector(".button-login");
const passwordIcon = document.querySelector(".password-icon");

function noInputFocusOut(element, parentElementSelectorName, inputSelectorName, errorSentence) {
  error.removeErrorElement(parentElementSelectorName);

  if (element.value === "") {
    error.createErrorSpanElement(parentElementSelectorName);
    errorBorder(inputSelectorName)
    error.errorMessageInElement(parentElementSelectorName, errorSentence);
  }
}

function notValidEmailInput() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "") {
    return;
  }

  error.removeErrorElement(".input-form-email");
  
  if (emailRegex.test(email.value)) {
    return
  } else {
    error.createErrorSpanElement(".input-form-email");
    errorBorder(".input-email");
    error.errorMessageInElement(".input-form-email", "올바른 이메일 주소가 아닙니다");
  }
}

function focusIn(parentElementSelectorName) {
  resetErrorElement(parentElementSelectorName)
}

function pressEnterForFolderPage(e) {
  if (e.key === "Enter") {
    folderPage();
  }
}

function folderPage() {
  const folderEmail = "test@codeit.com";
  const folderPassword = "codeit101";

  if (email.value === folderEmail && password.value === folderPassword) {
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

email.addEventListener("focusout", () => noInputFocusOut(email, ".input-form-email", ".input-email", "이메일을 입력해 주세요"));
password.addEventListener("focusout", () => noInputFocusOut(password, ".input-form-password", ".input-password", "비밀번호를 입력해 주세요"));
email.addEventListener("input", notValidEmailInput);
email.addEventListener("focusin", () => focusIn(".input-form-email"));
password.addEventListener("focusin", () => focusIn(".input-form-password"));
loginButton.addEventListener("click", folderPage);
password.addEventListener("keydown", pressEnterForFolderPage);
passwordIcon.addEventListener("click", togglePassword);
document.addEventListener('DOMContentLoaded', function() {
  // 로컬 스토리지에서 accessToken을 가져옵니다.
  const accessToken = localStorage.getItem('accessToken');

  // 만약 accessToken이 있다면 "/folder" 페이지로 리다이렉트합니다.
  if (accessToken) {
    window.location.href = '../folder';
  }
});