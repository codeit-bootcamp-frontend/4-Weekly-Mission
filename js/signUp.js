import {
  userID,
  userPW,
  emailError,
  pwError,
  pwContainer,
  errorStyle,
  clearStyle,
  validEmail,
  validPassword,
  validEmailCheck,
  goUrl,
  validPasswordCheck,
  showPW,
} from "./signUtils.js";

const userPWCheck = document.querySelector(".check-password");
const checkPWError = document.querySelector(".check-pw-error");
const signUpButton = document.querySelector(".sign-up-button");
const checkPWContainer = document.querySelector(".check-pw-container");

let isValidPasswordCheck = false;

function isValidEmail(obj) {
  return obj.value !== "" && validEmailCheck(obj);
}

function isValidPassword(obj) {
  return obj.value !== "" && validPasswordCheck(obj);
}

function validSignUp() {
  if (isValidEmail(userID) && isValidPassword(userPW) && isValidPasswordCheck) {
    goUrl();
  }
  if (isValidEmail(userID) !== true) {
    emailError.textContent = "이메일을 다시 확인주세요!";
    errorStyle(emailError, userID);
  }
  if (isValidPassword(userPW) !== true) {
    pwError.textContent = "비밀번호를 다시 확인해주세요!";
    errorStyle(pwError, userPW);
  }
  if (isValidPasswordCheck !== true) {
    errorStyle(checkPWError, userPWCheck);
    checkPWError.textContent = "비밀번호를 일치시켜주세요!";
  }
}

function enterLogin(e) {
  if (e.keyCode === 13) validSignUp();
}

function emailAlreadyExist(obj) {
  if (obj.value === "test@codeit.com") {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    errorStyle(emailError, userID);
  }
}

function checkPassword(obj) {
  if (obj.value === userPW.value) {
    clearStyle(checkPWError, userPWCheck);
    isValidPasswordCheck = true;
  } else {
    errorStyle(checkPWError, userPWCheck);
    checkPWError.textContent = "비밀번호가 일치하지 않아요.";
    isValidPasswordCheck = false;
  }
}

userID.addEventListener("focusout", (e) => {
  validEmail(e.target);
  emailAlreadyExist(e.target);
  isValidEmail(e.target);
});
userPW.addEventListener("focusout", (e) => {
  validPassword(e.target);
});
userPWCheck.addEventListener("focusout", (e) => {
  checkPassword(e.target);
  isValidPassword(e.target);
});
signUpButton.addEventListener("click", validSignUp);
document.addEventListener("keypress", enterLogin);
pwContainer.addEventListener("click", showPW);
checkPWContainer.addEventListener("click", showPW);
