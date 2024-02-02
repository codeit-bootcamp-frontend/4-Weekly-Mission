import { MASTER_ACCOUNT, REGEX, ERROR_MESSAGE, $ } from './constants.js';
import { addErrorToDuplicateInput } from './signup.js';

const isMaster = (email, password) => email === MASTER_ACCOUNT.EMAIL && password === MASTER_ACCOUNT.PASSWORD;
const isValid = {
  email: (email) => REGEX.EMAIL.test(email),
  password: (password) => REGEX.PASSWORD.test(password)
};

// 비어있는 인풋에 에러메시지 추가
const addErrorMsgToBlankInput = (e) => {
  if(e.target.value !== '') return;

  const errorMsg = $('.input-error-msg', e.target.parentNode);
  e.target.classList.add('js-input-profile-error');
  errorMsg.classList.remove('hidden');

  // input이 email인지 password인지 체크
  if(e.target.getAttribute('id') === 'email') {
    errorMsg.textContent = ERROR_MESSAGE.EMAIL.BLANK;
  }
  else {
    errorMsg.textContent = ERROR_MESSAGE.PASSWORD.BLANK;
  }
}

const addErrorMsgToInvalidInput = (e) => {
  if(e.target.value === '') return;

  const errorMsg = $('.input-error-msg', e.target.parentNode);
  const inputType = e.target.getAttribute('id');
  
  if(!isValid[`${inputType}`](e.target.value)){
    e.target.classList.add('js-input-profile-error');
    errorMsg.classList.remove('hidden');
    errorMsg.textContent = ERROR_MESSAGE[`${inputType.toUpperCase()}`].INVALID;
  }
  else {
    e.target.classList.remove('js-input-profile-error');
    errorMsg.classList.add('hidden');
  }
}

const addErrorMsgToIncorrectInput = (input) => {
  const errorMsg = $('.input-error-msg', input.parentNode);
  input.classList.add('js-input-profile-error');
  errorMsg.classList.remove('hidden');     
  
  // input이 email인지 password인지 체크
  if(input.getAttribute('id') === 'email')
    errorMsg.textContent = ERROR_MESSAGE.EMAIL.INCORRECT;
  else 
    errorMsg.textContent = ERROR_MESSAGE.PASSWORD.INCORRECT;
}

const loginHandler = (e) => {
  e.preventDefault();

  const emailInput = $('#email').value;
  const passwordInput = $('#password').value;

  // 마스터 계정이 아닌 경우 일단 다 차단
  if(isMaster(emailInput, passwordInput))
    window.location.href = './folder.html';
  else {
    addErrorMsgToIncorrectInput($('#email'));
    addErrorMsgToIncorrectInput($('#password'));
  }
}

const togglePasswordVisibility = (e) => {
  const passwordInput = $('#password', e.target.parentNode);
  e.target.classList.toggle('visibility');
  if(e.target.classList.contains('visibility')) {
    e.target.setAttribute('src', 'images/eye-on.svg');
    passwordInput.setAttribute('type', 'text');
  }
  else {
    e.target.setAttribute('src', 'images/eye-off.svg');
    passwordInput.setAttribute('type', 'password');
  }  
}

// sign-in && sign-up handler
const eyeIcons = document.querySelectorAll('.eye-icon');
eyeIcons.forEach((eyeIcon) => eyeIcon.addEventListener('click', togglePasswordVisibility));

$('#email').addEventListener('blur', addErrorMsgToBlankInput);
$('#password').addEventListener('blur', addErrorMsgToBlankInput);
$('#email').addEventListener('blur', addErrorMsgToInvalidInput);
$('.login-form').addEventListener('submit', loginHandler);

// only sign-up handler
if($('#email').classList.contains('sign-up')) {
  $('#email').addEventListener('blur', addErrorToDuplicateInput);
  $('#password').addEventListener('blur', addErrorMsgToInvalidInput);
}
