const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

/* 이메일 유효성 검사 */
function isValidEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "") {
    emailError.innerHTML = "이메일을 입력해 주세요.";
  } else if (!emailRegex.test(email.value)) {
    emailError.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailError.innerHTML = "";
  }
}

/* 비밀번호 유효성 검사 */
function isValidPassword() {
  if (password.value === "") {
    passwordError.innerHTML = "비밀번호를 입력해주세요.";
  }
}

email.addEventListener("blur", isValidEmail);
password.addEventListener("blur", isValidPassword);
