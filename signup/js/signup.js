import * as moduleSign from '/js/module_sign.js';

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('accessToken')) {
        window.location.href = '/folder';
    }
});

const INPUT_EMAIL = document.querySelector('#email');
const INPUT_PASSWORD = document.querySelector('#password');
const FORM = document.querySelector('#signup-form-box');
const FORM_INPUT = document.querySelectorAll('#signup-form-box input');
const PASSWORD_VIEWS = document.querySelectorAll('.pwd-view');
const PASSWORD_CONFIRM = document.querySelector('.pwd-confirm');

PASSWORD_VIEWS.forEach((target) => {
    target.addEventListener('click', () => {
        moduleSign.passwordSwitch(target);
    });
});

PASSWORD_CONFIRM.addEventListener('keyup', function () {
    moduleSign.passwordConfirm(this);
});
PASSWORD_CONFIRM.addEventListener('focusout', function () {
    moduleSign.passwordConfirm(this);
});

INPUT_EMAIL.addEventListener('focusin', function () {
    moduleSign.errorBoxToggle(this);
});
INPUT_EMAIL.addEventListener('focusout', function () {
    if (this.value == '') {
        moduleSign.errorBoxToggle(this, '이메일을 입력해 주세요.');
    } else {
        moduleSign
            .apiEmailCheck(this.value)
            .then((response) => {
                console.log(response);
                moduleSign.errorBoxToggle(this);
            })
            .catch((error) => {
                console.log(error);
                moduleSign.errorBoxToggle(this, error);
            });
    }
});

INPUT_PASSWORD.addEventListener('focusin', function () {
    moduleSign.errorBoxToggle(this);
});
INPUT_PASSWORD.addEventListener('focusout', function () {
    if (this.value == '') {
        moduleSign.errorBoxToggle(this, '비밀번호를 입력해 주세요.');
    } else if (moduleSign.passwordRoleCheck(this.value)) {
        moduleSign.errorBoxToggle(this, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    }
    // 비밀번호를 둘 다 같게 하고 원본 비밀번호를 수정하는것 방지
    moduleSign.passwordConfirm(PASSWORD_CONFIRM);
});

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const FORM_DATA = {
        email: this['email'].value,
        password: this['password'].value,
    };
    moduleSign
        .apiSignup(FORM_DATA)
        .then((response) => {
            this.action = '/folder';
            this.method = 'post';
            this.submit();
        })
        .catch((error) => {
            // 하나라도 에러가 발생하면 submit 막기
            FORM_INPUT.forEach((el) => {
                // focusout를 하면서 값을 다 비우고 전송하는 것 방지
                el.focus();
                el.blur();
            });
        });
});
