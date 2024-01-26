const PWD_VIEW = document.querySelector('.pwd-view');
const INPUT_EMAIL = document.querySelector('#email');
const INPUT_PASSWORD = document.querySelector('#password');
const FORM = document.querySelector('#login-form-box');

PWD_VIEW.addEventListener('click', function () {
    passwordSwitch(this);
});
INPUT_EMAIL.addEventListener('focusin', function () {
    errorBoxDisable(this);
});
INPUT_EMAIL.addEventListener('focusout', function () {
    if (this.value == '') {
        errorBoxEnable(this, '이메일을 입력해 주세요.');
    } else if (!emailValidChk(this.value)) {
        errorBoxEnable(this, '올바른 이메일 주소가 아닙니다.');
    }
});

INPUT_PASSWORD.addEventListener('focusin', function () {
    errorBoxDisable(this);
});
INPUT_PASSWORD.addEventListener('focusout', function () {
    if (this.value == '') {
        errorBoxEnable(this, '비밀번호를 입력해 주세요.');
    }
});

FORM.addEventListener('submit', function (e) {
    const EMAIL = this['email'];
    const PASSWORD = this['password'];

    if (EMAIL.value === 'test@codeit.com' && PASSWORD.value === 'codeit101') {
        this.submit();
    } else {
        e.preventDefault();
        errorBoxEnable(EMAIL, '이메일을 확인해 주세요.');
        errorBoxEnable(PASSWORD, '비밀번호를 확인해 주세요.');
    }
});
