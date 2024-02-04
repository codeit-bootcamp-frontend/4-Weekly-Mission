import { validateEmail, validatePassword } from './validation.js';
import { togglePassword} from './passwordToggle.js';
import { createErrorMessage } from './error.js'

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

function validatePasswordRegex(event) {
  const passwordInput = event.target;
  const password = passwordInput.value;
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (!regex.test(password)) {
    createErrorMessage(passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
  }
}

confirmPasswordInput.addEventListener("focusout", passwordCheck);

function passwordCheck() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    createErrorMessage(confirmPasswordInput, "비밀번호가 다릅니다.");
  }
}

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

document.addEventListener('keydown', function(e) {
  let pressedKey = e.key
  if (pressedKey === 'Enter') {
    e.preventDefault();
    signup();
  }
});

passwordEyeIcon.addEventListener('click', (e) => togglePassword(e, passwordInput, passwordEyeIcon));

confirmPasswordEyeIcon.addEventListener('click', (e) => togglePassword(e, confirmPasswordInput, confirmPasswordEyeIcon));