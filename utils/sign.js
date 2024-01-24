import * as DOM from './lib/DOM.js'
import * as input from './lib/inputVerification.js'
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  EMAIL_REGEX
} from './constant/signVariable.js'

// 아이디, 비밀번호 input 요소들
const signEmailInput = DOM.selectElement('#email-input');
const signPasswordInput = DOM.selectElement('#password-input');

// 눈 아이콘 버튼
const EYE_BUTTON = DOM.selectElement('.eye-button-icon');

//클래스 이름 상수화
const SHOW_ERROR_CLASS_NAME = 'show-error';
const RED_BORDER_CLASS_NAME = 'red-border';

function isEmailInvalid(){
  const emailValue = signEmailInput.value.trim();
  if (!EMAIL_REGEX.test(emailValue)) {
    return true;
  }
  return false; 
}
function isEmailFormatError(){
  const emailValue = signEmailInput.value.trim();
  if (emailValue === '') {
    return true;
  }
  return false;
}
function isPasswordFormatError(){
  const passwordValue = signPasswordInput.value.trim();
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
  removeClassList(signEmailInput, RED_BORDER_CLASS_NAME)
  removeClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
  removeClassList(EMAIL_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
}

function initPasswordErrorStatus(){
  removeClassList(EMPTY_PASSWORD_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  removeClassList(signPasswordInput, RED_BORDER_CLASS_NAME)
  removeClassList(PASSWORD_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
}

signEmailInput.addEventListener('focusout', function() {
  initEmailErrorStatus()
  if(isEmailFormatError()) {
    addClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(signEmailInput, RED_BORDER_CLASS_NAME)
    removeClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
    removeClassList(EMAIL_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
  } else if(isEmailInvalid()) {
    addClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(signEmailInput, RED_BORDER_CLASS_NAME)
    removeClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  }
});

signPasswordInput.addEventListener('focusout', function() {
  initPasswordErrorStatus()
  if(isPasswordFormatError()) {
    addClassList(EMPTY_PASSWORD_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(signPasswordInput, RED_BORDER_CLASS_NAME)
    removeClassList(PASSWORD_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
  }
});

function submitLogin(){
  const emailValue = signEmailInput.value.trim();
  const passwordValue = signPasswordInput.value.trim();
  let correctEmail = 'test@codeit.com'
  let correctPassword = 'codeit101'
  if(emailValue === correctEmail && passwordValue === correctPassword){
    location.href = 'folder.html';
  }else{
    addClassList(EMAIL_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(signEmailInput, RED_BORDER_CLASS_NAME)
    removeClassList(INVALID_EMAIL_FORMAT_MESSAGE, SHOW_ERROR_CLASS_NAME)
    removeClassList(EMPTY_EMAIL_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(PASSWORD_VALIDATION_MESSAGE, SHOW_ERROR_CLASS_NAME)
    addClassList(signPasswordInput, RED_BORDER_CLASS_NAME)
    removeClassList(EMPTY_PASSWORD_ERROR_MESSAGE, SHOW_ERROR_CLASS_NAME)
  }
}
document.onkeyup = function (event) {
  if (e.key === 'Enter') {
    submitLogin();
  }
}

function togglePasswordVisibility() {
  const passwordFieldType = signPasswordInput.type;
  signPasswordInput.type = passwordFieldType === 'password' ? 'text' : 'password';
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