import { createErrorMessage, validateEmail, validatePassword } from './validation.js';
import { togglePassword} from './passwordToggle.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('.submit');
const eyeIcon = document.querySelector('.eye-button');

emailInput.addEventListener("focusout", () => {
  validateEmail(emailInput);
  emailCheck(emailInput);
});

function emailCheck(emailInput) {
  const email = emailInput.value;

  if (email === 'test@codeit.com') {
    createErrorMessage("이미 사용 중인 이메일입니다.", emailInput);
  }
}