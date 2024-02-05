import { emailMsg, passwordMsg, passwordCheckMsg, passwordInput } from "../elements.js";
import { ERROR_MESSAGES } from "./messages.js";
import { changeInputColor } from "./changeInputColor.js";
import { isPasswordCorrect } from "./isPasswordCorrect.js";
import { isValidEmail, isValidPassword } from "./validator.js";

/**
 * 이메일을 입력하지 않았거나 유효하지 않은 이메일을 입력했을 때 에러메시지를 띄웁니다.
 * @param {string} value - 이메일
 */
const getEmailError = (value) => {
  if (!value) return ERROR_MESSAGES.emptyEmail;
  if (!isValidEmail(value)) return ERROR_MESSAGES.invalidEmail;
  return "";
};

const signin = {
  /**
   * 비밀번호를 입력하지 않았을 때 에러메시지를 띄웁니다.
   * @param {string} value - 비밀번호
   */
  getPasswordError(value) {
    return value ? "" : ERROR_MESSAGES.emptyPassword;
  },
};

const signup = {
  /**
   * 유효하지 않은 비밀번호를 입력했을 때 에러메시지를 띄웁니다.
   * @param {string} value - 비밀번호
   */
  getPasswordError(value) {
    if (!isValidPassword(value)) return ERROR_MESSAGES.invalidPassword;
    return "";
  },
  /**
   * 비밀번호와 확인 비밀번호가 일치하지 않으면 에러메시지를 띄웁니다.
   * @param {string} value - 확인 비밀번호
   */
  getPasswordIncorrectError(value) {
    if (!isPasswordCorrect(passwordInput.value, value)) return ERROR_MESSAGES.incorrectPassword;
    return "";
  },
};

/**
 * input 요소에 focusout 이벤트가 발생 시 조건을 확인 후 에러메시지를 띄웁니다.
 * @param {HTMLElement} target - Element
 */
export const showErrorMsgSignin = ({ target }) => {
  const { value, classList } = target;

  let errorMsg = "";
  if (classList.contains("input-email")) {
    errorMsg = getEmailError(value);
  } else if (classList.contains("input-pw")) {
    errorMsg = signin.getPasswordError(value);
  }

  const messageElement = classList.contains("input-email") ? emailMsg : passwordMsg;

  messageElement.innerHTML = errorMsg;
  changeInputColor(messageElement, target);
};

/**
 * input 요소에 focusout 이벤트가 발생 시 조건을 확인 후 에러메시지를 띄웁니다.
 * @param {HTMLElement} target - Element
 */
export const showErrorMsgSignup = ({ target }) => {
  const { value, classList } = target;

  let errorMsg = "";
  if (classList.contains("input-email")) {
    errorMsg = getEmailError(value);
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
