import { TEST_AUTH, ERROR_MESSAGES } from "./constants/VALIDATION.js";
import {
  emailError,
  emailInput,
  pwError,
  pwInput,
  pwConfirmError,
  pwConfirmInput,
  form,
  pwToggle,
  pwConfirmToggle,
  validateEmail,
  validatePw,
  validatePwConfirm,
  eyeToggle,
  showError,
} from "./auth.js";

const isDuplicateEmail = () => {
  if (emailInput.value.trim() === TEST_AUTH.email) {
    showError(emailError, emailInput, ERROR_MESSAGES.email_duplicate);
    return true;
  } else return false;
};
const handleFail = (error) => {
  if (error === "email")
    showError(emailError, emailInput, ERROR_MESSAGES.email_check);
  else if (error === "pw")
    showError(pwError, pwInput, ERROR_MESSAGES.password_check);
  else
    showError(pwConfirmError, pwConfirmInput, ERROR_MESSAGES.pwConfirm_check);
};

const handleSignUp = (e) => {
  e.preventDefault();
  if (
    !isDuplicateEmail() &&
    validateEmail() &&
    validatePw() &&
    validatePwConfirm()
  ) {
    alert("회원가입 성공!");
    window.location.href = "folder.html";
  } else {
    // 이메일 에러 시 메세지
    if (isDuplicateEmail) isDuplicateEmail;
    else if (validateEmail === false) handleFail("email");
    // 비밀번호 에러 시 메세지
    if (!validatePw) handleFail("pw");
    // 비밀번호 확인 에러 시 메세지
    if (!validatePwConfirm) handleFail("pwConfirm");
  }
};

emailInput.addEventListener("focusout", validateEmail);
emailInput.addEventListener("focusout", isDuplicateEmail);
pwInput.addEventListener("focusout", validatePw);
pwConfirmInput.addEventListener("focusout", validatePwConfirm);
form.addEventListener("submit", (e) => handleSignUp(e));
pwToggle.addEventListener("click", () => eyeToggle(pwInput, pwToggle));
pwConfirmToggle.addEventListener("click", () =>
  eyeToggle(pwConfirmInput, pwConfirmToggle)
);
