const emailInput = document.querySelector(".email");
const emailText = document.querySelector(".email-text");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const passwordInput = document.querySelector(".password");
const passwordText = document.querySelector(".password-text");
const button = document.querySelector("#button");
const form = document.querySelector("form");

//이메일
function emailInputHandler(event) {
  const emailValue = event.target.value.trim();
  if (!emailValue) {
    emailText.textContent = "이메일을 입력해 주세요.";
    event.target.style.border = "1px solid #FF5B56";
  } else if (!emailRegex.test(emailValue)) {
    emailText.textContent = "올바른 이메일 주소가 아닙니다.";
    event.target.style.border = "1px solid #FF5B56";
  } else {
    emailText.textContent = "";
    event.target.style.border = "1px solid #ccd5e3";
  }
}
//패스워드
function passwordInputHandler(event) {
  const passwordValue = event.target.value.trim();
  if (!passwordValue) {
    passwordText.textContent = "비밀번호를 확인해 주세요";
    event.target.style.border = "1px solid #FF5B56";
  } else {
    passwordText.textContent = "";
    event.target.style.border = "1px solid #ccd5e3";
  }
}
//맞는 아이디 비번 입력시 로그인되기
function signinLogin() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
    window.location.href = "/folder";
  } else {
    passwordText.textContent = "비밀번호를 확인해 주세요";
    passwordInput.style.border = "1px solid #FF5B56";
  }
}
function formSubmitHandler(event) {
  event.preventDefault();
  signinLogin();
}

emailInput.addEventListener("focusout", emailInputHandler);
passwordInput.addEventListener("focusout", passwordInputHandler);
button.addEventListener("click", signinLogin);
form.addEventListener("submit", formSubmitHandler); //submit form용
