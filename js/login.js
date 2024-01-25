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

const $ = (selector, element = document) => element.querySelector(selector);
const isMaster = (email, password) => email === MASTER_ACCOUNT['EMAIL'] && password === MASTER_ACCOUNT['PASSWORD'];
const isEmail = (email) => REGEX['EMAIL'].test(email);
const isBlank = (e) => e.target.value === '';

// 비어있는 인풋에 에러메시지 추가
const addErrorToBlankInput = (e) => {
  const blankInput = e.target;
  const errorMsg = $('.js-input-profile-error-blank-msg', blankInput.parentNode);
  if(isBlank(e)) {
    // 에러메시지가 존재하지 않는 최초의 경우에는 추가
    blankInput.classList.add('js-input-profile-error');
    if(!errorMsg) {
      const errorInputMsg = document.createElement('p');      
      // input이 id인지 email인지 체크
      if(blankInput.getAttribute('id') === 'email')
        errorInputMsg.textContent = ERROR_MSG.BLANK.EMAIL;
      else 
        errorInputMsg.textContent = ERROR_MSG.BLANK.PASSWORD;

      errorInputMsg.className = 'js-input-profile-error-blank-msg';
      blankInput.after(errorInputMsg);
    }
    else { // 에러메시지는 있는데 인풋을 다시 지워서 빈 경우
      errorMsg.classList.remove('js-display-none');
    }
  }
  else {  // 에러메시지가 있고 인풋이 비어있지 않은 경우
    if(errorMsg) {
      blankInput.classList.remove('js-input-profile-error');
      errorMsg.classList.add('js-display-none');
    }
  }
}

const addErrorToInvalidInput = (e) => {
  const invalidEmailInput = e.target;
  const errorMsg = $('.js-input-profile-error-invalid-msg', invalidEmailInput.parentNode);
  if(!isBlank(e) && !isEmail(invalidEmailInput.value)){
    invalidEmailInput.classList.add('js-input-profile-error');
    if(!errorMsg) {  // 에러메시지 최초 생성
      const errorInputMsg = document.createElement('p');
      errorInputMsg.textContent = ERROR_MSG.INVALID.EMAIL;
      errorInputMsg.className = 'js-input-profile-error-invalid-msg';
      errorInputMsg.classList.add('js-input-profile-error-msg-order');
      invalidEmailInput.after(errorInputMsg);
    }
    else {
      errorMsg.classList.remove('js-display-none');
    }
  }
  else if(isBlank(e)) {
    if(errorMsg) errorMsg.classList.add('js-display-none');
  }
  else {
    invalidEmailInput.classList.remove('js-input-profile-error');
    if(errorMsg) errorMsg.classList.add('js-display-none');
  }
}

const addErrorToIncorrectInput = (input) => {
  const incorrectInput = input;
  console.log(incorrectInput)
  const errorMsg = $('.js-input-profile-error-incorrect-msg', incorrectInput.parentNode);
  incorrectInput.classList.add('js-input-profile-error');
  if(!errorMsg) {
    const errorInputMsg = document.createElement('p');      
    // input이 id인지 email인지 체크
    if(incorrectInput.getAttribute('id') === 'email')
      errorInputMsg.textContent = ERROR_MSG.INCORRECT.EMAIL;
    else 
      errorInputMsg.textContent = ERROR_MSG.INCORRECT.PASSWORD;
  
    errorInputMsg.className = 'js-input-profile-error-incorrect-msg';
    incorrectInput.after(errorInputMsg);
  }
  else {
    errorMsg.classList.remove('js-display-none');
  }
}

const removeErrorToIncorrectInput = (e) => {
  const incorrectInput = e.target;
  console.log('제거');
  console.log(incorrectInput);
  console.log('끗');
  const errorMsg = $('.js-input-profile-error-incorrect-msg', incorrectInput.parentNode);
  if(errorMsg) {
    errorMsg.classList.add('js-display-none');
  }
}

const loginHandler = (e) => {
  const emailInput = $('#email').value;
  const passwordInput = $('#password').value;

  if(isMaster(emailInput, passwordInput))
    window.location.href = './folder.html';
  else {
    addErrorToIncorrectInput($('#email'));
    addErrorToIncorrectInput($('#password'));
  }
}

const noRefreshOnSubmit = (e) => {
  e.preventDefault();
}

const submitOnEnter = function (e) {
  if(e.key === 'Enter') this.submit();
}

const togglePassword = () => {
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

$('#email').addEventListener('blur', addErrorToBlankInput);
$('#password').addEventListener('blur', addErrorToBlankInput);
$('#email').addEventListener('blur', addErrorToInvalidInput);
$('.login-form').addEventListener('focusin', removeErrorToIncorrectInput);
$('.login-form').addEventListener('submit', noRefreshOnSubmit);
$('.login-form').addEventListener('submit', loginHandler);
$('.eye-icon').addEventListener('click', togglePassword);

// $('.login-form').addEventListener('keydown', submitOnEnter);
