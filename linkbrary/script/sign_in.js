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
function validateEmailInput(e, regExp) {

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
email_input.addEventListener("blur", (e) => {validateEmailInput(e, email_regExp)})


const pw_input = document.querySelector('.pw_input')
const password_error_msg = document.querySelector('.password_error_msg')
pw_input.addEventListener('focus', activeInput)
pw_input.addEventListener('blur', blurInput)
pw_input.addEventListener('focus', () => {remove_error_msg(password_error_msg)})
pw_input.addEventListener("blur", (e) => {checkInputNull(e, password_error_msg, "비밀번호를")})


// 로그인 버튼

const signInBtn = document.querySelector('.sign_in_btn')

function checkEmailPwOnLogin(e, email_input, pw_input, email_error_msg, password_error_msg) {
    e.preventDefault();
    if(email_input.value == "test@codeit.com" && pw_input.value == "codeit101") {
        document.location.href = "/pages/folder.html"
    } else {
        email_error_msg.classList.add("view_error")
        email_error_msg.innerHTML = "이메일을 확인해 주세요"
        email_input.classList.add("input_error")
        password_error_msg.classList.add("view_error")
        password_error_msg.innerHTML = "비밀번호를 확인해 주세요"
        pw_input.classList.add("input_error")
    }
}

signInBtn.addEventListener('click', (e) => {
    checkEmailPwOnLogin(e, email_input, pw_input, email_error_msg, password_error_msg)})

// // 눈모양 아이콘
function showPasswordInput(e, open, input) {
    e.target.classList.add('display_none')
    open.classList.remove("display_none")
    input.type = "text"
}

function coverPasswordInput(e, close, input) {
    e.target.classList.add('display_none')
    close.classList.remove("display_none")
    input.type = "password"
}
const pw_icon_close = document.querySelector(".pw_icon_close")
const pw_icon_open = document.querySelector(".pw_icon_open")

pw_icon_close.addEventListener('click', (e) => {showPasswordInput(e, pw_icon_open, pw_input)})
pw_icon_open.addEventListener('click', (e) => {coverPasswordInput(e, pw_icon_close, pw_input)})

