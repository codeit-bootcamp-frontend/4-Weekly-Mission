import { accountInfo } from "./javascript/account.js"
import { emailRegex, passwordRegex } from "./javascript/regex.js"
import { inputFunction } from "./javascript/signFunction.js"
import { passwordToggle } from "./javascript/passwordToggle.js"

// 
const inputEmail = document.querySelector('.email-input')
const inputPassword = document.querySelector('.password-input')
const signButton = document.querySelector('.sign-btn')

// 로그인 버튼, 경우에 따른 케이스 적용
const submitButton = (e) => {
  e.preventDefault()

  const inputEmailValue = inputEmail.value
  const inputPasswordValue = inputPassword.value
  const matchingAccountEmail = accountInfo.find((item) => item.email === inputEmailValue)
  const matchingAccountPassword = accountInfo.find((item) => item.password === inputPasswordValue)
  

  const inputErrorHandler = (inputType, errorMessage, type) => {
    if (type === 'email') {
      inputType.classList.add('input-error')
      inputType.parentElement.lastElementChild.textContent = errorMessage
    }
    else {
      inputType.classList.add('input-error')
      inputType.parentElement.parentElement.lastElementChild.textContent = errorMessage
    }
  }

  if (inputEmailValue === matchingAccountEmail?.email && inputPasswordValue === matchingAccountPassword?.password) {
    window.location.replace('folder.html')
  }
  else if (inputEmailValue === matchingAccountEmail?.email && inputPasswordValue !== matchingAccountPassword?.password) {
    inputErrorHandler(inputPassword, '비밀번호를 확인해 주세요', 'password')
  }
  else if (inputEmailValue !== matchingAccountEmail?.email && inputPasswordValue === matchingAccountPassword?.password) {
    inputErrorHandler(inputEmail, '이메일을 확인해 주세요', 'email')
  }
  else {
    inputErrorHandler(inputPassword, '비밀번호를 확인해 주세요', 'password')
    inputErrorHandler(inputEmail, '이메일을 확인해 주세요', 'email')
  }
}

// 이메일 입력란에 focus, blur 이벤트 추가
inputEmail.addEventListener('focus', (e) => inputFunction.emailFocus(e))
inputEmail.addEventListener('blur', (e) => inputFunction.emailBlur(e, emailRegex, accountInfo))

// 비밀번호 입력란에 focus, blur 이벤트 추가
inputPassword.addEventListener('focus', (e) => inputFunction.passwordFocus(e))
inputPassword.addEventListener('blur', (e) => inputFunction.passwordBlur(e, passwordRegex))

// 로그인 버튼에 click 이벤트 추가
signButton.addEventListener('click', submitButton)