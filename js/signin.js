import {
  email,
  emailError,
  password,
  pwError,
  signBtn,
  inputFocusEvent,
  emailF,
  passwordF,
  pwToggleIcon,
  pwToggle,
} from './common.js';

const inputElements = [email, password];
inputFocusEvent(inputElements);

  document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      signin();
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const storedToken = localStorage.getItem('accessToken');
  
    if (storedToken) {
      window.location.href = './folder.html';
      localStorage.removeItem('accessToken');
    }
  });

  function signin() {
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({email: email.value, password: password.value}),
    })
    .then(response => {
      if (response.ok) {
        const accessToken = response.accessToken;
        localStorage.setItem('accessToken', accessToken);
        window.location.href = './folder.html';
      } else if (response.status === 400) {
        email.classList.add('inputError');
        emailError.textContent = '이메일을 확인해 주세요';
        password.classList.add('inputError');
        pwError.textContent = '비밀번호를 확인해 주세요';
        throw new Error('로그인 오류');
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  signBtn.addEventListener('click', signin);
  email.addEventListener('focusout', emailF);
  password.addEventListener('focusout', passwordF);
  pwToggleIcon.addEventListener('click', function() {
    pwToggle(password, pwToggleIcon);
  });