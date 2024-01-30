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

  let valid = true;
  const inputEmail = event.target['email'];
  const inputPassword = event.target['password'];
  const messageBoxEmail = inputEmail.parentElement.nextElementSibling;
  const messageBoxPassword = inputPassword.parentElement.nextElementSibling;

  removeError(inputEmail);
  removeError(inputPassword);
  removeError(messageBoxEmail);
  removeError(messageBoxPassword);

  if (USER_TEST.EMAIL !== inputEmail.value) {
    valid = false;
    addLoginError(INPUT_TYPE.EMAIL, inputEmail, messageBoxEmail);
  } else if (USER_TEST.PASSWORD !== inputPassword.value) {
    valid = false;
    addLoginError(INPUT_TYPE.PASSWORD, inputPassword, messageBoxPassword);
  }

  if (!valid) return;

  // event.target.submit();
  window.location.href = '/folder';
}

signinForm.addEventListener('focusout', handleFocusoutInput);
signinForm.addEventListener('click', handleClickBlindButton);
signinForm.addEventListener('submit', handleSubmit);
