import {inputFocus, inputBlur, printError} from './input.js'
import {mailFormat, loginCheck} from './accountData.js'
import passToggleReset from './passwordToggle.js';

// 비밀번호 토글 초기화 및 함수 등록
passToggleReset();

const loginEmailInput = document.querySelector('#loginEmailInput');
const loginPasswordInput = document.querySelector('#loginPasswordInput');
const confirmBtn = document.querySelector('#confirmBtn');

const errorMessage = {
   format : '올바른 이메일 주소가 아닙니다.' ,
   empty : '이메일을 입력해 주세요.',
   password : '비밀번호를 입력해 주세요.',
   mismatchEmail : '이메일을 확인해 주세요.',
   mismatchPassword : '비밀번호를 확인해 주세요.' 
}


// 이벤트 등록

// 이메일 리스너
const emailBlur = function() {
   const emptyCheck = loginEmailInput.value
   const formatCheck = emptyCheck.match(mailFormat)

   inputBlur(loginEmailInput, errorMessage.format, formatCheck)
   inputBlur(loginEmailInput, errorMessage.empty, emptyCheck)
}

loginEmailInput.addEventListener('focus' , inputFocus)
loginEmailInput.addEventListener('blur' , emailBlur)


// 패스워드 리스너
loginPasswordInput.addEventListener('focus' , inputFocus)
loginPasswordInput.addEventListener('blur' , () => inputBlur(loginPasswordInput, errorMessage.password))


// 로그인 정보 제출
const submitLoginData = function (event)  {
   event.preventDefault();
   
   //입력받은 값
   const emailValue = loginEmailInput.value
   const passwordValue = loginPasswordInput.value

   //에러메시지 출력 장소
   const emailErrorSection = loginEmailInput.parentElement.parentElement.lastElementChild
   const passwordErrorSection = loginPasswordInput.parentElement.parentElement.lastElementChild

   // 계정정보 유효 확인
   const isAccountSigned = loginCheck(emailValue, passwordValue)

   if (!isAccountSigned) {
      printError(loginEmailInput, emailErrorSection, errorMessage.mismatchEmail)
      printError(loginPasswordInput, passwordErrorSection, errorMessage.mismatchPassword)
   } else {
      window.location.replace("folder.html");
   }
}

confirmBtn.addEventListener('click' , submitLoginData)
