const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const loginButton = document.querySelector(".login-button");

/* 이메일 유효성 검사 */
const isValidEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "") {
    emailError.innerHTML = "이메일을 입력해 주세요.";
  } else if (!emailRegex.test(email.value)) {
    emailError.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailError.innerHTML = "";
  }
};

/* 비밀번호 유효성 검사 */
const isValidPassword = () => {
  if (password.value === "") {
    passwordError.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    passwordError.innerHTML = "";
  }
};

/* 특정 아이디 및 비밀번호로 로그인 시도 시 페이지 이동 */
const redirectToFolderPage = () => {
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    const link = "./folder.html";
    location.href = link;
  } else {
    emailError.innerHTML = "이메일을 확인해 주세요.";
    passwordError.innerHTML = "비밀번호를 확인해 주세요.";
  }
};

/* enter키 입력 시 로그인 실행 */
const enterKey = (e) => {
  if (e.keyCode == 13) {
    redirectToFolderPage();
  }
};

email.addEventListener("blur", isValidEmail);
password.addEventListener("blur", isValidPassword);
loginButton.addEventListener("click", redirectToFolderPage);
document.addEventListener("keypress", enterKey);
