export const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
export const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

// 이메일, 비밀번호 유효검사
export function Validator(inputId, errorId, regex, errorMessage, type, page) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  if (inputElement.value.trim() === '') {
    errorElement.textContent = errorMessage; // 기본 에러메시지 설정
  } else if (!regex.test(inputElement.value) && type !== 'pwd') {
    errorElement.textContent = '올바른 이메일 주소가 아닙니다.';
  } else if (inputElement.value.trim() === 'test@codeit.com' && type === 'id' && page === 'signup') {
    errorElement.textContent = '이미 사용 중인 이메일입니다.';
  } else if (!regex.test(inputElement.value) && type === 'pwd' && page === 'signup') {
    errorElement.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
  } else {
    errorElement.textContent = '';
  }

}
// 에러 메세지 발생시 인풋에 빨간 테두리
export function errorInput(inputId, errorId) {

  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  if (errorElement.textContent.trim() === '') {
    inputElement.classList.add('sign-input');
    inputElement.classList.remove('sign-input-error');
  } else {
    inputElement.classList.remove('sign-input');
    inputElement.classList.add('sign-input-error');
  }
}

// // 비밀번호 숨기기 & 보이기
export function pwdEye(pwd,eye) {
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