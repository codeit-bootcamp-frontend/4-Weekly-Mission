const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
const PASSWORD_REGEX_STRING = new RegExp(/[a-zA-Z]/);
const PASSWORD_REGEX_NUMBER = new RegExp(/\d/);

export function setInputError(elements, message) {
  const { input, errorMessage } = elements;
  input.classList.add(SIGN_INPUT_ERROR_CLASSNAME);
  errorMessage.classList.add(ERROR_MESSAGE_CLASSNAME);
  errorMessage.textContent = message;
}

export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
}

export function isEmailValid(email) {
  return EMAIL_REGEX.test(email);
}

export function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton
      .getElementsByTagName("img")[0]
      .setAttribute("src", "./images/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton
    .getElementsByTagName("img")[0]
    .setAttribute("src", "./images/eye-off.svg");
}

export const TEST_USER = {
  email: "test@codeit.com",
  password: "sprint101",
};

export function isPasswordValidString(password) {
  return PASSWORD_REGEX_STRING.test(password);
}

export function isPasswordValidNumber(password) {
  return PASSWORD_REGEX_NUMBER.test(password);
}
