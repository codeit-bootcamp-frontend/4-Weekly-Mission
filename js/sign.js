const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');

function emailErrorMessage() {
  if (emailInput.value.trim() === '') {
    emailError.textContent = '이메일을 입력해 주세요';
  } else if (emailInput.value.indexOf('@') === -1 || emailInput.value.indexOf('.') === -1) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다';
  } else {
    emailError.textContent = '';
  }

  if (emailError.textContent.trim() === '') {
    emailInput.classList.add('sign-input');
    emailInput.classList.remove('sign-input-error');
  } else {
    emailInput.classList.remove('sign-input');
    emailInput.classList.add('sign-input-error');
  }

}
emailInput.addEventListener('focusout', emailErrorMessage);

const pwdInput = document.getElementById('pwd-input');
const pwdError = document.getElementById('pwd-error');

function pwdErrorMessage() {
  if (pwdInput.value.trim() === '') {
    pwdError.textContent = '비밀번호를 입력해 주세요';
  } else {
    pwdError.textContent = '';
  }

  if (pwdError.textContent.trim() === '') {
    pwdInput.classList.add('sign-input');
    pwdInput.classList.remove('sign-input-error');
  } else {
    pwdInput.classList.remove('sign-input');
    pwdInput.classList.add('sign-input-error');
  }

}
pwdInput.addEventListener('focusout', pwdErrorMessage);

const loginBtn = document.getElementById('login-btn');

function login(){
  if (emailInput.value.trim() === 'test@codeit.com' && pwdInput.value.trim() === 'codeit101') {
    location.href = 'folder.html';
  } else {
    emailError.textContent = '이메일을 확인해 주세요';
    pwdError.textContent = '비밀번호를 확인해 주세요';
    emailInput.classList.remove('sign-input');
    emailInput.classList.add('sign-input-error');
    pwdInput.classList.remove('sign-input');
    pwdInput.classList.add('sign-input-error');
  }
};
loginBtn.addEventListener('click', login);

function loginEnter(e){
  if(e.key === 'Enter'){
    login();
  }
};
emailInput.addEventListener('keypress', loginEnter);
pwdInput.addEventListener('keypress', loginEnter);

const eyeBtn = document.getElementById('eye-button');
const eyeImg = document.getElementById('eye-img');

function pwdEye(){
  if (pwdInput.type === 'password'){
    pwdInput.type = 'text'
    eyeImg.src = "./images/eye-on.svg"
  } else {
    pwdInput.type = 'password'
    eyeImg.src = "./images/eye-off.svg"
  }
  
}
eyeBtn.addEventListener('click', pwdEye);