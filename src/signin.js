import { ERROR_MSG, REGEX_EMAIL } from './constant.js';

const email = document.getElementById('email');
const password = document.getElementById('password');

//Check email: 입력 여부 확인, 메일 형식 확인-------------------------------
const errorEmail = document.createElement('div');
errorEmail.className = 'error-text';

function checkEmail() {
  if (!email.value) {
    showInputError(email, errorEmail, ERROR_MSG.INPUT_EMAIL);
  } else if (validateEmail(email.value)) {
    showInputError(email, errorEmail, ERROR_MSG.INPUT_EMAIL_ADDRESS);
  } else {
    errorEmail.remove();
    email.classList.remove('error-input');
  }
}

function validateEmail(email_address) {
  if (email_address.match(REGEX_EMAIL)) return false;
  else return true;
}

//Check password: 입력 여부 확인-----------------------------------------
const errorPassword = document.createElement('div');
errorPassword.className = 'error-text';

function checkPassword() {
  if (!password.value) {
    showInputError(password, errorPassword, ERROR_MSG.INPUT_PASSWORD);
  } else {
    errorPassword.remove();
    password.classList.remove('error-input');
  }
}

//Util----------------------------------------------------------------
function showInputError(id, element, message) {
  element.textContent = message;
  id.classList.add('error-input');
  id.after(element);
}

email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);
