import { EMAIL_INPUT, PASSWORD_INPUT, TEST_EMAIL, TEST_PW, inputError } from '../common.js';

const SIGNUP_BTN = document.querySelector('button.signup');
const PW_REPEAT_INPUT = document.querySelector('#password-check')

// 로그인 실패 시 메세지
function loginError(element, message) {
    element.classList.add('input-error');
    
    const SPAN = document.createElement('span');
    SPAN.classList.add('input-error-text');
    SPAN.textContent = message;
    element.after(SPAN);

    if (element.nextElementSibling.nextElementSibling.tagName === 'SPAN') {
        element.nextElementSibling.nextElementSibling.remove();
    }
}

// 이메일 인풋 검사
function emailChecker(e) {
    if (!EMAIL_INPUT.value) {
        const ENTER_EMAIL = "이메일을 입력해 주세요."
        inputError(e, ENTER_EMAIL);
    } else if (EMAIL_INPUT.validity.typeMismatch) {
        const NOT_AN_EMAIL = "올바른 이메일 주소가 아닙니다."
        inputError(e, NOT_AN_EMAIL);
    } else if (EMAIL_INPUT.value === TEST_EMAIL) {
        const EXISTING_EMAIL = "이미 사용 중인 이메일입니다.";
        inputError(e, EXISTING_EMAIL);
    } 
}

// 비밀번호 인풋 검사
function passwordChecker(e) {
    const PW_REQUIREMENT = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    let pwCopy = PASSWORD_INPUT.value;
    pwCopy = [...pwCopy];

    if (PASSWORD_INPUT.value.length < 8 || Boolean(PASSWORD_INPUT.value / 1) || PASSWORD_INPUT.value / 1 === 0) {
        inputError(e, PW_REQUIREMENT);
    } else if (pwCopy.every(element => !(element / 1))) {
        inputError(e, PW_REQUIREMENT);
    }
}

// 비밀번호확인란 검사
function passwordRepeatChecker(e) {    
    const PW_NOT_SAME = "비밀번호가 일치하지 않아요.";

    if (PW_REPEAT_INPUT.nextElementSibling.classList.contains('input-error-text')) {
        removeError(e);
    }

    if (PASSWORD_INPUT.value !== PW_REPEAT_INPUT.value) {
        inputError(e, PW_NOT_SAME);
    }
}

// 에러 표시 숨기기
function removeError(e) {
    if (e.target.nextElementSibling.classList.contains('input-error-text')) {
        e.target.nextElementSibling.remove();
        e.target.classList.remove('input-error');
    }
}

// 회원가입 리퀘스트
async function registerRequest() {
    const REGISTER_BODY = {
        email: EMAIL_INPUT.value,
        password: PASSWORD_INPUT.value
    };

    const REGISTER_RESPONSE = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(REGISTER_BODY)
    });
    if (REGISTER_RESPONSE.status === 400) return false;
    else if (REGISTER_RESPONSE.status === 200) return true;
}

// 이메일중복확인 후 회원가입 리퀘스트 
async function checkThisEmail() {   
    try {
        const CHECK_EMAIL_RESPONSE = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: EMAIL_INPUT.value})
        });
        
        if (CHECK_EMAIL_RESPONSE.status === 409) return false;
        else if (CHECK_EMAIL_RESPONSE.status === 200 && await registerRequest()) return true;
    } catch (error) {
        console.log(error);
    }
}

// 회원가입 검사
async function signUpChecker(e) {
    if (e.type === 'keydown' && e.key !== 'Enter') {
        return;
    }

    const EMAIL_NOT_IN_USE = await checkThisEmail();
    let pwCopy = PASSWORD_INPUT.value;
    pwCopy = [...pwCopy];

    const INVALID_EMAIL = !EMAIL_INPUT.value || EMAIL_INPUT.validity.typeMismatch;
    const INVALID_PW = PASSWORD_INPUT.value.length < 8 || Boolean(PASSWORD_INPUT.value / 1) || PASSWORD_INPUT.value / 1 === 0 || pwCopy.every(element => !(element / 1));
    const INVALID_PW_REPEAT = PASSWORD_INPUT.value !== PW_REPEAT_INPUT.value;

    if (INVALID_EMAIL) {
        const CHECK_YOUR_EMAIL = '이메일을 확인해 주세요.';
        loginError(EMAIL_INPUT, CHECK_YOUR_EMAIL);
    } 

    if (!EMAIL_NOT_IN_USE) {
        const IS_BEING_USED = '이미 사용 중인 이메일입니다.';
        loginError(EMAIL_INPUT, IS_BEING_USED);
    } 
    
    if (INVALID_PW) {
        const CHECK_YOUR_PW = '비밀번호를 확인해 주세요.';
        loginError(PASSWORD_INPUT, CHECK_YOUR_PW);
    } 

    if (INVALID_PW_REPEAT) {
        const CHECK_YOUR_PW = '비밀번호가 일치하지 않아요.';
        loginError(PW_REPEAT_INPUT, CHECK_YOUR_PW);
    } 

    if (!INVALID_EMAIL && !INVALID_PW && !INVALID_PW_REPEAT && EMAIL_NOT_IN_USE) {
        EMAIL_INPUT.value = '';
        location.assign('/folder');
    }
}   

EMAIL_INPUT.addEventListener('focusout', emailChecker);
EMAIL_INPUT.addEventListener('focusin', removeError);
PASSWORD_INPUT.addEventListener('focusout', passwordChecker);
PASSWORD_INPUT.addEventListener('focusin', removeError);
PW_REPEAT_INPUT.addEventListener('keyup', passwordRepeatChecker);

SIGNUP_BTN.addEventListener('click', signUpChecker);
document.querySelector('body').addEventListener('keydown', signUpChecker);
