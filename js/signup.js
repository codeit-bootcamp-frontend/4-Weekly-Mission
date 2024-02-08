import {
  getEmailInput,
  getPasswordInput,
  getLoginForm,
  getPasswordCheck,
} from './helpers/utils/index.js';
import { passwordPattern } from './constants/regex/index.js';
import { showError, hideError, pathTo } from './func.js';

const emailInput = getEmailInput('signup');
const passwordInput = getPasswordInput('signup');
const passwordCheck = getPasswordCheck();
const loginForm = getLoginForm('signup');

async function validateEmail() {
  const emailValue = emailInput.value.trim();
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/check-email',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailValue,
      }),
    },
  );

  const responseData = await response.json();

  if (!response.ok) {
    if (response.status === 409 || response.status === 400) {
      showError(emailInput, responseData.error.message);
      return false;
    }
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
  if (!passwordPattern.test(passwordValue)) {
    showError(
      passwordInput,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    );
    return false;
  }
  hideError(passwordInput);
  return true;
}

function validatePasswordCheck() {
  const passwordValue = passwordInput.value.trim();
  const passwordValueCheck = passwordCheck.value.trim();

  if (passwordValue !== passwordValueCheck && passwordValueCheck !== '') {
    showError(passwordCheck, '비밀번호가 일치하지 않아요.');
    return false;
  }
  hideError(passwordCheck);
  return true;
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
passwordCheck.addEventListener('focusout', validatePasswordCheck);

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateEmail()) return false;
  if (!validatePassword()) return false;
  if (!validatePasswordCheck()) return false;

  pathTo('folder');
  return true;
});
