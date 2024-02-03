import { emailDoubleCheck } from "./api/auth/emailCheck.js"
import { emailRegex, passwordRegex } from "./regex.js"

// 이메일 입력란에서 focus 일 때 이벤트 핸들러
const emailFocus = (inputEmail, errorMessage) => {
  inputEmail.classList.remove('input-error')
  errorMessage.textContent = ''
}

// 이메일 입력란에서 blur 일 때 이벤트 핸들러
const emailBlur = (inputEmail, errorMessage, signupValidation = false) => {
  if (inputEmail.value === '') {
    inputEmail.classList.add('input-error')
    errorMessage.textContent = '이메일을 입력해 주세요.'
    return
  }
  if (!inputEmail.value.match(emailRegex)) {
    inputEmail.classList.add('input-error')
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
    return
  }
  if (signupValidation) {
    emailDoubleCheck()
    return
  }
}

// 비밀번호 입력란에 focus 일 때 이벤트 핸들러
const passwordFocus = (inputPassword, errorMessage) => {
  inputPassword.classList.remove('input-error')
  errorMessage.textContent = ''
}

// 비밀번호 입력란에서 blur 일 때 이벤트 핸들러
const passwordBlur =  (inputPassword, errorMessage, signupValidation = false) => {
  if (inputPassword.value === '') {
    inputPassword.classList.add('input-error')
    errorMessage.textContent = '비밀번호를 입력해 주세요.'
    return
  }
  if (signupValidation && !inputPassword.value.match(passwordRegex)) {
    inputPassword.classList.add('input-error')
    errorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    return
  }
}

// 비밀번호 확인 입력란에 focus 일 때 이벤트 핸들러
const passwordCheckFocus = (inputCheckPassword, errorMessage) => {
  inputCheckPassword.classList.remove('input-error')
  errorMessage.textContent = ''
}

// 비밀번호 확인 입력란에서 blur 일 때 이벤트 핸들러
const passwordCheckBlur = (inputCheckPassword, errorMessage, inputPassword) => {
  if (inputCheckPassword.value !== inputPassword.value) {
    inputCheckPassword.classList.add('input-error')
    errorMessage.textContent = '비밀번호가 일치하지 않아요.'
  }
}

export { emailFocus, emailBlur, passwordFocus, passwordBlur, passwordCheckFocus, passwordCheckBlur }