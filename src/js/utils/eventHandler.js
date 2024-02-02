import { validateEmailInput } from './validate.js';
import { addErrorMessage, removeErrorMessage } from './errorMessageController.js';
import ERROR_MESSAGES from '../../constant/errorMessages.js';

const { EMPTY_EMAIL_ERROR_MESSAGE, INVALID_EMAIL_ERROR_MESSAGE, EMPTY_PASSWORD_ERROR_MESSAGE } = ERROR_MESSAGES;

const emailInputEventHandler = (parentElement, emailValue, errorTag) => {
  if (!emailValue) {
    addErrorMessage(parentElement, EMPTY_EMAIL_ERROR_MESSAGE, errorTag);
    return;
  }

  if (validateEmailInput(emailValue)) {
    removeErrorMessage(parentElement, errorTag);
  } else {
    addErrorMessage(parentElement, INVALID_EMAIL_ERROR_MESSAGE, errorTag);
  }
};

const passwordInputEventHandler = (parentElement, passwordValue, errorTag) => {
  if (!passwordValue) {
    addErrorMessage(parentElement, EMPTY_PASSWORD_ERROR_MESSAGE, errorTag);
  } else {
    removeErrorMessage(parentElement, errorTag);
  }
};

const eyeButtonEventHandler = (passwordInputTag, eyeImageTag, isPasswordType) => {
  passwordInputTag.type = isPasswordType ? 'text' : 'password';
  eyeImageTag.src = isPasswordType ? '../images/eye-on.svg' : '../images/eye-off.svg';
};

export { emailInputEventHandler, passwordInputEventHandler, eyeButtonEventHandler };
