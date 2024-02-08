import {USER_EMAIL, USER_PASSWORD} from './regex.js';
import {isValidEmail, showErrorMessage, removeMessage, eventClickEye, signRecord} from './utils.js';
import {inputEmail, inputBoxEmail, inputPassword, inputBoxPassword, loginButton, eyeButton} from './constants.js';


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
async function eventClickBtn() {
    try {
        // POST 메소드로 로그인 가능 여부 체크
        const signinForm = {
            email: inputEmail.value,
            password: inputPassword.value
        };
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinForm),
        })
        if (response.ok) {
            const result = await response.json();
            localStorage.setItem('accessToken', result['data']['accessToken']);
            window.location.href = "/folder";
        } else {
            alert("로그인 실패!\n아이디 또는 패스워드를 확인해주세요.")
            throw new Error("signin Error");
        }
    } catch (error) {
        console.log(error);
        if(inputEmail.value !== USER_EMAIL) {
            showErrorMessage(inputBoxEmail, "아이디를 확인해주세요.");
        }
        if(inputPassword.value !== USER_PASSWORD) {
            showErrorMessage(inputBoxPassword, "비밀번호를 확인해주세요.");
        }
    } finally {
        console.log('exit');
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