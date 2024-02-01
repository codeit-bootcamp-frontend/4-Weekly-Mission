import { ERROR_MESSAGE, PATH } from './constant.js';
import { showInputError, showErrorMessage, checkUserInfo } from './util.js';
import { checkEmail, checkPassword, changeEyeIcon } from './sign.js';

const email = document.getElementById('email');
const password = document.getElementById('password');

const signinForm = document.getElementById('signinForm');
const eyeIcon = document.getElementById('eyeIcon');

const emailErrorMessage = document.getElementById('emailErrorMessage');
const passwordErrorMessage = document.getElementById('passwordErrorMessage');

//Check email: 입력 여부 확인, 메일 형식 확인
const SigninEmailHandler = () => {
  checkEmail(email, emailErrorMessage);
};

//Check password: 입력 여부 확인
const SigninPasswordHandler = () => {
  checkPassword(password, passwordErrorMessage);
};

//Change icon: eye-on/off
const EyeIconHandler = () => {
  changeEyeIcon(eyeIcon, password);
};

//Login: submit form
const SigninSubmitHandler = event => {
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

//Event Listener
email.addEventListener('focusout', SigninEmailHandler);
password.addEventListener('focusout', SigninPasswordHandler);
eyeIcon.addEventListener('click', EyeIconHandler);

signinForm.addEventListener('submit', SigninSubmitHandler);
