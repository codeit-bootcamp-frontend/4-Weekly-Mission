export function togglePassword(e, passwordInput, eyeIcon) {
  // 이미지의 초기 경로

  e.preventDefault();
  if (passwordInput.type === 'password') {
    // 비밀번호 문자열을 보이도록 변경
    passwordInput.type = 'text';
    eyeIcon.querySelector('img').src = './img/login/eye-on.svg';
  } else {
    // 비밀번호 문자열을 가려지도록 변경
    passwordInput.type = 'password';
    eyeIcon.querySelector('img').src = './img/login/eye-off.svg';
  }
}