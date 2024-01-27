import { EMAIL_REGEX, TEST_EMAIL, TEST_PW } from "/js/account/constant.js";
import { eyeOpen, eyeClose } from "/js/account/passwordIconToggle.js";
import { email, emailError } from "/js/account/email.js";
import { password, passwordError } from "/js/account/password.js";

const form = document.querySelector("#form");

function onSubmit(event) {
  event.preventDefault();

  if (email.value === TEST_EMAIL && password.value === TEST_PW) {
    location.href = "/folder";
  } else {
    emailError.textContent = "이메일을 확인해 주세요.";
    passwordError.textContent = "비밀번호를 확인해 주세요.";
  }
}

function emailOnFocusOut(e) {
  if (!e.target.value?.trim()) {
    emailError.textContent = "이메일을 입력해 주세요.";
    e.target.classList.add("inputError");
    return;
  }
  if (!EMAIL_REGEX.test(e.target.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    e.target.classList.add("inputError");
    return;
  }

  emailError.textContent = "";
  e.target.classList.remove("inputError");
}

function passwordOnFocusOut(e) {
  if (!e.target.value) {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    e.target.classList.add("inputError");
    return;
  }
  passwordError.textContent = "";
  e.target.classList.remove("inputError");
}

email.addEventListener("focusout", emailOnFocusOut);
password.addEventListener("focusout", passwordOnFocusOut);
form.addEventListener("submit", onSubmit);
