import { ERROR_MESSAGE, REGEX_EMAIL, USER_INFO } from './constant.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const signinForm = document.getElementById('signinForm');
const eyeIcon = document.getElementById('eyeIcon');

const emailErrorMessage = document.getElementById('emailErrorMessage');
const passwordErrorMessage = document.getElementById('passwordErrorMessage');

//Check email: 입력 여부 확인, 메일 형식 확인-------------------------------
email.addEventListener('focusout', function () {
  if (!email.value) {
    showInputError(email);
    showErrorMessage(emailErrorMessage, ERROR_MESSAGE.EMPTY_EMAIL);
    return;
  }
  if (!validateEmail(email.value)) {
    showErrorMessage(emailErrorMessage, ERROR_MESSAGE.INVALID_EMAIL_ADDRESS);
    return;
  }
  hideInputError(email, emailErrorMessage);
});

//Check password: 입력 여부 확인-----------------------------------------
password.addEventListener('focusout', function () {
  if (!password.value) {
    showInputError(password);
    showErrorMessage(passwordErrorMessage, ERROR_MESSAGE.EMPTY_PASSWORD);
    return;
  }
  hideInputError(password, passwordErrorMessage);
});

//Login: submit form--------------------------------------------------
signinForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (email.value === USER_INFO.ID && password.value === USER_INFO.PASSWORD) {
    email.value = '';
    window.location.href = '/pages/folder.html';
    return;
  }
  showInputError(email);
  showErrorMessage(emailErrorMessage, ERROR_MESSAGE.INVALID_EMAIL_ADDRESS);
  showInputError(password);
  showErrorMessage(passwordErrorMessage, ERROR_MESSAGE.EMPTY_PASSWORD);
});

//Change icon: eye-on/off----------------------------------------------
const eyeOnIcon = '/assets/icon/eye-on.svg';
const eyeOffIcon = '/assets/icon/eye-off.svg';

eyeIcon.addEventListener('click', () => {
  eyeIcon.classList.toggle('on');
  if (eyeIcon.classList.contains('on')) {
    password.removeAttribute('type');
    changeImage(eyeIcon, eyeOnIcon);
    return;
  }
  password.setAttribute('type', 'password');
  changeImage(eyeIcon, eyeOffIcon);
});

//Util----------------------------------------------------------------
function validateEmail(email_address) {
  return email_address.match(REGEX_EMAIL);
}

function showInputError(inputElement) {
  inputElement.classList.add('error-input');
}

function showErrorMessage(messageElement, message) {
  messageElement.classList.remove('hidden');
  messageElement.textContent = message;
}

function hideInputError(inputElement, messageElement) {
  inputElement.classList.remove('error-input');
  messageElement.classList.add('hidden');
}

function changeImage(beforeImageElement, after) {
  beforeImageElement.setAttribute('src', after);
}
