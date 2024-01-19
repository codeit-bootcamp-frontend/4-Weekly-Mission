const form = document.querySelector('#form');

const email = document.querySelector('#email');
const password = document.querySelector('#password');

const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

const eyeIcon = document.querySelector('.icon');
const eyeIconOn = document.querySelector('.eye-icon-on');
const eyeIconOff = document.querySelector('.eye-icon-off');

function onSubmit(e) {
  e.preventDefault();

  if (email.value === 'test@codeit.com' && password.value === 'codeit101') {
    location.href = '/folder/folder.html';
  } else {
    emailError.textContent = '이메일을 확인해 주세요.';
    passwordError.textContent = '비밀번호를 확인해 주세요.';
  }
}

function togglePasswordVisibility() {
  if (password.type === 'password') {
    password.type = 'text';
    eyeIconOff.style.display = 'none';
    eyeIconOn.style.display = 'inline-block';
  } else {
    password.type = 'password';
    eyeIconOff.style.display = 'inline-block';
    eyeIconOn.style.display = 'none';
  }
}

form.addEventListener('submit', onSubmit);

eyeIcon.addEventListener('click', function (e) {
  if (e.target.classList.contains('eye-icon')) {
    togglePasswordVisibility();
  }
});
