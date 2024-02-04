import {
  setInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from './utils.js';

const emailInput = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#email-error-message');
emailInput.addEventListener('focusout', (event) =>
  validateEmailInput(event.target.value)
);
function validateEmailInput(email) {
  if (email === '') {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      '이메일을 입력해주세요.'
    );
    return;
  }
  if (!isEmailValid(email)) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      '올바른 이메일 주소가 아닙니다.'
    );
    return;
  }
  removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}

const passwordInput = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('#password-error-message');
passwordInput.addEventListener('focusout', (event) =>
  validatePasswordInput(event.target.value)
);
function validatePasswordInput(password) {
  if (password === '') {
    setInputError(
      { input: passwordInput, errorMessage: passwordErrorMessage },
      '비밀번호를 입력해주세요.'
    );
    return;
  }
  removeInputError({
    input: passwordInput,
    errorMessage: passwordErrorMessage,
  });
}

const passwordToggleButton = document.querySelector('#password-toggle');
passwordToggleButton.addEventListener('click', () =>
  togglePassword(passwordInput, passwordToggleButton)
);

const signForm = document.querySelector('#form');
signForm.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();

  const isTestUser =
    emailInput.value === TEST_USER.email &&
    passwordInput.value === TEST_USER.password;

  if (isTestUser) {
    location.href = '/folder';
    return;
  }
  setInputError(
    { input: emailInput, errorMessage: emailErrorMessage },
    '이메일을 확인해주세요.'
  );
  setInputError(
    { input: passwordInput, errorMessage: passwordErrorMessage },
    '비밀번호를 확인해주세요.'
  );
}

const requestData = {
  email: 'test@codeit.com',
  password: 'sprint101',
};

fetch('/api/sign-in', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestData),
})
  .then((response) => {
    if (response.ok) {
      // 요청이 성공하면 '/folder'로 이동
      window.location.href = '/folder';
    } else {
      // 요청이 실패하면 에러 처리
      console.error('Failed to sign in:', response.statusText);
    }
  })
  .catch((error) => {
    console.error('Error during sign-in:', error);
  });
