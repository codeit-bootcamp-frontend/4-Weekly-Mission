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
    email_input.classList.add('input_background')
}

email_input.addEventListener('blur', checkNullValue)
email_input.addEventListener('focus', emailInputFocus)



// 비밀번호 인풋값 확인

let pw_input = document.querySelector('.pw_input')
let password_error  = document.querySelector(".password_error")

function passwordCheck() {
    if(pw_input.value == "") {
        // 값이 공백일 때
        password_error.innerHTML = "비밀번호를 입력해 주세요"
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

// 눈모양 아이콘

let pw_icon_close = document.querySelector(".pw_icon_close")
let pw_icon_open = document.querySelector(".pw_icon_open")
let pw_repeat_icon_close = document.querySelector(".pw_repeat_icon_close")
let pw_repeat_icon_open = document.querySelector(".pw_repeat_icon_open")
let repeat_pw_input = document.querySelector('.repeat_pw_input')
let repeat_password_error = document.querySelector('.repeat_password_error')

pw_icon_close.addEventListener('click', function() {
    pw_icon_close.classList.add('display_none')
    pw_icon_open.classList.remove('display_none')
    pw_input.type = 'text'

})

pw_icon_open.addEventListener('click', function() {
    pw_icon_close.classList.remove('display_none')
    pw_icon_open.classList.add('display_none')
    pw_input.type = 'password'
})

pw_repeat_icon_close.addEventListener('click', function() {
    pw_repeat_icon_close.classList.add('display_none')
    pw_repeat_icon_open.classList.remove('display_none')
    repeat_pw_input.type = 'text'
})

pw_repeat_icon_open.addEventListener('click', function() {
    pw_repeat_icon_close.classList.remove('display_none')
    pw_repeat_icon_open.classList.add('display_none')
    repeat_pw_input.type = 'password'
})

// 비밀번호 , 비밀번호 확인값 확인

function checkRepeatPassword() {
    if(pw_input.value !==  repeat_pw_input.value) {
        repeat_password_error.classList.add('view_error')
        repeat_pw_input.classList.add('input_error')
    } else {
        repeat_password_error.classList.remove('view_error')
        repeat_pw_input.classList.remove('input_error')
    }
}

repeat_pw_input.addEventListener('blur', checkRepeatPassword)
repeat_pw_input.addEventListener('focus', function() {
    repeat_password_error.classList.remove('view_error')
})




let sign_up_btn = document.querySelector('.sign_up_btn')

sign_up_btn.addEventListener('submit', function() {
    console.log(123)
})