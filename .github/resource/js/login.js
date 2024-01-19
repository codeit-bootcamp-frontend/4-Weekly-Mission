const form = document.querySelector('#login_form');

// 이메일 input
const email = document.querySelector('#email');
const error = document.querySelector('.error_text');
const error_pwd = document.querySelector('.password_text');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 비밀번호 input
const password = document.querySelector('#password');

// 폼 링크
const hostname = '/folder';

// 비밀번호 아이콘
const pwd_icon = document.querySelector('.pwd_icon')

email.addEventListener('focusout', function(e) {
    if(email.value == '') {
        error.style.display = 'block';
        email.classList.add('error');
        error.innerText = "이메일을 입력해 주세요";
    } else if(!emailRegex.test(email.value)) {
        error.style.display = 'block';
        email.classList.add('error');
        error.innerText = "올바른 이메일 주소가 아닙니다.";
    } else if(emailRegex.test(email.value) && email.value !== '') {
        error.style.display = 'none';
        email.classList.remove('error');
    }
})

password.addEventListener('focusout', function(e) {
    if(password.value == '') {
        error_pwd.style.display = 'block';
        password.classList.add('error');
        error_pwd.innerText = "비밀번호를 입력해주세요.";
    } else if(email.value !== '') {
        error_pwd.style.display = 'none';
        password.classList.remove('error');
    }
})

form.onsubmit = function(e) {
    if(email.value.trim() == 'test@codeit.com' && password.value == 'codeit101') {
        window.location.href = hostname;
    } else {
        e.preventDefault();
        error.style.display = 'block';
        email.classList.add('error');
        error.innerText = "이메일을 확인해 주세요";
        error_pwd.style.display = 'block';
        password.classList.add('error');
        error_pwd.innerText = "비밀번호를 확인해 주세요.";
    }
}

pwd_icon.addEventListener('click', function() {
    pwd_icon.classList.toggle('hide');
    if(password.type == 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
})