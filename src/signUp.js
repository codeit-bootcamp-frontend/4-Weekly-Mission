import { ERROR_MESSAGES, REGEX } from "./constants/VALIDATION.js";
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
  handleSignInFail,
} from "./auth";
const pwConfirmError = document.querySelector("#pwConfirm-error");
const pwConfirmInput = document.querySelector("#password-confirm");
const pwConfirmToggle = document.querySelector("#pwConfirm-eyeIcon");

const handleSignUp = (e) => {
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();

  if (emailValue === "test@codeit.com" && pwValue === "codeit101") {
    alert("로그인 성공!");
    window.location.href = "folder.html";
  } else {
    alert("로그인 실패!");
    handleSignInFail();
  }
  e.preventDefault();
};

emailInput.addEventListener("focusout", validateEmail);
pwInput.addEventListener("focusout", validatePw);
pwConfirmInput.addEventListener("focusout", validatePwConfirm);
form.addEventListener("submit", (e) => handleSignUp(e));
pwToggle.addEventListener("click", () => eyeToggle(pwInput, pwToggle));

pwConfirmToggle.addEventListener("click", () =>
  eyeToggle(pwConfirmInput, pwConfirmToggle)
);
