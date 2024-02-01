import {
  noInputValue,
  isValidEmail,
  removeErrorMessage,
  confirmUserLogin,
  eyeClickHandler,
} from "./sign.js";

const formElement = document.querySelector(".sign-form");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const eyePassword = document.querySelector(".eye");

const focusOutHandler = (e) => {
  const currentInput = e.target;
  if (!currentInput.value) {
    noInputValue(currentInput); //값이 없는지 확인
  } else if (currentInput.type === "email") {
    isValidEmail(currentInput); //이메일 유효성 체크
  } else {
    removeErrorMessage(currentInput);
  }
};

const submitLoginForm = (e) => {
  e.preventDefault();
  confirmUserLogin(e.target);
};

emailElement.addEventListener("focusout", focusOutHandler);
passwordElement.addEventListener("focusout", focusOutHandler);

formElement.addEventListener("submit", submitLoginForm);
eyePassword.addEventListener("click", eyeClickHandler);
