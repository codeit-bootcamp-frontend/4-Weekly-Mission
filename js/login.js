const MASTER_ACCOUNT = {
  EMAIL: 'test@codeit.com',
  PASSWORD: 'codeit101'
}

const REGEX = {
  EMAIL: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  PASSWORD: '',
}

const ERROR_MSG = {
  BLANK: {
    EMAIL: '이메일을 입력해 주세요.',
    PASSWORD: '비밀번호를 입력해 주세요.'
  },
  INVALID: {
    EMAIL: '올바른 이메일 주소가 아닙니다.'
  },
  INCORRECT:{
    EMAIL: '이메일을 확인해 주세요.',
    PASSWORD: '비밀번호를 확인해 주세요.'
  }
}

Object.freeze(MASTER_ACCOUNT);
Object.freeze(REGEX);
Object.freeze(ERROR_MSG);

const $ = (selector, element = document) => element.querySelector(selector);
const isMaster = (email, password) => email === MASTER_ACCOUNT['EMAIL'] && password === MASTER_ACCOUNT['PASSWORD'];
const isEmail = (email) => REGEX['EMAIL'].test(email);
const isBlank = (e) => e.target.value === '';

// 비어있는 인풋에 에러메시지 추가
const addErrorMsgToBlankInput = (e) => {
  const blankInput = e.target;
  const errorMsg = $('.input-error-msg', blankInput.parentNode);
  if(isBlank(e)) {
    blankInput.classList.add('js-input-profile-error');
    errorMsg.classList.remove('js-display-none');
    // input이 id인지 email인지 체크
    if(blankInput.getAttribute('id') === 'email')
      errorMsg.textContent = ERROR_MSG.BLANK.EMAIL;
    else 
      errorMsg.textContent = ERROR_MSG.BLANK.PASSWORD;
  }
  else {  // 인풋이 비어있지 않은 경우
    blankInput.classList.remove('js-input-profile-error');
    errorMsg.classList.add('js-display-none');
  }
}

const addErrorMsgToInvalidInput = (e) => {
  const invalidEmailInput = e.target;
  const errorMsg = $('.input-error-msg', invalidEmailInput.parentNode);
  if(!isBlank(e)) {
    if(!isEmail(invalidEmailInput.value)){
      invalidEmailInput.classList.add('js-input-profile-error');
      errorMsg.classList.remove('js-display-none');
      errorMsg.textContent = ERROR_MSG.INVALID.EMAIL;
    }
    else {
      invalidEmailInput.classList.remove('js-input-profile-error');
      errorMsg.classList.add('js-display-none');
    }
  }
}

const addErrorMsgToIncorrectInput = (input) => {
  const incorrectInput = input;
  const errorMsg = $('.input-error-msg', incorrectInput.parentNode);
  incorrectInput.classList.add('js-input-profile-error');
  errorMsg.classList.remove('js-display-none');     
  // input이 id인지 email인지 체크
  if(incorrectInput.getAttribute('id') === 'email')
    errorMsg.textContent = ERROR_MSG.INCORRECT.EMAIL;
  else 
    errorMsg.textContent = ERROR_MSG.INCORRECT.PASSWORD;
}

const loginHandler = (e) => {
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

const noRefreshOnSubmit = (e) => {
  e.preventDefault();
}

const submitOnEnter = function (e) {
  if(e.key === 'Enter') this.submit();
}

const togglePasswordVisibility = () => {
  const eyeIcon = $('.eye-icon');
  const passwordInput = $('#password', eyeIcon.parentNode);
  eyeIcon.classList.toggle('visibility');
  if(eyeIcon.classList.contains('visibility')) {
    eyeIcon.setAttribute('src', 'images/eye-on.svg');
    passwordInput.setAttribute('type', 'text');
  }
  else {
    eyeIcon.setAttribute('src', 'images/eye-off.svg');
    passwordInput.setAttribute('type', 'password');
  }  
}

$('#email').addEventListener('blur', addErrorMsgToBlankInput);
$('#password').addEventListener('blur', addErrorMsgToBlankInput);
$('#email').addEventListener('blur', addErrorMsgToInvalidInput);
$('.login-form').addEventListener('submit', noRefreshOnSubmit);
$('.login-form').addEventListener('submit', loginHandler);
$('.eye-icon').addEventListener('click', togglePasswordVisibility);

// $('.login-form').addEventListener('keydown', submitOnEnter);
