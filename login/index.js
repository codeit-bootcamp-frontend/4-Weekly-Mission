const INPUT_EMAIL = document.querySelector('#login-email');
const INPUT_PASSWORD = document.querySelector('#login-password');
const LOGIN_BUTTON = document.querySelector('#login-button');
const FORM_ELEMENT = document.querySelector('#signin-form');

INPUT_EMAIL.addEventListener('focusout', handleFocusOut);
INPUT_EMAIL.addEventListener('focusout', emailCheck);

INPUT_PASSWORD.addEventListener('focusout', handleFocusOut);

// LOGIN_BUTTON.addEventListener('click', handleSubmit);

FORM_ELEMENT.addEventListener('submit', handleSubmit)


// input 없을 때 에러 메세지
function handleFocusOut(e) {
  if (e.target.value === '') {

    if (e.target.classList.contains('login-email')) {
      e.target.nextElementSibling.textContent = '이메일을 입력해 주세요.';
    }
    else if (e.target.classList.contains('login-password')) {
      e.target.nextElementSibling.textContent = '비밀번호를 입력해 주세요.';
    }

    e.target.classList.add('input_error');

  }
}


// 이메일 유효성 확인
function emailValidation(input) {
  const REG_EMAIL = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  return REG_EMAIL.test(input);
}

function emailCheck(e) {
  if (e.target.value !== '') {

    if (!emailValidation(e.target.value)) {
      e.target.nextElementSibling.textContent = '올바른 이메일 주소가 아닙니다.';
      e.target.classList.add('input_error');
    }

  }
}


// 이메일, 비밀번호 일치 시 페이지 이동
function handleSubmit(e) {  // FIXME: 입력 정보 일치 시 HTML ERROR 405 발생
  if (INPUT_EMAIL.value === 'test@codeit.com' && INPUT_PASSWORD.value === 'codeit101') {
    FORM_ELEMENT.submit();
  } 
  else {
    INPUT_EMAIL.nextElementSibling.textContent = '이메일을 확인해 주세요.';
    INPUT_EMAIL.classList.add('input_error');
    INPUT_PASSWORD.nextElementSibling.textContent = '비밀번호를 확인해 주세요.';
    INPUT_PASSWORD.classList.add('input_error');
  }
}