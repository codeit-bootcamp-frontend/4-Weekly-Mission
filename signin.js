//이메일 형식
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

//비밀번호 형식(대문자,특수문자,영어,숫자 조합)
function validatePassword(password) {
  const regexExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return regexExp.test(password);
}

// 이메일 유효성 검사
const emailInput = document.querySelector(".sign-input");
const errorEmail = document.querySelector("#error-message-email");

emailInput.addEventListener("focusout", function () {
  const email = emailInput.value;

  if (email === "") {
    errorEmail.innerHTML = "이메일을 입력하세요.";
    return;
  }
  if (!validateEmail(email)) {
    errorEmail.innerHTML = "올바른 이메일 주소가 아닙니다.";
    return;
  }
  if (validateEmail(email)) {
    errorEmail.innerHTML = "";
    return;
  }
});

emailInput.addEventListener("keyup", function () {
  errorEmail.value = "작성중입니다...";
});

// 비밀번호 유효성 검사.
const passwordInput = document.querySelector("#password-input");
const errorPassword = document.querySelector("#error-message-password");

passwordInput.addEventListener("focusout", function () {
  const password = passwordInput.value;

  if (password === "") {
    errorPassword.innerHTML = "비밀번호를 입력하세요.";
    return;
  }
  if (!validatePassword(password)) {
    errorPassword.innerHTML = "올바른 비밀번호가 아닙니다.";
    return;
  }
  if (validatePassword(password)) {
    errorPassword.innerHTMLe = "";
    return;
  }
});

passwordInput.addEventListener("keyup", function () {
  errorPassword.value = "작성중입니다...";
});

// test code
const myEmail = "test@codeit.com";
const myPassword = "code101";

const logIn = document.querySelector(".sign-form");
logIn.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (myEmail === email && myPassword === password) {
    window.location.href = "./folder.html";
  } else {
    errorEmail.value = "이메일을 확인해 주세요.";
    errorPassword.value = "비밀번호를 확인해 주세요.";
  }
});

const eyeButton = document.querySelector(".eye-button");
const $passwordInput = document.getElementById("password-input");

eyeButton.addEventListener("click", () => {
  if ($passwordInput.type === "password") {
    $passwordInput.type = "text";
    eyeButton.innerHTML = `<img src="./images/eye-on.svg" />`;
  } else {
    $passwordInput.type = "password";
    eyeButton.innerHTML = `<img src="./images/eye-off.svg" />`;
  }
});
