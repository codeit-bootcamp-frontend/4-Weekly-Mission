import { EMAIL_REGEX, TEST_EMAIL } from "/js/account/constant.js";
import { eyeOpen, eyeClose } from "/js/account/passwordIconToggle.js";
import { email, emailError } from "/js/account/email.js";
import { password, passwordError } from "/js/account/password.js";

const passwordConfirm = document.querySelector("#passwordConfirm");
const passwordConfirmError = document.querySelector(".passwordConfirmError");

const form = document.querySelector("#form");

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
  if (e.target.value === TEST_EMAIL) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    e.target.classList.add("inputError");
    return;
  }

  emailError.textContent = "";
  e.target.classList.remove("inputError");
}

function passwordOnFocusOut(e) {
  const password = e.target.value;
  if (
    password.length < 8 ||
    password.split("").every((el) => isNaN(Number(el))) ||
    password.split("").every((el) => !isNaN(Number(el)))
  ) {
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    e.target.classList.add("inputError");
    return;
  }
  passwordError.textContent = "";
  e.target.classList.remove("inputError");
}

function passwordConfirmOnInput(e) {
  passwordConfirmError.textContent = "";
  e.target.classList.remove("inputError");
}

function onSubmit(e) {
  e.preventDefault();
  if (
    emailError.classList.contains("inputError") ||
    password.classList.contains("inputError")
  ) {
    return;
  }

  if (passwordConfirm.value !== password.value) {
    passwordConfirmError.textContent = "비밀번호가 일치하지 않아요.";
    passwordConfirm.classList.add("inputError");
    return;
  }

  location.href = "/folder";
}

email.addEventListener("focusout", emailOnFocusOut);
password.addEventListener("focusout", passwordOnFocusOut);
passwordConfirm.addEventListener("input", passwordConfirmOnInput);
form.addEventListener("submit", onSubmit);
