const form = document.querySelector('#form');

const email = document.querySelector('#email');
const password = document.querySelector('#password');

const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

const eyeIcon = document.querySelector('.icon');
const eyeIconOn = document.querySelector('.eye-icon-on');
const eyeIconOff = document.querySelector('.eye-icon-off');

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

eyeIcon.addEventListener('click', function (e) {
  if (e.target.classList.contains('eye-icon')) {
    togglePasswordVisibility();
  }
});
