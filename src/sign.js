import SIGN from './constants/VALIDATION.js';

const signEmail = document.getElementById('email');
const emailError = document.getElementById('email-error');

const isValidEmail = (email) => {
  return SIGN.EMAIL_REGEX.test(email);
};

const validateEmail = () => {
  const emailValue = signEmail.value.trim();
  if (emailValue === '') emailError.innerText = SIGN.REQUIRED_EMAIL;
  else if (!isValidEmail(emailValue))
    emailError.innerText = SIGN.INVALID_EMAIL_FORMAT;
  else emailError.innerText = '';
};

signEmail.addEventListener('focusout', validateEmail);
