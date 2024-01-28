import * as signJs from "./sign.js";
import {
  myInputEmail, 
  myInputPassword, 
  errorMessageId, 
  errorMessagePw,
  login, 
  toggleButtonPw,
  eyeOff, 
  eyeOn,
  addClassError,
  removeClassError,
} from './signin.js';

const getMyInputPassword = document.querySelector('.input-password-get');
const checkMyInputPassword = document.querySelector('.input-password-check');
const errorMessagePwCheck = document.getElementById('error-message-pw-check');
const checkError = (input) =>  !errorMessageId.classList.contains('error');
const eyeOnCheck = document.getElementById('eye-on-1');
const eyeOffCheck = document.getElementById('eye-off-1');
const toggleButtonPwCheck = document.querySelector('.eye-button-1');

myInputEmail.addEventListener('focusout', function() {
  const answerEmail = 'test@codeit.com';
  if (myInputEmail.value === '') 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.NoInputId);
  else if (!signJs.isValidEmail(myInputEmail.value)) 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.InvalidId);
  else if (myInputEmail.value === answerEmail) 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.CantUseId);
  else 
    removeClassError(errorMessageId, myInputEmail);
});

myInputPassword.addEventListener('focusout', function() {
  if (myInputPassword.value === '') 
    addClassError(errorMessagePw, myInputPassword, signJs.ErrorMessage.NoInputPassword);
  else if(!signJs.isValidPassword(myInputPassword.value))
    addClassError(errorMessagePw, myInputPassword, signJs.ErrorMessage.InvalidPassword);
  else
    removeClassError(errorMessagePw, myInputPassword);
});

login.addEventListener('click', function() {
  if (getMyInputPassword.value !== checkMyInputPassword.value) 
    addClassError(errorMessagePwCheck, checkMyInputPassword, signJs.ErrorMessage.UnmatchedPassword);
  else if (checkError(errorMessageId) && checkError(errorMessagePw) && checkError(errorMessagePwCheck) && myInputPassword.value !== '')
    window.location.href = '/folder';
})

// 검색하여 form 제출 시 페이지 새로고침되지 않게 함.
document.querySelector('.sign-form').addEventListener('submit', function(event) {
  event.preventDefault();
});

toggleButtonPw.addEventListener('click', function() {
  if (getMyInputPassword.type === 'password') {
    getMyInputPassword.type = 'text';
    eyeOn.style.display = 'none';
    eyeOff.style.display = 'block';
  } else {
    getMyInputPassword.type = 'password';
    eyeOn.style.display = 'block';
    eyeOff.style.display = 'none';
  }
});

toggleButtonPwCheck.addEventListener('click', function() {
  if (checkMyInputPassword.type === 'password') {
    checkMyInputPassword.type = 'text';
    eyeOnCheck.style.display = 'none';
    eyeOffCheck.style.display = 'block';
  } else {
    checkMyInputPassword.type = 'password';
    eyeOnCheck.style.display = 'block';
    eyeOffCheck.style.display = 'none';
  }
});



