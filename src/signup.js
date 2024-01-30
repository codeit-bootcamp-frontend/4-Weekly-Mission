const emailInput = document.querySelector("#user-email");
const emailErrorMessage = document.querySelector("#email-error-message");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const pwInput = document.querySelector("#password");
const pwRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const pwErrorMessage = document.querySelector("#pw-error-message")
const signForm = document.querySelector("#form")
const pwCheckinput = document.querySelector('#password-check')
const pwCheckErrorMessage = document.querySelector('#pw-check-error-message')



function setEmailError() {
  if(emailInput.value === "") {
    emailErrorMessage.textContent = '이메일을 입력해주세요'
  } else if(!emailRegex.test(emailInput.value)) {
    emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
  } else if(emailInput.value === "test@codeit.com") {
    emailErrorMessage.textContent = '이미 사용중인 이메일 입니다.'
  } else {
    emailErrorMessage.textContent = ''
  }
}

function setPwError() {
  if(pwInput.value === "") {
    pwErrorMessage.textContent = '비밀번호를 입력해주세요'
  } else if(!pwRegex.test(pwInput.value)) {
    pwErrorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.'
  } else {  
    pwErrorMessage.textContent = ''
  }
}

function setPwCheckError() {
  if(pwCheckinput.value !== pwInput.value) {
    pwCheckErrorMessage.textContent = '비밀번호가 일치하지 않아요.'
  } else {
    pwCheckErrorMessage.textContent = ''
  }
}

function testUser(event) {
  event.preventDefault();

  if(pwInput.value === pwCheckinput.value && emailRegex.test(emailInput.value)){
    location.href = "index.html"
  } else {
    emailErrorMessage.textContent = '이메일을 확인해 주세요'
    pwErrorMessage.textContent = '비밀번호를 확인해 주세요'
    pwCheckErrorMessage.textContent = '비밀번호를 확인해 주세요.'
  }
}




emailInput.addEventListener('focusout', setEmailError)
pwInput.addEventListener('focusout', setPwError)
pwCheckinput.addEventListener('focusout', setPwCheckError)
signForm.addEventListener('submit', testUser)