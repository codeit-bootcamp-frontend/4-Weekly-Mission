const loginBtn = document.querySelector('#login-button');
const eyeBtn = document.querySelector('#password-eye-button');

const loginBtnOnclick = () => {
    if(emailInput.value == 'test@codeit.com' && passwordInput.value == 'codeit101') {
        window.location.href = 'folder';
    }
    else {
        warningEmail.textContent = '이메일을 확인해 주세요.';
        warningPassword.textContent = '비밀번호를 확인해 주세요.';
        email.appendChild(warningEmail);
        password.appendChild(warningPassword);
        emailInput.classList.add('warning-input');
        passwordInput.classList.add('warning-input');
    }
}

const loginBtnEnter = (e) => {
    if(e.key == 'Enter') loginBtnOnclick();
}

const eyeBtnOnclick = (e) => {
    if(eyeBtn.getAttribute('visible') == 'false') {
        eyeBtn.setAttribute('visible', 'true');
        const eyeImg = eyeBtn.querySelector('img');
        eyeImg.setAttribute('src', '/images/eye-on.png');
        passwordInput.setAttribute('type', 'text');
    }
    else {
        eyeBtn.setAttribute('visible', 'false');
        const eyeImg = eyeBtn.querySelector('img');
        eyeImg.setAttribute('src', '/images/eye-off.png');
        passwordInput.setAttribute('type', 'password');
    }
}

loginBtn.addEventListener('click', loginBtnOnclick);
document.addEventListener('keyup', loginBtnEnter);
eyeBtn.addEventListener('click', eyeBtnOnclick);
