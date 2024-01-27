// 인풋창 포커스시 보더 파란색으로 변경
function activeInput(e) {
    e.target.classList.replace("input_error", "input_focus")
    e.target.classList.add("input_focus")
}

// 포커스 아웃시 보더 파란색 없애기
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

// 이메일 유효성 확인(공백X)
function validateEmailInput(e, error_msg ,regExp) {
    if(regExp.test(e.target.value) == true) {
       error_msg.classList.remove("view_error")
        e.target.classList.remove("input_error")
    } else if(regExp.test(e.target.value) == false && e.target.value != "") {
       error_msg.innerHTML = "올바른 이메일 주소가 아닙니다"
       error_msg.classList.add("view_error")
        e.target.classList.add("input_error")
    }
}

// 비밀번호 유효성 확인 
function validatePasswordInput(e, regExp, error_msg) {
    if(regExp.test(e.target.value) == false && e.target.value !== "") {
        error_msg.innerHTML = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요"
        error_msg.classList.add('view_error')
        e.target.classList.add('input_error')
    }
}

// 비밀번호 확인 함수
function passwordConfirm(password, repeatPassword, error_msg) {
    if(password.value !== repeatPassword.value) {
        error_msg.classList.add('view_error')
        repeatPassword.classList.add('input_error')
    }
}

// 이메일 중복확인
function checkDuplicate(e, error_msg) {
    if(e.target.value == "test@codeit.com") {
        console.log(e.target.value)
        e.target.classList.add("input_error")
        error_msg.classList.add('view_error')
        error_msg.innerHTML = "이미 사용 중인 이메일입니다"
    }
}

// 로그인 시도시 이메일 & 패스워드 학인
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

// 회원가입 시도시 모든 인풋값 검사 
function checkEmailPwSignUp(e, email_input, pw_input, repeat_pw_input) {
    e.preventDefault()
   let arr = [email_input.value, pw_input.value, repeat_pw_input.value]

     if(email_input.classList.contains("input_error") == false &&
      pw_input.classList.contains("input_error") == false &&
      repeat_pw_input.classList.contains("input_error") == false &&
      arr.includes("") == false &&
      arr[1] === arr[2]   
   ) {
       document.location.href = "/pages/folder.html"
   }

    // 후에 회원가입 기능 추가
}
// 눈 아이콘 클릭 함수 (close - > open)
function showPasswordInput(e, open, input) {
    e.target.classList.add('display_none')
    open.classList.remove("display_none")
    input.type = "text"
}

// 눈 아이콘 클릭 함수 (open - > close)
function coverPasswordInput(e, close, input) {
    e.target.classList.add('display_none')
    close.classList.remove("display_none")
    input.type = "password"
}

const function_module = {
    activeInput :  activeInput,
    blurInput : blurInput,
    remove_error_msg : remove_error_msg,
    checkInputNull : checkInputNull,
    validateEmailInput : validateEmailInput,
    checkEmailPwOnLogin : checkEmailPwOnLogin,
    showPasswordInput : showPasswordInput,
    coverPasswordInput : coverPasswordInput,
    validatePasswordInput : validatePasswordInput,
    passwordConfirm : passwordConfirm,
    checkDuplicate : checkDuplicate,
    checkEmailPwSignUp : checkEmailPwSignUp
}



export default function_module
