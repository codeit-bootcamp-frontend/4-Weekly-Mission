const email_input = document.querySelector(".email_input")
const email_error_msg = document.querySelector('.email_error_msg')
const email_regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const pw_input = document.querySelector('.pw_input')
const password_error_msg = document.querySelector('.password_error_msg')
// 비밀번호 정규식 8자 이상 하나 이상의 문자 , 하나 이상의 숫자 포함
const password_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const repeat_pw_input = document.querySelector('.repeat_pw_input')
const repeat_password_error_msg = document.querySelector('.repeat_password_error_msg')

const pw_icon_close = document.querySelector(".pw_icon_close")
const pw_icon_open = document.querySelector(".pw_icon_open")
const pw_repeat_icon_close = document.querySelector(".pw_repeat_icon_close")
const pw_repeat_icon_open = document.querySelector(".pw_repeat_icon_open")

const tags = {
    email_input : email_input,
    email_error_msg : email_error_msg,
    email_regExp : email_regExp,
    pw_input : pw_input,
    password_error_msg : password_error_msg,
    pw_icon_close : pw_icon_close,
    pw_icon_open : pw_icon_open,
    password_reg : password_reg,
    repeat_pw_input : repeat_pw_input,
    repeat_password_error_msg : repeat_password_error_msg,
    pw_repeat_icon_close :  pw_repeat_icon_close,
    pw_repeat_icon_open : pw_repeat_icon_open
}

export default tags