const INPUT_EMAIL = document.querySelector('#signup-email');
const INPUT_PASSWORD = document.querySelector('#signup-password');
const INPUT_PASSWORD_CHECK = document.querySelector('#check-password')
const ERROR_MESSAGE = document.querySelector('.error_message');
const FORM_ELEMENT = document.querySelector('#signup-form');

INPUT_EMAIL.addEventListener('focusout', handleEmailFocusout);
INPUT_PASSWORD.addEventListener('focusout', handlePasswordFocusout);
INPUT_PASSWORD_CHECK.addEventListener('focusout', handlePasswordCheckFocusout);
FORM_ELEMENT.addEventListener('submit', handleSubmit);


// 이메일 유효성 확인
function emailValidation(input) {
  const REG_EMAIL = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return REG_EMAIL.test(input);
}

function handleEmailFocusout(e) {
  if (INPUT_EMAIL.value === '') {
    INPUT_EMAIL.nextElementSibling.textContent = '이메일을 입력해 주세요.';
    INPUT_EMAIL.classList.add('input_error');

    return false;

  } else if (INPUT_EMAIL.value !== '') {
    if (INPUT_EMAIL.value === 'test@codeit.com') {
      INPUT_EMAIL.nextElementSibling.textContent = '이미 사용 중인 이메일입니다.';
      INPUT_EMAIL.classList.add('input_error');
      return false;
    } else if (!emailValidation(INPUT_EMAIL.value)) {
      INPUT_EMAIL.nextElementSibling.textContent = '올바른 이메일 주소가 아닙니다.';
      INPUT_EMAIL.classList.add('input_error');
      return false;
    }
  }
}


// 비밀번호 유효성 확인
function passwordValidation(input) {
  const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return REG_PASSWORD.test(input);
}

function handlePasswordFocusout(e) {
  if (!passwordValidation(INPUT_PASSWORD.value)) {
    INPUT_PASSWORD.nextElementSibling.textContent = '비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.';
    INPUT_PASSWORD.classList.add('input_error');

    return false;
  }
}

function handlePasswordCheckFocusout(e) {
  if (INPUT_PASSWORD.value !== INPUT_PASSWORD_CHECK.value) {
    INPUT_PASSWORD_CHECK.nextElementSibling.textContent = '비밀번호가 일치하지 않아요.';
    INPUT_PASSWORD_CHECK.classList.add('input_error');

    return false;
  }
}


// 회원 가입 실행 시 유효성 확인
let checkFunctions = [
  handleEmailFocusout,
  handlePasswordFocusout,
  handlePasswordCheckFocusout
]

function handleSubmit(e) {
  let count = 0;
  console.log(count);

  for (let checkFunction of checkFunctions) {
    if (checkFunction(e) === false) {
      checkFunction(e);
      count++;
    }
  }
  console.log(count);

  if (count === 0) {
    FORM_ELEMENT.submit();
  }
} 