import * as moduleSign from '/js/module_sign.js';

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
    const EMAIL = this['email'];
    const PASSWORD = this['password'];

    // 로그인 정보 대조 후 submit
    if (EMAIL.value === moduleSign.LOGIN_INFO.email && PASSWORD.value === moduleSign.LOGIN_INFO.password) {
        this.submit();
    } else {
        e.preventDefault();
        moduleSign.errorBoxToggle(EMAIL, '이메일을 확인해 주세요.');
        moduleSign.errorBoxToggle(PASSWORD, '비밀번호를 확인해 주세요.');
    }
});
