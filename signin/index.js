/////////////모듈러하게 작성한 파일
import {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  toggleErrorVisibility,
} from "./common.js";

window.onload = function () {
  // 로컬 스토리지에서 accessToken 가져오기
  const storedAccessToken = localStorage.getItem("accessToken");

  // accessToken이 존재하는 경우 '/folder' 페이지로 이동
  if (storedAccessToken) {
    window.location.href = "../folder/index.html";
  }
};

/**
 * HTML DOM Elements
 */
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");
const loginButton = document.querySelector(".login-button");
const showPasswordButton = document.querySelectorAll(".eyeoff-button")[0];
const emailErrorMessage = document.querySelector(".email-error");
const pwErrorMessage = document.querySelector(".pw-error");

/**
 * UI Event Listeners
 */
emailInput.addEventListener("focusout", isValidEmail);
passwordInput.addEventListener("focusout", isValidPassword);
// emailInput.addEventListener("focusout", handleLogin);
// passwordInput.addEventListener("focusout", handleLogin);
loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  handleLogin(event);
});

//onSubmit을 활용하면 eyeoff-button이 클릭되는데 어떻게 해야 할까요?
emailInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    handleLogin(event);
  }
});
passwordInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    handleLogin(event);
  }
});

//이메일 에러 확인
function isValidEmail() {
  const email = emailInput.value;
  const isEmailEmpty = isEmpty(email);
  removeError(emailErrorMessage);
  if (isEmailEmpty) {
    toggleError(emailErrorMessage, "이메일을 입력해 주세요.");
    return false;
  }
  const isValidEmailFormat = isEmailFormat(email);
  if (!isValidEmailFormat && !isEmailEmpty) {
    toggleError(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
    return false;
  }
  return true;
}

//비밀번호 에러 확인
function isValidPassword() {
  const password = passwordInput.value;
  removeError(pwErrorMessage);
  if (isEmpty(password)) {
    toggleError(pwErrorMessage, "비밀번호를 입력해 주세요.");
    return false;
  }
  removeError(pwErrorMessage);
  return true;
}

//이메일, 비밀번호가 회원 정보와 일치하는지 확인
async function isValidUser(loginInfo) {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const result = await response.json();
    const accessToken = result.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    location.href = "../folder/index.html";
    return true;
  } catch (err) {
    return false;
  }
}

//로그인 시도
async function handleLogin() {
  try {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (isValidEmail() && isValidPassword()) {
      const loginInfo = { email: email, password: password };
      const isValidUserResult = await isValidUser(loginInfo);
      if (!isValidUserResult) {
        toggleError(emailErrorMessage, "이메일을 확인해 주세요.");
        toggleError(pwErrorMessage, "비밀번호를 확인해 주세요.");
      }
    }
  } catch (err) {
    console.log(err);
  }
}

//눈모양 아이콘

showPasswordButton.addEventListener("click", function (event) {
  event.preventDefault();
  toggleErrorVisibility(passwordInput, showPasswordButton);
});
