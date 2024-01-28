import {testUser, emailValidCheck, passwordValidCheck, addError, removeError, passwordToggle} from "./global.js";
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
  if (e.target.value === '') {
    addError(emailInput, emailError, '이메일을 입력해 주세요.');
    return;
  } 
  if (!emailValidCheck(e.target.value)) {
    addError(emailInput, emailError, '올바른 이메일 주소가 아닙니다.');
    return;
  }
  if (e.target.value === testUser.email) {
    addError(emailInput, emailError, '이미 사용 중인 이메일 입니다.');
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
  if (!passwordValidCheck(e.target.value)) {
    addError(passwordInput, passwordError, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return;
  }
  removeError(passwordInput, passwordError);
}

/*입력받은 password-check 값을 판별하고 조건에 맞는 에러메시지를 출력하는 함수*/
function validPasswordCheckInput(e) {
  if (e.target.value !== passwordInput.value) {
    addError(passwordCheckInput, passwordCheckError, '비밀번호가 일치하지 않아요.');
    return;
  }
  removeError(passwordCheckInput, passwordCheckError);
}

/*유효한 회원가입을 시도할 때 일어나는 경우에 대한 함수*/
function trySignUp(event) {
  event.preventDefault();
  if (emailError.textContent === '' && passwordError.textContent === '' && passwordCheckError.textContent === '') {
    window.location.href = "folder.html";
    return;
  }
}



/*이벤트 핸들러 등록*/
emailInput.addEventListener('focusout', validEmailInput);
passwordInput.addEventListener('focusout', validPasswordInput);
passwordCheckInput.addEventListener('focusout', validPasswordCheckInput);
emailInput.addEventListener('keypress', () => removeError(emailInput, emailError));
passwordInput.addEventListener('keypress', () => removeError(passwordInput, passwordError));
passwordCheckInput.addEventListener('keypress', () => removeError(passwordCheckInput, passwordCheckError));
confirmBtn.addEventListener('click', trySignUp);
eyeBtn.addEventListener('click', () => passwordToggle(passwordInput, eyeBtn));
anotherEyeBtn.addEventListener('click', () => passwordToggle(passwordCheckInput, anotherEyeBtn));