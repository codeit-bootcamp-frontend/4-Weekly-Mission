import ERROR_MESSAGES from '../constant/errorMessages.js';
import { addErrorMessage, removeErrorMessage } from './utils/errorMessageController.js';
import { emailInputEventHandler, eyeButtonEventHandler } from './utils/eventHandler.js';
import validValues from '../constant/validValues.js';
import { validatePasswordInput } from './utils/validate.js';

const {
  DUPLICATE_EMAIL_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
  PASSWORD_MISMATCH_ERROR_MESSAGE,
  REQUIRED_FIELD_ERROR_MESSAGE,
} = ERROR_MESSAGES;

const emailInputTag = document.querySelector('#email');
const passwordInputTag = document.querySelector('#password');
const passwordConfirmInputTag = document.querySelector('#passwordConfirm');
const eyeButtonTagList = document.querySelectorAll('.eye-button');
const signUpButtonTag = document.querySelector('.sign-form-button');

emailInputTag.addEventListener('blur', e => {
  const signInputBoxTag = e.target.parentElement;
  const errorTag = signInputBoxTag.querySelector('p');
  const emailValue = e.target.value;

  emailInputEventHandler(signInputBoxTag, emailValue, errorTag);

  if (emailValue === validValues.email) {
    addErrorMessage(signInputBoxTag, DUPLICATE_EMAIL_ERROR_MESSAGE, errorTag);
  }
});

passwordInputTag.addEventListener('blur', e => {
  const signInputPasswordBoxTag = e.target.parentElement;
  const errorTag = signInputPasswordBoxTag.querySelector('p');
  const passwordValue = e.target.value;

  if (validatePasswordInput(passwordValue)) {
    removeErrorMessage(signInputPasswordBoxTag, errorTag);
    return;
  }
  addErrorMessage(signInputPasswordBoxTag, INVALID_PASSWORD_ERROR_MESSAGE, errorTag);
});

passwordConfirmInputTag.addEventListener('blur', e => {
  const signInputPasswordConfirmBoxTag = e.target.parentElement;
  const errorTag = signInputPasswordConfirmBoxTag.querySelector('p');
  const passwordConfirmValue = e.target.value;
  const passwordValue = passwordInputTag.value;

  if (passwordConfirmValue !== passwordValue) {
    addErrorMessage(signInputPasswordConfirmBoxTag, PASSWORD_MISMATCH_ERROR_MESSAGE, errorTag);
  } else {
    removeErrorMessage(signInputPasswordConfirmBoxTag, errorTag);
  }
});

signUpButtonTag.addEventListener('click', e => {
  e.preventDefault();
  const signInputList = document.querySelectorAll('.sign-input');
  signInputList.forEach(element => {
    if (!element.value) {
      const parentElement = element.parentElement;
      const errorTag = parentElement.querySelector('p');
      addErrorMessage(parentElement, REQUIRED_FIELD_ERROR_MESSAGE, errorTag);
    }
  });

  const invalidInputErrorClassList = document.querySelectorAll('.invalid-input-error');
  if (invalidInputErrorClassList.length === 0) {
    window.location.href = '../pages/folder.html';
  }
});

eyeButtonTagList.forEach(eyeButtonTag => {
  eyeButtonTag.addEventListener('click', () => {
    const eyeImageTag = eyeButtonTag.querySelector('img');
    const isPasswordType = passwordInputTag.type === 'password';
    eyeButtonEventHandler(passwordInputTag, eyeImageTag, isPasswordType);
  });
});
