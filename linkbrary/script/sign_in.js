import tags from "./module/tags.js"
import function_module from "./module/function.js"

function_module.checkAccessToken()

tags.email_input.addEventListener('focus', function_module.activeInput)
tags.email_input.addEventListener('blur', function_module.blurInput)
tags.email_input.addEventListener('focus', () => {function_module.removeErrorMessage(tags.email_error_msg)})
tags.email_input.addEventListener("blur", (e) => {function_module.checkInputNull(e, tags.email_error_msg, "이메일을")})
tags.email_input.addEventListener("blur", (e) => {function_module.validateEmailInput(e, tags.email_error_msg, tags.email_regExp)})

tags.pw_input.addEventListener('focus', function_module.activeInput)
tags.pw_input.addEventListener('blur', function_module.blurInput)
tags.pw_input.addEventListener('focus', () => {function_module.removeErrorMessage(tags.password_error_msg)})
tags.pw_input.addEventListener("blur", (e) => {function_module.checkInputNull(e, tags.password_error_msg, "비밀번호를")})

tags.pw_icon_close.addEventListener('click', (e) => {function_module.showPasswordInput(e, tags.pw_icon_open, tags.pw_input)})
tags.pw_icon_open.addEventListener('click', (e) => {function_module.coverPasswordInput(e, tags.pw_icon_close, tags.pw_input)})

const signInBtn = document.querySelector('.sign_in_btn')
signInBtn.addEventListener('click', (e) => {
    function_module.checkEmailPwOnLogin(e, tags.email_input, tags.pw_input, tags.email_error_msg, tags.password_error_msg)})

signInBtn.addEventListener('click', (e) => {function_module.fetchLogin(e, tags.email_input, tags.pw_input)})
