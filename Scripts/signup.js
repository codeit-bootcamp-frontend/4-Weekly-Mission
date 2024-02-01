import {inputFocus, inputBlur, printErr, accountRegisterWasSuccessful, ERROR_TYPE} from './signFunction.js';
import {isValidEmail, isValidPw, isValidPwChecking, isThisEmailNotRegisteredInServer} from './accountDataVerification.js';
import pwTypeToggleAssign from './pwTypeToggle.js';
import {RedirectToFolderIfClientHasToken} from './tokenHandle.js'
// 토큰이 있을 경우 folder로 리다이렉트
RedirectToFolderIfClientHasToken();

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
emailInput.addEventListener('input' , (e) => inputFocus(e, emailErrSection));
emailInput.addEventListener('focus' , (e) => inputFocus(e, emailErrSection));
emailInput.addEventListener('blur' , (e) => inputBlur(
   e, emailErrSection, ERROR_TYPE.EMAIL_SECTION_BLANK,!isThisEmailNotRegisteredInServer(emailInput.value), ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED));


// 패스워드 리스너 - 패스워드 형식 검증 조건 추가
pwInput.addEventListener('input' , (e) => inputFocus(e, pwErrSection));
pwInput.addEventListener('focus' , (e) => inputFocus(e, pwErrSection));
pwInput.addEventListener('blur' , (e) => inputBlur(
   e, pwErrSection, ERROR_TYPE.PW_SECTION_BLANK,isValidPw(pwInput.value), ERROR_TYPE.PW_IS_NOT_VALID));


// 패스워드체크 리스너 - 패스워드체크 검증 조건 추가
pwCheckInput.addEventListener('input' , (e) => inputFocus(e, pwCheckErrSection));
pwCheckInput.addEventListener('focus' , (e) => inputFocus(e, pwCheckErrSection));
pwCheckInput.addEventListener('blur' , (e) => inputBlur(
   e, pwCheckErrSection, ERROR_TYPE.PW_SECTION_BLANK, isValidPwChecking(pwInput.value, pwCheckInput.value), ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD));


// 회원가입 함수
const submitSignupData = async function (e) {
   e.preventDefault();

   const emailInput = emailInput.value;
   const passInput = pwInput.value;
   const passCheckInput = pwCheckInput.value;

   // 계정정보 유효 확인
   let signupValid = true;
   const isValidPwChecking = passInput === passCheckInput;
   const triedSignupAccountData = {
      email : emailInput,
      password : passInput
   }

   // 오류가 초기화 됐을 때도 제출할 시 모든 오류가 표시되도록 모든 경우의 수 고려 필요
   try {
      const isThisEmailNotOccupied = await isThisEmailNotRegisteredInServer(triedSignupAccountData.email)
      if (!isValidEmail(emailInput)) {printErr(emailInput, emailErrSection, ERROR_TYPE.EMAIL_IS_NOT_VALID); signupValid = false;}; // 이메일 형식 안맞음!
      if (!isValidPw(passInput)) {printErr(pwInput, pwErrSection,ERROR_TYPE.PW_IS_NOT_VALID); signupValid = false;}; // 패스워드 형식이 맞지 않음!!
      if (!isValidPwChecking) {printErr(pwCheckInput, pwCheckErrSection, ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD); signupValid = false;}; // 패스워드 체크가 다름!
      if (!emailInput) {printErr(emailInput, emailErrSection, ERROR_TYPE.EMAIL_SECTION_BLANK); signupValid = false;}; // 이메일 없음!
      if (!passInput) {printErr(pwInput, pwErrSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 없음!
      if (!passCheckInput) {printErr(pwCheckInput, pwCheckErrSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 체크 없음!
      if (!isThisEmailNotOccupied) {throw new Error();}
   } catch {
      printErr(emailInput, emailErrSection, ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED); signupValid = false; // 이미 사용중인 이메일!   
      signupValid = false;
   }

   if (signupValid) {
      await accountRegisterWasSuccessful(triedSignupAccountData)
      //window.location.href = './folder.html';
   } 
   console.log('waiting time')
}

confirmBtn.addEventListener('click' , (e) => submitSignupData(e));