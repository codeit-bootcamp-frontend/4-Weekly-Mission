import { putError, removeError, emailValid, passwordValid, togglePW } from "../src/checkError.js"

const emailInput = document.querySelector('#email')
const errorEmail = document.querySelector('.errorEmail')
const pwInput = document.querySelector('#password')
const passwordCheck = document.querySelector('#passwordCheck')
const errorPw = document.querySelector('.errorPw')
const errorPwCheck = document.querySelector('.errorPwCheck')
const form = document.querySelector('form')
const eye = document.querySelector('.eye')
const eyeCheck = document.querySelector('.eyeCheck')

// email
function checkDuplication(emailId) {
  fetch('https://bootcamp-api.codeit.kr/api/check-email', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: emailId })
  })
  .then((response) => {
    return response.status===200 ? true : false
  })
}

function emailError(email) {
  if(!email.trim()) {
    putError({input: emailInput, errorMessage: errorEmail}, '이메일을 입력해 주세요.')
    return false;
  }
  if(!emailValid(email)) {
    putError({input: emailInput, errorMessage: errorEmail}, '올바른 이메일 주소가 아닙니다.')
    return false;
  }
  if(!checkDuplication(email)) {
    putError({input: emailInput, errorMessage: errorEmail}, '이미 사용 중인 이메일입니다.')
    return false;
  }
  removeError({input: emailInput, errorMessage: errorEmail})
  return true
}

emailInput.addEventListener('focusout', (e) => {
  emailError(e.target.value)
})

// password
function pwError(password) {
  if(!password.trim() || !passwordValid(password)) {
    putError({input: pwInput, errorMessage: errorPw}, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.')
    return false;
  }
  removeError({input: pwInput, errorMessage: errorPw})
  return true
}

pwInput.addEventListener('focusout', (e) => pwError(e.target.value))

// check password
function checkPwError(password) {
  if(!password.trim() || !passwordValid(password)) {
    putError({input: passwordCheck, errorMessage: errorPwCheck}, '비밀번호가 일치하지 않아요.')
    return false;
  }
  removeError({input: passwordCheck, errorMessage: errorPwCheck})
  return true
}

passwordCheck.addEventListener('focusout', (e) => checkPwError(e.target.value))

//password toggle
eye.addEventListener('click', () => togglePW(pwInput, eye))

//check password toggle
eyeCheck.addEventListener('click', () => togglePW(passwordCheck, eyeCheck))

//로그인 했을 때 /folder로 이동 & 확인해주세요
function signUpApi(mail, pw) {
  const isEmailValid = emailError(mail)
  const isPasswordValid = pwError(pw)
  const isPasswordCheckValid = checkPwError(pw)
  if(isEmailValid && isPasswordValid && isPasswordCheckValid) {
    fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        email: mail, 
        password: pw
      })
    })
    .then((response) => response.json())
    .then((result) => {
      if(result.accessToken) {
        localStorage.setItem('accessToken', result.accessToken)
        location.href='../folder.html'
      }
    })
    .catch((error) => console.log(error))
  }
}

//페이지 로드 시 accessToken 갖고 있으면 /folder로 이동
document.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('accessToken')) {
    location.href='../folder.html'
  }
})

function signUp(e) {
  e.preventDefault()
  signUpApi(emailInput.value, pwInput.value)
}

form.addEventListener('submit', signUp)