const INPUT_EMAIL = document.querySelector('#login_email');
const INPUT_PASSWORD = document.querySelector('#login_password');
const ERROR_MESSAGE_EMAIL = document.querySelector('#error_message_email');
const ERROR_MESSAGE_PASSWORD = document.querySelector('#error_message_password')
const FORM_ELEMENT = document.querySelector('#signin_form');

INPUT_EMAIL.addEventListener('focusout', handleEmailFocusout);

INPUT_PASSWORD.addEventListener('focusout', handlePasswordFocusout);

FORM_ELEMENT.addEventListener('submit', handleSubmit)
FORM_ELEMENT.addEventListener('submit', handleFormPostSubmit)


// 이메일 유효성 확인
function emailValidation(input) {
  const REG_EMAIL = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return REG_EMAIL.test(input);
}

function handleEmailFocusout(e) {
  if (e.target.value === '') {
    ERROR_MESSAGE_EMAIL.textContent = '이메일을 입력해 주세요.';
    INPUT_EMAIL.classList.add('input_error');
  }

  if (e.target.value !== '') {
    if (!emailValidation(e.target.value)) {
      ERROR_MESSAGE_EMAIL.textContent = '올바른 이메일 주소가 아닙니다.'
      INPUT_EMAIL.classList.add('input_error')
    }
  }
}


// 비밀번호 유효성 확인
function handlePasswordFocusout(e) {
  if (e.target.value === '') {
    ERROR_MESSAGE_PASSWORD.textContent = '비밀번호를 입력해 주세요.';
    INPUT_PASSWORD.classList.add('input_error')
  }
}


// 제출 시 유효성 확인
function handleSubmit(e) {
  if (INPUT_EMAIL.value !== 'test@codeit.com' || INPUT_PASSWORD.value !== 'codeit101') {
    e.preventDefault();

    ERROR_MESSAGE_EMAIL.textContent = '이메일을 확인해 주세요.';
    INPUT_EMAIL.classList.add('input_error');
    ERROR_MESSAGE_PASSWORD.textContent = '비밀번호를 확인해 주세요.';
    INPUT_PASSWORD.classList.add('input_error');
  }
}


// POST 응답
async function handleFormPostSubmit(e) {
  e.preventDefault();

  const testAccount = {
    email: INPUT_EMAIL.value,
    password: INPUT_PASSWORD.value
  }

  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(testAccount)
  })

  if (response.ok) {
    window.location.href = '/folder'
  }
}