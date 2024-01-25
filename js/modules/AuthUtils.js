const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");

const setInvalidStyle = (element) => {
  element.style.border = "1px solid #ff5b56";
};

export const setValidStyle = (element) => {
  element.style.border = "";
};

/* 이메일 유효성 검사 */
const handleEmailValidation = () => {
  const EMAIL_CHECK_MESSAGE = "이메일을 입력해 주세요.";
  const EMAIL_ERROR_MESSAGE = "올바른 이메일 주소가 아닙니다.";
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (email.value === "") {
    setInvalidStyle(email);
    emailError.innerHTML = EMAIL_CHECK_MESSAGE;
  } else if (!emailRegex.test(email.value)) {
    setInvalidStyle(email);
    emailError.innerHTML = EMAIL_ERROR_MESSAGE;
  } else {
    setValidStyle(email);
    emailError.innerHTML = "";
  }
};

export { email, emailError, handleEmailValidation };
