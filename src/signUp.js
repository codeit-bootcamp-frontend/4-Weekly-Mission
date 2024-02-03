import { TEST_AUTH, ERROR_MESSAGES } from "./constants/VALIDATION.js";
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
} from "./auth.js";
import { emailCheckInquire } from "./services/auth.js";
import { getTokens } from "./token.js";
const tokens = getTokens();
if (tokens.accessToken) window.location.href = "folder.html";
const validateEmailDuplication = async () => {
  const email = emailInput.value.trim();
  const userData = {
    email: email,
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
const isEmailValid =
  emailInput.value.trim() !== "" &&
  isValidFormat("email", emailInput.value.trim());
const isPwValid =
  pwInput.value.trim() !== "" && isValidFormat("pw", pwInput.value.trim());
const isPwConfirmValid =
  pwConfirmInput.value.trim() !== "" &&
  pwInput.value.trim() === pwConfirmInput.value.trim();

const handleSignUp = (e) => {
  e.preventDefault();
  const isAllValid =
    !isEmailDuplicate && isEmailValid && isPwValid && isPwConfirmValid;
  console.log("!isEmailDuplicate", !isEmailDuplicate);
  console.log(isValidFormat("email", emailInput.value.trim()));
  console.log(emailInput.value.trim() !== "");
  console.log("isEmailValid", isEmailValid);
  console.log("isPwValid", isPwValid);
  console.log("isPwConfirmValid", isPwConfirmValid);

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
