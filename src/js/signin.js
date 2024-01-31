import {
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_WRONG_EMAIL,
  ERROR_MESSAGE_WRONG_PASSWORD,
} from "./constant.js";
import {
  isFilledInput,
  isValidEmailForm,
  showEmailError,
  showPasswordError,
  toggleViewPassword,
} from "./authFunctions.js";

const form = document.querySelector("form");

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnSignInSubmit = document.querySelector("#btn_signin_submit");

const btnEye = document.querySelector(".btn_eye");

// localStorage에 accessToken이 존재할 경우 /folder로 이동
if (localStorage.getItem("accessToken")) {
  location.href = "folder.html";
}

const checkEmailIsValid = (e) => {
  const isFilled = isFilledInput(e.target);
  const isValidForm = isValidEmailForm(e.target);

  if (!isFilled) {
    showEmailError(true, e.target, ERROR_MESSAGE_EMPTY_EMAIL);
    return;
  } else if (!isValidForm) {
    showEmailError(true, e.target, ERROR_MESSAGE_INVALID_EMAIL);
    return;
  }
  showEmailError(false, e.target);
};

const checkPasswordIsValid = (e) => {
  const isFilled = isFilledInput(e.target);

  if (!isFilled) {
    showPasswordError(true, e.target, ERROR_MESSAGE_EMPTY_PASSWORD);
    return;
  }
  showPasswordError(false, e.target);
};

const handleSignIn = (e) => {
  e.preventDefault();

  const credentials = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Login Error");
      }
    })
    .then((result) => result?.["data"])
    .then((data) => {
      if (data) {
        showEmailError(false, inputEmail);
        showPasswordError(false, inputPassword);

        localStorage.setItem("accessToken", data["accessToken"]);
        location.href = "folder.html";
      }
    })
    .catch((error) => {
      if (error.message === "Login Error") {
        // 로그인 API 요청시 발생한 에러일 경우에만 에러 표시
        showEmailError(true, inputEmail, ERROR_MESSAGE_WRONG_EMAIL);
        showPasswordError(true, inputPassword, ERROR_MESSAGE_WRONG_PASSWORD);
      } else {
        console.log(error.message);
      }
    });
};

// 에러 표시 이벤트
inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);

// 폼 제출 이벤트
btnSignInSubmit.addEventListener("click", handleSignIn);
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSignIn(e);
  }
});

// 비밀번호 노출/가림 이벤트
btnEye.addEventListener("click", function (e) {
  toggleViewPassword(e.target);
});
