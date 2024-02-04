import {
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

  if (!validateEmail('signup')) {
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

  if (!validatePassword('signup')) {
    inputError('pwd-input');
  } else {
    inputSuccess('pwd-input');
  }
}
document.getElementById('pwd-input').addEventListener('focusout', validatePasswordInput);

/**
 * 비밀번호 확인 검사
 * @returns {boolean} - 비밀번호 확인 여부
 */
function pwdCheck() {
  const password = document.getElementById('pwd-input').value.trim();
  const passwordCheck = document.getElementById('pwd-check-input').value.trim();
  const pwdCheckError = document.getElementById('pwd-check-error');

  if (password === passwordCheck) {
    pwdCheckError.textContent = '';
    inputSuccess('pwd-check-input')
    return true
  } else {
    pwdCheckError.textContent = '비밀번호가 일치하지 않아요.';
    inputError('pwd-check-input');
    return false
  }

}
document.getElementById('pwd-check-input').addEventListener('focusout', pwdCheck);

/**
 * 회원가입 버튼 클릭 시 동작
 * @param {Event} e - 클릭 이벤트
 */
function signUp(e) {
  e.preventDefault();

  const email = document.getElementById('email-input').value.trim();

  const isEmail = validateEmail('signup');
  const isPassword = validatePassword('signup');
  const isPasswordCheck = pwdCheck()


  if (isEmail && isPassword && isPasswordCheck) {
    fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        location.href = 'folder.html'
      })
      .catch((error) => {
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      })
  } else {

    validateEmailInput()

    validatePasswordInput()

    pwdCheck();
  }
};
document.getElementById('signup-btn').addEventListener('click', signUp);


/**
 * 비밀번호 숨기기 & 보이기
 */
document.getElementById('pwd-eye-btn').addEventListener('click', () => pwdEye('pwd-input', 'pwd-eye-img'));
document.getElementById('pwdcheck-eye-btn').addEventListener('click', () => pwdEye('pwd-check-input', 'pwdcheck-eye-img'));

/**
 * 페이지 로드 시 자동 로그인 시도
 */
window.addEventListener('load', autoLogin)