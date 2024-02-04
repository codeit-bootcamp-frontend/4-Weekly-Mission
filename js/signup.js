import { validateEmail, validatePassword, validatePasswordRegex, passwordCheck } from './validation.js';
import { togglePassword} from './passwordToggle.js';
import { createErrorMessage } from './error.js'
import {handleEnterKey} from './button/enterKey.js'

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

function emailCheck(event) {
  const emailInput = event.target;
  const email = emailInput.value;

  if (email === 'test@codeit.com') {
    createErrorMessage(emailInput, "이미 사용 중인 이메일입니다.");
  }
}

passwordInput.addEventListener("focusout", (event) => {
  validatePassword(event);
  validatePasswordRegex(event);
});

confirmPasswordInput.addEventListener("focusout", passwordCheck);

signupButton.addEventListener("click", function(e) {
  e.preventDefault();
  signup();
});

function signup() {

  const notHasError = !email.classList.contains('error') && !password.classList.contains("error") && !confirmPassword.classList.contains("error");

  if (notHasError) {
    const link = '/folder.html'
    location.href = link;
  }
}

document.addEventListener('keydown', (e) => handleEnterKey(e, signup));

passwordEyeIcon.addEventListener('click', (e) => togglePassword(e, passwordInput, passwordEyeIcon));
confirmPasswordEyeIcon.addEventListener('click', (e) => togglePassword(e, confirmPasswordInput, confirmPasswordEyeIcon));