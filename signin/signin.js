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
  TEST_PASSWORD,
  EMAIL_CHECK_MESSAGE,
  PASSWORD_CHECK_MESSAGE,
  EMPTY_EMAIL_MESSAGE,
  EMPTY_PASSWORD_MESSAGE,
  ERROR_EMAIL_MESSAGE,
} from '../src/common/constants.js';

const password = document.querySelector('#password');

const userAuth = {
  email: 'test@codeit.com',
  password: 'sprint101',
};

const onSubmit = (e) => {
  e.preventDefault();

  if (e.target.email.value === userAuth.email && e.target.password.value === userAuth.password) {
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userAuth),
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        location.href = '/folder/folder.html';
      });
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
  } else if (!isEmail(e.target.value)) {
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

const eyeIconClick = (e) => {
  if (e.target.classList.contains('eye-icon')) {
    const eyeOff = eyeIconOff[0];
    const eyeOn = eyeIconOn[0];
    togglePasswordVisibility(password, eyeOff, eyeOn);
  }
};

form.addEventListener('submit', onSubmit);

email.addEventListener('focusout', emailInputCheck);

password.addEventListener('focusout', passwordInputCheck);

eyeIcon[0].addEventListener('click', eyeIconClick);
