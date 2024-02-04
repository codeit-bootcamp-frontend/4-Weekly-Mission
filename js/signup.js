import {
  email,
  password,
  signBtn,
  inputFocusEvent,
  signupEmail,
  signupPw,
  pwToggleIcon,
  pwToggle,
} from './common.js'

const passwordCheck = document.querySelector('#passwordCheck');
const pwCheckError = document.querySelector('#pwCheckError');
const pwCheckToggleIcon = document.querySelector('#pwCheckToggleIcon');

const inputElements = [email, password, passwordCheck];
inputFocusEvent(inputElements);

document.addEventListener('DOMContentLoaded', function () {
  const storedToken = localStorage.getItem('accessToken');

  if (storedToken) {
    window.location.href = './folder.html';
    localStorage.removeItem('accessToken');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    signup();
  }
});

function signup() {
  fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email: email.value, password: password.value}),
  })
  .then(response => {
    if(response.ok) {
      const accessToken = response.accessToken;
      localStorage.setItem('accessToken', accessToken);
      window.location.href = './folder.html';
    } else if (response.status === 400) {
      throw new Error('회원가입 오류');
    }
  })
  .catch(error => {
    console.log(error);
  })
}

function pwCheck() {
  if (password.value !== passwordCheck.value) {
    passwordCheck.classList.add('inputError');
    pwCheckError.textContent = "비밀번호가 일치하지 않아요.";
  } else {
    passwordCheck.classList.remove('inputError');
    pwCheckError.textContent = '';
  }
}

signBtn.addEventListener('click', signup);
email.addEventListener('focusout', signupEmail);
password.addEventListener('focusout', signupPw);
passwordCheck.addEventListener('focusout', pwCheck);

pwToggleIcon.addEventListener('click', function() {
  pwToggle(password, pwToggleIcon);
});
pwCheckToggleIcon.addEventListener('click', function() {
  pwToggle(passwordCheck, pwCheckToggleIcon);
});