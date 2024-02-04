const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailError = document.querySelector('#emailError');
const pwError = document.querySelector('#pwError');
const signBtn = document.querySelector('#signBtn');
const pwToggleIcon = document.querySelector('#pwToggleIcon');

const checkEmailValidation = (value) => {
  const emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_\.-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  
  return emailRegex.test(value)
}

const checkPwValidation = (value) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
  
  return passwordRegex.test(value)
}

function inputFocusEvent(inputElements) {
  inputElements.forEach(element => {
    element.addEventListener('focusin', () => inputFocusin(element));
    element.addEventListener('focusout', () => inputFocusOut(element));
  });
}

function inputFocusin(e) {
  e.classList.add('inputFocus');
}

function inputFocusOut(e) {
  e.classList.remove('inputFocus');
}

function signupEmail(event) {
  emailF(event);
  checkUsedEmail(event);
}

function emailF() {
  if (!email.value) {
    email.classList.add('inputError');
    emailError.textContent = "이메일을 입력해 주세요";
  } else if (!checkEmailValidation(email.value)) {
    email.classList.add('inputError');
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    email.classList.remove('inputError');
    emailError.textContent = '';
  }
}

function checkUsedEmail() {
  if (!email.value) {
    return;
  }
  
  fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({email: email.value}),
  })
  .then(response => {
    if (response.ok) {
      email.classList.remove('inputError');
      emailError.textContent = '';
    } else if (response.status === 409) {
      email.classList.add('inputError');
      emailError.textContent = "이미 사용 중인 이메일입니다.";
      throw new Error('사용할 수 없는 중복된 이메일 오류');
    } else {
      throw new Error('회원가입 오류')
    }
  })
  .catch(error => {
    console.log(error);
  })
}

function signupPw(event) {
  passwordF(event);
  pwRegexTest(event);
}

function passwordF() {
  if (!password.value) {
    password.classList.add('inputError');
    pwError.textContent = "비밀번호를 입력해 주세요";
  } else {
    password.classList.remove('inputError');
    pwError.textContent = '';
  }
}

function pwRegexTest() {
  if (!checkPwValidation(password.value)) {
    password.classList.add('inputError');
    pwError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  }
}

function pwToggle(input, pwToggleIcon) {
  const type = input.type === 'password' ? 'text' : 'password';

  if (type === 'password') {
    pwToggleIcon.src = './img/eye-off.svg';
    pwToggleIcon.alt = '비밀번호 가리기'
  } else {
    pwToggleIcon.src = './img/eye-on.svg';
    pwToggleIcon.alt = '비밀번호 보이기'
  }

  input.type = type;
}

export {
  email,
  password,
  emailError,
  pwError,
  signBtn,
  pwToggleIcon,
  checkEmailValidation,
  checkPwValidation,
  inputFocusEvent,
  signupEmail,
  signupPw,
  emailF,
  passwordF,
  pwToggle,
}