import { emailInput, passwordInput, emailErrorMessage, passwordErrorMessage, loginForm, eyeOffButton, eyeOnButton } from "./elements.js";
import { isValidEmail, showErrorMessage, hideErrorMessage, togglePasswordVisibility } from "./sign.js";

// 이메일 입력
emailInput.addEventListener("focusout", () => {
  const email = emailInput.value.trim();
  if (email === "") {
    showErrorMessage(emailInput, emailErrorMessage, "이메일을 입력해 주세요.");
    return;
  }
  if (!isValidEmail(email)) {
    showErrorMessage(emailInput, emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
    return;
  }
  hideErrorMessage(emailInput, emailErrorMessage);
});

// 비밀번호 입력
passwordInput.addEventListener("focusout", () => {
  const password = passwordInput.value.trim();
  if (password === "") {
    showErrorMessage(passwordInput, passwordErrorMessage, "비밀번호를 입력해 주세요.");
    return;
  }
  hideErrorMessage(passwordInput, passwordErrorMessage);
});

// 로그인 폼 제출
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const TEST_EMAIL = "test@codeit.com";
  const TEST_PASSWORD = "codeit101";

  if (email === TEST_EMAIL && password === TEST_PASSWORD) {
    window.location.href = "/folder";
    return;
  }

  if (email !== TEST_EMAIL) {
    showErrorMessage(emailInput, emailErrorMessage, "이메일을 확인해 주세요.");
  }

  if (password !== TEST_PASSWORD) {
    showErrorMessage(passwordInput, passwordErrorMessage, "비밀번호를 확인해 주세요.");
  }
});

// 눈 아이콘 클릭시 비밀번호 보이거나 숨기기
eyeOffButton.addEventListener("click", () => togglePasswordVisibility(passwordInput, eyeOffButton, eyeOnButton));
eyeOnButton.addEventListener("click", () => togglePasswordVisibility(passwordInput, eyeOffButton, eyeOnButton));
