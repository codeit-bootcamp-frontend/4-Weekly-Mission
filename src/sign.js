const emailInput = document.querySelector("#useremail");
const emailErrorMessage = document.querySelector("#email-error-message");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const pwInput = document.querySelector("#password");
const pwErrorMessage = document.querySelector("#pw-error-message")
const signForm = document.querySelector("#form")




function emailError() {
  if(emailInput.value == "") {
    emailErrorMessage.textContent = '이메일을 입력해주세요'
  } else if(!emailRegex.test(emailInput.value) && emailInput.value != '') {
    emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.'
  }
}
function pwError() {
  if(pwInput.value == "") {
    pwErrorMessage.textContent = '비밀번호를 입력해주세요'
  } 
}

function testUser(event) {
  event.preventDefault();

  if(emailInput.value === "test@codeit.com" && pwInput.value === "codeit101"){
    location.href = "index.html"
    return
  } else {
    emailErrorMessage.textContent = '이메일을 확인해 주세요'
    pwErrorMessage.textContent = '비밀번호를 확인해주세요'
  }
}



emailInput.addEventListener('focusout', emailError)
pwInput.addEventListener('focusout', pwError)
signForm.addEventListener('submit', testUser)