import { PATH } from './constant.js';
import {
  checkAvailableEmail,
  checkAvailablePassword,
  checkPasswordMatch,
  checkPassword,
  changeEyeIcon,
} from './sign.js';

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
password.addEventListener('focusout', () => checkAvailablePassword(password, passwordErrorMessage));

//Check passwordCheck: 입력 여부 및 값 확인
passwordCheck.addEventListener('focusout', () =>
  checkPasswordMatch(password, passwordCheck, passwordCheckErrorMessage)
);

//Change icon: eye-on/off
eyeIcon.addEventListener('click', () => changeEyeIcon(eyeIcon, password));
eyeIconCheck.addEventListener('click', () => changeEyeIcon(eyeIconCheck, passwordCheck));

//SignUp: submit form
const submitForm = event => {
  event.preventDefault();
  if (
    email.value &&
    password.value &&
    passwordCheck.value &&
    !email.classList.contains('hidden') &&
    !password.classList.contains('hidden') &&
    !passwordCheck.classList.contains('hidden')
  ) {
    email.value = '';
    window.location.href = PATH.PAGE_FOLDER;
    return;
  }
};
signupForm.addEventListener('submit', submitForm);
