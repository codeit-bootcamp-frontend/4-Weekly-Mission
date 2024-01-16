let pwdView = document.querySelector('.pwd-view');

pwdView.addEventListener('click', function () {
    let target = this.dataset.target;
    let targetInput = document.querySelector(`#${target}`);
    let eye = this.querySelector('img');
    if (eye.dataset.onoff == 'off') {
        eye.dataset.onoff = 'on';
        eye.setAttribute('src', '/images/eye-on.png');

        targetInput.setAttribute('type', 'text');
    } else {
        eye.dataset.onoff = 'off';
        eye.setAttribute('src', '/images/eye-off.png');

        targetInput.setAttribute('type', 'password');
    }
});
