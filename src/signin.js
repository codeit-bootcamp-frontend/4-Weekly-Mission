import { ERROR_MSG } from './constant.js';

const email = document.getElementById('email');
const password = document.getElementById('password');

const errorEmail = document.createElement('div');
errorEmail.className = 'error-text';

function checkEmail() {
  if (!email.value) {
    errorEmail.textContent = ERROR_MSG.INPUT_EMAIL;
    email.classList.add('error-input');
    email.after(errorEmail);
  } else {
    errorEmail.remove();
    email.classList.remove('error-input');
  }
}
const errorPassword = document.createElement('div');
errorPassword.className = 'error-text';

function checkPassword() {
  if (!password.value) {
    errorPassword.textContent = ERROR_MSG.INPUT_PASSWORD;
    password.classList.add('error-input');
    password.after(errorPassword);
  } else {
    errorPassword.remove();
    password.classList.remove('error-input');
  }
}

email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);
