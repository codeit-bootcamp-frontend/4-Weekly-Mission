import { ERROR_MESSAGE, TEST_USER } from "./constant.js";
import { emailCheck, passwordCheck } from "./utils.js";

const setError = (currentElement, errorTextElement, errorMessage) => {
  currentElement.classList.add("errorInput");
  errorTextElement.textContent = errorMessage;
};
const removeError = (currentElement, errorTextElement) => {
  currentElement.classList.remove("errorInput");
  errorTextElement.textContent = "";
};

const confirmUserLogin = (currentElement, emailErrorElement, passwordErrorElement) => {
  const email = currentElement[0];
  const password = currentElement[1];

  if (email.value === TEST_USER.ID && password.value === TEST_USER.PASSWORD) {
    window.location.href = "/folder";
  } else {
    setError(email, emailErrorElement, ERROR_MESSAGE.CONFIRM_EMAIL);
    setError(password, passwordErrorElement, ERROR_MESSAGE.CONFIRM_PASSWORD);
  }
};
const confirmEmail = (emailElement, emailErrorElement) => {
  if (!emailCheck(emailElement.value) || emailElement.value === TEST_USER.ID) {
    setError(emailElement, emailErrorElement, ERROR_MESSAGE.CONFIRM_EMAIL);
    return false;
  } else {
    removeError(emailElement, emailErrorElement);
    return true;
  }
};
const confirmPassword = (passwordElement, passwordErrorElement) => {
  if (!passwordCheck(passwordElement.value)) {
    setError(passwordElement, passwordErrorElement, ERROR_MESSAGE.CONFIRM_PASSWORD);
    return false;
  } else {
    removeError(passwordElement, passwordErrorElement);
    return true;
  }
};
const confirmPasswordCheck = (pwElement, pwCheckElement, pwCheckErrorElement) => {
  if (pwElement.value !== pwCheckElement.value) {
    setError(pwCheckElement, pwCheckErrorElement, ERROR_MESSAGE.CONFIRM_PASSWORD);
    return false;
  } else {
    removeError(pwCheckElement, pwCheckErrorElement);
    return true;
  }
};

const registerUser = () => {
  window.location.href = "/folder";
};

const toggleEye = (currentPassword, currentEye) => {
  currentEye.classList.toggle("on");
  if (currentEye.classList.contains("on")) {
    currentPassword.removeAttribute("type");
  } else {
    currentPassword.setAttribute("type", "password");
  }
};

export {
  setError,
  removeError,
  confirmUserLogin,
  confirmEmail,
  confirmPassword,
  confirmPasswordCheck,
  registerUser,
  toggleEye,
};
