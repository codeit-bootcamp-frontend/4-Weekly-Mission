import { viewWarningText, hiddenWarningText, checkEmail, checkPassword, visiblePassword} from "./login.js"

const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

const emailWarningText = document.querySelector('#email-warning-text');
const passwordWarningText = document.querySelector('#password-warning-text')

const loginBtn = document.querySelector('#login-button');
const eyeBtn = document.querySelector('#password-eye-button');

const loginBtnOnclick = () => {
    if(emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
        window.location.href = './folder';
    }
    else {
        viewWarningText(emailWarningText, '이메일을 확인해 주세요.');
        viewWarningText(passwordWarningText, '비밀번호를 확인해 주세요.');
    }
}

const loginBtnEnter = (e) => {
    if(e.key === 'Enter') {
        loginBtnOnclick();
        e.target.blur();
    }
}

const emailInputFocustIn = () => {
    hiddenWarningText(emailWarningText);
}

const emailInputFocustOut = (e) => {
    const status = checkEmail(e.target.value);
    if(status === 0) viewWarningText(emailWarningText, "이메일을 입력해주세요.");
    else if(status === 1) viewWarningText(emailWarningText, "올바른 이메일 주소가 아닙니다.");
    else if(status === 2) hiddenWarningText(emailWarningText);
}

const passwordInputFocustIn = () => {
    hiddenWarningText(passwordWarningText);
}

const passwordInputFocusOut = (e) => {
    const status = checkPassword(e.target.value);
    if(status === 0) viewWarningText(passwordWarningText, "비밀번호를  입력해주세요");
    else if(status === 2) hiddenWarningText(passwordWarningText);
}

const eyeBtnOnclick = () => {
    visiblePassword(eyeBtn);
}

emailInput.addEventListener('focusout', emailInputFocustOut);
emailInput.addEventListener('focusin', emailInputFocustIn);
passwordInput.addEventListener('focusout', passwordInputFocusOut);
passwordInput.addEventListener('focusin', passwordInputFocustIn);
loginBtn.addEventListener('click', loginBtnOnclick);
document.addEventListener('keyup', loginBtnEnter);
eyeBtn.addEventListener('click', eyeBtnOnclick);
