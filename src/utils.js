const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const setInputError = (elements, message) => {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.errorMessage.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.errorMessage.textContent = message;
};

export const removeInputError = (elements) => {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
};

export const isEmailValid = (email) => {
  return new RegExp(EMAIL_REGEX).test(email);
};

export const isPasswordValid = (password) => {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter =
    password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
};

export const togglePassword = (input, toggleButton) => {
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
};

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};
