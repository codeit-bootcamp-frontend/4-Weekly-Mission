import { password, hostname } from './login.js'

// 로그인 폼
const form = document.querySelector('.login_form');
form.addEventListener('submit', (e) => {
    if(email.value.trim() === 'test@codeit.com' && password.value === 'codeit101') {
        e.preventDefault();
        window.location.href = hostname;
    } else {
        e.preventDefault();
        showError(email, error, 'email_check');
        showError(password, error_pwd, 'pwd_check');
    }
});

// 비밀번호 input
password.addEventListener('focusout', () => {
    if(password.value === '') {
        showError(password, error_pwd, 'pwd_empty');
    } else if(password.value !== '') {
        deleteError(password, error_pwd);
    }
});

// 이메일 정규식, 값 비교
email.addEventListener('focusout', () => {
    if(emailRegex.test(email.value) && email.value !== '') {
        deleteError(email, error);
    }
});
