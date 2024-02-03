// 이메일 유효성 검사
export function isValidEmail(email) {
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return EMAIL_REGEX.test(email);
}

// 비밀번호 유효성 검사
export function isValidPassword(password) {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return PASSWORD_REGEX.test(password);
}

// 오류 메시지 표시
export function showErrorMessage(inputElement, messageElement, message) {
  messageElement.textContent = message;
  messageElement.classList.add("show");
  inputElement.classList.add("sign-input-error");
  inputElement.classList.add("error-focus");
}

// 오류 메시지 숨기기
export function hideErrorMessage(inputElement, messageElement) {
  messageElement.textContent = "";
  messageElement.classList.remove("show");
  inputElement.classList.remove("sign-input-error");
  inputElement.classList.remove("error-focus");
}

// 눈 아이콘 클릭 핸들러
export function togglePasswordVisibility(inputElement, eyeOffButton, eyeOnButton) {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    eyeOffButton.classList.add("hide");
    eyeOnButton.classList.remove("hide");
  } else {
    inputElement.type = "password";
    eyeOffButton.classList.remove("hide");
    eyeOnButton.classList.add("hide");
  }
}
