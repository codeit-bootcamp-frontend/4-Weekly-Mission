
import {
  errorBoxOnOff,
  showError,
  hideError,
  checkisValidEmail
} from "./src/sign.js";


function focusOutCheck(event){
  const { value, id } = event.target;
  if (id === 'email') {
    if (value === "") {
      showError(id, '이메일을 입력해주세요.');
    } else if (!checkisValidEmail(value)) {
      showError(id, '올바른 이메일 주소가 아닙니다.');
    } else {
      hideError(id);
    }
  } else {
    if (value === "") {
      showError(id, '비밀번호를 입력해주세요.');
    } else {
      hideError(id);
    }
  }
}


function loginProcess() {
  const emailValue = document.querySelector('#email').value
  const passwordValue = document.querySelector('#password').value
  if (emailValue !== 'test@codeit.com') {
    showError('email', '이메일을 확인해 주세요.');
  } else {
    hideError('email');
  }

  if (passwordValue !== 'codeit101') {
    showError('password', '비밀번호를 확인해 주세요.');
  } else {
    hideError('password');
  }

  if (emailValue === 'test@codeit.com' && passwordValue === 'codeit101') {
    location.href = '/folder.html';
  }
}


document.querySelector(`#email`).addEventListener('focusout',  focusOutCheck)
document.querySelector(`#password`).addEventListener('focusout',  focusOutCheck)
document.querySelector(`#signForm`).addEventListener('submit', function(event) {
  event.preventDefault();
  loginProcess()
});

