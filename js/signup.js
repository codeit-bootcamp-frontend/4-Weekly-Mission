import { viewWarningText, hiddenWarningText,  checkEmail, checkPassword, visiblePassword} from "./login.js";

const emailInput = document.querySelector('#email-input');
const emailWarningText = document.querySelector('#email-warning-text');
const passwordInput = document.querySelector('#password-input')
const passwordCheckInput = document.querySelector('#password-check-input')
const password = document.querySelector('#password');
const eyeBtn = document.querySelector('#password-eye-button');
const eyeBtnCheck = document.querySelector('#password-check-eye-button');
const signupBtn = document.querySelector('#signup-button');

const isVailed = [false, false, false];

const checkPasswordType = (value) => {
    const regex1 = new RegExp('^[0-9]*$');
    const regex2 = new RegExp('^[a-zA-Z]*$');
    if(value.length < 8) return false;
    if(regex1.test(value)) return false;
    if(regex2.test(value)) return false;

    return true
}

const emailInputFocustOut = (target) => {
    if(target.value === 'test@codeit.com') {
        viewWarningText(emailWarningText, "이미 사용 중인 이메일입니다.");
        isVailed[0] = false;
        return
    }
    
    const status = checkEmail(target.value);
    if(status === 0) { 
        viewWarningText(emailWarningText, "이메일을 입력해주세요.");
        isVailed[0] = false;
        return
    }
    
    if(status === 1) {
        viewWarningText(emailWarningText, "올바른 이메일 주소가 아닙니다.");
        isVailed[0] = false;
        return
    }
    isVailed[0]  = true
}

const emailInputFocustIn = () => {
    hiddenWarningText(emailWarningText);
}

const passwordInputFocusOut = (target) => {
    const type = (target.id === 'password-input') ? 1 : 2;
    const textTarget = target.parentNode.parentNode.querySelector('.warning-text');
    const passwordInput = document.querySelector('#password-input');
    if(checkPassword(target.value) === 0) {
        viewWarningText(textTarget, "비밀번호를 입력해주세요.");
        isVailed[type] = false;
        return
    }
    
    if(!checkPasswordType(target.value)) {
        viewWarningText(textTarget, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
        isVailed[type] = false;
        return
    }

    if(type === 2 && passwordInput.value !== target.value) {
        viewWarningText(textTarget, "비밀번호가 일치하지 않아요");
        isVailed[type] = false;
        return
    }
    isVailed[type] = true;
}

const passwordInputFocustIn = (target) => {
    const textTarget = target.parentNode.parentNode.querySelector('.warning-text');
    hiddenWarningText(textTarget);
}

const eyeBtnOnclick = (target) => {
    visiblePassword(target);
}

const signupBtnOnclick = () => {
    emailInputFocustOut(emailInput);
    passwordInputFocusOut(passwordInput);
    passwordInputFocusOut(passwordCheckInput);
    for(let flag of isVailed) {
        if(!flag) return
    }
    console.log(isVailed)
    window.location.href = './folder';
}

const signupBtnEnter = (e) => {
    if(e.key === 'Enter') {
        e.target.blur();
        signupBtnOnclick();
    }
}

emailInput.addEventListener('focusout', () => emailInputFocustOut(emailInput));
emailInput.addEventListener('focusin', emailInputFocustIn);
password.addEventListener('focusout', (e) => passwordInputFocusOut(e.target));
password.addEventListener('focusin', (e) => passwordInputFocustIn(e.target));
eyeBtn.addEventListener('click', () => eyeBtnOnclick(eyeBtn));
eyeBtnCheck.addEventListener('click', () => eyeBtnOnclick(eyeBtnCheck));
signupBtn.addEventListener('click', signupBtnOnclick);
document.addEventListener('keyup', signupBtnEnter);