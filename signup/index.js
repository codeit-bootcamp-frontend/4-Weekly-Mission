const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#passwordRepeat');
const idErrorMessage = document.querySelector('.idErrorMessage');
const pwErrorMessage = document.querySelector('.pwErrorMessage');
const pwRepeatErrorMessage = document.querySelector('.pwRepeatErrorMessage');
const form = document.querySelector('form');
const TEST_EMAIL = 'test@codeit.com';

function emailFocusOut() {
  const emailErrMessage = '이메일을 입력해 주세요.';
  const emailVaildErrMessage = '올바른 이메일 주소가 아닙니다.';
  const idAlreadyErrMessage = '이미 사용 중인 이메일입니다.';
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/;
  const emailInput = email.value.trim();

  // 이메일이 비어 있는 경우
  if (!emailInput) {
    idErrorMessage.textContent = emailErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailError');
    email.style.borderColor = '#FF5B56';
  } else if (!emailRegExp.test(emailInput)) { // 이메일 형식이 올바르지 않은 경우
    idErrorMessage.textContent = emailVaildErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailValidError');
    email.style.borderColor = '#FF5B56';
  } else if (emailInput === TEST_EMAIL) { // 이미 사용 중인 이메일인 경우
    idErrorMessage.textContent = idAlreadyErrMessage;
    idErrorMessage.style.color = '#FF5B56';
    email.classList.add('emailAlreadyError');
    email.style.borderColor = '#FF5B56';
  } else {
    // 유효성 검사 통과 시
    idErrorMessage.textContent = '';
    email.classList.remove('emailError', 'emailValidError', 'emailAlreadyError');
    email.style.borderColor = '';
  }
}

email.addEventListener('focusout', emailFocusOut);

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

// 회원가입 시도시 오류가 있는 경우
function checkFormErrors() {
  const emailInput = email.value.trim();
  const pwInput = password.value.trim();
  const emailError = !emailInput || !emailRegExp.test(emailInput);
  const pwError = !pwInput || !pwRegExp.test(pwInput);
  const pwRepeatError = password.value !== passwordRepeat.value;

  if (emailError) {
    emailNoneValue();
    emailValidation();
    emailAlready();
    
    if (!emailError) {
      emailAlready();
    }
  }

  if (pwError) {
    pwValidation();
  }

  if (pwRepeatError) {
    pwRepCorrect();
  }

  return emailError || pwError || pwRepeatError;
}

function signup(event) {
  event.preventDefault();

  const hasErrors = checkFormErrors();

  if (!hasErrors) {
    window.location.href = '/folder';
  }
}