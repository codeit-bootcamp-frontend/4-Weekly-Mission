import { accountInfo } from "./javascript/account.js"
import { emailRegex, passwordRegex } from "./javascript/regex.js"
import { inputFunction } from "./javascript/signFunction.js"
import { passwordToggle } from "./javascript/passwordToggle.js"

// 
const inputEmail = document.querySelector('.email-input')
const inputPassword = document.querySelector('.password-input')
const inputCheckPassword = document.querySelector('.password-check-input')
const signButton = document.querySelector('.sign-btn')

// signFunction에서 조건을 주고 실행해야 하는 이벤트를 조절
const signupValidation = true

// 회원가입 버튼, 경우에 따른 케이스 적용
const submitButton = (e) => {
  e.preventDefault()

  const inputEmailValue = inputEmail.value
  const inputPasswordValue = inputPassword.value
  const inputPasswordCheckValue = inputCheckPassword.value
  const matchingAccountEmail = accountInfo.find((item) => item.email === inputEmailValue)
  const signupAccount = matchingAccountEmail?.email !== inputEmailValue && inputPasswordValue === inputPasswordCheckValue &&
  !inputEmailValue.match(emailRegex) && !inputPasswordValue.match(passwordRegex) && inputPasswordValue.length >= 8

  if (inputEmailValue === '') {
    return
  }
  else if (matchingAccountEmail?.email === inputEmailValue) {
    return
  }
  else if (signupAccount) {
    window.location.replace('folder.html')
  }
  else if (inputPasswordValue !== inputPasswordCheckValue) {
    inputCheckPassword.classList.add('input-error')
    inputCheckPassword.parentElement.parentElement.lastElementChild.textContent = '비밀번호가 일치하지 않아요.'
  }
}

// 이메일 입력란에 focus, blur 이벤트 추가
inputEmail.addEventListener('focus', (e) => inputFunction.emailFocus(e))
inputEmail.addEventListener('blur', (e) => inputFunction.emailBlur(e, emailRegex, accountInfo, inputEmail, signupValidation))

// 비밀번호 입력란에 focus, blur 이벤트 추가
inputPassword.addEventListener('focus', (e) => inputFunction.passwordFocus(e))
inputPassword.addEventListener('blur', (e) => inputFunction.passwordBlur(e, passwordRegex, signupValidation))

// 비밀번호 확인 입력란에 focus, blur 이벤트 추가
inputCheckPassword.addEventListener('focus', (e) => inputFunction.passwordCheckFocus(e))
inputCheckPassword.addEventListener('blur', (e) => inputFunction.passwordCheckBlur(e, inputPassword))

// 회원가입 버튼에 click 이벤트 추가
signButton.addEventListener('click', submitButton)
