import { putError, removeError, emailValid, togglePW } from "../src/checkError.js"
// import { postApiSignIn } from "./getSignIn.js"
const emailInput = document.querySelector('#email')
const errorEmail = document.querySelector('.errorEmail')
const pwInput = document.querySelector('#password')
const errorPw = document.querySelector('.errorPw')
const form = document.querySelector('form')
const eye = document.querySelector('.eye')

// email
function emailError(email) {
  if(!email.trim()) {
    putError({input: emailInput, errorMessage: errorEmail}, '이메일을 입력해 주세요.')
    return;
  }
  if(!emailValid(email)) {
    putError({input: emailInput, errorMessage: errorEmail}, '올바른 이메일 주소가 아닙니다.')
    return;
  }
  removeError({input: emailInput, errorMessage: errorEmail})
}

emailInput.addEventListener('focusout', (e) => {
  emailError(e.target.value)
})

// password
function pwError(password) {
  if(!password.trim()) {
    putError({input: pwInput, errorMessage: errorPw}, '비밀번호를 입력해 주세요.')
    return;
  }
  removeError({input: pwInput, errorMessage: errorPw})
}

pwInput.addEventListener('focusout', (e) => pwError(e.target.value))

//password toggle
eye.addEventListener('click', () => togglePW(pwInput, eye))

// 로그인 했을 때 /folder로 이동 & 확인해주세요
function postApiSignIn(mail, pw) {
  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: 'test@codeit.com',
      password: 'sprint101'
    })
  })
  .then((response) => response.json())
  .then((result) => {
    if(result.accessToken) {
      localStorage.setItem('accessToken', result.accessToken) //저장
      location.href='../folder.html'
    } else {
      putError({input: emailInput, errorMessage: errorEmail}, '이메일을 확인해 주세요.')
      putError({input: pwInput, errorMessage: errorPw}, '비밀번호를 확인해 주세요.')
    }
  })
  .catch(error => console.log(error))
}

//페이지 로드 시 accessToken 갖고 있으면 /folder로 이동
document.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('accessToken')) {
    local.href('../folder.html')
  }
})

function login(e) {
  e.preventDefault();
  postApiSignIn(emailInput.value, pwInput.value)
}

form.addEventListener('submit', login)