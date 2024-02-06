import { accountInfo } from "./account.js"
import { register } from "./api/auth/register.js"
import { passwordToggle } from "./passwordToggle.js"
import { emailRegex, passwordRegex } from "./regex.js"
import { emailFocus, emailBlur, passwordFocus, passwordBlur, passwordCheckFocus, passwordCheckBlur } from "./signFunction.js"

// 
const inputEmail = document.querySelector('.email-input')
const inputPassword = document.querySelector('.password-input')
const inputCheckPassword = document.querySelector('.password-check-input')
const passwordEncryptButton = document.querySelector('.eye-btn')
const passwordEncryptButtonList = document.querySelector('.eye-btn-check')
const errorEmailMessage = document.querySelector('.error-email-message')
const errorPasswordMessage = document.querySelector('.error-password-message')
const errorPasswordCheckMessage = document.querySelector('.error-password-check-message')
const signButton = document.querySelector('.sign-btn')

// 토큰이 존재한다면 folder.html 이동
const tokenExistence = localStorage.getItem('accessToken')
tokenExistence ? window.location.assign('folder.html') : ''

// signFunction에서 조건을 주고 실행해야 하는 이벤트를 조절
const signupValidation = true

// 회원가입 버튼, 경우에 따른 케이스 적용
const onSubmit = (e) => {
  e.preventDefault()

  const inputEmailValue = inputEmail.value
  const inputPasswordValue = inputPassword.value
  const inputPasswordCheckValue = inputCheckPassword.value
  const findEmail = accountInfo.find((item) => item.email === inputEmailValue)?.email
  const matchedEmail = findEmail === inputEmailValue
  const matchedPasswordAndPasswordCheck = inputPasswordValue === inputPasswordCheckValue
  const checkEmailRegex = inputEmailValue.match(emailRegex)
  const checkPasswordRegex = inputPasswordValue.match(passwordRegex)
  const checkPasswordLength = inputPasswordValue.length >= 8
  const signupAccount = !matchedEmail && matchedPasswordAndPasswordCheck && checkEmailRegex
  && checkPasswordRegex && checkPasswordLength
  
  if (inputEmailValue === '') {
    return
  }
  if (matchedEmail) {
    return
  }
  if (signupAccount) {
    register()
    return
  }
  if (!matchedPasswordAndPasswordCheck) {
    inputCheckPassword.classList.add('input-error')
    errorPasswordCheckMessage.textContent = '비밀번호가 일치하지 않아요.'
  }
}

// 이메일 입력란에 focus, blur 이벤트 추가
inputEmail.addEventListener('focus', () => emailFocus(inputEmail, errorEmailMessage))
inputEmail.addEventListener('blur', () => emailBlur(inputEmail, errorEmailMessage, signupValidation))

// 비밀번호 입력란에 focus, blur 이벤트 추가
inputPassword.addEventListener('focus', () => passwordFocus(inputPassword, errorPasswordMessage))
inputPassword.addEventListener('blur', () => passwordBlur(inputPassword, errorPasswordMessage, signupValidation))

// 비밀번호 확인 입력란에 focus, blur 이벤트 추가
inputCheckPassword.addEventListener('focus', () => passwordCheckFocus(inputCheckPassword, errorPasswordCheckMessage))
inputCheckPassword.addEventListener('blur', () => passwordCheckBlur(inputCheckPassword, errorPasswordCheckMessage, inputPassword))

// 비밀번호 암호화 토글 click 이벤트 추가 
passwordEncryptButton.addEventListener('click', () => passwordToggle(inputPassword))
passwordEncryptButtonList.addEventListener('click', () => passwordToggle(inputCheckPassword))

// 회원가입 버튼에 click 이벤트 추가
signButton.addEventListener('click', onSubmit)