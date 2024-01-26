// 테스트 계정 설정
const testCase = [
  {
    email: 'test@codeit.com',
    password: 'codeit101',
  },
]

// 이메일 형식 확인하는 정규식
const emailForm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

// 비밀번호 형식 확인하는 정규식
const passwordFrom = /^(?=.*[a-zA-Z0-9]).{8,15}$/

// 
const inputEmail = document.querySelector('.email-input')
const inputPassword = document.querySelector('.password-input')
const inputCheckPassword = document.querySelector('.password-check-input')
const loginButton = document.querySelector('.sign-btn')
const togglePassword = document.querySelectorAll('.eye-btn')


// email foucus, blur 함수
function emailFocus(e) {
  inputEmail.classList.remove('input-error')
  e.target.parentElement.lastElementChild.textContent = ''
}

function emailBlur(e) {
  if (e.target.value === '') {
    e.target.classList.add('input-error')
    e.target.parentElement.lastElementChild.textContent = '이메일을 입력해 주세요.'
  }
  else if (!e.target.value.match(emailForm)) {
    e.target.classList.add('input-error')
    e.target.parentElement.lastElementChild.textContent = '올바른 이메일 주소가 아닙니다.'
  }
  else if (e.target.value === testCase[0].email) {
    e.target.classList.add('input-error')
    e.target.parentElement.lastElementChild.textContent = '이미 사용 중인 이메일입니다.'
  }
}

inputEmail.addEventListener('focus', emailFocus)
inputEmail.addEventListener('blur', emailBlur)

// password foucus, blur 함수
function passwordFocus(e) {
  inputPassword.classList.remove('input-error')
  e.target.parentElement.parentElement.lastElementChild.textContent = ''
}

function passwordBlur(e) {
  if (e.target.value === '') {
    e.target.classList.add('input-error')
    e.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 입력해 주세요.'
  }
  else if (!e.target.value.match(passwordFrom)) {
    e.target.classList.add('input-error')
    e.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
  }
}

inputPassword.addEventListener('focus', passwordFocus)
inputPassword.addEventListener('blur', passwordBlur)

// passwordCheck foucus, blur 함수
function passwordCheckFocus(e) {
  inputCheckPassword.classList.remove('input-error')
  e.target.parentElement.parentElement.lastElementChild.textContent = ''
}

function passwordCheckBlur(e) {
  if (e.target.value !== inputPassword.value) {
    e.target.classList.add('input-error')
    e.target.parentElement.parentElement.lastElementChild.textContent = '비밀번호가 일치하지 않아요.'
  }
}

inputCheckPassword.addEventListener('focus', passwordCheckFocus)
inputCheckPassword.addEventListener('blur', passwordCheckBlur)

// 회원가입 버튼, 경우에 따른 케이스 적용
function submitButton(e) {
  e.preventDefault()
  if (testCase[0].email !== inputEmail.value) {
    window.location.replace('folder.html')
  }
  else if (testCase[0].email === inputEmail.value) {
    return
  }
}

loginButton.addEventListener('click', submitButton)

// passwordToggle(show and hide)
function passwordToggle(e) {
  if (e.target.classList.contains('off-eye-btn')) {
    e.target.classList.remove('off-eye-btn')
    e.target.previousElementSibling.setAttribute('type', 'password')
  }
  else {
    e.target.classList.add('off-eye-btn')
    e.target.previousElementSibling.setAttribute('type', 'text')
  }
}

for (let i = 0; i < togglePassword.length; i++) {
  togglePassword[i].addEventListener('click', passwordToggle)
}