const loginContainer = document.querySelector(".login-container");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const eyeOff = document.querySelector(".eye-off");
const eyeOn = document.querySelector(".eye-on");
const loginBtn = document.querySelector(".loginBtn");

function makeEmptyEmailError() {
  const errorEmptyEmail = document.createElement("p");
  errorEmptyEmail.textContent = "이메일을 입력해 주세요";
  errorEmptyEmail.classList.add("email-error");
  inputEmail.after(errorEmptyEmail);
  inputEmail.classList.add("input-error");
}

function makeWrongEmailError() {
  const errorEmptyEmail = document.createElement("p");
  errorEmptyEmail.textContent = "올바른 이메일 주소가 아닙니다.";
  errorEmptyEmail.classList.add("email-error");
  inputEmail.after(errorEmptyEmail);
  inputEmail.classList.add("input-error");
}

function makeCheckEmailError() {
  const errorEmptyEmail = document.createElement("p");
  errorEmptyEmail.textContent = "이메일을 확인해 주세요";
  errorEmptyEmail.classList.add("email-error");
  inputEmail.after(errorEmptyEmail);
  inputEmail.classList.add("input-error");
}

function addEmailError() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 유효성 검사 정규식

  if (inputEmail.value === "") {
    removeIfEmailError();
    makeEmptyEmailError();
  }
  if (inputEmail.value !== "" && !emailRegex.test(inputEmail.value)) {
    removeIfEmailError();
    makeWrongEmailError();
  }
}

function removeIfEmailError() {
  const errorEmptyEmail = document.querySelector(".email-error");

  if (errorEmptyEmail) {
    errorEmptyEmail.remove();
    inputEmail.classList.remove("input-error");
  }
}

function makeEmptyPasswordError() {
  const errorEmptyPassword = document.createElement("p");
  errorEmptyPassword.textContent = "비밀번호를 입력해 주세요";
  errorEmptyPassword.classList.add("password-error");
  inputPassword.after(errorEmptyPassword);
  inputPassword.classList.add("input-error");
  eyeOff.classList.add("eye-error");
  loginContainer.classList.add("error");
}

function makeCheckPasswordError() {
  const errorEmptyPassword = document.createElement("p");
  errorEmptyPassword.textContent = "비밀번호를 확인해 주세요";
  errorEmptyPassword.classList.add("password-error");
  inputPassword.after(errorEmptyPassword);
  inputPassword.classList.add("input-error");
  eyeOff.classList.add("eye-error");
  loginContainer.classList.add("error");
}

function addPasswordError() {
  if (inputPassword.value === "") {
    removeIfPasswordError();
    makeEmptyPasswordError();
  }
}

function removeIfPasswordError() {
  const errorEmptyPassword = document.querySelector(".password-error");

  if (errorEmptyPassword) {
    errorEmptyPassword.remove();
    inputPassword.classList.remove("input-error");
    eyeOff.classList.remove("eye-error");
    loginContainer.classList.remove("error");
  }
}

function Login() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    window.location.assign("./folder");
  } else {
    removeIfEmailError();
    removeIfPasswordError();
    makeCheckEmailError();
    makeCheckPasswordError();
  }
}

function enterLogin(e) {
  if (e.key === "Enter") {
    Login();
    e.preventDefault();
  }
}

function eyeClick(e) {
  console.log(e.target.parentElement);
  if (e.target.parentElement === eyeOff) {
    eyeOff.classList.add("invisible");
    eyeOn.classList.remove("invisible");
    inputPassword.type = "text";
  }
  if (e.target.parentElement === eyeOn) {
    eyeOn.classList.add("invisible");
    eyeOff.classList.remove("invisible");
    inputPassword.type = "password";
  }

  e.preventDefault();
}

inputEmail.addEventListener("focusout", addEmailError);
inputEmail.addEventListener("focusin", removeIfEmailError);
inputPassword.addEventListener("focusout", addPasswordError);
inputPassword.addEventListener("focusin", removeIfPasswordError);
loginBtn.addEventListener("click", Login);
loginContainer.addEventListener("keypress", enterLogin);
eyeOff.addEventListener("click", eyeClick);
eyeOn.addEventListener("click", eyeClick);
