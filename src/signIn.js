import { TEST_AUTH } from "./constants/VALIDATION.js";
import {
  emailError,
  emailInput,
  pwError,
  pwInput,
  form,
  pwToggle,
  validateEmail,
  validatePw,
  eyeToggle,
} from "./auth.js";

const handleFail = () => {
  showError(emailError, emailInput, ERROR_MESSAGES.email_check);
  showError(pwError, pwInput, ERROR_MESSAGES.password_check);
};

const handleSignIn = (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();

  if (emailValue === TEST_AUTH.email && pwValue === TEST_AUTH.pw) {
    alert("로그인 성공!");
    window.location.href = "folder.html";
  } else {
    alert("로그인 실패!");
    handleFail();
  }
};

emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePw);
form.addEventListener("submit", (e) => handleSignIn(e));
pwToggle.addEventListener("click", () => eyeToggle(pwInput, pwToggle));
