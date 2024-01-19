const signinEmailInput = document.getElementById("signin-email-input");
const signinEmailErrorMessage = document.querySelector(".signin-email-error");
const signinPasswordInput = document.getElementById("signin-password-input");
const signinPasswordErrorMessage = document.querySelector(".signin-password-error");
const loginBtn = document.querySelector(".login-btn");
const eyeOff = document.querySelector(".eye-off");
const eyeOn = document.querySelector(".eye-on");


let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;


function errorEmail() {
    emailValue = signinEmailInput.value;
    if (emailValue === "") {
        signinEmailErrorMessage.classList.remove('none');
        signinEmailInput.classList.add('error-redline')
    } else if (emailRegex.test(emailValue) !== true) {
        signinEmailErrorMessage.classList.remove('none');
        signinEmailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다."
        signinEmailInput.classList.add('error-redline')
    } else {
        signinEmailErrorMessage.classList.add('none');
        signinEmailInput.classList.remove('error-redline');
    }
}

function errorPassword() {
    passwordValue = signinPasswordInput.value;
    if (passwordValue === "") {
        signinPasswordErrorMessage.classList.remove('none');
        signinPasswordInput.classList.add('error-redline');
    } else {
        signinPasswordErrorMessage.classList.add('none');
        signinPasswordInput.classList.remove('error-redline')
    }
}

function selectLogin() {
    emailValue = signinEmailInput.value;
    passwordValue = signinPasswordInput.value;
    if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
        location.href = "/folder";
    } else {
        signinEmailErrorMessage.classList.remove('none');
        signinEmailErrorMessage.textContent = '이메일을 확인해 주세요.'
        signinPasswordErrorMessage.classList.remove('none');
        signinPasswordErrorMessage.textContent = '비밀번호를 확인해 주세요.'
    }
}

function enterBtn(e) {
    if (e.key === "Enter") {
        selectLogin();
        e.preventDefault();
    }
}

function showPassword() {
    signinPasswordInput.type = "text";
    eyeOff.classList.add('none');
    eyeOn.classList.remove('none');
}

function hidePassword() {
    signinPasswordInput.type = "password";
    eyeOn.classList.add('none');
    eyeOff.classList.remove('none');
}



signinEmailInput.addEventListener("blur", errorEmail);
signinPasswordInput.addEventListener("blur", errorPassword);
loginBtn.addEventListener("click", selectLogin);
window.addEventListener("keypress", enterBtn);
eyeOff.addEventListener("click", showPassword);
eyeOn.addEventListener("click", hidePassword);

