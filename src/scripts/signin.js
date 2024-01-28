import { ERROR_MESSAGE, PATH } from './constant.js';
import { validateEmail, showInputError, showErrorMessage, hideInputError, changeImage, checkUserInfo } from './util.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const signinForm = document.getElementById('signinForm');
const eyeIcon = document.getElementById('eyeIcon');

const emailErrorMessage = document.getElementById('emailErrorMessage');
const passwordErrorMessage = document.getElementById('passwordErrorMessage');

//Check email: 입력 여부 확인, 메일 형식 확인-------------------------------------
const checkEmail = () => {
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
};

//Check password: 입력 여부 확인-----------------------------------------------
const checkPassword = () => {
  if (!password.value) {
    showInputError(password);
    showErrorMessage(passwordErrorMessage, ERROR_MESSAGE.EMPTY_PASSWORD);
    return;
  }
  hideInputError(password, passwordErrorMessage);
};

//Login: submit form--------------------------------------------------------
const submitForm = event => {
  event.preventDefault();
  if (checkUserInfo(email, password)) {
    email.value = '';
    window.location.href = PATH.PAGE_FOLDER;
    return;
  }
  showInputError(email);
  showErrorMessage(emailErrorMessage, ERROR_MESSAGE.INVALID_EMAIL);
  showInputError(password);
  showErrorMessage(passwordErrorMessage, ERROR_MESSAGE.INVALID_PASSWORD);
};

//Change icon: eye-on/off----------------------------------------------------
const changeEyeIcon = () => {
  eyeIcon.classList.toggle('on');
  if (eyeIcon.classList.contains('on')) {
    password.setAttribute('type', 'text');
    changeImage(eyeIcon, PATH.ICON_EYE_ON);
    return;
  }
  password.setAttribute('type', 'password');
  changeImage(eyeIcon, PATH.ICON_EYE_OFF);
};

//EventListener---------------------------------------------------------------
email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);
signinForm.addEventListener('submit', submitForm);
eyeIcon.addEventListener('click', changeEyeIcon);
