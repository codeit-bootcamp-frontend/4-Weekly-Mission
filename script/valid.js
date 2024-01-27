function emailValid(email) {
  const EXIST_EMAIL = "test@codeit.com";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 유효성 검사 정규식
  if (email !== EXIST_EMAIL && email !== "" && emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

function passwordValid(password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  if (password !== "" && passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}

function isPasswordSame(password1, password2) {
  return password1 === password2 ? true : false;
}

export { emailValid, passwordValid, isPasswordSame };
