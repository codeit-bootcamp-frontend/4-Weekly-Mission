import { printEmailError } from "./common.js";
import { checkAccessToken } from "./common.js";
import { handleSignIn } from "./api.js";
const emailInput = document.querySelector(".email-input");
const emailMessage = document.createElement("div");

const passwordInput = document.querySelector(".password-input");
const passwordError = document.createElement("div");

emailMessage.classList.add("error-message");
passwordError.classList.add("error-message");
const eyeBtn = document.querySelector(".eye-button");
const loginBtn = document.querySelector(".cta");
const signupBtn = document.querySelector(".header-link");
const handleClickBtn = (event) => {
  event.preventDefault();
  handleFocusoutPw();
  displayPwError();
  handleSignIn(emailInput.value, passwordInput.value);
};
const displayEmailError = () => {
  emailInput.after(emailMessage);
  emailMessage.textContent = "이메일을 확인해 주세요.";
  emailInput.style.border = "1px solid #ff5b45";
};

const displayPwError = () => {
  if (passwordInput.value !== "codeit101") {
    passwordInput.after(passwordError);
    passwordError.textContent = "비밀번호를 확인해 주세요.";
    passwordInput.style.border = "1px solid #ff5b45";
  }
};

const handleFocusoutEmail = (event) => {
  printEmailError(emailMessage, emailInput);
};

const handleFocusoutPw = () => {
  if (passwordInput.value.length === 0) {
    passwordInput.after(passwordError);
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    passwordInput.style.border = "1px solid #ff5b45";
  } else {
    passwordError.remove();
    passwordInput.style.border = "1px solid #ccd5e3";
  }
};
const handleClickEyes = () => {
  passwordInput.setAttribute("type", "text");
  eyeBtn.style.display = "none";
};
const handleClickSignupBtn = () => {
  checkAccessToken("./signup.html");
};
emailInput.addEventListener("focusout", handleFocusoutEmail);
passwordInput.addEventListener("focusout", handleFocusoutPw);

eyeBtn.addEventListener("click", handleClickEyes);
loginBtn.addEventListener("click", handleClickBtn);
signupBtn.addEventListener("click", handleClickSignupBtn);
