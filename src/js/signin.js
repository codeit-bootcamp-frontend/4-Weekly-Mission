import {
  EMPTY_MESSAGE,
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_WRONG_EMAIL,
  ERROR_MESSAGE_WRONG_PASSWORD,
  GET_ERROR_MESSAGE_SPAN,
} from "./constant.js";
import {
  isFilledInput,
  isValidEmailForm,
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
  const errorMessageSpan = GET_ERROR_MESSAGE_SPAN(e.target);

  const isFilled = isFilledInput(e.target);
  const isValidForm = isValidEmailForm(e.target);

  if (isFilled && isValidForm) {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
  } else {
    e.target.classList.add("error_input");
    if (!isFilled) {
      errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_EMAIL;
    } else if (!isValidForm) {
      errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_EMAIL;
    }
  }
};

const checkPasswordIsValid = (e) => {
  const errorMessageSpan = GET_ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  const isFilled = isFilledInput(e.target);

  if (!isFilled) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
    return;
  }
  errorMessageSpan.textContent = EMPTY_MESSAGE;
  e.target.classList.remove("error_input");
  iconEye.classList.remove("large_bottom");
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
    .then((response) => response.json())
    .then((result) => result?.["data"])
    .then((data) => {
      localStorage.setItem("accessToken", data["accessToken"]);
      location.href = "folder.html";
    })
    .catch(() => {
      const errorMessageSpanEmail = GET_ERROR_MESSAGE_SPAN(inputEmail);
      const errorMessageSpanPassword = GET_ERROR_MESSAGE_SPAN(inputPassword);
      const iconEye = inputPassword.parentElement.querySelector(".btn_eye");

      errorMessageSpanEmail.textContent = ERROR_MESSAGE_WRONG_EMAIL;
      inputEmail.classList.add("error_input");

      errorMessageSpanPassword.textContent = ERROR_MESSAGE_WRONG_PASSWORD;
      inputPassword.classList.add("error_input");
      iconEye.classList.add("large_bottom");
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
