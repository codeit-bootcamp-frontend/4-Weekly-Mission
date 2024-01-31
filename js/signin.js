const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailError = document.querySelector('#signinEmailError');
const pwError = document.querySelector('#signinPwError');
const loginBtn = document.querySelector('#loginButton');

const testEmail = "test@codeit.com";
const testPw = "codeit101";

const emailCheck = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_\.-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      login();
    }
  });

  loginBtn.addEventListener('click', login);
  email.addEventListener('focusout', emailF);
  password.addEventListener('focusout', passwordF);


function login() {
  if (email.value === testEmail && password.value === testPw) {
    window.location.href = './folder.html'
  }

  if (email.value !== testEmail) {
    emailError.textContent = '이메일을 확인해 주세요';
  }

  if (password.value !== testPw) {
    pwError.textContent = '비밀번호를 확인해 주세요';
  }
}

function emailF() {
  if (!email.value) {
    email.classList.add('inputError');
    emailError.textContent = "이메일을 입력해 주세요";
  } else if (!emailCheck.test(email.value)) {
    email.classList.add('inputError');
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    email.classList.remove('inputError');
    emailError.textContent = '';
  }
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
