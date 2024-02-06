import { PATH } from './constant.js';
import {
  checkEmail,
  checkAvailableEmail,
  checkPassword,
  checkAvailablePassword,
  checkPasswordMatch,
  changeEyeIcon,
} from './sign.js';
import { signup } from './api.js';

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
const SignupEmailHandler = () => {
  checkEmail(email, emailErrorMessage);
  checkAvailableEmail(email, emailErrorMessage);
};

//Check password: 입력 여부 확인
const SignupPasswordHandler = () => {
  checkPassword(password, passwordErrorMessage);
  checkAvailablePassword(password, passwordErrorMessage);
};

//Check passwordCheck: 입력 여부 및 값 확인
const PasswordCheckHandler = () => {
  checkPassword(passwordCheck, passwordCheckErrorMessage);
  checkPasswordMatch(password, passwordCheck, passwordCheckErrorMessage);
};

//Change icon: eye-on/off
const EyeIconHandler = () => {
  changeEyeIcon(eyeIcon, password);
};

const EyeIconCheckHandler = () => {
  changeEyeIcon(eyeIconCheck, passwordCheck);
};

//SignUp: submit form
const SignupSubmitHandler = event => {
  const isEmailValid = email.value && emailErrorMessage.classList.contains('hidden');
  const isPasswordValid = password.value && passwordErrorMessage.classList.contains('hidden');
  const isPasswordCheckValid = passwordCheck.value && passwordCheckErrorMessage.classList.contains('hidden');

  const signupInfo = {
    "email": email.value, "password": password.value
  }

  event.preventDefault();
  if (isEmailValid && isPasswordValid && isPasswordCheckValid) {
    signup('/sign-up', signupInfo);
    return;
  }
};

//Event Listener
email.addEventListener('focusout', SignupEmailHandler);
password.addEventListener('focusout', SignupPasswordHandler);
eyeIcon.addEventListener('click', EyeIconHandler);

passwordCheck.addEventListener('focusout', PasswordCheckHandler);
eyeIconCheck.addEventListener('click', EyeIconCheckHandler);

signupForm.addEventListener('submit', SignupSubmitHandler);