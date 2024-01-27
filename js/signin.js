import {
  handleFocusoutInput,
  handleClickBlindButton,
  printMessage,
  INPUT_MESSAGE_LOGIN_ERROR,
} from './input.js';
import { USER_TEST } from './test.js';
import { CLASS } from './class.js';

const signinForm = document.querySelector('#signin-form');

function handleSubmit(event) {
  event.preventDefault();

  if (event.target.id !== 'signin-form') return;

  let valid = true;
  const emailInput = event.target['email'];
  const passwordInput = event.target['password'];
  const emailMessageBox = emailInput.parentElement.nextElementSibling;
  const passwordMessageBox = passwordInput.parentElement.nextElementSibling;

  emailInput.classList.remove(CLASS.ERROR);
  passwordInput.classList.remove(CLASS.ERROR);
  emailMessageBox.classList.remove(CLASS.ERROR);
  emailMessageBox.textContent = '';
  passwordMessageBox.classList.remove(CLASS.ERROR);
  passwordMessageBox.textContent = '';

  if (USER_TEST.EMAIL !== emailInput.value) {
    valid = false;
    emailInput.classList.add(CLASS.ERROR);
    printMessage(emailMessageBox, INPUT_MESSAGE_LOGIN_ERROR.EMAIL, CLASS.ERROR);
  } else if (USER_TEST.PASSWORD !== passwordInput.value) {
    valid = false;
    passwordInput.classList.add(CLASS.ERROR);
    printMessage(
      passwordMessageBox,
      INPUT_MESSAGE_LOGIN_ERROR.PASSWORD,
      CLASS.ERROR
    );
  }

  if (!valid) return;

  // event.target.submit();
  window.location.href = '/folder';
}

signinForm.addEventListener('focusout', handleFocusoutInput);
signinForm.addEventListener('click', handleClickBlindButton);
signinForm.addEventListener('submit', handleSubmit);
