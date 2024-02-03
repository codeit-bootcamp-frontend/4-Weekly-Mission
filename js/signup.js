import { isValidEmail, isValidPassword, showErrorMessage, hideErrorMessage, togglePasswordVisibility } from "./sign.js";

const querySelector = (selector) => document.querySelector(selector);

const emailInput = querySelector("#email-input");
const passwordInput = querySelector("#password-input");
const emailErrorMessage = querySelector("#email-error-message");
const passwordErrorMessage = querySelector("#password-error-message");
const passwordConfirmInput = querySelector("#password-confirm-input");
const passwordConfirmErrorMessage = querySelector("#password-confirm-error-message");
const signupForm = querySelector("#signup-form");

const eyeOffButton = querySelector("#eye-off");
const eyeOnButton = querySelector("#eye-on");
const eyeOffConfirmButton = querySelector("#eye-off-confirm");
const eyeOnConfirmButton = querySelector("#eye-on-confirm");

// 이메일 입력
emailInput.addEventListener("focusout", () => {
  const email = emailInput.value.trim();
  const TEST_EMAIL = "test@codeit.com";

  if (email === "") {
    showErrorMessage(emailInput, emailErrorMessage, "이메일을 입력해 주세요.");
    return;
  }
  if (!isValidEmail(email)) {
    showErrorMessage(emailInput, emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
    return;
  }
  if (email === TEST_EMAIL) {
    showErrorMessage(emailInput, emailErrorMessage, "이미 사용 중인 이메일입니다.");
    return;
  }
  hideErrorMessage(emailInput, emailErrorMessage);
});

// 비밀번호 입력
passwordInput.addEventListener("focusout", () => {
  const password = passwordInput.value.trim();
  if (!isValidPassword(password)) {
    showErrorMessage(passwordInput, passwordErrorMessage, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    return;
  }
  hideErrorMessage(passwordInput, passwordErrorMessage);
});

// 비밀번호 확인
passwordConfirmInput.addEventListener("focusout", () => {
  const password = passwordInput.value.trim();
  const passwordConfirm = passwordConfirmInput.value.trim();
  if (password !== passwordConfirm) {
    showErrorMessage(passwordConfirmInput, passwordConfirmErrorMessage, "비밀번호가 일치하지 않아요.");
    return;
  }
  hideErrorMessage(passwordConfirmInput, passwordConfirmErrorMessage);
});

// 회원가입 폼 제출
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const passwordConfirm = passwordConfirmInput.value.trim();

  let isValid = true;

  if (!isValidEmail(email)) {
    showErrorMessage(emailInput, emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
    isValid = false;
  } else {
    hideErrorMessage(emailInput, emailErrorMessage);
  }

  if (!isValidPassword(password)) {
    showErrorMessage(passwordInput, passwordErrorMessage, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    isValid = false;
  } else {
    hideErrorMessage(passwordInput, passwordErrorMessage);
  }

  if (password !== passwordConfirm) {
    showErrorMessage(passwordConfirmInput, passwordConfirmErrorMessage, "비밀번호가 일치하지 않아요.");
    isValid = false;
  } else {
    hideErrorMessage(passwordConfirmInput, passwordConfirmErrorMessage);
  }

  if (isValid) {
    window.location.href = "/folder";
  }
});

// 눈 아이콘 클릭시 비밀번호 보이거나 숨기기
eyeOffButton.addEventListener("click", () => togglePasswordVisibility(passwordInput, eyeOffButton, eyeOnButton));
eyeOnButton.addEventListener("click", () => togglePasswordVisibility(passwordInput, eyeOffButton, eyeOnButton));
eyeOffConfirmButton.addEventListener("click", () => togglePasswordVisibility(passwordConfirmInput, eyeOffConfirmButton, eyeOnConfirmButton));
eyeOnConfirmButton.addEventListener("click", () => togglePasswordVisibility(passwordConfirmInput, eyeOffConfirmButton, eyeOnConfirmButton));
