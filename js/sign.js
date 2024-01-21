const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailError = document.querySelector('#signinEmailError');
const pwError = document.querySelector('#signinPwError');
const loginBtn = document.querySelector('#loginButton');

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      login();
    }
  });

  loginBtn.addEventListener('click', login);

  email.addEventListener('focusout', emailF);
  password.addEventListener('focusout', passwordF);

});

function login() {
  const testEmail = "test@codeit.com";
  const testPw = "codeit101";

  if (email.value === testEmail && password.value === testPw) {
    window.location.href = '../folder.html'
  }

  if (email.value !== testEmail) {
    emailError.textContent = '이메일을 확인해 주세요';
  }

  if (password !== testPw) {
    pwError.textContent = '비밀번호를 확인해 주세요';
  }
}

function emailF() {
  let emailCheck = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_\.-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!email.value) {
    emailError.textContent = "이메일을 입력해 주세요";
  } else {
    if (!emailCheck.test(email.value)) {
      emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    }
  }
}

function passwordF() {
  if (!password.value) {
    pwError.textContent = "비밀번호를 입력해 주세요";
  }
}

