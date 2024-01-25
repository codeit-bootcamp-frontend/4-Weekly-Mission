import * as AuthUtils from "./modules/AuthUtils.js";

const password = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const loginButton = document.querySelector(".login-button");
const eyeIcon = document.querySelector(".eye-icon");

/* 비밀번호 유효성 검사 */
const handlePasswordValidation = () => {
  const PASSWORD_ERROR_MESSAGE = "비밀번호를 입력해주세요.";

  if (password.value === "") {
    setInvalidStyle(password);
    passwordError.innerHTML = PASSWORD_ERROR_MESSAGE;
  } else {
    setValidStyle(password);
    passwordError.innerHTML = "";
  }
};

/* 특정 아이디 및 비밀번호로 로그인 시도 시 페이지 이동 */
const redirectToFolderPage = () => {
  const EMAIL_ERROR_MESSAGE = "이메일을 확인해 주세요.";
  const PASSWORD_ERROR_MESSAGE = "비밀번호를 확인해 주세요.";

  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    const link = "./folder.html";
    location.href = link;
  } else {
    setInvalidStyle(email);
    setInvalidStyle(password);
    emailError.innerHTML = EMAIL_ERROR_MESSAGE;
    passwordError.innerHTML = PASSWORD_ERROR_MESSAGE;
  }
};

/* enter키 입력 시 로그인 실행 */
const enterKey = (e) => {
  if (e.keyCode == 13) {
    redirectToFolderPage();
  }
};

/* 눈동자아이콘 클릭 시 비밀번호 type 변경 */
const togglePasswordVisibility = () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;

  eyeIcon.src =
    type === "password"
      ? "../images/signIn/eye-off.svg"
      : "../images/signIn/eye-on.png";
};

email.addEventListener("blur", AuthUtils.handleEmailValidation);
password.addEventListener("blur", handlePasswordValidation);
loginButton.addEventListener("click", redirectToFolderPage);
document.addEventListener("keypress", enterKey);
eyeIcon.addEventListener("click", togglePasswordVisibility);
