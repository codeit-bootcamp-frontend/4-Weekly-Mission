// DOM 요소들을 가져오는 함수
const get = (selector) => document.querySelector(selector);

// 아이디, 비밀번호 input 요소들
const SIGN_EMAIL_INPUT = get('#email-input');
const SIGN_PASSWORD_INPUT = get('#password-input');

// 에러 메시지 요소들
const EMPTY_EMAIL_ERROR_MESSAGE = get('.empty-email-error'); //이메일을 입력해 주세요
const INVALID_EMAIL_FORMAT_MESSAGE = get('.correct-email-error');//올바른 이메일 주소가 아닙니다
const EMPTY_PASSWORD_ERROR_MESSAGE = get('.empty-password-error');//비밀번호를 입력해 주세요
const EMAIL_VALIDATION_MESSAGE = get('.email-validation-message');//이메일을 확인해 주세요
const PASSWORD_VALIDATION_MESSAGE = get('.password-validation-message');//비밀번호를 확인해 주세요

// 눈 아이콘 버튼
const EYE_BUTTON = get('.eye-button-icon');

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
