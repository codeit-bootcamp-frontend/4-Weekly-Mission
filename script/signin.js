import {
  signForm,
  emailInput,
  passwordInput,
  emailErrorMessage,
  passwordErrorMessage,
  eyeIcon,
  loginBtn,
  handleEyeIconClick,
} from "./common.js";

// emailInput focusout events
emailInput.addEventListener("focusout", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value === "") {
    emailErrorMessage.textContent = "이메일을 입력해 주세요";
  } else if (!emailRegex.test(emailInput.value)) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailErrorMessage.textContent = "";
  }
});

// passwordInput focusout events
passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value.trim() === "") {
    passwordErrorMessage.textContent = "비밀번호를 입력해 주세요";
  } else {
    passwordErrorMessage.textContent = "";
  }
});

//loginBtn click event
loginBtn.addEventListener("click", (event) => {
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    signForm.submit();
  } else {
    if (emailInput.value !== "test@codeit.com") {
      emailErrorMessage.textContent = "이메일을 확인해 주세요";
    }
    if (passwordInput.value !== "codeit101") {
      passwordErrorMessage.textContent = "비밀번호를 확인해 주세요";
    }
  }
  event.preventDefault();
});

//eye-icon click event
eyeIcon.addEventListener("click", () => {
  handleEyeIconClick(passwordInput, eyeIcon);
});
