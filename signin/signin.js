const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");

const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const form = document.querySelector("#form");

const eyeOpen = document.querySelector(".eyeOpen");
const eyeClose = document.querySelector(".eyeClose");

const TEST_EMAIL = "test@codeit.com";
const TEST_PW = "codeit101";

function onSubmit(event) {
  event.preventDefault();

  if (email.value === TEST_EMAIL && password.value === TEST_PW) {
    location.href = "/folder";
  } else {
    emailError.textContent = "이메일을 확인해 주세요.";
    passwordError.textContent = "비밀번호를 확인해 주세요.";
  }
}

email.addEventListener("focusout", (e) => {
  console.log("focus out email");
  if (!e.target.value || !e.target.value.trim()) {
    emailError.textContent = "이메일을 입력해 주세요.";
    e.target.classList.add("inputError");
  } else {
    emailError.textContent = "";
    e.target.classList.remove("inputError");
  }

  if (!emailRegex.test(e.target.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    e.target.classList.add("inputError");
  } else {
    e.target.classList.remove("inputError");
  }
});

password.addEventListener("focusout", (e) => {
  console.log("focus out password");
  if (!e.target.value) {
    passwordError.textContent = "비밀번호를 입력해 주세요.";
    e.target.classList.add("inputError");
  } else {
    passwordError.textContent = "";
    e.target.classList.remove("inputError");
  }
});

eyeOpen.addEventListener("click", (e) => {
  e.target.classList.add("display_none");
  eyeClose.classList.remove("display_none");
  password.type = "password";
});

eyeClose.addEventListener("click", (e) => {
  e.target.classList.add("display_none");
  eyeOpen.classList.remove("display_none");
  password.type = "text";
});

form.addEventListener("submit", onSubmit);
