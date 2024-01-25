const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");
const passwordConfirm = document.querySelector("#passwordConfirm");
const passwordConfirmError = document.querySelector(".passwordConfirmError");

const eyeOpen = document.querySelector(".eyeOpen");
const eyeClose = document.querySelector(".eyeClose");

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

function emailOnInput(e) {
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

function passwordOnInput(e) {
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

function eyeOpenOnClick(e) {
  e.target.classList.add("display_none");
  eyeClose.classList.remove("display_none");
  password.type = "password";
}

function eyeCloseOnClick(e) {
  e.target.classList.add("display_none");
  eyeOpen.classList.remove("display_none");
  password.type = "text";
}

email.addEventListener("focusout", emailOnFocusOut);
email.addEventListener("input", emailOnInput);
password.addEventListener("focusout", passwordOnFocusOut);
password.addEventListener("input", passwordOnInput);
passwordConfirm.addEventListener("input", passwordConfirmOnInput);
eyeOpen.addEventListener("click", eyeOpenOnClick);
eyeClose.addEventListener("click", eyeCloseOnClick);
form.addEventListener("submit", onSubmit);
