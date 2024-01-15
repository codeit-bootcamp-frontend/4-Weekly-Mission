let pwdView = document.querySelector('.pwd-view');

pwdView.addEventListener('click', function () {
    let target = this.dataset.target;
    let targetInput = document.querySelector(`#${target}`);
    let eye = this.querySelector('img');
    if (eye.getAttribute('alt') == 'off') {
        eye.setAttribute('alt', 'on');
        eye.setAttribute('src', '/images/eye-on.png');

        targetInput.setAttribute('type', 'text');
    } else {
        eye.setAttribute('alt', 'off');
        eye.setAttribute('src', '/images/eye-off.png');

        targetInput.setAttribute('type', 'password');
    }
});
