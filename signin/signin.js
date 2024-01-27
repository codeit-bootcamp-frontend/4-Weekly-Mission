import {
  form,
  email,
  emailError,
  passwordError,
  eyeIcon,
  TEST_EMAIL,
  TEST_PASSWORD,
  isEmail,
  removeEmpty,
  eyeIconOn,
  eyeIconOff,
} from '../src/common/sign.js';

const password = document.querySelector('#password');

const onSubmit = (e) => {
  e.preventDefault();

  if (email.value === TEST_EMAIL && password.value === TEST_PASSWORD) {
    location.href = '/folder/folder.html';
  } else {
    emailError.textContent = '이메일을 확인해 주세요.';
    passwordError.textContent = '비밀번호를 확인해 주세요.';
  }
};

const emailInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    emailError.textContent = '이메일을 입력해 주세요.';
    e.target.classList.add('inputError');
  } else if (!isEmail(email.value)) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    e.target.classList.add('inputError');
  } else {
    emailError.textContent = '';
    e.target.classList.remove('inputError');
  }
};

const passwordInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    passwordError.textContent = '비밀번호를 입력해 주세요.';
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
