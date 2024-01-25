import {inputFocus, inputBlur, printError, errorMessage} from './input.js'
import {loginCheck} from './accountData.js'
import passToggleReset from './passwordToggle.js';

// 비밀번호 토글 초기화 및 함수 등록
passToggleReset();

const loginEmailInput = document.querySelector('#loginEmailInput');
const loginPasswordInput = document.querySelector('#loginPasswordInput');
const confirmBtn = document.querySelector('#confirmBtn');


// 이메일 리스너
loginEmailInput.addEventListener('focus' , inputFocus)
loginEmailInput.addEventListener('blur' , () => inputBlur(loginEmailInput, errorMessage.email))


// 패스워드 리스너
loginPasswordInput.addEventListener('focus' , inputFocus)
loginPasswordInput.addEventListener('blur' , () => inputBlur(loginPasswordInput, errorMessage.password))


// 로그인 정보 제출
const submitLoginData = function (event)  {
   event.preventDefault();
   
   //입력받은 값
   const emailValue = loginEmailInput.value
   const passwordValue = loginPasswordInput.value
   
   // 계정정보 유효 확인
   const isAccountSigned = loginCheck(emailValue, passwordValue)

   //에러메시지 출력 장소
   const emailErrorSection = loginEmailInput.parentElement.parentElement.lastElementChild
   const passwordErrorSection = loginPasswordInput.parentElement.parentElement.lastElementChild

   if (!isAccountSigned) {
      printError(loginEmailInput, emailErrorSection, errorMessage.mismatchEmail)
      printError(loginPasswordInput, passwordErrorSection, errorMessage.mismatchPassword)
   } else {
      window.location.href = './folder.html'
   }
}

confirmBtn.addEventListener('click' , submitLoginData)