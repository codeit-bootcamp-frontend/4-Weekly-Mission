import tags from "./module/tags.js"
import function_module from "./module/function.js"

function_module.checkAccessToken()

tags.email_input.addEventListener('focus', function_module.activeInput)
tags.email_input.addEventListener('blur', function_module.blurInput)
tags.email_input.addEventListener('focus', () => {function_module.removeErrorMessage(tags.email_error_msg)})
tags.email_input.addEventListener("blur", (e) => {function_module.checkInputNull(e, tags.email_error_msg, "이메일을")})
tags.email_input.addEventListener("blur", (e) => {function_module.validateEmailInput(e, tags.email_error_msg, tags.email_regExp)})
tags.email_input.addEventListener('blur', (e) => {function_module.checkDuplicate(e, tags.email_error_msg)})

tags.pw_input.addEventListener('focus', function_module.activeInput)
tags.pw_input.addEventListener('blur', function_module.blurInput)
tags.pw_input.addEventListener('focus', () => {function_module.removeErrorMessage(tags.password_error_msg)})
tags.pw_input.addEventListener("blur", (e) => {function_module.checkInputNull(e, tags.password_error_msg, "비밀번호를")})
tags.pw_input.addEventListener('blur', (e) => {function_module.validatePasswordInput(e, tags.password_reg, tags.password_error_msg)})

tags.repeat_pw_input.addEventListener('blur', () => {
    function_module.passwordConfirm(tags.pw_input, tags.repeat_pw_input, tags.repeat_password_error_msg
        )
    })
tags.repeat_pw_input.addEventListener('focus', function_module.activeInput)
tags.repeat_pw_input.addEventListener("blur", (e) => {function_module.checkInputNull(e, tags.repeat_password_error_msg, "비밀번호 확인값을")})
tags.repeat_pw_input.addEventListener('blur', function_module.blurInput)
tags.repeat_pw_input.addEventListener('focus', () => {function_module.removeErrorMessage(tags.repeat_password_error_msg)})
tags.repeat_pw_input.addEventListener("blur", () => {function_module.passwordConfirm(tags.pw_input, tags.repeat_pw_input, tags.repeat_password_error_msg)})
tags.pw_icon_close.addEventListener('click', (e) => {function_module.showPasswordInput(e, tags.pw_icon_open, tags.pw_input)})
tags.pw_icon_open.addEventListener('click', (e) => {function_module.coverPasswordInput(e, tags.pw_icon_close, tags.pw_input)})
tags.pw_repeat_icon_close.addEventListener('click', (e) => {function_module.showPasswordInput(e, tags.pw_repeat_icon_open, tags.repeat_pw_input)})
tags.pw_repeat_icon_open.addEventListener('click', (e) => {function_module.coverPasswordInput(e, tags.pw_repeat_icon_close, tags.repeat_pw_input)})

const sign_up_btn = document.querySelector('.sign_up_btn')
sign_up_btn.addEventListener('click' , (e) => {
    function_module.checkEmailPwSignUp(
        e, tags.email_input, tags.pw_input, tags.repeat_pw_input, tags.email_error_msg, tags.password_error_msg, tags.repeat_password_error_msg)})



