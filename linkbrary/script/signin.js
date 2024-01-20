// 이메일 인풋값 확인 
let email_input = document.querySelector(".email_input")
let email_error = document.querySelector(".email_error") 
let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

function checkNullValue(e) {

      // 이메일 틀린 조건
     if(regExp.test(email_input.value) == false) {

        
        if(email_input.value == "") {
            // 값이 없을때
            email_error.innerHTML = "이메일을 입력해주세요"
            email_input.classList.replace("input_focus", "input_error")
            email_error.classList.add("view_error")
            
        } else {
            // 값은 있으나 정규식과 맞지 않을때
            email_input.classList.replace("input_focus", "input_error")
            email_error.innerHTML = "올바른 이메일 주소가 아닙니다"
            email_error.classList.add("view_error")
        }
    } else {

           // 올바른 값을 넣었을때
           email_input.classList.remove('input_focus')
    }
  
}

function emailInputFocus() {
    email_error.classList.remove('view_error')
    email_input.classList.remove('input_error')
    email_input.classList.add('input_focus')
}

email_input.addEventListener('blur', checkNullValue)
email_input.addEventListener('focus', emailInputFocus)



// 비밀번호 인풋값 확인

let pw_input = document.querySelector('.pw_input')
let password_error  = document.querySelector(".password_error")

function passwordCheck() {
    if(pw_input.value == "") {
        // 값이 공백일 때
        password_error.classList.add('view_error')
        pw_input.classList.replace('input_focus', 'input_error')

    } else {
        // 공백이 아닐 때
        pw_input.classList.remove('input_focus')
    }
}
function passWordInputFocus() {
    password_error.classList.remove('view_error')
    pw_input.classList.add('input_focus')
    pw_input.classList.remove('input_error')
}

pw_input.addEventListener('focus', passWordInputFocus)
pw_input.addEventListener('blur', passwordCheck)

// 로그인 시도 

let signInBtn = document.querySelector('.sign_in_btn')

function signInCheck(e) {
    e.preventDefault()
    if(email_input.value == "test@codeit.com" && pw_input.value ==  "codeit101") {
        console.log(123)
        document.location.href = URL
    } else {
        console.log(99)
        document.location.href = "http://127.0.0.1:5500/pages/folder.html"

    }
}

signInBtn.addEventListener('click',signInCheck)