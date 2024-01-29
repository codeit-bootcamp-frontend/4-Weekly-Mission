import { ERROR_MESSAGE, PATH } from './constant.js';
import { showInputError, showErrorMessage, checkUserInfo } from './util.js';
import { checkEmail, checkPassword, changeEyeIcon, checkAvailableEmail } from './sign.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

const signupForm = document.getElementById('signupForm');
const eyeIcon = document.getElementById('eyeIcon');
const eyeIconCheck = document.getElementById('eyeIconCheck');

const emailErrorMessage = document.getElementById('emailErrorMessage');
const passwordErrorMessage = document.getElementById('passwordErrorMessage');
const passwordCheckErrorMessage = document.getElementById('passwordCheckErrorMessage');

//Check email: 입력 여부 확인, 메일 형식 확인
email.addEventListener('focusout', () => checkAvailableEmail(email, emailErrorMessage));

//Check password: 입력 여부 확인
password.addEventListener('focusout', () => checkPassword(password, passwordErrorMessage));

//Check passwordCheck: 입력 여부 확인
passwordCheck.addEventListener('focusout', () => checkPassword(passwordCheck, passwordCheckErrorMessage));

//Change icon: eye-on/off
eyeIcon.addEventListener('click', () => changeEyeIcon(eyeIcon, password));
eyeIconCheck.addEventListener('click', () => changeEyeIcon(eyeIconCheck, passwordCheck));

//Login: submit form
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
signupForm.addEventListener('submit', submitForm);
