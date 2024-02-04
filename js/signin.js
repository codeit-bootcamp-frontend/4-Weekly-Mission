import { validateEmail, validatePassword } from './validation.js';
import { togglePassword} from './passwordToggle.js';
import { createErrorMessage } from './error.js'

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('.submit');
const eyeIcon = document.querySelector('.eye-button');

emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword); 

// 로그인 버튼 클릭 시 로그인 실행
loginButton.addEventListener("click", login);

// 로그인 함수
function login() {
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredEmail === 'test@codeit.com' && enteredPassword === 'codeit101') {
    const link = '/folder.html'
    location.href = link;
  } else {
    createErrorMessage(emailInput, "이메일을 확인해 주세요.");
    createErrorMessage(passwordInput, "비밀번호를 확인해 주세요.");
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
