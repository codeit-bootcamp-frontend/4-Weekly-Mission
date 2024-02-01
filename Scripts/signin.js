import {inputFocus, inputBlur, printErr, isThisLoginWasSuccessful, ERROR_TYPE} from './signFunction.js'
import pwTypeToggleBtnAssign from './pwTypeToggle.js';
import {RedirectToFolderIfClientHasToken} from './tokenHandle.js'

// 토큰이 있을 경우 folder로 리다이렉트
RedirectToFolderIfClientHasToken();

// 비밀번호 토글 초기화 및 함수 등록
pwTypeToggleBtnAssign();

const emailInput = document.querySelector('#emailInput');
const pwInput = document.querySelector('#pwInput');
const confirmBtn = document.querySelector('#confirmBtn');

// 에러 메시지 출력 장소
const emailErrTextSection = document.querySelector('#emailErr')
const pwErrTextSection = document.querySelector('#pwErr');


// 이메일 리스너
emailInput.addEventListener('input' , (e) => inputFocus(e, emailErrTextSection));
emailInput.addEventListener('focus' , (e) => inputFocus(e, emailErrTextSection));
emailInput.addEventListener('blur' , (e) => inputBlur(e, emailErrTextSection, ERROR_TYPE.EMAIL_SECTION_BLANK));


// 패스워드 리스너
pwInput.addEventListener('input' , (e) => inputFocus(e, pwErrTextSection));
pwInput.addEventListener('focus' , (e) => inputFocus(e, pwErrTextSection));
pwInput.addEventListener('blur' , (e) => inputBlur(e, pwErrTextSection, ERROR_TYPE.PW_SECTION_BLANK));


// 로그인 정보 제출
const signinDataSubmit = async function (e)  {
   e.preventDefault();
   
   //입력받은 값
   const emailValue = emailInput.value;
   const passwordValue = pwInput.value;
   const triedLoginAccountData = {
      email : emailValue,
      password : passwordValue
   }

   try {
      const signinAttemptResponse = await isThisLoginWasSuccessful(triedLoginAccountData)
      if (!signinAttemptResponse) {
         throw new Error()
      }
      window.location.href = './folder.html';
   } catch {
      printErr(emailInput, emailErrTextSection, ERROR_TYPE.EMAIL_MISMATCH_WITH_ACCOUNT);
      printErr(pwInput, pwErrTextSection, ERROR_TYPE.PW_MISMATCH_WITH_ACCOUNT);
   }
}

confirmBtn.addEventListener('click' , (event) => signinDataSubmit(event));

