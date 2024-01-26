// 인풋창 포커스시 파란색으로 변경
function activeInput(e) {
    e.target.classList.replace("input_error", "input_focus")
    e.target.classList.add("input_focus")
}

// 포커스 아웃시 파란색 없애기
function blurInput(e) {
    e.target.classList.remove("input_focus")
}

// 인풋창 포커스시 에러 메세지 삭제
function remove_error_msg(error_msg) {
    error_msg.classList.remove("view_error")
}

// 인풋값 공백 확인 함수
function checkInputNull(e, error_msg, whatInput) {
   
    if(e.target.value == "") {
        error_msg.innerHTML = `${whatInput} 입력해 주세요`
        e.target.classList.add("input_error")
        error_msg.classList.add("view_error")
    } else {
        e.target.classList.remove("input_error")
        error_msg.classList.remove("view_error")
    }
}

// 이메일값 유효성 확인(공백X)
function emailIsValid(e, regExp, error_msg) {
    if(regExp.test(e.target.value) == true) {
        email_error_msg.classList.remove("view_error")
        e.target.classList.remove("input_error")
    } else if(regExp.test(e.target.value) == false && e.target.value != "") {
        email_error_msg.innerHTML = "올바른 이메일 주소가 아닙니다"
        email_error_msg.classList.add("view_error")
        e.target.classList.add("input_error")
    }
}

const email_input = document.querySelector(".email_input")
const email_regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const email_error_msg = document.querySelector('.email_error_msg')

email_input.addEventListener('focus', activeInput)
email_input.addEventListener('blur', blurInput)
email_input.addEventListener('focus', () => {remove_error_msg(email_error_msg)})
email_input.addEventListener("blur", (e) => {checkInputNull(e, email_error_msg, "이메일을")})
email_input.addEventListener("blur", (e) => {emailIsValid(e, email_regExp, email_error_msg)})


const pw_input = document.querySelector('.pw_input')
const password_error_msg = document.querySelector('.password_error_msg')
pw_input.addEventListener('focus', activeInput)
pw_input.addEventListener('blur', blurInput)
pw_input.addEventListener('focus', () => {remove_error_msg(password_error_msg)})
pw_input.addEventListener("blur", (e) => {checkInputNull(e, password_error_msg, "비밀번호를")})



const signInBtn = document.querySelector('.sign_in_btn')

function checkEmailPwOnLogin(e, email_input, pw_input) {
    e.preventDefault();
    if(email_input.value == "test@codeit.com" && pw_input.value == "codeit101") {
        console.log('올바른 이메일과 비밀번호 값 입니다')
    } else {
        console.log("틀림")
       email_input.classList.add("input_error")
       pw_input.classList.add("input_error")

    }
}

signInBtn.addEventListener('click', (e) => {checkEmailPwOnLogin(e, email_input, pw_input)})
// 인풋값 포커스시 인풋창 보더 색상 변경 함수
// function activeFcous(e, error_msg) {
//     e.target.classList.remove('input_error')
//     e.target.classList.add('input_focus')
//     error_msg.classList.remove("view_error")
// }




// 이메일 인풋값 확인 




// email_input.addEventListener('focus', (e) => {activeFcous(e, email_error_msg)})

// const email_error = document.querySelector(".email_error") 
// const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

// function checkNullValue(e) {

//       // 이메일 틀린 조건
//      if(regExp.test(email_input.value) == false) {

        
//         if(email_input.value == "") {
//             // 값이 없을때
//             email_error.innerHTML = "이메일을 입력해주세요"
//             email_input.classList.replace("input_focus", "input_error")
//             email_error.classList.add("view_error")
            
//         } else {
//             // 값은 있으나 정규식과 맞지 않을때
//             email_input.classList.replace("input_focus", "input_error")
//             email_error.innerHTML = "올바른 이메일 주소가 아닙니다"
//             email_error.classList.add("view_error")
//         }
//     } else {

//            // 올바른 값을 넣었을때
//            email_input.classList.remove('input_focus')
//     }
  
// }

// function emailInputFocus() {
//     email_error.classList.remove('view_error')
//     email_input.classList.remove('input_error')
//     email_input.classList.add('input_focus')
// }

// email_input.addEventListener('blur', checkNullValue)
// email_input.addEventListener('focus', emailInputFocus)



// // 비밀번호 인풋값 확인

// const pw_input = document.querySelector('.pw_input')
// const password_error  = document.querySelector(".password_error")

// function passwordCheck() {
//     if(pw_input.value == "") {
//         // 값이 공백일 때
//         password_error.innerHTML = "비밀번호를 입력해 주세요"
//         password_error.classList.add('view_error')
//         pw_input.classList.replace('input_focus', 'input_error')

//     } else {
//         // 공백이 아닐 때
//         pw_input.classList.remove('input_focus')
//     }
// }
// function passWordInputFocus() {
//     password_error.classList.remove('view_error')
//     pw_input.classList.add('input_focus')
//     pw_input.classList.remove('input_error')
// }

// pw_input.addEventListener('focus', passWordInputFocus)
// pw_input.addEventListener('blur', passwordCheck)

// // 로그인 시도 

// const signInBtn = document.querySelector('.sign_in_btn')

// function signInCheck(e) {
//     e.preventDefault()
//     if(email_input.value == "test@codeit.com" && pw_input.value ==  "codeit101") {
//         document.location.href = "/pages/folder.html"
        
//     } else {
        
//         console.log(111)
//         email_error.innerHTML = "이메일을 확인해 주세요"
//         password_error.innerHTML = "비밀번호를 확인해 주세요"
//         email_error.classList.add("view_error")
//         password_error.classList.add('view_error')
//         pw_input.classList.add('input_error')
//         email_input.classList.add('input_error')
       

//     }
// }

// signInBtn.addEventListener('click',signInCheck)


// // 눈모양 아이콘

// const pw_icon_close = document.querySelector(".pw_icon_close")
// const pw_icon_open = document.querySelector(".pw_icon_open")

// pw_icon_close.addEventListener('click', function() {
//     pw_icon_close.classList.add('display_none')
//     pw_icon_open.classList.remove('display_none')
//     pw_input.type = 'text'

// })

// pw_icon_open.addEventListener('click', function() {
//     pw_icon_close.classList.remove('display_none')
//     pw_icon_open.classList.add('display_none')
//     pw_input.type = 'password'
// })