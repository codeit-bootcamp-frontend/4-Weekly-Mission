const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
// 테스트 유저 객체
export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

// 이메일 유효검사
export function validateEmail(page) {

  const email = document.getElementById('email-input').value.trim();
  const emailError = document.getElementById('email-error');

  if (email === '') {
    emailError.textContent = '이메일을 입력해 주세요.';
    return false
  } else if (!EMAIL_REGEX.test(email)) {
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    return false
  } else if (email === TEST_USER.email && page === 'signup') {
    emailError.textContent = '이미 사용 중인 이메일입니다.';
    return false
  } else {
    emailError.textContent = '';
    return true
  }

}

// 비밀번호 유효검사
export function validatePassword(page) {

  const password = document.getElementById('pwd-input').value.trim();
  const passwordError = document.getElementById('pwd-error');

  if (password === '') {
    passwordError.textContent = '비밀번호를 입력해 주세요.';
    return false
  } else if (!PASSWORD_REGEX.test(password) && page === 'signup') {
    passwordError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    return false
  } else {
    passwordError.textContent = '';
    return true
  }
}

// 유효검사 실패 인풋
export function inputError(inputId) {

  const inputElement = document.getElementById(inputId);

  inputElement.classList.remove('sign-input');
  inputElement.classList.add('sign-input-error');
}
// 유효검사 성공 인풋
export function inputSuccess(inputId) {

  const inputElement = document.getElementById(inputId);

  inputElement.classList.add('sign-input');
  inputElement.classList.remove('sign-input-error');
}

// // 비밀번호 숨기기 & 보이기
export function pwdEye(pwd, eye) {
  const pwdInput = document.getElementById(pwd)
  const eyeImg = document.getElementById(eye);

  if (pwdInput.type === 'password') {
    pwdInput.type = 'text'
    eyeImg.src = "../images/eye-on.svg"
  } else {
    pwdInput.type = 'password'
    eyeImg.src = "../images/eye-off.svg"
  }
}