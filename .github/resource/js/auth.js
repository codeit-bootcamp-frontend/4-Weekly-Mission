const email = document.querySelector('.email');
const error = document.querySelector('.error_text');
const errorPwd = document.querySelector('.password_text');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password = document.querySelector('.password');
const hostname = '/folder';
const pwdIcons = document.querySelectorAll('.pwd_icon');

// 에러 메시지
const errorMessage = {
    emailEmpty: '이메일을 입력해 주세요.',
    emailInvalid: '올바른 이메일 주소가 아닙니다.',
    emailCheck: '이메일을 확인해 주세요.',
    emailUse: '이미 사용 중인 이메일입니다.',
    pwdEmpty: '비밀번호를 입력해주세요.',
    pwdCheck: '비밀번호를 확인해 주세요.',
    pwdWrong: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    pwdInc: '비밀번호가 일치하지 않아요.'
}

// 에러 메시지 송출
const showError = (targetEl, errorEl, errorType) => {
    errorEl.style.display = 'block';
    targetEl.classList.add('error');
    errorEl.innerText = errorMessage[errorType];
}

// 에러 메시지 삭제
const deleteError = (targetEl, errorEl) => {
    targetEl.classList.remove('error');
    errorEl.style.display = 'none';
}

// 이메일 값 비교
const emailForm = () => {
    if(email.value === '') {
        showError(email, error, 'emailEmpty');
    } else if(!emailRegex.test(email.value)) {
        showError(email, error, 'emailInvalid');
    }
}
email.addEventListener('focusout', emailForm);

// 비밀번호 눈 아이콘 토글
const pwdCheck = (e) => {
    e.target.classList.toggle('hide');
    if(e.target.previousElementSibling.type === 'password') {
        e.target.previousElementSibling.setAttribute('type', 'text');
    } else {
        e.target.previousElementSibling.setAttribute('type', 'password');
    }
}

pwdIcons.forEach((pwdIcon) => {
    pwdIcon.addEventListener('click', pwdCheck);
});


export { email, error, errorPwd, emailRegex, password, hostname, showError, deleteError, emailForm};