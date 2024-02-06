import { testUserList, checkEmailValid, addError, removeError, hiddenPasswordToggle } from "./global.js";
import errorMessage from "./error-message.js";
import { loginAccount } from "./api.js";
const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const confirmBtn = document.querySelector('#confirm-button');
const eyeBtn = document.querySelector('.eye-btn');


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
  removeError(emailInput, emailError);
}

/*입력받은 password 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validPasswordInput(e) {
  const pwValue = e.target.value;

  if (pwValue === '') {
    addError(passwordInput, passwordError, errorMessage.PW_REQUIRED);
    return;
  }
  removeError(passwordInput, passwordError);
}

/*로그인을 시도할 때 일어나는 경우에 대한 함수*/

// function tryLogin(event) {
//   event.preventDefault();
//   if (emailInput.value === testUser.email && passwordInput.value === testUser.password) {
//     window.location.href = "folder.html";
//     return;
//   }
//   addError(emailInput, emailError, errorMessage.CHECK_EMAIL);
//   addError(passwordInput, passwordError, errorMessage.CHECK_PW);
// }

function tryLogin(e) {
  e.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const checkEmail = testUserList.find((test) => test.email === emailValue);
  const checkPassword = testUserList.find((test) => test.password === passwordValue);

  if (checkEmail && checkPassword) {
    loginAccount()
    // window.location.href="folder.html"
    return;
  }
  if (!checkEmail && checkPassword) {
    addError(emailInput, emailError, errorMessage.CHECK_EMAIL);
    return;
  }
  if (checkEmail && !checkPassword) {
    addError(passwordInput, passwordError, errorMessage.CHECK_PW);
    return;
  }
  addError(emailInput, emailError, errorMessage.CHECK_EMAIL);
  addError(passwordInput, passwordError, errorMessage.CHECK_PW);
}

/* accessToken이 존재하면 folder로 이동 */
const haveToken = localStorage.getItem('accessToken');
if (haveToken) {
  window.location.href('folder.html');
}



/*이벤트 핸들러 등록*/
emailInput.addEventListener('focusout', validEmailInput);
passwordInput.addEventListener('focusout', validPasswordInput);
emailInput.addEventListener('keypress', () => removeError(emailInput, emailError));
passwordInput.addEventListener('keypress', () => removeError(passwordInput, passwordError));
confirmBtn.addEventListener('click', tryLogin);
eyeBtn.addEventListener('click', () => hiddenPasswordToggle(passwordInput, eyeBtn));