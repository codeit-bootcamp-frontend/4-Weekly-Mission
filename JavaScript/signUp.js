import {inputFocus, inputBlur, printError, errorMessage} from './input.js'
import {accountCheck, formatCheck, passFormatCheck} from './accountData.js'
import passToggleReset from './passwordToggle.js';

// 비밀번호 토글 초기화
passToggleReset();


const signupEmailInput = document.querySelector('#signupEmailInput')
const signupPasswordInput = document.querySelector('#signupPasswordInput')
const signupPasswordCheckInput = document.querySelector('#signupPasswordCheckInput')
const confirmBtn = document.querySelector('#confirmBtn');

const emailErrorSection = signupEmailInput.parentElement.parentElement.lastElementChild
const passwordErrorSection = signupPasswordInput.parentElement.parentElement.lastElementChild


// 이메일 리스너
const signupBlur = function () {
   const isAccountRegistered = accountCheck(signupEmailInput.value)
   inputBlur(signupEmailInput, errorMessage.email)

   if (isAccountRegistered) {printError(signupEmailInput, emailErrorSection,errorMessage.registeredEmail)}
}

signupEmailInput.addEventListener('focus' , inputFocus)
signupEmailInput.addEventListener('blur' , signupBlur)

// 패스워드 리스너
const passwordBlur = function () {
   inputBlur(signupPasswordInput, errorMessage.passwordNotValid, passFormatCheck(signupPasswordInput.value))
   inputBlur(signupPasswordInput, errorMessage.password)
}

signupPasswordInput.addEventListener('focus' , inputFocus)
signupPasswordInput.addEventListener('blur' , passwordBlur)


// 패스워드체크 리스너
const passCheck = () => (signupPasswordInput.value == signupPasswordCheckInput.value)
const passBlur = function () {
   inputBlur(signupPasswordCheckInput, errorMessage.mismatchPasswordCheck, passCheck())
   inputBlur(signupPasswordCheckInput, errorMessage.password)
}

signupPasswordCheckInput.addEventListener('focus' , inputFocus)
signupPasswordCheckInput.addEventListener('blur' , passBlur)


// 회원가입 함수
const submitSignupData = function (event) {
   event.preventDefault();
   
   //입력받은 값
   const emailValue = signupEmailInput.value
   const passwordValue = signupPasswordInput.value
   const passwordCheck = signupPasswordCheckInput.value

   //에러메시지 출력 장소
   const passCheckErrorSection = signupPasswordCheckInput.parentElement.parentElement.lastElementChild

   // 계정정보 유효 확인
   const isAccountSigned = accountCheck(emailValue)
   const passCheckCorrect = passwordValue === passwordCheck

   let signupValid = true
   // 오류가 초기화 됐을 때도 제출할 시 모든 오류가 표시되도록 모든 경우의 수 고려 필요
   if (!emailValue) {printError(signupEmailInput, emailErrorSection, errorMessage.email); signupValid = false;} // 이메일 없음!
   if (!formatCheck(emailValue)) {printError(signupEmailInput, emailErrorSection, errorMessage.emailNotValid); signupValid = false;} // 이메일 형식 안맞음!
   if (!passwordValue) {printError(signupPasswordInput, passwordErrorSection,errorMessage.password); signupValid = false;} // 패스워드 없음!
   if (!passFormatCheck(passwordValue)) {printError(signupPasswordInput, passwordErrorSection,errorMessage.passwordNotValid); signupValid = false;} // 패스워드 형식이 맞지 않음!!
   if (!passwordCheck) {printError(signupPasswordCheckInput, passCheckErrorSection,errorMessage.password); signupValid = false;} // 패스워드 체크 없음!
   if (!passCheckCorrect) {printError(signupPasswordCheckInput, passCheckErrorSection, errorMessage.mismatchPasswordCheck); signupValid = false;} // 패스워드 체크가 다름!
   if (isAccountSigned) {printError(signupEmailInput, emailErrorSection, errorMessage.registeredEmail); signupValid = false;} // 이미 사용중인 이메일!   

   if (signupValid) {
      window.location.href = './folder.html'
   } 
}

confirmBtn.addEventListener('click' , submitSignupData)