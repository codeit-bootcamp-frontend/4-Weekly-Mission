import {
  form,
  email,
  emailError,
  passwordError,
  eyeIcon,
  eyeIconOn,
  eyeIconOff,
  isEmail,
  removeEmpty,
  togglePasswordVisibility,
} from '../src/common/sign.js';

import {
  TEST_EMAIL,
  EMAIL_CHECK_MESSAGE,
  PASSWORD_CHECK_MESSAGE,
  EMPTY_EMAIL_MESSAGE,
  EMPTY_PASSWORD_MESSAGE,
  ERROR_EMAIL_MESSAGE,
  DUPLICATE_EMAIL_MESSAGE,
  ERROR_INVALID_PASSWORD_MESSAGE,
  ERROR_MATCH_PASSWORD_MESSAGE,
} from '../src/common/constants.js';

const passwordCheck = document.querySelector('.password_check');
const passwordReCheck = document.querySelector('.password_recheck');

const passwordErrorCheck = document.querySelector('.password-error-check');

let isValid = [false, false, false];

const onSubmit = (e) => {
  e.preventDefault();

  if (isValid[0] === false) {
    emailError.textContent = EMAIL_CHECK_MESSAGE;
  }
  if (isValid[1] === false) {
    passwordError.textContent = PASSWORD_CHECK_MESSAGE;
  }
  if (isValid[2] === false) {
    passwordErrorCheck.textContent = PASSWORD_CHECK_MESSAGE;
  } else if (isValid.includes(false) === false) {
    location.href = '/folder/folder.html';
  }
};

const emailInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    emailError.textContent = EMPTY_EMAIL_MESSAGE;
    e.target.classList.add('inputError');
    isValid[0] = false;
  } else if (!isEmail(e.target.value)) {
    emailError.textContent = ERROR_EMAIL_MESSAGE;
    e.target.classList.add('inputError');
    isValid[0] = false;
  } else if (e.target.value === TEST_EMAIL) {
    emailError.textContent = DUPLICATE_EMAIL_MESSAGE;
    isValid[0] = false;
  } else {
    emailError.textContent = '';
    e.target.classList.remove('inputError');
    isValid[0] = true;
  }
};

const passwordInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    passwordError.textContent = EMPTY_PASSWORD_MESSAGE;
    e.target.classList.add('inputError');
    isValid[1] = false;
  } else if (
    e.target.value.length < 8 ||
    !/\d/.test(e.target.value) ||
    !/[a-zA-Z]/.test(e.target.value)
  ) {
    passwordError.textContent = ERROR_INVALID_PASSWORD_MESSAGE;
    e.target.classList.add('inputError');
    isValid[1] = false;
  } else {
    passwordError.textContent = '';
    e.target.classList.remove('inputError');
    isValid[1] = true;
  }
};

const passwordInputRecheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    passwordErrorCheck.textContent = EMPTY_PASSWORD_MESSAGE;
    e.target.classList.add('inputError');
    isValid[2] = false;
  } else if (
    e.target.value.length < 8 ||
    !/\d/.test(e.target.value) ||
    !/[a-zA-Z]/.test(e.target.value)
  ) {
    passwordErrorCheck.textContent = ERROR_INVALID_PASSWORD_MESSAGE;
    e.target.classList.add('inputError');
    isValid[2] = false;
  } else if (passwordCheck.value !== e.target.value) {
    passwordErrorCheck.textContent = ERROR_MATCH_PASSWORD_MESSAGE;
    e.target.classList.add('inputError');
    isValid[2] = false;
  } else {
    passwordErrorCheck.textContent = '';
    e.target.classList.remove('inputError');
    isValid[2] = true;
  }
};

const eyeIconClick1 = (e) => {
  if (e.target.classList.contains('eye-icon')) {
    const eyeOff = eyeIconOff[0];
    const eyeOn = eyeIconOn[0];
    togglePasswordVisibility(passwordCheck, eyeOff, eyeOn);
  }
};

const eyeIconClick2 = (e) => {
  if (e.target.classList.contains('eye-icon')) {
    const eyeOff = eyeIconOff[1];
    const eyeOn = eyeIconOn[1];
    togglePasswordVisibility(passwordReCheck, eyeOff, eyeOn);
  }
};

email.addEventListener('focusout', emailInputCheck);

passwordCheck.addEventListener('focusout', passwordInputCheck);

passwordReCheck.addEventListener('focusout', passwordInputRecheck);

eyeIcon[0].addEventListener('click', eyeIconClick1);

eyeIcon[1].addEventListener('click', eyeIconClick2);

form.addEventListener('submit', onSubmit);
