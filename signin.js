import { accountInfo } from "./javascript/account.js"
import { passwordToggle } from "./javascript/passwordToggle.js"
import { emailFocus, emailBlur, passwordFocus, passwordBlur } from "./javascript/signFunction.js"

// 
const inputEmail = document.querySelector('.email-input')
const inputPassword = document.querySelector('.password-input')
const passwordEncryptButtonList = document.querySelector('.eye-btn')
const signButton = document.querySelector('.sign-btn')
const errorEmailMessage = document.querySelector('.error-email-message')
const errorPasswordMessage = document.querySelector('.error-password-message')

// 로그인 버튼, 경우에 따른 케이스 적용
const onSubmit = (e) => {
  e.preventDefault()

  const inputEmailValue = inputEmail.value
  const inputPasswordValue = inputPassword.value
  const matchedEmail = accountInfo.find((item) => item.email === inputEmailValue)?.email
  const matchedPassword = accountInfo.find((item) => item.password === inputPasswordValue)?.password
  

  const inputErrorHandler = (inputType, errorMessage, type) => {
    if (type === 'email') {
      inputType.classList.add('input-error')
      errorEmailMessage.textContent = errorMessage
      return
    }
    inputType.classList.add('input-error')
    errorPasswordMessage.textContent = errorMessage
  }

  if (inputEmailValue === matchedEmail && inputPasswordValue === matchedPassword) {
    window.location.assign('folder.html')
  }
  else if (inputEmailValue === matchedEmail && inputPasswordValue !== matchedPassword) {
    inputErrorHandler(inputPassword, '비밀번호를 확인해 주세요', 'password')
  }
  else if (inputEmailValue !== matchedEmail && inputPasswordValue === matchedPassword) {
    inputErrorHandler(inputEmail, '이메일을 확인해 주세요', 'email')
  }
  else {
    inputErrorHandler(inputPassword, '비밀번호를 확인해 주세요', 'password')
    inputErrorHandler(inputEmail, '이메일을 확인해 주세요', 'email')
  }
}

// 이메일 입력란에 focus, blur 이벤트 추가
inputEmail.addEventListener('focus', () => emailFocus(inputEmail, errorEmailMessage))
inputEmail.addEventListener('blur', () => emailBlur(inputEmail, errorEmailMessage))

// 비밀번호 입력란에 focus, blur 이벤트 추가
inputPassword.addEventListener('focus', () => passwordFocus(inputPassword, errorPasswordMessage))
inputPassword.addEventListener('blur', () => passwordBlur(inputPassword, errorPasswordMessage))

// 비밀번호 암호화 토글 click 이벤트 추가
passwordEncryptButtonList.addEventListener('click', () => passwordToggle(inputPassword))

// 로그인 버튼에 click 이벤트 추가
signButton.addEventListener('click', onSubmit)