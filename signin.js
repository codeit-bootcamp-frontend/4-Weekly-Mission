import { emailValid } from "./utils/Validator.js";
import { EMAIL, PASSWORD } from "./auth.js";

const form = document.querySelector(".fm-input-wrap");
const btn = document.querySelector(".btn-submit");

const emailMsgBox = document.querySelector(".error-email");
const passwordMsgBox = document.querySelector(".error-pw");
const emailInput = document.querySelector(".input-email");
const passwordInput = document.querySelector(".input-pw");

const showErrorMsg = (e) => {
  const message = e.target.value;
  if (e.target.name === "email") {
    message
      ? emailValid(e.target.value)
        ? (emailMsgBox.innerHTML = "")
        : (emailMsgBox.innerHTML = "올바른 이메일 주소가 아닙니다.")
      : (emailMsgBox.innerHTML = "이메일을 입력해 주세요.");
  } else if (e.target.name === "password") {
    message ? (passwordMsgBox.innerHTML = "") : (passwordMsgBox.innerHTML = "비밀번호를 확인해 주세요.");
  }
  changeInputColor();
};

const moveFolderPage = (e) => {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === EMAIL && password === PASSWORD) {
    location.href = "folder.html";
  }

  emailMsgBox.innerHTML = email !== "test@codeit.com" ? "이메일을 확인해 주세요." : "";
  passwordMsgBox.innerHTML = password !== "codeit101" ? "비밀번호를 확인해 주세요." : "";
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
