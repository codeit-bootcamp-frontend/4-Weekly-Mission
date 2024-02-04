const loginEmailInput = document.querySelector('#login__email-form');
const loginPwInput = document.querySelector('#login__password-form');
const loginEmailError = document.querySelector('.login__email-form--error');
const loginPwError = document.querySelector('.login__password-form--error');

const loginButton = document.querySelector('.login__info--loginBt');
const loginPasswordIcon = document.querySelector('.password__toggle-icon');

loginEmailInput.addEventListener('focusout', loginEmailFocusOut);
loginPwInput.addEventListener('focusout', loginpwFocusOut);
loginPasswordIcon.addEventListener('click', passwordToggleIcon);
loginButton.addEventListener('click', handleLoginButtonClick);
loginEmailInput.addEventListener('keyup',handleLoginButtonEnter);
loginPwInput.addEventListener('keyup',handleLoginButtonEnter);

//이메일 입력 확인
function loginEmailFocusOut(event) {
  emailHandleInputFocusOut(loginEmailInput,loginEmailError);
}

//비밀번호 확인
function loginpwFocusOut(event) {
  passwordHandleFocusOut(loginPwInput,loginPwError);
}

//비밀번호 아이콘 및 타입 변경
function passwordToggleIcon(event) {
  togglePasswordType(loginPwInput,loginPasswordIcon);
}

//이메일 입력 확인
export function emailHandleInputFocusOut(inputElement, errorElement) {
  // focusout 이벤트가 발생했을 때 실행되는 코드
  if (!inputElement.value) {
    errorElement.textContent = '이메일을 입력해 주세요.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56'; // 테두리 색상 변경
  } else if(!isValidEmail(inputElement.value)) {
    errorElement.textContent = '올바른 이메일 주소가 아닙니다.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56'; // 테두리 색상 변경  
  } else {
    errorElement.style.display = 'none';
    errorElement.textContent = '';
    inputElement.style.borderColor = '#CCD5E3';
  }
}

//비밀번호 입력 확인
export function passwordHandleFocusOut(inputElement, errorElement) {
  if (!inputElement.value) {
    errorElement.textContent = '비밀번호를 입력해 주세요.';
    errorElement.style.display = 'block';
    inputElement.style.borderColor = '#FF5B56'; 
  } else {
    errorElement.style.display = 'none';
    errorElement.textContent = '';
    inputElement.style.borderColor = '#CCD5E3';
  }
}

export function isValidEmail(email) {
  // 간단한 이메일 유효성 검사를 위한 정규 표현식 사용
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//아이콘 변경
export function togglePasswordType(passwordInput,passwordIcon) {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  }
}

//이메일 비밀번호가 틀렸을 때
export const loginCheck = function () {
  loginPwError.textContent = '비밀번호를 확인해 주세요.';
  loginPwError.style.display = 'block';
  loginPwInput.style.borderColor = '#FF5B56'; 
  loginEmailError.textContent = '이메일을 확인해 주세요.';
  loginEmailError.style.display = 'block';
  loginEmailInput.style.borderColor = '#FF5B56'; 
}

//엔터키
export function handleLoginButtonEnter(event) {
  if (event.code === 'Enter') {
    handleLoginButtonClick();
  } 
}

//로그인 버튼 클릭 시
export function handleLoginButtonClick(event) {
  if (loginEmailInput.value === 'test@codeit.com' && loginPwInput.value === 'codeit101') {
    window.location.href = "/folder";
  }
  else {
    loginCheck();
  }
}
