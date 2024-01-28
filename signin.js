import * as signFunctions from './signFunctions.js';

const emailInput = document.getElementById('signin-email');
const pwInput = document.getElementById('signin-pw');
const pwOnOffImg = document.getElementById('pw-onoff');
let isPasswordVisible = [false];
const signButton = document.getElementById('signin-button');
const emailError = document.getElementById('email__error-msg');
const pwError = document.getElementById('pw__error-msg');

// focus in 시에 파란색테두리 변경
emailInput.addEventListener('focus', function () {
  signFunctions.inputBorderBlue(emailInput);
});
pwInput.addEventListener('focus', function () {
  signFunctions.inputBorderBlue(pwInput);
});

//focus out 시에 에러 검사
emailInput.addEventListener('focusout', function () {
  signFunctions.emailErrorCheck(emailInput, emailError);
});

pwInput.addEventListener('focusout', function () {
  signFunctions.signinPasswordErrorCheck(pwInput, pwError, pwOnOffImg);
});

//비밀번호 확인기능
pwOnOffImg.addEventListener('click', function () {
  signFunctions.passwordVisibleSwitch(isPasswordVisible, pwOnOffImg, pwInput);
});

//버튼에 클릭,엔터 이벤트시에 로그인 함수 기능 추가
signButton.addEventListener('click', function (e) {
  e.preventDefault();
  signFunctions.signIn(emailInput, pwInput, emailError, pwError, pwOnOffImg);
});
signButton.addEventListener('keypress', function (e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    signFunctions.signIn(emailInput, pwInput, emailError, pwError, pwOnOffImg);
  }
});
