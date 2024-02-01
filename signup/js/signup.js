import * as moduleSign from '/js/module_sign.js';

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
    } else if (moduleSign.emailValidCheck(this.value)) {
        moduleSign.errorBoxToggle(this, '올바른 이메일 주소가 아닙니다.');
    } else if (this.value == moduleSign.LOGIN_INFO.email) {
        moduleSign.errorBoxToggle(this, '이미 사용 중인 이메일입니다.');
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
    // 하나라도 에러가 발생하면 submit 막기
    FORM_INPUT.forEach((el) => {
        // focusout를 하면서 값을 다 비우고 전송하는 것 방지
        el.focus();
        el.blur();

        if (el.classList.contains('error-box')) {
            e.preventDefault();
        }
    });
});
