import {inputFocus, emailBlur, passwordBlur} from './focus.js'
import {loginCheck} from './accountData.js'
import passToggleReset from './passwordToggle.js';

// 비밀번호 토글 초기화
passToggleReset();

const inputtedLoginEmailCheck = document.querySelector('#loginEmailInput');
const inputtedLoginPasswordCheck = document.querySelector('#loginPasswordInput');
const confirmBtn = document.querySelector('#confirmBtn');

// 기본 이벤트 등록

// 이메일 포커스
inputtedLoginEmailCheck.addEventListener('focus' , inputFocus)
inputtedLoginEmailCheck.addEventListener('blur' , emailBlur)

// 패스워드 포커스
inputtedLoginPasswordCheck.addEventListener('focus' , inputFocus)
inputtedLoginPasswordCheck.addEventListener('blur' , passwordBlur)


// 로그인 정보 제출
const submitLoginData = function (event)  {
   event.preventDefault();
   
   //입력받은 값
   const emailValue = inputtedLoginEmailCheck.value
   const passwordValue = inputtedLoginPasswordCheck.value

   //에러메시지 출력 장소
   const emailErrorMessage = inputtedLoginEmailCheck.parentElement.parentElement.lastElementChild
   const passwordErrorMessage = inputtedLoginPasswordCheck.parentElement.parentElement.lastElementChild

   // 계정정보 유효 확인
   const isAccountSigned = loginCheck(emailValue, passwordValue)

   if (!isAccountSigned) {
      inputtedLoginEmailCheck.classList.add('signError')
      inputtedLoginPasswordCheck.classList.add('signError')
      emailErrorMessage.textContent = '이메일을 확인해 주세요.'
      passwordErrorMessage.textContent = '비밀번호를 확인해 주세요.' 
   } else {
      window.location.replace("folder.html");
   }
}

confirmBtn.addEventListener('click' , submitLoginData)
