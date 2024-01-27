import * as input from './commonChange_input.js';

const loginEmailInput = document.querySelector('#login__email-form');
const loginPwInput = document.querySelector('#login__password-form');
const loginEmailError = document.querySelector('.login__email-form--error');
const loginPwError = document.querySelector('.login__password-form--error');

const loginButton = document.querySelector('.login__info--loginBt');
const loginPasswordIcon = document.querySelector('.password__toggle-icon');

loginEmailInput.addEventListener('focusout', loginEmailFocusOut);
loginPwInput.addEventListener('focusout', loginpwFocusOut);
loginPasswordIcon.addEventListener('click', passwordToggleIcon);
loginButton.addEventListener('click', handleLoginButtonClick);
loginEmailInput.addEventListener('keyup',handleLoginButtonEnter);
loginPwInput.addEventListener('keyup',handleLoginButtonEnter);

//이메일 입력 확인
function loginEmailFocusOut(event) {
  input.emailHandleInputFocusOut(loginEmailInput,loginEmailError);
}

//비밀번호 확인
function loginpwFocusOut(event) {
  input.passwordHandleFocusOut(loginPwInput,loginPwError);
}

//비밀번호 아이콘 및 타입 변경
function passwordToggleIcon(event) {
  input.togglePasswordType(loginPwInput,loginPasswordIcon);
}

//엔터키
function handleLoginButtonEnter(event) {
  if (event.code === 'Enter') {
    handleLoginButtonClick();
  } 
}

//로그인 버튼 클릭 시
function handleLoginButtonClick(event) {
  if (loginEmailInput.value === 'test@codeit.com' && loginPwInput.value === 'codeit101') {
    window.location.href = "/folder";
  }
  else {
    loginCheck();
  }
}

//이메일 비밀번호가 틀렸을 때
const loginCheck = function () {
  loginPwError.textContent = '비밀번호를 확인해 주세요.';
  loginPwError.style.display = 'block';
  loginPwInput.style.borderColor = '#FF5B56'; 
  loginEmailError.textContent = '이메일을 확인해 주세요.';
  loginEmailError.style.display = 'block';
  loginEmailInput.style.borderColor = '#FF5B56'; 
}