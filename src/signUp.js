import {
  noInputValue,
  isValidEmail,
  isValidPassword,
  confirmEmail,
  confirmPasswordMatch,
  confirmUserRegister,
  eyeClickHandler,
} from "./sign.js";

const formElement = document.querySelector(".sign-form");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const passwordConfirmElement = document.getElementById("password-check");
const eyePassword = document.getElementById("eye-password");
const eyePasswordCheck = document.getElementById("eye-password-check");

const focusOutHandler = (e) => {
  const currentInput = e.target;
  const isEmail = currentInput.type === "email";
  const isPassword = currentInput.id === "password";
  const isPasswordConfirm = currentInput.id === "password-check";

  if (!currentInput.value) {
    noInputValue(currentInput); //값이 없는지 확인
  } else if (isEmail) {
    isValidEmail(currentInput); //이메일 유효성 체크
    confirmEmail(currentInput); //사용중인 이메일인지 확인
  } else if (isPassword) {
    isValidPassword(currentInput); //비밀번호 유효성 체크
  } else if (isPasswordConfirm) {
    confirmPasswordMatch(currentInput); //비밀번호와 비밀번호 확인 일치 확인
  }
};

const submitRegisterForm = (e) => {
  e.preventDefault();
  confirmUserRegister(e.target);
};

emailElement.addEventListener("focusout", focusOutHandler);
passwordElement.addEventListener("focusout", focusOutHandler);
passwordConfirmElement.addEventListener("focusout", focusOutHandler);

formElement.addEventListener("submit", submitRegisterForm);
eyePassword.addEventListener("click", eyeClickHandler);
eyePasswordCheck.addEventListener("click", eyeClickHandler);
