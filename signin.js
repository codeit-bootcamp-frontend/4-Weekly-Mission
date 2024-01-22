//이메일 형식
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

//비밀번호 형식
function validatePassword(password) {
  const minLength = 7;
  const maxLength = 15;
  return password.length >= minLength && password.length <= maxLength;
}

// 이메일 유효성 검사
const emailInput = document.querySelector(".sign-input");
const errorEmail = document.querySelector("#error-message-email");

emailInput.addEventListener("focusout", function () {
  const email = emailInput.value;

  if (email === "") {
    errorEmail.value = "이메일을 입력하세요.";
  } else if (!validateEmail(email)) {
    errorEmail.value = "올바른 이메일 주소가 아닙니다.";
  } else {
    errorEmail.value = "올바른 이메일 형식입니다.";
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
    errorPassword.value = "비밀번호를 입력하세요.";
  } else if (!validatePassword(password)) {
    errorPassword.value = "올바른 비밀번호가 아닙니다.";
  } else {
    errorPassword.value = "올바른 비밀번호 형식입니다.";
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

// 아이콘 클릭
const eyeButton = document.querySelector(".eye-button");
const pwInput = document.querySelector("#password-input");

eyeButton.addEventListener("click", () => {
  const icon =
    pwInput.type === "password"
      ? "./images/eye-off-with-dash.svg" // svg 파일 넣는 법 잘 모르겠습니다...
      : "./images/eye-on.svg";
  passwordInput.setAttribute(
    "type",
    passwordInput.getAttribute("type") === "password" ? "text" : "password"
  );
});

// 질문사항
// 1. 요소를 숨겼다가 특정 동작을 행했을 때 다시 나타내는 법.
// 2. svg 파일 넣는 방법.
// 3. submit? enter?
// 4. 눈 모양 아이콘이 에러메세지(비밀번호)칸으로 이동하는데 해결방법 모르겠슴다.
