import { ERROR_MESSAGE } from './constant.js';
import { showInputError, showErrorMessage } from './util.js';
import { checkAccessToken, checkEmail, checkPassword, changeEyeIcon } from './sign.js';
import { sign } from './api.js';

const email = document.getElementById('email');
const password = document.getElementById('password');

const signinForm = document.getElementById('signinForm');
const eyeIcon = document.getElementById('eyeIcon');

const emailErrorMessage = document.getElementById('emailErrorMessage');
const passwordErrorMessage = document.getElementById('passwordErrorMessage');

//Check token: 토큰 확인
checkAccessToken();

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
  const signinInfo = {
    "email": email.value, "password": password.value
  }

  event.preventDefault();
  sign('/sign-in', signinInfo)
    .then((result) => {
      if (!result) {
        showInputError(email);
        showErrorMessage(emailErrorMessage, ERROR_MESSAGE.INVALID_EMAIL);
        showInputError(password);
        showErrorMessage(passwordErrorMessage, ERROR_MESSAGE.INVALID_PASSWORD);
      }
    });
};

//Event Listener
email.addEventListener('focusout', SigninEmailHandler);
password.addEventListener('focusout', SigninPasswordHandler);
eyeIcon.addEventListener('click', EyeIconHandler);

signinForm.addEventListener('submit', SigninSubmitHandler);