let pwdViews = document.querySelectorAll('.pwd-view');
let pwdCheck = document.querySelector('.pwd-confirm');

pwdViews.forEach((target) => {
    target.addEventListener('click', () => {
        pwdSwitch(target);
    });
});

pwdCheck.addEventListener('keyup', function () {
    let pwd = document.querySelector('#password');
    let text = document.querySelector('.different-text');

    if (pwd.value != this.value) {
        if (!this.classList.contains('different')) {
            this.classList.add('different');
            text.style.display = 'block';
        }
    } else {
        this.classList.remove('different');
        text.style.display = 'none';
    }
});

function pwdSwitch(arg) {
    let target = arg.dataset.target;
    let targetInput = document.querySelector(`#${target}`);
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
