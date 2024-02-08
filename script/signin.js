import {
  createErrorMessage,
  isEmailValid,
  displayError,
  clearError,
  handlePasswordInputFocusOut,
  handleEmailInputFocusIn,
  togglePasswordVisibility,
} from './utils.js';

import { signIn } from './apiUtils.js';
localStorage.removeItem('accessToken');
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const signInButton = document.getElementById('btn_login');
  const watchPassword = document.getElementById('eye-button');

  // 에러 메시지 요소들 생성 및 초기화
  const emailErrorMessage = createErrorMessage('email-error', '');
  const passwordErrorMessage = createErrorMessage('password-error', '');

  // 이메일, 비밀번호 입력란 뒤에 에러 메시지 요소 추가
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
  signInButton.addEventListener('click', async function (event) {
    event.preventDefault();
    emailInput.blur();
    passwordInput.blur();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // 이메일 유효성 검증
    if (!isEmailValid(emailValue)) {
      displayError(emailInput, emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
      return;
    }

    // 사용자 로그인 시도
    const loginResult = await signIn(emailValue, passwordValue);
    if (loginResult.success) {
      window.location.href = '/folder';
    } else {
      // 로그인 실패 시 에러 메시지 표시
      displayError(emailInput, emailErrorMessage, '이메일 또는 비밀번호를 확인해 주세요.');
    }
    // 사용자 인증 실패 시, 에러 메시지 표시
    displayError(emailInput, emailErrorMessage, '이메일을 확인 해주세요.');
    displayError(passwordInput, passwordErrorMessage, '비밀번호를 확인 해주세요.');
  });

  // 비밀번호 보기/가리기 버튼 클릭 이벤트 핸들러
  watchPassword.addEventListener('click', function () {
    const eyeIcon = document.getElementById('eye-icon');
    const imgSrc = passwordInput.type === 'password' ? 'eye-on.svg' : 'eye-off.svg';

    // 비밀번호의 가시성 토글 함수 호출
    togglePasswordVisibility(
      passwordInput,
      eyeIcon,
      imgSrc,
      passwordInput.type === 'password' ? 'text' : 'password'
    );
  });
});
