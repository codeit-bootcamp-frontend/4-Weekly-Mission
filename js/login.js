const emailInput = document.querySelector('#email-input');
const email = document.querySelector('#email');
const passwordInput = document.querySelector('#password-input');
const password = document.querySelector('#password');


let warningEmail = document.createElement('p');
let warningPassword = document.createElement('p');
warningEmail.setAttribute('class', 'warning-text');
warningPassword.setAttribute('class', 'warning-text');

const emailFocusOut = (e) => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if(e.target.value == '') {
        warningEmail.textContent ='이메일을 입력해주세요';
        email.appendChild(warningEmail);
        emailInput.classList.add('warning-input');
    }

    else if(!regex.test(e.target.value)) {
        warningEmail.textContent ='올바른 이메일 주소가 아닙니다.';
        email.appendChild(warningEmail);
        emailInput.classList.add('warning-input');
    }
    else {
        if(email.querySelector('.warning-text'))email.removeChild(warningEmail);
        emailInput.classList.remove('warning-input');
    }
}

const emailFocusIn = () => {
    if(email.querySelector('.warning-text')) email.removeChild(warningEmail);
}

const passwordFocusOut = (e) => {
    if(e.target.value == '') {
        warningPassword.textContent = '비밀번호를 입력해주세요.';
        password.appendChild(warningPassword);
        passwordInput.classList.add('warning-input');
    }
    else passwordInput.classList.remove('warning-input');
}

const passwordFocusIn = () => {
    if(password.querySelector('.warning-text')) password.removeChild(warningPassword);
}

emailInput.addEventListener('focusout', emailFocusOut);
emailInput.addEventListener('focusin', emailFocusIn);
passwordInput.addEventListener('focusout', passwordFocusOut);
passwordInput.addEventListener('focusin', passwordFocusIn);