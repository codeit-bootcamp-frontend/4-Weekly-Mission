const email = document.querySelector('.email');
const error = document.querySelector('.error_text');
const error_pwd = document.querySelector('.password_text');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password = document.querySelector('.password');
const hostname = '/folder';
const pwd_icon = document.querySelectorAll('.pwd_icon');

// 에러 메시지
const ERROR_MESSAGE = {
    email_empty: '이메일을 입력해 주세요.',
    email_invalid: '올바른 이메일 주소가 아닙니다.',
    email_check: '이메일을 확인해 주세요.',
    email_use: '이미 사용 중인 이메일입니다.',
    pwd_empty: '비밀번호를 입력해주세요.',
    pwd_check: '비밀번호를 확인해 주세요.',
    pwd_wrong: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    pwd_inc: '비밀번호가 일치하지 않아요.'
}

// 에러 메시지 송출
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

// 이메일 값 비교
const email_form = () => {
    if(email.value === '') {
        showError(email, error, 'email_empty');
    } else if(!emailRegex.test(email.value)) {
        showError(email, error, 'email_invalid');
    }
}
email.addEventListener('focusout', email_form);

// 비밀번호 눈 아이콘 토글
const pwd_check = (e) => {
    e.target.classList.toggle('hide');
    if(e.target.previousElementSibling.type === 'password') {
        e.target.previousElementSibling.setAttribute('type', 'text');
    } else {
        e.target.previousElementSibling.setAttribute('type', 'password');
    }
}
pwd_icon.forEach((e) => {
    e.addEventListener('click', pwd_check);
});

export { email, error, error_pwd, emailRegex, password, hostname, showError, deleteError, email_form};