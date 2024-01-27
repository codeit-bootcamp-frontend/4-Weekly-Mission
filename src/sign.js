import { ERROR_MESSAGE, TEST_USER, emailCheck } from "./constant.js";

const formElement = document.querySelector(".sign-form");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const eyeImg = document.querySelector(".eye");

const focusOutHandler = (e) => {
  const currentInput = e.target;
  const currentValue = currentInput.value;
  const currentClassList = currentInput.classList;
  const errorMsgElement = currentInput.nextElementSibling;

  const isEmail = currentInput.type === "email";
  const noInputText = isEmail
    ? ERROR_MESSAGE.NO_INPUT_EMAIL
    : ERROR_MESSAGE.NO_INPUT_PASSWORD;

  if (!currentValue) {
    currentClassList.add("errorInput");
    errorMsgElement.textContent = noInputText;
  } else if (isEmail && !emailCheck(currentValue)) {
    currentClassList.add("errorInput");
    errorMsgElement.textContent = ERROR_MESSAGE.INVALID_EMAIL;
  } else {
    currentClassList.remove("errorInput");
    errorMsgElement.textContent = "";
  }
};

const submitForm = (e) => {
  const emailInput = e.target[0];
  const passwordInput = e.target[1];

  e.preventDefault();
  console.log();
  if (
    emailInput.value === TEST_USER.ID &&
    passwordInput.value === TEST_USER.PASSWORD
  ) {
    window.location.href = "/folder";
  } else {
    emailInput.nextElementSibling.textContent = ERROR_MESSAGE.CONFIRM_EMAIL;
    passwordInput.nextElementSibling.textContent =
      ERROR_MESSAGE.CONFIRM_PASSWORD;
    emailInput.classList.add("errorInput");
    passwordInput.classList.add("errorInput");
  }
};

const eyeClickHandler = () => {
  eyeImg.classList.toggle("on");
  if (eyeImg.classList.contains("on")) {
    password.removeAttribute("type");
  } else {
    password.setAttribute("type", "password");
  }
};

emailElement.addEventListener("focusout", focusOutHandler);
passwordElement.addEventListener("focusout", focusOutHandler);

formElement.addEventListener("submit", submitForm);
eyeImg.addEventListener("click", eyeClickHandler);
