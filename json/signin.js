import {testUser, emailValidCheck, addError, removeError, passwordToggle} from "./global.js";
const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");
const confirmBtn = document.querySelector('#confirm-button');
const eyeBtn = document.querySelector('.eye-btn');


/*입력받은 email 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validEmailInput(e) {
  if (e.target.value === '') {
    addError(emailInput, emailError, '이메일을 입력해 주세요.');
    return;
  } 
  if (!emailValidCheck(e.target.value)) {
    addError(emailInput, emailError, '올바른 이메일 주소가 아닙니다.');
    return;
  }
  removeError(emailInput, emailError);
}

/*입력받은 password 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validPasswordInput(e) {
  if (e.target.value === '') {
    addError(passwordInput, passwordError, '비밀번호를 입력해 주세요.');
    return;
  }
  removeError(passwordInput, passwordError);
}

/*로그인을 시도할 때 일어나는 경우에 대한 함수*/
function tryLogin(event) {
  event.preventDefault();
  if (emailInput.value === testUser.email && passwordInput.value === testUser.password) {
    window.location.href = "folder.html";
    return;
  }
  addError(emailInput, emailError, '이메일을 확인해 주세요.');
  addError(passwordInput, passwordError, '비밀번호를 확인해 주세요.');
}



/*이벤트 핸들러 등록*/
emailInput.addEventListener('focusout', validEmailInput);
passwordInput.addEventListener('focusout', validPasswordInput);
emailInput.addEventListener('keypress', () => removeError(emailInput, emailError));
passwordInput.addEventListener('keypress', () => removeError(passwordInput, passwordError));
confirmBtn.addEventListener('click', tryLogin);
eyeBtn.addEventListener('click', () => passwordToggle(passwordInput, eyeBtn));