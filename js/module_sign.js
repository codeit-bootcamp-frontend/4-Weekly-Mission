const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/; // 규칙 : 영문, 숫자 조합 8자 이상 입력해야한다
const LOGIN_INFO = {
    email: 'test@codeit.com',
    password: 'codeit101',
};

// 이메일 형식 체크
function emailValidChk(email) {
    return !EMAIL_PATTERN.test(email);
}
// 비밀번호 생성 규칙 검사
function passwordRoleCheck(value) {
    console.log(value);
    return !PASSWORD_PATTERN.test(value);
}
// 이벤트 타입에 따른 에러박스 토글
// 에러 메시지가 있으면 활성, 없으면 비활성 분기
function errorBoxToggle(el, text) {
    if (!text) {
        errorBoxDisable(el);
    } else {
        errorBoxEnable(el, text);
    }
}
// 에러박스 활성화
function errorBoxEnable(el, text) {
    const ERROR_BOX = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    ERROR_BOX.textContent = text;
    ERROR_BOX.style.display = 'block';
    el.classList.add('error-box');
}
// 에러박스 비활성화
function errorBoxDisable(el) {
    const ERROW_BOX = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    ERROW_BOX.textContent = '';
    ERROW_BOX.style.display = 'none';
    el.classList.remove('error-box');
}

// 비밀번호 view 여부 switch
function passwordSwitch(targetElement) {
    const CHECK = targetElement.dataset.check;
    const TARGET_INPUT = document.querySelector(`#${CHECK}`);
    const EYE = targetElement.querySelector('img');
    if (EYE.dataset.onoff == 'off') {
        EYE.dataset.onoff = 'on';
        EYE.setAttribute('src', '/images/eye-on.png');

        TARGET_INPUT.setAttribute('type', 'text');
    } else {
        EYE.dataset.onoff = 'off';
        EYE.setAttribute('src', '/images/eye-off.png');

        TARGET_INPUT.setAttribute('type', 'password');
    }
}

// 비밀번호 - 비밀번호 확인 값 대조
function passwordConfirm(el) {
    const PASSWORD = document.querySelector('#password');

    if (PASSWORD.value != el.value) {
        errorBoxToggle(el, '비밀번호가 다릅니다');
    } else {
        errorBoxToggle(el);
    }
}

export default {
    emailValidChk,
    errorBoxToggle,
    passwordSwitch,
    passwordConfirm,
    passwordRoleCheck,
    LOGIN_INFO,
};
