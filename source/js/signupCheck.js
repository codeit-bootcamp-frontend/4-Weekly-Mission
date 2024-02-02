import validateEmail from '../utils/emailValidate.js';
import validatePassword from '../utils/passwordValidate.js';

//회원가입 실행 시 에러 메시지 호출 또는 페이지 이동
function signupCheck() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordCheckInput = document.getElementById('passwordCheck');
  const passwordValue = passwordInput.value;
  const passwordCheckValue = passwordCheckInput.value;
  const checkEmail = validateEmail(emailInput.value);
  const checkPassword = validatePassword(passwordInput.value);
  const passwordCheckError = document.getElementById('passwordCheckError');

  if (checkEmail && checkPassword) {
    window.location.href = './folder';
  }

  if (!checkEmail) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = '이메일을 확인해 주세요.';
  }

  if (!checkPassword) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 확인해 주세요.';
  }

  if (passwordValue !== passwordCheckValue) {
    passwordCheckInput.classList.add('invalid');
    passwordCheckError.innerHTML = '비밀번호가 일치하지 않아요.';
  }
}

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  signupCheck();
});

//회원가입 버튼에 이벤트 리스너 등록
const signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', signupCheck);

export default signupCheck;
