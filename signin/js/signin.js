import * as moduleSign from '/js/module_sign.js';

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('accessToken')) {
        window.location.href = '/folder';
    }
});

const PWD_VIEW = document.querySelector('.pwd-view');
const INPUT_EMAIL = document.querySelector('#email');
const INPUT_PASSWORD = document.querySelector('#password');
const FORM = document.querySelector('#login-form-box');

PWD_VIEW.addEventListener('click', function () {
    moduleSign.passwordSwitch(this);
});
INPUT_EMAIL.addEventListener('focusin', function () {
    moduleSign.errorBoxToggle(this);
});
INPUT_EMAIL.addEventListener('focusout', function () {
    if (this.value == '') {
        moduleSign.errorBoxToggle(this, '이메일을 입력해 주세요.');
    } else if (moduleSign.emailValidCheck(this.value)) {
        moduleSign.errorBoxToggle(this, '올바른 이메일 주소가 아닙니다.');
    }
});

INPUT_PASSWORD.addEventListener('focusin', function () {
    moduleSign.errorBoxToggle(this);
});
INPUT_PASSWORD.addEventListener('focusout', function () {
    if (this.value == '') {
        moduleSign.errorBoxToggle(this, '비밀번호를 입력해 주세요.');
    }
});

FORM.addEventListener('submit', function (e) {
    e.preventDefault(); // submit 안막으면 비동기 실행 종료전에 submit됨
    const FORM_DATA = {
        email: this['email'].value,
        password: this['password'].value,
    };
    moduleSign
        .apiSignin(FORM_DATA)
        .then((response) => {
            this.action = '/folder';
            this.method = 'post';
            this.submit();
        })
        .catch((error) => {
            e.preventDefault();
            moduleSign.errorBoxToggle(INPUT_EMAIL, '이메일을 확인해 주세요.');
            moduleSign.errorBoxToggle(INPUT_PASSWORD, '비밀번호를 확인해 주세요.');
        });
});
