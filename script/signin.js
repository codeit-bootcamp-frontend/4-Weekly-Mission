// input
const emailInput = document.querySelector(".sign-email");
const passwordInput = document.querySelector(".sign-password input");

// error Message
const emailErrorMessage = document.querySelector(".sign-email-error");
const passwordErrorMessage = document.querySelector(".sign-password-error");

const loginBtn = document.querySelector(".sign-btn");

// focusout events
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

passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value.trim() === "") {
    passwordErrorMessage.textContent = "비밀번호를 입력해 주세요";
  } else {
    passwordErrorMessage.textContent = "";
  }
});

