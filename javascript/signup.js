import {USER_EMAIL} from './regex.js';
import {checkUsableEmail, isValidEmail, isValidPassword, showErrorMessage, removeMessage, clickEyeIcon, eventClickEye, signRecord} from './utils.js'
import {inputEmail, inputBoxEmail, inputPassword, inputBoxPassword, loginButton, eyeButton,
        inputPasswordCheck, inputBoxPasswordCheck, eyeButtonCheck, eyeImgCheck} from './constants.js';


signRecord();
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
    else if(inputEmail.value === USER_EMAIL) {
        showErrorMessage(inputBoxEmail, "이미 사용 중인 이메일입니다.");
    }
    // error message remove
    else if(isValidEmail(inputEmail.value)) {
        removeMessage(inputBoxEmail);
        checkUsableEmail(inputEmail.value);
    }
}
// focus-out password
function eventFocusOutPassword() {
    // no password value
    if(inputPassword.value === "") {
        showErrorMessage(inputBoxPassword, "비밀번호를 입력해주세요");
    }
    else if(!isValidPassword(inputPassword.value)) {
        showErrorMessage(inputBoxPassword, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
    }
    else {
        removeMessage(inputBoxPassword);
    }
}
function eventFocusOutPasswordCheck() {
    // no password value
    if(inputPasswordCheck.value !== inputPassword.value) {
        showErrorMessage(inputBoxPasswordCheck, "비밀번호가 일치하지 않아요.");
    }
    else {
        removeMessage(inputBoxPasswordCheck);
    }
}
// signup button click
async function eventClickBtnSignup() {
    try {
        // 이메일 또는 패스워드 형식에 맞지 않는 값 입력시 에러 처리
        if( !isValidEmail(inputEmail.value)
        || !isValidPassword(inputPassword.value)
        || !(inputPasswordCheck.value === inputPassword.value) ) {
            throw new Error("unusable sign-up form.");
        }

        // POST 메소드로 가입 가능 여부 체크
        const signupForm = {
            email: inputEmail.value,
            password: inputPassword.value
        };
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupForm),
        })
        if (response.ok) {
            const result = await response.json();
            localStorage.setItem('accessToken', result['data']['accessToken']);
            window.location.href = "/folder";
        } else {
            alert("이미 사용 중인 이메일입니다.");
            throw new Error("already registered.");
        }
    } catch (error) {
        console.log(error);
        eventFocusOutEmail();
        eventFocusOutPassword();
        eventFocusOutPasswordCheck();
    } finally {
        console.log('exit');
    }
}
function eventKeyUpEnterSignup(e) {
    if(e.keyCode == 13) {
        eventClickBtnSignup();
    }
}
function eventClickEyeCheck() {
    clickEyeIcon(inputPasswordCheck, eyeImgCheck);
}

inputEmail.addEventListener('focusout', eventFocusOutEmail);
inputPassword.addEventListener('focusout', eventFocusOutPassword);
inputPasswordCheck.addEventListener('focusout', eventFocusOutPasswordCheck);
loginButton.addEventListener('click', eventClickBtnSignup);
document.addEventListener('keyup', eventKeyUpEnterSignup);
eyeButton.addEventListener('click', eventClickEye);
eyeButtonCheck.addEventListener('click', eventClickEyeCheck);