import {
  TEST_USER,
  validateEmail,
  validatePassword,
  inputError,
  inputSuccess,
  pwdEye,
} from "./modules/signModule.js";

// 이메일 유효검사
function validateEmailInput() {
  
  if (!validateEmail('signin')) {
    inputError('email-input');
  } else {
    inputSuccess('email-input');
  }

}
document.getElementById('email-input').addEventListener('focusout', validateEmailInput);

// 비밀번호 유효검사 
function validatePasswordInput() {

  if (!validatePassword('signin')) {
    inputError('pwd-input');
  } else {
    inputSuccess('pwd-input');
  }
}
document.getElementById('pwd-input').addEventListener('focusout', validatePasswordInput);

// 로그인 버튼
function signIn(e) {
  e.preventDefault();
  
  const email = document.getElementById('email-input').value.trim();
  const password = document.getElementById('pwd-input').value.trim();
  const emailError = document.getElementById('email-error')
  const pwdError = document.getElementById('pwd-error')

  if ( email === TEST_USER.email && password === TEST_USER.password) {
    location.href = 'folder.html';
  } else {

    if (email !== TEST_USER.email) {
      emailError.textContent = '이메일을 확인해 주세요';
      inputError('email-input');
    }
    if (password !== TEST_USER.password) {
      pwdError.textContent = '비밀번호를 확인해 주세요';
      inputError('pwd-input');
    }

  }
};
document.getElementById('signin-btn').addEventListener('click', signIn);

// 비밀번호 숨기기 & 보이기
function pwdShowHide1() {
  pwdEye('pwd-input', 'pwd-eye-img');
}
document.getElementById('pwd-eye-btn').addEventListener('click', pwdShowHide1);
