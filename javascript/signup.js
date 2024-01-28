import * as sign from './signin.js';

// password-check input
const inputPasswordCheck = document.querySelector(".sign-input#password-check");
const inputBoxPasswordCheck = document.querySelector(".sign-input-box.sign-password-check"); 
// eye button & img (비밀번호 확인)
const eyeButtonCheck = document.querySelector(".eye-button-check");
const eyeImgCheck = document.querySelector("#eye-id-check");

function isValidPassword(passwordValue) {
    const expPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    return expPassword.test(passwordValue);    
}
// focus-out email
function eventFocusOutEmail() {
    // no email value
    if(sign.inputEmail.value === "") {
        sign.showErrorMessage(sign.inputBoxEmail, "이메일을 입력해주세요");
    }
    // not email form
    else if(!sign.isValidEmail(sign.inputEmail.value)) {
        sign.showErrorMessage(sign.inputBoxEmail, "올바른 이메일 주소가 아닙니다.");
    }
    else if(sign.inputEmail.value === sign.USER_EMAIL) {
        sign.showErrorMessage(sign.inputBoxEmail, "이미 사용 중인 이메일입니다.");
    }
    // error message remove
    else if(sign.isValidEmail(sign.inputEmail.value)) {
        sign.removeMessage(sign.inputBoxEmail);
    }
}
// focus-out password
function eventFocusOutPassword() {
    // no password value
    if(sign.inputPassword.value === "") {
        sign.showErrorMessage(sign.inputBoxPassword, "비밀번호를 입력해주세요");
    }
    else if(!isValidPassword(sign.inputPassword.value)) {
        sign.showErrorMessage(sign.inputBoxPassword, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
    }
    else {
        sign.removeMessage(sign.inputBoxPassword);
    }
}
function eventFocusOutPasswordCheck() {
    // no password value
    if(inputPasswordCheck.value !== sign.inputPassword.value) {
        sign.showErrorMessage(inputBoxPasswordCheck, "비밀번호가 일치하지 않아요.");
    }
    else {
        sign.removeMessage(inputBoxPasswordCheck);
    }
}
// signup button click
function eventClickBtnSignup() {
    if( sign.isValidEmail(sign.inputEmail.value)
        && isValidPassword(sign.inputPassword.value)
        && inputPasswordCheck.value === sign.inputPassword.value ) {
            window.location.href = "/folder";
        }
    else {
        eventFocusOutEmail();
        eventFocusOutPassword();
        eventFocusOutPasswordCheck();
    }
}
function eventKeyUpEnterSignup(e) {
    if(e.keyCode == 13) {
        eventClickBtnSignup();
    }
}
function eventClickEyeCheck() {
    sign.clickEyeIcon(inputPasswordCheck, eyeImgCheck);
}

sign.inputEmail.addEventListener('focusout', eventFocusOutEmail);
sign.inputPassword.addEventListener('focusout', eventFocusOutPassword);
inputPasswordCheck.addEventListener('focusout', eventFocusOutPasswordCheck);
sign.loginButton.addEventListener('click', eventClickBtnSignup);
document.addEventListener('keyup', eventKeyUpEnterSignup);
sign.eyeButton.addEventListener('click', sign.eventClickEye);
eyeButtonCheck.addEventListener('click', eventClickEyeCheck);