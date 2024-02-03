import { ERROR_MESSAGES } from "./constants/VALIDATION.js";
import {
  emailError,
  emailInput,
  pwInput,
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
  checkLoginStatus,
} from "./auth.js";
import { emailCheckInquire, signUpInquire } from "./services/authRequest.js";

checkLoginStatus();

const email = emailInput.value.trim();
const password = pwInput.value.trim();
const pwConfirm = pwConfirmInput.value.trim();

const validateEmailDuplication = async () => {
  const userData = {
    email: emailInput.value.trim(),
  };
  try {
    const result = await emailCheckInquire(userData);
    if (result.status === 409) {
      throw new Error("이메일 중복");
    }
    return result.ok;
  } catch (e) {
    console.error(e);
    showError(emailError, emailInput, ERROR_MESSAGES.email_duplicate);
  }
};

const isEmailDuplicate = await validateEmailDuplication();
const isEmailValid = email !== "" && isValidFormat("email", email);
const isPwValid = password !== "" && isValidFormat("pw", password);
const isPwConfirmValid = pwConfirm !== "" && password === pwConfirm;

const handleSignUp = async (e) => {
  e.preventDefault();
  const userData = {
    email: emailInput.value.trim(),
    password: pwInput.value.trim(),
  };
  const isAllValid =
    !isEmailDuplicate && isEmailValid && isPwValid && isPwConfirmValid;
  // console.log("!isEmailDuplicate", !isEmailDuplicate);
  // console.log(isValidFormat("email", emailInput.value.trim()));
  // console.log(emailInput.value.trim() !== "");
  // console.log("isEmailValid", isEmailValid);
  // console.log("isPwValid", isPwValid);
  // console.log("isPwConfirmValid", isPwConfirmValid);

  // if (isAllValid) {
  try {
    const result = await signUpInquire(userData);
    if (result.ok) {
      alert("회원가입 성공!");
      window.location.href = "folder.html";
    }
  } catch (e) {
    console.error(e);
  }
};
// };

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
