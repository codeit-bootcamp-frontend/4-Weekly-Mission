import { EMAIL_REGEX, TEST_EMAIL, TEST_PW } from "/js/account/constant.js";
import {
  emailTest,
  onInput,
  iconToggle,
  setInputError,
} from "../js/account/util.js";

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");
const pwdToggleBtn = document.querySelector(".pwdToggleBtn");

const form = document.querySelector("#form");

onInput(email, emailError);
onInput(password, passwordError);

pwdToggleBtn.addEventListener("click", (e) => {
  iconToggle(password, e.target);
});

function onSubmit(event) {
  event.preventDefault();

  if (email.value === TEST_EMAIL && password.value === TEST_PW) {
    location.href = "/folder";
  } else {
    emailError.textContent = "이메일을 확인해 주세요.";
    passwordError.textContent = "비밀번호를 확인해 주세요.";
  }
}

function onFocusOutEmail(e) {
  emailTest(e.target, emailError);
}

function onFocusOutPassword(e) {
  if (!e.target.value) {
    setInputError(e.target, passwordError, "비밀번호를 입력해 주세요.");
    return;
  }
}

email.addEventListener("focusout", onFocusOutEmail);
password.addEventListener("focusout", onFocusOutPassword);
form.addEventListener("submit", onSubmit);
