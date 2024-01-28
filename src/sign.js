import {
  ERROR_MESSAGE,
  TEST_USER,
  emailCheck,
  passwordCheck,
} from "./constant.js";

const setErrorMessage = (currentElement, errorMsg) => {
  currentElement.classList.add("errorInput");
  currentElement.nextElementSibling.textContent = errorMsg;
};
const removeErrorMessage = (currentElement) => {
  currentElement.classList.remove("errorInput");
  currentElement.nextElementSibling.textContent = "";
};

const noInputValue = (currentElement) => {
  const noInputText =
    currentElement.type === "email"
      ? ERROR_MESSAGE.NO_INPUT_EMAIL
      : ERROR_MESSAGE.NO_INPUT_PASSWORD;
  if (!currentElement.value) {
    setErrorMessage(currentElement, noInputText);
  }
};

const isValidEmail = (currentElement) => {
  if (!emailCheck(currentElement.value)) {
    setErrorMessage(currentElement, ERROR_MESSAGE.INVALID_EMAIL);
  } else {
    removeErrorMessage(currentElement);
  }
};
const isValidPassword = (currentElement) => {
  if (!passwordCheck(currentElement.value)) {
    setErrorMessage(currentElement, ERROR_MESSAGE.INVALID_PASSWORD);
  } else {
    removeErrorMessage(currentElement);
  }
};

const confirmEmail = (currentElement) => {
  if (currentElement.value === TEST_USER.ID) {
    setErrorMessage(currentElement, ERROR_MESSAGE.REGISTERED_EMAIL);
  }
};
const confirmPasswordMatch = (currentElement) => {
  const passwordElement = document.getElementById("password");

  if (currentElement.value !== passwordElement.value) {
    setErrorMessage(currentElement, ERROR_MESSAGE.DO_NOT_MATCH_PASSWORD);
  } else {
    removeErrorMessage(currentElement);
  }
};
const confirmUserLogin = (currentElement) => {
  const email = currentElement[0];
  const password = currentElement[1];

  if (email.value === TEST_USER.ID && password.value === TEST_USER.PASSWORD) {
    window.location.href = "/folder";
  } else {
    setErrorMessage(email, ERROR_MESSAGE.CONFIRM_EMAIL);
    setErrorMessage(password, ERROR_MESSAGE.CONFIRM_PASSWORD);
  }
};
const confirmForm = (currentForm) => {
  const emailElement = currentForm[0];
  const passwordElement = currentForm[1];
  const passwordConfirmElement = currentForm[2];

  if (!emailCheck(emailElement.value) || emailElement.value === TEST_USER.ID) {
    setErrorMessage(emailElement, ERROR_MESSAGE.CONFIRM_EMAIL);
  }
  if (!passwordCheck(passwordElement.value)) {
    setErrorMessage(password, ERROR_MESSAGE.CONFIRM_PASSWORD);
  }
  if (passwordElement.value !== passwordConfirmElement.value) {
    setErrorMessage(passwordConfirmElement, ERROR_MESSAGE.CONFIRM_PASSWORD);
  }
};

const confirmUserRegister = (currentElement) => {
  confirmForm(currentElement);
  const elementsArr = [...currentElement];
  const satisfy = elementsArr.some((element) =>
    element.classList.contains("errorInput")
  );
  if (!satisfy) {
    window.location.href = "/folder";
  }
};

const eyeClickHandler = (e) => {
  const currentPassword = e.target.parentElement.children[1];
  e.target.classList.toggle("on");
  if (e.target.classList.contains("on")) {
    currentPassword.removeAttribute("type");
  } else {
    currentPassword.setAttribute("type", "password");
  }
};

export {
  noInputValue,
  isValidEmail,
  isValidPassword,
  confirmEmail,
  confirmPasswordMatch,
  confirmUserLogin,
  confirmUserRegister,
  eyeClickHandler,
  removeErrorMessage,
};
