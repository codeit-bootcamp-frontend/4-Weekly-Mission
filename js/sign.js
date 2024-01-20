const email = document.querySelector("#email");
const error = document.querySelector(".error");

/* 이메일 유효성 검사 */
function isValidEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "") {
    error.innerHTML = "이메일을 입력해 주세요.";
  } else if (!emailRegex.test(email.value)) {
    error.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    error.innerHTML = "";
  }
}

email.addEventListener("blur", isValidEmail);
