const form = document.querySelector('.frame-input');
const inputEmail = document.querySelector('.input-email input');
const inputPassword = document.querySelector('.input-pw input');
const errorMsgEmail = document.querySelector('.error-email');
const errorMsgPassword = document.querySelector('.error-pw');
const eyeBtn = document.querySelector('.eye-btn');

// 이메일 : test@codeit.com, 비밀번호 : codeit101 으로 로그인 시, '/folder' 페이지로 이동
function checkIsUser(e) {
  e.preventDefault();

  if (inputEmail.value !== 'test@codeit.com') {
    alert(`이메일을 확인해 주세요.`);
    return;
  }
  if (inputPassword.value !== 'codeit101') {
    alert(`비밀번호를 확인해 주세요.`);
    return;
  }

  window.location.href = 'folder.html';
}

function showEmailError(e) {
  let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  if (!e.target.value) {
    errorMsgEmail.innerText = `이메일을 입력해 주세요.`;
    inputEmail.classList.add('border-red');
    return;
  } else {
    errorMsgEmail.innerText = ``;
    inputEmail.classList.remove('border-red');
  }

  if (exptext.test(e.target.value) == false) {
    errorMsgEmail.innerText = `올바른 이메일 주소가 아닙니다.`;
    inputEmail.classList.add('border-red');
    return;
  } else {
    errorMsgEmail.innerText = ``;
    inputEmail.classList.remove('border-red');
  }
}

function showPasswordError(e) {
  if (!e.target.value) {
    errorMsgPassword.innerText = `비밀번호를 입력해 주세요.`;
    inputPassword.classList.add('border-red');
    return;
  } else {
    errorMsgPassword.innerText = ``;
    inputPassword.classList.remove('border-red');
  }
}

function togglePasswordVisible(e) {
  if (e.target.classList.contains('invisible')) {
    eyeBtn.src = '../images/eye-on.svg';
    inputPassword.type = 'text';
    e.target.classList.remove('invisible');
  } else {
    eyeBtn.src = '../images/eye-off.svg';
    inputPassword.type = 'password';
    e.target.classList.add('invisible');
  }
}

inputEmail.addEventListener('focusout', showEmailError);
inputPassword.addEventListener('focusout', showPasswordError);
form.addEventListener('submit', checkIsUser);
eyeBtn.addEventListener('click', togglePasswordVisible);
