import { testUserList, checkEmailValid, checkPasswordValid, addError, removeError, hiddenPasswordToggle } from "./global.js";
import errorMessage from "./error-message.js";
import { addNewAccount } from "./api.js";
const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const passwordCheckInput = document.querySelector("#password-check");
const passwordCheckError = document.querySelector(".password-check-error");
const confirmBtn = document.querySelector('#confirm-button');
const eyeBtn = document.querySelector('.eye-btn');
const anotherEyeBtn = document.querySelector('.eye-btn2');


/*입력받은 email 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validEmailInput(e) {
  const emailValue = e.target.value.trim();

  if (emailValue === '') {
    addError(emailInput, emailError, errorMessage.EMAIL_REQUIRED);
    return;
  } 
  if (!checkEmailValid(emailValue)) {
    addError(emailInput, emailError, errorMessage.EMAIL_INVALID);
    return;
  }
  if (testUserList.find((test) => emailValue === test.email)) {
    addError(emailInput, emailError, errorMessage.EMAIL_ALREADY_USE);
    return;
  }
  removeError(emailInput, emailError);
}

/*입력받은 password 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validPasswordInput(e) {
  const pwValue = e.target.value;

  if (pwValue === '') {
    addError(passwordInput, passwordError, errorMessage.PW_REQUIRED);
    return;
  }
  if (!checkPasswordValid(pwValue)) {
    addError(passwordInput, passwordError, errorMessage.PW_INVALID);
    return;
  }
  removeError(passwordInput, passwordError);
}

/*입력받은 password-check 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validPasswordCheckInput(e) {
  const pwCheckValue = e.target.value;

  if (pwCheckValue === '') {
    addError(passwordCheckInput, passwordCheckError, errorMessage.PW_REQUIRED);
    return;
  }
  if (pwCheckValue !== passwordInput.value) {
    addError(passwordCheckInput, passwordCheckError, errorMessage.PW_NOT_MATCH);
    return;
  }
  removeError(passwordCheckInput, passwordCheckError);
}

/*유효한 회원가입을 시도할 때 일어나는 경우에 대한 함수*/
function trySignUp(e) {
  e.preventDefault();
  const isInputWhiteSpace = emailInput.value === '' || passwordInput.value === '' || passwordCheckInput.value === '';
  const notHaveError = emailError.textContent === '' && passwordError.textContent === '' && passwordCheckError.textContent === '';
  if (!isInputWhiteSpace && notHaveError) {
    addNewAccount(emailInput, passwordInput);
    // window.location.href = "folder.html";
    return;
  }
  addError(emailInput, emailError, errorMessage.CHECK_EMAIL);
  addError(passwordInput, passwordError, errorMessage.CHECK_PW);
  addError(passwordCheckInput, passwordCheckError, errorMessage.PW_NOT_MATCH);
}

/* accessToken이 존재하면 folder로 이동 */
const haveToken = localStorage.getItem('accessToken');
if (haveToken) {
  window.location.href('folder.html');
}


/*이벤트 핸들러 등록*/
emailInput.addEventListener('focusout', validEmailInput);
passwordInput.addEventListener('focusout', validPasswordInput);
passwordCheckInput.addEventListener('focusout', validPasswordCheckInput);
emailInput.addEventListener('keypress', () => removeError(emailInput, emailError));
passwordInput.addEventListener('keypress', () => removeError(passwordInput, passwordError));
passwordCheckInput.addEventListener('keypress', () => removeError(passwordCheckInput, passwordCheckError));
confirmBtn.addEventListener('click', trySignUp);
eyeBtn.addEventListener('click', () => hiddenPasswordToggle(passwordInput, eyeBtn));
anotherEyeBtn.addEventListener('click', () => hiddenPasswordToggle(passwordCheckInput, anotherEyeBtn));