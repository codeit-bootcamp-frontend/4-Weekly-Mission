const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const passwordRepeat = document.querySelector("#password-repeat");
const eyeIcon = document.querySelector(".eye-icon");
const repeatEyeIcon = document.querySelector(".repeat-eye-icon");

const setInvalidStyle = (element) => {
  element.style.border = "1px solid #ff5b56";
};

const setValidStyle = (element) => {
  element.style.border = "";
};

const errorMessage = {
  ALREADY_EMAIL: "test@codeit.com",
  EMAIL_INPUT_MESSAGE: "이메일을 입력해 주세요.",
  EMAIL_ERROR_MESSAGE: "올바른 이메일 주소가 아닙니다.",
  EMAIL_CHECK_MESSAGE: "이메일을 확인해 주세요.",
  EMAIL_USED_MESSAGE: "이미 사용 중인 이메일입니다.",
  PASSWORD_ERROR_MESSAGE: "비밀번호를 입력해주세요.",
  PASSWORD_CHECK_MESSAGE: "비밀번호를 확인해 주세요.",
  PASSWORD_FORMAT_MESSAGE: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  PASSWORD_MATCH_MESSAGE: "비밀번호가 일치하지 않아요.",
};

/* 이메일 유효성 검사 */
const handleEmailValidation = () => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (email.value === "") {
    setInvalidStyle(email);
    emailError.innerHTML = errorMessage.EMAIL_INPUT_MESSAGE;
  } else if (!emailRegex.test(email.value)) {
    setInvalidStyle(email);
    emailError.innerHTML = errorMessage.EMAIL_ERROR_MESSAGE;
  } else {
    setValidStyle(email);
    emailError.innerHTML = "";
  }
};

/* 눈동자아이콘 클릭 시 비밀번호 type 변경 */
const togglePasswordVisibility = (inputElement, eyeIconElement) => {
  const type = inputElement.type === "password" ? "text" : "password";
  inputElement.type = type;
  eyeIconElement.src = `../../images/signIn/eye-${
    type === "password" ? "off" : "on"
  }.png`;
};

/* enter키 입력 시 로그인 및 회원가입 실행 */
const enterKey = (e, funcitonElement) => {
  if (e.keyCode == 13) {
    funcitonElement();
  }
};

/* 폴더 이동 함수 */
const redirectFolder = () => {
  const link = "./folder.html";
  location.href = link;
};

export {
  email,
  emailError,
  password,
  passwordRepeat,
  passwordError,
  eyeIcon,
  repeatEyeIcon,
  setInvalidStyle,
  setValidStyle,
  errorMessage,
  handleEmailValidation,
  togglePasswordVisibility,
  enterKey,
  redirectFolder,
};
