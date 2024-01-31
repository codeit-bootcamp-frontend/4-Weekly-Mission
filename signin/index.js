const email = document.querySelector('#email');
const password = document.querySelector('#password');
const idInput = document.querySelectorAll('.signinIdInput');
const pwInput = document.querySelectorAll('.signinPwInput');
const idErrorMessage = document.querySelector('.idErrorMessage');
const pwErrorMessage = document.querySelector('.pwErrorMessage');
const form = document.querySelector('form');

// email input 포커스 아웃을 했는데 값이 없을때
function emailNoneValue() {
  const emailErrMessage = '이메일을 입력해 주세요.';

  if (!email.value.trim()) {
    idErrorMessage.textContent = emailErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailError');
    email.style.borderColor = '#FF5B56';
  } else {
    // 이메일이 비어 있지 않으면 오류 메시지를 제거합니다.
    idErrorMessage.textContent='';
    email.classList.remove('emailError');
    email.style.borderColor = '';
  }
}

email.addEventListener('focusout', emailNoneValue);

// email input 포커스 아웃을 했는데 이메일 형식에 맞지 않을
function emailValidation() {
  const emailVaildErrMessage = '올바른 이메일 주소가 아닙니다.';
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;

  // 이메일 형식이 올바르지 않은 경우 에러 메시지 표시
  const emailInput = email.value.trim();
  if (emailInput && !emailRegExp.test(emailInput)) {
    idErrorMessage.textContent = emailVaildErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailValidError');
    email.style.borderColor = '#FF5B56';
  } 
}

email.addEventListener('focusout', emailValidation);

// 비밀번호 input 포커스 아웃을 했을 때 값이 없을 때
function passwordNoneValue() {
  const passwordErrMessage = '비밀번호를 입력해 주세요.';

  if (!password.value.trim()) {
    pwErrorMessage.textContent = passwordErrMessage;
    pwErrorMessage.style.color = '#FF5B56';
    password.classList.add('pwError');
    password.style.borderColor = '#FF5B56';
  } else {
    // 비밀번호가 비어 있지 않으면 오류 메시지를 제거합니다.
    pwErrorMessage.textContent='';
    password.classList.remove('pwError');
    password.style.borderColor = '';
  }
}

password.addEventListener('focusout', passwordNoneValue);

// 로그인 아이디/비밀번호가 틀릴 때
const TEST_EMAIL = 'test@codeit.com';
const TEST_PW = 'codeit101';

function login(event) {
  event.preventDefault();

  if (email.value === TEST_EMAIL && password.value === TEST_PW) {
    window.location.href = "/folder";
  } else {
    idErrorMessage.classList.add('emailError');
    idErrorMessage.textContent = '이메일을 확인해 주세요.';
    idErrorMessage.style.color = '#FF5B56';
    email.style.borderColor = '#FF5B56';

    pwErrorMessage.classList.add('error-message-password');
    pwErrorMessage.textContent = '비밀번호를 확인해 주세요.';
    pwErrorMessage.style.color = '#FF5B56';
    password.style.borderColor = '#FF5B56';
  }
}

form.addEventListener('submit', login);