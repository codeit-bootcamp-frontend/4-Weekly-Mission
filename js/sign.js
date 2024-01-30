import {
  email,
  emailError,
  password,
  passwordError,
  eyeIcon,
  setInvalidStyle,
  setValidStyle,
  errorMessage,
  handleEmailValidation,
  togglePasswordVisibility,
  enterKey,
} from "./modules/AuthUtils.js";

const loginButton = document.querySelector(".login-button");

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
  if (
    email.value === errorMessage.ALREADY_EMAIL &&
    password.value === "codeit101"
  ) {
    const link = "./folder.html";
    location.href = link;
  } else {
    setInvalidStyle(email);
    setInvalidStyle(password);
    emailError.innerHTML = errorMessage.EMAIL_CHECK_MESSAGE;
    passwordError.innerHTML = errorMessage.PASSWORD_CHECK_MESSAGE;
  }
};

email.addEventListener("blur", handleEmailValidation);
password.addEventListener("blur", handlePasswordValidation);
loginButton.addEventListener("click", redirectToFolderPage);
document.addEventListener("keypress", (event) => {
  enterKey(event, redirectToFolderPage);
});
eyeIcon.addEventListener("click", () => {
  togglePasswordVisibility(password, eyeIcon);
});
