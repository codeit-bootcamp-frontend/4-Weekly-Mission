const emailInput = document.querySelector('#email')
const errorMessage = document.querySelector('.errorMsg')
const pwInput = document.querySelector('#password')
const errorPw = document.querySelector('.errorPw')
const button = document.querySelector('.btn')
const form = document.querySelector('form')
const eye = document.querySelector('.eye')
const inputs = document.querySelectorAll('.signInput')

// 입력해주세요
function emailError(e) {
  if(!e.target.value.trim()) {
    errorMessage.textContent = '이메일을 입력해 주세요.'
    emailInput.classList.add('inputError')
  } else{
    errorMessage.textContent=''
    emailInput.classList.remove('inputError')
  }
}
function pwError(e) {
  if(!e.target.value.trim()) {
    errorPw.textContent = '비밀번호를 입력해 주세요.'
    pwInput.classList.add('inputError')
  } else{
    errorPw.textContent=''
    pwInput.classList.remove('inputError')
  }
}

// 올바른 이메일 주소가 아닙니다
function emailCheck(e) {
  const E_STYLE = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  if(E_STYLE.test(e.target.value)) {
    errorMessage.content=''
    emailInput.classList.remove('inputError')
  } else{
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
    emailInput.classList.add('inputError')
  }
}

// 로그인 했을 때 /folder로 이동 & 확인해주세요
function login(e) {
  if(emailInput.value=="test@codeit.com" && pwInput.value=="codeit101") {
    emailInput.classList.remove('inputError')
    pwInput.classList.remove('inputError')
    return true
  } else {
    errorMessage.textContent = '이메일을 확인해 주세요.'
    errorPw.textContent = '비밀번호를 확인해 주세요.'
    emailInput.classList.add('inputError')
    pwInput.classList.add('inputError')
    return false
  }
}

//눈사진toggle
function eye_toggle(e) {
  const IS_EYE_ON = e.target.getAttribute('src')=="../images/eye-off.svg"
  e.target.setAttribute('src', IS_EYE_ON ? '../images/eye-on.svg' : '../images/eye-off.svg')
  pwInput.setAttribute('type', IS_EYE_ON ? "" : 'password')
}

emailInput.addEventListener('focusout', emailError)
pwInput.addEventListener('focusout', pwError)
emailInput.addEventListener('focusout', emailCheck)
form.addEventListener('submit', login)
eye.addEventListener('click', eye_toggle)