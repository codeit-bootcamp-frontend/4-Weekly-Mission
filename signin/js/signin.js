import { sign } from '/js/common.js';

const PWD_VIEW = document.querySelector('.pwd-view');
const INPUT_EMAIL = document.querySelector('#email');
const INPUT_PASSWORD = document.querySelector('#password');
const FORM = document.querySelector('#login-form-box');
const LOGIN_INFO = {
    email: 'test@codeit.com',
    password: 'codeit101',
};

PWD_VIEW.addEventListener('click', function () {
    sign.passwordSwitch(this);
});
INPUT_EMAIL.addEventListener('focusin', function (e) {
    sign.errorBoxToggle(e, this);
});
INPUT_EMAIL.addEventListener('focusout', function (e) {
    if (this.value == '') {
        sign.errorBoxToggle(e, this, '이메일을 입력해 주세요.');
    } else if (!sign.emailValidChk(this.value)) {
        sign.errorBoxToggle(e, this, '올바른 이메일 주소가 아닙니다.');
    }
});

INPUT_PASSWORD.addEventListener('focusin', function (e) {
    sign.errorBoxToggle(e, this);
});
INPUT_PASSWORD.addEventListener('focusout', function (e) {
    if (this.value == '') {
        sign.errorBoxToggle(e, this, '비밀번호를 입력해 주세요.');
    }
});

FORM.addEventListener('submit', function (e) {
    const EMAIL = this['email'];
    const PASSWORD = this['password'];

    // 로그인 정보 대조 후 submit
    if (EMAIL.value === LOGIN_INFO.email && PASSWORD.value === LOGIN_INFO.password) {
        this.submit();
    } else {
        e.preventDefault();
        sign.errorBoxToggle(e, EMAIL, '이메일을 확인해 주세요.');
        sign.errorBoxToggle(e, PASSWORD, '비밀번호를 확인해 주세요.');
    }
});
