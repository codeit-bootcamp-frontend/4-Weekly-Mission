import { EMAIL_REGEX, TEST_EMAIL, TEST_PW } from "/js/account/constant.js";
import { eyeOpen, eyeClose } from "/js/account/passwordIconToggle.js";
import { emailTest } from "../js/account/util.js";
import { onInput } from "../js/account/util.js";

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");

const form = document.querySelector("#form");

onInput(email, emailError);
onInput(password, passwordError);

function onSubmit(event) {
  event.preventDefault();

  if (email.value === TEST_EMAIL && password.value === TEST_PW) {
    location.href = "/folder";
  } else {
    emailError.textContent = "이메일을 확인해 주세요.";
    passwordError.textContent = "비밀번호를 확인해 주세요.";
  }
}

function OnFocusOutEmail(e) {
  emailTest(e.target, emailError);
}

function OnFocusOutPassword(e) {
  if (!e.target.value) {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    e.target.classList.add("inputError");
    return;
  }
  passwordError.textContent = "";
  e.target.classList.remove("inputError");
}

email.addEventListener("focusout", OnFocusOutEmail);
password.addEventListener("focusout", OnFocusOutPassword);
form.addEventListener("submit", onSubmit);
