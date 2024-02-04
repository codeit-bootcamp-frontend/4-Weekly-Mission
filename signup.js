//이메일 형식
const myEmail = "test@codeit.com";

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
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
  }
  // 이미 존재하는 이메일.
  if (email === myEmail) {
    errorEmail.innerHTML = "이미 사용 중인 이메일입니다.";
  }
});

//비밀번호 형식
function validatePassword(password) {
  const regexExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return regexExp.test(password);
}

// 비밀번호 유효성 검사.
const passwordInput = document.querySelector("#password-input");
const signPassword = document.querySelector("#sign-password");
const errorPassword = document.querySelector("#error-message-password");

passwordInput.addEventListener("focusout", function () {
  const password = passwordInput.value;
  if (password === "") {
    errorPassword.innerHTML = "비밀번호 입력하세요.";
    return;
  }
  if (!validatePassword(password)) {
    errorPassword.innerHTML = "비밀번호 형식을 지켜주세요.";
    return;
  }
  if (validatePassword(password)) {
    errorPassword.innerHTML = "";
    return;
  }
});

signPassword.addEventListener("focusout", function () {
  const signpassword = signPassword.value;
  const password = passwordInput.value;
  if (signpassword !== password) {
    errorPassword.innerHTML = "비밀번호가 일치하지 않습니다.";
    return;
  }
  if (signPassword === password) {
    errorPassword.innerHTML = "";
    return;
  }
});

// 회원가입 버튼 누를 시
const sign = document.querySelector(".sign-form");

sign.addEventListener("submit", function (e) {
  e.preventDefault();
  if (errorEmail.innerHTML === "" && errorPassword.innerHTML === "") {
    window.location.href = "./folder.html";
    return;
  }
  if (errorEmail.innerHTML !== "") {
    emailInput.value = errorEmail.innerHTML;
    return;
  }
  if (errorPassword.innerHTML !== "") {
    errorPassword.innerHTML = "비밀번호를 다시 작성해주세요.";
    return;
  }
});

// 눈모양 버튼 기능 구현
const eyeButtons = document.querySelectorAll(".eye-button");

eyeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const passwordInput = button.previousElementSibling;
    const isPasswordVisible = passwordInput.type === "text";

    if (isPasswordVisible) {
      passwordInput.type = "password";
      button.querySelector("img").src = "./images/eye-off.svg";
    } else {
      passwordInput.type = "text";
      button.querySelector("img").src = "./images/eye-on.svg";
    }
  });
});
