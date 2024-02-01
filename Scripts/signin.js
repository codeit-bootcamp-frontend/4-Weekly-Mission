import {inputFocus, inputBlur, printError, isThisLoginWasSuccessful, ERROR_TYPE} from './signFunction.js'
import pwTypeToggleBtnAssign from './pwTypeToggle.js';
import {RedirectToFolderIfClientHasToken} from './tokenHandle.js'

// 토큰이 있을 경우 folder로 리다이렉트
RedirectToFolderIfClientHasToken();

// 비밀번호 토글 초기화 및 함수 등록
pwTypeToggleBtnAssign();

const loginEmailInput = document.querySelector('#loginEmailInput');
const loginPasswordInput = document.querySelector('#loginPasswordInput');
const confirmBtn = document.querySelector('#confirmBtn');

// 에러 메시지 출력 장소
const emailErrorSection = loginEmailInput.parentElement.lastElementChild;
const passwordErrorSection = loginPasswordInput.parentElement.parentElement.lastElementChild;


// 이메일 리스너
loginEmailInput.addEventListener('input' , (e) => inputFocus(e, emailErrorSection));
loginEmailInput.addEventListener('focus' , (e) => inputFocus(e, emailErrorSection));
loginEmailInput.addEventListener('blur' , (e) => inputBlur(e, emailErrorSection, ERROR_TYPE.EMAIL_SECTION_BLANK));


// 패스워드 리스너
loginPasswordInput.addEventListener('input' , (e) => inputFocus(e, passwordErrorSection));
loginPasswordInput.addEventListener('focus' , (e) => inputFocus(e, passwordErrorSection));
loginPasswordInput.addEventListener('blur' , (e) => inputBlur(e, passwordErrorSection, ERROR_TYPE.PW_SECTION_BLANK));


// 로그인 정보 제출
const signinDataSubmit = async function (e)  {
   e.preventDefault();
   
   //입력받은 값
   const emailValue = loginEmailInput.value;
   const passwordValue = loginPasswordInput.value;
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
      printError(loginEmailInput, emailErrorSection, ERROR_TYPE.EMAIL_MISMATCH_WITH_ACCOUNT);
      printError(loginPasswordInput, passwordErrorSection, ERROR_TYPE.PW_MISMATCH_WITH_ACCOUNT);
   }
}

confirmBtn.addEventListener('click' , (event) => signinDataSubmit(event));

