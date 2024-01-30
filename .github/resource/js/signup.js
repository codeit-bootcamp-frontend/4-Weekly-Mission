import { email, error, error_pwd, emailRegex, password, hostname, showError, deleteError, email_form } from './login.js';

const signup_form = document.querySelector('.signup_form');
const error_pwd_check = document.querySelector('.password_check_text');
const password_check = document.querySelector('.password_check');
const pwd_string = /^[0-9]*$/;
const pwd_num = /^[a-zA-Z]*$/;

// 이메일 사용중 확인
const email_using = () => {
    if(email.value === 'test@codeit.com') {
        showError(email, error, 'email_use');
    } else if(emailRegex.test(email.value) && email.value !== '' && email.value !== 'test@codeit.com') {
        deleteError(email, error);
    }
}
email.addEventListener('focusout', email_using);

// 비밀번호 정규식 비교
const pwd_regex = () => {
    if(password.value.length < 8 || pwd_string.test(password.value) || pwd_num.test(password.value)) {
        showError(password, error_pwd, 'pwd_wrong');
    } else {
        deleteError(password, error_pwd);
    }
}
password.addEventListener('focusout' , pwd_regex);

// 비밀번호 동일값 비교
const pwd_same = () => {
    if(password_check.value !== password.value) {
        showError(password_check, error_pwd_check, 'pwd_inc');
    }
}

// 회원가입 폼
signup_form.addEventListener('submit', (e) => {
    if(email.value !== 'test@codeit.com' && emailRegex.test(email.value) && password.value.length >= 8 && !pwd_string.test(password.value) && !pwd_num.test(password.value) && password_check.value === password.value) {
        e.preventDefault();
        window.location.href = hostname;
    } else {
        e.preventDefault();
        pwd_regex();
        email_form();
        email_using();
        pwd_same();
    }
})