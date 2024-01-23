import { isValidEmail } from "./utils/validator.js";
import { EMAIL, PASSWORD } from "./auth.js";

const form = document.querySelector(".fm-input-wrap");
const btn = document.querySelector(".btn-submit");

const emailMsgBox = document.querySelector(".error-email");
const passwordMsgBox = document.querySelector(".error-pw");
const emailInput = document.querySelector(".input-email");
const passwordInput = document.querySelector(".input-pw");

const showErrorMsg = (e) => {
  const { value, name } = e.target;
  let errorMsg = "";
  if (name === "email") {
    if (!value) errorMsg = "이메일을 입력해 주세요.";
    else if (!isValidEmail(value)) errorMsg = "올바른 이메일 주소가 아닙니다.";
    emailMsgBox.innerHTML = errorMsg;
  } else if (name === "password") {
    errorMsg = value ? "" : "비밀번호를 확인해 주세요.";
    passwordMsgBox.innerHTML = errorMsg;
  }
  changeInputColor();
};

const moveFolderPage = (e) => {
  const isEmailValid = emailInput.value === EMAIL;
  const isPasswordValid = passwordInput.value === PASSWORD;

  if (isEmailValid && isPasswordValid) {
    location.href = "folder.html";
  }

  emailMsgBox.innerHTML = !isEmailValid ? "이메일을 확인해 주세요." : "";
  passwordMsgBox.innerHTML = !isPasswordValid ? "비밀번호를 확인해 주세요." : "";
  changeInputColor();
};

const enter = (e) => {
  if (e.key === "Enter") {
    moveFolderPage();
  }
};

const showPassword = (e) => {
  const password = document.querySelector(".input-pw");
  if (e.target.classList.contains("img-eye")) {
    e.target.classList.toggle("active");
    password.type = password.type === "password" ? "text" : "password";
  }
};

form.addEventListener("focusout", showErrorMsg);
btn.addEventListener("click", moveFolderPage);
form.addEventListener("keydown", enter);
form.addEventListener("click", showPassword);

function changeInputColor() {
  emailMsgBox.innerHTML ? emailInput.classList.add("error") : emailInput.classList.remove("error");
  passwordMsgBox.innerHTML ? passwordInput.classList.add("error") : passwordInput.classList.remove("error");
}
