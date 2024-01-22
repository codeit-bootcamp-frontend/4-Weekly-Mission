const inputEmail = document.querySelector('#login-email');
const inputPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');

inputEmail.addEventListener('focusout', noInput);
inputEmail.addEventListener('focusout', emailCheck);
inputEmail.addEventListener('keyup', enterKey);

inputPassword.addEventListener('focusout', noInput);
inputPassword.addEventListener('keyup', enterKey);

loginButton.addEventListener('click', correctInput);


// input 없을 때 에러 메세지
function noInput(e) {
  if (e.target.value === '') {

    if (e.target.classList.contains('login-email')) {
      e.target.nextElementSibling.textContent = '이메일을 입력해 주세요.';
      e.target.style.border = '1px solid #FF5B56';
    }
    else if (e.target.classList.contains('login-password')) {
      e.target.nextElementSibling.textContent = '비밀번호를 입력해 주세요.';
      e.target.style.border = '1px solid #FF5B56';
    }

  }
}


// 이메일 유효성 확인
function emailValidation(input) {
  let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!reg_email.test(input)) {
    return false;
  } else {
    return true;
  }
}

function emailCheck(e) {
  if (e.target.value !== '') {

    if (!emailValidation(e.target.value)) {
      e.target.nextElementSibling.textContent = '올바른 이메일 주소가 아닙니다.';
      e.target.style.border = '1px solid #FF5B56';
    }

  }
}


// 이메일, 비밀번호 일치 시 페이지 이동
function correctInput(e) {
  if (inputEmail.value === 'test@codeit.com' && inputPassword.value === 'codeit101') {
    window.location.href = "/folder";
  } 
  else {
    inputEmail.nextElementSibling.textContent = '이메일을 확인해 주세요.';
    inputEmail.style.border = '1px solid #FF5B56';
    inputPassword.nextElementSibling.textContent = '비밀번호를 확인해 주세요.';
    inputPassword.style.border = '1px solid #FF5B56';
  }
}

function enterKey(e) {
  if (e.keyCode === 13) {
    correctInput();
  }
} 