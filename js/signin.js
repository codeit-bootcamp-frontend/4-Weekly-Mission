import { getEmailInput, getPasswordInput, getLoginForm, emailValidate } from "./variable.js";
import { showError, hideError, pathTo } from "./func.js";

const emailInput = getEmailInput("signin");
const passwordInput = getPasswordInput("signin");
const loginForm = getLoginForm("signin");

loginForm.addEventListener("submit", function (event) {
  //preventDefault를 쓰고 form 타입을 사용해야 reload를 막을 수 있었네요...
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue == "test@codeit.com" && passwordValue == "codeit101") {
    pathTo("folder");
  } else {
    showError(emailInput, "이메일을 확인해 주세요.");
    showError(passwordInput, "비밀번호를 확인해 주세요.");
  }
});

emailInput.addEventListener("focusout", function () {
  isValidateEmail();
});

passwordInput.addEventListener("focusout", function () {
  validatePassword();
});

function isValidateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    showError(emailInput, "이메일을 입력해주세요.");
  } else if (!emailValidate.test(emailValue)) {
    showError(emailInput, "올바른 이메일 주소가 아닙니다.");
  } else {
    hideError(emailInput);
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === "") {
    showError(passwordInput, "비밀번호를 입력해주세요.");
  } else {
    hideError(passwordInput);
  }
}
