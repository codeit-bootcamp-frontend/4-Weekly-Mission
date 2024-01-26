const emailInput = document.querySelector('#email')
const errorMessage = document.querySelector('.errorM')
const pwInput = document.querySelector('#password')
const passwordCheck = document.querySelector('#passwordCheck')
const errorPw = document.querySelector('.errorP')
const errorPwCheck = document.querySelector('.errorPCheck')
const form = document.querySelector('form')
const eye = document.querySelector('.eye')
const eyeCheck = document.querySelector('.eyeCheck')

// 입력해주세요
function emailError(e) {
  if(!e.target.value.trim()) {
    errorMessage.textContent = '이메일을 입력해 주세요.'
    emailInput.classList.add('inputError')
  } else if(e.target.value=="test@codeit.com") {
    errorMessage.textContent = '이미 사용 중인 이메일입니다.'
    emailInput.classList.add('inputError')
  } else{
    errorMessage.textContent=''
    emailInput.classList.remove('inputError')
  }
}

function pwCheck(pw) {
  const REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
  if(REG.test(pw)) return true
  return false
}
function pwError(e) {
  let myPw = e.target.value
  if(!myPw.trim()) {
    errorPw.textContent = '비밀번호를 입력해 주세요.'
    pwInput.classList.add('inputError')
  } else if(!pwCheck(myPw)) {
    errorPw.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
    pwInput.classList.add('inputError')
  } else{
    errorPw.textContent=''
    pwInput.classList.remove('inputError')
  }
}
function pwErrorCheck(e) {
  if(pwInput.value!==passwordCheck.value) {
    errorPwCheck.textContent = '비밀번호가 일치하지 않아요.'
    pwInput.classList.add('inputError')
  } else{
    errorPwCheck.textContent=''
    pwInput.classList.remove('inputError')
  }
}

// 올바른 이메일 주소가 아닙니다
function emailCheck(e) {
  let e_style = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  if(e.target.value.trim() && !e_style.test(e.target.value)) {
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
    emailInput.classList.add('inputError')
  } else{
    errorMessage.content=''
    emailInput.classList.remove('inputError')
  }
}

// 로그인 했을 때 /folder로 이동 & 확인해주세요
function login(e) {
  if(emailInput.value!=="test@codeit.com" && pwInput.value!=="codeit101") {
    return true
  } else return false
}

//눈사진toggle
function eye_toggle(e) {
  if(e.target.getAttribute('src')=="../images/eye-off.svg") {
    e.target.setAttribute('src', '../images/eye-on.svg')
    pwInput.setAttribute('type', "")
  } else{
    e.target.setAttribute('src', '../images/eye-off.svg')
    pwInput.setAttribute('type', 'password')
  }
}
function eyeCheck_toggle(e) {
  if(e.target.getAttribute('src')=="../images/eye-off.svg") {
    e.target.setAttribute('src', '../images/eye-on.svg')
    passwordCheck.setAttribute('type', "")
  } else{
    e.target.setAttribute('src', '../images/eye-off.svg')
    passwordCheck.setAttribute('type', 'password')
  }
}

emailInput.addEventListener('focusout', emailError)
pwInput.addEventListener('focusout', pwError)
emailInput.addEventListener('focusout', emailCheck)
passwordCheck.addEventListener('focusout', pwErrorCheck)
form.addEventListener('submit', login)
eye.addEventListener('click', eye_toggle)
eyeCheck.addEventListener('click', eyeCheck_toggle)