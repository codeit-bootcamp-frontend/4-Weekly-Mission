function validateEmail(email) {
  if (!email) {
    return "이메일을 입력해 주세요.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "올바른 이메일 주소가 아닙니다.";
  }
  return "";
}

function validatePassword(password) {
  if (!password) {
    return "비밀번호를 입력해 주세요.";
  } else if (password.length < 8 || /^\d+$/.test(password) || /^[a-zA-Z]+$/.test(password)) {
    return "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  }
  return "";
}

function togglePasswordVisibility(passwordInput, eyeIcon) {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  eyeIcon.src = type === "password" ? "./images/eye-off.svg" : "./images/eye.svg";
}

export { validateEmail, validatePassword, togglePasswordVisibility };