import { EMAIL_REGEX, TEST_EMAIL } from "/js/account/constant.js";
import {
  emailTest,
  iconToggle,
  onInput,
  setInputError,
} from "../js/account/util.js";

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");
const passwordConfirm = document.querySelector("#passwordConfirm");
const passwordConfirmError = document.querySelector(".passwordConfirmError");
const pwdToggleBtn = document.querySelector(".pwdToggleBtn");
const pwdConfirmToggleBtn = document.querySelector(".pwdConfirmToggleBtn");

const form = document.querySelector("#form");

if (localStorage.getItem("accessToken")) {
  location.href = "/folder";
}

onInput(email, emailError);
onInput(password, passwordError);
onInput(passwordConfirm, passwordConfirmError);

pwdToggleBtn.addEventListener("click", (e) => {
  iconToggle(password, e.target);
});

pwdConfirmToggleBtn.addEventListener("click", (e) => {
  iconToggle(passwordConfirm, e.target);
});

function onFocusOutEmail(e) {
  if (emailTest(e.target, emailError)) {
    return;
  }
}

function onFocusOutPassword(e) {
  const password = e.target.value;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (password.length < 8 || !passwordRegex.test(password)) {
    setInputError(
      e.target,
      passwordError,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return;
  }
}

function onSubmit(e) {
  e.preventDefault();

  if (!email.value?.trim()) {
    setInputError(email, emailError, "이메일을 입력해주세요");
  }
  if (!password.value?.trim()) {
    setInputError(password, passwordError, "비밀번호를 입력해주세요");
  }
  if (!passwordConfirm.value?.trim()) {
    setInputError(
      passwordConfirm,
      passwordConfirmError,
      "비밀번호를 다시한번 입력해주세요."
    );
  }

  if (
    email.classList.contains("inputError") ||
    password.classList.contains("inputError")
  ) {
    return;
  }

  if (passwordConfirm.value !== password.value) {
    setInputError(
      passwordConfirm,
      passwordConfirmError,
      "비밀번호가 일치하지 않아요."
    );
    return;
  }

  fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email: email.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        setInputError(email, emailError, data.error.message);
        return;
      }
      if (data.data.isUsableNickname) {
        console.log(data);
        // location.href = "/folder";
      }
    })
    .catch((error) => console.log(error));
}

email.addEventListener("focusout", onFocusOutEmail);
password.addEventListener("focusout", onFocusOutPassword);
form.addEventListener("submit", onSubmit);
