import {inputFocus, inputBlur, printError, accountRegisterWasSuccessful, ERROR_TYPE} from './signFunction.js';
import {formatCheck, passFormatCheck, isPwCheckWasCorrectWithPw, isThisEmailNotRegisteredInServer} from './accountData.js';
import pwTypeToggleAssign from './pwTypeToggle.js';
import {RedirectToFolderIfClientHasToken} from './tokenHandle.js'
// 토큰이 있을 경우 folder로 리다이렉트
RedirectToFolderIfClientHasToken();

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
signupEmailInput.addEventListener('input' , (e) => inputFocus(e, emailErrorSection));
signupEmailInput.addEventListener('focus' , (e) => inputFocus(e, emailErrorSection));
signupEmailInput.addEventListener('blur' , (e) => inputBlur(
   e, emailErrorSection, ERROR_TYPE.EMAIL_SECTION_BLANK,!isThisEmailNotRegisteredInServer(signupEmailInput.value), ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED));


// 패스워드 리스너 - 패스워드 형식 검증 조건 추가
signupPasswordInput.addEventListener('input' , (e) => inputFocus(e, passwordErrorSection));
signupPasswordInput.addEventListener('focus' , (e) => inputFocus(e, passwordErrorSection));
signupPasswordInput.addEventListener('blur' , (e) => inputBlur(
   e, passwordErrorSection, ERROR_TYPE.PW_SECTION_BLANK,passFormatCheck(signupPasswordInput.value), ERROR_TYPE.PW_IS_NOT_VALID));


// 패스워드체크 리스너 - 패스워드체크 검증 조건 추가
signupPasswordCheckInput.addEventListener('input' , (e) => inputFocus(e, passCheckErrorSection));
signupPasswordCheckInput.addEventListener('focus' , (e) => inputFocus(e, passCheckErrorSection));
signupPasswordCheckInput.addEventListener('blur' , (e) => inputBlur(
   e, passCheckErrorSection, ERROR_TYPE.PW_SECTION_BLANK, isPwCheckWasCorrectWithPw(signupPasswordInput.value, signupPasswordCheckInput.value), ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD));


// 회원가입 함수
const submitSignupData = async function (e) {
   e.preventDefault();

   const emailInput = signupEmailInput.value;
   const passInput = signupPasswordInput.value;
   const passCheckInput = signupPasswordCheckInput.value;

   // 계정정보 유효 확인
   let signupValid = true;
   const isPwCheckWasCorrectWithPw = passInput === passCheckInput;
   const triedSignupAccountData = {
      email : emailInput,
      password : passInput
   }
   


   // 오류가 초기화 됐을 때도 제출할 시 모든 오류가 표시되도록 모든 경우의 수 고려 필요
   try {
      const isThisEmailNotOccupied = await isThisEmailNotRegisteredInServer(triedSignupAccountData.email)
      if (!formatCheck(emailInput)) {printError(signupEmailInput, emailErrorSection, ERROR_TYPE.EMAIL_IS_NOT_VALID); signupValid = false;}; // 이메일 형식 안맞음!
      if (!passFormatCheck(passInput)) {printError(signupPasswordInput, passwordErrorSection,ERROR_TYPE.PW_IS_NOT_VALID); signupValid = false;}; // 패스워드 형식이 맞지 않음!!
      if (!isPwCheckWasCorrectWithPw) {printError(signupPasswordCheckInput, passCheckErrorSection, ERROR_TYPE.PW_CHECK_MISMATCH_WITH_PASSWORD); signupValid = false;}; // 패스워드 체크가 다름!
      if (!emailInput) {printError(signupEmailInput, emailErrorSection, ERROR_TYPE.EMAIL_SECTION_BLANK); signupValid = false;}; // 이메일 없음!
      if (!passInput) {printError(signupPasswordInput, passwordErrorSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 없음!
      if (!passCheckInput) {printError(signupPasswordCheckInput, passCheckErrorSection,ERROR_TYPE.PW_SECTION_BLANK); signupValid = false;}; // 패스워드 체크 없음!
      if (!isThisEmailNotOccupied) {throw new Error();}
   } catch {
      printError(signupEmailInput, emailErrorSection, ERROR_TYPE.EMAIL_IS_ALREADY_REGISTERED); signupValid = false; // 이미 사용중인 이메일!   
      signupValid = false;
   }

   if (signupValid) {
      await accountRegisterWasSuccessful(triedSignupAccountData)
      //window.location.href = './folder.html';
   } 
   console.log('waiting time')
}

confirmBtn.addEventListener('click' , (e) => submitSignupData(e));