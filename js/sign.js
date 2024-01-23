const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const loginButton = document.querySelector(".login-button");
const eyeIcon = document.querySelector(".eye-icon");

const setInvalidStyle = (element) => {
  element.style.border = "1px solid #ff5b56";
};

const setValidStyle = (element) => {
  element.style.border = "";
};

/* 이메일 유효성 검사 */
const isValidEmail = () => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (email.value === "") {
    setInvalidStyle(email);
    emailError.innerHTML = "이메일을 입력해 주세요.";
  } else if (!emailRegex.test(email.value)) {
    setInvalidStyle(email);
    emailError.innerHTML = "올바른 이메일 주소가 아닙니다.";
  } else {
    setValidStyle(email);
    emailError.innerHTML = "";
  }
};

/* 비밀번호 유효성 검사 */
const isValidPassword = () => {
  if (password.value === "") {
    setInvalidStyle(password);
    passwordError.innerHTML = "비밀번호를 입력해주세요.";
  } else {
    setValidStyle(password);
    passwordError.innerHTML = "";
  }
};

/* 특정 아이디 및 비밀번호로 로그인 시도 시 페이지 이동 */
const redirectToFolderPage = () => {
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    const link = "./folder.html";
    location.href = link;
  } else {
    setInvalidStyle(email);
    setInvalidStyle(password);
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

/* 눈동자아이콘 클릭 시 비밀번호 type 변경 */
const togglePasswordVisibility = () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;

  eyeIcon.src =
    type === "password"
      ? "../images/signIn/eye-off.svg"
      : "../images/signIn/eye-on.png";
};

email.addEventListener("blur", isValidEmail);
password.addEventListener("blur", isValidPassword);
loginButton.addEventListener("click", redirectToFolderPage);
document.addEventListener("keypress", enterKey);
eyeIcon.addEventListener("click", togglePasswordVisibility);
