import { changeInputColor } from "./changeInputColor.js";
import { emailMsg, passwordMsg, passwordCheckMsg, passwordInput } from "../elements.js";
import { isValidEmail, isValidPassword } from "./validator.js";
import { isUseAlready } from "./isUseAlready.js";
import { isPasswordCorrect } from "./isPasswordCorrect.js";
import { ERROR_MESSAGES } from "./messages.js";

const signin = {
  getEmailError(value) {
    if (!value) return ERROR_MESSAGES.emptyEmail;
    if (!isValidEmail(value)) return ERROR_MESSAGES.invalidEmail;
    return "";
  },
  getPasswordError(value) {
    return value ? "" : ERROR_MESSAGES.emptyPassword;
  },
};

const signup = {
  getEmailError(value) {
    if (!value) return ERROR_MESSAGES.emptyEmail;
    if (!isValidEmail(value)) return ERROR_MESSAGES.invalidEmail;
    if (isUseAlready(value)) return ERROR_MESSAGES.alreadyInUse;
    return "";
  },
  getPasswordError(value) {
    if (!isValidPassword(value)) return ERROR_MESSAGES.invalidPassword;
    return "";
  },
  getPasswordIncorrectError(value) {
    if (!isPasswordCorrect(passwordInput.value, value)) return ERROR_MESSAGES.incorrectPassword;
    return "";
  },
};

export const showErrorMsgSignin = ({ target }) => {
  const { value, classList } = target;

  let errorMsg = "";
  if (classList.contains("input-email")) {
    errorMsg = signin.getEmailError(value);
  } else if (classList.contains("input-pw")) {
    errorMsg = signin.getPasswordError(value);
  }

  const messageElement = classList.contains("input-email") ? emailMsg : passwordMsg;

  messageElement.innerHTML = errorMsg;
  changeInputColor(messageElement, target);
};

export const showErrorMsgSignup = ({ target }) => {
  const { value, classList } = target;

  let errorMsg = "";
  if (classList.contains("input-email")) {
    errorMsg = signup.getEmailError(value);
  } else if (classList.contains("input-pw")) {
    errorMsg = signup.getPasswordError(value);
  } else if (classList.contains("input-pw-check")) {
    errorMsg = signup.getPasswordIncorrectError(value);
  }

  let messageElement;
  if (classList.contains("input-email")) messageElement = emailMsg;
  else if (classList.contains("input-pw")) messageElement = passwordMsg;
  else if (classList.contains("input-pw-check")) messageElement = passwordCheckMsg;

  messageElement.innerHTML = errorMsg;
  changeInputColor(messageElement, target);
};
