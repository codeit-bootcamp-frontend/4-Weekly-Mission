import { focusing, eyeBlink, checkingEmail, checkingPassword, checkingPasswordRepeat, fetchSign } from './signin.js';

// 이메일 관련 요소들
const email = document.getElementById('email');
const emailErrorMessage = document.getElementById('error-email');

// 비밀번호 관련 요소들
const password = document.getElementById('password');
const passwordErrorMessage = document.getElementById('error-password');

// 비밀번호 확인 관련 요소들
const passwordRepeat = document.getElementById("passwordR");
const passwordRepeatErrorMessage = document.getElementById('error-passwordR');

// 눈 관련 요소들
const eyeButton = document.getElementById("eye-button");
const eye = document.getElementById("eye");
const eyeButton2 = document.getElementById("eye-button2");
const eye2 = document.getElementById("eye2");

email.addEventListener('focusin', () => focusing(emailErrorMessage, email));
email.addEventListener('focusout', () => checkingEmail(email, emailErrorMessage));

password.addEventListener('focusin', () => focusing(passwordErrorMessage, password));
password.addEventListener('focusout', () => checkingPassword(password, passwordErrorMessage));

eyeButton.addEventListener('click', () => eyeBlink(password, eye));
eyeButton2.addEventListener('click', () => eyeBlink(passwordRepeat, eye2));

passwordRepeat.addEventListener('focusin', () => focusing(passwordRepeatErrorMessage, passwordRepeat));
passwordRepeat.addEventListener('focusout', () => checkingPasswordRepeat(password, passwordRepeat, passwordRepeatErrorMessage));
