import { setError, removeError, confirmUserLogin, toggleEye } from "./sign.js";
import { ERROR_MESSAGE } from "./constant.js";
import { checkAccessToken, emailCheck } from "./utils.js";

const formElement = document.querySelector(".sign-form");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const emailErrorElement = document.getElementById("emailErrorMessage");
const passwordErrorElement = document.getElementById("passwordErrorMessage");
const eyePassword = document.getElementById("eyePassword");

// const redirectPageAuthenticatedUser = ()=>{

// }
// (function (x, y) {
// 	console.log(x + y);
// })(3, 5);

// (() => {
//   if (checkAccessToken()) {
//     redirectPage("folder");
//   }
// })();

const emailFocusOutHandler = () => {
  if (!emailElement.value) {
    setError(emailElement, emailErrorElement, ERROR_MESSAGE.NO_INPUT_EMAIL); //값이 없으면
  } else if (!emailCheck(emailElement.value)) {
    setError(emailElement, emailErrorElement, ERROR_MESSAGE.INVALID_EMAIL); //이메일 유효성 체크
  } else {
    removeError(emailElement, emailErrorElement);
  }
};

const passwordFocusOutHandler = () => {
  if (!passwordElement.value) {
    setError(passwordElement, passwordErrorElement, ERROR_MESSAGE.NO_INPUT_PASSWORD);
  } else {
    removeError(passwordElement, passwordErrorElement);
  }
};

const submitLoginForm = (e) => {
  e.preventDefault();
  confirmUserLogin(e.target, emailErrorElement, passwordErrorElement);
};

const eyePasswordHandler = () => {
  toggleEye(passwordElement, eyePassword);
};
checkAccessToken("folder");
emailElement.addEventListener("focusout", emailFocusOutHandler);
passwordElement.addEventListener("focusout", passwordFocusOutHandler);

formElement.addEventListener("submit", submitLoginForm);
eyePassword.addEventListener("click", eyePasswordHandler);
