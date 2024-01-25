import { ERROR_MESSAGE, REGEX_EMAIL, USER_INFO } from './constant.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const signinForm = document.getElementById('signinForm');
const eyeIcon = document.getElementById('eyeIcon');

//Check email: 입력 여부 확인, 메일 형식 확인-------------------------------
const errorEmail = document.createElement('div');
errorEmail.className = 'error-text';

email.addEventListener('focusout', function () {
  if (!email.value) {
    showInputError(email, errorEmail, ERROR_MESSAGE.EMPTY_EMAIL);
    return;
  }
  if (!validateEmail(email.value)) {
    showInputError(email, errorEmail, ERROR_MESSAGE.INVALID_EMAIL_ADDRESS);
    return;
  }
  errorEmail.remove();
  email.classList.remove('error-input');
});

function validateEmail(email_address) {
  return email_address.match(REGEX_EMAIL);
}

//Check password: 입력 여부 확인-----------------------------------------
const errorPassword = document.createElement('div');
errorPassword.className = 'error-text';

password.addEventListener('focusout', function () {
  if (!password.value) {
    showInputError(password, errorPassword, ERROR_MESSAGE.EMPTY_PASSWORD);
  } else {
    errorPassword.remove();
    password.classList.remove('error-input');
  }
});

//Login: submit form--------------------------------------------------
signinForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (email.value === USER_INFO.ID && password.value === USER_INFO.PASSWORD) {
    email.value = '';
    window.location.href = '/pages/folder.html';
  } else {
    showInputError(email, errorEmail, ERROR_MESSAGE.INVAILD_EMAIL);
    showInputError(password, errorPassword, ERROR_MESSAGE.INVAILD_PASSWORD);
  }
});

//Change icon: eye-on/off----------------------------------------------
const eyeOnIcon = '/assets/icon/eye-on.svg';
const eyeOffIcon = '/assets/icon/eye-off.svg';

eyeIcon.addEventListener('click', function () {
  eyeIcon.classList.toggle('on');
  if (eyeIcon.classList.contains('on')) {
    password.removeAttribute('type');
    changeImage(eyeIcon, eyeOnIcon);
  } else {
    password.setAttribute('type', 'password');
    changeImage(eyeIcon, eyeOffIcon);
  }
});

//Util----------------------------------------------------------------
function showInputError(id, element, message) {
  element.textContent = message;
  id.classList.add('error-input');
  id.after(element);
}

function changeImage(brfore, after) {
  brfore.setAttribute('src', after);
}
