function isValidEmail(email) {
  const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailRegExp.test(email);
}

// 1. 이메일 유효성 검사
const inputEamil = document.querySelector('#email');
const errorMessageEmail = document.querySelector('#errorMessageEmail');

function checkInputEmail(email) {
  if(email.target.value === '') {
    inputEamil.style.border = '0.1rem solid var(--red)';
    errorMessageEmail.textContent = '이메일을 입력해 주세요.';
    errorMessageEmail.style.color = 'var(--red)';
    errorMessageEmail.style.fontSize = '14px';
  } else if (!isValidEmail(email.target.value)) {
    inputEamil.style.border = '0.1rem solid var(--red)';
    errorMessageEmail.textContent = '올바른 이메일 주소가 아닙니다.';
    errorMessageEmail.style.color = 'var(--red)';
    errorMessageEmail.style.fontSize = '14px';
  } else {
    inputEamil.style.border = '0.1rem solid var(--gray20)';
    errorMessageEmail.textContent = '';
  }
}
inputEamil.addEventListener('focusout', checkInputEmail);

// 2. 비밀번호 유효성 검사
const inputPassword = document.querySelector('#password');
const errorMessagePassword = document.querySelector('#errorMessagePassword');

function checkInputPassword(password) {
  if(password.target.value === '') {
    inputPassword.style.border = '0.1rem solid var(--red)';
    errorMessagePassword.textContent = '비밀번호를 입력해 주세요.';
    errorMessagePassword.style.color = 'var(--red)';
    errorMessagePassword.style.fontSize = '14px';
  } else {
    inputPassword.style.border = '0.1rem solid var(--gray20)';
    errorMessagePassword.textContent = '';
  }
}
inputPassword.addEventListener('focusout', checkInputPassword);

// 3. 테스트 아이디 입력 시 /folder 페이지로 이동
const signForm = document.querySelector('#sign-form');

function testSubmit(event) {
  event.preventDefault();

  if(email.value === 'test@codeit.com' && password.value === 'codeit101') {
    location.href = './folder.html';
  } else {
    inputEamil.style.border = '0.1rem solid var(--red)';
    errorMessageEmail.textContent = '이메일을 확인해 주세요.';
    errorMessageEmail.style.color = 'var(--red)';
    errorMessageEmail.style.fontSize = '14px';
    inputPassword.style.border = '0.1rem solid var(--red)';
    errorMessagePassword.textContent = '비밀번호를 확인해 주세요.';
    errorMessagePassword.style.color = 'var(--red)';
    errorMessagePassword.style.fontSize = '14px';
  }
}
signForm.addEventListener('submit', testSubmit);

// 4. 눈모양 버튼으로 속성값 password 해제, 적용 시키기
const button = document.querySelector('#toggleEye');
const eyeImage = document.querySelector('#eyeImage');

function togglePassword() {
  if(inputPassword.type === 'password') {
    eyeImage.src = './images/eye-on.svg';
    inputPassword.type = 'text';
  } else {
    eyeImage.src = './images/eye-off.svg';
    inputPassword.type = 'password';
  }
}
button.addEventListener('click', togglePassword);