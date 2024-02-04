import { email, error, errorPwd, emailRegex, password, showError, deleteError, emailForm } from './auth.js';
import { accessTokenSet } from './accessToken.js';

const signupForm = document.querySelector('.signup_form');
const errorPwdCheck = document.querySelector('.password_check_text');
const passwordCheck = document.querySelector('.password_check');
const pwdString = /^[0-9]*$/;
const pwdNum = /^[a-zA-Z]*$/;

// 이메일 사용중 확인
const emailUsing = () => {
    if(emailRegex.test(email.value) && email.value !== '') {
        deleteError(email, error);
    }
}
email.addEventListener('focusout', emailUsing);

// 비밀번호 정규식 비교
const pwdRegex = () => {
    if(password.value.length < 8 || pwdString.test(password.value) || pwdNum.test(password.value)) {
        showError(password, errorPwd, 'pwdWrong');
    } else {
        deleteError(password, errorPwd);
    }
}
password.addEventListener('focusout' , pwdRegex);

// 비밀번호 동일값 비교
const pwdSame = () => {
    if(passwordCheck.value !== password.value) {
        showError(passwordCheck, errorPwdCheck, 'pwdInc');
    }
}

// 토큰 생성 후 페이지 이동
const accessTokenCheck = () => {
    fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        }),
    })
    .then(response => response.json())
    .then(result => {
        accessTokenSet(result);
    })
}

// 이메일 중복 체크
const duplicationCheck = () => {
    fetch('https://bootcamp-api.codeit.kr/api/check-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
        }),
    })
    .then(response => response.json())
    .then(result => {
        if(result.data.isUsableNickname) {
            accessTokenCheck(result);
        }
    })
    .catch(errors => {
        showError(email, error, 'emailUse');
    })
}

const errorFunction = () => {
    pwdRegex();
    emailForm();
    emailUsing();
    pwdSame();
}

// 회원가입 폼
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(emailRegex.test(email.value) && email.value !== '' && password.value.length >= 8 && !pwdString.test(password.value) && !pwdNum.test(password.value) && passwordCheck.value === password.value) {
        duplicationCheck();
    } else {
        errorFunction();
    }
})