import {
  Validator,
  emailRegex,
  pwdRegex,
  errorInput,
  pwdEye,
} from "./modules/signModule.js";

const pwdInput = document.getElementById('pwd-input')
const emailInput = document.getElementById('email-input');

// 이메일 유효검사
function emailValidator() {
  Validator('email-input', 'email-error', emailRegex, '이메일을 입력해 주세요.', 'id', 'signin')
  errorInput('email-input', 'email-error')
}
document.getElementById('email-input').addEventListener('focusout', emailValidator);

// 비밀번호 유효검사 
function pwdValidator() {
  Validator('pwd-input', 'pwd-error', pwdRegex, '비밀번호를 입력해 주세요.', 'pwd', 'signin')
  errorInput('pwd-input', 'pwd-error')
}
document.getElementById('pwd-input').addEventListener('focusout', pwdValidator);

// 로그인 버튼
function signIn() {
  const emailError = document.getElementById('email-error')
  const pwdError = document.getElementById('pwd-error')

  if (emailInput.value.trim() === 'test@codeit.com' && pwdInput.value.trim() === 'codeit101') {
    location.href = 'folder.html';
  } else {

    if (emailInput.value.trim() !== 'test@codeit.com') {
      emailError.textContent = '이메일을 확인해 주세요';
      emailInput.classList.remove('sign-input');
      emailInput.classList.add('sign-input-error');
    }
    if (pwdInput.value.trim() !== 'codeit101') {
      pwdError.textContent = '비밀번호를 확인해 주세요';
      pwdInput.classList.remove('sign-input');
      pwdInput.classList.add('sign-input-error');
    }

  }
};
document.getElementById('signin-btn').addEventListener('click', signIn);

function loginEnter(e) {
  if (e.key === 'Enter') {
    signIn();
  }
};
emailInput.addEventListener('keypress', loginEnter);
pwdInput.addEventListener('keypress', loginEnter);

// 비밀번호 숨기기 & 보이기
function pwdShowHide1() {
  pwdEye('pwd-input', 'pwd-eye-img');
}
document.getElementById('pwd-eye-btn').addEventListener('click', pwdShowHide1);
