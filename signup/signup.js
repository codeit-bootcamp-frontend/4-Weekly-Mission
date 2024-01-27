import {
  form,
  email,
  emailError,
  eyeIcon,
  TEST_EMAIL,
  TEST_PASSWORD,
  isEmail,
  removeEmpty,
} from '../src/common/sign.js';

const passwordCheck = document.querySelector('.password_check');
const passwordReCheck = document.querySelector('.password_recheck');

const passwordError = document.querySelector('.password-error');
const passwordErrorCheck = document.querySelector('.password-error-check');

const emailInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length <= 0) {
    emailError.textContent = '이메일을 입력해 주세요.';
    e.target.classList.add('inputError');
  } else if (!isEmail(email.value)) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    e.target.classList.add('inputError');
  } else if (e.target.value === TEST_EMAIL) {
    emailError.textContent = '이미 사용 중인 이메일입니다.';
  } else {
    emailError.textContent = '';
    e.target.classList.remove('inputError');
  }
};

const passwordInputCheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (e.target.value.length < 8 || !/\d/.test(e.target.value) || !/[a-zA-Z]/.test(e.target.value)) {
    passwordError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    e.target.classList.add('inputError');
  } else {
    passwordError.textContent = '';
    e.target.classList.remove('inputError');
  }
};

const passwordInputRecheck = (e) => {
  e.target.value = removeEmpty(e.target.value);

  if (passwordCheck.value !== e.target.value) {
    passwordErrorCheck.textContent = '비밀번호가 일치하지 않아요.';
    e.target.classList.add('inputError');
  } else {
    passwordErrorCheck.textContent = '';
    e.target.classList.remove('inputError');
  }
};

email.addEventListener('focusout', emailInputCheck);

passwordCheck.addEventListener('focusout', passwordInputCheck);

passwordReCheck.addEventListener('focusout', passwordInputRecheck);
