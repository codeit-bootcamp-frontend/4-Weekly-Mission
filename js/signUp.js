import {
  email,
  emailError,
  password,
  passwordError,
  setInvalidStyle,
  setValidStyle,
  handleEmailValidation,
} from "./modules/AuthUtils.js";

const passwordRepeat = document.querySelector("#password-repeat");
const passwordRepeatError = document.querySelector(".passwordRepeat-error");
const signUpButton = document.querySelector(".signup-button");

/* 회원가입 이메일 유효성 검사 */
const handleEmailUsedValidation = () => {
  const EMAIL_USED_MESSAGE = "이미 사용 중인 이메일입니다.";
  if (email.value === "test@codeit.com") {
    setInvalidStyle(email);
    emailError.innerHTML = EMAIL_USED_MESSAGE;
  } else {
    handleEmailValidation();
  }
};

/* 회원가입 비밀번호 유효성 검사 */
const handlePasswordFormatValidation = () => {
  const PASSWORD_FORMAT_MESSAGE =
    " 비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  if (!passwordRegex.test(password.value)) {
    setInvalidStyle(password);
    passwordError.innerHTML = PASSWORD_FORMAT_MESSAGE;
  } else {
    setValidStyle(password);
    passwordError.innerHTML = "";
  }
};

/* 비밀번호 일치 유효성 검사 */
const handlePasswordMatchValidation = () => {
  const PASSWORD_MATCH_MESSAGE = "비밀번호가 일치하지 않아요.";

  if (passwordRepeat.value !== password.value) {
    setInvalidStyle(passwordRepeat);
    passwordRepeatError.innerHTML = PASSWORD_MATCH_MESSAGE;
  } else {
    setValidStyle(passwordRepeat);
    passwordRepeatError.innerHTML = "";
  }
};

const redirectToFolderPage = () => {
  const link = "./folder.html";
  const EMAIL_CHECK_MESSAGE = "이메일을 입력해 주세요.";
  const PASSWORD_ERROR_MESSAGE = "비밀번호를 입력해주세요.";

  if (email.value === "test@codeit.com") {
    handleEmailUsedValidation();
  } else if (passwordRepeat.value !== password.value) {
    handlePasswordMatchValidation();
  } else if (
    email.value === "" ||
    password.value === "" ||
    passwordRepeat.word === ""
  ) {
    setInvalidStyle(email);
    setInvalidStyle(password);
    setInvalidStyle(passwordRepeat);
    emailError.innerHTML = EMAIL_CHECK_MESSAGE;
    passwordError.innerHTML = PASSWORD_ERROR_MESSAGE;
    passwordRepeatError.innerHTML = PASSWORD_ERROR_MESSAGE;
  } else {
    location.href = link;
  }
};

email.addEventListener("blur", handleEmailUsedValidation);
password.addEventListener("blur", handlePasswordFormatValidation);
passwordRepeat.addEventListener("blur", handlePasswordMatchValidation);
signUpButton.addEventListener("click", redirectToFolderPage);
