import { EMAIL_INPUT, PASSWORD_INPUT, TEST_EMAIL, TEST_PW, inputError } from '../common.js';

const LOGIN_BTN = document.querySelector('button.login');

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
    }
}

// 비밀번호 인풋 검사
function passwordChecker(e) {
    if (!PASSWORD_INPUT.value) {
        const ENTER_PW = "비밀번호를 입력해 주세요."
        inputError(e, ENTER_PW);
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
    if (e.type === 'keydown' && e.key !== 'Enter') {
        return;
    }

    const SIGN_IN_REQUEST_BODY = {
        email: EMAIL_INPUT.value,
        password: PASSWORD_INPUT.value
    };

    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(SIGN_IN_REQUEST_BODY)
    })
        .then((response) => {
            if (response.status === 200) {
                location.assign('/folder');
            } else {
                const CHECK_YOUR_EMAIL = '이메일을 확인해 주세요.';
                const CHECK_YOUR_PW = '비밀번호를 확인해 주세요.';
        
                loginError(EMAIL_INPUT, CHECK_YOUR_EMAIL);
                loginError(PASSWORD_INPUT, CHECK_YOUR_PW);        
            }
        })
        .catch((error) => { console.log(error); });
}

EMAIL_INPUT.addEventListener('focusout', emailChecker);
EMAIL_INPUT.addEventListener('focusin', removeError);
PASSWORD_INPUT.addEventListener('focusout', passwordChecker);
PASSWORD_INPUT.addEventListener('focusin', removeError);

LOGIN_BTN.addEventListener('click', signInChecker);
document.querySelector('body').addEventListener('keydown', signInChecker);



