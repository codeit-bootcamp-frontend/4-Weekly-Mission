const inputEmail = document.querySelector('#login-email');
const inputPassword = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button')

inputEmail.addEventListener('focusout', noInput);
inputEmail.addEventListener('focusout', emailCheck);

inputPassword.addEventListener('focusout', noInput);


// input 없을 때 에러 메세지
function noInput(e) {
  let value = e.target.value;

  if (value === '') {

    if (e.target.classList.contains('login-email')) {
      e.target.nextElementSibling.textContent = '이메일을 입력해 주세요.';
    }
    else if (e.target.classList.contains('login-password')) {
      e.target.nextElementSibling.textContent = '비밀번호를 입력해 주세요.';
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
  let value = e.target.value;

  if (value !== '') {

    if (!emailValidation(e.target.value)) {
      e.target.nextElementSibling.textContent = '올바른 이메일 주소가 아닙니다.';
    }

  }
}