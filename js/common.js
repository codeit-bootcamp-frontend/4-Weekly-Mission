const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function emailValidChk(email) {
    if (EMAIL_PATTERN.test(email) === false) {
        return false;
    } else {
        return true;
    }
}

function errorBoxEnable(el, text) {
    let errorBox = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    errorBox.innerHTML = text;
    errorBox.style.display = 'block';
    el.classList.add('error-box');
}
function errorBoxDisable(el) {
    let errorBox = document.querySelector(`[data-target='${el.getAttribute('id')}']`);
    errorBox.innerHTML = '';
    errorBox.style.display = 'none';
    el.classList.remove('error-box');
}

function pwdSwitch(arg) {
    let check = arg.dataset.check;
    let targetInput = document.querySelector(`#${check}`);
    let eye = arg.querySelector('img');
    if (eye.dataset.onoff == 'off') {
        eye.dataset.onoff = 'on';
        eye.setAttribute('src', '/images/eye-on.png');

        targetInput.setAttribute('type', 'text');
    } else {
        eye.dataset.onoff = 'off';
        eye.setAttribute('src', '/images/eye-off.png');

        targetInput.setAttribute('type', 'password');
    }
}
