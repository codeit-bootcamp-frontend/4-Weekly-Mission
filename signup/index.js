const INPUT_EMAIL = document.querySelector('#signup-email');
const INPUT_PASSWORD = document.querySelector('#signup-password');
const INPUT_PASSWORD_CHECK = document.querySelector('#check-password')
const FORM_ELEMENT = document.querySelector('#signup-form');

INPUT_EMAIL.addEventListener('focusout', handleFocusOut);
INPUT_EMAIL.addEventListener('focusout', emailCheck);

INPUT_PASSWORD.addEventListener('focusout', handleFocusOut);
INPUT_PASSWORD.addEventListener('focusout', passwordCheck);

INPUT_PASSWORD_CHECK.addEventListener('focusout', samePasswordCheck);


// input 없을 때 에러 메세지
function handleFocusOut(e) {
  if (e.target.value === '') {

    if (e.target.classList.contains('signup-email')) {
      e.target.nextElementSibling.textContent = '이메일을 입력해 주세요.';
    }
    else if (e.target.classList.contains('signup-password')) {
      e.target.nextElementSibling.textContent = '비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.';
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
  if (INPUT_EMAIL.value !== '') {

    if (INPUT_EMAIL.value === 'test@codeit.com') {
      INPUT_EMAIL.nextElementSibling.textContent = '이미 사용 중인 이메일입니다.';

    } else if (!emailValidation(INPUT_EMAIL.value)) {
      INPUT_EMAIL.nextElementSibling.textContent = '올바른 이메일 주소가 아닙니다.';
    }

    INPUT_EMAIL.classList.add('input_error');

  }
}


// 비밀번호 유효성 확인
function passwordValidation(input) {
  const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

  return REG_PASSWORD.test(input);
}

function passwordCheck(e) {
  if (!passwordValidation(INPUT_PASSWORD.value)) {
    INPUT_PASSWORD.nextElementSibling.textContent = '비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.';
    e.target.classList.add('input_error');
  }
}

function samePasswordCheck(e) {
  if (INPUT_PASSWORD.value !== INPUT_PASSWORD_CHECK.value) {
    INPUT_PASSWORD_CHECK.nextElementSibling.textContent = '비밀번호가 일치하지 않아요.';
    e.target.classList.add('input_error');
  }
}