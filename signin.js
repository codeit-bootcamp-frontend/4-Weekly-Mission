import {
  isValidEmail,
  showErrorMessage,
  hideErrorMessage,
  passwordToggle,

  toggleIcon,
  emailInput,
  passwordInput,
  emailError,
  passwordError,
} from './common.js';

const loginButton = document.getElementById('signinButton');

function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showErrorMessage(emailError, '이메일을 입력해 주세요.');
  } else if (!isValidEmail(emailValue)) {
    showErrorMessage(emailError, '올바른 이메일 주소가 아닙니다.');
  } else {
    hideErrorMessage(emailError);
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === '') {
    showErrorMessage(passwordError, '비밀번호를 입력해 주세요.');
  } else {
    hideErrorMessage(passwordError);
  }
}

function handleKeyPress(e) {
  if(e.key === 'Enter') {
      attemptLogin();
      e.preventDefault(); //엔터키 누를 시 form을 form의 action 속성으로 전송하는 기본 동작 방지
  }
}

function attemptLogin(e) {
  validateEmail();
  validatePassword();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
    // 로그인 성공 시 페이지 이동
    console.log('로그인 성공');
    e.preventDefault(); //submit 버튼 클릭 시 페이지가 새로고침되는 기본 동작 방지
    window.location.href = 'folder.html';
  } else {
    if (emailValue !== 'test@codeit.com') {
      showErrorMessage(emailError, '이메일을 확인해 주세요.');
    }
    if (passwordValue !== 'codeit101') {
      showErrorMessage(passwordError, '비밀번호를 확인해 주세요.');
    }
  }
}

emailInput.addEventListener('focusout', validateEmail);
passwordInput.addEventListener('focusout', validatePassword);
toggleIcon.addEventListener('click', passwordToggle);
loginButton.addEventListener('click', attemptLogin);
window.addEventListener('keypress', handleKeyPress);
