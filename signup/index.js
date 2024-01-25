import { EMAIL_INPUT, PASSWORD_INPUT, TEST_EMAIL, TEST_PW, inputError } from '../common.js';

const SIGNUP_BTN = document.querySelector('button.signup');

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
    } 
    
    if (EMAIL_INPUT.validity.typeMismatch) {
        const NOT_AN_EMAIL = "올바른 이메일 주소가 아닙니다."
        inputError(e, NOT_AN_EMAIL);
    }
    
    if (EMAIL_INPUT.value === TEST_EMAIL) {
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

// 에러 표시 숨기기
function removeError(e) {
    if (e.target.nextElementSibling.classList.contains('input-error-text')) {
        e.target.nextElementSibling.remove();
        e.target.classList.remove('input-error');
    }
}

// 로그인 검사
function signInChecker(e) {
        if (EMAIL_INPUT.value === TEST_EMAIL && PASSWORD_INPUT.value === TEST_PW) {
            location.replace('/folder');
        } else {
            const CHECK_YOUR_EMAIL = '이메일을 확인해 주세요.';
            const CHECK_YOUR_PW = '비밀번호를 확인해 주세요.';

            loginError(EMAIL_INPUT, CHECK_YOUR_EMAIL);
            loginError(PASSWORD_INPUT, CHECK_YOUR_PW);
        }
}

EMAIL_INPUT.addEventListener('focusout', emailChecker);
EMAIL_INPUT.addEventListener('focusin', removeError);
PASSWORD_INPUT.addEventListener('focusout', passwordChecker);
PASSWORD_INPUT.addEventListener('focusin', removeError);

SIGNUP_BTN.addEventListener('click', signInChecker);

