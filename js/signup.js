import { validateEmail, validatePassword, validatePasswordRegex, passwordCheck } from './validation.js';
import { togglePassword } from './button/passwordToggle.js';
import { handleEnterKey } from './button/enterKey.js'
import { emailCheck } from './validation.js';
import { signup } from './button/signup.js';
import { getAccessToken } from './accessToken.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const signupButton = document.querySelector('.submit');
const passwordEyeIcon = document.querySelector('.sign-password .eye-button');
const confirmPasswordEyeIcon = document.querySelector('.sign-password-check .eye-button');

emailInput.addEventListener("focusout", (event) => {
  validateEmail(event);
  emailCheck(event);
});

passwordInput.addEventListener("focusout", (event) => {
  validatePassword(event);
  validatePasswordRegex(event);
});

confirmPasswordInput.addEventListener("focusout", function() {
  passwordCheck(passwordInput, confirmPasswordInput);
});

signupButton.addEventListener("click", signup);
document.addEventListener('keydown', (e) => handleEnterKey(e, signup));

document.addEventListener('DOMContentLoaded', () => {
  if (getAccessToken()) { 
    location.href = 'folder.html';
  }
});

passwordEyeIcon.addEventListener('click', (e) => togglePassword(e, passwordInput, passwordEyeIcon));
confirmPasswordEyeIcon.addEventListener('click', (e) => togglePassword(e, confirmPasswordInput, confirmPasswordEyeIcon));