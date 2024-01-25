const form = document.querySelector('#login_form');

// 이메일 input
const email = document.querySelector('#email');
const error = document.querySelector('.error_text');
const error_pwd = document.querySelector('.password_text');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 비밀번호 input
const password = document.querySelector('#password');

// 링크
const hostname = '/folder';

// 비밀번호 아이콘
const pwd_icon = document.querySelector('.pwd_icon');

// 에러 메시지
const ERROR_MESSAGE = {
    email_empty: '이메일을 입력해 주세요.',
    email_invalid: '올바른 이메일 주소가 아닙니다.',
    pwd_empty: '비밀번호를 입력해주세요.'
}

const showError = (targetEl, errorEl, errorType) => {
    errorEl.style.display = 'block';
    targetEl.classList.add('error');
    errorEl.innerText = ERROR_MESSAGE[errorType];
}

// 에러 메시지 삭제
const deleteError = (targetEl, errorEl) => {
    targetEl.classList.remove('error');
    errorEl.style.display = 'none';
}

email.addEventListener('focusout', function(e) {
    if(email.value === '') {
        showError(email, error, 'email_empty');
    } else if(!emailRegex.test(email.value)) {
        showError(email, error, 'email_invalid');
    } else if(emailRegex.test(email.value) && email.value !== '') {
        deleteError(email, error);
    }
})

password.addEventListener('focusout', function(e) {
    if(password.value === '') {
        showError(password, error_pwd, 'pwd_empty');
    } else if(password.value !== '') {
        deleteError(password, error_pwd);
    }
})

form.onsubmit = function(e) {
    if(email.value.trim() === 'test@codeit.com' && password.value === 'codeit101') {
        e.preventDefault();
        window.location.href = hostname;
    } else {
        e.preventDefault()
        showError(email, error, 'email_empty');
        showError(password, error_pwd, 'pwd_empty');
    }
}

pwd_icon.addEventListener('click', function() {
    pwd_icon.classList.toggle('hide');
    if(password.type === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
})