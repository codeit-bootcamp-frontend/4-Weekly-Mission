const emailInput = document.querySelector('.LoginInputEmail');
const pwInput = document.querySelector('.SignUpPwInput');
const pwCorrectInput = document.querySelector('.SignUpPwCorrectInput');
const eyeIcon = document.querySelector('.eye-button');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const emailError = document.querySelector('.LoginEmailError');
const pwError = document.querySelector('.LoginPwError');
const pwCorrectError = document.querySelector('.LoginPwCorrectError');

// 비밀번호 토글 이벤트
function toggleEyePw(event) {
  event.preventDefault();
  console.log('toggleEyePw function called');
  const type = pwInput.getAttribute('type');
  if(type==='password') {
    pwInput.setAttribute('type', 'password');
    eyeIcon.src = './images/eye-on.svg';
  } else {
    pwInput.setAttribute('type', 'text');
    eyeIcon.src = './images/eye-off.svg';
  }
}

// 이메일 유효성 검사
function isValidEmail(email) {
  return emailRegex.test(email);
}

// 비밀번호 유효성 검사 (영문, 숫자 조합 8자 이상)
function isValidPassword(password) {
  return passwordRegex.test(password);
}

// 이메일 입력 검사
function validateEmail() {
  let emailValue = emailInput.value.trim();
  if (!emailValue) {
    showError(emailError, '이메일을 입력해 주세요.');
  } else if(!isValidEmail(emailValue)) {
    showError(emailError, '올바른 이메일 주소가 아닙니다.');
  } else if (emailValue === 'test@codeit.com') {
    showError(emailError, '이미 사용 중인 이메일입니다.');
  } else {
    hideError(emailError);
  }
}

// 비밀번호 입력 검사
function validatePassword() {
  let passwordValue = pwInput.value.trim();
  if(!passwordValue) {
    showError(pwError, '비밀번호를 입력해 주세요.'); 
  } else if (!isValidPassword(passwordValue)) {
    showError(pwError, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'); 
  } else {
    hideError(pwError);
  }
}

// 비밀번호 일치 검사
function correctPassword() {
  let passwordValue1 = pwInput.value.trim();
  let passwordValue2 = pwCorrectInput.value.trim();
  if (passwordValue1 !== passwordValue2) {
    showError(pwCorrectError, '비밀번호가 일치하지 않아요.')
  } else {
    hideError(pwCorrectError);
  }
}

// error 보여줌
function showError(element, message) {
  element.textContent = message;
  element.style.display = 'block';
  if (element.classList.contains('LoginEmailError')) {
    element.previousElementSibling.style.border = '1px solid red';
  } else if (element.classList.contains('LoginPwError')) {
    const passwordInput = element.previousElementSibling.querySelector('.SignUpPwInput');
    if (passwordInput) {
      passwordInput.style.border = '1px solid red';
    }
  } else if (element.classList.contains('LoginPwCorrectError')) {
    const correctInput = element.previousElementSibling.querySelector('.SignUpPwCorrectInput');
    if (correctInput) {
      correctInput.style.border = '1px solid red';
    }
  }
}

function hideError(element) {
  // 요소를 지우고 싶지만 공간은 두고싶은 경우
  element.textContent = '';
  // 요소를 지우고 공간도 지우고 싶은 경우
  element.style.display = 'none';
  if (element.classList.contains('LoginEmailError')) {
    element.previousElementSibling.style.border = '';
  } else if (element.classList.contains('LoginPwError')) {
    const passwordInput = element.previousElementSibling.querySelector('.SignUpPwInput');
    if (passwordInput) {
      passwordInput.style.border = '';
    }
  } else if (element.classList.contains('LoginPwCorrectError')) {
    const correctInput = element.previousElementSibling.querySelector('.SignUpPwCorrectInput');
    if (correctInput) {
      correctInput.style.border = '';
    }
  }
}

// Enter키로 회원가입
document.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') {
    document.querySelector('.LoginBtn').click();
  }
})

// focusout 되었을 때 emailInput, pwInput에서 validateEmail, validatePw검사
emailInput.addEventListener('focusout', validateEmail);
pwInput.addEventListener('focusout', validatePassword);
pwCorrectInput.addEventListener('focusout', correctPassword);

const loginForm = document.querySelector('.LoginBtn');

loginForm.addEventListener('click', function(event) {
  event.preventDefault();

  validateEmail();
  validatePassword();
  correctPassword();

  let emailValue = emailInput.value.trim();
  let passwordValue = pwInput.value.trim();
  let passwordValue2 = pwCorrectInput.value.trim();

  if(isValidEmail(emailValue) && isValidPassword(passwordValue) && passwordValue === passwordValue2) {
    window.location.href = '/folder';
  } else {
    showError(emailError, '이메일을 확인해 주세요.');
    showError(pwError, '비밀번호를 확인해 주세요.');
    showError(pwCorrectError, '비밀번호를 확인해 주세요.');
  }
})