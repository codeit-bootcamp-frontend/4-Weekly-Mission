import {USER_EMAIL, USER_PASSWORD} from './regex.js';
import {isValidEmail, showErrorMessage, removeMessage, eventClickEye} from './utils.js';
import {inputEmail, inputBoxEmail, inputPassword, inputBoxPassword, loginButton, eyeButton} from './constants.js';


// focus-out email
function eventFocusOutEmail() {
    // no email value
    if(inputEmail.value === "") {
        showErrorMessage(inputBoxEmail, "이메일을 입력해주세요");
    }
    // not email form
    else if(!isValidEmail(inputEmail.value)) {
        showErrorMessage(inputBoxEmail, "올바른 이메일 주소가 아닙니다.");
    }
    // error message remove
    else if(isValidEmail(inputEmail.value)) {
        removeMessage(inputBoxEmail);
    }
}
// focus-out password
function eventFocusOutPassword() {
    // no password value
    if(inputPassword.value === "") {
        showErrorMessage(inputBoxPassword, "비밀번호를 입력해주세요")
    }
    else {
        removeMessage(inputBoxPassword);
    }
}
// login button click
function eventClickBtn() {
    if(inputEmail.value === USER_EMAIL && inputPassword.value === USER_PASSWORD) {
        window.location.href = "/folder"
    }
    if(inputEmail.value !== USER_EMAIL) {
        showErrorMessage(inputBoxEmail, "아이디를 확인해주세요.");
    }
    if(inputPassword.value !== USER_PASSWORD) {
        showErrorMessage(inputBoxPassword, "비밀번호를 확인해주세요.");
    }
}
// press Enter
function eventKeyUpEnter(e) {
    if(e.keyCode == 13) {
        eventClickBtn();
    }
}

inputEmail.addEventListener('focusout', eventFocusOutEmail);
inputPassword.addEventListener('focusout', eventFocusOutPassword);
loginButton.addEventListener('click', eventClickBtn);
document.addEventListener('keyup', eventKeyUpEnter);
eyeButton.addEventListener('click', eventClickEye);