/////////////모듈러하게 작성한 파일
import {
  isEmailFormat,
  isEmpty,
  removeError,
  toggleError,
  showHidePassword,
} from "./common.js";

// window.onload = function () {
//   // 로컬 스토리지에서 accessToken 가져오기
//   const storedAccessToken = localStorage.getItem("accessToken");

//   // accessToken이 존재하는 경우 '/folder' 페이지로 이동
//   if (storedAccessToken) {
//     window.location.href = "../folder/index.html";
//   }
// };

window.addEventListener("load", function (e) {
  const storedAccessToken = localStorage.getItem("accessToken");

  if (!storedAccessToken) {
    //안티패턴 활용
    return null;
  }

  return (window.location.href = "../folder/index.html");
});

/**
 * HTML DOM Elements
 */
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#pw-input");
const loginButton = document.querySelector(".login-button");
const eyeImgElement =
  document.querySelectorAll(".eyeoff-button")[0].firstElementChild;
const emailErrorMessage = document.querySelector(".email-error");
const pwErrorMessage = document.querySelector(".pw-error");
const signinFormElement = document.querySelector(".signin-form");
/**
 * UI Event Listeners
 */
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
loginButton.addEventListener("click", handleLogin);

//onSubmit을 활용하면 eyeoff-button이 클릭되는데 어떻게 해야 할까요?
// emailInput.addEventListener("keypress", function (event) {
//   if (event.key == "Enter") {
//     event.preventDefault();
//     handleLogin(event);
//   }
// });
// passwordInput.addEventListener("keypress", function (event) {
//   if (event.key == "Enter") {
//     event.preventDefault();
//     handleLogin(event);
//   }
// });

signinFormElement.addEventListener("submit", handleLogin);

//이메일 에러 확인
function validateEmail() {
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
function validatePassword() {
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
      // throw new Error(response.statusText);
      // const errorResponse = await response.json();
      // const errorMessage = errorResponse.error.message;
      // throw new Error(errorMessage);
      //error을 던지면 서버 오류와 같이 처리되기 때문에 그냥 false를 리턴
      return false;
    }

    const result = await response.json();
    const accessToken = result.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    location.href = "../folder/index.html";
    return true;
  } catch (err) {
    alert("서버 오류가 발생했습니다.");
  }
}

//로그인 시도
async function handleLogin(e) {
  e.preventDefault();
  try {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (validateEmail() && validatePassword()) {
      const loginInfo = { email: email, password: password };
      const isValidUserResult = await isValidUser(loginInfo);
      //서버 오류가 발생하면 isValidUserResult가 undefined
      //회원가입 정보가 틀렸는데 서버 오류가 아닐 때
      if (!isValidUserResult && isValidUserResult !== undefined) {
        toggleError(emailErrorMessage, "이메일을 확인해 주세요.");
        toggleError(pwErrorMessage, "비밀번호를 확인해 주세요.");
      }
    }
  } catch (err) {
    console.log(err);
  }
}

//눈모양 아이콘

eyeImgElement.addEventListener("click", function (event) {
  event.preventDefault();
  showHidePassword(passwordInput, eyeImgElement);
});
