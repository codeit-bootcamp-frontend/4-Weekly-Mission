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

const emailInput = (event) => {
  event.value = removeEmpty(event.value);

  if (event.value.length <= 0) {
    emailError.textContent = EMPTY_EMAIL_MESSAGE;
    event.classList.add('inputError');
    return false;
  } else if (!isEmail(event.value)) {
    emailError.textContent = ERROR_EMAIL_MESSAGE;
    event.classList.add('inputError');
    return false;
  } else if (event.value === TEST_EMAIL) {
    emailError.textContent = DUPLICATE_EMAIL_MESSAGE;
    return false;
  } else {
    emailError.textContent = '';
    event.classList.remove('inputError');
    return true;
  }
};

const emailInputCheck = (e) => {
  emailInput(e.target);
};

const passwordInput = (event) => {
  event.value = removeEmpty(event.value);

  if (event.value.length <= 0) {
    passwordError.textContent = EMPTY_PASSWORD_MESSAGE;
    event.classList.add('inputError');
    return false;
  } else if (event.value.length < 8 || !/\d/.test(event.value) || !/[a-zA-Z]/.test(event.value)) {
    passwordError.textContent = ERROR_INVALID_PASSWORD_MESSAGE;
    event.classList.add('inputError');
    return false;
  } else {
    passwordError.textContent = '';
    event.classList.remove('inputError');
    return true;
  }
};

const passwordInputCheck = (e) => {
  passwordInput(e.target);
};

const passwordReInput = (event) => {
  event.value = removeEmpty(event.value);

  if (event.value.length <= 0) {
    passwordErrorCheck.textContent = EMPTY_PASSWORD_MESSAGE;
    event.classList.add('inputError');
    return false;
  } else if (event.value.length < 8 || !/\d/.test(event.value) || !/[a-zA-Z]/.test(event.value)) {
    passwordErrorCheck.textContent = ERROR_INVALID_PASSWORD_MESSAGE;
    event.classList.add('inputError');
    return false;
  } else if (passwordCheck.value !== event.value) {
    passwordErrorCheck.textContent = ERROR_MATCH_PASSWORD_MESSAGE;
    event.classList.add('inputError');
    return false;
  } else {
    passwordErrorCheck.textContent = '';
    event.classList.remove('inputError');
    return true;
  }
};

const passwordInputRecheck = (e) => {
  passwordReInput(e.target);
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

const onSubmit = (e) => {
  e.preventDefault();

  const isEmailValid = emailInput(e.target.email);
  const isPasswordValid = passwordInput(e.target.password);
  const isPassWordReValid = passwordReInput(e.target.password_recheck);

  if (isEmailValid === false) {
    emailError.textContent = EMAIL_CHECK_MESSAGE;
  }
  if (isPasswordValid === false) {
    passwordError.textContent = PASSWORD_CHECK_MESSAGE;
  }
  if (isPassWordReValid === false) {
    passwordErrorCheck.textContent = PASSWORD_CHECK_MESSAGE;
  } else if (isEmailValid && isPasswordValid && isPassWordReValid) {
    location.href = '/folder/folder.html';
  }
};

email.addEventListener('focusout', emailInputCheck);

passwordCheck.addEventListener('focusout', passwordInputCheck);

passwordReCheck.addEventListener('focusout', passwordInputRecheck);

eyeIcon[0].addEventListener('click', eyeIconClick1);

eyeIcon[1].addEventListener('click', eyeIconClick2);

form.addEventListener('submit', onSubmit);
