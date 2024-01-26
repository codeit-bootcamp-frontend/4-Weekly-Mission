const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailValidChk(email) {
    return EMAIL_PATTERN.test(email);
}
function errorBoxToggle() {}
function errorBoxEnable(el, text) {
    const ERROR_BOX = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    ERROR_BOX.textContent = text;
    ERROR_BOX.style.display = 'block';
    el.classList.add('error-box');
}
function errorBoxDisable(el) {
    const ERROW_BOX = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    ERROW_BOX.textContent = '';
    ERROW_BOX.style.display = 'none';
    el.classList.remove('error-box');
}

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
