let email_input = document.querySelector(".email_input")
let email_error = document.querySelector(".email_error") 
let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

console.log(1)
function checkNullValue(e) {
    if(e.target.value == "") {
        email_error.innerHTML = "이메일을 입력해주세요"
        email_error.classList.add("view_error")
        email_input.classList.add("input_error")
    } else {
        email_error.classList.remove('view_error')
        email_input.classList.remove('input_error')
    }
    email_input.classList.remove('input_focus')

    if(regExp.test(email_input.value) == false && email_input.value != "") {
        console.log(123)
        email_input.classList.add("input_error")
        email_error.innerHTML = "올바른 이메일 주소가 아닙니다"
        email_error.classList.add("view_error")
    }
}

function inputFocus() {
    email_error.classList.remove('view_error')
    email_input.classList.add('input_focus')
}
email_input.addEventListener('focus', inputFocus)
email_input.addEventListener('blur', checkNullValue)


console.log(regExp.test(email_input.value))