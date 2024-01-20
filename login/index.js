const inputEmail = document.querySelector('#login-email');
const inputPassword = document.querySelector('#login-password');

inputEmail.addEventListener('focusout', noInput);

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