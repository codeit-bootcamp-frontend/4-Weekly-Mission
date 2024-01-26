import {
  email,
  emailError,
  setInvalidStyle,
  setValidStyle,
  handleEmailValidation,
  password,
  passwordError,
} from "./modules/AuthUtils.js";

const passwordRepeat = document.querySelector("#password-repeat");
const passwordRepeatError = document.querySelector(".passwordRepeat-error");

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
    passwordRepeatError.innerHTML = PASSWORD_MATCH_MESSAGE;
  } else {
    passwordRepeatError.innerHTML = "";
  }
};

email.addEventListener("blur", handleEmailUsedValidation);
password.addEventListener("blur", handlePasswordFormatValidation);
passwordRepeat.addEventListener("blur", handlePasswordMatchValidation);
