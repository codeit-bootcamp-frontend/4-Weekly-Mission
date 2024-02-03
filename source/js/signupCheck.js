import validateEmail from '../utils/emailValidate.js';
import validatePassword from '../utils/passwordValidate.js';

//회원가입 실행 시 에러 메시지 호출 또는 페이지 이동
async function signupCheck() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordCheckInput = document.getElementById('passwordCheck');
  const passwordValue = passwordInput.value;
  const passwordCheckValue = passwordCheckInput.value;
  const checkEmail = validateEmail(emailInput.value);
  const checkPassword = validatePassword(passwordInput.value);
  const passwordCheckError = document.getElementById('passwordCheckError');

  //유효한 회원가입 형식 POST request 보내기
  try {
    const result = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({ email: emailInput.value, password: passwordValue, passwordCheck: passwordCheckValue }),
    });
    window.location.href = '/folder';
    if (!result.ok) {
      throw new Error(result.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  signupCheck();
});

export default signupCheck;

//   if (checkEmail && checkPassword) {
//     window.location.href = './folder';
//   }

//   if (!checkEmail) {
//     emailInput.classList.add('invalid');
//     emailError.innerHTML = '이메일을 확인해 주세요.';
//   }

//   if (!checkPassword) {
//     passwordInput.classList.add('invalid');
//     passwordError.innerHTML = '비밀번호를 확인해 주세요.';
//   }

//   if (passwordValue !== passwordCheckValue) {
//     passwordCheckInput.classList.add('invalid');
//     passwordCheckError.innerHTML = '비밀번호가 일치하지 않아요.';
//   }
// }
