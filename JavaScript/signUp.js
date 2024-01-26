import {inputFocus, inputBlur, printError, errorType} from './signFunction.js';
import {accountCheck, formatCheck, passFormatCheck, passCheckCorrect} from './accountData.js';
import passToggleReset from './passwordToggle.js';

// 비밀번호 토글 초기화
passToggleReset();

const signupEmailInput = document.querySelector('#signupEmailInput');
const signupPasswordInput = document.querySelector('#signupPasswordInput');
const signupPasswordCheckInput = document.querySelector('#signupPasswordCheckInput');
const confirmBtn = document.querySelector('#confirmBtn');


//에러메시지 출력 장소
const emailErrorSection = signupEmailInput.parentElement.lastElementChild;
const passwordErrorSection = signupPasswordInput.parentElement.parentElement.lastElementChild;
const passCheckErrorSection = signupPasswordCheckInput.parentElement.parentElement.lastElementChild;


// 이메일 리스너 - 등록된 이메일 검증 조건 추가
signupEmailInput.addEventListener('focus' , () => inputFocus(emailErrorSection));
signupEmailInput.addEventListener('blur' , () => inputBlur(errorType.email, emailErrorSection, !accountCheck(signupEmailInput.value), errorType.registeredEmail));


// 패스워드 리스너 - 패스워드 형식 검증 조건 추가
signupPasswordInput.addEventListener('focus' , () => inputFocus(passwordErrorSection));
signupPasswordInput.addEventListener('blur' , () => inputBlur(errorType.password, passwordErrorSection, passFormatCheck(signupPasswordInput.value), errorType.passwordNotValid));


// 패스워드체크 리스너 - 패스워드체크 검증 조건 추가
signupPasswordCheckInput.addEventListener('focus' , () => inputFocus(passCheckErrorSection));
signupPasswordCheckInput.addEventListener('blur' , () => inputBlur(errorType.password, passCheckErrorSection, passCheckCorrect(signupPasswordInput.value, signupPasswordCheckInput.value), errorType.mismatchPasswordCheck));


// 회원가입 함수
function submitSignupData() {
   event.preventDefault();

   const emailInput = signupEmailInput.value;
   const passInput = signupPasswordInput.value;
   const passCheckInput = signupPasswordCheckInput.value;

   // 계정정보 유효 확인
   const isAccountRegistered = accountCheck(emailInput);
   const passCheckCorrect = passInput === passCheckInput;

   let signupValid = true;

   // 오류가 초기화 됐을 때도 제출할 시 모든 오류가 표시되도록 모든 경우의 수 고려 필요
   if (!formatCheck(emailInput)) {printError(signupEmailInput, emailErrorSection, errorType.emailNotValid); signupValid = false;}; // 이메일 형식 안맞음!
   if (!passFormatCheck(passInput)) {printError(signupPasswordInput, passwordErrorSection,errorType.passwordNotValid); signupValid = false;}; // 패스워드 형식이 맞지 않음!!
   if (!passCheckCorrect) {printError(signupPasswordCheckInput, passCheckErrorSection, errorType.mismatchPasswordCheck); signupValid = false;}; // 패스워드 체크가 다름!
   if (isAccountRegistered) {printError(signupEmailInput, emailErrorSection, errorType.registeredEmail); signupValid = false;}; // 이미 사용중인 이메일!   
   if (!emailInput) {printError(signupEmailInput, emailErrorSection, errorType.email); signupValid = false;}; // 이메일 없음!
   if (!passInput) {printError(signupPasswordInput, passwordErrorSection,errorType.password); signupValid = false;}; // 패스워드 없음!
   if (!passCheckInput) {printError(signupPasswordCheckInput, passCheckErrorSection,errorType.password); signupValid = false;}; // 패스워드 체크 없음!

   if (signupValid) {
      window.location.href = './folder.html';
   } 
}

confirmBtn.addEventListener('click' , () => submitSignupData());