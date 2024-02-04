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
    // 400이랑 409에 대한 경우만 따로 지정해야하는지?
    // API에서 400, 409에 관한 내용만 나와있어서 궁금합니다!
    if (response.status === 409 || response.status === 400) {
      showError(emailInput, responseData.error.message);
      return false;
    }
  }
  hideError(emailInput);
  return true;
}

function validatePassword(password) {
  const passwordValue = password.value.trim();

  if (passwordValue === '') {
    showError(password, '비밀번호를 입력해주세요.');
    return;
  }
  if (!passwordPattern.test(passwordValue)) {
    showError(password, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return;
  }
  hideError(password);
}

function validatePasswordCheck() {
  const passwordValue = passwordInput.value.trim();
  const passwordValueCheck = passwordCheck.value.trim();

  if (passwordValue !== passwordValueCheck && passwordValueCheck !== '') {
    showError(passwordCheck, '비밀번호가 일치하지 않아요.');
  }
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', () =>
  validatePassword(passwordInput),
);
passwordCheck.addEventListener('focusout', validatePasswordCheck);

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const passwordValue = passwordInput.value.trim();

  if (validateEmail()) {
    return;
  }
  if (!passwordValue) {
    showError(passwordInput, '비밀번호를 입력해주세요.');
    return;
  }
  if (!passwordPattern.test(passwordValue)) {
    showError(
      passwordInput,
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    );
    return;
  }
  if (passwordCheck.value.trim() !== passwordValue) {
    showError(passwordCheck, '비밀번호가 일치하지 않아요.');
    return;
  }

  pathTo('folder');
});
