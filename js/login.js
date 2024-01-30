const emailErrorMessage = document.querySelector('.error-text-email');
const emailInput = document.querySelector('.email-input');

emailInput.addEventListener("blur", function () {
  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  if (emailInput.value === '') {
    emailErrorMessage.textContent = '이메일을 입력해 주세요.';
    emailInput.classList.add('border-color');
    return;
  }

  if (emailInput.value.match(EMAIL_REGEX) === null) {
    emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    emailInput.classList.add('border-color');
    return;
  }

  emailErrorMessage.textContent = '';
  emailInput.classList.remove('border-color');
});

const passwordErrorMessage = document.querySelector('.error-text-password');
const passwordInput = document.querySelector('.password-input');

passwordInput.addEventListener("blur", function () {
  if (passwordInput.value === '') {
    passwordErrorMessage.textContent = '비밀번호를 입력해 주세요.';
    passwordInput.classList.add('border-color');
    return;
  }

  passwordErrorMessage.textContent = '';
  passwordInput.classList.remove('border-color');
});


const eyeIcon = document.querySelector('.eye-icon');

eyeIcon.addEventListener("click", function () {
  if (passwordInput.type === `password`){
    eyeIcon.innerHTML = `<img src="./image/eye-on.png" width="100%" height="100%">`;
    passwordInput.type = 'string';
    return;
  }
  eyeIcon.innerHTML = `<img src="./image/eye-off.png" width="100%" height="100%">`;
    passwordInput.type = 'password';
});

const loginForm = document.querySelector('.login-form');
const signInBtn = document.querySelector('.signin-button')

loginForm.addEventListener("submit", function () {
  if (emailInput.value !== 'test@codeit.com' || passwordInput.value !== 'codeit101') {
    emailErrorMessage.textContent = '이메일을 확인해 주세요.';
    passwordErrorMessage.textContent = '비밀번호를 확인해 주세요.';
    emailInput.classList.add('border-color');
    passwordInput.classList.add('border-color');
    event.preventDefault();
    return;
  }

  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    window.location.href = "./folder.html";
    event.preventDefault();
    return;
  }
});
