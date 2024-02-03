const emailErrorMessage = document.querySelector(".email-error-message");
const emailInput = document.querySelector(".email-input");

emailInput.addEventListener("blur", function () {
  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  if (emailInput.value === "") {
    emailErrorMessage.textContent = "이메일을 입력해 주세요.";
    emailInput.classList.add("error-border");
    return;
  }

  if (emailInput.value.match(EMAIL_REGEX) === null) {
    emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.classList.add("error-border");
    return;
  }

  if (emailInput.value === "test@codeit.com") {
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
    emailInput.classList.add("error-border");
    return;
  }

  emailErrorMessage.textContent = "";
  emailInput.classList.remove("error-border");
});

const passwordErrorMessage = document.querySelectorAll(
  ".password-error-message"
);
const passwordInput = document.querySelectorAll(".password-input");

passwordInput[0].addEventListener("blur", function () {
  const TEXT_REGEX = /[a-zA-Z]/;
  const NUMBER_REGEX = /[0-9]/;

  if (
    passwordInput[0].value.length < 8 ||
    !passwordInput[0].value.match(NUMBER_REGEX) ||
    !passwordInput[0].value.match(TEXT_REGEX)
  ) {
    passwordErrorMessage[0].textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordInput[0].classList.add("error-border");
    return;
  }
  passwordErrorMessage[0].textContent = "";
  passwordInput[0].classList.remove("error-border");
});

const eyeIconChange = document.querySelectorAll(".eye-icon-change");

eyeIconChange[0].addEventListener("click", function () {
  if (passwordInput[0].type === "password") {
    eyeIconChange[0].src = "./image/eye-on.png";
    passwordInput[0].type = "text";
    return;
  }
  eyeIconChange[0].src = "./image/eye-off.png";
  passwordInput[0].type = "password";
});

eyeIconChange[1].addEventListener("click", function () {
  if (passwordInput[1].type === "password") {
    eyeIconChange[1].src = "./image/eye-on.png";
    passwordInput[1].type = "text";
    return;
  }
  eyeIconChange[1].src = "./image/eye-off.png";
  passwordInput[1].type = "password";
});

window.addEventListener("keyup", function () {
  if (passwordInput[0].value === passwordInput[1].value){
    passwordErrorMessage[1].textContent="";
    passwordInput[1].classList.remove("error-border");
    return;
  }
  passwordErrorMessage[1].textContent="비밀번호가 일치하지 않아요.";
  passwordInput[1].classList.add("error-border");
});

const signUpForm = document.querySelector(".signup-form");
const signInBtn = document.querySelector(".signin-button")

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (emailInput.classList.contains("error-border")
      ||passwordInput[0].classList.contains("error-border")
      ||passwordInput[1].classList.contains("error-border")){
    return;
  }

  if (emailInput.value !== ""
    &&passwordInput[1].value !== ""){
  window.location.href = "./folder.html";
  }
});
