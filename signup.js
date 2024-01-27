import * as input from './commonChange_input.js';

const signupEmailInput = document.querySelector('#signup__email-form');
const signupPwInput = document.querySelector('#signup__password-form');
const signupPwCheckInput = document.querySelector('#signup__pwscheck-form');

const signupEmailError = document.querySelector('.signup__email-form--error');
const signupPwError = document.querySelector('.signup__password-form--error');
const signupPwCheckError = document.querySelector('.signup__pwcheck-form--error');

const signupButton = document.querySelector('.signup__form--signupBt');
const signupPasswordIcon = document.querySelector('.password__toggle-icon');

signupEmailInput.addEventListener('focusout', signupEmailFocusOut);
signupPwInput.addEventListener('focusout', signuppwFocusOut);

signupPasswordIcon.forEach(button => {
  button.addEventListener('click', passwordToggleIcon);
});
signupButton.addEventListener('click', handlesignupButtonClick);

signupEmailInput.addEventListener('keyup',handlesignupButtonEnter);
signupPwInput.addEventListener('keyup',handlesignupButtonEnter);

//이메일 입력 확인 (공통)
function signupEmailFocusOut(event) {
  input.emailHandleInputFocusOut(signupEmailInput,signupEmailError);
}

//비밀번호 확인 (공통)
function signuppwFocusOut(event) {
  input.passwordHandleFocusOut(signupPwInput,signupPwError);
}

//비밀번호 아이콘 및 타입 변경 (공통)
function passwordToggleIcon(event) {
  input.togglePasswordType(signupPwInput,signupPasswordIcon);
}

//엔터키
function handlesignupButtonEnter(event) {
  if (event.code === 'Enter') {
    handlesignupButtonClick();
  } 
}

//로그인 버튼 클릭 시
function handlesignupButtonClick(event) {
  if (signupEmailInput.value === 'test@codeit.com' && signupPwInput.value === 'codeit101') {
    window.location.href = "/folder";
  }
  else {
    signupCheck();
  }
}

//이메일 비밀번호가 틀렸을 때
const signupCheck = function () {
  signupPwError.textContent = '비밀번호를 확인해 주세요.';
  signupPwError.style.display = 'block';
  signupPwInput.style.borderColor = '#FF5B56'; 
  signupEmailError.textContent = '이메일을 확인해 주세요.';
  signupEmailError.style.display = 'block';
  signupEmailInput.style.borderColor = '#FF5B56'; 
}