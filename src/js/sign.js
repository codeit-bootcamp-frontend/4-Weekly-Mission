import { validateEmailInput } from './validate.js';
import ERROR_MESSAGES from '../constant/errorMessages.js';
import validValues from '../constant/validValues.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const eyeButton = document.querySelector('.eye-button');
const loginButton = document.querySelector('.sign-form-button');

const {
  EMPTY_EMAIL_ERROR_MESSAGE,
  INVALID_EMAIL_ERROR_MESSAGE,
  WRONG_EMAIL_ERROR_MESSAGE,
  EMPTY_PASSWORD_ERROR_MESSAGE,
  WRONG_PASSWORD_ERROR_MESSAGE,
} = ERROR_MESSAGES;

const addErrorMessage = (parentElement, errorMessage) => {
  const existErrorMessage = parentElement.querySelector('p');

  if (existErrorMessage) {
    existErrorMessage.innerText = errorMessage;
  } else {
    parentElement.classList.add('invalid-input-error');
    const errorTag = document.createElement('p');
    errorTag.innerText = errorMessage;
    parentElement.append(errorTag);
  }
};

const removeErrorMessage = parentElement => {
  parentElement.classList.remove('invalid-input-error');
  const errorTag = parentElement.querySelector('p');
  errorTag.remove();
};

emailInput.addEventListener('blur', e => {
  const signInputBox = e.target.parentElement;
  const emailValue = e.target.value;

  if (!emailValue) {
    addErrorMessage(signInputBox, EMPTY_EMAIL_ERROR_MESSAGE);
    return;
  }

  if (validateEmailInput(emailValue)) {
    removeErrorMessage(signInputBox);
  } else {
    addErrorMessage(signInputBox, INVALID_EMAIL_ERROR_MESSAGE);
  }
});

passwordInput.addEventListener('blur', e => {
  const signInputPasswordBox = e.target.parentElement;
  const passwordValue = e.target.value;

  if (!passwordValue) {
    addErrorMessage(signInputPasswordBox, EMPTY_PASSWORD_ERROR_MESSAGE);
  } else {
    removeErrorMessage(signInputPasswordBox);
  }
});

loginButton.addEventListener('click', e => {
  e.preventDefault();
  if (emailInput.value === validValues.email && passwordInput.value === validValues.password) {
    window.location.href = '../pages/folder.html';
    return;
  }

  const emailBox = emailInput.parentElement;
  const passwordBox = passwordInput.parentElement;

  addErrorMessage(emailBox, WRONG_EMAIL_ERROR_MESSAGE);
  addErrorMessage(passwordBox, WRONG_PASSWORD_ERROR_MESSAGE);
});

eyeButton.addEventListener('click', () => {
  const imgTag = eyeButton.querySelector('img');
  const isPasswordType = passwordInput.type === 'password';

  passwordInput.type = isPasswordType ? 'text' : 'password';
  imgTag.src = isPasswordType ? '../images/eye-on.svg' : '../images/eye-off.svg';
});
