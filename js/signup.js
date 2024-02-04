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
    return false;
  }
  if (!passwordPattern.test(passwordValue)) {
    showError(password, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  }
  hideError(password);
  return true;
}

function validatePasswordCheck() {
  const passwordValue = passwordInput.value.trim();
  const passwordValueCheck = passwordCheck.value.trim();

  if (passwordValue !== passwordValueCheck && passwordValueCheck !== '') {
    showError(passwordCheck, '비밀번호가 일치하지 않아요.');
    return false;
  }
  return true;
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', () =>
  validatePassword(passwordInput),
);
passwordCheck.addEventListener('focusout', validatePasswordCheck);

// 회원가입 파트에서 비밀번호 확인에 대한 에러 메세지가 안나옵니다 ㅠㅠ
// 혹시 제가 어디서 잘못했는지 확인해주실 수 있을까요 ㅠㅠ
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const passwordValue = passwordInput.value.trim();

  if (validateEmail()) {
    return false;
  }
  if (!passwordValue) {
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
  if (passwordCheck.value.trim() !== passwordValue) {
    showError(passwordCheck, '비밀번호가 일치하지 않아요.');
    return false;
  }

  pathTo('folder');
  return true;
});

// loginForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // const passwordValue = passwordInput.value.trim();

//   if (!validateEmail()) {
//     return false;
//   }
//   if (!validatePassword(passwordInput)) {
//     return false;
//   }
//   if (!validatePasswordCheck()) {
//     // 비밀번호 확인 부분에 에러가 안뜹니다 ㅠㅠ
//     // showError(passwordCheck, '비밀번호가 일치하지 않아요.');
//     return false;
//   }
//   pathTo('folder');
//   return true;
// });
