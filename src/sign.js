import SIGN from './constants/VALIDATION.js';

const signEmail = document.getElementById('email');
const emailError = document.getElementById('email-error');
const signPw = document.getElementById('password');
const pwError = document.getElementById('password-error');

const isValidEmail = (email) => {
  return SIGN.EMAIL_REGEX.test(email);
};

const isValidPw = (pw) => {
  return SIGN.PW_REGEX.test(pw);
};

const validateEmail = () => {
  const emailValue = signEmail.value.trim();
  if (emailValue === '') emailError.innerText = SIGN.REQUIRED_EMAIL;
  else if (!isValidEmail(emailValue))
    emailError.innerText = SIGN.INVALID_EMAIL_FORMAT;
  else emailError.innerText = '';
};

const validatePw = () => {
  const pwValue = signPw.value.trim();
  if (pwValue === '') pwError.innerText = SIGN.REQUIRED_PASSWORD;
  else if (!isValidPw(pwValue)) pwError.innerText = SIGN.INVALID_PW_FORMAT;
  else pwError.innerText = '';
};

signEmail.addEventListener('focusout', validateEmail);
signPw.addEventListener('focusout', validatePw);
