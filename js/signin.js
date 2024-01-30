import {
  getEmailInput,
  getPasswordInput,
  getLoginForm,
  emailValidate,
  TEST_EMAIL,
  TEST_PASSWORD,
} from './variable';
import { showError, hideError, pathTo } from './func';

const emailInput = getEmailInput('signin');
const passwordInput = getPasswordInput('signin');
const loginForm = getLoginForm('signin');

loginForm.addEventListener('submit', (event) => {
  // preventDefault를 쓰고 form 타입을 사용해야 reload를 막을 수 있었네요...
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue !== TEST_EMAIL) {
    showError(emailInput, '이메일을 확인해 주세요.');
  } else if (passwordValue !== TEST_PASSWORD) {
    showError(passwordInput, '비밀번호를 확인해 주세요.');
  } else {
    pathTo('folder');
  }
});

function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showError(emailInput, '이메일을 입력해주세요.');
  } else if (!emailValidate.test(emailValue)) {
    showError(emailInput, '올바른 이메일 주소가 아닙니다.');
  } else {
    hideError(emailInput);
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === '') {
    showError(passwordInput, '비밀번호를 입력해주세요.');
  } else {
    hideError(passwordInput);
  }
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
