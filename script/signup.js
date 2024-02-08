import {
  createErrorMessage,
  authenticateUser,
  isEmailValid,
  displayError,
  clearError,
  handlePasswordInputFocusOut,
  handleEmailInputFocusIn,
  togglePasswordVisibility,
  checkDuplicateEmail,
} from './utils.js';

import { signUp } from './apiUtils.js';

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordcheckInput = document.getElementById('passwordcheck');
  const signInButton = document.getElementById('btn_login');
  const watchPassword = document.getElementById('eye-button');

  // 에러 메시지 요소들 생성 및 초기화
  const emailErrorMessage = createErrorMessage('email-error', '');
  const passwordErrorMessage = createErrorMessage('password-error', '');
  const passwordCheckErrorMessage = createErrorMessage('password-check-error', ''); // 추가: 비밀번호 확인 에러 메시지

  // 이메일, 비밀번호 입력란 뒤에 에러 메시지 요소 추가
  emailInput.after(emailErrorMessage);
  passwordInput.after(passwordErrorMessage);
  passwordcheckInput.after(passwordCheckErrorMessage); // 추가: 비밀번호 확인 에러 메시지

  // 이메일 입력란 focusin 이벤트 핸들러 등록
  emailInput.addEventListener('focusin', function () {
    handleEmailInputFocusIn(emailInput, emailErrorMessage);
    clearError(emailInput, emailErrorMessage);
  });

  // 이메일 입력란 focusout 이벤트 핸들러
  emailInput.addEventListener('focusout', async function () {
    handleEmailInputFocusIn(emailInput, emailErrorMessage);
    await checkDuplicateEmail(emailInput, emailErrorMessage);
  });
  // 비밀번호 입력란 focusout 이벤트 핸들러s
  passwordInput.addEventListener('focusout', function () {
    handlePasswordInputFocusOut(passwordInput, passwordErrorMessage);
  });

  // 비밀번호 확인 입력란 focusout 이벤트 핸들러
  passwordcheckInput.addEventListener('focusout', function () {
    handlePasswordCheckInputFocusOut(passwordcheckInput, passwordCheckErrorMessage, passwordInput);
  });

  // 비밀번호 확인 입력란 focusout 이벤트 핸들러에서 비밀번호 일치 여부 체크
  function handlePasswordCheckInputFocusOut(
    passwordcheckInput,
    passwordCheckErrorMessage,
    passwordInput
  ) {
    const passwordCheckValue = passwordcheckInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!passwordCheckValue) {
      displayError(passwordcheckInput, passwordCheckErrorMessage, '비밀번호를 다시 입력해주세요.');
      return;
    }
    if (passwordCheckValue !== passwordValue) {
      displayError(passwordcheckInput, passwordCheckErrorMessage, '비밀번호가 일치하지 않아요.');
      return;
    }

    clearError(passwordcheckInput, passwordCheckErrorMessage);
  }

  // 비밀번호 입력란 focusin 이벤트 핸들러
  passwordInput.addEventListener('focusin', function () {
    clearError(passwordInput, passwordErrorMessage);
  });

  // 비밀번호 확인 입력란 focusin 이벤트 핸들러
  passwordcheckInput.addEventListener('focusin', function () {
    clearError(passwordcheckInput, passwordCheckErrorMessage);
  });
  // 로그인 버튼 클릭 이벤트 핸들러
  signInButton.addEventListener('click', async function (event) {
    event.preventDefault();
    emailInput.blur();
    passwordInput.blur();
    passwordcheckInput.blur(); // 추가: 비밀번호 확인 input도 blur 처리
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // 이메일 유효성 검증
    if (!isEmailValid(emailValue)) {
      displayError(emailInput, emailErrorMessage, '올바른 이메일 주소가 아닙니다.');
      return;
    }

    // 회원가입 요청
    const signUpResult = signUp(emailValue, passwordValue);
    if (signUpResult.success) {
      window.location.href = '../folder.html';
    } else {
      displayError(emailInput, emailErrorMessage, '이메일 또는 비밀번호를 확인해 주세요.');
    }

    // 사용자 인증 성공 시, 페이지 이동
    if (authenticateUser(emailValue, passwordValue)) {
      window.location.href = '../folder.html';
      return;
    }

    // 사용자 인증 실패 시, 에러 메시지 표시
    displayError(emailInput, emailErrorMessage, '이메일을 확인 해주세요.');
    displayError(passwordInput, passwordErrorMessage, '비밀번호를 확인 해주세요.');
  });

  // 비밀번호 보기/가리기 버튼 클릭 이벤트 핸들러
  watchPassword.addEventListener('click', function () {
    const eyeIcon = document.getElementById('eye-icon');
    const eyeIconCheck = document.getElementById('eye-icon-check');
    const imgSrc = passwordInput.type === 'password' ? 'eye-on.svg' : 'eye-off.svg';
    const imgSrcCheck = passwordcheckInput.type === 'password' ? 'eye-on.svg' : 'eye-off.svg';
    // 비밀번호 확인의 가시성 토글 함수 호출
    togglePasswordVisibility(
      passwordcheckInput,
      eyeIconCheck,
      imgSrcCheck,
      passwordcheckInput.type === 'password' ? 'text' : 'password'
    );
    // 비밀번호 가시성 토글 함수 호출
    togglePasswordVisibility(
      passwordInput,
      eyeIcon,
      imgSrc,
      passwordInput.type === 'password' ? 'text' : 'password'
    );
  });
  // 추가: 비밀번호 확인 입력란의 에러 제거
  clearError(passwordcheckInput, passwordCheckErrorMessage);
});
