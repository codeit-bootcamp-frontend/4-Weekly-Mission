import {
  form,
  email,
  emailError,
  passwordError,
  eyeIcon,
  isEmail,
  removeEmpty,
  eyeIconOn,
  eyeIconOff,
} from '../src/common/sign.js';

import {
  TEST_EMAIL,
  TEST_PASSWORD,
  EMAIL_CHECK_MESSAGE,
  PASSWORD_CHECK_MESSAGE,
  EMPTY_EMAIL_MESSAGE,
  EMPTY_PASSWORD_MESSAGE,
  ERROR_EMAIL_MESSAGE,
} from '../src/common/constants.js';

const password = document.querySelector('#password');

const onSubmit = (e) => {
  e.preventDefault();

  if (e.target.email.value === TEST_EMAIL && e.target.password.value === TEST_PASSWORD) {
    location.href = '/folder/folder.html';
  } else {
    emailError.textContent = EMAIL_CHECK_MESSAGE;
    passwordError.textContent = PASSWORD_CHECK_MESSAGE;
  }
};

const emailInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    emailError.textContent = EMPTY_EMAIL_MESSAGE;
    e.target.classList.add('inputError');
  } else if (!isEmail(e.target.email.value)) {
    emailError.textContent = ERROR_EMAIL_MESSAGE;
    e.target.classList.add('inputError');
  } else {
    emailError.textContent = '';
    e.target.classList.remove('inputError');
  }
};

const passwordInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    passwordError.textContent = EMPTY_PASSWORD_MESSAGE;
    e.target.classList.add('inputError');
  } else {
    passwordError.textContent = '';
    e.target.classList.remove('inputError');
  }
};

const togglePasswordVisibility = () => {
  if (password.type === 'password') {
    password.type = 'text';
    eyeIconOff[0].style.display = 'none';
    eyeIconOn[0].style.display = 'inline-block';
  } else {
    password.type = 'password';
    eyeIconOff[0].style.display = 'inline-block';
    eyeIconOn[0].style.display = 'none';
  }
};

const eyeIconClick = (e) => {
  if (e.target.classList.contains('eye-icon')) {
    togglePasswordVisibility();
  }
};

form.addEventListener('submit', onSubmit);

email.addEventListener('focusout', emailInputCheck);

password.addEventListener('focusout', passwordInputCheck);

eyeIcon[0].addEventListener('click', eyeIconClick);
