const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

// 이메일 형식 체크
function emailValidChk(email) {
    return EMAIL_PATTERN.test(email);
}
// 이벤트 타입에 따른 에러박스 토글
function errorBoxToggle(event, el, text) {
    if (event.type == 'focusin') {
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

export default {
    emailValidChk,
    errorBoxToggle,
    passwordSwitch,
};
