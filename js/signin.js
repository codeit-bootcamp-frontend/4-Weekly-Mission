import { validateEmail, validatePassword } from './validation.js';
import { togglePassword } from './button/passwordToggle.js';
import { handleEnterKey } from './button/enterKey.js';
import { login } from './button/loginBtn.js';
import { getAccessToken } from './accessToken.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('.submit');
const eyeIcon = document.querySelector('.eye-button');

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);

loginButton.addEventListener("click", login);
document.addEventListener('keydown', (e) => handleEnterKey(e, login));

document.addEventListener('DOMContentLoaded', () => {
  if (getAccessToken()) { 
    location.href = 'folder.html';
  }
});

eyeIcon.addEventListener('click', (e) => togglePassword(e, passwordInput, eyeIcon));
