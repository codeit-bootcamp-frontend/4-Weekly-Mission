import {
  handleFocusoutInput,
  handleClickBlindButton,
  removeError,
  INPUT_TYPE,
  addLoginError,
} from './input.js';
import { USER_TEST } from './test.js';

const signinForm = document.querySelector('#signin-form');

function handleSubmit(event) {
  event.preventDefault();

  if (event.target.id !== 'signin-form') return;

  const inputEmail = event.target['email'];
  const inputPassword = event.target['password'];
  const messageBoxEmail = inputEmail.parentElement.nextElementSibling;
  const messageBoxPassword = inputPassword.parentElement.nextElementSibling;

  removeError(inputEmail);
  removeError(inputPassword);
  removeError(messageBoxEmail);
  removeError(messageBoxPassword);

  if (USER_TEST.EMAIL !== inputEmail.value) {
    addLoginError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
    return;
  } else if (USER_TEST.PASSWORD !== inputPassword.value) {
    addLoginError(INPUT_TYPE.PASSWORD, inputPassword, messageBoxPassword);
    return;
  }

  // event.target.submit();
  window.location.href = '/folder';
}

signinForm.addEventListener('focusout', handleFocusoutInput);
signinForm.addEventListener('click', handleClickBlindButton);
signinForm.addEventListener('submit', handleSubmit);
