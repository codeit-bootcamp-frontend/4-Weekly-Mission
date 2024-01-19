// DOM 요소들을 가져오는 함수
const get = (selector) => document.querySelector(selector);

// 아이디, 비밀번호 input 요소들
const signInputValue = get('.sign-input');
const signEmailInputValue = get('#email-input');
const signPasswordInputValue = get('#password-input');

// 에러 메시지 요소들
const emptyEmailErrorMessage = get('.empty-email-error');
const invalidEmailFormatMessage = get('.correct-email-error');
const emptyPasswordErrorMessage = get('.empty-password-error');
const emailValidationMessage = get('.email-validation-message');
const passwordValidationMessage = get('.password-validation-message');

// 눈 아이콘 버튼
const eyeButton = get('.eye-button-icon');

function emailRegexError(){
  const emailValue = signEmailInputValue.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    invalidEmailFormatMessage.classList.add('show-error');
    signEmailInputValue.classList.add('redBorder')
    emptyEmailErrorMessage.classList.remove('show-error');
  } else {
    invalidEmailFormatMessage.classList.remove('show-error');
    signEmailInputValue.classList.remove('redBorder')
  }
}
function emailError(){
  const emailValue = signEmailInputValue.value.trim();
  if (emailValue === '') {
    emptyEmailErrorMessage.classList.add('show-error');
    signEmailInputValue.classList.add('redBorder')
    invalidEmailFormatMessage.classList.remove('show-error');
  } else {
    emailRegexError()
    emptyEmailErrorMessage.classList.remove('show-error');
    signEmailInputValue.classList.remove('.redBorder');
  }
}
function passwordError(){
  const passwordValue = signPasswordInputValue.value.trim();
  if(passwordValue === ''){
    emptyPasswordErrorMessage.classList.add('show-error')
    signPasswordInputValue.classList.add('redBorder')
    passwordValidationMessage.classList.remove('show-error')
  } else if(passwordValue.length >= 1){
    emptyPasswordErrorMessage.classList.remove('show-error')
    signPasswordInputValue.classList.remove('redBorder')
  }
}

signInputValue.addEventListener('focusout', function() {
  emailError();
  passwordError();
});

function submitLogin(){
  const emailValue = signEmailInputValue.value.trim();
  const passwordValue = signPasswordInputValue.value.trim();
  let correctEmail =  'test@codeit.com'
  let correctPassword = 'codeit101'
  if(emailValue === correctEmail && passwordValue === correctPassword){
    location.href = 'folder.html';
  }else if(emailValue === correctEmail || passwordValue === correctPassword){
    emailValidationMessage.classList.add('show-error')
    signEmailInputValue.classList.add('redBorder')
    passwordValidationMessage.classList.add('show-error')
    signPasswordInputValue.classList.add('redBorder')
  }
}
document.onkeyup = function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    submitLogin();
  }
}

function togglePasswordVisibility() {
  const passwordFieldType = signPasswordInputValue.type;

  signPasswordInputValue.type = passwordFieldType === 'password' ? 'text' : 'password';
  eyeButton.src = `./images/eye-${passwordFieldType === 'password' ? 'on' : 'off'}.svg`;
};
