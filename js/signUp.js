import {
  email,
  emailError,
  setInvalidStyle,
  setValidStyle,
  handleEmailValidation,
  passwordError,
} from "./modules/AuthUtils.js";

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

email.addEventListener("blur", handleEmailUsedValidation);
