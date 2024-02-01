import {focusToInput, blurFromInput, errPrint, accountRegister, ERROR_TYPE} from './signFunction.js';
import {isValidEmail, isValidPw, isValidPwChecking, EmailRegisterStatusInServer} from './accountDataVerification.js';
import pwTypeToggleAssign from './pwTypeToggle.js';
import {pageRedirectToFolderIfClientHasToken} from './tokenHandle.js'
// 토큰이 있을 경우 folder로 리다이렉트
pageRedirectToFolderIfClientHasToken();

// 비밀번호 토글 초기화
pwTypeToggleAssign();

const emailInput = document.querySelector('#emailInput');
const pwInput = document.querySelector('#pwInput');
const pwCheckInput = document.querySelector('#pwCheckInput');
const confirmBtn = document.querySelector('#confirmBtn');


// 에러메시지 출력 장소
const emailErrSection = document.querySelector('#emailErrMsg');
const pwErrSection = document.querySelector('#pwErrMsg');
const pwCheckErrSection = document.querySelector('#pwCheckErrMsg');


// 이메일 리스너 - 등록된 이메일 검증 조건 추가
const blurFromInputAwaitingEmailCheck = async function(e) {   
   const isThisEmailNotRegistered = await EmailRegisterStatusInServer(emailInput.value) != 409
   blurFromInput(e, emailErrSection, ERROR_TYPE.EMAIL_SECTION_BLANK, isThisEmailNotRegistered, ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED);
}

emailInput.addEventListener('input' , (e) => focusToInput(e, emailErrSection));
emailInput.addEventListener('focus' , (e) => focusToInput(e, emailErrSection));
emailInput.addEventListener('blur', (e) => blurFromInputAwaitingEmailCheck(e));


// 패스워드 리스너 - 패스워드 형식 검증 조건 추가
pwInput.addEventListener('input' , (e) => focusToInput(e, pwErrSection));
pwInput.addEventListener('focus' , (e) => focusToInput(e, pwErrSection));
pwInput.addEventListener('blur' , (e) => blurFromInput(
   e, pwErrSection, ERROR_TYPE.PW_SECTION_BLANK,isValidPw(pwInput.value), ERROR_TYPE.PW_IS_NOT_VALID));


// 패스워드체크 리스너 - 패스워드체크 검증 조건 추가
pwCheckInput.addEventListener('input' , (e) => focusToInput(e, pwCheckErrSection));
pwCheckInput.addEventListener('focus' , (e) => focusToInput(e, pwCheckErrSection));
pwCheckInput.addEventListener('blur' , (e) => blurFromInput(
   e, pwCheckErrSection, ERROR_TYPE.PW_SECTION_BLANK, isValidPwChecking(pwInput.value, pwCheckInput.value), ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD));


// 회원가입 함수
const submitSignupData = async function (e) {
   e.preventDefault();

   const triedEmail = emailInput.value;
   const triedPw = pwInput.value;
   const triedPwCheck = pwCheckInput.value;

   // 계정정보 유효 확인
   let signupValid = true;
   const isValidPwChecking = triedPw === triedPwCheck;
   const triedSignupAccountData = {
      email : triedEmail,  
      password : triedPw
   }
   const isThisEmailNotOccupied = await EmailRegisterStatusInServer(triedSignupAccountData.email)

   // 오류가 초기화 됐을 때도 제출할 시 모든 오류가 표시되도록 모든 경우의 수 고려 필요
   try {
      if (!isValidEmail(triedEmail)) {errPrint(emailInput, emailErrSection, ERROR_TYPE.EMAIL_IS_NOT_VALID); signupValid = false;}; // 이메일 형식 안맞음!
      if (!isValidPw(triedPw)) {errPrint(pwInput, pwErrSection,ERROR_TYPE.PW_IS_NOT_VALID); signupValid = false;}; // 패스워드 형식이 맞지 않음!!
      if (!isValidPwChecking) {errPrint(pwCheckInput, pwCheckErrSection, ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD); signupValid = false;}; // 패스워드 체크가 다름!
      if (!triedEmail) {errPrint(emailInput, emailErrSection, ERROR_TYPE.EMAIL_SECTION_BLANK); signupValid = false;}; // 이메일 없음!
      if (!triedPw) {errPrint(pwInput, pwErrSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 없음!
      if (!triedPwCheck) {errPrint(pwCheckInput, pwCheckErrSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 체크 없음!
      if (isThisEmailNotOccupied != 200) {throw new Error();}
   } catch {
      if (isThisEmailNotOccupied == 409) {
         errPrint(emailInput, emailErrSection, ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED); // 이미 사용중인 이메일!   
      }
      signupValid = false;
   }

   if (signupValid) {
      await accountRegister(triedSignupAccountData)
      //window.location.href = './folder.html';
   } 
}

confirmBtn.addEventListener('click' , (e) => submitSignupData(e));