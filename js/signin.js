import {
  TEST_USER,
  validateEmail,
  validatePassword,
  inputError,
  inputSuccess,
  pwdEye,
  autoLogin,
} from "./modules/signModule.js";

/**
 * 이메일 유효성 검사 후 인풋 필드 스타일 변경
 */
function validateEmailInput() {

  if (!validateEmail('signin')) {
    inputError('email-input');
  } else {
    inputSuccess('email-input');
  }

}
document.getElementById('email-input').addEventListener('focusout', validateEmailInput);

/**
 * 비밀번호 유효성 검사 후 인풋 필드 스타일 변경
 */
function validatePasswordInput() {

  if (!validatePassword('signin')) {
    inputError('pwd-input');
  } else {
    inputSuccess('pwd-input');
  }
}
document.getElementById('pwd-input').addEventListener('focusout', validatePasswordInput);

/**
 * 로그인 버튼 클릭 시 동작
 * @param {Event} e - 클릭 이벤트 
 */
function signIn(e) {
  e.preventDefault();

  const email = document.getElementById('email-input').value.trim();
  const password = document.getElementById('pwd-input').value.trim();
  const emailError = document.getElementById('email-error')
  const pwdError = document.getElementById('pwd-error')

  if (email === TEST_USER.email && password === TEST_USER.password) {
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: "test@codeit.com",
        password: "sprint101",
      }),
    })
      .then((response) => response.json())
      .then((data) => data.data.accessToken)
      .then((accessToken) => {
        localStorage.setItem('accessToken', accessToken);
        location.href = 'folder.html'
      })
      .catch((error) => {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');

      })

  } else {

    if (email !== TEST_USER.email) {
      emailError.textContent = '이메일을 확인해 주세요';
      inputError('email-input');
    }
    if (password !== TEST_USER.password) {
      pwdError.textContent = '비밀번호를 확인해 주세요';
      inputError('pwd-input');
    }

  }
};
document.getElementById('signin-btn').addEventListener('click', signIn);

/**
 * 비밀번호 숨기기 & 보이기
 */
document.getElementById('pwd-eye-btn').addEventListener('click', () => pwdEye('pwd-input', 'pwd-eye-img'));


/**
 * 페이지 로드 시 자동 로그인 시도
 */
window.addEventListener('load', autoLogin)
