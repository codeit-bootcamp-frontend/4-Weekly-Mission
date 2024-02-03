import { emailValid, passwordValid, isPasswordSame } from "./valid.js";
import { ERROR_MESSAGE } from "./errorType.js";

//변수 선언
const loginContainer = document.querySelector(".login-container");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const inputPasswordCheck = document.querySelector("#password-check");
const eyeOff = document.querySelector(".eye-off");
const eyeOn = document.querySelector(".eye-on");
const eyeOff_2 = document.querySelector(".eye-off-2");
const eyeOn_2 = document.querySelector(".eye-on-2");
const joinBtn = document.querySelector(".join-btn");
const url = "https://bootcamp-api.codeit.kr";

//에러태그를 생성하는 함수 입니다.
function makeError(type, errorType) {
  const errorTag = document.createElement("p");
  errorTag.textContent = errorType;
  switch (type) {
    case "email":
      errorTag.classList.add("email-error");
      inputEmail.after(errorTag);
      inputEmail.classList.add("input-error");
      break;
    case "password":
      errorTag.classList.add("password-error");
      inputPassword.after(errorTag);
      inputPassword.classList.add("input-error");
      eyeOff.classList.add("eye-error");
      loginContainer.classList.add("error");
      break;
    case "passwordcheck":
      errorTag.classList.add("password-check-error");
      inputPasswordCheck.after(errorTag);
      inputPasswordCheck.classList.add("input-error");
      eyeOff.classList.add("eye-error");
      loginContainer.classList.add("error");
      break;
    default:
      break;
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
  if (inputEmail.value === "test@codeit.com") {
    removeIfEmailError();
    makeError("email", ERROR_MESSAGE.email.inUse);
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

//비밀번호확인 에러를 추가하는 함수입니다.
function addPasswordCheckError() {
  if (inputPasswordCheck.value !== inputPassword.value) {
    removeIfPasswordCheckError();
    makeError("passwordcheck", ERROR_MESSAGE.passwordcheck.recheck);
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

//비밀번호에서 오류태그인 p태그가 연속적으로 쌓이는 것을 방지하기 위한 에러태그가 있다면 제거하는 함수입니다.
function removeIfPasswordCheckError() {
  const errorEmptyPasswordCheck = document.querySelector(
    ".password-check-error"
  );

  if (errorEmptyPasswordCheck) {
    errorEmptyPasswordCheck.remove();
    inputPasswordCheck.classList.remove("input-error");
    eyeOff.classList.remove("eye-error");
    loginContainer.classList.remove("error");
  }
}

//회원가입 버튼의 이벤트를 구현한 함수입니다.
async function join() {
  if (
    passwordValid(inputPassword.value) &&
    isPasswordSame(inputPassword.value, inputPasswordCheck.value)
  ) {
    try {
      const data = {
        email: inputEmail.value,
        password: inputPassword.value,
      };

      const response = await fetch(`${url}/api/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        const accessToken = responseData.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        window.location.assign("./folder");
      }
    } catch (err) {
      console.log(err);
      removeIfEmailError();
      addEmailError();
    }
  } else {
    removeIfEmailError();
    removeIfPasswordError();
    removeIfPasswordCheckError();
    addEmailError();
    addPasswordError();
    addPasswordCheckError();
  }
}

//keypress가 일어났을때 Enter키를 눌렀는지 확인하고 join()을 실행하는 함수입니다.
function enterjoin(e) {
  if (e.key === "Enter") {
    join();
    e.preventDefault();
  }
}
//눈이미지를 클릭했을때 눈의 이미지를 토글하는 함수입니다. 토글시 비밀번호의 노출여부도 바뀝니다.
function eyeToggleForPassword(e) {
  if (e.target.parentElement === eyeOff) {
    eyeOff.classList.add("visible");
    eyeOn.classList.remove("invisible");
    inputPassword.type = "text";
  }
  if (e.target.parentElement === eyeOn) {
    eyeOn.classList.add("invisible");
    eyeOff.classList.remove("visible");
    inputPassword.type = "password";
  }
  e.preventDefault();
}
//비밀번호 확인에 있는 이미지를 클릭했을때 눈의 이미지를 토글하는 함수입니다. 토글시 비밀번호의 노출여부도 바뀝니다.
function eyeToggleForPasswordCheck(e) {
  if (e.target.parentElement === eyeOff_2) {
    eyeOff_2.classList.add("visible");
    eyeOn_2.classList.remove("invisible");
    inputPasswordCheck.type = "text";
  }
  if (e.target.parentElement === eyeOn_2) {
    eyeOn_2.classList.add("invisible");
    eyeOff_2.classList.remove("visible");
    inputPasswordCheck.type = "password";
  }
  e.preventDefault();
}

function checkAccessTokenOnLoginPage() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "/folder"; // accessToken이 있는 경우 "/folder" 페이지로 이동
  }
}

//이벤트 핸들러 적용
document.addEventListener("DOMContentLoaded", checkAccessTokenOnLoginPage);
inputEmail.addEventListener("focusin", removeIfEmailError);
inputPassword.addEventListener("focusout", addPasswordError);
inputPassword.addEventListener("focusin", removeIfPasswordError);
inputPasswordCheck.addEventListener("focusout", addPasswordCheckError);
inputPasswordCheck.addEventListener("focusin", removeIfPasswordCheckError);
joinBtn.addEventListener("click", join);
document.body.addEventListener("keypress", enterjoin);
eyeOff.addEventListener("click", eyeToggleForPassword);
eyeOn.addEventListener("click", eyeToggleForPassword);
eyeOff_2.addEventListener("click", eyeToggleForPasswordCheck);
eyeOn_2.addEventListener("click", eyeToggleForPasswordCheck);
