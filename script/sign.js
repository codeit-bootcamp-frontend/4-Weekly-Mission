import { ERROR_MESSAGE } from "./errorType.js";

//변수 선언
const loginContainer = document.querySelector(".login-container");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const eyeOff = document.querySelector(".eye-off");
const eyeOn = document.querySelector(".eye-on");
const loginBtn = document.querySelector(".login-btn");

function makeError(type, errorType) {
  const errorTag = document.createElement("p");
  errorTag.textContent = errorType;
  if (type === "email") {
    errorTag.classList.add("email-error");
    inputEmail.after(errorTag);
    inputEmail.classList.add("input-error");
  } else if (type === "password") {
    errorTag.classList.add("password-error");
    inputPassword.after(errorTag);
    inputPassword.classList.add("input-error");
    eyeOff.classList.add("eye-error");
    loginContainer.classList.add("error");
  } else if (type === "passwordcheck") {
    errorTag.classList.add("password-check-error");
    inputPasswordCheck.after(errorTag);
    inputPasswordCheck.classList.add("input-error");
    eyeOff.classList.add("eye-error");
    loginContainer.classList.add("error");
  }
}

//이메일에러를 추가하는 함수입니다.
function addEmailError() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 유효성 검사 정규식

  if (inputEmail.value === "") {
    removeIfEmailError();
    makeError("email", ERROR_MESSAGE.email.empty);
  }
  if (inputEmail.value !== "" && !emailRegex.test(inputEmail.value)) {
    removeIfEmailError();
    makeError("email", ERROR_MESSAGE.email.check);
  }
}

//비밀번호에러를 추가하는 함수입니다.
function addPasswordError() {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

  if (inputPassword.value === "") {
    removeIfPasswordError();
    makeError("password", ERROR_MESSAGE.password.empty);
  }

  if (inputPassword.value !== "" && !passwordRegex.test(inputPassword.value)) {
    removeIfPasswordError();
    makeError("password", ERROR_MESSAGE.password.invalid);
  }
}

//이메일에서 오류태그인 p태그가 연속적으로 쌓이는 것을 방지하기 위한 에러태그가 있다면 제거하는 함수입니다.
function removeIfEmailError() {
  const errorEmptyEmail = document.querySelector(".email-error");

  if (errorEmptyEmail) {
    errorEmptyEmail.remove();
    inputEmail.classList.remove("input-error");
  }
}

//비밀번호에서 오류태그인 p태그가 연속적으로 쌓이는 것을 방지하기 위한 에러태그가 있다면 제거하는 함수입니다.
function removeIfPasswordError() {
  const errorEmptyPassword = document.querySelector(".password-error");

  if (errorEmptyPassword) {
    errorEmptyPassword.remove();
    inputPassword.classList.remove("input-error");
    eyeOff.classList.remove("eye-error");
    loginContainer.classList.remove("error");
  }
}
//로그인 버튼의 이벤트를 구현한 함수입니다.
function Login() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    window.location.assign("./folder");
  } else {
    removeIfEmailError();
    removeIfPasswordError();
    makeError("email", ERROR_MESSAGE.email.check);
    makeError("password", ERROR_MESSAGE.password.check);
  }
}
//keypress가 일어났을때 Enter키를 눌렀는지 확인하고 Login()을 실행하는 함수입니다.
function enterLogin(e) {
  if (e.key === "Enter") {
    Login();
    e.preventDefault();
  }
}
//눈이미지를 클릭했을때 눈의 이미지를 토글하는 함수입니다. 토글시 비밀번호의 노출여부도 바뀝니다.
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

//이벤트 핸들러 적용
inputEmail.addEventListener("focusout", addEmailError);
inputEmail.addEventListener("focusin", removeIfEmailError);
inputPassword.addEventListener("focusout", addPasswordError);
inputPassword.addEventListener("focusin", removeIfPasswordError);
loginBtn.addEventListener("click", Login);
document.body.addEventListener("keypress", enterLogin);
eyeOff.addEventListener("click", eyeClick);
eyeOn.addEventListener("click", eyeClick);
