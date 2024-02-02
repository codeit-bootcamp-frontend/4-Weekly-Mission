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
  isValidFormat,
} from "./auth.js";
const isEmailDuplicate = emailInput.value.trim() === TEST_AUTH.email;
const isEmailValid =
  emailInput.value.trim() !== "" ||
  isValidFormat("email", emailInput.value.trim());
const isPwValid =
  pwInput.value.trim() !== "" || isValidFormat("pw", pwInput.value.trim());
const isPwConfirmValid =
  pwConfirmInput.value.trim() !== "" ||
  pwInput.value.trim() === pwConfirmInput.value.trim();

const validateEmailDuplication = () => {
  console.log(emailInput.value.trim());
  console.log(TEST_AUTH.email);
  console.log("isEmailDuplicate", isEmailDuplicate);
  if (isEmailDuplicate) {
    showError(emailError, emailInput, ERROR_MESSAGES.email_duplicate);
  }
};

const handleSignUp = (e) => {
  e.preventDefault();

  const isAllValid =
    !isEmailDuplicate && !isEmailValid && !isPwValid && isPwConfirmValid;

  if (isAllValid) {
    alert("회원가입 성공!");
    window.location.href = "folder.html";
  }
};

const handleEmailInput = () => {
  validateEmail();
  validateEmailDuplication();
};
emailInput.addEventListener("focusout", handleEmailInput);
pwInput.addEventListener("focusout", validatePw);
pwConfirmInput.addEventListener("focusout", validatePwConfirm);
form.addEventListener("submit", handleSignUp);
pwToggle.addEventListener("click", () => eyeToggle(pwInput, pwToggle));
pwConfirmToggle.addEventListener("click", () =>
  eyeToggle(pwConfirmInput, pwConfirmToggle)
);
