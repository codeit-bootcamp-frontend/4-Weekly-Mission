import { createErrorMessage, validateEmail, validatePassword } from './validation.js';
import { togglePassword} from './passwordToggle.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const signupButton = document.querySelector('.submit');
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

passwordInput.addEventListener("focusout", () => {
  validatePassword(passwordInput);
  validatePasswordRegex(passwordInput);
});

function validatePasswordRegex(passwordInput) {
  const password = passwordInput.value;
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (!regex.test(password)) {
    createErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요", passwordInput);
  }
}

confirmPasswordInput.addEventListener("focusout", passwordCheck);

function passwordCheck() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    createErrorMessage("비밀번호가 다릅니다.", confirmPasswordInput);
  }
}

signupButton.addEventListener("click", function(e) {
  e.preventDefault();
  signup();
});

function signup() {
  const email = emailInput
  const password = passwordInput
  const confirmPassword = confirmPasswordInput
  
  function newPage() {
    const link = '/folder.html'
    location.href = link;
  }

  const notHasError = !email.classList.contains('error') && !password.classList.contains("error") && !confirmPassword.classList.contains("error");

  if (notHasError) {
    newPage();
  } else {
  }
}

document.addEventListener('keydown', function(e) {
  let pressedKey = e.key
  if (pressedKey === 'Enter') {
    e.preventDefault();
    signup();
  }
});