import { createErrorMessage, validateEmail, validatePassword } from './validation.js';
import { togglePassword} from './passwordToggle.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('.submit');
const eyeIcon = document.querySelector('.eye-button');

emailInput.addEventListener("focusout", () => validateEmail(emailInput));
passwordInput.addEventListener("focusout", () => validatePassword(passwordInput));

// 로그인 버튼 클릭 시 로그인 실행
loginButton.addEventListener("click", login);

// 로그인 함수
function login() {
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;
  
  function newPage() {
    const link = '/folder.html'
    location.href = link;
  }

  const emailError = emailInput.parentElement.querySelector(".error-message");
  if (emailError) {
    emailError.remove();
    emailInput.classList.remove("error");
  }

  const passwordError = passwordInput.parentElement.querySelector(".error-message");
  if (passwordError) {
    passwordError.remove();
    passwordInput.classList.remove("error");
  }

  if (enteredEmail === 'test@codeit.com' && enteredPassword === 'codeit101') {
    newPage();
  } else {
    createErrorMessage("이메일을 확인해 주세요.", emailInput);
    createErrorMessage("비밀번호를 확인해 주세요.", passwordInput);
  }
}

//엔터키로 로그인 실행
document.addEventListener('keydown', function(e) {
  let pressedKey = e.key
  if (pressedKey === 'Enter') {
    e.preventDefault();
    login();
  }
});

// 클릭 이벤트 등록
eyeIcon.addEventListener('click', (e) => togglePassword(e, passwordInput, eyeIcon));
