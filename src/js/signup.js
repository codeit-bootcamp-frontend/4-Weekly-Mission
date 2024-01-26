import {
  CHECK_EMPTY_INPUT,
  EMPTY_MESSAGE,
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_EXISTING_EMAIL,
  ERROR_MESSAGE_INCONSISTENT_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_INVALID_PASSWORD,
  ERROR_MESSAGE_SPAN,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  TEST_USER_EMAIL,
} from "./constant.js";

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputPasswordCheck = document.querySelector("#password_check");

const checkEmailIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  let isValid = false;

  if (CHECK_EMPTY_INPUT(e.target)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_EMAIL;
    e.target.classList.add("error_input");
  } else if (!REGEX_EMAIL.test(e.target.value)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_EMAIL;
    e.target.classList.add("error_input");
  } else if (e.target.value === TEST_USER_EMAIL) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EXISTING_EMAIL;
    e.target.classList.add("error_input");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    isValid = true;
  }
  return isValid;
};

const checkPasswordIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  let isValid = false;

  if (CHECK_EMPTY_INPUT(e.target)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else if (!REGEX_PASSWORD.test(e.target.value)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
    isValid = true;
  }
  return isValid;
};

const checkPasswordCheckIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  let isValid = false;

  if (e.target.value !== inputPassword.value) {
    errorMessageSpan.textContent = ERROR_MESSAGE_INCONSISTENT_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
    isValid = true;
  }
  return isValid;
};

inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);
inputPasswordCheck.addEventListener("focusout", checkPasswordCheckIsValid);
