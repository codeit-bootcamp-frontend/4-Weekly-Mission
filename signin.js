const myInputEmail = document.querySelector('.input-email');
const myInputPassword = document.querySelector('.input-password');
const errorMessageId = document.getElementById('error-message-id');
const errorMessagePw = document.getElementById('error-message-pw');
const login = document.querySelector('.cta');
const answerEmail = 'test@codeit.com';
const answerPassword = 'codeit101';
const toggleButtonPw = document.querySelector('.eye-button');
const eyeOn = document.getElementById('eye-on');
const eyeOff = document.getElementById('eye-off');

// 검색하여 email 형식이 맞는 지 확인하는 방법을 찾음.
function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

myInputEmail.addEventListener('focusout', function() {
  if (myInputEmail.value === '') {
    errorMessageId.textContent = '이메일 주소를 입력해 주세요.';
    errorMessageId.style.display = 'block';
    myInputEmail.classList.add('error');
  } else if (!isValidEmail(myInputEmail.value.trim())) {
    errorMessageId.textContent = '올바른 이메일 주소가 아닙니다.';
    errorMessageId.style.display = 'block';
    myInputEmail.classList.add('error');
  } else {
    errorMessageId.style.display = 'none';
    myInputEmail.classList.remove('error');
  }
});

myInputPassword.addEventListener('focusout', function() {
  if (myInputPassword.value === '') {
    errorMessagePw.textContent = '비밀번호를 입력해 주세요.';
    errorMessagePw.style.display = 'block';
    myInputPassword.classList.add('error');
  } else {
    errorMessagePw.style.display = 'none';
    myInputPassword.classList.remove('error');
  }
});

login.addEventListener('click', function() { 
  if (myInputEmail.value === answerEmail && myInputPassword.value == answerPassword) {
    window.location.href = '/folder';
  } else {
    errorMessageId.textContent = '이메일을 확인해 주세요.';
    errorMessageId.style.display = 'block';
    myInputEmail.classList.add('error');
    errorMessagePw.textContent = '비밀번호를 확인해 주세요.';
    errorMessagePw.style.display = 'block';
    myInputPassword.classList.add('error');
  }
});

// 검색하여 form 제출 시 페이지 새로고침되지 않게 함.
document.querySelector('.sign-form').addEventListener('submit', function(event) {
  event.preventDefault();
});


function togglePassword() {
  if (myInputPassword.type === 'password') {
    myInputPassword.type = 'text';
    eyeOn.style.display = 'none';
    eyeOff.style.display = 'block';
  } else {
    myInputPassword.type = 'password';
    eyeOn.style.display = 'block';
    eyeOff.style.display = 'none';
  }
}

