import { isValidEmail } from "./common.js";

const emailInput = document.querySelector(".email-input");
const emailError = document.createElement("div");

const passwordInput = document.querySelector(".password-input");
const passwordError = document.createElement("div");

emailError.classList.add("error-message");
passwordError.classList.add("error-message");
const eyeBtn = document.querySelector(".eye-button");
const loginBtn = document.querySelector(".cta");

const handleClickBtn = (event) => {
  event.preventDefault();
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    location.href = "./folder.html";
  } else if (
    emailInput.value !== "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    displayEmailError();
  } else if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value !== "codeit101"
  ) {
    displayPwError();
  } else if (
    emailInput.value !== "test@codeit.com" &&
    passwordInput.value !== "codeit101"
  ) {
    displayAllErrors();
  }
};
const displayEmailError = () => {
  emailInput.after(emailError);
  emailError.textContent = "이메일을 확인해 주세요.";
  emailInput.style.border = "1px solid #ff5b45";
};

const displayPwError = () => {
  passwordInput.after(passwordError);
  passwordError.textContent = "비밀번호를 확인해 주세요.";
  passwordInput.style.border = "1px solid #ff5b45";
};
const displayAllErrors = () => {
  displayEmailError();
  displayPwError();
};
const handleFocusoutEmail = (event) => {
  if (event.target.value.length === 0) {
    emailInput.after(emailError);
    emailError.textContent = "이메일을 입력해 주세요.";
  } else if (
    event.target.value.length !== 0 &&
    isValidEmail(emailInput.value)
  ) {
    emailError.remove();
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.after(emailError);
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  }
};

const handleFocusoutPw = (event) => {
  if (event.target.value.length === 0) {
    passwordInput.after(passwordError);
    passwordError.textContent = "비밀번호를 입력해 주세요.";
  } else {
    passwordError.remove();
  }
};
const handleClickEyes = () => {
  passwordInput.setAttribute("type", "text");
  eyeBtn.style.display = "none";
};

emailInput.addEventListener("focusout", handleFocusoutEmail);
passwordInput.addEventListener("focusout", handleFocusoutPw);

eyeBtn.addEventListener("click", handleClickEyes);
loginBtn.addEventListener("click", handleClickBtn);
