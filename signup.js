import * as signFunctions from './signFunctions.js';

const emailInput = document.querySelector('#signup-email');
const pwInput = document.querySelector('#signup-pw');
const pwInputRepeat = document.querySelector('#signup-pw-repeat');
const pwOnOffImg = document.querySelectorAll('#pw-onoff');
let isPasswordVisible = [false];
const signButton = document.getElementById('signup-button');
const emailError = document.getElementById('email__error-msg');
const pwError = document.getElementById('pw__error-msg');
const pwRepeatError = document.getElementById('pw-repeat__error-msg');

//focus in event
emailInput.addEventListener('focus', function () {
  signFunctions.inputBorderBlue(emailInput);
});
pwInput.addEventListener('focus', function () {
  signFunctions.inputBorderBlue(pwInput);
});
pwInputRepeat.addEventListener('focus', function () {
  signFunctions.inputBorderBlue(pwInputRepeat);
});

//focus out event
emailInput.addEventListener('focusout', function () {
  signFunctions.usingEmailCheck(emailInput, emailError);
});

pwInput.addEventListener('focusout', function () {
  signFunctions.signupPasswordErrorCheck(pwInput, pwError, pwOnOffImg[0]);
});

pwInputRepeat.addEventListener('focusout', function () {
  signFunctions.signupPasswordCorrectCheck(
    pwInput,
    pwInputRepeat,
    pwRepeatError,
    pwOnOffImg[1]
  );
});

pwOnOffImg.forEach(function (e) {
  e.addEventListener('click', function () {
    signFunctions.signupPasswordVisibleSwitch(
      isPasswordVisible,
      pwOnOffImg,
      pwInput,
      pwInputRepeat
    );
  });
});
