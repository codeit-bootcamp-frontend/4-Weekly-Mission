import { ERROR_MESSAGE, TEST_USER } from "./constant.js";
import {
  setError,
  removeError,
  confirmEmail,
  confirmPassword,
  confirmPasswordCheck,
  registerUser,
  isDuplicateEmail,
  toggleEye,
} from "./sign.js";
import { emailCheck, passwordCheck, checkAccessToken } from "./utils.js";

const formElement = document.querySelector(".sign-form");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const passwordCheckElement = document.getElementById("password-check");
const emailErrorElement = document.getElementById("emailErrorMessage");
const passwordErrorElement = document.getElementById("passwordErrorMessage");
const passwordCheckErrorElement = document.getElementById("passwordCheckErrorMessage");

const eyePassword = document.getElementById("eye-password");
const eyePasswordCheck = document.getElementById("eye-password-check");

const emailFocusOutHandler = async () => {
  if (!emailElement.value) {
    setError(emailElement, emailErrorElement, ERROR_MESSAGE.NO_INPUT_EMAIL);
  } else if (!emailCheck(emailElement.value)) {
    setError(emailElement, emailErrorElement, ERROR_MESSAGE.INVALID_EMAIL);
  } else {
    const isDuplicate = await isDuplicateEmail(email.value);
    if (!isDuplicate) {
      setError(emailElement, emailErrorElement, ERROR_MESSAGE.REGISTERED_EMAIL);
    } else {
      removeError(emailElement, emailErrorElement);
    }
  }
};

const passwordFocusOutHandler = () => {
  if (!passwordElement.value) {
    setError(passwordElement, passwordErrorElement, ERROR_MESSAGE.NO_INPUT_PASSWORD);
  } else if (!passwordCheck(passwordElement.value)) {
    setError(passwordElement, passwordErrorElement, ERROR_MESSAGE.INVALID_PASSWORD);
  } else {
    removeError(passwordElement, passwordErrorElement);
  }
};

const passwordCheckFocusOutHandler = () => {
  if (!passwordCheckElement.value) {
    setError(passwordCheckElement, passwordCheckErrorElement, ERROR_MESSAGE.NO_INPUT_PASSWORD);
  } else if (passwordElement.value !== passwordCheckElement.value) {
    setError(
      passwordCheckElement,
      passwordCheckErrorElement,
      ERROR_MESSAGE.DO_NOT_MATCH_PASSWORD
    );
  } else {
    removeError(passwordCheckElement, passwordCheckErrorElement);
  }
};

const submitRegisterForm = async (e) => {
  e.preventDefault();
  const isDuplicate = await isDuplicateEmail(email.value);
  if (
    isDuplicate &&
    confirmEmail(emailElement, emailErrorElement) &&
    confirmPassword(passwordElement, passwordErrorElement) &&
    confirmPasswordCheck(passwordElement, passwordCheckElement, passwordCheckErrorElement)
  ) {
    registerUser(emailElement.value, passwordElement.value);
  }
};

const eyePasswordHandler = () => {
  toggleEye(passwordElement, eyePassword);
};
const eyePasswordCheckHandler = () => {
  toggleEye(passwordCheckElement, eyePasswordCheck);
};

checkAccessToken("folder");
emailElement.addEventListener("focusout", emailFocusOutHandler);
passwordElement.addEventListener("focusout", passwordFocusOutHandler);
passwordCheckElement.addEventListener("focusout", passwordCheckFocusOutHandler);

formElement.addEventListener("submit", submitRegisterForm);
eyePassword.addEventListener("click", eyePasswordHandler);
eyePasswordCheck.addEventListener("click", eyePasswordCheckHandler);
