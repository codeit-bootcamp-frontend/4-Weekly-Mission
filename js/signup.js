import {
  Validator,
  emailRegex,
  pwdRegex,
  errorInput,
  pwdEye,
} from "./modules/signModule.js";

const pwdInput = document.getElementById('pwd-input')
const pwdCheckInput = document.getElementById('pwd-check-input');
const emailInput = document.getElementById('email-input');

// 이메일 유효검사
function emailValidator() {
  Validator('email-input', 'email-error', emailRegex, '이메일을 입력해 주세요.', 'id', 'signup');
  errorInput('email-input', 'email-error');
}
document.getElementById('email-input').addEventListener('focusout', emailValidator);

// 비밀번호 유효검사 
function pwdValidator() {
  Validator('pwd-input', 'pwd-error', pwdRegex, '비밀번호를 입력해 주세요.', 'pwd', 'signup');
  errorInput('pwd-input', 'pwd-error');
}
document.getElementById('pwd-input').addEventListener('focusout', pwdValidator);

// 비밀번호 확인 검사
function pwdCheck() {

  const pwdCheckError = document.getElementById('pwd-check-error');

  if (pwdInput.value.trim() === pwdCheckInput.value.trim()) {
    pwdCheckError.textContent = '';
  } else {
    pwdCheckError.textContent = '비밀번호가 일치하지 않아요.';
  }

  errorInput('pwd-check-input', 'pwd-check-error');

}
document.getElementById('pwd-check-input').addEventListener('focusout', pwdCheck);

// 회원가입 버튼
function signUp() {

  if (emailInput.value.trim() !== 'test@codeit.com' && emailRegex.test(emailInput.value),
    pwdCheckInput.value.trim() === pwdInput.value.trim() && pwdRegex.test(pwdInput.value)) {
    location.href = 'folder.html';
  } else {
    Validator('email-input', 'email-error', emailRegex, '이메일을 입력해 주세요.', 'id', 'signup');
    errorInput('email-input', 'email-error');

    Validator('pwd-input', 'pwd-error', pwdRegex, '비밀번호를 입력해 주세요.', 'pwd', 'signup');
    errorInput('pwd-input', 'pwd-error');

    pwdCheck();
  }
};
document.getElementById('signup-btn').addEventListener('click', signUp);

function loginEnter(e) {
  if (e.key === 'Enter') {
    signUp();
  }
};
emailInput.addEventListener('keypress', loginEnter);
pwdInput.addEventListener('keypress', loginEnter);
pwdCheckInput.addEventListener('keypress', loginEnter);

// 비밀번호 숨기기 & 보이기
function pwdShowHide1() {
  pwdEye('pwd-input', 'pwd-eye-img');
}
function pwdShowHide2() {
  pwdEye('pwd-check-input', 'pwdcheck-eye-img');
}
document.getElementById('pwd-eye-btn').addEventListener('click', pwdShowHide1);
document.getElementById('pwdcheck-eye-btn').addEventListener('click', pwdShowHide2);