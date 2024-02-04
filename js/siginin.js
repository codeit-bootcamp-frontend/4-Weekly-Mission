const form = document.querySelector('.frame-input');
const inputEmail = document.querySelector('.input-email input');
const inputPassword = document.querySelector('.input-pw input');
const errorMsgEmail = document.querySelector('.error-email');
const errorMsgPassword = document.querySelector('.error-pw');
const showPasswordBtn = document.querySelector('.show-pw-btn');

// 페이지 접근시 localStorage에 accessToken이 있을 경우, folder.html로 이동
(() => {
  const myAccessToken = window.localStorage.getItem('accessToken');
  if (myAccessToken) {
    window.location.href = 'folder.html';
  }
})();

async function signinRequestPost() {
  const url = 'https://bootcamp-api.codeit.kr/api/sign-in';
  const newUser = {
    email: inputEmail.value,
    password: inputPassword.value,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const responseStatus = response.status;
    if (responseStatus === 200) {
      const { data } = await response.json();
      localStorage.setItem('accessToken', data.accessToken);
      window.location.href = 'folder.html';
    }
  } catch (err) {
    console.log(err.message);
  }
}

// 이메일 : test@codeit.com, 비밀번호 : codeit101 으로 로그인 시, '/folder' 페이지로 이동
function checkIsUser(e) {
  e.preventDefault();

  if (inputEmail.value !== 'test@codeit.com') {
    alert(`이메일을 확인해 주세요.`);
    return;
  }
  if (inputPassword.value !== 'sprint101') {
    alert(`비밀번호를 확인해 주세요.`);
    return;
  }
  signinRequestPost();
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
      } else {
        errorMsgEmail.innerText = ``;
        inputEmail.classList.remove('border-red');
      }
    } else if (e.target.type === 'password') {
      errorMsgPassword.innerText = ``;
      inputPassword.classList.remove('border-red');
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

inputEmail.addEventListener('focusout', showInputErrorMessage);
inputPassword.addEventListener('focusout', showInputErrorMessage);
form.addEventListener('submit', checkIsUser);
showPasswordBtn.addEventListener('click', togglePasswordVisible);
