const PWD_VIEWS = document.querySelectorAll('.pwd-view');
const PWD_CHECK = document.querySelector('.pwd-confirm');

PWD_VIEWS.forEach((target) => {
    target.addEventListener('click', () => {
        passwordSwitch(target);
    });
});
/*
PWD_CHECK.addEventListener('keyup', function () {
    let pwd = document.querySelector('#password');
    let text = document.querySelector('.error-text');

    if (pwd.value != this.value) {
        if (!this.classList.contains('error-box')) {
            this.classList.add('error-box');
            text.innerHTML = '비밀번호가 다릅니다.';
            text.style.display = 'block';
        }
    } else {
        this.classList.remove('error-box');
        text.innerHTML = '';
        text.style.display = 'none';
    }
});
*/
