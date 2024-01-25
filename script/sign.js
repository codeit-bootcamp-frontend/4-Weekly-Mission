import { EMAIL_REGEX } from './constants.js';

// 에러 메시지 생성 함수
function createErrorMessage(text) {
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message text-medium';
  errorMessage.innerText = text;
  return errorMessage;
}

// 이메일 형식 검증 함수
const isEmailValid = (email) => EMAIL_REGEX.test(email);

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const signInButton = document.getElementById('cta');
  const watchPassword = document.getElementById('eye-button');

  const emailErrorMessage = createErrorMessage('');
  emailErrorMessage.style.dsiplay = 'none';
  const passwordErrorMessage = createErrorMessage('');
  passwordErrorMessage.style.dsiplay = 'none';
  emailInput.after(emailErrorMessage);
  passwordInput.after(passwordErrorMessage);

  emailInput.addEventListener('focusin', function () {
    emailErrorMessage.style.display = 'none';
    emailErrorMessage.classList.remove('error-box');
  });

  emailInput.addEventListener('focusout', function () {
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      emailInput.classList.add('error-box');
      emailErrorMessage.style.display = 'block';
      emailErrorMessage.innerText = '이메일을 입력해 주세요.';
      return;
    }
    if (!isEmailValid(emailValue)) {
      emailInput.classList.add('error-box');
      emailErrorMessage.style.display = 'block';
      emailErrorMessage.innerText = '이메일을 확인해 주세요';
      return;
    }
    emailInput.classList.remove('error-box');
  });

  passwordInput.addEventListener('focusin', function () {
    passwordErrorMessage.style.display = 'none';
    passwordInput.classList.remove('error-box');
  });

  passwordInput.addEventListener('focusout', function () {
    const passwordValue = passwordInput.value;
    if (!passwordValue) {
      passwordInput.classList.add('error-box');
      passwordErrorMessage.style.display = 'block';
      passwordErrorMessage.innerText = '비밀번호 입력해주세용';
      return;
    }
  });

  signInButton.addEventListener('click', function (event) {
    event.preventDefault();
    emailInput.blur();
    passwordInput.blur();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
      window.location.href = '../folder.html';
    } else {
      emailErrorMessage.innerText = '이메일을 확인 해주세요.';
      passwordErrorMessage.innerText = '비밀번호를 확인 해주세요.';
      emailErrorMessage.style.display = 'block';
      passwordErrorMessage.style.display = 'block';
      emailInput.classList.add('error-box');
      passwordInput.classList.add('error-box');
    }
  });

  // 비밀번호 보기/가리기 버튼 클릭 이벤트 처리
  watchPassword.addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    if (passwordInput.type === 'password') {
      const imgSrc = '../assets/icon/eye-on.svg';
      eyeIcon.src = imgSrc;
      passwordInput.type = 'text';
    } else {
      const imgSrc = '../assets/icon/eye-off.svg';
      eyeIcon.src = imgSrc;
      passwordInput.type = 'password';
    }
  });
});
