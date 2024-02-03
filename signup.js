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
  passwordInputCheck,
  toggleEyeImage,
} from './signin.js';

const getMyInputPassword = document.querySelector('.input-password-get');
const checkMyInputPassword = document.querySelector('.input-password-check');
const errorMessagePwCheck = document.getElementById('error-message-pw-check');
const checkError = (input) =>  !errorMessageId.classList.contains('error');
const toggleButtonPwCheck = document.querySelector('.eye-button-1');
const eyeOn1 = document.getElementById('eye-on-1');
const eyeOff1 = document.getElementById('eye-off-1');
function checkPasswordInputCheck() {
  if (checkMyInputPassword.value === '') {
    addClassError(errorMessagePwCheck, checkMyInputPassword, signJs.ErrorMessage.NoInputPassword);
  } else {
    removeClassError(errorMessagePwCheck, checkMyInputPassword);
  }
}

function emailInputCheck() {
  const answerEmail = 'test@codeit.com';
  if (myInputEmail.value === '') 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.NoInputId);
  else if (!signJs.isValidEmail(myInputEmail.value)) 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.InvalidId);
  else if (myInputEmail.value === answerEmail) 
    addClassError(errorMessageId, myInputEmail, signJs.ErrorMessage.CantUseId);
  else 
    removeClassError(errorMessageId, myInputEmail);
}

function emailInputValueCheck() {
  if (getMyInputPassword.value !== checkMyInputPassword.value) 
    addClassError(errorMessagePwCheck, checkMyInputPassword, signJs.ErrorMessage.UnmatchedPassword);
  else if (checkError(errorMessageId) && checkError(errorMessagePw) && checkError(errorMessagePwCheck) && myInputPassword.value !== '')
    window.location.href = '/folder';
  }

function toggleEyeImage1() {
   if (checkMyInputPassword.type === 'text') {
     checkMyInputPassword.type = 'password';
     eyeOn1.style.display = 'none';
     eyeOff1.style.display = 'block';
   } else {
     checkMyInputPassword.type = 'text';
     eyeOn1.style.display = 'block';
     eyeOff1.style.display = 'none';
   }
 }

myInputEmail.addEventListener('focusout', emailInputCheck);
myInputPassword.addEventListener('focusout', passwordInputCheck);
checkMyInputPassword.addEventListener('focusout', checkPasswordInputCheck);
login.addEventListener('click', emailInputValueCheck);

// 검색하여 form 제출 시 페이지 새로고침되지 않게 함.
document.querySelector('.sign-form').addEventListener('submit', function(event) {
  event.preventDefault();
});

toggleButtonPw.addEventListener('click', toggleEyeImage);
toggleButtonPwCheck.addEventListener('click', toggleEyeImage1);




