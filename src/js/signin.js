import {
  CHECK_EMPTY_INPUT,
  EMPTY_MESSAGE,
  ERROR_MESSAGE_EMPTY_EMAIL,
  ERROR_MESSAGE_EMPTY_PASSWORD,
  ERROR_MESSAGE_INVALID_EMAIL,
  ERROR_MESSAGE_SPAN,
  ERROR_MESSAGE_WRONG_EMAIL,
  ERROR_MESSAGE_WRONG_PASSWORD,
  REGEX_EMAIL,
  TEST_USER_EMAIL,
  TEST_USER_PASSWORD,
} from "./constant.js";

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnSigninSubmit = document.querySelector("#btn_signin_submit");
const form = document.querySelector("form");

const btnEye = document.querySelector(".btn_eye");

const checkEmailIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);

  if (CHECK_EMPTY_INPUT(e.target)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_EMAIL;
    e.target.classList.add("error_input");
  } else if (!REGEX_EMAIL.test(e.target.value)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_INVALID_EMAIL;
    e.target.classList.add("error_input");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
  }
};

const checkPasswordIsValid = (e) => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(e.target);
  const iconEye = e.target.parentElement.querySelector(".btn_eye");

  if (CHECK_EMPTY_INPUT(e.target)) {
    errorMessageSpan.textContent = ERROR_MESSAGE_EMPTY_PASSWORD;
    e.target.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    e.target.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
  }
};

const compareEmail = () => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(inputEmail);
  if (inputEmail.value !== TEST_USER_EMAIL) {
    errorMessageSpan.textContent = ERROR_MESSAGE_WRONG_EMAIL;
    inputEmail.classList.add("error_input");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    inputEmail.classList.remove("error_input");
  }
  return inputEmail.value === TEST_USER_EMAIL;
};

const comparePassword = () => {
  const errorMessageSpan = ERROR_MESSAGE_SPAN(inputPassword);
  const iconEye = inputPassword.parentElement.querySelector(".btn_eye");
  if (inputPassword.value !== TEST_USER_PASSWORD) {
    errorMessageSpan.textContent = ERROR_MESSAGE_WRONG_PASSWORD;
    inputPassword.classList.add("error_input");
    iconEye.classList.add("large_bottom");
  } else {
    errorMessageSpan.textContent = EMPTY_MESSAGE;
    inputPassword.classList.remove("error_input");
    iconEye.classList.remove("large_bottom");
  }
  return inputPassword.value === TEST_USER_PASSWORD;
};

const compareUser = (e) => {
  e.preventDefault();
  const isCorrectEmail = compareEmail();
  const isCorrectPassword = comparePassword();

  if (isCorrectEmail && isCorrectPassword) {
    form.submit();
  }
};

const toggleViewPassword = (e) => {
  if (inputPassword.getAttribute("type") === "password") {
    inputPassword.setAttribute("type", "text");
    e.target.setAttribute("src", "resource/eye_open_icon.png");
  } else {
    inputPassword.setAttribute("type", "password");
    e.target.setAttribute("src", "resource/eye_close_icon.png");
  }
};

inputEmail.addEventListener("focusout", checkEmailIsValid);
inputPassword.addEventListener("focusout", checkPasswordIsValid);

btnSigninSubmit.addEventListener("click", compareUser);
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    compareUser(e);
  }
});

btnEye.addEventListener("click", toggleViewPassword);
