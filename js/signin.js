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

async function sendDataToAPI() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  });
  const result = await response.json();
  window.localStorage.setItem('accessToken', result.data.accessToken);
  return pathTo('folder');
}

function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showError(emailInput, '이메일을 입력해주세요.');
    return false;
  }
  if (!emailValidate.test(emailValue)) {
    showError(emailInput, '올바른 이메일 주소가 아닙니다.');
    return false;
  }
  hideError(emailInput);
  return true;
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === '') {
    showError(passwordInput, '비밀번호를 입력해주세요.');
    return false;
  }
  hideError(passwordInput);
  return true;
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue !== TEST_EMAIL) {
    showError(emailInput, '이메일을 확인해 주세요.');
    return false;
  }
  if (passwordValue !== TEST_PASSWORD) {
    showError(passwordInput, '비밀번호를 확인해 주세요.');
    return false;
  }

  sendDataToAPI();
  return true;
});
