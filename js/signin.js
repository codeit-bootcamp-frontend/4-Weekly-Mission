import { TEST_EMAIL, TEST_PASSWORD } from './variable.js';
import {
  getEmailInput,
  getPasswordInput,
  getLoginForm,
} from './helpers/utils/index.js';
import { emailValidate } from './constants/regex/index.js';
import { showError, hideError, pathTo } from './func.js';

const emailInput = getEmailInput('signin');
const passwordInput = getPasswordInput('signin');
const loginForm = getLoginForm('signin');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue !== TEST_EMAIL) {
    showError(emailInput, '이메일을 확인해 주세요.');
    return;
  }
  if (passwordValue !== TEST_PASSWORD) {
    showError(passwordInput, '비밀번호를 확인해 주세요.');
    return;
  }
  pathTo('folder');
});

function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showError(emailInput, '이메일을 입력해주세요.');
    return;
  }
  if (!emailValidate.test(emailValue)) {
    showError(emailInput, '올바른 이메일 주소가 아닙니다.');
    return;
  }
  hideError(emailInput);
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === '') {
    showError(passwordInput, '비밀번호를 입력해주세요.');
    return;
  }
  hideError(passwordInput);
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
