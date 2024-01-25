import { ERROR_MESSAGE, REGEX_EMAIL, USER_INFO } from './constant.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const signinForm = document.getElementById('signinForm');
const eyeIcon = document.getElementById('eyeIcon');

//Check email: 입력 여부 확인, 메일 형식 확인-------------------------------
const errorEmail = document.createElement('div');
errorEmail.className = 'error-text';

function checkEmail() {
  if (!email.value) {
    showInputError(email, errorEmail, ERROR_MESSAGE.EMPTY_EMAIL);
  } else if (validateEmail(email.value)) {
    showInputError(email, errorEmail, ERROR_MESSAGE.INVALID_EMAIL_ADDRESS);
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
    showInputError(password, errorPassword, ERROR_MESSAGE.EMPTY_PASSWORD);
  } else {
    errorPassword.remove();
    password.classList.remove('error-input');
  }
}

//Login: submit form--------------------------------------------------
function submitForm(e) {
  e.preventDefault();
  if (email.value === USER_INFO.ID && password.value === USER_INFO.PASSWORD) {
    email.value = '';
    window.location.href = '/pages/folder.html';
  } else {
    showInputError(email, errorEmail, ERROR_MESSAGE.INVAILD_EMAIL);
    showInputError(password, errorPassword, ERROR_MESSAGE.INVAILD_PASSWORD);
  }
}

//Change icon: eye-on/off----------------------------------------------
const eyeOnIcon = '/assets/icon/eye-on.svg';
const eyeOffIcon = '/assets/icon/eye-off.svg';

function changeEyeIcon() {
  eyeIcon.classList.toggle('on');
  if (eyeIcon.classList.contains('on')) {
    password.removeAttribute('type');
    changeImage(eyeIcon, eyeOnIcon);
  } else {
    password.setAttribute('type', 'password');
    changeImage(eyeIcon, eyeOffIcon);
  }
}

//Util----------------------------------------------------------------
function showInputError(id, element, message) {
  element.textContent = message;
  id.classList.add('error-input');
  id.after(element);
}

function changeImage(brfore, after) {
  brfore.setAttribute('src', after);
}

email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);
signinForm.addEventListener('submit', submitForm);
eyeIcon.addEventListener('click', changeEyeIcon);
