// 이메일 주소 유효성 검사 함수
export function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// 비밀번호 유효성 검사 함수
export function isValidPassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}
