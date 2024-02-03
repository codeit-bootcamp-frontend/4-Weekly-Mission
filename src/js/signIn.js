import ERROR_MESSAGES from '../constant/errorMessages.js';
import validValues from '../constant/validValues.js';
import { addErrorMessage } from '../utils/errorMessageController.js';
import { emailInputEventHandler, passwordInputEventHandler, eyeButtonEventHandler } from '../utils/eventHandler.js';
import { postLoginData } from '../utils/api.js';

const emailInputTag = document.querySelector('#email');
const passwordInputTag = document.querySelector('#password');
const eyeButtonTag = document.querySelector('.eye-button');
const signInButtonTag = document.querySelector('.sign-form-button');

const { WRONG_EMAIL_ERROR_MESSAGE, WRONG_PASSWORD_ERROR_MESSAGE } = ERROR_MESSAGES;

emailInputTag.addEventListener('blur', e => {
  const signInputBoxTag = e.target.parentElement;
  const errorTag = signInputBoxTag.querySelector('p');
  const emailValue = e.target.value;

  emailInputEventHandler(signInputBoxTag, emailValue, errorTag);
});

passwordInputTag.addEventListener('blur', e => {
  const signInputPasswordBoxTag = e.target.parentElement;
  const errorTag = signInputPasswordBoxTag.querySelector('p');
  const passwordValue = e.target.value;

  passwordInputEventHandler(signInputPasswordBoxTag, passwordValue, errorTag);
});

signInButtonTag.addEventListener('click', async e => {
  e.preventDefault();
  if (emailInputTag.value === validValues.email && passwordInputTag.value === validValues.password) {
    await postLoginData(emailInputTag.value, passwordInputTag.value);
    window.location.href = '../pages/folder.html';
    return;
  }

  const emailBoxTag = emailInputTag.parentElement;
  const emailBoxExistErrorTag = emailBoxTag.querySelector('p');
  const passwordBoxTag = passwordInputTag.parentElement;
  const passwordBoxExistErrorTag = passwordBoxTag.querySelector('p');

  addErrorMessage(emailBoxTag, WRONG_EMAIL_ERROR_MESSAGE, emailBoxExistErrorTag);
  addErrorMessage(passwordBoxTag, WRONG_PASSWORD_ERROR_MESSAGE, passwordBoxExistErrorTag);
});

eyeButtonTag.addEventListener('click', () => {
  const eyeImageTag = eyeButtonTag.querySelector('img');
  const isPasswordType = passwordInputTag.type === 'password';

  eyeButtonEventHandler(passwordInputTag, eyeImageTag, isPasswordType);
});
