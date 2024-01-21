const emailInput = document.querySelector('#email')
const errorM = document.querySelector('.errorM')
const pwInput = document.querySelector('#password')
const errorP = document.querySelector('.errorP')
const button = document.querySelector('.btn')
const form = document.querySelector('form')
const eye = document.querySelector('.eye')
const inputs = document.querySelectorAll('.signInput')

// 입력해주세요
function emailError(e) {
  console.log('focusout')
  // 왜 e.target.value=''하면 적용이 안되는지ㅠ
  if(!e.target.value.trim()) {
    errorM.textContent = '이메일을 입력해 주세요.'
  } else{
    errorM.textContent=''
  }
}
function pwError(e) {
  if(!e.target.value.trim()) {
    errorP.textContent = '비밀번호를 입력해 주세요.'
  } else{
    errorP.textContent=''
  }
}

// 올바른 이메일 주소가 아닙니다
function emailCheck(e) {
  let e_style = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  if(!e_style.test(e.target.value)) {
    errorM.textContent = '올바른 이메일 주소가 아닙니다.'
  } else{
    errorM.content=''
  }
}

// 로그인 했을 때 /folder로 이동 & 확인해주세요
function login(e) {
  if(emailInput.value=="test@codeit.com" && pwInput.value=="codeit101") {
    return true
  } else if(emailInput.value!=="test@codeit.com" || pwInput.value!=="codeit101"){
    errorM.textContent = '이메일을 확인해 주세요.'
    errorP.textContent = '비밀번호를 확인해 주세요.'
    return false
  }
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

emailInput.addEventListener('focusout', emailError)
pwInput.addEventListener('focusout', pwError)
emailInput.addEventListener('focusout', emailCheck)
form.addEventListener('submit', login)
eye.addEventListener('click', eye_toggle)