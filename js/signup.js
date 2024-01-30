import {
  getEmailInput,
  getPasswordInput,
  getLoginForm,
  emailValidate,
  getPasswordCheck,
  passwordPattern,
} from './variable.js';
import { showError, hideError, pathTo } from './func.js';

const emailInput = getEmailInput('signup');
const passwordInput = getPasswordInput('signup');
const passwordCheck = getPasswordCheck();
const loginForm = getLoginForm('signup');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === 'test@codeit.com') {
    showError(emailInput, '이미 사용 중인 이메일입니다.');
  } else if (emailValue.length === 0) {
    showError(emailInput, '이메일을 확인해 주세요.');
  } else if (!passwordValue) {
    showError(passwordInput, '비밀번호를 입력해주세요.');
  } else if (passwordCheck.value.trim() !== passwordValue) {
    showError(passwordCheck, '비밀번호가 일치하지 않아요.');
  } else {
    pathTo('folder');
  }
});

emailInput.addEventListener('focusout', isValidateEmail);
passwordInput.addEventListener('focusout', () =>
  validatePassword(passwordInput),
);
passwordCheck.addEventListener('focusout', validatePasswordCheck);

function isValidateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showError(emailInput, '이메일을 입력해주세요.');
  } else if (!emailValidate.test(emailValue)) {
    showError(emailInput, '올바른 이메일 주소가 아닙니다.');
  } else if (emailValue === 'test@codeit.com') {
    showError(emailInput, '이미 사용 중인 이메일입니다.');
  } else {
    hideError(emailInput);
  }
}

function validatePassword(password) {
  const passwordValue = password.value.trim();

  if (passwordValue === '') {
    showError(password, '비밀번호를 입력해주세요.');
  } else if (!passwordPattern.test(passwordValue)) {
    showError(password, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else {
    hideError(password);
  }
}

function validatePasswordCheck() {
  const passwordValue = passwordInput.value.trim();
  const passwordValueCheck = passwordCheck.value.trim();

  if (passwordValue !== passwordValueCheck && passwordValueCheck !== '') {
    showError(passwordCheck, '비밀번호가 일치하지 않아요.');
  } else {
    validatePassword(passwordCheck);
  }
}
