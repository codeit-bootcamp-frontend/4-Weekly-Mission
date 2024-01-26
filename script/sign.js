// 이메일 정규식
import { EMAIL_REGEX } from './constants.js';
import { VALID_USER } from './utils.js';

// 에러 메시지 생성 함수
function createErrorMessage(id, text) {
  const errorMessage = document.getElementById(id) || document.createElement('div');
  errorMessage.id = id;
  errorMessage.className = 'error-message text-medium';
  errorMessage.innerText = text;
  return errorMessage;
}

// 유저 인증 함수
function authenticateUser(email, password) {
  return email === VALID_USER.email && password === VALID_USER.password;
}

// 이메일 형식 검증 함수
const isEmailValid = (email) => EMAIL_REGEX.test(email);

document.addEventListener('DOMContentLoaded', function () {
  // DOM 요소들 가져오기
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const signInButton = document.getElementById('cta');
  const watchPassword = document.getElementById('eye-button');

  // 에러 메시지 요소들 생성 및 초기화
  const emailErrorMessage = createErrorMessage('email-error', '');
  const passwordErrorMessage = createErrorMessage('password-error', '');

  emailInput.after(emailErrorMessage);
  passwordInput.after(passwordErrorMessage);

  // 이메일 입력란 focusin 이벤트 핸들러
  emailInput.addEventListener('focusin', function () {
    clearError(emailInput, emailErrorMessage);
  });

  // 이메일 입력란 focusout 이벤트 핸들러
  emailInput.addEventListener('focusout', function () {
    handleEmailInputFocusIn(emailInput, emailErrorMessage);
  });

  // 비밀번호 입력란 focusout 이벤트 핸들러
  passwordInput.addEventListener('focusout', function () {
    handlePasswordInputFocusOut(passwordInput, passwordErrorMessage);
  });

  // 로그인 버튼 클릭 이벤트 핸들러
  signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    emailInput.blur();
    passwordInput.blur();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (authenticateUser(emailValue, passwordValue)) {
      window.location.href = '../folder.html';
      return;
    }
    displayError(emailInput, emailErrorMessage, '이메일을 확인 해주세요.');
    displayError(passwordInput, passwordErrorMessage, '비밀번호를 확인 해주세요.');
  });

  // 비밀번호 보기/가리기 버튼 클릭 이벤트 핸들러
  watchPassword.addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    if (passwordInput.type === 'password') {
      togglePasswordVisibility(passwordInput, eyeIcon, 'eye-on.svg', 'text');
    } else {
      togglePasswordVisibility(passwordInput, eyeIcon, 'eye-off.svg', 'password');
    }
  });
});

// 에러 표시 함수
function displayError(inputElement, errorMessageElement, message) {
  inputElement.classList.add('error-box');
  errorMessageElement.innerText = message;
}

// 에러 초기화 함수
function clearError(inputElement, errorMessageElement) {
  inputElement.classList.remove('error-box');
  errorMessageElement.innerText = '';
}

// 비밀번호 입력란 focusout 이벤트 핸들러
function handlePasswordInputFocusOut(passwordInput, passwordErrorMessage) {
  const passwordValue = passwordInput.value;
  if (!passwordValue) {
    displayError(passwordInput, passwordErrorMessage, '비밀번호를 입력해주세요');
  }
}

// 이메일 입력란 focusout 이벤트 핸들러
function handleEmailInputFocusIn(emailInput, emailErrorMessage) {
  const emailValue = emailInput.value.trim();
  if (!emailValue) {
    displayError(emailInput, emailErrorMessage, '이메일을 입력해 주세요.');
  } else if (!isEmailValid(emailValue)) {
    displayError(emailInput, emailErrorMessage, '이메일을 확인해 주세요.');
  }
}

// 비밀번호 가시성 토글 함수
function togglePasswordVisibility(passwordInput, eyeIcon, imgSrc, inputType) {
  eyeIcon.src = `../assets/icon/${imgSrc}`;
  passwordInput.type = inputType;
}
