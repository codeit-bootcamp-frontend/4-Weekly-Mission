const INPUT_EMAIL = document.querySelector('#signup_email');
const INPUT_PASSWORD = document.querySelector('#signup_password');
const INPUT_PASSWORD_CHECK = document.querySelector('#check_password')
const ERROR_MESSAGE_EMAIL = document.querySelector('#error_message_email');
const ERROR_MESSAGE_PASSWORD = document.querySelector('#error_message_password');
const ERROR_MESSAGE_PASSWORD_CHECK = document.querySelector('#error_message_password_check');
const FORM_ELEMENT = document.querySelector('#signup_form');

INPUT_EMAIL.addEventListener('focusout', handleEmailFocusout);
INPUT_PASSWORD.addEventListener('focusout', handlePasswordFocusout);
INPUT_PASSWORD_CHECK.addEventListener('focusout', handlePasswordCheckFocusout);
FORM_ELEMENT.addEventListener('submit', handleSubmit);


// 이메일 유효성 확인
function handleEmailFocusout(e) {
  if (INPUT_EMAIL.value === '') {
    ERROR_MESSAGE_EMAIL.textContent = '이메일을 입력해 주세요.';
    addClassList(INPUT_EMAIL, 'input_error');
    return false;
  }

  emailValidation(e);

  return true;
}

async function emailValidation (e) {
  const EMAIL_ADDRESS = {
    email: INPUT_EMAIL.value
  }

  const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(EMAIL_ADDRESS)
  });

  const result = await response.json(e);
  if (!response.ok) {
    e.target.nextElementSibling.textContent = result.error.message;
    addClassList(INPUT_EMAIL, 'input_error');
    return false;
  }
}


// 비밀번호 유효성 확인
function passwordValidation(input) {
  const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return REG_PASSWORD.test(input);
}

function handlePasswordFocusout(e) {
  if (!passwordValidation(INPUT_PASSWORD.value)) {
    ERROR_MESSAGE_PASSWORD.textContent = '비밀번호는 영문,숫자 조합 8자 이상 입력해주세요.';
    addClassList(INPUT_PASSWORD, 'input_error');
    return false;
  }
  
  return true;
}

function handlePasswordCheckFocusout(e) {
  if (INPUT_PASSWORD.value !== INPUT_PASSWORD_CHECK.value) {
    ERROR_MESSAGE_PASSWORD_CHECK.textContent = '비밀번호가 일치하지 않아요.';
    addClassList(INPUT_PASSWORD_CHECK, 'input_error');
    return false;
  }

  return true;
}


// 제출 시 유효성 확인
let checkFunctions = [
  handleEmailFocusout,
  handlePasswordFocusout,
  handlePasswordCheckFocusout
]

function handleSubmit(e) {
  e.preventDefault();

  for (let checkFunction of checkFunctions) {
    if (checkFunction(e) === false) {
      checkFunction(e);
    }
  }

  finalValidation()
}

async function finalValidation() {
  const user = {
    email: INPUT_EMAIL.value,
    password: INPUT_PASSWORD.value
  }

  const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })

  if (response.ok) {
    window.location.href = '/folder';
  }
}


// 스타일 추가
function addClassList(target, className) {
  target.classList.add(className)
}