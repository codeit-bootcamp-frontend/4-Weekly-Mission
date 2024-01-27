const form = document.querySelector('.frame-input');
const inputEmail = document.querySelector('.input-email input');
const inputPassword = document.querySelector('.input-pw input');
const inputPasswordCheck = document.querySelector('#check-pw input');
const errorMsgEmail = document.querySelector('.error-email');
const errorMsgPassword = document.querySelector('.error-pw');
const errorMsgPasswordCheck = document.querySelector('.error-check-pw');
const showPasswordBtn = document.querySelector('.show-pw-btn');
const showPasswordCheckBtn = document.querySelector('.show-pw-check-btn');

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

function showInputErrorMessage(e) {
  if (!e.target.value) {
    if (e.target.type === 'email') {
      errorMsgEmail.innerText = `이메일을 입력해 주세요.`;
      inputEmail.classList.add('border-red');
      return;
    } else if (e.target.type === 'password') {
      errorMsgPassword.innerText = `비밀번호를 입력해 주세요.`;
      inputPassword.classList.add('border-red');
      return;
    }
  } else {
    if (e.target.type === 'email') {
      const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
      if (exptext.test(e.target.value) == false) {
        errorMsgEmail.innerText = `올바른 이메일 주소가 아닙니다.`;
        inputEmail.classList.add('border-red');
        return;
      } else if (e.target.value === 'test@codeit.com') {
        errorMsgEmail.innerText = `이미 사용 중인 이메일입니다.`;
        inputEmail.classList.add('border-red');
      } else {
        errorMsgEmail.innerText = ``;
        inputEmail.classList.remove('border-red');
      }
    } else if (e.target.type === 'password') {
      const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
      if (!pwReg.test(e.target.value)) {
        errorMsgPassword.innerText = `비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.`;
        inputPassword.classList.add('border-red');
      } else {
        errorMsgPassword.innerText = ``;
        inputPassword.classList.remove('border-red');
      }
    }
  }
}

function togglePasswordVisible(e) {
  if (e.target.classList.contains('invisible')) {
    showPasswordBtn.src = '../images/eye-on.svg';
    inputPassword.type = 'text';
    e.target.classList.remove('invisible');
  } else {
    showPasswordBtn.src = '../images/eye-off.svg';
    inputPassword.type = 'password';
    e.target.classList.add('invisible');
  }
}

function togglePasswordCheckVisible(e) {
  if (e.target.classList.contains('invisible')) {
    showPasswordCheckBtn.src = '../images/eye-on.svg';
    inputPasswordCheck.type = 'text';
    e.target.classList.remove('invisible');
  } else {
    showPasswordCheckBtn.src = '../images/eye-off.svg';
    inputPasswordCheck.type = 'password';
    e.target.classList.add('invisible');
  }
}

function checkPassword(e) {
  if (e.target.value !== inputPassword.value) {
    errorMsgPasswordCheck.innerText = `비밀번호가 일치하지 않아요.`;
    inputPasswordCheck.classList.add('border-red');
  } else {
    errorMsgPasswordCheck.innerText = ``;
    inputPasswordCheck.classList.remove('border-red');
  }
}

inputEmail.addEventListener('focusout', showInputErrorMessage);
inputPassword.addEventListener('focusout', showInputErrorMessage);
form.addEventListener('submit', checkIsUser);
showPasswordBtn.addEventListener('click', togglePasswordVisible);
showPasswordCheckBtn.addEventListener('click', togglePasswordCheckVisible);
inputPasswordCheck.addEventListener('focusout', checkPassword);
