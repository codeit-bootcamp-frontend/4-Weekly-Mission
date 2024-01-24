import * as DOM from './lib/DOM.js'
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE
} from './constant/signVariable.js'

// 아이디, 비밀번호 input 요소들
const SIGN_EMAIL_INPUT = DOM.selectElement('#email-input');
const SIGN_PASSWORD_INPUT = DOM.selectElement('#password-input');

// 눈 아이콘 버튼
const EYE_BUTTON = DOM.selectElement('.eye-button-icon');

//클래스 이름 상수화
const SHOW_ERROR_CLASS_NAME = 'show-error';
const RED_BORDER_CLASS_NAME = 'red-border';

function isEmailRegexError(){
  const emailValue = SIGN_EMAIL_INPUT.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    return true;
  }
  return false; 
}
function isEmailFormatError(){
  const emailValue = SIGN_EMAIL_INPUT.value.trim();
  if (emailValue === '') {
    return true;
  }
  return false;
}
function isPasswordFormatError(){
  const passwordValue = SIGN_PASSWORD_INPUT.value.trim();
  if(passwordValue === ''){
    return true
  }
  return false
}

// target에 className에 해당하는 class를 추가한다.
function addClassList(target, className){
  target.classList.add(className)
}

// target에 className에 해당하는 class를 제거한다.
function removeClassList(target, className){
  target.classList.remove(className)
}

function initEmailErrorStatus(){
  removeClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  removeClassList(SIGN_EMAIL_INPUT, RED_BORDER_CLASS_NAME)
  removeClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
  removeClassList(EMAIL_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
}

function initPasswordErrorStatus(){
  removeClassList(EMPTY_PASSWORD_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  removeClassList(SIGN_PASSWORD_INPUT, RED_BORDER_CLASS_NAME)
  removeClassList(PASSWORD_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
}

SIGN_EMAIL_INPUT.addEventListener('focusout', function() {
  initEmailErrorStatus()
  if(isEmailFormatError()) {
    addClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(SIGN_EMAIL_INPUT, RED_BORDER_CLASS_NAME)
    removeClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
    removeClassList(EMAIL_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
  } else if(isEmailRegexError()) {
    addClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(SIGN_EMAIL_INPUT, RED_BORDER_CLASS_NAME)
    removeClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  }
});

SIGN_PASSWORD_INPUT.addEventListener('focusout', function() {
  initPasswordErrorStatus()
  if(isPasswordFormatError()) {
    addClassList(EMPTY_PASSWORD_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(SIGN_PASSWORD_INPUT, RED_BORDER_CLASS_NAME)
    removeClassList(PASSWORD_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
  }
});

function submitLogin(){
  const emailValue = SIGN_EMAIL_INPUT.value.trim();
  const passwordValue = SIGN_PASSWORD_INPUT.value.trim();
  let correctEmail = 'test@codeit.com'
  let correctPassword = 'codeit101'
  if(emailValue === correctEmail && passwordValue === correctPassword){
    location.href = 'folder.html';
  }else{
    addClassList(EMAIL_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(SIGN_EMAIL_INPUT, RED_BORDER_CLASS_NAME)
    removeClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
    removeClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(PASSWORD_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(SIGN_PASSWORD_INPUT, RED_BORDER_CLASS_NAME)
    removeClassList(EMPTY_PASSWORD_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  }
}
document.onkeyup = function (event) {
  if (e.key === 'Enter') {
    submitLogin();
  }
}

function togglePasswordVisibility() {
  const passwordFieldType = SIGN_PASSWORD_INPUT.type;
  SIGN_PASSWORD_INPUT.type = passwordFieldType === 'password' ? 'text' : 'password';
  EYE_BUTTON.src = `./images/eye-${passwordFieldType === 'password' ? 'on' : 'off'}.svg`;
};

let haha = "hihi"
let inputbox = document.querySelector('.sign-input-box')
const li = document.createElement('p')
li.textContent = `${EMAIL_ERROR_MESSAGE.empty}`
li.className = 'emptu-email'
inputbox.appendChild(li)
DOM.createTagAndclassWithText(inputbox, 'emptu-email', EMAIL_ERROR_MESSAGE.validation)
DOM.chageText(EMAIL_ERROR_MESSAGE.empty)