// 테스트 계정 설정
const testCase = {
  email: 'test@codeit.com',
  password: 'codeit101',
}

// 이메일 형식 확인하는 정규화
const emailForm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

// 
const inputEmail = document.querySelector('.email-input')
const inputPassword = document.querySelector('.password-input')
const loginButton = document.querySelector('.sign-btn')
const togglePassword = document.querySelector('.eye-btn')

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
}

inputPassword.addEventListener('focus', passwordFocus)
inputPassword.addEventListener('blur', passwordBlur)


// 로그인 버튼, 경우에 따른 케이스 적용
function submitButton(e) {
  e.preventDefault()
  if (inputEmail.value === testCase.email && inputPassword.value === testCase.password) {
    window.location.replace('folder.html')
  }
  else if (inputEmail.value === testCase.email && inputPassword.value !== testCase.password) {
    inputPassword.classList.add('input-error')
    inputPassword.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 확인해 주세요'
  }
  else if (inputEmail.value !== testCase.email && inputPassword.value === testCase.password) {
    inputEmail.classList.add('input-error')
    inputEmail.parentElement.lastElementChild.textContent = '이메일을 확인해 주세요'
  }
  else {
    inputPassword.classList.add('input-error')
    inputPassword.parentElement.parentElement.lastElementChild.textContent = '비밀번호를 확인해 주세요'
    inputEmail.classList.add('input-error')
    inputEmail.parentElement.lastElementChild.textContent = '이메일을 확인해 주세요'
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

togglePassword.addEventListener('click', passwordToggle)