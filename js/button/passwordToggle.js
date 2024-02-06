export function togglePassword(e, passwordInput, eyeIcon) {
  e.preventDefault();
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.querySelector('img').src = './img/login/eye-on.svg';
  } else {
    passwordInput.type = 'password';
    eyeIcon.querySelector('img').src = './img/login/eye-off.svg';
  }
}