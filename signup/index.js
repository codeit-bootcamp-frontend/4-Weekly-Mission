const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#passwordRepeat');
const idErrorMessage = document.querySelector('.idErrorMessage');
const pwErrorMessage = document.querySelector('.pwErrorMessage');
const pwRepeatErrorMessage = document.querySelector('.pwRepeatErrorMessage');
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

// 이미 사용중인 이메일일 때
const TEST_EMAIL = 'test@codeit.com';

function emailAlready() {
  const idAlreadyErrMessage = '이미 사용 중인 이메일입니다.';

  if (email.value === TEST_EMAIL) {
    idErrorMessage.textContent = idAlreadyErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.style.borderColor = '#FF5B56';
  } else {
    idErrorMessage.textContent='';
    email.classList.remove('emailError');
    email.style.borderColor = '';
  }
}

email.addEventListener('focusout', emailAlready);

// 비밀번호 자릿수 & 형식에 맞지 않을 때
function pwValidation() {
  const pwVaildErrMessage = '비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.';
  const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/

  const pwInput = password.value.trim();
  if (pwInput && !pwRegExp.test(pwInput)) {
    pwErrorMessage.textContent = pwVaildErrMessage;
    pwErrorMessage.style.color = '#FF5B56';
    password.classList.add('pwVaildError');
    password.style.borderColor = '#FF5B56';
  } else {
    pwErrorMessage.textContent='';
    password.classList.remove('pwError');
    password.style.borderColor = '';
  }
}

password.addEventListener('focusout', pwValidation);

// 비밀번호 & 비밀번호 확인 일치하지 않을 때
function pwRepCorrect() {
  const pwRepErrMessage = '비밀번호가 일치하지 않아요.';

  if (!(password.value === passwordRepeat.value)) {
    pwRepeatErrorMessage.textContent = pwRepErrMessage;
    pwRepeatErrorMessage.style.color = '#FF5B56';
    passwordRepeat.classList.add('pwRepError');
    passwordRepeat.style.borderColor = '#FF5B56';
  } else {
    pwRepeatErrorMessage.textContent='';
    passwordRepeat.classList.remove('pwRepError');
    passwordRepeat.style.borderColor = '';
  }
}

passwordRepeat.addEventListener('focusout', pwRepCorrect);