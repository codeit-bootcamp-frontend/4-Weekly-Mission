// 아이디, 비밀번호 input 클래스 전부 가져오기
const signInputValue = document.querySelector('.sign-input');
// 비어있는 아이디로 focusout시 나타나는 에러 메세지
const emptyEmailErrorMessage = document.querySelector('.empty-email-error');
// 옳지 않은 형식의 아이디로 focusout시 나타나는 에러 메세지
const invalidEmailFormatMessage = document.querySelector('.correct-email-error');
// 비어있는 비밀번호로 focusout시 나타나는 에러 메세지
const emptyPasswordErrorMessage = document.querySelector('.empty-password-error');
// 아이디 input id 가져오기
const signEmailInputValue = document.querySelector('#email-input'); 
// 비밀번호 input id 가져오기
const signPasswordInputValue = document.querySelector('#password-input')
// 지정한 아이디가 아닌 다른 아이디 값을 입력했을 경우 나오는 에러 메세지
const emailValidationMessage = document.querySelector('.email-validation-message')
// 지정한 비밀번호가 아닌 다른 비밀번호 값을 입력했을 경우 나오는 에러 메세지
const passwordValidationMessage = document.querySelector('.password-validation-message')
// 눈 아이콘 버튼 
const eyeButton = document.querySelector('.eye-button-icon')

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
