import {inputFocus, inputBlur, printError, ERROR_TYPE} from './signFunction.js';
import {accountCheck, formatCheck, passFormatCheck, isPwCheckWasCorrectWithPw} from './accountData.js';
import pwTypeToggleBtnAssign from './pwTypeToggle.js';

// 비밀번호 토글 초기화
pwTypeToggleAssign();

const signupEmailInput = document.querySelector('#signupEmailInput');
const signupPasswordInput = document.querySelector('#signupPasswordInput');
const signupPasswordCheckInput = document.querySelector('#signupPasswordCheckInput');
const confirmBtn = document.querySelector('#confirmBtn');


//에러메시지 출력 장소
const emailErrorSection = signupEmailInput.parentElement.lastElementChild;
const passwordErrorSection = signupPasswordInput.parentElement.parentElement.lastElementChild;
const passCheckErrorSection = signupPasswordCheckInput.parentElement.parentElement.lastElementChild;


// 이메일 리스너 - 등록된 이메일 검증 조건 추가
signupEmailInput.addEventListener('input' , () => inputFocus(emailErrorSection));
signupEmailInput.addEventListener('focus' , () => inputFocus(emailErrorSection));
signupEmailInput.addEventListener('blur' , () => inputBlur(ERROR_TYPE.EMAIL_SECTION_BLANK, emailErrorSection, !accountCheck(signupEmailInput.value), ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED));


// 패스워드 리스너 - 패스워드 형식 검증 조건 추가
signupPasswordInput.addEventListener('input' , () => inputFocus(passwordErrorSection));
signupPasswordInput.addEventListener('focus' , () => inputFocus(passwordErrorSection));
signupPasswordInput.addEventListener('blur' , () => inputBlur(ERROR_TYPE.PW_SECTION_BLANK, passwordErrorSection, passFormatCheck(signupPasswordInput.value), ERROR_TYPE.PW_IS_NOT_VALID));


// 패스워드체크 리스너 - 패스워드체크 검증 조건 추가
signupPasswordCheckInput.addEventListener('input' , () => inputFocus(passCheckErrorSection));
signupPasswordCheckInput.addEventListener('focus' , () => inputFocus(passCheckErrorSection));
signupPasswordCheckInput.addEventListener('blur' , () => inputBlur(ERROR_TYPE.PW_SECTION_BLANK, passCheckErrorSection, isPwCheckWasCorrectWithPw(signupPasswordInput.value, signupPasswordCheckInput.value), ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD));


// 회원가입 함수
const submitSignupData = async function (event) {
   event.preventDefault();

   const emailInput = signupEmailInput.value;
   const passInput = signupPasswordInput.value;
   const passCheckInput = signupPasswordCheckInput.value;

   // 계정정보 유효 확인
   const isAccountRegistered = accountCheck(emailInput);
   const isPwCheckWasCorrectWithPw = passInput === passCheckInput;

   let signupValid = true;

   // 오류가 초기화 됐을 때도 제출할 시 모든 오류가 표시되도록 모든 경우의 수 고려 필요
   if (!formatCheck(emailInput)) {printError(signupEmailInput, emailErrorSection, ERROR_TYPE.EMAIL_IS_NOT_VALID); signupValid = false;}; // 이메일 형식 안맞음!
   if (!passFormatCheck(passInput)) {printError(signupPasswordInput, passwordErrorSection,ERROR_TYPE.PW_IS_NOT_VALID); signupValid = false;}; // 패스워드 형식이 맞지 않음!!
   if (!isPwCheckWasCorrectWithPw) {printError(signupPasswordCheckInput, passCheckErrorSection, ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD); signupValid = false;}; // 패스워드 체크가 다름!
   if (isAccountRegistered) {printError(signupEmailInput, emailErrorSection, ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED); signupValid = false;}; // 이미 사용중인 이메일!   
   if (!emailInput) {printError(signupEmailInput, emailErrorSection, ERROR_TYPE.EMAIL_SECTION_BLANK); signupValid = false;}; // 이메일 없음!
   if (!passInput) {printError(signupPasswordInput, passwordErrorSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 없음!
   if (!passCheckInput) {printError(signupPasswordCheckInput, passCheckErrorSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 체크 없음!

   if (signupValid) {
      

      window.location.href = './folder.html';
   } 
}

confirmBtn.addEventListener('click' , (event) => submitSignupData(event));