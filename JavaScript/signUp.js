import {inputFocus, inputBlur, printError} from './input.js'
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

const errorMessage = {
   email : '이메일을 입력해 주세요.',
   password : '비밀번호를 입력해 주세요.',
   mismatchEmail : '이미 사용중인 이메일입니다.',
   mismatchPassword : '비밀번호가 일치하지 않아요.',
   passwordNotValid : '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
}

// 이벤트 등록

// 이메일 리스너
const signUpBlur = function () {
   const isAccountRegistered = accountCheck(signupEmailInput.value)
   inputBlur(signupEmailInput, errorMessage.email)

   if (isAccountRegistered) {printError(signupEmailInput, emailErrorSection,errorMessage.mismatchEmail)}
}

signupEmailInput.addEventListener('focus' , inputFocus)
signupEmailInput.addEventListener('blur' , signUpBlur)

// 패스워드 리스너
const passwordBlur = function () {
   const asdf = passFormatCheck(signupPasswordInput.value)
   console.log(asdf)

   inputBlur(signupPasswordInput, errorMessage.passwordNotValid, passFormatCheck(signupPasswordInput.value))
   inputBlur(signupPasswordInput, errorMessage.password)
   
}

signupPasswordInput.addEventListener('focus' , inputFocus)
signupPasswordInput.addEventListener('blur' , passwordBlur)

// 패스워드체크 리스너
const passCheck = () => (signupPasswordInput.value == signupPasswordCheckInput.value)
const passBlur = function () {
   inputBlur(signupPasswordCheckInput, errorMessage.mismatchPassword, passCheck())
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
   const isPasswordCorrect = passwordValue === passwordCheck

   if (!emailValue) {printError(signupEmailInput, emailErrorSection,errorMessage.email)};
   if (!passwordValue) {printError(signupPasswordInput, passwordErrorSection,errorMessage.password)};
   if (!passwordCheck) {printError(signupPasswordCheckInput, passCheckErrorSection,errorMessage.password)};

   if (!isAccountSigned && isPasswordCorrect && formatCheck(emailValue)) {
      window.location.href = './folder.html'
   } else if (!isPasswordCorrect) {
      printError(signupPasswordCheckInput, passCheckErrorSection, errorMessage.mismatchPassword)
   }


}

confirmBtn.addEventListener('click' , submitSignupData)