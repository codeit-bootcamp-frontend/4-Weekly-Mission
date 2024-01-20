// DOM 요소들을 가져오는 함수
const get = (selector) => document.querySelector(selector);

// 아이디, 비밀번호 input 요소들
const signInputValue = get('.sign-input');
const signEmailInputValue = get('#email-input');
const signPasswordInputValue = get('#password-input');

// 에러 메시지 요소들
const emptyEmailErrorMessage = get('.empty-email-error'); //이메일을 입력해 주세요
const invalidEmailFormatMessage = get('.correct-email-error');//올바른 이메일 주소가 아닙니다
const emptyPasswordErrorMessage = get('.empty-password-error');//비밀번호를 입력해 주세요
const emailValidationMessage = get('.email-validation-message');//이메일을 확인해 주세요
const passwordValidationMessage = get('.password-validation-message');//비밀번호를 확인해 주세요

// 눈 아이콘 버튼
const eyeButton = get('.eye-button-icon');

function isEmailRegexError(){
  const emailValue = signEmailInputValue.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    return true;
  }
  return false; 
}
function isEmailFormatError(){
  const emailValue = signEmailInputValue.value.trim();
  if (emailValue === '') {
    return true;
  }
  return false;
}
function isPasswordFormatError(){
  const passwordValue = signPasswordInputValue.value.trim();
  if(passwordValue === ''){
    return true
  }
  return false
}

// TODO: addClassList 함수 분리하기 
// TODO: removeClassList 함수 분리하기


signEmailInputValue.addEventListener('focusout', function() {
  // TODO: initEmailErrorStatus 함수분리하기
  emptyEmailErrorMessage.classList.remove('show-error');
  signEmailInputValue.classList.remove('redBorder');
  invalidEmailFormatMessage.classList.remove('show-error');
  emailValidationMessage.classList.remove('show-error');
  if(isEmailFormatError()) {
    emptyEmailErrorMessage.classList.add('show-error');
    signEmailInputValue.classList.add('redBorder')
    invalidEmailFormatMessage.classList.remove('show-error');
    emailValidationMessage.classList.remove('show-error')
  } else if(isEmailRegexError()) {
    invalidEmailFormatMessage.classList.add('show-error');
    signEmailInputValue.classList.add('redBorder')
    emptyEmailErrorMessage.classList.remove('show-error');
  }
});

signPasswordInputValue.addEventListener('focusout', function() {
  // TODO: initPasswordErrorStatus 함수분리하기
  emptyPasswordErrorMessage.classList.remove('show-error')
  signPasswordInputValue.classList.remove('redBorder')
  passwordValidationMessage.classList.remove('show-error')
  if(isPasswordFormatError()) {
    emptyPasswordErrorMessage.classList.add('show-error')
    signPasswordInputValue.classList.add('redBorder')
    passwordValidationMessage.classList.remove('show-error')
  }
});

function submitLogin(){
  const emailValue = signEmailInputValue.value.trim();
  const passwordValue = signPasswordInputValue.value.trim();
  let correctEmail = 'test@codeit.com'
  let correctPassword = 'codeit101'
  if(emailValue === correctEmail && passwordValue === correctPassword){
    location.href = 'folder.html';
  }else{
    emailValidationMessage.classList.add('show-error')
    signEmailInputValue.classList.add('redBorder')
    invalidEmailFormatMessage.classList.remove('show-error')
    emptyEmailErrorMessage.classList.remove('show-error')
    passwordValidationMessage.classList.add('show-error')
    signPasswordInputValue.classList.add('redBorder')
    emptyPasswordErrorMessage.remove('show-error')
  }
}
document.onkeyup = function (event) {
  if (e.key === 'Enter') {
    submitLogin();
  }
}

function togglePasswordVisibility() {
  const passwordFieldType = signPasswordInputValue.type;
  signPasswordInputValue.type = passwordFieldType === 'password' ? 'text' : 'password';
  eyeButton.src = `./images/eye-${passwordFieldType === 'password' ? 'on' : 'off'}.svg`;
};
